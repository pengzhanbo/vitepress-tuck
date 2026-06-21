/**
 * Code tree metadata
 *
 * code-tree 容器信息
 */
export interface CodeTreeData {
  title?: string
  /**
   * Code tree container height
   *
   * 代码树容器高度
   */
  height?: string

  /**
   * Entry file, opened by default
   *
   * 入口文件，默认打开
   */
  entry?: string

  /**
   * Show sidebar by default
   *
   * 是否默认显示侧边栏
   *
   * @default false
   */
  showSidebar?: boolean
}

export interface CodeTreePluginOptions {
  /**
   * Code tree container height
   *
   * 代码树容器高度
   *
   * @default '420px
   */
  height?: string | number

  /**
   * File loader
   *
   * When using `@[code-tree]( dir)` to embed a resource directory, it is used to load resource files.
   *
   * 资源文件加载器
   *
   * 使用 `@[code-tree]( dir)` 嵌入资源目录时，用于加载资源文件
   *
   * @example
   * ```ts
   * loader: [
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
   */
  ignores?: string[]
}

export interface CodeTreeFile {
  path: string
  absolutePath: string
  relativePath: string
  extname: string
  basename: string
}

export interface CodeTreeFileLoader {
  filter: string | string[] | ((file: CodeTreeFile) => boolean)
  load: (file: CodeTreeFile) => string
}
