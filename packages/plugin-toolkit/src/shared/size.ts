/**
 * Options for describing the size of an element.
 *
 * Used by plugins to normalize width, height, and aspect ratio inputs into a
 * consistent CSS-friendly form.
 *
 * 描述元素尺寸的选项。
 *
 * 供插件使用，将宽度、高度和宽高比输入归一化为一致的 CSS 友好形式。
 *
 * @example
 * const options: SizeOptions = {
 *   width: '100%',
 *   ratio: 16 / 9,
 * }
 */
export interface SizeOptions {
  /**
   * Width of the element, expressed as a CSS value.
   *
   * 元素的宽度，以 CSS 值表示。
   *
   * @example
   * '100%' | '640px' | 'auto'
   */
  width?: string
  /**
   * Height of the element, expressed as a CSS value.
   *
   * 元素的高度，以 CSS 值表示。
   *
   * @example
   * '100%' | '360px' | 'auto'
   */
  height?: string
  /**
   * Aspect ratio of the element. Can be:
   *   - `number`: Numeric ratio (for example `16 / 9` represents 16:9)
   *   - `string`: CSS aspect-ratio value (for example `'16 / 9'` or `'1.77'`)
   *
   * 元素的宽高比。可以是：
   *   - `number`：数字比例（例如 `16 / 9` 表示 16:9）
   *   - `string`：CSS aspect-ratio 值（例如 `'16 / 9'` 或 `'1.77'`）
   *
   * @example
   * 16 / 9
   * '16 / 9'
   */
  ratio?: number | string
}
