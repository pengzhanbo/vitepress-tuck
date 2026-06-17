/**
 * @[bilibili](bid)
 * @[bilibili](aid cid)
 * @[bilibili](bid aid cid)
 * @[bilibili p1 autoplay time=1](aid cid)
 */

import type { PluginSimple } from 'markdown-it'
import { URLSearchParams } from 'node:url'
import { createEmbedRuleBlock, parseRect, resolveAttrs, stringifyAttrs } from 'vitepress-plugin-toolkit'
import { timeToSeconds } from './utils.js'

/**
 * Base URL of the Bilibili embeddable player endpoint.
 *
 * Bilibili 可嵌入播放器端点的基础 URL。
 */
const BILIBILI_LINK = 'https://player.bilibili.com/player.html'

/**
 * markdown-it plugin that registers the `@[bilibili](...)` embed rule for
 * embedding Bilibili videos.
 *
 * markdown-it 插件，注册 `@[bilibili](...)` 嵌入规则，用于嵌入 Bilibili 视频。
 *
 * The container body accepts one or more ids separated by whitespace:
 * - A `BV`-prefixed bvid, and/or
 * - An `aid` (numeric) and `cid` (numeric).
 *
 * The container header supports a `pN` token to select a specific page
 * (multi-part video), plus `autoplay` and `time` attributes.
 *
 * 容器主体接受以空白符分隔的一个或多个 id：
 * - 以 `BV` 开头的 bvid，和/或
 * - `aid`（数字）与 `cid`（数字）。
 *
 * 容器头部支持 `pN` 标记以选择特定分页（多 P 视频），以及 `autoplay` 与
 * `time` 属性。
 *
 * @param md - markdown-it instance to extend / 待扩展的 markdown-it 实例
 * @example
 * ```md
 * @[bilibili](BV1xx411c7mD)
 * ```
 * @example
 * ```md
 * @[bilibili p1 autoplay time=60](av170001 27976570)
 * ```
 */
export const bilibiliMarkdownPlugin: PluginSimple = (md) => {
  createEmbedRuleBlock(md, {
    type: 'bilibili',
    name: 'video_bilibili',
    meta(info, source) {
      let page = 0
      info = info.replace(/^p(\d+)/, (_, p) => {
        page = +p
        return ''
      })
      const attrs = resolveAttrs(info)
      const ids = source.trim().split(/\s+/)
      const bvid = ids.find(id => id.startsWith('BV'))
      const [aid, cid] = ids.filter(id => !id.startsWith('BV'))

      return {
        page,
        bvid,
        aid,
        cid,
        autoplay: attrs.autoplay ?? false,
        time: timeToSeconds(attrs.time),
        title: attrs.title || 'Bilibili',
        width: attrs.width ? parseRect(attrs.width) : '100%',
        height: attrs.height ? parseRect(attrs.height) : undefined,
        ratio: attrs.ratio,
      }
    },
    content(meta) {
      const params = new URLSearchParams()

      meta.bvid && params.set('bvid', meta.bvid)
      meta.aid && params.set('aid', meta.aid)
      meta.cid && params.set('cid', meta.cid)
      meta.page && params.set('p', meta.page.toString())
      meta.time && params.set('t', meta.time.toString())

      params.set('autoplay', meta.autoplay ? '1' : '0')
      params.set('high_quality', '1')

      const src = `${BILIBILI_LINK}?${params.toString()}`
      const { width, height, ratio, title } = meta

      return `<VPVideoEmbed${stringifyAttrs({ src, width, height, ratio, title, type: 'bilibili' })} />`
    },
  })
}
