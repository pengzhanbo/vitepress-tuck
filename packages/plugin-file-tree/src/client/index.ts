import type { EnhanceAppContext } from 'vitepress/client'

import { default as VPFileTree } from './VPFileTree.vue'
import { default as VPFileTreeNode } from './VPFileTreeNode.vue'

export { VPFileTree, VPFileTreeNode }

export function enhanceAppWithFileTree({ app }: EnhanceAppContext) {
  app.component('VPFileTree', VPFileTree)
  app.component('VPFileTreeNode', VPFileTreeNode)
}
