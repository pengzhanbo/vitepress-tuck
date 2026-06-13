import { definePlugin } from 'vitepress-tuck'
import { fileTreeMarkdownPlugin } from './markdown.js'

export const fileTree = definePlugin(() => ({
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
