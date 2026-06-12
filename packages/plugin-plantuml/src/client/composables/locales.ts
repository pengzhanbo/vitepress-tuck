import type { PlantumlLocaleData } from '../types.js'
import { locales } from 'virtual:vitepress-plantuml'
import { useData } from 'vitepress/client'
import { computed } from 'vue'

export function useLocale() {
  const { localeIndex } = useData()
  const locale = computed<PlantumlLocaleData>(() => locales[localeIndex.value] || locales.root || {})

  return locale
}
