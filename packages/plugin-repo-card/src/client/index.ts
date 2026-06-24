import type { EnhanceAppContext } from 'vitepress/client'
import VPRepoCard from './VPRepoCard.vue'

export { VPRepoCard as RepoCard, VPRepoCard }
export * from './use-repo.js'

/**
 * Enhance the VitePress app by registering the RepoCard component globally.
 *
 * 通过全局注册 RepoCard 组件来增强 VitePress 应用。
 *
 * @param ctx - VitePress enhance app context / VitePress 应用增强上下文
 * @param ctx.app - The VitePress Vue app instance / VitePress 的 Vue 应用实例
 * @example
 * // In .vitepress/theme/index.ts
 * import { enhanceAppWithRepoCard } from 'vitepress-plugin-repo-card/client'
 *
 * export default {
 *   enhanceApp(ctx) {
 *     enhanceAppWithRepoCard(ctx)
 *   },
 * }
 */
export function enhanceAppWithRepoCard({ app }: EnhanceAppContext) {
  app.component('VPRepoCard', VPRepoCard)
  app.component('RepoCard', VPRepoCard)
}
