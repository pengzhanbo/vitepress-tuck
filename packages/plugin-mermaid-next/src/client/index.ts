import type { EnhanceAppContext } from 'vitepress/client'
import VPMermaid from './VPMermaid.vue'

export { VPMermaid }
export { defineMermaidOptions } from './mermaidOptions.js'

export function enhanceAppWithMermaid({ app }: EnhanceAppContext) {
  app.component('VPMermaid', VPMermaid)
}
