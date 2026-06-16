/**
 * @[acfun](acid)
 */

import type { PluginSimple } from 'markdown-it'
import { createEmbedRuleBlock, parseRect, resolveAttrs, stringifyAttrs } from 'vitepress-plugin-toolkit'

const AC_FUN_LINK = 'https://www.acfun.cn/player'

export const acfunMarkdownPlugin: PluginSimple = (md) => {
  createEmbedRuleBlock(md, {
    type: 'acfun',
    name: 'video_acfun',
    meta(info, id) {
      const attrs = resolveAttrs(info)

      return {
        id,
        title: attrs.title || 'AcFun',
        width: attrs.width ? parseRect(attrs.width) : '100%',
        height: attrs.height ? parseRect(attrs.height) : undefined,
        ratio: attrs.ratio ?? '16:10',
      }
    },
    content(meta) {
      const { id, ...rest } = meta
      const src = `${AC_FUN_LINK}/${id}`
      return `<VPVideoEmbed${stringifyAttrs({ src, type: 'acfun', ...rest })} />`
    },
  })
}
