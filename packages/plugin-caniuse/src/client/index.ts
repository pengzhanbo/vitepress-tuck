import type { EnhanceAppContext } from 'vitepress/client'
import VPCaniuse from './VPCaniuse.vue'

export { VPCaniuse }

/**
 * Enhances the VitePress application by registering the `VPCaniuse` component.
 *
 * 通过注册 `VPCaniuse` 组件来增强 VitePress 应用。
 */
export function enhanceAppWithCaniuse({ app }: EnhanceAppContext) {
  app.component('VPCaniuse', VPCaniuse)
}
