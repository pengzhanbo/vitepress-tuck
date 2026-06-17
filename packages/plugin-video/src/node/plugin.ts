import type { VideoPluginOptions } from './types.js'
import { definePlugin } from 'vitepress-tuck'
import { artPlayerVitePlugin } from './artplayer.js'
import { videoMarkdownPlugin } from './markdown.js'

/**
 * VitePress plugin for embedding videos from multiple providers (AcFun, Bilibili,
 * YouTube) and self-hosted sources via ArtPlayer.
 *
 * VitePress 插件，用于嵌入来自多个提供商（AcFun、Bilibili、YouTube）的视频，
 * 以及通过 ArtPlayer 嵌入自托管视频源。
 *
 * The plugin registers markdown-it embed rules for each provider and wires up
 * the Vite configuration required by ArtPlayer (define flags for optional
 * codec libraries, dependency optimization, and SSR settings).
 *
 * 该插件为每个提供商注册 markdown-it 嵌入规则，并配置 ArtPlayer 所需的
 * Vite 配置（为可选编解码库定义标志、依赖优化与 SSR 设置）。
 *
 * @param options - Provider enablement options / 提供商启用选项
 * @returns VitepressPlugin instance / VitepressPlugin 实例
 * @example
 * `.vitepress/config.ts`
 * ```ts
 * import { defineConfig } from 'vitepress'
 * import { video } from 'vitepress-plugin-video'
 *
 * export default defineConfig({
 *   // via vitepress-tuck
 *   // plugins: [video()],
 *   markdown: { ... },
 * })
 * ```
 */
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
