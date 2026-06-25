import { definePlugin } from 'vitepress-tuck'
import { abbrMarkdownPlugin } from './markdown.js'

/**
 * VitePress plugin for abbreviation support in markdown content.
 *
 * VitePress 插件，用于在 markdown 内容中支持缩写词。
 *
 * Forked and modified from `markdown-it-abbr`. The plugin registers the
 * abbreviation definition and replace rules in markdown-it, and wires up the
 * client-side `VPAbbreviation` component via `componentResolver` so that
 * abbreviations render with an interactive tooltip showing their full
 * description. It also pre-bundles the `@floating-ui/vue` dependency used by
 * the tooltip.
 *
 * 从 `markdown-it-abbr` 分叉并修改。该插件在 markdown-it 中注册缩写词
 * 定义与替换规则，并通过 `componentResolver` 接入客户端 `VPAbbreviation`
 * 组件，使缩写词渲染时带有可交互的提示框，展示其完整描述。同时预构建
 * 提示框所依赖的 `@floating-ui/vue`。
 *
 * Abbreviations can be defined inline in markdown using the syntax
 * `*[ABBR]: Full description`, or provided globally through the
 * `abbreviations` option. Inline definitions take precedence over global ones
 * when both define the same abbreviation.
 *
 * 缩写词可以在 markdown 中通过 `*[缩写]: 完整描述` 语法内联定义，也可以
 * 通过 `abbreviations` 选项全局提供。当两者定义了相同的缩写词时，内联
 * 定义优先于全局定义。
 *
 * @param abbreviations - Global abbreviations preset, a map of abbreviation
 *   to its full description / 全局缩写词预设，缩写词到其完整描述的映射
 * @example
 * `.vitepress/config.ts` without global abbreviations
 * ```ts
 * import { defineConfig } from 'vitepress-tuck'
 * import abbr from 'vitepress-plugin-abbr'
 *
 * export default defineConfig({
 *   plugins: [abbr()],
 * })
 * ```
 * @example
 * `.vitepress/config.ts` with global abbreviations
 * ```ts
 * import { defineConfig } from 'vitepress-tuck'
 * import abbr from 'vitepress-plugin-abbr'
 *
 * export default defineConfig({
 *   plugins: [
 *     abbr({
 *       HTML: 'HyperText Markup Language',
 *       W3C: 'World Wide Web Consortium',
 *     }),
 *   ],
 * })
 * ```
 * @example
 * // Markdown usage
 * ```md
 * The HTML specification is maintained by the W3C.
 *
 * [HTML]: HyperText Markup Language
 * [W3C]: World Wide Web Consortium
 * ```
 */
export const abbr = definePlugin((abbreviations?: Record<string, string>) => ({
  name: 'vitepress-plugin-abbr',
  componentResolver: ['VPAbbreviation'],
  markdown: {
    config(md) {
      md.use(abbrMarkdownPlugin, abbreviations)
    },
  },
  vite: {
    optimizeDeps: {
      include: ['@floating-ui/vue'],
    },
  },
}))
