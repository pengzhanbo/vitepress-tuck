import type { PluginWithOptions } from 'markdown-it'
import type { VideoPluginOptions } from './types.js'
import { definePlugin } from 'vitepress-tuck'
import { acfunPlugin } from './acfunPlugin.js'
import { artPlayerPlugin, artPlayerVitePlugin } from './artplayerPlugin.js'
import { bilibiliPlugin } from './bilibiliPlugin.js'
import { youtubePlugin } from './youtubePlugin.js'

export {
  acfunPlugin,
  artPlayerPlugin,
  artPlayerVitePlugin,
  bilibiliPlugin,
  youtubePlugin,
}

export const videoPlugin: PluginWithOptions<VideoPluginOptions> = (md, options = {}) => {
  if (options.acfun !== false)
    md.use(acfunPlugin)

  if (options.bilibili !== false)
    md.use(bilibiliPlugin)

  if (options.youtube !== false)
    md.use(youtubePlugin)

  if (options.artplayer !== false)
    md.use(artPlayerPlugin)
}

export default definePlugin((options?: VideoPluginOptions) => ({
  name: 'vitepress-plugin-video',
  client: {
    enhance: 'enhanceAppWithVideo',
  },
  markdown: {
    config(md) {
      md.use(videoPlugin, options)
    },
  },
  vite: {
    plugins: [artPlayerVitePlugin()],
    optimizeDeps: {
      exclude: ['@pengzhanbo/utils', 'artplayer', 'dashjs', 'hls.js', 'mpegts.js/dist/mpegts.js'],
    },
    ssr: {
      noExternal: ['vitepress-plugin-video'],
    },
  },
}))
