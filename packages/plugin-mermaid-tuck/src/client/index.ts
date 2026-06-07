import type { EnhanceAppContext } from 'vitepress/client'
import VPMermaid from './components/VPMermaid.vue'

export { VPMermaid }
export { defineMermaidOptions } from './composables/options.js'

export function enhanceAppWithMermaid({ app }: EnhanceAppContext) {
  app.component('VPMermaid', VPMermaid)
}
