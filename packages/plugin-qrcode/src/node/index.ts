import { definePlugin } from 'vitepress-tuck'
import { qrcodeMarkdownPlugin } from './qrcodePlugin.js'

export { qrcodeMarkdownPlugin }

export default definePlugin(() => ({
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
