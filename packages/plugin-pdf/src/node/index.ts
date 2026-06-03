import { definePlugin } from 'vitepress-tuck'
import { pdfPlugin } from './pdfPlugin.js'

export { pdfPlugin }

export default definePlugin(() => ({
  name: 'vitepress-plugin-pdf',
  client: {
    enhance: 'enhanceAppWithPDF',
  },
  markdown: {
    config: (md) => {
      md.use(pdfPlugin)
    },
  },
  vite: {
    ssr: {
      noExternal: ['vitepress-plugin-pdf'],
    },
    optimizeDeps: {
      exclude: ['@pengzhanbo/utils'],
    },
  },
}))
