import type { MermaidLocaleData } from '../types.js'
import { locales } from 'virtual:vitepress-mermaid'
import { useData } from 'vitepress/client'
import { computed } from 'vue'

/**
 * Composable that returns the active mermaid locale data based on the
 * current VitePress locale index.
 *
 * 根据当前 VitePress 语言索引返回对应 mermaid 多语言数据的组合式函数。
 *
 * Falls back to the `root` locale, then to an empty object when the current
 * locale has no matching entry.
 *
 * 当当前语言没有匹配条目时，依次回退到 `root` 语言与空对象。
 *
 * @returns Computed ref of the active locale data / 当前语言数据的 computed ref
 * @example
 * ```ts
 * const locale = useLocale()
 * console.log(locale.value.chart)
 * ```
 */
export function useLocale() {
  const { localeIndex } = useData()
  const locale = computed<MermaidLocaleData>(() => locales[localeIndex.value] || locales.root || {})

  return locale
}
