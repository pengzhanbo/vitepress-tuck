import type { CodeTreePluginOptions } from './types.js'
import { definePlugin } from 'vitepress-tuck'
import { codeTreeMarkdownPlugin } from './markdown.js'

/**
 * VitePress plugin that renders code tree structures in markdown.
 *
 * VitePress 插件，在 markdown 中渲染代码树结构。
 *
 * @example
 * `.vitepress/config.ts`
 * ```ts
 * import { definePlugin } from 'vitepress-tuck'
 * import codeTree from 'vitepress-plugin-code-tree'
 * export default defineConfig({
 *   plugins: [codeTree()],
 * })
 * ```
 */
export const codeTree = definePlugin((options?: CodeTreePluginOptions) => ({
  name: 'vitepress-plugin-code-tree',
  client: { enhance: 'enhanceAppWithCodeTree' },
  markdown: {
    config(md) {
      md.use(codeTreeMarkdownPlugin, options)
    },
  },
}))
