import type { EnhanceAppContext } from 'vitepress/client'

import { default as VPFileTree } from './VPFileTree.vue'
import { default as VPFileTreeNode } from './VPFileTreeNode.vue'

export { VPFileTree, VPFileTreeNode }

/**
 * Register file tree components globally during VitePress app enhancement.
 *
 * 在 VitePress 应用增强阶段全局注册文件树组件。
 *
 * Called automatically by the `virtual:enhance-app` module when the plugin
 * is loaded via `vitepress-tuck`'s `defineConfig`. Registers `VPFileTree`
 * and `VPFileTreeNode` as global Vue components so they can be used in
 * markdown-rendered HTML without explicit imports.
 *
 * @param ctx - VitePress enhance app context / VitePress 应用增强上下文
 * @param ctx.app - The VitePress Vue app instance / VitePress 的 Vue 应用实例
 */
export function enhanceAppWithFileTree({ app }: EnhanceAppContext) {
  app.component('VPFileTree', VPFileTree)
  app.component('VPFileTreeNode', VPFileTreeNode)
}
