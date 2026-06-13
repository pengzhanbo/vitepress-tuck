import type { CollapsedLinesOptions } from './types.js'
import { definePlugin } from 'vitepress-tuck'
import { collapsedLinesMarkdownPlugin } from './markdown.js'

/**
 * @example
 * ```ts
 * import collapsedLines from 'vitepress-code-collapse'
 * import { defineConfig } from 'vitepress-tuck'
 * export default defineConfig({
 *   plugins: [collapsedLines()]
 * })
 * ```
 * ```
 */
export const collapsedLines = definePlugin((options?: CollapsedLinesOptions) => ({
  name: 'vitepress-plugin-code-collapse',
  client: {
    enhance: 'enhanceAppWithCollapsedLines',
  },
  markdown: {
    config: (md) => {
      md.use(collapsedLinesMarkdownPlugin, options)
    },
  },
}))
