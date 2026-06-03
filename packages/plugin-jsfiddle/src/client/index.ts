import type { EnhanceAppContext } from 'vitepress/client'
import VPJsfiddle from './VPJsfiddle.vue'

export { VPJsfiddle }

export function enhanceAppWithJsFiddle({ app }: EnhanceAppContext) {
  app.component('VPJsfiddle', VPJsfiddle)
}
