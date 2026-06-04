import type { FileTreeAttrs, FileTreeNode } from './fileTreePlugin.js'
import { definePlugin } from 'vitepress-tuck'
import { fileTreeMarkdownPlugin, parseFileTreeNodeInfo, parseFileTreeRawContent } from './fileTreePlugin.js'

export { fileTreeMarkdownPlugin, parseFileTreeNodeInfo, parseFileTreeRawContent }
export type { FileTreeAttrs, FileTreeNode }

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
