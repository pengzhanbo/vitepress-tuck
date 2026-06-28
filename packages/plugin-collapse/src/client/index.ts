import type { EnhanceAppContext } from 'vitepress/client'
import VPCollapse from './VPCollapse.vue'
import VPCollapseItem from './VPCollapseItem.vue'

export { VPCollapse, VPCollapseItem }

/**
 * Register `VPCollapse` and `VPCollapseItem` globally when using this plugin
 * with VitePress directly (without `vitepress-tuck`).
 *
 * 当不使用 `vitepress-tuck` 而直接在 VitePress 中使用本插件时，
 * 用于全局注册 `VPCollapse` 和 `VPCollapseItem` 组件。
 *
 * @param param0 - The VitePress enhance app context / VitePress 增强应用上下文
 * @param param0.app - The Vue app instance to register components on / 要注册组件的 Vue 应用实例
 * @example
 * ```ts
 * // .vitepress/theme/index.ts
 * import type { Theme } from 'vitepress'
 * import DefaultTheme from 'vitepress/theme'
 * import { enhanceAppWithCollapse } from 'vitepress-plugin-collapse/client'
 *
 * export default {
 *   extends: DefaultTheme,
 *   enhanceApp(ctx) {
 *     enhanceAppWithCollapse(ctx)
 *   },
 * } satisfies Theme
 * ```
 */
export function enhanceAppWithCollapse({ app }: EnhanceAppContext) {
  app.component('VPCollapse', VPCollapse)
  app.component('VPCollapseItem', VPCollapseItem)
}
