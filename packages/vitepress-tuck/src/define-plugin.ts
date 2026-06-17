import type { VitepressPlugin } from './types.js'

/**
 * Defines a VitePress plugin with type inference.
 *
 * This is an identity function that preserves the plugin factory type while
 * enabling TypeScript to infer the options type `T` from the factory signature.
 * It simplifies user configuration by moving complexity into the plugin itself.
 *
 * 定义 VitePress 插件，提供类型推断。
 *
 * 这是一个恒等函数，保留插件工厂类型，同时让 TypeScript 从工厂签名推断选项
 * 类型 `T`。它将复杂度转移到插件内部，从而简化用户配置。
 *
 * @param plugin - Plugin factory function returning a `VitepressPlugin` / 返回 `VitepressPlugin` 的插件工厂函数
 * @returns The same plugin factory function / 相同的插件工厂函数
 * @example
 * ```ts
 * export const myPlugin = definePlugin((options?: MyOptions) => ({
 *   name: 'vitepress-plugin-my',
 *   markdown: { config: (md) => md.use(myMarkdownPlugin) },
 * }))
 * ```
 */
export function definePlugin<T>(
  plugin: (options?: T) => VitepressPlugin,
): (options?: T) => VitepressPlugin {
  return plugin
}
