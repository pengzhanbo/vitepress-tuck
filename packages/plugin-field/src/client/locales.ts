import type { FieldLocaleData } from './types.js'
import { locales } from 'virtual:vitepress-field'
import { useData } from 'vitepress/client'
import { computed, type ComputedRef } from 'vue'

export function useLocale(): ComputedRef<FieldLocaleData> {
  const { localeIndex } = useData()
  const locale = computed<FieldLocaleData>(() => locales[localeIndex.value] || locales.root || {})

  return locale
}
