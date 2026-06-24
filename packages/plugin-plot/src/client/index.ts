import type { EnhanceAppContext } from 'vitepress/client'
import VPPlot from './VPPlot.vue'

export { VPPlot }

/**
 * Registers the `VPPlot` component globally during VitePress app enhancement.
 *
 * 在 VitePress 应用增强阶段全局注册 `VPPlot` 组件。
 *
 * Invoked automatically by `virtual:enhance-app` when the plot plugin is
 * enabled, so users do not need to register the component manually.
 *
 * 当启用黑幕插件时，由 `virtual:enhance-app` 自动调用，
 * 用户无需手动注册该组件。
 */
export function enhanceAppWithPlot({ app }: EnhanceAppContext) {
  app.component('VPPlot', VPPlot)
}
