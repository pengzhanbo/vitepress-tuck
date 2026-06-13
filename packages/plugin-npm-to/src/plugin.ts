import type { NpmToPluginOptions } from './types.js'
import { definePlugin } from 'vitepress-tuck'
import { npmToMarkdownPlugin } from './markdown.js'

export const npmTo = definePlugin((options?: NpmToPluginOptions) => ({
  name: 'vitepress-plugin-npm-to',
  markdown: {
    config: (md) => {
      md.use(npmToMarkdownPlugin, options)
    },
  },
}))
