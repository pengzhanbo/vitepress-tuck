export type PlantumlFormat = 'svg' | 'png'

export type PlantumlAllFormat = PlantumlFormat | 'dsvg' | 'dpng'

export interface PlantumlLocaleData extends Record<string, unknown> {
  chart: string
  source: string
  fullscreen: string
  download: string
}

export interface PlantumlVitePluginOptions {
  /**
   * PlantUML server URL
   *
   * @default 'https://www.plantuml.com/plantuml'
   */
  serverURL?: string

  /**
   * PlantUML locales
   */
  locales?: Record<string, PlantumlLocaleData>
}

export interface PlantumlMarkdownPluginOptions {
  /**
   * PlantUML format
   *
   * @default 'svg'
   */
  format?: PlantumlFormat
}

export type PlantumlPluginOptions = PlantumlVitePluginOptions & PlantumlMarkdownPluginOptions
