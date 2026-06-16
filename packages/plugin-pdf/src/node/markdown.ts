/**
 * @[pdf](/xxx)
 * @[pdf 1](/xxx)
 * @[pdf 1 no-toolbar width="100%" height="600px" zoom="1" ratio="1:1"](/xxx)
 */
import type { PluginSimple } from 'markdown-it'
import path from 'node:path'
import { createEmbedRuleBlock, parseRect, resolveAttrs, stringifyAttrs } from 'vitepress-plugin-toolkit'

export const pdfMarkdownPlugin: PluginSimple = (md) => {
  createEmbedRuleBlock(md, {
    type: 'pdf',
    meta(info, src) {
      const attrs = resolveAttrs(info!)
      return {
        src,
        page: +(attrs.page || attrs.p || 1),
        noToolbar: Boolean(attrs.noToolbar ?? false),
        zoom: +attrs.zoom || 50,
        width: attrs.width ? parseRect(attrs.width) : '100%',
        height: attrs.height ? parseRect(attrs.height) : '',
        ratio: attrs.ratio ? parseRect(attrs.ratio) : '',
        title: path.basename(src || ''),
      }
    },
    content: meta => `<VPPdf${stringifyAttrs(meta)} />`,
  })
}
