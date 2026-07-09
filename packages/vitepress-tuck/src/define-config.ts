import type { ComponentResolver } from 'unplugin-vue-components'
import type { DefaultTheme, UserConfig } from 'vitepress'
import type { EnhanceOptions } from './builtin-plugins/virtual-enhance-app.js'
import type { TuckConfig, VitepressPlugin } from './types.js'
import { isString, partition, toArray } from '@pengzhanbo/utils'
import { mergeConfig } from 'vitepress'
import { builtinPlugins } from './builtin-plugins/index.js'
import { createHooks, mergePluginHooks } from './hooks.js'

/**
 * Defines a VitePress configuration with plugin lifecycle management.
 *
 * This is the core function of vitepress-tuck. It accepts a standard VitePress
 * `UserConfig` extended with a `plugins` field, then iterates over every plugin
 * to extract client config, lifecycle hooks, and VitePress config fragments.
 *
 * Hook merging strategy:
 * - **Parallel/concurrent**: `markdown.config`, `buildEnd`, `transformHead` run
 *   via `Promise.all`; `transformHead` results are concatenated.
 * - **Sequential/chained**: `transformHtml`, `transformPageData`, `postRender`
 *   run in order, with each hook receiving the previous hook's result.
 *
 * User-provided hooks (from `userConfig`) are appended as the final step of
 * each chain so they always run after plugin hooks. The returned config is a
 * standard VitePress `UserConfig`, fully compatible with native VitePress.
 *
 * 定义带插件生命周期管理的 VitePress 配置。
 *
 * 这是 vitepress-tuck 的核心函数。它接收一个扩展了 `plugins` 字段的标准
 * VitePress `UserConfig`，然后遍历所有插件，提取 client 配置、生命周期钩子和
 * VitePress 配置片段。
 *
 * 钩子合并策略：
 * - **并发类**：`markdown.config`、`buildEnd`、`transformHead` 通过 `Promise.all`
 *   并发执行；`transformHead` 的结果会被拼接合并。
 * - **顺序链式类**：`transformHtml`、`transformPageData`、`postRender` 按顺序执行，
 *   每个钩子接收上一个钩子的结果。
 *
 * 用户提供的钩子（来自 `userConfig`）作为每条链的最后一步追加，确保始终在
 * 插件钩子之后执行。返回值为标准 VitePress `UserConfig`，完全兼容原生 VitePress。
 *
 * @param config - VitePress user config with an optional `plugins` field / 带可选 `plugins` 字段的 VitePress 用户配置
 * @returns A standard VitePress `UserConfig` with plugin hooks merged in / 合并了插件钩子的标准 VitePress `UserConfig`
 * @example
 * ```ts
 * import { defineConfig } from 'vitepress-tuck'
 * import { qrcode } from 'vitepress-plugin-qrcode'
 *
 * export default defineConfig({
 *   plugins: [qrcode()],
 *   title: 'My Site',
 *   // standard VitePress options...
 * })
 * ```
 */
export function defineConfig<ThemeConfig = DefaultTheme.Config>(
  config: UserConfig<NoInfer<ThemeConfig>> & TuckConfig,
): UserConfig<NoInfer<ThemeConfig>> {
  const hooks = createHooks()
  const { plugins = [], components = {}, ...userConfig } = config
  let mergedConfig = {} as Partial<UserConfig<NoInfer<ThemeConfig>>>

  const enhanceApp: Required<EnhanceOptions> = { imports: [], enhances: [] }

  components.resolvers ??= []
  /**
   * Iterates a list of plugins, extracting client config, lifecycle hooks, and
   * VitePress config fragments into the shared accumulators (`hooks`,
   * `enhanceApp`, `mergedConfig`).
   *
   * 遍历插件列表，将 client 配置、生命周期钩子和 VitePress 配置片段提取到
   * 共享累加器（`hooks`、`enhanceApp`、`mergedConfig`）中。
   *
   * @param plugins - Plugins to process / 待处理的插件列表
   */
  const processPlugins = (plugins: VitepressPlugin[]) => {
    plugins.forEach((plugin) => {
      const { name, client, componentResolver, buildEnd, transformHead, transformHtml, transformPageData, postRender, ...customConfig } = plugin

      // 注入 client 配置
      if (client) {
        client.imports?.length && enhanceApp.imports.push(...client.imports)
        client.enhance && enhanceApp.enhances.push({
          moduleName: name,
          exportName: isString(client.enhance) ? client.enhance : 'enhanceApp',
        })
      }

      // 注入组件Resolver
      componentResolver && components.resolvers!.push(...normalizeComponentResolver(name, componentResolver))

      // 提取各种钩子函数
      if (customConfig.markdown?.config) {
        hooks.markdownConfig.push(customConfig.markdown.config)
        delete customConfig.markdown.config
      }
      buildEnd && hooks.buildEnd.push(buildEnd)
      transformHead && hooks.transformHead.push(transformHead)
      transformHtml && hooks.transformHtml.push(transformHtml)
      transformPageData && hooks.transformPageData.push(transformPageData)
      postRender && hooks.postRender.push(postRender)

      // 合并 markdown / vite / vue 配置
      mergedConfig = mergeConfig(mergedConfig, customConfig)
    })
  }
  // 先处理外部插件
  processPlugins(plugins)
  // 再处理内置插件
  processPlugins(builtinPlugins({ enhanceApp, components }))
  // 合并 userConfig
  mergedConfig = mergeConfig(mergedConfig, userConfig)
  // 合并钩子
  mergePluginHooks(hooks, mergedConfig)

  return mergedConfig satisfies UserConfig<NoInfer<ThemeConfig>>
}

function normalizeComponentResolver(pluginName: string, componentResolver: ComponentResolver | string[] | (string | ComponentResolver)[]): ComponentResolver[] {
  const [components, resolvers] = partition(toArray(componentResolver), isString) as [string[], ComponentResolver[]]

  components.length && resolvers.push({
    type: 'component',
    resolve: (componentName) => {
      if (components.includes(componentName)) {
        return { name: componentName, from: `${pluginName}/client` }
      }
    },
  })

  return resolvers
}
