import { definePlugin } from 'vitepress-tuck'
import { qrcodePlugin } from './qrcodePlugin.js'

export { qrcodePlugin }

export default definePlugin(() => ({
  name: 'vitepress-plugin-qrcode',
  client: {
    enhance: 'enhanceAppWithQrcode',
  },
  markdown: {
    config(md) {
      md.use(qrcodePlugin)
    },
  },
  vite: {
    optimizeDeps: {
      exclude: ['qrcode'],
    },
  },
}))
