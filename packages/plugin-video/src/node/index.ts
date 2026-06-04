import type { PluginWithOptions } from 'markdown-it'
import type { VideoPluginOptions } from './types.js'
import { definePlugin } from 'vitepress-tuck'
import { acfunMarkdownPlugin } from './acfunPlugin.js'
import { artPlayerMarkdownPlugin, artPlayerVitePlugin } from './artplayerPlugin.js'
import { bilibiliMarkdownPlugin } from './bilibiliPlugin.js'
import { youtubeMarkdownPlugin } from './youtubePlugin.js'

export {
  acfunMarkdownPlugin,
  artPlayerMarkdownPlugin,
  artPlayerVitePlugin,
  bilibiliMarkdownPlugin,
  youtubeMarkdownPlugin,
}

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

export default definePlugin((options?: VideoPluginOptions) => ({
  name: 'vitepress-plugin-video',
  client: {
    enhance: 'enhanceAppWithVideo',
  },
  markdown: {
    config(md) {
      md.use(videoMarkdownPlugin, options)
    },
  },
  vite: {
    plugins: [artPlayerVitePlugin()],
    optimizeDeps: {
      include: ['@pengzhanbo/utils', 'artplayer', 'dashjs', 'hls.js', 'mpegts.js/dist/mpegts.js'],
    },
    ssr: {
      noExternal: ['vitepress-plugin-video'],
    },
  },
}))
