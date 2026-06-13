import { definePlugin } from 'vitepress-tuck'
import { qrcodeMarkdownPlugin } from './markdown.js'

export const qrcode = definePlugin(() => ({
  name: 'vitepress-plugin-qrcode',
  client: {
    enhance: 'enhanceAppWithQrcode',
  },
  markdown: {
    config(md) {
      md.use(qrcodeMarkdownPlugin)
    },
  },
  vite: {
    optimizeDeps: {
      include: ['qrcode'],
    },
  },
}))
