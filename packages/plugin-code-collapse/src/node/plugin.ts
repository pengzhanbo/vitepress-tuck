import type { CollapsedLinesOptions } from './types.js'
import { definePlugin } from 'vitepress-tuck'
import { collapsedLinesMarkdownPlugin } from './markdown.js'

/**
 * VitePress plugin for collapsing code blocks that exceed a specified line count.
 *
 * Integrates markdown-it rendering (to inject collapse markers and CSS variables)
 * with client-side setup (to handle click interactions for expanding/collapsing).
 * Code blocks can be configured globally via plugin options or individually via
 * `:collapsed-lines` directives in the code fence info string.
 *
 * VitePress 插件，用于折叠超过指定行数的代码块。
 *
 * 将 markdown-it 渲染（注入折叠标记和 CSS 变量）与客户端设置（处理展开/折叠的
 * 点击交互）集成在一起。代码块可通过插件选项全局配置，或通过代码围栏信息字符串
 * 中的 `:collapsed-lines` 指令单独配置。
 *
 * @example
 * ```ts
 * import collapsedLines from 'vitepress-code-collapse'
 * import { defineConfig } from 'vitepress-tuck'
 * export default defineConfig({
 *   plugins: [collapsedLines()]
 * })
 * ```
 * ```
 */
export const collapsedLines = definePlugin((options?: CollapsedLinesOptions) => ({
  name: 'vitepress-plugin-code-collapse',
  client: {
    enhance: 'enhanceAppWithCollapsedLines',
  },
  markdown: {
    config: (md) => {
      md.use(collapsedLinesMarkdownPlugin, options)
    },
  },
}))
