import type { EnhanceAppContext } from 'vitepress/client'
import VPCodepen from './VPCodepen.vue'

export { VPCodepen }

/**
 * Enhances the VitePress application by registering the `VPCodepen` component.
 *
 * 通过注册 `VPCodepen` 组件来增强 VitePress 应用。
 */
export function enhanceAppWithCodepen({ app }: EnhanceAppContext) {
  app.component('VPCodepen', VPCodepen)
}
