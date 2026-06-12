export type PlantumlFormat = 'svg' | 'png'

export type PlantumlAllFormat = PlantumlFormat | 'dsvg' | 'dpng'

export interface PlantumlLocaleData extends Record<string, unknown> {
  chart: string
  source: string
  fullscreen: string
  download: string
}
