/**
 * Entry point of the `vitepress-plugin-npm-to` package.
 *
 * Re-exports the public API: the default plugin factory, markdown plugin,
 * types, and helper functions for converting npm commands to multiple
 * package manager commands.
 *
 * `vitepress-plugin-npm-to` 包的入口文件。
 *
 * 重新导出公共 API：默认插件工厂、markdown 插件、类型定义，
 * 以及将 npm 命令转换为多包管理器命令的辅助函数。
 *
 * @example
 * `.vitepress/config.ts`
 * ```ts
 * import { defineConfig } from 'vitepress'
 * import { definePlugin } from 'vitepress-tuck'
 * import npmTo from 'vitepress-plugin-npm-to'
 *
 * export default defineConfig({
 *   // 通过 vitepress-tuck 的插件系统启用
 *   extends: definePlugin({
 *     plugins: [npmTo()],
 *   }),
 * })
 * ```
 */

import { npmTo } from './plugin.js'

export * from './markdown.js'
export * from './plugin.js'
export * from './types.js'

export default npmTo
