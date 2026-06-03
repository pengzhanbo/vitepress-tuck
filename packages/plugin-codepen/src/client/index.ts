import type { EnhanceAppContext } from 'vitepress/client'
import VPCodepen from './VPCodepen.vue'

export { VPCodepen }

export function enhanceAppWithCodepen({ app }: EnhanceAppContext) {
  app.component('VPCodepen', VPCodepen)
}
