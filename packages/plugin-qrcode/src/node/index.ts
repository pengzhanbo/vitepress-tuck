/**
 * Node-side entry point for the VitePress QR code plugin.
 *
 * VitePress 二维码插件的 Node 端入口。
 *
 * Exports the plugin factory, markdown-it plugin, and related types for use in
 * VitePress config files.
 *
 * 导出插件工厂函数、markdown-it 插件及相关类型，供 VitePress 配置文件使用。
 *
 * @example
 * `.vitepress/config.ts`
 * ```ts
 * import { defineConfig } from 'vitepress'
 * import qrcode from 'vitepress-plugin-qrcode'
 *
 * export default defineConfig({
 *   markdown: {
 *     config(md) {
 *       md.use(qrcode)
 *     },
 *   },
 * })
 * ```
 */
import { qrcode } from './plugin.js'

export * from './markdown.js'
export * from './plugin.js'

export default qrcode
