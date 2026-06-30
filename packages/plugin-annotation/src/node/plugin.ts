import { definePlugin } from 'vitepress-tuck'
import { annotationMarkdownPlugin } from './markdown.js'

/**
 * VitePress plugin for annotation support in markdown content.
 *
 * VitePress 插件，用于在 markdown 内容中支持注释功能。
 *
 * The plugin registers annotation definition and reference rules in markdown-it,
 * and wires up the client-side `VPAnnotation` component via `componentResolver`
 * so that annotation references render as interactive markers that, on click,
 * reveal a popover with the annotation content.
 *
 * 该插件在 markdown-it 中注册注释定义与引用规则，并通过 `componentResolver`
 * 接入客户端 `VPAnnotation` 组件，使注释引用渲染为可交互的标记，点击后弹出
 * 包含注释内容的浮层。
 *
 * Annotations can be defined inline in markdown using the syntax
 * `[+label]: annotation content`, or provided globally through the `annotations`
 * option. A single label can be defined multiple times — all definitions are
 * collected and displayed as separate items in the popover. Annotation content
 * supports full block-level markdown.
 *
 * 注释可以在 markdown 中通过 `[+标签]: 注释内容` 语法内联定义，也可以通过
 * `annotations` 选项全局提供。同一标签可多次定义 —— 所有定义会被收集并作为
 * 独立条目展示在浮层中。注释内容支持完整的块级 markdown 语法。
 *
 * @param annotations - Global annotations preset, a map of label to annotation
 *   content (string or string array) / 全局注释预设，标签到注释内容
 *   （字符串或字符串数组）的映射
 * @example
 * `.vitepress/config.ts` without global annotations
 * ```ts
 * import { defineConfig } from 'vitepress-tuck'
 * import annotation from 'vitepress-plugin-annotation'
 *
 * export default defineConfig({
 *   plugins: [annotation()],
 * })
 * ```
 * @example
 * `.vitepress/config.ts` with global annotations
 * ```ts
 * import { defineConfig } from 'vitepress-tuck'
 * import annotation from 'vitepress-plugin-annotation'
 *
 * export default defineConfig({
 *   plugins: [
 *     annotation({
 *       HTML: 'HyperText Markup Language',
 *     }),
 *   ],
 * })
 * ```
 * @example
 * // Markdown usage
 * ```md
 * The **four great classical novels** [+novels] of Chinese literature.
 *
 * [+novels]:
 *   **Romance of the Three Kingdoms** — a historical novel.
 *
 * [+novels]:
 *   **Journey to the West** — a mythological adventure.
 * ```
 */
export const annotation = definePlugin((annotations?: Record<string, string | string[]>) => ({
  name: 'vitepress-plugin-annotation',
  componentResolver: ['VPAnnotation'],
  markdown: {
    config(md) {
      md.use(annotationMarkdownPlugin, annotations)
    },
  },
}))
