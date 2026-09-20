import { deepMerge, objectEntries } from '@pengzhanbo/utils'
import { getVitepressConfig } from './get-vitepress-config'

/**
 * A builtin locale entry pairing language codes with their locale data.
 *
 * 内置语言环境条目，将语言代码与对应的语言环境数据配对。
 *
 * @typeParam LocaleData - Locale data type / 语言环境数据类型
 */
export type BuiltinLocale<LocaleData extends Record<string, unknown>> = [langCodes: string[], localeData: LocaleData]

/**
 * A list of builtin locale entries.
 *
 * 内置语言环境条目列表。
 *
 * @typeParam LocaleData - Locale data type / 语言环境数据类型
 */
export type BuiltinLocales<LocaleData extends Record<string, unknown>> = BuiltinLocale<LocaleData>[]

/**
 * Create a locales configuration by merging builtin locales with user locales.
 *
 * 通过合并内置语言环境与用户语言环境来创建语言环境配置。
 *
 * The function reads the VitePress locales config, matches each locale key
 * (or its `lang` field) against the builtin locales, and falls back to the
 * first builtin locale for the `root` entry when no match is found. User
 * locales are deep-merged on top of the result.
 *
 * 该函数读取 VitePress 的语言环境配置，将每个语言环境键（或其 `lang` 字段）
 * 与内置语言环境匹配，未匹配到时 `root` 条目回退到第一个内置语言环境。
 * 用户语言环境会深度合并到结果之上。
 *
 * @param builtinLocales - Builtin locale entries / 内置语言环境条目
 * @param userLocales - User-provided locale overrides / 用户提供的语言环境覆盖
 * @returns Merged locales configuration / 合并后的语言环境配置
 * @typeParam LocaleData - Locale data type / 语言环境数据类型
 * @example
 * ```ts
 * const locales = createLocales(
 *   [[['en', 'en-US'], { title: 'English' }], [['zh', 'zh-CN'], { title: '中文' }]],
 *   { zh: { title: '我的站点' } },
 * )
 * ```
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
    const userLocale = userLocales[key] ?? (lang ? userLocales[lang] : undefined)
    if (userLocale) {
      locales[key] = deepMerge({}, locales[key], userLocale) as LocaleData
    }
  }

  if (!locales.root) {
    const builtinRoot = builtinLocales[0]?.[1] ?? {}
    const userRoot = userLocales.root ?? userLocales['/']
    locales.root = userRoot
      ? deepMerge({}, builtinRoot, userRoot) as LocaleData
      : builtinRoot
  }

  return locales
}
