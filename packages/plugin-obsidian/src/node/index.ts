import type { PluginWithOptions } from 'markdown-it'
import type { ObsidianPluginOptions } from './types'
import { definePlugin } from 'vitepress-tuck'
import { calloutPlugin } from './calloutPlugin.js'
import { commentPlugin } from './commentPlugin.js'
import { embedLinkPlugin } from './embedLinkPlugin.js'
import { loadFiles } from './loadFiles.js'
import { wikiLinkPlugin } from './wikiLinkPlugin.js'

export const obsidianMarkdownPlugin: PluginWithOptions<ObsidianPluginOptions> = (md, options = {}) => {
  const { callout, comment, embedLink, wikiLink } = options

  if (callout !== false)
    md.use(calloutPlugin)

  if (comment !== false)
    md.use(commentPlugin)

  if (wikiLink !== false || embedLink !== false) {
    const files = loadFiles()
    if (embedLink !== false)
      md.use(embedLinkPlugin, files)

    if (wikiLink !== false)
      md.use(wikiLinkPlugin, files)
  }
}

export default definePlugin((options: ObsidianPluginOptions = {}) => ({
  name: 'vitepress-plugin-obsidian',
  markdown: {
    config: (md) => {
      md.use(obsidianMarkdownPlugin, options)
    },
  },
}))
