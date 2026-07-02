import type { IconOptions } from './types.js'
import { kebabCase, omit } from '@pengzhanbo/utils'
import { resolveAttrs } from 'vitepress-plugin-toolkit'

/**
 * The resolved icon information parsed from the inline syntax content.
 *
 * 从行内语法内容中解析出的图标信息。
 */
export interface ResolvedIcon extends Record<string, unknown> {
  provider: IconOptions['provider']
  size?: string | number
  color?: string
  name: string
  extra?: string
}

const RE_SIZE = /(?<=\s|^)=(.+?)(?:\s|$)/
const RE_COLOR = /(?<=\s|^)\/(.+?)(?:\s|$)/
const RE_PROVIDER = /^(iconify|iconfont|fontawesome)\s+/
const RE_EXTRA_KEY = /(?:^|-)\d-/g

/**
 * Parse the raw content between `::` delimiters into structured icon info.
 *
 * 将 `::` 分隔符之间的原始内容解析为结构化的图标信息。
 *
 * The content may include an optional provider prefix (`iconify`/`iconfont`/
 * `fontawesome`), a size fragment starting with `=`, a color fragment starting
 * with `/`, the icon name, and trailing extra attributes.
 *
 * @param content - The raw content between `::` delimiters / `::` 分隔符之间的原始内容
 * @param defaultProvider - The provider used when no prefix is present / 未指定前缀时使用的提供商
 * @returns The resolved icon information / 解析后的图标信息
 *
 * @example
 * // with default provider 'iconify'
 * resolveIcon('tdesign:logo-github-filled =1.2em/#fff', 'iconify')
 * // => { provider: 'iconify', name: 'tdesign:logo-github-filled', size: '1.2em', color: '#fff' }
 *
 * @example
 * // with explicit provider prefix
 * resolveIcon('fontawesome circle-user border', 'iconify')
 * // => { provider: 'fontawesome', name: 'circle-user', extra: 'border' }
 */
export function resolveIcon(content: string, defaultProvider: IconOptions['provider']): ResolvedIcon {
  let size = ''
  let color = ''
  let provider!: IconOptions['provider']

  content = content
    .replace(RE_PROVIDER, (_, p) => {
      provider = p
      return ''
    })
    .replace(RE_SIZE, (_, s) => {
      size = s
      return ''
    })
    .replace(RE_COLOR, (_, c) => {
      color = c
      return ''
    })
    .trim()

  provider ||= defaultProvider

  const index = content.indexOf(' ')
  const name = index === -1 ? content : content.slice(0, index)
  const extra = index === -1 ? '' : content.slice(index + 1)
  const props = { provider, size, color, name }
  if (!extra) {
    return props
  }

  const attrs = resolveAttrs(extra)
  const info: string[] = []
  const excludes: string[] = []

  for (const key in attrs) {
    if (attrs[key] === true) {
      excludes.push(key)
      info.push(kebabCase(key).replace(RE_EXTRA_KEY, m => `${m.slice(0, -1)}`))
    }
  }
  return { ...props, extra: info.join(' '), ...omit(attrs, excludes) }
}
