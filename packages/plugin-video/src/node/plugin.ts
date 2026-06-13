import type { VideoPluginOptions } from './types.js'
import { definePlugin } from 'vitepress-tuck'
import { artPlayerVitePlugin } from './artplayer.js'
import { videoMarkdownPlugin } from './markdown.js'

export const video = definePlugin((options?: VideoPluginOptions) => ({
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
