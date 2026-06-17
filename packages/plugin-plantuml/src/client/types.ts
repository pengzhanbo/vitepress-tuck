/**
 * Locale data for the PlantUML client UI labels.
 *
 * PlantUML 客户端界面标签的本地化数据。
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
