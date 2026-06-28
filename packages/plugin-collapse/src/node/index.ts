/**
 * Node entry for vitepress-plugin-collapse.
 *
 * vitepress-plugin-collapse 的 Node 端入口。
 *
 * Re-exports the markdown-it plugin, the `collapse` plugin factory (as the
 * default export) for use with `vitepress-tuck`'s `defineConfig`.
 *
 * 再导出 markdown-it 插件及 `collapse` 插件工厂函数（作为默认导出），
 * 供 `vitepress-tuck` 的 `defineConfig` 使用。
 *
 * @module
 */

import { collapse } from './plugin.js'

export * from './markdown.js'
export * from './plugin.js'

export default collapse
