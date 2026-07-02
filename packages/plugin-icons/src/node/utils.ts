import type { FontAwesomePrefix } from './types.js'
import { objectEntries } from '@pengzhanbo/utils'
import { parseRect } from 'vitepress-plugin-toolkit'

/**
 * Parse a size value into width and height strings.
 *
 * 将尺寸值解析为宽度和高度字符串。
 *
 * Supports `widthxheight` (e.g. `1.2emx1.2em`) and single `width` forms. When
 * only the width is given, the height falls back to the width.
 *
 * @param size - The size value, e.g. `1.2em`, `36px`, or `1.2emx1.5em` / 尺寸值
 * @returns The parsed width and height / 解析后的宽度和高度
 */
export function parseSize(size: string | number): { width?: string, height?: string } {
  const [width, height] = String(size)
    .replaceAll('px', '[UNIT]')
    .split('x')
    .map(s => parseRect(s.replaceAll('[UNIT]', 'px').trim()))

  return { width: width || undefined, height: height || width || undefined }
}

/**
 * Merge size and color into a CSS style string.
 *
 * 将尺寸和颜色合并为 CSS 样式字符串。
 *
 * When `fontSize` is `true`, the size is emitted as `font-size` (used by
 * iconfont); otherwise it is emitted as `width`/`height` (used by FontAwesome).
 *
 * @param size - The size value / 尺寸值
 * @param color - The color value / 颜色值
 * @param fontSize - Whether to emit `font-size` instead of `width`/`height` / 是否输出 `font-size`
 * @returns The merged style string, or `undefined` when empty / 合并后的样式字符串，为空时返回 `undefined`
 */
export function mergeStyles(size?: string | number, color?: string, fontSize = false): string | undefined {
  let style = ''
  if (size) {
    const { width, height } = parseSize(size)
    if (fontSize) {
      style += `font-size:${height};`
    }
    else {
      width && (style += `width:${width};`)
      height && (style += `height:${height};`)
    }
  }
  if (color)
    style += `color:${color};`
  return style || undefined
}

/**
 * Mapping of FontAwesome style names to their accepted prefix aliases.
 *
 * FontAwesome 样式名与其可接受前缀别名的映射表。
 */
export const fontawesomePrefixes = objectEntries({
  'solid': ['fas', 's'],
  'regular': ['far', 'r'],
  'light': ['fal', 'l'],
  'thin': ['fat', 't'],
  'duotone solid': ['fads', 'ds'],
  'sharp solid': ['fass', 'ss'],
  'sharp regular': ['fasr', 'sr'],
  'sharp light': ['fasl', 'sl'],
  'sharp thin': ['fast', 'st'],
  'sharp-duotone solid': ['fasds', 'sds'],
  'brands': ['fab', 'b'],
}) as [string, FontAwesomePrefix[]][]

/**
 * Resolve a FontAwesome icon name and prefix into the full class names.
 *
 * 将 FontAwesome 图标名称和前缀解析为完整的类名。
 *
 * The `name` may be a plain icon name (using the configured `prefix` or
 * `fas` by default) or a `prefix:name` pair (e.g. `fab:github`).
 *
 * @param name - The icon name, optionally prefixed / 图标名称，可包含前缀
 * @param prefix - The default prefix to use when none is given / 未指定前缀时使用的默认前缀
 * @returns The FontAwesome class names, e.g. `fa-solid fa-github` / FontAwesome 类名
 *
 * @example
 * getFontawesomeName('circle-user', 'fas') // 'fa-solid fa-circle-user'
 * getFontawesomeName('fab:github') // 'fa-brands fa-github'
 */
export function getFontawesomeName(name: string, prefix?: string): string {
  const icon = name.includes(':') ? name : `${prefix || 'fas'}:${name}`
  const [type, iconName] = icon.split(':')
  let _prefix = 'solid'
  for (const [key, alias] of fontawesomePrefixes) {
    if (alias.includes(type as FontAwesomePrefix)) {
      _prefix = key
      break
    }
  }
  return `${_prefix.split(' ').map(v => `fa-${v.trim()}`).join(' ')} fa-${iconName}`
}
