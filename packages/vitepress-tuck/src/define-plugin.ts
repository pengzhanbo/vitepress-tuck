import type { VitepressPlugin } from './types.js'

/**
 * 提供一种 vitepress 插件的定义方式，简化用户配置的复杂度，将复杂度转移到 vitepress 插件中
 */
export function definePlugin<T>(
  plugin: (option?: T) => VitepressPlugin,
): (option?: T) => VitepressPlugin {
  return plugin
}
