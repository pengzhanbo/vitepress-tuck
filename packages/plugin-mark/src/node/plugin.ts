import { definePlugin } from 'vitepress-tuck'
import { markdownPlugin } from './markdown.js'

/**
 * VitePress plugin for mark (highlight) support in markdown content.
 *
 * VitePress 插件，用于在 markdown 内容中支持马克笔（高亮）语法。
 *
 * The plugin registers the `==text==` inline rule in markdown-it via
 * `@mdit/plugin-inline-rule`, rendering the matched content with the
 * client-side `VPMark` component. `VPMark` wraps the native `<mark>` element
 * and plays a highlight animation when the element scrolls into view, giving
 * marked text a vivid, interactive emphasis effect. The component is wired up
 * to VitePress through `componentResolver` for on-demand auto-import.
 *
 * 该插件通过 `@mdit/plugin-inline-rule` 在 markdown-it 中注册 `==text==`
 * 内联规则，将匹配的内容使用客户端 `VPMark` 组件进行渲染。`VPMark` 包装了
 * 原生 `<mark>` 元素，并在元素滚动进入视口时播放高亮动画，使马克笔文本具有
 * 生动、可交互的强调效果。组件通过 `componentResolver` 接入 VitePress，
 * 实现按需自动导入。
 *
 * The marker uses a nested inline rule, so inline markdown syntax (bold,
 * italic, links, code, etc.) inside the `==...==` markers is fully parsed.
 * Marker color variants can be applied by appending an attrs syntax such as
 * `{.note}`, `{.info}`, `{.tip}`, `{.warning}`, `{.caution}`, `{.danger}`,
 * or `{.important}`.
 *
 * 该标记使用嵌套内联规则，因此 `==...==` 标记内部的 markdown 内联语法
 * （加粗、斜体、链接、代码等）会被完整解析。可通过追加 attrs 语法
 * （如 `{.note}`、`{.info}`、`{.tip}`、`{.warning}`、`{.caution}`、
 * `{.danger}`、`{.important}`）来应用不同的标记颜色变体。
 *
 * @example
 * `.vitepress/config.ts`
 * ```ts
 * import { defineConfig } from 'vitepress-tuck'
 * import mark from 'vitepress-plugin-mark'
 *
 * export default defineConfig({
 *   plugins: [mark()],
 * })
 * ```
 * @example
 * // Markdown usage
 * ```md
 * ==Default mark==
 *
 * ==Important mark=={.important}
 *
 * ==Tip mark=={.tip}
 * ```
 */
export const mark = definePlugin(() => ({
  name: 'vitepress-plugin-mark',
  componentResolver: ['VPMark'],
  markdown: {
    config(md) {
      md.use(markdownPlugin)
    },
  },
}))
