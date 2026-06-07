import { definePlugin } from 'vitepress-tuck'
import { fileTreeMarkdownPlugin } from './fileTreePlugin.js'

export * from './container.js'
export * from './fence.js'
export * from './parseNodeInfo.js'
export * from './types.js'
export { fileTreeMarkdownPlugin }

export default definePlugin(() => ({
  name: 'vitepress-plugin-file-tree',
  client: {
    enhance: 'enhanceAppWithFileTree',
  },
  markdown: {
    config: (md) => {
      md.use(fileTreeMarkdownPlugin)
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
