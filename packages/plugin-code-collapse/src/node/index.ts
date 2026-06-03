import type { CollapsedLinesOptions } from './types.js'
import { definePlugin } from 'vitepress-tuck'
import { collapsedLinesPlugin } from './codeCollapsePlugin.js'

export { collapsedLinesPlugin }

export default definePlugin((options?: CollapsedLinesOptions) => ({
  name: 'vitepress-plugin-code-collapse',
  client: {
    enhance: 'enhanceAppWithCollapsedLines',
  },
  markdown: {
    config: (md) => {
      md.use(collapsedLinesPlugin, options)
    },
  },
}))
