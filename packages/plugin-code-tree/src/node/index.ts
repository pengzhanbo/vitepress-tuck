/**
 * Package entry point for `vitepress-plugin-code-tree`.
 *
 * `vitepress-plugin-code-tree` 的包入口模块。
 *
 * Exports the plugin factory and markdown-it plugin so consumers can register
 * them through `defineConfig` or use the markdown-it plugin standalone.
 *
 * 导出插件工厂函数和 markdown-it 插件，使用方可以通过 `defineConfig`
 * 注册，或单独使用 markdown-it 插件。
 */

import { codeTree } from './plugin.js'

export * from './markdown.js'
export * from './plugin.js'
export * from './types.js'

export default codeTree
