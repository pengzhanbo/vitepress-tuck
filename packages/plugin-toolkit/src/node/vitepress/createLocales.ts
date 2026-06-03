import { deepMerge, objectEntries } from '@pengzhanbo/utils'
import { getVitepressConfig } from './get-vitepress-config'

export type BuiltinLocale<LocaleData extends Record<string, unknown>> = [langCodes: string[], localeData: LocaleData]

export type BuiltinLocales<LocaleData extends Record<string, unknown>> = BuiltinLocale<LocaleData>[]

/**
 * 创建 locales
 * @param builtinLocales 内置的 locales
 * @param userLocales 用户的 locales
 * @returns locales
 */
export function createLocales<LocaleData extends Record<string, unknown>>(
  builtinLocales: BuiltinLocales<LocaleData>,
  userLocales: Record<string, LocaleData> = {},
): Record<string, LocaleData> {
  const locales: Record<string, LocaleData> = {}
  const vitepressLocales = getVitepressConfig().userConfig.locales || {}

  for (const [key, { lang }] of objectEntries(vitepressLocales)) {
    for (const [langs, localeData] of builtinLocales) {
      if (langs.includes(key) || (lang && langs.includes(lang))) {
        locales[key] = localeData
        break
      }
    }
  }

  // 如果没有指定 root 语言，默认使用 builtinLocales 中的第一个
  if (!locales.root) {
    locales.root = builtinLocales[0][1]
  }

  // 与 userLocales 合并
  deepMerge(locales, userLocales)

  return locales
}
