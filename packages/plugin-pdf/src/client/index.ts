import type { EnhanceAppContext } from 'vitepress/client'
import VPPdf from './VPPdf.vue'

export { VPPdf }
export * from './use-pdf.js'

/**
 * Enhances the VitePress application by registering the `VPPdf` component
 * globally, so it can be used in rendered markdown content.
 *
 * 通过全局注册 `VPPdf` 组件来增强 VitePress 应用，使其可在渲染的
 * markdown 内容中使用。
 *
 * This function is referenced by the plugin's `client.enhance` field and is
 * invoked automatically by the `virtual:enhance-app` virtual module generated
 * by `vitepress-tuck`. Users do not need to call it directly. The parameter is
 * the standard VitePress `EnhanceAppContext`, destructured to access the Vue
 * app instance.
 *
 * 该函数由插件的 `client.enhance` 字段引用，并由 `vitepress-tuck` 生成的
 * `virtual:enhance-app` 虚拟模块自动调用。用户无需直接调用此函数。
 * 参数为标准的 VitePress `EnhanceAppContext`，解构以获取 Vue 应用实例。
 *
 * @example
 * `.vitepress/theme/index.ts`
 * ```ts
 * import { h } from 'vue'
 * import Theme from 'vitepress/theme'
 * import { enhanceAppWithPDF } from 'vitepress-plugin-pdf/client'
 *
 * export default {
 *   extends: Theme,
 *   enhanceApp(ctx) {
 *     enhanceAppWithPDF(ctx)
 *   },
 * }
 * ```
 */
export function enhanceAppWithPDF({ app }: EnhanceAppContext) {
  app.component('VPPdf', VPPdf)
}
