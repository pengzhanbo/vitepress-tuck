import type { EnhanceAppContext } from 'vitepress/client'
import VPJsfiddle from './VPJsfiddle.vue'

export { VPJsfiddle }

/**
 * Enhances the VitePress application by registering the `VPJsfiddle` component.
 *
 * 通过注册 `VPJsfiddle` 组件来增强 VitePress 应用。
 */
export function enhanceAppWithJsFiddle({ app }: EnhanceAppContext) {
  app.component('VPJsfiddle', VPJsfiddle)
}
