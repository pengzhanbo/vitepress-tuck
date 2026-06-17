/**
 * Options for the plot (spoiler) plugin.
 *
 * 黑幕插件的配置选项。
 */
export interface PlotOptions {
  /**
   * Trigger mode that reveals the hidden text.
   *
   * 触发方式，决定何时显示被隐藏的文本。
   *
   * - `hover`: Reveal on pointer hover / 指针悬停时显示
   * - `click`: Reveal on click / 点击时显示
   *
   * @default 'hover'
   */
  trigger?: 'hover' | 'click'

  /**
   * Visual effect applied to the hidden text.
   *
   * 应用于隐藏文本的视觉效果。
   *
   * - `mask`: Cover text with a solid mask / 用纯色遮罩覆盖文本
   * - `blur`: Blur the text content / 对文本内容进行模糊处理
   *
   * @default 'mask'
   */
  effect?: 'mask' | 'blur'

}
