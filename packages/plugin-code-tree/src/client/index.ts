import type { EnhanceAppContext } from 'vitepress/client'
import { enhanceAppWithFileTree } from 'vitepress-plugin-file-tree/client'
import VPCodeTree from './VPCodeTree.vue'

export { VPCodeTree }

export function enhanceAppWithCodeTree(ctx: EnhanceAppContext) {
  enhanceAppWithFileTree(ctx)
  ctx.app.component('VPCodeTree', VPCodeTree)
}
