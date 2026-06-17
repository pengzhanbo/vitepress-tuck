/**
 * Props for the `VPQrcode` Vue component.
 *
 * `VPQrcode` Vue 组件的 Props 定义。
 *
 * Controls QR code rendering options including content, appearance, logo
 * overlay, and display layout. Used by the markdown-it plugin to render
 * `<VPQrcode>` tags generated from markdown syntax.
 *
 * 控制二维码渲染选项，包括内容、外观、logo 叠加和显示布局。
 * 由 markdown-it 插件用于渲染从 markdown 语法生成的 `<VPQrcode>` 标签。
 *
 * @example
 * ```vue
 * <VPQrcode
 *   text="https://example.com"
 *   mode="card"
 *   title="Scan Me"
 *   :width="200"
 *   level="M"
 * />
 * ```
 */
export interface QRCodeProps {
  /**
   * QR code title.
   * Used as HTML `title` and `alt` attributes.
   *
   * 二维码标题。
   * 作为 HTML 标签的 `title` 属性、`alt` 属性。
   */
  title?: string

  /**
   * QR code content.
   *
   * 二维码内容。
   */
  text?: string

  /**
   * Logo image overlaid on the center of the QR code.
   *
   * 叠加在二维码中心的 logo 图片。
   */
  logo?: string

  /**
   * Logo image size.
   *
   * Unit: percentage of QR code width.
   *
   * 二维码中的 logo 图片大小。
   *
   * 单位：二维码宽度的百分比。
   *
   * @default '0.2'
   */
  logoSize?: string
  /**
   * QR code width.
   *
   * 二维码宽度。
   */
  width?: number | string

  /**
   * Display mode.
   * - `img`: Display QR code as a standalone image.
   * - `card`: Display as a card with left-right layout, QR code on left,
   *   title and content on right.
   *
   * 显示模式。
   * - `img`：以图片的形式显示二维码。
   * - `card`：以卡片的形式显示，卡片以左右布局，左侧二维码，右侧标题 + 内容。
   *
   * @default 'img'
   */
  mode?: 'img' | 'card'

  /**
   * Whether to reverse the left-right layout in card mode.
   *
   * 在 card 模式下是否翻转左右布局。
   *
   * @default false
   */
  reverse?: boolean

  /**
   * QR code alignment within its container.
   *
   * 二维码在容器中的对齐方式。
   *
   * @default 'left'
   */
  align?: 'left' | 'center' | 'right'

  /**
   * Error correction level.
   * Possible values: Low, Medium, Quartile, High, corresponding to L, M, Q, H.
   *
   * 纠错等级。
   * 可能的取值为低、中、四分位、高，分别对应 L、M、Q、H。
   *
   * @default 'M'
   */
  level?: 'L' | 'M' | 'Q' | 'H' | 'l' | 'm' | 'q' | 'h'
  /**
   * QR code version. If not specified, will automatically calculate a suitable value.
   * Range: 1-40.
   *
   * 二维码版本。若未指定，将自动计算更合适的值。
   * 取值范围 1-40。
   */
  version?: number
  /**
   * Mask pattern used to mask symbols.
   * Possible values: 0, 1, 2, 3, 4, 5, 6, 7.
   * If not specified, the system will automatically calculate a suitable value.
   *
   * 用于遮蔽符号的掩码模式。
   * 可能的取值为 0、1、2、3、4、5、6、7。
   * 若未指定，系统将自动计算更合适的值。
   */
  mask?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7
  /**
   * Defines how wide the quiet zone should be.
   *
   * 定义静区应有多宽。
   *
   * @default 2
   */
  margin?: number
  /**
   * Scale factor. A value of 1 means 1 pixel per module (black dot).
   *
   * 缩放因子。值为 1 表示每个模块（黑点）对应 1 像素。
   *
   * @default 4
   */
  scale?: number

  /**
   * Color of light modules. Value must be in hexadecimal format (RGBA).
   * Note: Light should always be lighter than the dark module color.
   *
   * 亮色模块的颜色。值必须为十六进制格式（RGBA）。
   * 注意：亮色应始终比暗色模块的颜色更浅。
   *
   * @default '#ffffffff'
   */
  light?: string

  /**
   * Color of dark modules. Value must be in hexadecimal format (RGBA).
   * Note: Dark should always be darker than the light module color.
   *
   * 暗色模块的颜色。值必须为十六进制格式（RGBA）。
   * 注意：暗色应始终比亮色模块的颜色更深。
   *
   * @default '#000000ff'
   */
  dark?: string
}
