/**
 * Node-side entry point for the PlantUML plugin.
 *
 * PlantUML 插件的 Node 端入口文件，统一导出插件主入口、Markdown 插件与 Vite 插件。
 *
 * @example
 * ```ts
 * import plantuml from 'vitepress-plugin-plantuml/node'
 * ```
 */
import { plantuml } from './plugin.js'

export * from './markdown.js'
export * from './plugin.js'
export * from './vite.js'

export default plantuml
