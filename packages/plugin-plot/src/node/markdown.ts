/**
 * !!这里的文本将被黑幕隐藏，通过点击或者 hover 才可重现!!
 *
 * !!The text here will be hidden by a spoiler, and can only be revealed by clicking or hovering!!
 */

import type { PluginWithOptions } from 'markdown-it'
import type { RuleInline } from 'markdown-it/lib/parser_inline.mjs'
import type { PlotOptions } from './types.js'

/**
 * Plot markdown-it plugin - Hide text with a spoiler effect.
 *
 * 黑幕 markdown-it 插件 - 使用黑幕效果隐藏文本。
 *
 * Registers an inline rule that parses `!!hidden text!!` syntax and emits
 * `plot_inline_open` / `plot_inline_close` tokens wrapping a text token.
 * The rule is inserted before the `emphasis` rule to avoid conflicts.
 *
 * 注册一个内联规则，解析 `!!隐藏文本!!` 语法，并生成
 * `plot_inline_open` / `plot_inline_close` 包裹文本 token 的结构。
 * 该规则插入到 `emphasis` 规则之前以避免冲突。
 *
 * @param md - Markdown-it instance to extend / 要扩展的 Markdown-it 实例
 * @param options - Plugin options / 插件选项
 * @example
 * ```ts
 * import MarkdownIt from 'markdown-it'
 * import { plotMarkdownPlugin } from 'vitepress-plugin-plot/node'
 *
 * const md = new MarkdownIt()
 * md.use(plotMarkdownPlugin, { trigger: 'click', effect: 'blur' })
 *
 * md.render('!!secret!!')
 * // => <p><Plot trigger="click" effect="blur">secret</Plot></p>
 * ```
 */
export const plotMarkdownPlugin: PluginWithOptions<PlotOptions> = (md, options = {}) => {
  const { trigger, effect } = options
  /**
   * Inline rule that matches `!!content!!` spoiler syntax.
   *
   * 匹配 `!!内容!!` 黑幕语法的内联规则。
   *
   * @param state - Inline parser state / 内联解析器状态
   * @param silent - If true, only probe without mutating state / 为 true 时仅探测，不修改状态
   * @returns True when the syntax is matched and tokens are emitted / 匹配成功并生成 token 时返回 true
   */
  const plotDef: RuleInline = (state, silent) => {
    let found = false
    const max = state.posMax
    const start = state.pos

    if (
      state.src.charCodeAt(start) !== 0x21
      || state.src.charCodeAt(start + 1) !== 0x21
    ) {
      return false
    }

    const next = state.src.charCodeAt(start + 2)

    // - !! xxx  |  !!!xxx
    //     ^     |    ^
    if (next === 0x20 || next === 0x21)
      return false

    /* istanbul ignore if -- @preserve */
    if (silent)
      return false

    // - !!!!
    if (max - start < 5)
      return false

    state.pos = start + 2

    while (state.pos < max) {
      if (state.src.charCodeAt(state.pos) === 0x21
        && state.src.charCodeAt(state.pos + 1) === 0x21) {
        found = true
        break
      }

      state.md.inline.skipToken(state)
    }

    if (
      !found
      || start + 2 === state.pos
      // - !!xxx !!
      //        ^
      || state.src.charCodeAt(state.pos - 1) === 0x20
    ) {
      state.pos = start

      return false
    }
    const content = state.src.slice(start + 2, state.pos)

    // found!
    state.posMax = state.pos
    state.pos = start + 2

    const openToken = state.push('plot_inline_open', 'VPPlot', 1)
    openToken.markup = '!!'
    openToken.content = content
    if (trigger)
      openToken.attrPush(['trigger', trigger])
    if (effect)
      openToken.attrPush(['effect', effect])

    const contentToken = state.push('text', '', 0)
    contentToken.content = content

    const closeToken = state.push('plot_inline_close', 'VPPlot', -1)
    closeToken.markup = '!!'

    state.pos = state.posMax + 2
    state.posMax = max

    return true
  }
  md.inline.ruler.before('emphasis', 'plot', plotDef)
}
