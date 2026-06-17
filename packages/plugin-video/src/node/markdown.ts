import type { PluginWithOptions } from 'markdown-it'
import type { VideoPluginOptions } from './types.js'
import { acfunMarkdownPlugin } from './acfun.js'
import { artPlayerMarkdownPlugin } from './artplayer.js'
import { bilibiliMarkdownPlugin } from './bilibili.js'
import { youtubeMarkdownPlugin } from './youtube.js'

/**
 * markdown-it plugin that registers all video embed rules for the video plugin.
 *
 * markdown-it 插件，为视频插件注册全部视频嵌入规则。
 *
 * Each provider (AcFun, Bilibili, YouTube, ArtPlayer) is enabled by default.
 * Pass the corresponding option as `false` to disable a specific provider.
 *
 * 每个提供商（AcFun、Bilibili、YouTube、ArtPlayer）默认开启。
 * 将对应选项设置为 `false` 可禁用特定提供商。
 *
 * @param md - markdown-it instance to extend / 待扩展的 markdown-it 实例
 * @param options - Provider enablement options / 提供商启用选项
 * @example
 * md.use(videoMarkdownPlugin, { bilibili: false })
 */
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
