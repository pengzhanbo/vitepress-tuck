import type { MermaidLocaleData } from '../types.js'
import { locales } from 'virtual:vitepress-mermaid'
import { useData } from 'vitepress/client'
import { computed } from 'vue'

export function useLocale() {
  const { localeIndex } = useData()
  const locale = computed<MermaidLocaleData>(() => locales[localeIndex.value] || locales.root || {})

  return locale
}
