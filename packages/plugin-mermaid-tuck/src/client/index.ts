import type { EnhanceAppContext } from 'vitepress/client'
import VPMermaid from './VPMermaid.vue'

export { VPMermaid }
export { defineMermaidOptions } from './composables/options.js'

/**
 * VitePress `enhanceApp` hook that registers the `VPMermaid` component
 * globally so markdown-generated `<VPMermaid>` tags can be resolved.
 *
 * VitePress 的 `enhanceApp` 钩子，全局注册 `VPMermaid` 组件，
 * 使 markdown 中生成的 `<VPMermaid>` 标签能够被解析。
 *
 * This function is referenced by name from the plugin's `client.enhance`
 * field and invoked automatically by the `virtual:enhance-app` module.
 *
 * 该函数通过插件 `client.enhance` 字段按名称引用，
 * 由 `virtual:enhance-app` 模块自动调用。
 *
 * @example
 * `.vitepress/theme/index.ts`
 * ```ts
 * import { enhanceAppWithMermaid } from 'vitepress-plugin-mermaid-tuck/client'
 * export default { enhanceApp(ctx) { enhanceAppWithMermaid(ctx) } }
 * ```
 */
export function enhanceAppWithMermaid({ app }: EnhanceAppContext) {
  app.component('VPMermaid', VPMermaid)
}
