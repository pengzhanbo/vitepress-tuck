import type { EnhanceAppContext } from 'vitepress'
import VPAnnotation from './VPAnnotation.vue'

export { VPAnnotation }

/**
 * Enhances the VitePress application by registering the `VPAnnotation`
 * component globally under the name `VPAnnotation`, so it can be used
 * directly in Vue templates or rendered markdown content.
 *
 * 通过全局注册 `VPAnnotation` 组件来增强 VitePress 应用，
 * 使其可在 Vue 模板或渲染的 markdown 内容中直接使用。
 *
 * @example
 * `.vitepress/theme/index.ts`
 * ```ts
 * import type { Theme } from 'vitepress'
 * import { enhanceAppWithAnnotation } from 'vitepress-plugin-annotation/client'
 * import DefaultTheme from 'vitepress/theme'
 *
 * export default {
 *   extends: DefaultTheme,
 *   enhanceApp(ctx) {
 *     enhanceAppWithAnnotation(ctx)
 *   },
 * } satisfies Theme
 * ```
 */
export function enhanceAppWithAnnotation({ app }: EnhanceAppContext) {
  app.component('VPAnnotation', VPAnnotation)
}
