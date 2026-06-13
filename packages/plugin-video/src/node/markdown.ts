import type { PluginWithOptions } from 'markdown-it'
import type { VideoPluginOptions } from './types.js'
import { acfunMarkdownPlugin } from './acfun.js'
import { artPlayerMarkdownPlugin } from './artplayer.js'
import { bilibiliMarkdownPlugin } from './bilibili.js'
import { youtubeMarkdownPlugin } from './youtube.js'

export const videoMarkdownPlugin: PluginWithOptions<VideoPluginOptions> = (md, options = {}) => {
  if (options.acfun !== false)
    md.use(acfunMarkdownPlugin)

  if (options.bilibili !== false)
    md.use(bilibiliMarkdownPlugin)

  if (options.youtube !== false)
    md.use(youtubeMarkdownPlugin)

  if (options.artplayer !== false)
    md.use(artPlayerMarkdownPlugin)
}
