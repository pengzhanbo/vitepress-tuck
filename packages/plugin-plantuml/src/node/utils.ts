import type { PlantumlFormat } from './types.js'
import { Buffer } from 'node:buffer'
import { deflateRawSync } from 'node:zlib'
import { combineURLs, LRUCache } from '@pengzhanbo/utils'
import { OUTPUT_DIR } from './constants.js'

export const cache = new LRUCache<string, {
  content: string
  paths: Set<string> // 页面路径
  promise?: null | Promise<any>
  loaded?: boolean
}>({ maxSize: 1024 })

export function getFilename(hash: string, format: PlantumlFormat, isDark: boolean): string {
  return `${hash}.${isDark ? 'dark' : 'light'}.${format}`
}

export function getOutputPath(dir: string, filename: string): string {
  return combineURLs(dir, OUTPUT_DIR, filename)
}

export function parseFilename(filename: string): { hash: string, format: PlantumlFormat, isDark: boolean } {
  const [hash, isDark, format] = filename.split('.')
  return { hash, format: format as PlantumlFormat, isDark: isDark === 'dark' }
}

function deflate(data: string): string {
  return deflateRawSync(Buffer.from(data, 'utf-8'), { level: 9 }).toString('binary')
}

/**
 * @param byte - 6-bit byte value
 * @returns Encoded character
 * @see https://plantuml.com/en/text-encoding
 *
 * PlantUML uses a custom Base64 encoding scheme for text data.
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

function append3bytes(b1: number, b2: number, b3: number): string {
  const c1 = b1 >> 2
  const c2 = ((b1 & 0x3) << 4) | (b2 >> 4)
  const c3 = ((b2 & 0xF) << 2) | (b3 >> 6)
  const c4 = b3 & 0x3F

  return encode6bit(c1 & 0x3F) + encode6bit(c2 & 0x3F) + encode6bit(c3 & 0x3F) + encode6bit(c4 & 0x3F)
}

/**
 * Custom Base64 encoding for PlantUML
 *
 * Mapping: 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_
 *
 * @param data The input string to encode
 * @returns The Base64 encoded string
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

export function encodePlantuml(data: string): string {
  return customEncodeBase64(deflate(data))
}
