import type { PluginSimple } from 'markdown-it'
import { createContainerPlugin } from 'vitepress-plugin-toolkit'

/**
 * markdown-it plugin that registers the `::: steps` container for rendering
 * ordered/unordered lists as numbered steps with badges and connecting lines.
 *
 * markdown-it 插件，注册 `::: steps` 容器，将有序/无序列表渲染为带徽标和连接线的编号步骤。
 *
 * The container wraps its inner list items with a `<div class="vp-steps">` element,
 * leaving the list markup intact so the client-side styles can decorate each item
 * as a step.
 *
 * 该容器使用 `<div class="vp-steps">` 元素包裹内部列表项，保留列表标记不变，
 * 以便客户端样式将每个列表项装饰为步骤。
 *
 * @param md - The markdown-it instance to register the rule on / 要注册规则的 markdown-it 实例
 *
 * @example
 * `.vitepress/config.ts`
 * ```ts
 * import { defineConfig } from 'vitepress'
 * import { stepsMarkdownPlugin } from 'vitepress-plugin-steps'
 * export default defineConfig({
 *   markdown: {
 *     config: (md) => {
 *       md.use(stepsMarkdownPlugin)
 *     },
 *   },
 * })
 * ```
 *
 * @example
 * Markdown usage:
 * ```md
 * ::: steps
 *
 * - First step
 *
 *   Description of the first step.
 *
 * - Second step
 *
 *   Description of the second step.
 * :::
 * ```
 */
export const stepsMarkdownPlugin: PluginSimple = (md) => {
  createContainerPlugin(md, 'steps', {
    before: () => '<div class="vp-steps">',
  })
}
