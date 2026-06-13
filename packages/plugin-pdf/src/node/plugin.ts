import { definePlugin } from 'vitepress-tuck'
import { pdfMarkdownPlugin } from './markdown.js'

export const pdf = definePlugin(() => ({
  name: 'vitepress-plugin-pdf',
  client: {
    enhance: 'enhanceAppWithPDF',
  },
  markdown: {
    config: (md) => {
      md.use(pdfMarkdownPlugin)
    },
  },
  vite: {
    ssr: {
      noExternal: ['vitepress-plugin-pdf'],
    },
    optimizeDeps: {
      include: ['@pengzhanbo/utils'],
    },
  },
}))
