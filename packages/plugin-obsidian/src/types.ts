/**
 * Options for the Obsidian markdown plugin.
 *
 * Obsidian markdown 插件的配置选项。
 *
 * 每个字段对应一个 Obsidian 语法特性，省略或设为 `true` 表示启用，
 * 设为 `false` 表示禁用。默认情况下所有特性均启用。
 */
export interface ObsidianPluginOptions {
  /**
   * Toggle the callout syntax (`> [!note]` etc.).
   *
   * 开关 callout 标注块语法（如 `> [!note]`）。
   */
  callout?: boolean
  /**
   * Toggle the `%%` comment syntax.
   *
   * 开关 `%%` 注释语法。
   */
  comment?: boolean
  /**
   * Toggle the `![[...]]` embed link syntax.
   *
   * 开关 `![[...]]` 嵌入链接语法。
   */
  embedLink?: boolean
  /**
   * Toggle the `[[...]]` wiki link syntax.
   *
   * 开关 `[[...]]` wiki 链接语法。
   */
  wikiLink?: boolean
}

/**
 * Result of scanning markdown files under the VitePress source directory.
 *
 * 扫描 VitePress 源目录下 markdown 文件的结果。
 *
 * `root` 为源目录的绝对路径，`files` 为相对于 `root` 的 markdown 文件路径列表，
 * 按目录深度从浅到深排序，用于 wiki 链接与嵌入链接的目标文件查找。
 */
export interface FilesResult {
  /**
   * Absolute path of the VitePress source directory.
   *
   * VitePress 源目录的绝对路径。
   */
  root: string
  /**
   * Markdown file paths relative to `root`, sorted by directory depth.
   *
   * 相对于 `root` 的 markdown 文件路径列表，按目录深度排序。
   */
  files: string[]
}
