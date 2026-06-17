import type { PluginWithOptions } from 'markdown-it'
import type { CollapsedLinesOptions } from './types.js'
import { resolveCollapsedLines } from './resolveCollapsedLine.js'

/**
 * Adds collapsed lines functionality to code blocks in markdown-it.
 *
 * Wraps the default fence renderer to inject collapse markers and CSS variables
 * when code blocks exceed a specified line count. The collapse behavior can be
 * controlled globally via plugin options or per code block via `:collapsed-lines`
 * directives in the code fence info string.
 *
 * 为 markdown-it 中的代码块添加折叠行功能。
 *
 * 包装默认的 fence 渲染器，当代码块超过指定行数时注入折叠标记和 CSS 变量。
 * 折叠行为可通过插件选项全局控制，或通过代码围栏信息字符串中的
 * `:collapsed-lines` 指令对单个代码块进行控制。
 *
 * @param md - MarkdownIt instance / MarkdownIt 实例
 * @param options - Plugin options, can be:
 *   - `false`: Do not enable globally (default) / 不全局启用（默认）
 *   - `true`: Enable with default 15 lines / 启用，默认 15 行起折叠
 *   - `number`: Enable with custom starting line count / 启用，自定义起始折叠行数
 *   - `'disable'`: Completely disable the plugin / 完全禁用插件
 * @example
 * ```ts
 * import { collapsedLinesMarkdownPlugin } from 'vitepress-code-collapse'
 * import { defineConfig } from 'vitepress'
 * export default defineConfig({
 *   markdown: {
 *     config(md) {
 *       md.use(collapsedLinesMarkdownPlugin)
 *     }
 *   }
 * })
 * ```
 */
export const collapsedLinesMarkdownPlugin: PluginWithOptions<CollapsedLinesOptions> = (md, options = false): void => {
  if (options === 'disable')
    return

  // Preserve the original fence renderer to delegate rendering to
  // 保留原始 fence 渲染器以便委托渲染
  const rawFence = md.renderer.rules.fence!

  md.renderer.rules.fence = (...args): string => {
    const [tokens, index] = args
    const token = tokens[index]
    // get token info
    const info = token.info ? md.utils.unescapeAll(token.info).trim() : ''
    const code = rawFence(...args)

    // resolve collapsed-lines mark from token info
    const collapsedLinesInfo
      = resolveCollapsedLines(info) ?? options

    if (collapsedLinesInfo === false)
      return code

    // Count the number of rendered code lines by slicing the inner HTML
    // between `<code>` and `</code>` tags
    // 通过截取 `<code>` 与 `</code>` 标签之间的内部 HTML 来计算渲染后的代码行数
    const lines
      = code
        .slice(code.indexOf('<code>'), code.indexOf('</code>'))
        .split('\n')
        .length
    const startLines
      = typeof collapsedLinesInfo === 'number' ? collapsedLinesInfo : 15

    if (lines < startLines)
      return code

    const collapsedLinesCode = `<div class="collapsed-lines"></div>`
    const styles = `--vp-collapsed-lines:${startLines};`

    // Inject collapse marker, toggle classes, and attach CSS variables:
    // 1. Append the collapse trigger div before the closing `</div>`
    // 2. Mark the language class with `has-collapsed-lines collapsed`
    // 3. Inject the `--vp-collapsed-lines` CSS variable into the wrapper style
    // 注入折叠触发器、切换类名并附加 CSS 变量：
    // 1. 在闭合 `</div>` 前追加折叠触发器 div
    // 2. 为语言类名标记 `has-collapsed-lines collapsed`
    // 3. 将 `--vp-collapsed-lines` CSS 变量注入到外层元素的样式中
    const finalCode = code
      .replace(/<\/div>$/u, `${collapsedLinesCode}</div>`)
      .replace(/"(language-[^"]*)"/u, '"$1 has-collapsed-lines collapsed"')
      .replace(/^<div[^>]*>/u, (match) => {
        if (!match.includes('style='))
          return `${match.slice(0, -1)} style="${styles}">`

        return match.replace(/(style=")/u, `$1${styles}`)
      })

    return finalCode
  }
}
