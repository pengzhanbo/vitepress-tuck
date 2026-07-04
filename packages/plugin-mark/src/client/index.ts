import type { EnhanceAppContext } from 'vitepress/client'
import VPMark from './VPMark.vue'

export { VPMark }

/**
 * Enhances the VitePress application by registering the `VPMark` component
 * globally, so it can be used directly in Vue templates or rendered markdown
 * content. This is required when using the plugin with VitePress directly
 * (without `vitepress-tuck`).
 *
 * 通过全局注册 `VPMark` 组件来增强 VitePress 应用，使其可在 Vue 模板或
 * 渲染的 markdown 内容中直接使用。当不使用 `vitepress-tuck` 而直接在
 * VitePress 中使用本插件时，需要调用此函数。
 *
 * @example
 * `.vitepress/theme/index.ts`
 * ```ts
 * import type { Theme } from 'vitepress'
 * import { enhanceAppWithMark } from 'vitepress-plugin-mark/client'
 * import DefaultTheme from 'vitepress/theme'
 *
 * export default {
 *   extends: DefaultTheme,
 *   enhanceApp(ctx) {
 *     enhanceAppWithMark(ctx)
 *   },
 * } satisfies Theme
 * ```
 */
export function enhanceAppWithMark({ app }: EnhanceAppContext) {
  app.component('VPMark', VPMark)
}
