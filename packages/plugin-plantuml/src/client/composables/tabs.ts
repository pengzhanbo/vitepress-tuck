import { computed, ref } from 'vue'
import { useLocale } from './locales.js'

type TabValue = 'chart' | 'source'
interface Tab {
  label: string
  value: TabValue
}

export function useTabs() {
  const locale = useLocale()

  const tab = ref<TabValue>('chart')
  const tabs = computed<Tab[]>(() => [
    {
      label: locale.value.chart!,
      value: 'chart',
    },
    {
      label: locale.value.source!,
      value: 'source',
    },
  ])

  return { tab, tabs }
}
