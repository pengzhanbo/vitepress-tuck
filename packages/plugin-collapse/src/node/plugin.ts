import { definePlugin } from 'vitepress-tuck'
import { collapseMarkdownPlugin } from './markdown.js'

/**
 * Collapse plugin factory.
 *
 * 折叠面板插件工厂函数。
 *
 * Registers the `::: collapse` markdown-it container and declares the
 * `VPCollapse` and `VPCollapseItem` Vue components for auto-import. When used
 * with `defineConfig` from `vitepress-tuck`, the components are auto-imported
 * on demand — no manual `enhanceApp` registration is required.
 *
 * 注册 `::: collapse` markdown-it 容器，并声明 `VPCollapse` 和 `VPCollapseItem`
 * Vue 组件以供自动导入。与 `vitepress-tuck` 的 `defineConfig` 配合使用时，
 * 组件会按需自动导入，无需手动在 `enhanceApp` 中注册。
 *
 * @example
 * ```ts
 * // .vitepress/config.ts
 * import { defineConfig } from 'vitepress-tuck'
 * import collapse from 'vitepress-plugin-collapse'
 *
 * export default defineConfig({
 *   plugins: [collapse()],
 * })
 * ```
 */
export const collapse = definePlugin(() => ({
  name: 'vitepress-plugin-collapse',
  componentResolver: ['VPCollapse', 'VPCollapseItem'],
  markdown: {
    config: (md) => {
      md.use(collapseMarkdownPlugin)
    },
  },
}))
