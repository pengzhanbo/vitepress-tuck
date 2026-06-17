/**
 * VitePress plugin for embedding videos from AcFun, Bilibili, YouTube, and
 * self-hosted sources via ArtPlayer.
 *
 * VitePress 视频插件，支持嵌入 AcFun、Bilibili、YouTube 以及通过 ArtPlayer
 * 嵌入自托管视频源。
 *
 * @example
 * `.vitepress/config.ts`
 * ```ts
 * import { defineConfig } from 'vitepress-tuck'
 * import video from 'vitepress-plugin-video'
 *
 * export default defineConfig({
 *   plugins: [video()],
 * })
 * ```
 */
import { video } from './plugin.js'

export * from './acfun.js'
export * from './artplayer.js'
export * from './bilibili.js'
export * from './markdown.js'
export * from './plugin.js'
export * from './types.js'
export * from './youtube.js'

export default video
