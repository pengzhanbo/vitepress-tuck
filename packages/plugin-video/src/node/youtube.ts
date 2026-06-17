/**
 * @[youtube](id)
 */

import type { PluginSimple } from 'markdown-it'
import { URLSearchParams } from 'node:url'
import { createEmbedRuleBlock, parseRect, resolveAttrs, stringifyAttrs } from 'vitepress-plugin-toolkit'
import { timeToSeconds } from './utils.js'

/**
 * Base URL of the YouTube embeddable player endpoint.
 *
 * YouTube 可嵌入播放器端点的基础 URL。
 */
const YOUTUBE_LINK = 'https://www.youtube.com/embed/'

/**
 * markdown-it plugin that registers the `@[youtube](id)` embed rule for
 * embedding YouTube videos.
 *
 * markdown-it 插件，注册 `@[youtube](id)` 嵌入规则，用于嵌入 YouTube 视频。
 *
 * The container body provides the YouTube video id. The container header
 * supports `autoplay`, `loop`, `start`, and `end` attributes, where `start`
 * and `end` accept either a numeric seconds value or a `hh:mm:ss` time string.
 *
 * 容器主体提供 YouTube 视频 id。容器头部支持 `autoplay`、`loop`、`start` 与
 * `end` 属性，其中 `start` 与 `end` 接受数字秒数或 `hh:mm:ss` 时间字符串。
 *
 * @param md - markdown-it instance to extend / 待扩展的 markdown-it 实例
 * @example
 * ```md
 * @[youtube](dQw4w9WgXcQ)
 * ```
 * @example
 * ```md
 * @[youtube autoplay start=30 end=01:00](dQw4w9WgXcQ)
 * ```
 */
export const youtubeMarkdownPlugin: PluginSimple = (md) => {
  createEmbedRuleBlock(md, {
    type: 'youtube',
    name: 'video_youtube',
    meta(info, id) {
      const attrs = resolveAttrs(info)

      return {
        id,
        autoplay: attrs.autoplay ?? false,
        loop: attrs.loop ?? false,
        start: timeToSeconds(attrs.start),
        end: timeToSeconds(attrs.end),
        title: attrs.title || 'YouTube',
        width: attrs.width ? parseRect(attrs.width) : '100%',
        height: attrs.height ? parseRect(attrs.height) : undefined,
        ratio: attrs.ratio,
      }
    },
    content(meta) {
      const params = new URLSearchParams()

      meta.autoplay && params.set('autoplay', '1')
      meta.loop && params.set('loop', '1')
      meta.start && params.set('start', meta.start.toString())
      meta.end && params.set('end', meta.end.toString())

      const src = `${YOUTUBE_LINK}/${meta.id}?${params.toString()}`
      const { width, height, ratio, title } = meta

      return `<VPVideoEmbed${stringifyAttrs({ src, width, height, ratio, title, type: 'youtube' })} />`
    },
  })
}
