import type { FilesResult } from './types'
import path from 'node:path'
import { partition, removeLeadingSlash, slash } from '@pengzhanbo/utils'
import { globSync } from 'tinyglobby'
import { getLocaleWithPath, getVitepressConfig } from 'vitepress-plugin-toolkit'

/**
 * Collect all markdown files under the VitePress source directory.
 *
 * 收集 VitePress 源目录下的所有 markdown 文件。
 *
 * 通过 `getVitepressConfig()` 读取 VitePress 配置获取 `srcDir`，使用 glob
 * 扫描所有 `.md` 文件（忽略 `dist`、`node_modules`、`.vitepress`），并按目录深度
 * 从浅到深排序，便于后续链接解析优先匹配浅层文件。
 *
 * @example
 * ```ts
 * import { loadFiles } from 'vitepress-plugin-obsidian'
 *
 * const { root, files } = loadFiles()
 * console.log(root, files.length)
 * ```
 *
 * @returns Collected root path and sorted file list / 收集到的根路径与排序后的文件列表
 */
export function loadFiles(): FilesResult {
  const config = getVitepressConfig()

  const files = globSync('**/*.md', {
    cwd: config.srcDir,
    ignore: ['dist', 'node_modules', '.vitepress'],
    onlyFiles: true,
  }).sort((a, b) => {
    const al = a.split('/').length
    const bl = b.split('/').length
    return al - bl
  })

  return { root: config.srcDir, files }
}

/**
 * Find the first markdown file matching the given filename, preferring files
 * that share the same locale as `currentPath`.
 *
 * 查找第一个匹配给定文件名的 markdown 文件，优先选择与 `currentPath` 同语言的文件。
 *
 * 解析逻辑：
 * 1. 以 `currentPath` 所在目录为基准，将相对路径（以 `.` 开头）拼接为绝对候选路径；
 *    否则去掉 `filename` 的前导斜杠后直接作为候选路径。
 * 2. 若候选路径以 `/` 结尾，视为目录并追加 `index.md`；若无扩展名，追加 `.md`。
 * 3. 通过 `getLocaleWithPath` 获取 `currentPath` 的语言前缀，将文件列表按是否属于
 *    该语言分为两组，同语言组在前，从而优先匹配同语言文件。
 * 4. 返回第一个与候选路径完全相等或以其结尾的文件路径；未命中返回 `undefined`。
 *
 * @example
 * ```ts
 * import { findFirstFile } from 'vitepress-plugin-obsidian'
 *
 * const page = findFirstFile(files, 'zh/guide/index.md', 'guide')
 * // => 'zh/guide/index.md'
 * ```
 *
 * @param files - Sorted markdown file paths relative to the source root / 相对于源根目录排序后的 markdown 文件路径列表
 * @param currentPath - Path of the current markdown file being rendered / 当前正在渲染的 markdown 文件路径
 * @param filename - Filename or path fragment to match / 待匹配的文件名或路径片段
 * @returns Matched file path relative to the source root, or `undefined` / 相对于源根目录的匹配文件路径，未命中返回 `undefined`
 */
export function findFirstFile(
  files: string[],
  currentPath: string,
  filename: string,
): string | undefined {
  const dirname = path.dirname(currentPath)
  let filepath = slash(filename[0] === '.'
    ? path.join(dirname, filename)
    : removeLeadingSlash(filename))
  filepath = filepath.slice(-1) === '/' ? `${filepath}index.md` : filepath
  filepath = path.extname(filepath) ? filepath : `${filepath}.md`
  const locale = removeLeadingSlash(getLocaleWithPath(currentPath).locale)
  // 提取同语言文件到头部
  const [lefts, rights] = partition(files, file => file.startsWith(locale))
  return [...lefts, ...rights].find(pagePath => pagePath === filepath || pagePath.endsWith(filepath))
}
