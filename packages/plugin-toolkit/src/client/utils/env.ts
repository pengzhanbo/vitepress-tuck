/**
 * User-Agent Client Hints data provided by modern browsers.
 *
 * 现代浏览器提供的 User-Agent 客户端提示数据。
 */
interface NavigatorUAData {
  /** Operating system platform identifier / 操作系统平台标识符 */
  platform?: string
  /** Whether the device is a mobile device / 设备是否为移动设备 */
  mobile?: boolean
}

declare global {
  interface Navigator {
    userAgentData?: NavigatorUAData
  }
}

/**
 * Get the platform string of the user device, preferring UA-CH data over the
 * legacy `navigator.platform`.
 *
 * 获取用户设备的平台字符串，优先使用 UA-CH 数据，其次使用传统的 `navigator.platform`。
 *
 * @returns Platform string / 平台字符串
 */
function getPlatform(): string {
  return navigator.userAgentData?.platform ?? navigator.platform
}

/**
 * Get the user agent string of the browser.
 *
 * 获取浏览器的 user agent 字符串。
 *
 * @returns User agent string / user agent 字符串
 */
const getUA = (): string => navigator.userAgent

/**
 * Check if the user device is iPhone or iPod.
 *
 * 检查用户设备是否为 iPhone 或 iPod。
 *
 * @returns Whether it's iPhone or iPod / 是否为 iPhone 或 iPod
 */
export const isiPhone = (): boolean => /\biPhone\b/iu.test(getPlatform())

/**
 * Check if the user device is Windows.
 *
 * 检查用户设备是否为 Windows。
 *
 * @returns Whether it's Windows / 是否为 Windows
 */
export function isWindows(): boolean {
  return /\b(?:Windows|Win32)\b/iu.test(getPlatform())
}

/**
 * Check if the user device is iPad.
 *
 * 检查用户设备是否为 iPad。
 *
 * @returns Whether it's iPad / 是否为 iPad
 */
export const isiPad = (): boolean => /\biPad\b/iu.test(getPlatform())
/**
 * Check if the user device is iOS (iPhone, iPad, or iPod).
 *
 * 检查用户设备是否为 iOS (iPhone, iPad, iPod)。
 *
 * @returns Whether it's iOS / 是否为 iOS
 */
export function isIOS(): boolean {
  return /ios/iu.test(getPlatform()) || isiPhone() || isiPad()
}

/**
 * Check if the user device is macOS.
 *
 * 检查用户设备是否为 macOS。
 *
 * @returns Whether it's macOS / 是否为 macOS
 */
export function isMacOS(): boolean {
  const platform = getPlatform()

  if (platform)
    return /mac/iu.test(platform)

  // Explicit macOS platform or legacy UA, while excluding iOS (iPadOS desktop UA)
  return /macintosh|mac os x/iu.test(getUA()) && !isIOS()
}

/**
 * Check if the user device is a mobile device.
 *
 * 检查用户设备是否为移动设备。
 *
 * @returns Whether it's a mobile device / 是否为移动设备
 */
export function isMobile(): boolean {
  // Use UA-CH first if available
  const uaDataMobile = navigator.userAgentData?.mobile

  if (typeof uaDataMobile === 'boolean')
    return uaDataMobile

  // Fallback to UA
  return /\b(?:Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|CriOS|FxiOS)\b/iu.test(
    getUA(),
  )
}

/**
 * Check if the user device is Safari.
 *
 * 检查用户设备是否为 Safari。
 *
 * @returns Whether it's Safari / 是否为 Safari
 */
export function isSafari(): boolean {
  const ua = getUA()

  return (
    /safari/iu.test(ua)
    // Safari has 'Safari' but not these chromium/gecko/edge/opera flavors
    && !/chrome|crios|fxios|edgios|edg|opr|opera|ucbrowser|qqbrowser|baidubrowser/iu.test(
      ua,
    )
  )
}
