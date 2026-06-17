import type { DefaultTheme, HeadConfig, PageData, UserConfig } from 'vitepress'
import type { EnhanceOptions } from './builtin-plugins/virtual-enhance-app.js'
import type { PluginsConfig, VitepressPlugin } from './types.js'
import { isString, toTruthy } from '@pengzhanbo/utils'
import { mergeConfig } from 'vitepress'
import { builtinPlugins } from './builtin-plugins/index.js'

/**
 * Internal collection of lifecycle hooks gathered from all plugins.
 *
 * Hooks are grouped by their execution strategy: parallel hooks store an array
 * of functions that run concurrently, while sequential hooks store an array of
 * functions that run in order with each receiving the previous result.
 *
 * 从所有插件收集的生命周期钩子集合。
 *
 * 钩子按执行策略分组：并发类钩子存储并发执行的函数数组，顺序链式类钩子存储
 * 按顺序执行的函数数组，每个函数接收上一个的结果。
 */
interface Hooks {
  /**
   * `buildEnd` hooks, executed in parallel / `buildEnd` 钩子，并发执行
   */
  buildEnd: NonNullable<UserConfig['buildEnd']>[]
  /**
   * `transformHead` hooks, executed in parallel with merged results / `transformHead` 钩子，并发执行并合并结果
   */
  transformHead: NonNullable<UserConfig['transformHead']>[]
  /**
   * `transformHtml` hooks, executed sequentially with chained results / `transformHtml` 钩子，顺序链式执行
   */
  transformHtml: NonNullable<UserConfig['transformHtml']>[]
  /**
   * `transformPageData` hooks, executed sequentially with chained results / `transformPageData` 钩子，顺序链式执行
   */
  transformPageData: NonNullable<UserConfig['transformPageData']>[]
  /**
   * `postRender` hooks, executed sequentially with chained results / `postRender` 钩子，顺序链式执行
   */
  postRender: NonNullable<UserConfig['postRender']>[]
  /**
   * `markdown.config` hooks, executed in parallel / `markdown.config` 钩子，并发执行
   */
  markdownConfig: NonNullable<NonNullable<UserConfig['markdown']>['config']>[]
}

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
  config: UserConfig<NoInfer<ThemeConfig>> & PluginsConfig,
): UserConfig<NoInfer<ThemeConfig>> {
  const hooks: Hooks = {
    buildEnd: [],
    transformHead: [],
    transformHtml: [],
    transformPageData: [],
    postRender: [],
    markdownConfig: [],
  }
  const { plugins = [], ...userConfig } = config
  let mergedConfig = {} as UserConfig<NoInfer<ThemeConfig>>
  const enhanceApp: Required<EnhanceOptions> = { imports: [], enhances: [] }
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
      const { name, client, buildEnd, transformHead, transformHtml, transformPageData, postRender, ...customConfig } = plugin

      // 注入 client 配置
      if (client) {
        client.imports?.length && enhanceApp.imports.push(...client.imports)
        client.enhance && enhanceApp.enhances.push({
          moduleName: name,
          exportName: isString(client.enhance) ? client.enhance : 'enhanceApp',
        })
      }

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
  processPlugins(builtinPlugins({ enhanceApp }))

  // 合并 userConfig
  mergedConfig = mergeConfig(mergedConfig, userConfig)

  // 合并钩子，根据不同钩子的特性，确保顺序、入参、出参一致

  // 合并 markdown config 钩子， 此钩子可直接并发执行
  const useMarkdownConfig = mergedConfig.markdown?.config
  if (hooks.markdownConfig.length) {
    mergedConfig.markdown ??= {}
    mergedConfig.markdown.config = async (md) => {
      await Promise.all([
        ...hooks.markdownConfig.map(config => config(md)),
        useMarkdownConfig?.(md),
      ].filter(toTruthy))
    }
  }

  // 合并 buildEnd 钩子， 此钩子可并发执行
  if (hooks.buildEnd.length) {
    const buildEnd = mergedConfig.buildEnd
    mergedConfig.buildEnd = async (site) => {
      await Promise.all([
        ...hooks.buildEnd.map(hook => hook(site)),
        buildEnd?.(site),
      ].filter(toTruthy))
    }
  }

  // 合并 transformHead 钩子， 此钩子可并发执行， 但需要合并所有结果
  if (hooks.transformHead.length) {
    const transformHead = mergedConfig.transformHead
    mergedConfig.transformHead = async (site) => {
      const result = await Promise.all([
        ...hooks.transformHead.map(hook => hook(site)),
        transformHead?.(site),
      ].filter(toTruthy))
      const headConfigs: HeadConfig[] = []
      for (const item of result) {
        item && headConfigs.push(...item)
      }
      return headConfigs
    }
  }

  // 合并 transformHtml 钩子， 此钩子需要按顺序执行， 且上个执行结果作为下一个的参数
  if (hooks.transformHtml.length) {
    const transformHtml = mergedConfig.transformHtml
    mergedConfig.transformHtml = async (code, id, ctx) => {
      for (const hook of hooks.transformHtml) {
        code = await hook(code, id, ctx) || code
      }
      return await transformHtml?.(code, id, ctx) || code
    }
  }

  // 合并 transformPageData 钩子， 此钩子需要按顺序执行， 且上个执行结果作为下一个的参数
  if (hooks.transformPageData.length) {
    const transformPageData = mergedConfig.transformPageData
    mergedConfig.transformPageData = async (pageData, ctx) => {
      for (const hook of hooks.transformPageData) {
        pageData = (await hook(pageData, ctx) || pageData) as PageData
      }
      return await transformPageData?.(pageData, ctx) || pageData
    }
  }

  // 合并 postRender 钩子， 此钩子需要按顺序执行， 且上个执行结果作为下一个的参数
  if (hooks.postRender.length) {
    const postRender = mergedConfig.postRender
    mergedConfig.postRender = async (context) => {
      for (const hook of hooks.postRender) {
        context = await hook(context) || context
      }
      return await postRender?.(context) || context
    }
  }

  return mergedConfig
}
