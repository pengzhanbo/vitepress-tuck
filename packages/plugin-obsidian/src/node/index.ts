import type { PluginWithOptions } from 'markdown-it'
import type { ObsidianPluginOptions } from './types'
import { definePlugin } from 'vitepress-tuck'
import { calloutPlugin } from './calloutPlugin.js'
import { commentPlugin } from './commentPlugin.js'
import { embedLinkPlugin } from './embedLinkPlugin.js'
import { loadFiles } from './loadFiles.js'
import { wikiLinkPlugin } from './wikiLinkPlugin.js'

export const obsidianPlugin: PluginWithOptions<ObsidianPluginOptions> = (md, options = {}) => {
  const { callout = true, comment = true, embedLink = true, wikiLink = true } = options

  if (callout)
    md.use(calloutPlugin)

  if (comment)
    md.use(commentPlugin)

  if (wikiLink || embedLink) {
    const files = loadFiles()
    if (embedLink)
      md.use(embedLinkPlugin, files)

    if (wikiLink)
      md.use(wikiLinkPlugin, files)
  }
}

export default definePlugin((options: ObsidianPluginOptions = {}) => ({
  name: 'vitepress-plugin-obsidian',
  markdown: {
    config: (md) => {
      md.use(obsidianPlugin, options)
    },
  },
}))
