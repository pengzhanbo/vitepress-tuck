import { computed, ref } from 'vue'
import { useLocale } from './locales.js'

type TabValue = 'chart' | 'source'
interface Tab {
  label: string
  value: TabValue
}

/**
 * Composable that manages the chart/source tab state for the mermaid
 * component.
 *
 * 管理 mermaid 组件中"图表/源代码"标签页状态的组合式函数。
 *
 * Returns a reactive `tab` value and a computed list of tab items whose
 * labels are derived from the active locale.
 *
 * 返回响应式的 `tab` 值与由当前语言派生标签的计算式标签项列表。
 *
 * @returns Object containing the active tab ref and tab items / 包含当前标签 ref 与标签项的对象
 * @example
 * ```ts
 * const { tab, tabs } = useTabs()
 * ```
 */
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
