import type { EnhanceAppContext } from 'vitepress/client'
import { enhanceAppWithFileTree } from 'vitepress-plugin-file-tree/client'
import VPCodeTree from './VPCodeTree.vue'

export { VPCodeTree }

/**
 * Register code tree components globally during VitePress app enhancement.
 *
 * 在 VitePress 应用增强阶段全局注册代码树组件。
 *
 * Called automatically by the `virtual:enhance-app` module when the plugin
 * is loaded via `vitepress-tuck`'s `defineConfig`. Registers the `VPCodeTree`
 * component as a global Vue component so it can be used in markdown-rendered
 * HTML without explicit imports. Also delegates to `enhanceAppWithFileTree`
 * to register the file tree components that `VPCodeTree` depends on.
 *
 * 当插件通过 `vitepress-tuck` 的 `defineConfig` 加载时，由
 * `virtual:enhance-app` 模块自动调用。将 `VPCodeTree` 组件注册为全局
 * Vue 组件，使其可以在 markdown 渲染的 HTML 中使用，无需显式导入。
 * 同时委托 `enhanceAppWithFileTree` 注册 `VPCodeTree` 所依赖的文件树组件。
 *
 * @param ctx - VitePress enhance app context / VitePress 应用增强上下文
 * @param ctx.app - The VitePress Vue app instance / VitePress 的 Vue 应用实例
 */
export function enhanceAppWithCodeTree(ctx: EnhanceAppContext) {
  enhanceAppWithFileTree(ctx)
  ctx.app.component('VPCodeTree', VPCodeTree)
}
