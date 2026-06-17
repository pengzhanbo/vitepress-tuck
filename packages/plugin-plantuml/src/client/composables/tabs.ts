import { computed, ref } from 'vue'
import { useLocale } from './locales.js'

/** Identifier for a tab in the PlantUML component. / PlantUML 组件中标签页的标识符。 */
type TabValue = 'chart' | 'source'

/** Tab item displayed in the tab switcher. / 标签切换器中显示的标签项。 */
interface Tab {
  /** Display label of the tab / 标签页的显示文本 */
  label: string
  /** Value of the tab / 标签页的值 */
  value: TabValue
}

/**
 * Composable that manages the tab state for the PlantUML component.
 *
 * 管理 PlantUML 组件标签页状态的组合式函数。
 *
 * 返回当前激活的标签页及基于当前本地化数据生成的标签项列表，
 * 包含"图表"与"源代码"两个标签页。
 *
 * @returns An object containing `tab` (ref of the active tab value) and `tabs` (computed ref of tab items) / 包含 `tab`（当前激活标签页值的 ref）和 `tabs`（标签项列表的计算属性）的对象
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
