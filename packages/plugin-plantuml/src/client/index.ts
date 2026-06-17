import type { EnhanceAppContext } from 'vitepress'
import VPPlantUML from './VPPlantUML.vue'

export { VPPlantUML }

/**
 * Register the PlantUML Vue component globally during VitePress app enhancement.
 *
 * 在 VitePress 应用增强阶段全局注册 PlantUML Vue 组件。
 */
export function enhanceAppWithPlantuml({ app }: EnhanceAppContext) {
  app.component('VPPlantUML', VPPlantUML)
}
