import type { ObsidianPluginOptions } from './types'
import { definePlugin } from 'vitepress-tuck'
import { obsidianMarkdownPlugin } from './obsidian.js'

export const obsidian = definePlugin((options: ObsidianPluginOptions = {}) => ({
  name: 'vitepress-plugin-obsidian',
  markdown: {
    config: (md) => {
      md.use(obsidianMarkdownPlugin, options)
    },
  },
}))
