import type { PlantumlLocaleData } from '../types.js'
import { locales } from 'virtual:vitepress-plantuml'
import { useData } from 'vitepress/client'
import { computed } from 'vue'

/**
 * Composable that returns the current PlantUML locale data as a computed ref.
 *
 * 返回当前 PlantUML 本地化数据的组合式函数，结果为计算属性。
 *
 * 根据当前 VitePress 语言索引从虚拟模块注入的多语言数据中选取对应条目，
 * 若未匹配则回退到根语言或空对象。
 *
 * @returns Computed ref of the current locale data / 当前本地化数据的计算属性
 */
export function useLocale() {
  const { localeIndex } = useData()
  const locale = computed<PlantumlLocaleData>(() => locales[localeIndex.value] || locales.root || {})

  return locale
}
