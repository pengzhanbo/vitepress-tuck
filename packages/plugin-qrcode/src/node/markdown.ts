/**
 * Markdown-it plugin for embedding QR codes in VitePress.
 *
 * 用于在 VitePress 中嵌入二维码的 markdown-it 插件。
 *
 * Supports two syntax forms:
 * - Embed syntax: `@[qrcode svg card title="xxx"](text)`
 * - Container syntax: `::: qrcode ... :::`
 *
 * 支持两种语法形式：
 * - 嵌入语法：`@[qrcode svg card title="xxx"](text)`
 * - 容器语法：`::: qrcode ... :::`
 *
 * @example
 * ```md
 * @[qrcode card title="Scan Me"](https://example.com)
 * ```
 */

import type { PluginSimple } from 'markdown-it'
import type { MarkdownEnv } from 'vitepress'
import { omit } from '@pengzhanbo/utils'
import { createContainerSyntaxPlugin, createEmbedRuleBlock, isLinkWithProtocol, resolveAttrs, resolveRouteLink, stringifyAttrs } from 'vitepress-plugin-toolkit'

/**
 * Registers QR code markdown-it rules for both embed and container syntaxes.
 *
 * 为嵌入语法和容器语法注册二维码 markdown-it 规则。
 *
 * The plugin converts markdown syntax into `<VPQrcode>` component tags with
 * resolved attributes. Internal links are resolved relative to the current
 * page using the VitePress route system.
 *
 * 该插件将 markdown 语法转换为带有已解析属性的 `<VPQrcode>` 组件标签。
 * 内部链接使用 VitePress 路由系统相对于当前页面进行解析。
 *
 * @param md - The markdown-it instance to extend / 要扩展的 markdown-it 实例
 * @example
 * ```ts
 * import MarkdownIt from 'markdown-it'
 * import { qrcodeMarkdownPlugin } from 'vitepress-plugin-qrcode/node'
 *
 * const md = new MarkdownIt()
 * md.use(qrcodeMarkdownPlugin)
 * ```
 */
export const qrcodeMarkdownPlugin: PluginSimple = (md) => {
  createEmbedRuleBlock(md, {
    type: 'qrcode',
    meta(info, text) {
      const attrs = resolveAttrs(info)
      const { card, ...rest } = omit(attrs, ['text'])

      return {
        text,
        ...rest,
        mode: rest.mode || (card ? 'card' : 'img'),
      }
    },
    content(meta, env) {
      meta.text = processText(meta.text, env)
      return `<VPQrcode${stringifyAttrs(meta)} />`
    },
  })

  createContainerSyntaxPlugin(md, 'qrcode', (tokens, index, _, env: MarkdownEnv) => {
    const { content, meta } = tokens[index]
    const { card, ...rest } = omit(meta, ['text'])
    const text = processText(content.trim(), env)
    const props = { text, ...rest, mode: rest.mode || (card ? 'card' : 'img') }
    return `<VPQrcode ${stringifyAttrs(props)} />`
  })
}

/**
 * Processes QR code text content, resolving internal links to absolute URLs.
 *
 * 处理二维码文本内容，将内部链接解析为绝对 URL。
 *
 * Resolution rules:
 * - Protocol links (such as `https://`) and hash anchors (`#section`) are returned as-is.
 * - Paths matching internal link patterns (such as `/path`, `./path`, `../path.md`)
 *   are resolved via the VitePress route system.
 * - Other text is returned unchanged.
 *
 * 解析规则：
 * - 协议链接（例如 `https://`）和 hash 锚点（`#section`）原样返回。
 * - 匹配内部链接模式的路径（例如 `/path`、`./path`、`../path.md`）通过
 *   VitePress 路由系统解析。
 * - 其他文本原样返回。
 *
 * @param text - The raw text content to process / 要处理的原始文本内容
 * @param env - The VitePress markdown environment with route context / 包含路由上下文的 VitePress markdown 环境
 * @returns The processed text, with internal links resolved / 处理后的文本，内部链接已解析
 */
function processText(text: string, env: MarkdownEnv) {
  // 带协议头的，认为是链接，直接返回
  // 由于页内 hash 并不容易识别，直接忽略，视为普通文本
  if (isLinkWithProtocol(text) || text[0] === '#')
    return text

  const [pathname] = text.split(/[#?]/, 2)
  // 检查是否可能是内部链接
  if (/^\.{0,2}\/[\s\S]*(?:\/|\.html|\.md)$/.test(pathname)) {
    return resolveRouteLink(text, env)
  }

  return text
}
