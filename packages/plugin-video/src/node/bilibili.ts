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

const BILIBILI_LINK = 'https://player.bilibili.com/player.html'

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
