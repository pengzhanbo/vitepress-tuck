import type { Options as ComponentsOptions } from 'unplugin-vue-components'
import type { VitepressPlugin } from '../types.js'
import type { EnhanceOptions } from './virtual-enhance-app.js'
import { autoComponentsPlugin } from './auto-components.js'
import { ssrNoExternalDepsPlugin } from './ssr-no-external-deps.js'

import { virtualEnhanceAppPlugin } from './virtual-enhance-app.js'

/**
 * Options for constructing the list of built-in plugins.
 *
 * 构建内置插件列表的选项。
 */
interface BuiltinPluginOptions {
  /**
   * Client-side injection options forwarded to the `virtual:enhance-app` plugin.
   *
   * 转发给 `virtual:enhance-app` 插件的客户端注入选项。
   */
  enhanceApp?: EnhanceOptions

  /**
   * Options for the `unplugin-vue-components` plugin.
   *
   * `unplugin-vue-components` 插件的选项。
   */
  components?: ComponentsOptions
}

/**
 * Returns the list of built-in plugins shipped with vitepress-tuck.
 *
 * Currently includes the `virtual:enhance-app` Vite plugin (for client code
 * injection) and a `vitepress-tuck:deps` plugin that marks
 * `vitepress-plugin-toolkit` as SSR non-external.
 *
 * 返回 vitepress-tuck 自带的内置插件列表。
 *
 * 当前包含用于客户端代码注入的 `virtual:enhance-app` Vite 插件，以及将
 * `vitepress-plugin-toolkit` 标记为 SSR 非外部依赖的 `vitepress-tuck:deps` 插件。
 *
 * @param options - Options for built-in plugin construction / 内置插件构建选项
 * @returns Array of built-in `VitepressPlugin` instances / 内置 `VitepressPlugin` 实例数组
 */
export function builtinPlugins(options: BuiltinPluginOptions): VitepressPlugin[] {
  return [
    virtualEnhanceAppPlugin(options.enhanceApp),
    autoComponentsPlugin(options.components),
    ssrNoExternalDepsPlugin(),
  ]
}
