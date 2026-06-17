/**
 * @[acfun](acid)
 */

import type { PluginSimple } from 'markdown-it'
import { createEmbedRuleBlock, parseRect, resolveAttrs, stringifyAttrs } from 'vitepress-plugin-toolkit'

/**
 * Base URL of the AcFun embeddable player endpoint.
 *
 * AcFun 可嵌入播放器端点的基础 URL。
 */
const AC_FUN_LINK = 'https://www.acfun.cn/player'

/**
 * markdown-it plugin that registers the `@[acfun](acid)` embed rule for
 * embedding AcFun videos.
 *
 * markdown-it 插件，注册 `@[acfun](acid)` 嵌入规则，用于嵌入 AcFun 视频。
 *
 * The container id (`acid`) is used to build the AcFun player URL. Optional
 * attributes (`title`, `width`, `height`, `ratio`) can be declared in the
 * container header to customize the embed.
 *
 * 容器 id（`acid`）用于构建 AcFun 播放器 URL。可在容器头部声明可选属性
 * （`title`、`width`、`height`、`ratio`）以自定义嵌入效果。
 *
 * @param md - markdown-it instance to extend / 待扩展的 markdown-it 实例
 * @example
 * ```md
 * @[acfun](ac4456321)
 * ```
 * @example
 * ```md
 * @[acfun title="Demo" width="80%"](ac4456321)
 * ```
 */
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
