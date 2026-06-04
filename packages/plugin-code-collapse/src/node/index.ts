import type { CollapsedLinesOptions } from './types.js'
import { definePlugin } from 'vitepress-tuck'
import { collapsedLinesMarkdownPlugin } from './codeCollapsePlugin.js'

export { collapsedLinesMarkdownPlugin }

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
export default definePlugin((options?: CollapsedLinesOptions) => ({
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
