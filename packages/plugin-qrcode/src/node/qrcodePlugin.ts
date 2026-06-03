/**
 * @[qrcode svg card title="xxx"](text)
 */

import type { PluginSimple } from 'markdown-it'
import type { MarkdownEnv } from 'vitepress'
import { omit } from '@pengzhanbo/utils'
import { createContainerSyntaxPlugin, createEmbedRuleBlock, isLinkWithProtocol, resolveAttrs, resolveRouteLink, stringifyAttrs } from 'vitepress-plugin-toolkit'

export const qrcodePlugin: PluginSimple = (md) => {
  createEmbedRuleBlock(md, {
    type: 'qrcode',
    syntaxPattern: /^@\[qrcode([^\]]*)\]\(([^)]*)\)/,
    meta([, info, text]) {
      const attrs = resolveAttrs(info)
      const { card, ...rest } = omit(attrs, ['text'])

      return {
        text,
        ...rest,
        mode: rest.mode || (card ? 'card' : 'img'),
      }
    },
    content(meta, _, env) {
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

function processText(text: string, env: MarkdownEnv) {
  // 带协议头的，认为是链接，直接返回
  // 由于页内 hash 并不容易识别，直接忽略，视为普通文本
  if (isLinkWithProtocol(text) || text[0] === '#')
    return text

  const [pathname] = text.split(/[#?]/, 2)
  // 检查是否可能是内部链接
  if (/^\.{0,2}\/[\s\S](?:\/|\.html|\.md)$/.test(pathname)) {
    return resolveRouteLink(text, env)
  }

  return text
}
