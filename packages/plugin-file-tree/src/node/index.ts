/**
 * Entry point for the `vitepress-plugin-file-tree` package.
 *
 * `vitepress-plugin-file-tree` 插件的入口模块。
 *
 * Re-exports all node-side utilities, the markdown-it plugin, parsing helpers,
 * and the main `fileTree` plugin definition as the default export.
 */

import { fileTree } from './plugin.js'

export * from './fileTreeToCMDText.js'
export * from './markdown.js'
export * from './parseContentWithContainer.js'
export * from './parseContentWithFence.js'
export * from './parseNodeInfo.js'
export * from './plugin.js'
export * from './types.js'

export default fileTree
