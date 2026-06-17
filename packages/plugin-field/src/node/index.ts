/**
 * Node-side entry point for `vitepress-plugin-field`.
 *
 * `vitepress-plugin-field` 的 Node 端入口模块。
 */
import { field } from './plugin.js'

export * from './markdown.js'
export * from './plugin.js'

export default field
