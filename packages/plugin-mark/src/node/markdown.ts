import type { PluginSimple } from 'markdown-it'
import { inlineRule } from '@mdit/plugin-inline-rule'

/**
 * Mark (highlight) markdown-it plugin.
 *
 * 马克笔 markdown-it 插件。
 *
 * Registers a nested inline rule with the `=` marker so that content wrapped
 * in `==...==` is parsed into a `mark` token and rendered with the
 * client-side `VPMark` component. Because the rule is nested, inline markdown
 * syntax (bold, italic, links, code, etc.) inside the markers is fully
 * parsed. The rule is placed before the core `emphasis` rule so that
 * `==**bold**==` and similar combinations resolve naturally.
 *
 * 注册一个使用 `=` 标记的嵌套内联规则，使 `==...==` 包裹的内容被解析为
 * `mark` token，并由客户端 `VPMark` 组件渲染。由于该规则是嵌套的，标记内部
 * 的 markdown 内联语法（加粗、斜体、链接、代码等）会被完整解析。规则被放置
 * 在核心 `emphasis` 规则之前，使 `==**加粗**==` 等组合能自然解析。
 *
 * @example
 * ```md
 * ==Marked text==
 *
 * ==Marked **bold** text=={.tip}
 * ```
 *
 * @param md - Markdown-it instance / Markdown-it 实例
 */
export const markdownPlugin: PluginSimple = (md) => {
  inlineRule(md, {
    marker: '=',
    tag: 'VPMark',
    token: 'mark',
    nested: true,
    placement: 'before-emphasis',
  })
}
