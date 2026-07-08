import type { EnhanceAppContext } from 'vitepress/client'
import VPStackBlitz from './VPStackBlitz.vue'

export { VPStackBlitz }

/**
 * Vue app enhancer that registers the `VPStackBlitz` component globally.
 *
 * Use this in `.vitepress/theme/index.ts` when not using `vitepress-tuck`'s
 * auto-import mechanism.
 *
 * Vue 应用增强器，全局注册 `VPStackBlitz` 组件。
 * 在未使用 `vitepress-tuck` 自动导入机制时，在 `.vitepress/theme/index.ts` 中使用。
 *
 * @example
 * ```ts
 * // .vitepress/theme/index.ts
 * import { enhanceAppWithStackBlitz } from 'vitepress-plugin-stackblitz/client'
 *
 * export default {
 *   enhanceApp(ctx) {
 *     enhanceAppWithStackBlitz(ctx)
 *   },
 * }
 * ```
 */
export function enhanceAppWithStackBlitz({ app }: EnhanceAppContext) {
  app.component('VPStackBlitz', VPStackBlitz)
}
