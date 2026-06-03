import type { EnhanceAppContext } from 'vitepress/client'
import VPCaniuse from './VPCaniuse.vue'

export { VPCaniuse }

export function enhanceAppWithCaniuse({ app }: EnhanceAppContext) {
  app.component('VPCaniuse', VPCaniuse)
}
