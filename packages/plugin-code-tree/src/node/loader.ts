import type { CodeTreeFile, CodeTreeFileLoader } from './types.js'
import fs from 'node:fs'
import path from 'node:path'
import { ensureLeadingSlash, escape, isFunction, slash } from '@pengzhanbo/utils'
import { bundledLanguagesInfo } from 'shiki'
import { createMatcher, EXTENSION_IMAGES, getVitepressConfig } from 'vitepress-plugin-toolkit'

/**
 * File extensions supported by Shiki for syntax highlighting.
 *
 * Shiki 支持语法高亮的文件扩展名列表。
 *
 * Includes both language IDs and their aliases, used to determine whether a
 * file can be rendered as a fenced code block with syntax highlighting.
 *
 * 包含语言 ID 及其别名，用于判断文件是否可以作为带语法高亮的围栏代码块渲染。
 */
const supportedTextExts = bundledLanguagesInfo
  .map(({ id, aliases = [] }) => [id, ...aliases])
  .flat()

/** Six backticks, used as the fence delimiter for code blocks. / 六个反引号，用作代码块的围栏分隔符。 */
const FENCE = '`'.repeat(6)

/**
 * Generate a fenced code block string for a file.
 *
 * 为文件生成围栏代码块字符串。
 *
 * Uses six backticks as the fence delimiter to avoid conflicts with the
 * standard three-backtick fences. The filename is included in the info
 * string via the `[filename]` syntax so the code-tree can identify it.
 *
 * 使用六个反引号作为围栏分隔符，以避免与标准的三反引号围栏冲突。
 * 文件名通过 `[文件名]` 语法包含在信息字符串中，以便代码树识别。
 *
 * @param file - The file descriptor / 文件描述符
 * @param lang - Optional language override / 可选的语言覆盖
 * @returns Fenced code block string / 围栏代码块字符串
 */
export const loadCodeContent = (file: CodeTreeFile, lang?: string) => `${FENCE}${lang ?? file.extname} [${file.path}]\n${fs.readFileSync(file.absolutePath, 'utf-8').trim()}\n${FENCE}`

/**
 * Built-in file loaders used by the embed syntax.
 *
 * 嵌入语法使用的内置文件加载器。
 *
 * These loaders handle common file types and are merged after user-provided
 * loaders, so custom loaders take precedence. The built-in loaders cover:
 *
 * - `.editorconfig`: Rendered as TOML
 * - Dot files (`.git*`, `.env*`, `.*ignore`, `.npmrc`): Rendered as plain text
 * - `.XXXrc` config files (e.g. `.eslintrc`): Rendered as JSON
 * - Image files: Rendered as `<img>` tags with proper `src` resolution
 * - Source files supported by Shiki: Rendered as fenced code blocks
 *
 * 这些加载器处理常见文件类型，并合并到用户提供的加载器之后，因此自定义加载器具有更高优先级。
 * 内置加载器覆盖：
 *
 * - `.editorconfig`：以 TOML 格式渲染
 * - 点文件（`.git*`、`.env*`、`.*ignore`、`.npmrc`）：以纯文本渲染
 * - `.XXXrc` 配置文件（如 `.eslintrc`）：以 JSON 格式渲染
 * - 图片文件：渲染为 `<img>` 标签，并正确解析 `src`
 * - Shiki 支持的源文件：渲染为围栏代码块
 */
const defaultLoader: CodeTreeFileLoader[] = [
  {
    filter: ({ basename }) => basename === '.editorconfig',
    load: file => loadCodeContent(file, 'toml'),
  },
  // Load dot files / 加载点文件
  {
    filter: ['.git*', '.env*', '.*ignore', '.npmrc'].map(item => `**/${item}`),
    load: file => loadCodeContent(file, 'txt'),
  },
  // .XXXrc config files (e.g. .eslintrc), typically treated as JSON
  // .XXXrc 格式的配置文件，比如 .eslintrc， 此类文件通常被当做 json 处理
  {
    filter: ({ basename }) => basename[0] === '.' && basename.endsWith('rc'),
    load: file => loadCodeContent(file, 'json'),
  },
  // Image files / 图片文件
  {
    filter: ({ extname }) => EXTENSION_IMAGES.includes(extname),
    load: (file) => {
      const config = getVitepressConfig()
      const publicDir = path.join(config.srcDir, 'public/')
      // Resolve image src: use public path if in public dir, otherwise relative path
      const src = file.absolutePath.startsWith(publicDir) ? ensureLeadingSlash(file.absolutePath.replace(publicDir, '')) : file.relativePath
      return `<img src="${escape(slash(src))}" alt="${escape(file.basename)}" data-filepath="${escape(file.path)}">`
    },
  },
  // Known file types supported by Shiki syntax highlighting
  // 已知的能被 shiki 语法高亮的文件类型
  {
    filter: ({ extname }) => supportedTextExts.includes(extname),
    load: loadCodeContent,
  },
]

/**
 * Initialize loaders by merging user-provided loaders with built-in defaults.
 *
 * 通过合并用户提供的加载器和内置默认加载器来初始化加载器。
 *
 * User loaders are placed before built-in loaders so they take precedence.
 * Each loader's `filter` is normalized into either a `filter` function or a
 * `matcher` (glob matcher), depending on whether it was provided as a
 * function or a string pattern.
 *
 * 用户加载器位于内置加载器之前，因此具有更高优先级。
 * 每个加载器的 `filter` 会被标准化为 `filter` 函数或 `matcher`（glob 匹配器），
 * 取决于它是以函数还是字符串模式提供。
 *
 * @param loaders - User-provided loaders / 用户提供的加载器
 * @returns Merged and normalized loaders / 合并并标准化后的加载器
 */
export function initLoaders(loaders?: CodeTreeFileLoader[]) {
  return [...loaders || [], ...defaultLoader].map(item => ({
    filter: isFunction(item.filter) ? item.filter : undefined,
    matcher: !isFunction(item.filter) ? createMatcher(item.filter) : undefined,
    load: item.load,
  }))
}
