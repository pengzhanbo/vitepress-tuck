import type { PluginWithOptions } from 'markdown-it'
import type { ObsidianPluginOptions } from './types'
import { calloutMarkdownPlugin } from './callout.js'
import { commentMarkdownPlugin } from './comment.js'
import { embedLinkMarkdownPlugin } from './embedLink.js'
import { loadFiles } from './loadFiles.js'
import { wikiLinkMarkdownPlugin } from './wikiLink.js'

export const obsidianMarkdownPlugin: PluginWithOptions<ObsidianPluginOptions> = (md, options = {}) => {
  const { callout, comment, embedLink, wikiLink } = options

  if (callout !== false)
    md.use(calloutMarkdownPlugin)

  if (comment !== false)
    md.use(commentMarkdownPlugin)

  if (wikiLink !== false || embedLink !== false) {
    const files = loadFiles()
    if (embedLink !== false)
      md.use(embedLinkMarkdownPlugin, files)

    if (wikiLink !== false)
      md.use(wikiLinkMarkdownPlugin, files)
  }
}
