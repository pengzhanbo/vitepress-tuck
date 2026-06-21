/**
 * Code tree container metadata parsed from the markdown syntax.
 *
 * 从 markdown 语法中解析出的代码树容器元数据。
 *
 * These attributes are extracted from the container info string or the embed
 * syntax meta, and control the rendering behavior of the `<VPCodeTree>` component.
 *
 * 这些属性从容器信息字符串或嵌入语法的 meta 中解析，用于控制 `<VPCodeTree>` 组件的渲染行为。
 *
 * @example
 * ```md
 * ::: code-tree title="Project" height="500px" entry="index.ts" show-sidebar=true
 * :::
 * ```
 */
export interface CodeTreeData {
  /**
   * Code tree title displayed above the content.
   *
   * 显示在代码树内容上方的标题。
   */
  title?: string

  /**
   * Code tree container height.
   *
   * 代码树容器高度。
   *
   * Accepts any valid CSS height value (e.g. `'420px'`, `'50vh'`).
   *
   * 接受任意合法的 CSS 高度值（如 `'420px'`、`'50vh'`）。
   */
  height?: string

  /**
   * Entry file, opened by default.
   *
   * 入口文件，默认打开。
   */
  entry?: string

  /**
   * Show sidebar by default.
   *
   * 是否默认显示侧边栏。
   *
   * @default false
   */
  showSidebar?: boolean
}

/**
 * Options for the `vitepress-plugin-code-tree` plugin.
 *
 * `vitepress-plugin-code-tree` 插件的配置项。
 *
 * @example
 * ```ts
 * import codeTree from 'vitepress-plugin-code-tree'
 * import { defineConfig } from 'vitepress-tuck'
 * export default defineConfig({
 *   plugins: [
 *     codeTree({
 *       height: '500px',
 *       ignores: ['**\/*.test.ts'],
 *       loaders: [
 *         {
 *           filter: ['**\/*.md'],
 *           load: (file) => {
 *             return { content: fs.readFileSync(file.absolutePath, 'utf-8'), lang: 'md' }
 *           },
 *         },
 *       ],
 *     }),
 *   ],
 * })
 * ```
 */
export interface CodeTreePluginOptions {
  /**
   * Code tree container height.
   *
   * 代码树容器高度。
   *
   * Used as the default height when the `height` attribute is not specified
   * on a code-tree container or embed syntax.
   *
   * 当容器或嵌入语法中未指定 `height` 属性时，使用此值作为默认高度。
   *
   * @default '420px'
   */
  height?: string | number

  /**
   * File loaders.
   *
   * When using `@[code-tree]( dir)` to embed a resource directory, it is used to load resource files.
   *
   * 资源文件加载器
   *
   * 使用 `@[code-tree]( dir)` 嵌入资源目录时，用于加载资源文件
   *
   * Custom loaders are merged before the built-in loaders, so they take
   * precedence. Each loader declares a `filter` (glob pattern or predicate)
   * and a `load` function that returns markdown content for matching files.
   *
   * 自定义加载器会合并到内置加载器之前，因此具有更高优先级。
   * 每个加载器声明一个 `filter`（glob 模式或断言函数）和一个 `load` 函数，
   * 后者为匹配的文件返回 markdown 内容。
   *
   * @example
   * ```ts
   * loaders: [
   *   {
   *     filter: ['**\/*.md'],
   *     load: (file) => {
   *       return { content: fs.readFileSync(file.path, 'utf-8'), lang: 'md' }
   *     },
   *   },
   * ],
   * ```
   *
   * @default []
   */
  loaders?: CodeTreeFileLoader[]

  /**
   * Glob path patterns to ignore files.
   *
   * 忽略文件的 glob 路径模式
   *
   * Applied when loading files from a directory via the embed syntax.
   * `node_modules` and `.DS_Store` are always ignored.
   *
   * 在通过嵌入语法从目录加载文件时生效。
   * `node_modules` 和 `.DS_Store` 始终会被忽略。
   */
  ignores?: string[]
}

/**
 * File descriptor used by loaders when processing embedded directories.
 *
 * 文件描述符，在处理嵌入目录时由加载器使用。
 *
 * @example
 * ```ts
 * const file: CodeTreeFile = {
 *   path: 'src/index.ts',
 *   absolutePath: '/project/src/index.ts',
 *   relativePath: '../src/index.ts',
 *   extname: 'ts',
 *   basename: 'index.ts',
 * }
 * ```
 */
export interface CodeTreeFile {
  /** Path relative to the embedded directory. / 相对于嵌入目录的路径。 */
  path: string
  /** Absolute path on the filesystem. / 文件系统上的绝对路径。 */
  absolutePath: string
  /** Path relative to the current markdown file. / 相对于当前 markdown 文件的路径。 */
  relativePath: string
  /** File extension without the leading dot. / 文件扩展名（不含前导点）。 */
  extname: string
  /** File name including extension. / 包含扩展名的文件名。 */
  basename: string
}

/**
 * Custom file loader for the embed syntax.
 *
 * 嵌入语法的自定义文件加载器。
 *
 * Each loader declares a filter (glob pattern, array of patterns, or predicate
 * function) and a `load` function that returns markdown content for matching files.
 *
 * 每个加载器声明一个 filter（glob 模式、模式数组或断言函数）和一个 `load` 函数，
 * 后者为匹配的文件返回 markdown 内容。
 *
 * @example
 * ```ts
 * const loader: CodeTreeFileLoader = {
 *   filter: ['**\/*.md'],
 *   load: (file) => `\`\`\`md [${file.path}]\n${fs.readFileSync(file.absolutePath, 'utf-8')}\n\`\`\``,
 * }
 * ```
 */
export interface CodeTreeFileLoader {
  /**
   * Filter that determines which files this loader handles.
   *
   * 决定该加载器处理哪些文件的过滤器。
   *
   * - `string`: A glob pattern / glob 模式
   * - `string[]`: Multiple glob patterns / 多个 glob 模式
   * - `function`: A predicate receiving a `CodeTreeFile` / 接收 `CodeTreeFile` 的断言函数
   */
  filter: string | string[] | ((file: CodeTreeFile) => boolean)

  /**
   * Load function that returns markdown content for the matched file.
   *
   * 为匹配的文件返回 markdown 内容的加载函数。
   *
   * The returned string should be valid markdown (e.g. a fenced code block)
   * so it can be rendered by markdown-it.
   *
   * 返回的字符串应为合法的 markdown（如围栏代码块），以便被 markdown-it 渲染。
   */
  load: (file: CodeTreeFile) => string
}
