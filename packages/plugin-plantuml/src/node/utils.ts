import type { PlantumlFormat } from './types.js'
import { Buffer } from 'node:buffer'
import { deflateRawSync } from 'node:zlib'
import { combineURLs, LRUCache } from '@pengzhanbo/utils'
import { OUTPUT_DIR } from './constants.js'

/**
 * LRU cache for PlantUML source content and rendering state.
 *
 * PlantUML 源内容与渲染状态的 LRU 缓存。
 *
 * 缓存键为文件名（包含哈希、主题与格式），值为源内容、引用页面路径集合、
 * 渲染 Promise 与加载状态。最多缓存 1024 项。
 */
export const cache = new LRUCache<string, {
  content: string
  paths: Set<string> // 页面路径 / page paths
  promise?: null | Promise<any>
  loaded?: boolean
}>({ maxSize: 1024 })

/**
 * Build a filename for a cached PlantUML image.
 *
 * 根据哈希、格式与主题构建缓存图片的文件名。
 *
 * @param hash - Content hash / 内容哈希
 * @param format - Output format / 输出格式
 * @param isDark - Whether this is the dark-mode variant / 是否为暗色模式变体
 * @returns Filename in the form `${hash}.${'dark'|'light'}.${format}` / 形如 `${hash}.${'dark'|'light'}.${format}` 的文件名
 *
 * @example
 * ```ts
 * getFilename('abc123', 'svg', true) // 'abc123.dark.svg'
 * ```
 */
export function getFilename(hash: string, format: PlantumlFormat, isDark: boolean): string {
  return `${hash}.${isDark ? 'dark' : 'light'}.${format}`
}

/**
 * Combine a cache directory with the PlantUML output directory and filename.
 *
 * 将缓存目录与 PlantUML 输出目录及文件名拼接为完整路径。
 *
 * @param dir - Cache directory / 缓存目录
 * @param filename - Filename / 文件名
 * @returns Combined URL path / 拼接后的 URL 路径
 */
export function getOutputPath(dir: string, filename: string): string {
  return combineURLs(dir, OUTPUT_DIR, filename)
}

/**
 * Parse a PlantUML filename into its hash, format, and theme.
 *
 * 将 PlantUML 文件名解析为哈希、格式与主题信息。
 *
 * @param filename - Filename in the form `${hash}.${'dark'|'light'}.${format}` / 形如 `${hash}.${'dark'|'light'}.${format}` 的文件名
 * @returns Parsed components with `hash`, `format`, and `isDark` fields / 包含 `hash`、`format` 和 `isDark` 字段的解析结果
 */
export function parseFilename(filename: string): { hash: string, format: PlantumlFormat, isDark: boolean } {
  const [hash, isDark, format] = filename.split('.')
  return { hash, format: format as PlantumlFormat, isDark: isDark === 'dark' }
}

/**
 * Deflate raw UTF-8 data with maximum compression level.
 *
 * 以最高压缩级别对 UTF-8 数据进行 deflate 原始压缩。
 *
 * @param data - Input string / 输入字符串
 * @returns Compressed binary string / 压缩后的二进制字符串
 */
function deflate(data: string): string {
  return deflateRawSync(Buffer.from(data, 'utf-8'), { level: 9 }).toString('binary')
}

/**
 * Encode a 6-bit value into a single PlantUML Base64 character.
 *
 * 将 6 位数值编码为单个 PlantUML Base64 字符。
 *
 * PlantUML uses a custom Base64 encoding scheme for text data.
 * PlantUML 使用自定义的 Base64 编码方案处理文本数据。
 *
 * @param byte - 6-bit byte value / 6 位字节值
 * @returns Encoded character / 编码后的字符
 * @see https://plantuml.com/en/text-encoding
 */
function encode6bit(byte: number): string {
  return byte < 10
    ? String.fromCharCode(48 + byte)
    : byte < 36
      ? String.fromCharCode(65 + byte - 10)
      : byte < 62
        ? String.fromCharCode(97 + byte - 36)
        : byte === 62
          ? '-'
          : '_'
}

/**
 * Encode three bytes into four PlantUML Base64 characters.
 *
 * 将三个字节编码为四个 PlantUML Base64 字符。
 *
 * @param b1 - First byte / 第一个字节
 * @param b2 - Second byte / 第二个字节
 * @param b3 - Third byte / 第三个字节
 * @returns Four-character encoded string / 四字符编码字符串
 */
function append3bytes(b1: number, b2: number, b3: number): string {
  const c1 = b1 >> 2
  const c2 = ((b1 & 0x3) << 4) | (b2 >> 4)
  const c3 = ((b2 & 0xF) << 2) | (b3 >> 6)
  const c4 = b3 & 0x3F

  return encode6bit(c1 & 0x3F) + encode6bit(c2 & 0x3F) + encode6bit(c3 & 0x3F) + encode6bit(c4 & 0x3F)
}

/**
 * Custom Base64 encoding for PlantUML.
 *
 * PlantUML 专用的自定义 Base64 编码。
 *
 * Mapping: `0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_`
 * 映射表：`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_`
 *
 * @param data - The input string to encode / 待编码的输入字符串
 * @returns The Base64 encoded string / Base64 编码后的字符串
 */
function customEncodeBase64(data: string): string {
  let result = ''

  for (let i = 0; i < data.length; i += 3) {
    if (i + 2 === data.length)
      result += append3bytes(data.charCodeAt(i), data.charCodeAt(i + 1), 0)
    else if (i + 1 === data.length)
      result += append3bytes(data.charCodeAt(i), 0, 0)
    else result += append3bytes(data.charCodeAt(i), data.charCodeAt(i + 1), data.charCodeAt(i + 2))
  }

  return result
}

/**
 * Encode PlantUML source text into the URL-safe format expected by the PlantUML server.
 *
 * 将 PlantUML 源文本编码为 PlantUML 服务器所需的 URL 安全格式。
 *
 * The encoding pipeline is: deflate (level 9) → custom Base64.
 * 编码流程为：deflate（级别 9）→ 自定义 Base64。
 *
 * @param data - PlantUML source text / PlantUML 源文本
 * @returns Encoded string suitable for URL path segment / 适用于 URL 路径段的编码字符串
 *
 * @example
 * ```ts
 * const encoded = encodePlantuml('@startuml\nBob -> Alice : hello\n@enduml')
 * ```
 */
export function encodePlantuml(data: string): string {
  return customEncodeBase64(deflate(data))
}
