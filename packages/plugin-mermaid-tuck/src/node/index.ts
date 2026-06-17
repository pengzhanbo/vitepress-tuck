/**
 * Entry point for the mermaid-tuck plugin's Node-side module.
 *
 * mermaid-tuck 插件 Node 端模块的入口文件。
 *
 * Re-exports the plugin factory, markdown-it plugin, Vite plugin, and shared
 * types so consumers can import everything from a single path.
 *
 * 重新导出插件工厂函数、markdown-it 插件、Vite 插件以及共享类型，
 * 便于使用方从单一路径导入所需内容。
 *
 * @example
 * ```ts
 * import mermaid from 'vitepress-plugin-mermaid-tuck'
 * import { defineConfig } from 'vitepress'
 * export default defineConfig({
 *   vite: { plugins: [mermaid()] },
 * })
 * ```
 */
import { mermaid } from './plugin.js'

export * from './markdown.js'
export * from './plugin.js'
export type { MermaidPluginOptions } from './types.js'
export * from './vite.js'

export default mermaid
