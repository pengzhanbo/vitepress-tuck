import { objectKeys } from '@pengzhanbo/utils'
import { getVitepressConfig } from './get-vitepress-config.js'

/**
 * Resolve the locale and language code for a given path.
 *
 * 解析给定路径对应的语言环境和语言代码。
 *
 * The function inspects the VitePress locales config and finds the locale key
 * that the provided path starts with. When the matched key is `root`, the
 * returned locale is an empty string. Returns empty strings for both fields
 * when no locale matches.
 *
 * 该函数检查 VitePress 的语言环境配置，找到所提供路径以其开头的语言环境键。
 * 当匹配的键为 `root` 时，返回的语言环境为空字符串。无匹配时两个字段均返回空字符串。
 *
 * @param path - The path to resolve / 要解析的路径
 * @returns An object with `lang` and `locale` fields / 包含 `lang` 和 `locale` 字段的对象
 * @example
 * ```ts
 * getLocaleWithPath('/zh/guide/') // { lang: 'zh-CN', locale: '/zh/' }
 * getLocaleWithPath('/guide/') // { lang: 'en', locale: '' } (root locale)
 * ```
 */
export function getLocaleWithPath(path: string): { lang: string, locale: string } {
  const config = getVitepressConfig()
  const locales = config.userConfig?.locales || {}
  const keys = objectKeys(locales).sort((a, b) => b.length - a.length)
  const key = keys.find(locale => path.startsWith(locale)) || keys[0] || ''
  if (!key || !locales[key])
    return { lang: '', locale: '' }
  return {
    lang: locales[key]!.lang || key,
    locale: key === 'root' ? '' : key,
  }
}
