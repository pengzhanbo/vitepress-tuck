import { definePlugin } from 'vitepress-tuck'
import { codepenPlugin } from './codepenPlugin.js'

export { codepenPlugin }

export default definePlugin(() => ({
  name: 'vitepress-plugin-codepen',
  client: {
    enhance: 'enhanceAppWithCodepen',
  },
  markdown: {
    config(md) {
      md.use(codepenPlugin)
    },
  },
  vite: {
    optimizeDeps: {
      include: ['@pengzhanbo/utils'],
    },
    ssr: {
      noExternal: ['vitepress-plugin-codepen'],
    },
  },
}))
