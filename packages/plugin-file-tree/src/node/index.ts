import { definePlugin } from 'vitepress-tuck'
import { fileTreePlugin } from './fileTreePlugin.js'

export { fileTreePlugin }

export default definePlugin(() => ({
  name: 'vitepress-plugin-file-tree',
  client: {
    enhance: 'enhanceAppWithFileTree',
  },
  markdown: {
    config: (md) => {
      md.use(fileTreePlugin)
    },
  },
  vite: {
    optimizeDeps: {
      exclude: ['@pengzhanbo/utils'],
    },
    ssr: {
      noExternal: ['vitepress-plugin-file-tree'],
    },
  },
}))
