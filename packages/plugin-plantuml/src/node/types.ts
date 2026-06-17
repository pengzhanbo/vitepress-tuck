/**
 * Supported output format for PlantUML rendering.
 *
 * PlantUML 渲染支持的输出格式。
 */
export type PlantumlFormat = 'svg' | 'png'

/**
 * All supported PlantUML formats, including dark-mode variants prefixed with `d`.
 *
 * 所有支持的 PlantUML 格式，包含以 `d` 为前缀的暗色模式变体。
 */
export type PlantumlAllFormat = PlantumlFormat | 'dsvg' | 'dpng'

/**
 * Locale data for PlantUML UI labels.
 *
 * PlantUML 界面标签的本地化数据。
 */
export interface PlantumlLocaleData extends Record<string, unknown> {
  /** Label for the chart tab / 图表标签页文本 */
  chart: string
  /** Label for the source code tab / 源代码标签页文本 */
  source: string
  /** Label for the fullscreen button / 全屏按钮文本 */
  fullscreen: string
  /** Label for the download button / 下载按钮文本 */
  download: string
}

/**
 * Options for the PlantUML Vite plugin.
 *
 * PlantUML Vite 插件的配置选项。
 */
export interface PlantumlVitePluginOptions {
  /**
   * PlantUML server URL.
   *
   * PlantUML 服务器地址。
   *
   * @default 'https://www.plantuml.com/plantuml'
   */
  serverURL?: string

  /**
   * PlantUML locales for UI labels.
   *
   * PlantUML 界面标签的多语言配置。
   */
  locales?: Record<string, PlantumlLocaleData>
}

/**
 * Options for the PlantUML Markdown-it plugin.
 *
 * PlantUML Markdown-it 插件的配置选项。
 */
export interface PlantumlMarkdownPluginOptions {
  /**
   * PlantUML output format.
   *
   * PlantUML 输出格式。
   *
   * @default 'svg'
   */
  format?: PlantumlFormat
}

/**
 * Combined options for the PlantUML plugin, merging Vite and Markdown-it options.
 *
 * PlantUML 插件的合并配置选项，包含 Vite 插件与 Markdown-it 插件的全部选项。
 */
export type PlantumlPluginOptions = PlantumlVitePluginOptions & PlantumlMarkdownPluginOptions
