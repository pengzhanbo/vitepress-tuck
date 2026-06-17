/**
 * Represents the display mode for Can I Use embeds.
 *
 * 表示 Can I Use 嵌入内容的显示模式。
 *
 * - `embed`: Standard embed view showing browser support matrix / 标准嵌入视图，展示浏览器支持矩阵
 * - `baseline`: Baseline view showing web platform feature support / Baseline 视图，展示 Web 平台特性支持
 */
export type CanIUseMode = 'embed' | 'baseline'

/**
 * Data structure for Can I Use embed information.
 *
 * Can I Use 嵌入信息的数据结构。
 */
export interface CanIUseData {
  /**
   * The feature identifier to look up (e.g. `flexbox`, `css-grid`).
   *
   * 要查询的特性标识符（例如 `flexbox`、`css-grid`）。
   */
  feature: string
  /**
   * Display mode for the embed.
   *
   * 嵌入内容的显示模式。
   */
  mode: CanIUseMode
  /**
   * Version range string (e.g. `-2,4`), parsed into past/future offsets.
   *
   * 版本范围字符串（例如 `-2,4`），会被解析为过去/未来的版本偏移量。
   */
  versions: string
}
