/**
 * Node-side entry point for the VitePress PDF plugin.
 *
 * VitePress PDF 插件的 Node 端入口。
 *
 * Re-exports the markdown plugin, the main plugin factory, and exposes the
 * plugin factory as the default export for `vitepress-tuck` integration.
 *
 * 重新导出 markdown 插件和主插件工厂，并将插件工厂作为默认导出，
 * 以便与 `vitepress-tuck` 集成。
 *
 * @example
 * `.vitepress/config.ts`
 * ```ts
 * import { defineConfig } from 'vitepress-tuck'
 * import pdf from 'vitepress-plugin-pdf'
 *
 * export default defineConfig({
 *   plugins: [pdf()],
 * })
 * ```
 */
import { pdf } from './plugin.js'

export * from './markdown.js'
export * from './plugin.js'

export default pdf
