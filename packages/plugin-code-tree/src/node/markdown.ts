import type { PluginWithOptions } from 'markdown-it'
import type { MarkdownEnv } from 'vitepress'
import type { CodeTreeData, CodeTreeFile, CodeTreePluginOptions } from './types.js'
import fs from 'node:fs'
import path from 'node:path'
import { removeLeadingSlash } from '@pengzhanbo/utils'
import ansis from 'ansis'
import { globSync } from 'tinyglobby'
import {
  createContainerPlugin,
  createEmbedRuleBlock,
  getVitepressConfig,
  parseRect,
  resolveAttrs,
  stringifyAttrs,
} from 'vitepress-plugin-toolkit'
import { initLoaders } from './loader.js'
import { logger } from './logger.js'

/**
 * File tree node used to build the sidebar structure.
 *
 * 用于构建侧边栏结构的文件树节点。
 *
 * Parsed from an array of file paths, where each path segment becomes a node.
 * Folders have `children` populated, while files have `filepath` set.
 *
 * 从文件路径数组解析而来，每个路径段对应一个节点。
 * 文件夹节点的 `children` 会被填充，文件节点则会设置 `filepath`。
 */
interface FileTreeNode {
  /** Nesting depth level, starting from 1 at the root's direct children. / 嵌套深度层级，根节点的直接子节点为 1。 */
  level: number
  /** Child nodes, only populated for folder nodes. / 子节点数组，仅文件夹节点会有子节点。 */
  children?: FileTreeNode[]
  /** Display name of the file or folder. / 文件或文件夹的显示名称。 */
  filename: string
  /** Full file path relative to the embedded directory, only set for file nodes. / 相对于嵌入目录的完整文件路径，仅文件节点会设置。 */
  filepath?: string
}

/**
 * Regular expression to extract the filename from a fence info string.
 *
 * Matches the `[filename]` syntax used in fenced code blocks inside a
 * code-tree container to declare the file path.
 *
 * 用于从围栏代码块信息字符串中提取文件名的正则表达式。
 *
 * 匹配在代码树容器内的围栏代码块中使用的 `[文件名]` 语法，用于声明文件路径。
 *
 * @example
 * ```ts
 * RE_CODE_TREE_TITLE.exec('ts [src/index.ts]') // → ['[src/index.ts]', 'src/index.ts']
 * ```
 */
const RE_CODE_TREE_TITLE = /\[([^\]]*)\]/

/**
 * markdown-it plugin that registers the code tree block rule.
 *
 * 注册代码树块规则的 markdown-it 插件。
 *
 * Supports two syntaxes:
 * - Container syntax: `::: code-tree` blocks with fenced code blocks inside,
 *   where each fence declares a filename via `[filename]` in its info string.
 * - Embed syntax: `@[code-tree](dir)` to load and render all files in a
 *   directory, using file loaders to convert each file to markdown content.
 *
 * The plugin converts the parsed file structure into a `<VPCodeTree>` component
 * with a nested file tree sidebar (rendered via `<VPFileTreeNode>`) and file
 * content panels. The `:active` marker can be added to a fence's info string
 * to set the default active file.
 *
 * 支持两种语法：
 * - 容器语法：`::: code-tree` 块，其中包含围栏代码块，每个围栏通过信息字符串中的
 *   `[文件名]` 声明文件路径。
 * - 嵌入语法：`@[code-tree](dir)` 加载并渲染目录中的所有文件，使用文件加载器
 *   将每个文件转换为 markdown 内容。
 *
 * 该插件将解析后的文件结构转换为 `<VPCodeTree>` 组件，包含嵌套的文件树侧边栏
 * （通过 `<VPFileTreeNode>` 渲染）和文件内容面板。可以在围栏信息字符串中添加
 * `:active` 标记来设置默认激活的文件。
 *
 * @param md - The markdown-it instance / markdown-it 实例
 * @param options - Plugin options / 插件配置项
 *
 * @example
 * `.vitepress/config.ts`
 * ```ts
 * import { defineConfig } from 'vitepress'
 * import { codeTreeMarkdownPlugin } from 'vitepress-plugin-code-tree'
 * export default defineConfig({
 *   markdown: {
 *     config: (md) => {
 *       md.use(codeTreeMarkdownPlugin)
 *     },
 *   },
 * })
 * ```
 */
export const codeTreeMarkdownPlugin: PluginWithOptions<CodeTreePluginOptions> = (md, options = {}) => {
  const loaders = initLoaders(options.loaders)

  // Register the @[code-tree](dir) embed rule
  createEmbedRuleBlock(md, {
    type: 'code-tree',
    meta: (info, dir) => ({ dir, ...resolveAttrs<CodeTreeData>(info) }),
    content: ({ title, dir, entry, height, showSidebar }, env) => {
      const targetDir = resolveCodeTreeDir(dir, env)

      if (!fs.existsSync(targetDir)) {
        logger.warn(`Invalid code-tree target directory ${ansis.yellow(dir)}, in ${ansis.gray(env.relativePath)}`)
        return `<p>@[code-tree](${dir}) <em>Invalid target directory</em></p>`
      }

      const files = loadFiles(targetDir, options.ignores)
      const nodes = parseFileNodes(files)
      // Load each file's content via the configured loaders
      const content = files.map((file) => {
        const extname = path.extname(file).slice(1)
        const basename = path.basename(file)
        const absolutePath = path.join(targetDir, file)
        const relativePath = path.relative(path.dirname(env.path), absolutePath)
        const item: CodeTreeFile = { path: file, absolutePath, relativePath, extname, basename }
        // Track included files for VitePress HMR
        env.includes ??= []
        env.includes.push(absolutePath)
        for (const { filter, matcher, load } of loaders) {
          if (filter?.(item) ?? matcher?.(file))
            return load(item)
        }
        return ''
      }).filter(Boolean).join('\n')
      entry ||= files[0]
      height ||= String(options.height || '')
      height = height ? parseRect(height) : undefined
      return `<VPCodeTree${stringifyAttrs({ title, height, entryFile: entry, showSidebar })}><template #file-tree>${renderFileTree(nodes)}</template>${md.render(content, {
        ...env,
        __IS_CODE_TREE__: true,
      })}</VPCodeTree>`
    },
  })

  // Register ::: code-tree container
  createContainerPlugin(md, 'code-tree', {
    before: (info, tokens, index) => {
      // Collect filenames and active file from fenced code blocks inside the container
      const files: string[] = []
      let activeFile: string | undefined
      for (let i = index + 1; !(tokens[i].nesting === -1 && tokens[i].type === 'container_code-tree_close'); i++) {
        const token = tokens[i]
        if (token.type === 'fence' && token.tag === 'code') {
          const fenceInfo = md.utils.unescapeAll(token.info)
          const title = fenceInfo.match(RE_CODE_TREE_TITLE)?.[1]
          if (title) {
            files.push(title)
            ;(token as any).__IS_CODE_TREE__ = true
            if (fenceInfo.includes(':active'))
              activeFile = title
          }
        }
      }

      const { title, height, entry, showSidebar } = resolveAttrs<CodeTreeData>(info)
      const fileTreeNodes = parseFileNodes(files)
      const entryFile = activeFile || entry || files[0]
      const h = height || String(options.height)
      return `<VPCodeTree${stringifyAttrs({ title, entryFile, height: h ? parseRect(h) : undefined, showSidebar })}><template #file-tree>${renderFileTree(fileTreeNodes)}</template>`
    },
    after: () => '</VPCodeTree>',
  })

  // Override the fence renderer to inject `data-filepath` on code blocks
  // inside a code-tree, so the client can toggle visibility by active file.
  const rawFence = md.renderer.rules.fence!
  md.renderer.rules.fence = (...args) => {
    const [tokens, idx, _, env] = args
    const token = tokens[idx]
    const isOnCodeTree = env.__IS_CODE_TREE__ || (token as any).__IS_CODE_TREE__
    if (!isOnCodeTree)
      return rawFence(...args)
    const info = token.info
    const title = info.match(RE_CODE_TREE_TITLE)?.[1]
    if (!title)
      return rawFence(...args)
    return rawFence(...args).replace('<div', `<div data-filepath="${md.utils.escapeHtml(title)}"`)
  }
}

/**
 * Recursively render file tree nodes into nested `<VPFileTreeNode>` markup.
 *
 * 递归地将文件树节点渲染为嵌套的 `<VPFileTreeNode>` 标记。
 *
 * Each node is rendered as a `<VPFileTreeNode>` component with props for
 * `filename`, `level`, `type` (folder/file), `expanded` state, and `filepath`.
 * Folder nodes recurse into their children to build the nested structure.
 *
 * 每个节点被渲染为一个 `<VPFileTreeNode>` 组件，包含 `filename`、`level`、
 * `type`（文件夹/文件）、`expanded` 状态和 `filepath` 等属性。
 * 文件夹节点会递归其子节点以构建嵌套结构。
 *
 * @param nodes - File tree nodes to render / 要渲染的文件树节点数组
 * @returns Rendered HTML string of nested nodes / 嵌套节点的 HTML 字符串
 */
function renderFileTree(nodes?: FileTreeNode[]): string {
  if (!nodes?.length)
    return ''
  return nodes.map((node) => {
    const props = {
      filename: node.filename,
      level: node.level,
      type: node.children?.length ? 'folder' : 'file',
      expanded: true,
      filepath: node.filepath,
    }
    return `<VPFileTreeNode${stringifyAttrs(props, false, ['filename', 'filepath'])}>${renderFileTree(node.children)}</VPFileTreeNode>`
  }).join('\n')
}

/**
 * Parse file paths to file tree node structure.
 *
 * 将文件路径数组解析为文件树节点结构。
 *
 * Each path is split by `/`, and each segment becomes a node in the tree.
 * Duplicate path segments (e.g. shared parent directories) are merged, so
 * `['src/a.ts', 'src/b.ts']` produces a single `src` folder with two files.
 *
 * 每个路径按 `/` 分割，每一段成为树中的一个节点。
 * 重复的路径段（如共享的父目录）会被合并，因此 `['src/a.ts', 'src/b.ts']`
 * 会生成一个包含两个文件的 `src` 文件夹。
 *
 * @param files - File path array / 文件路径数组
 * @returns File tree node array / 文件树节点数组
 */
function parseFileNodes(files: string[]): FileTreeNode[] {
  const nodes: FileTreeNode[] = []
  for (const file of files) {
    const parts = removeLeadingSlash(file).split('/')
    let node = nodes
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i]
      const isFile = i === parts.length - 1
      let child = node.find(n => n.filename === part)
      if (!child) {
        child = {
          level: i + 1,
          filename: part,
          filepath: isFile ? file : undefined,
          children: isFile ? undefined : [],
        }
        node.push(child)
      }
      if (!isFile && child.children)
        node = child.children
    }
  }

  return nodes
}

/**
 * Resolve the target directory for the embed syntax based on its prefix.
 *
 * 根据前缀解析嵌入语法的目标目录。
 *
 * Supports three path prefixes:
 * - `@`: Relative to VitePress `srcDir` / 相对于 VitePress `srcDir`
 * - `/`: Relative to VitePress project root / 相对于 VitePress 项目根目录
 * - (none): Relative to the current markdown file's directory / 相对于当前 markdown 文件所在目录
 *
 * @param dir - The directory path from the embed syntax / 嵌入语法中的目录路径
 * @param env - The markdown-it environment / markdown-it 环境
 * @returns Absolute path to the resolved directory / 解析后的目录绝对路径
 */
function resolveCodeTreeDir(dir: string, env: MarkdownEnv) {
  const config = getVitepressConfig()
  if (dir[0] === '@')
    return path.join(config.srcDir, dir.slice(1))

  if (dir[0] === '/')
    return path.join(config.root, dir.slice(1))

  const dirname = path.dirname(env.path)
  return path.join(dirname, dir)
}

/**
 * Load all files from a directory, sorted by depth (deepest first).
 *
 * 从目录加载所有文件，按深度排序（最深的在前）。
 *
 * Hidden files (dotfiles) are included. `node_modules` and `.DS_Store` are
 * always ignored, plus any additional glob patterns passed via `ignores`.
 * The depth-first sort ensures files are grouped by their parent directories
 * when building the file tree structure.
 *
 * 包含隐藏文件（以点开头的文件）。`node_modules` 和 `.DS_Store` 始终被忽略，
 * 此外还会忽略通过 `ignores` 传入的额外 glob 模式。深度优先排序确保在构建
 * 文件树结构时，文件能按其父目录分组。
 *
 * @param cwd - The directory to scan / 要扫描的目录
 * @param ignores - Additional glob patterns to ignore / 额外忽略的 glob 模式
 * @returns Array of file paths relative to `cwd` / 相对于 `cwd` 的文件路径数组
 */
function loadFiles(cwd: string, ignores: string[] = []): string[] {
  return globSync('**/*', {
    cwd,
    ignore: ['**/node_modules**', '**/.DS_Store', ...ignores],
    onlyFiles: true,
    dot: true,
  }).sort((a, b) => {
    const al = a.split('/').length
    const bl = b.split('/').length
    return bl - al
  })
}
