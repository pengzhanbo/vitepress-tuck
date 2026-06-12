import type { EnhanceAppContext } from 'vitepress'
import VPPlantUML from './VPPlantUML.vue'

export { VPPlantUML }

export function enhanceAppWithPlantuml({ app }: EnhanceAppContext) {
  app.component('VPPlantUML', VPPlantUML)
}
