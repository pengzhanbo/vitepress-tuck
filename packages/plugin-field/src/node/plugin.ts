import { definePlugin } from 'vitepress-tuck'
import { fieldMarkdownPlugin } from './markdown.js'

/**
 * VitePress plugin for rendering structured field documentation blocks.
 *
 * Registers a markdown-it container plugin that transforms `::: field` blocks
 * into interactive `<VPField>` Vue components, and wires up the client-side
 * component registration via `enhanceAppWithField`.
 *
 * VitePress 插件，用于渲染结构化的字段文档块。
 *
 * 注册 markdown-it 容器插件，将 `::: field` 块转换为交互式 `<VPField>` Vue 组件，
 * 并通过 `enhanceAppWithField` 完成客户端组件注册。
 *
 * @example
 * `.vitepress/config.ts`
 * ```ts
 * import { defineConfig } from 'vitepress-tuck'
 * import field from 'vitepress-plugin-field'
 *
 * export default defineConfig({
 *   plugins: [field()],
 * })
 * ```
 */
export const field = definePlugin(() => ({
  name: 'vitepress-plugin-field',
  client: {
    enhance: 'enhanceAppWithField',
  },
  markdown: {
    config(md) {
      md.use(fieldMarkdownPlugin)
    },
  },
}))
