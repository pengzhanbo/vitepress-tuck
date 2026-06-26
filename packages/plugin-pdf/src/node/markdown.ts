import type { PluginSimple } from 'markdown-it'
import path from 'node:path'
import { isNumber } from '@pengzhanbo/utils'
import { createEmbedRuleBlock, parseRect, resolveAttrs, stringifyAttrs } from 'vitepress-plugin-toolkit'

/**
 * Markdown-it plugin that registers the `@[pdf]` embed rule for VitePress.
 *
 * 注册 `@[pdf]` 嵌入规则的 markdown-it 插件，用于在 VitePress 中嵌入 PDF。
 *
 * The plugin parses the embed syntax into a `VPPdf` Vue component with the
 * appropriate attributes. Supported attributes include `page` (or `p`),
 * `no-toolbar`, `zoom`, `width`, `height`, `ratio`, and the PDF source URL.
 *
 * 该插件将嵌入语法解析为带有相应属性的 `VPPdf` Vue 组件。
 * 支持的属性包括 `page`（或 `p`）、`no-toolbar`、`zoom`、`width`、`height`、`ratio`
 * 以及 PDF 源 URL。
 *
 * @param md - The markdown-it instance / markdown-it 实例
 * @example
 * // Markdown usage
 * ```md
 * @[pdf](/files/sample.pdf)
 * @[pdf 1](/files/sample.pdf)
 * @[pdf 1 no-toolbar width="100%" height="600px" zoom="1" ratio="1:1"](/files/sample.pdf)
 * ```
 *
 * @example
 * // Register the plugin manually
 * ```ts
 * import MarkdownIt from 'markdown-it'
 * import { pdfMarkdownPlugin } from 'vitepress-plugin-pdf/node'
 *
 * const md = new MarkdownIt()
 * md.use(pdfMarkdownPlugin)
 * ```
 */
export const pdfMarkdownPlugin: PluginSimple = (md) => {
  createEmbedRuleBlock(md, {
    type: 'pdf',
    meta(info, src) {
      const attrs = resolveAttrs(info!)
      const rawPage = attrs.page ?? attrs.p
      const parsedPage = Number(rawPage)
      const zoom = +attrs.zoom

      return {
        src,
        page: Number.isFinite(parsedPage) && parsedPage > 0 ? parsedPage : 1,
        noToolbar: Boolean(attrs.noToolbar ?? false),
        zoom: isNumber(zoom) && !Number.isNaN(zoom) ? zoom : 50,
        width: attrs.width ? parseRect(attrs.width) : '100%',
        height: attrs.height ? parseRect(attrs.height) : '',
        ratio: attrs.ratio ?? '',
        title: path.basename(src || ''),
      }
    },
    content: meta => `<VPPdf${stringifyAttrs(meta)} />`,
  })
}
