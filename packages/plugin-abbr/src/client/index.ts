import type { EnhanceAppContext } from 'vitepress/client'
import VPAbbreviation from './VPAbbreviation.vue'

export { VPAbbreviation }

/**
 * Enhances the VitePress application by registering the `VPAbbreviation`
 * component globally under the name `Abbreviation`, so it can be used
 * directly in Vue templates or rendered markdown content.
 *
 * 通过全局注册 `VPAbbreviation` 组件来增强 VitePress 应用，
 * 使其可在 Vue 模板或渲染的 markdown 内容中直接使用。
 *
 * @example
 * `.vitepress/theme/index.ts`
 * ```ts
 * import type { Theme } from 'vitepress'
 * import { enhanceAppWithAbbr } from 'vitepress-plugin-abbr/client'
 * import DefaultTheme from 'vitepress/theme'
 *
 * export default {
 *   extends: DefaultTheme,
 *   enhanceApp(ctx) {
 *     enhanceAppWithAbbr(ctx)
 *   },
 * } satisfies Theme
 * ```
 */
export function enhanceAppWithAbbr({ app }: EnhanceAppContext) {
  app.component('VPAbbreviation', VPAbbreviation)
}
