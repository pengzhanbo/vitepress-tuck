/**
 * Obsidian comment syntax using `%%` delimiters. Comments are only visible in
 * edit mode; in this compatibility implementation, content wrapped by `%%` is
 * ignored and not rendered to the page.
 *
 * Obsidian 提供的注释语法，使用 `%%` 包裹文本来添加注释，注释仅在编辑模式中可见。
 * 在此兼容实现中，被 `%%` 包裹的内容，将会直接被忽略，不渲染到页面中。
 *
 * 支持行内注释与跨多行的块级注释：
 *
 * ```markdown
 * 这是一个 %%行内%% 注释。
 *
 * %%
 * 这是一个块级注释
 * 可以跨越多行
 * %%
 * ```
 *
 * @see - https://obsidian.md/zh/help/syntax#%E6%B3%A8%E9%87%8A
 */

import type { PluginSimple } from 'markdown-it'

/**
 * markdown-it plugin that registers Obsidian `%%` comment rules and renderers.
 *
 * markdown-it 插件，注册 Obsidian `%%` 注释规则与渲染器。
 *
 * 注册内容：
 * - 行内规则 `obsidian_inline_comment`：在 `html_inline` 之前识别 `%%...%%`。
 * - 块级规则 `obsidian_block_comment`：在 `html_block` 之前识别以 `%%` 起止的块。
 * - 两个渲染器均返回空字符串，从而在输出中移除注释内容。
 *
 * @example
 * ```ts
 * import MarkdownIt from 'markdown-it'
 * import { commentMarkdownPlugin } from 'vitepress-plugin-obsidian'
 *
 * const md = new MarkdownIt().use(commentMarkdownPlugin)
 * md.render('可见内容 %%注释%%') // 注释不会出现在输出中
 * ```
 *
 * @param md - markdown-it instance / markdown-it 实例
 */
export const commentMarkdownPlugin: PluginSimple = (md): void => {
  md.inline.ruler.before(
    'html_inline',
    'obsidian_inline_comment',
    (state, silent) => {
      let found = false
      const max = state.posMax
      const start = state.pos
      if (
        state.src.charCodeAt(start) !== 0x25 // %
        || state.src.charCodeAt(start + 1) !== 0x25 // %
      ) {
        return false
      }
      /* istanbul ignore if -- @preserve */
      if (silent)
        return false

      // - %%%%
      if (max - start < 5)
        return false

      state.pos = start + 2

      // 查找 %%
      while (state.pos < max) {
        if (state.src.charCodeAt(state.pos) === 0x25
          && state.src.charCodeAt(state.pos + 1) === 0x25) {
          found = true
          break
        }

        state.md.inline.skipToken(state)
      }

      if (!found || start + 2 === state.pos) {
        state.pos = start
        return false
      }
      // found!
      state.posMax = state.pos
      state.pos = start + 2

      const token = state.push('obsidian_inline_comment', '', 0)
      token.content = state.src.slice(start + 2, state.pos)
      token.markup = '%%'
      token.map = [start, state.pos + 2]

      state.pos = state.posMax + 2
      state.posMax = max
      return true
    },
  )

  md.block.ruler.before(
    'html_block',
    'obsidian_block_comment',
    (state, startLine, endLine, silent) => {
      const start = state.bMarks[startLine]! + state.tShift[startLine]!
      // check starts with %%
      if (state.src.charCodeAt(start) !== 0x25 // %
        || state.src.charCodeAt(start + 1) !== 0x25 // %
      ) {
        return false
      }
      /* istanbul ignore if -- @preserve */
      if (silent)
        return true

      let line = startLine
      let content = ''
      let found = false
      // 查找 %%
      while (++line < endLine) {
        if (state.src.slice(state.bMarks[line], state.eMarks[line]).trim() === '%%') {
          found = true
          break
        }

        content += `${state.src.slice(state.bMarks[line], state.eMarks[line])}\n`
      }

      if (!found)
        return false

      const token = state.push('obsidian_block_comment', '', 0)
      token.content = content
      token.markup = '%%'
      token.map = [startLine, line + 1]

      state.line = line + 1

      return true
    },
  )

  md.renderer.rules.obsidian_inline_comment = () => ''
  md.renderer.rules.obsidian_block_comment = () => ''
}
