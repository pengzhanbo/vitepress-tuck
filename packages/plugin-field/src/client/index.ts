import type { EnhanceAppContext } from 'vitepress'
import VPField from './VPField.vue'

export { VPField }

/**
 * Client-side setup for `vitepress-plugin-field`.
 *
 * Registers the `<VPField>` component globally so it can be used in
 * markdown-rendered content without explicit imports.
 *
 * `vitepress-plugin-field` 的客户端设置。
 *
 * 全局注册 `<VPField>` 组件，使其在 markdown 渲染的内容中无需显式导入即可使用。
 *
 * @param param0 - The VitePress enhance app context / VitePress 增强应用上下文
 * @param param0.app - The Vue app instance to register the component on / 要注册组件的 Vue 应用实例
 * @example
 * ```ts
 * // In `.vitepress/theme/index.ts`
 * import { enhanceAppWithField } from 'vitepress-plugin-field/client'
 *
 * export default {
 *   enhanceApp(ctx) {
 *     enhanceAppWithField(ctx)
 *   },
 * }
 * ```
 */
export function enhanceAppWithField({ app }: EnhanceAppContext) {
  app.component('VPField', VPField)
}
