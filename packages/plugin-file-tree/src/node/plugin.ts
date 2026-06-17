import { definePlugin } from 'vitepress-tuck'
import { fileTreeMarkdownPlugin } from './markdown.js'

/**
 * VitePress plugin for rendering file tree diagrams in markdown.
 *
 * VitePress 插件，用于在 markdown 中渲染文件树图。
 *
 * Registers the `fileTreeMarkdownPlugin` with markdown-it to parse both
 * container syntax (`::: file-tree`) and fence syntax (` ```tree ` or
 * ` ```file-tree `) into interactive collapsible file trees. On the client
 * side, the `VPFileTree` and `VPFileTreeNode` Vue components are injected
 * globally via `virtual:enhance-app`.
 *
 * The rendered tree supports inline comments, focus highlights, diff markers
 * for added or removed entries, and a copy button that outputs the plain-text
 * `tree` command representation.
 *
 * @example
 * `.vitepress/config.ts`
 * ```ts
 * import { defineConfig } from 'vitepress-tuck'
 * import fileTree from 'vitepress-plugin-file-tree'
 *
 * export default defineConfig({
 *   plugins: [fileTree()],
 * })
 * ```
 */
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
