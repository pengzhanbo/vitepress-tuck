import type { Prettify } from '@pengzhanbo/utils'
import type {
  QRCodeByteSegment,
  QRCodeErrorCorrectionLevel,
  QRCodeRenderersOptions,
  QRCodeToDataURLOptions,
  QRCodeToStringOptions,
} from 'qrcode'

/**
 * Configuration for QR code generation, including optional logo overlay.
 *
 * 二维码生成配置，包括可选的 logo 叠加。
 */
export interface GenerateQRCodeConfig {
  /**
   * The text content to encode into the QR code.
   *
   * 要编码到二维码中的文本内容。
   */
  text: string
  /**
   * Optional logo image URL overlaid on the QR code center.
   *
   * 叠加在二维码中心的可选 logo 图片 URL。
   */
  logo?: string
  /**
   * Logo size as a percentage string of the QR code width.
   *
   * logo 大小，以二维码宽度的百分比字符串表示。
   *
   * @default '0.2'
   */
  logoSize?: string
}

/**
 * Internal wrapper around the `qrcode` library providing canvas and PNG
 * rendering methods.
 *
 * `qrcode` 库的内部封装，提供 canvas 和 PNG 渲染方法。
 */
interface QRCodeInstance {
  /**
   * Renders the QR code to an HTML canvas element.
   *
   * 将二维码渲染为 HTML canvas 元素。
   */
  toCanvas: (str: string | QRCodeByteSegment[], options: QRCodeRenderersOptions) => Promise<HTMLCanvasElement>
  /**
   * Renders the QR code to a PNG data URL.
   *
   * 将二维码渲染为 PNG data URL。
   */
  toPNG: (str: string | QRCodeByteSegment[], options: QRCodeToDataURLOptions) => Promise<string>
}

let qr: QRCodeInstance | null = null

/**
 * Lazily initializes and caches the QR code library instance.
 *
 * 延迟初始化并缓存二维码库实例。
 *
 * The `qrcode` library is dynamically imported to keep the initial bundle
 * size small. The initialized instance is cached for reuse across subsequent
 * calls.
 *
 * `qrcode` 库通过动态导入加载，以减小初始包体积。初始化后的实例会被缓存，
 * 供后续调用复用。
 *
 * @returns The cached QR code instance / 缓存的二维码实例
 */
async function initQRCodeInstance() {
  if (qr)
    return qr

  const qrcode = (await import(/* webpackChunkName: "qrcode" */ 'qrcode')).default
  qr = {
    toCanvas: (text: string | QRCodeByteSegment[], options: QRCodeRenderersOptions) => {
      return new Promise((resolve, reject) =>
        qrcode.toCanvas(text, options, (error, canvas) => error ? reject(error) : resolve(canvas)),
      )
    },
    toPNG: (text, options) => qrcode.toDataURL(text, { type: 'image/png', ...options }),
  }
  return qr
}

/**
 * Generates a QR code as a data URL, with optional logo overlay.
 *
 * 生成二维码 data URL，支持可选的 logo 叠加。
 *
 * When a logo is provided, the error correction level is automatically set
 * to `H` (High) to maintain scannability, and the logo is drawn at the
 * center of the QR code with a rounded background.
 *
 * 当提供 logo 时，纠错等级会自动设置为 `H`（高）以保持可扫描性，
 * logo 会以圆角背景绘制在二维码中心。
 *
 * @param config - The QR code content and logo configuration / 二维码内容和 logo 配置
 * @param config.text - The text to encode / 要编码的文本
 * @param config.logo - Optional logo image URL / 可选的 logo 图片 URL
 * @param config.logoSize - Logo size as percentage of QR code width / logo 大小（二维码宽度的百分比）
 * @param options - QR code rendering options (version, error correction, colors, etc.) / 二维码渲染选项（版本、纠错等级、颜色等）
 * @returns A data URL string of the generated QR code image / 生成的二维码图片的 data URL 字符串
 * @example
 * ```ts
 * const dataUrl = await generateQRCode(
 *   { text: 'https://example.com' },
 *   { width: 300, margin: 2, color: { dark: '#000000ff', light: '#ffffffff' } },
 * )
 * ```
 */
export async function generateQRCode(
  { text, logo, logoSize = '0.2' }: GenerateQRCodeConfig,
  options: Prettify<QRCodeToDataURLOptions & QRCodeToStringOptions & QRCodeRenderersOptions>,
): Promise<string> {
  const { toCanvas, toPNG } = await initQRCodeInstance()
  const segments: QRCodeByteSegment[] = [{ data: new TextEncoder().encode(text), mode: 'byte' }]

  const qrWidth = options.width!
  if (logo) {
    // 有 logo 时，需要设置 errorCorrectionLevel 为 H
    // 因为 logo 会占用二维码的一部分空间，导致二维码的纠错能力下降
    // 所以需要增加纠错能力
    const level = options.errorCorrectionLevel ?? 'H'
    options.errorCorrectionLevel = (level.length === 1 ? level.toUpperCase() : `${level[0].toUpperCase()}${level[1].toLowerCase()}`) as unknown as QRCodeErrorCorrectionLevel
    const logoImg = await loadImage(logo)
    const actualWith = Number.parseFloat(logoSize) * qrWidth
    const actualHeight = actualWith / logoImg.width * logoImg.height
    const dx = (qrWidth - actualWith) / 2
    const dy = (qrWidth - actualHeight) / 2
    const canvas = await toCanvas(segments, options)
    const ctx = canvas.getContext('2d')!
    // 绘制 logo 背景
    ctx.fillStyle = options.color?.light || '#fff'
    ctx.roundRect(dx, dy, actualWith, actualHeight, actualWith / 20)
    ctx.fill()
    // 绘制 logo 图片
    ctx.drawImage(logoImg, dx, dy, actualWith, actualHeight)
    return canvas.toDataURL()
  }
  const level = options.errorCorrectionLevel ?? 'M'
  options.errorCorrectionLevel = (level.length === 1 ? level.toUpperCase() : `${level[0].toUpperCase()}${level[1].toLowerCase()}`) as unknown as QRCodeErrorCorrectionLevel
  return await toPNG(segments, options)
}

/**
 * Loads an image from the given URL with cross-origin support.
 *
 * 从指定 URL 加载图片，支持跨域。
 *
 * @param url - The image URL to load / 要加载的图片 URL
 * @returns A promise that resolves with the loaded HTMLImageElement / 加载完成后解析为 HTMLImageElement 的 Promise
 * @throws {Error} When the image fails to load / 图片加载失败时抛出
 * @example
 * ```ts
 * const img = await loadImage('https://example.com/logo.png')
 * console.log(img.width, img.height)
 * ```
 */
export async function loadImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.src = url
    img.crossOrigin = 'anonymous'
    img.onload = () => resolve(img)
    img.onerror = () => reject(new Error('Failed to load image'))
  })
}

/**
 * Attempts to determine the logo URL for a QR code.
 *
 * 尝试确定二维码的 logo URL。
 *
 * Resolution priority:
 * - If a logo URL is explicitly provided, use it directly.
 * - If the QR code content is an internal link, use the site's favicon
 *   (`link[rel="icon"]`) as the logo.
 * - Otherwise, return an empty string (no logo).
 *
 * 解析优先级：
 * - 若显式提供了 logo URL，则直接使用。
 * - 若二维码内容为内部链接，则使用站点的 favicon（`link[rel="icon"]`）作为 logo。
 * - 否则返回空字符串（无 logo）。
 *
 * @param text - The QR code text content / 二维码文本内容
 * @param logo - Optional explicit logo URL / 可选的显式 logo URL
 * @param isInternalLink - Whether the text is an internal link / 文本是否为内部链接
 * @returns The resolved logo URL, or empty string if none / 解析后的 logo URL，若无则为空字符串
 */
export async function attemptLoadLogo(text: string, logo: string | undefined, isInternalLink: boolean): Promise<string> {
  if (logo)
    return logo
  if (isInternalLink)
    return (document.querySelector('link[rel="icon"]') as HTMLLinkElement)?.href
  return ''
}
