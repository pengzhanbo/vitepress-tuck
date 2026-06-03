import type { EnhanceAppContext } from 'vitepress/client'
import VPPdf from './VPPdf.vue'

export { VPPdf }
export * from './use-pdf.js'

export function enhanceAppWithPDF({ app }: EnhanceAppContext) {
  app.component('VPPdf', VPPdf)
}
