import { setupCollapsedLines } from './setupCollapsedLines.js'

export { setupCollapsedLines }

/**
 * Enhances the VitePress app with collapsed lines functionality.
 *
 * This function is automatically invoked by the `virtual:enhance-app` module
 * when the plugin is registered. It sets up the click event listener that
 * toggles the collapsed state of code blocks.
 *
 * 为 VitePress 应用增强折叠行功能。
 *
 * 此函数在插件注册时由 `virtual:enhance-app` 模块自动调用。
 * 它设置点击事件监听器，用于切换代码块的折叠状态。
 *
 * @example
 * // Usually called automatically via `virtual:enhance-app`.
 * // To invoke manually:
 * import { enhanceAppWithCollapsedLines } from 'vitepress-plugin-code-collapse/client'
 * enhanceAppWithCollapsedLines()
 */
export function enhanceAppWithCollapsedLines() {
  setupCollapsedLines()
}
