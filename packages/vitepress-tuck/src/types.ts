import type { ComponentResolver, Options as ComponentsOptions } from 'unplugin-vue-components'
import type { UserConfig } from 'vitepress'

/**
 * Represents a VitePress plugin in the vitepress-tuck ecosystem.
 *
 * A plugin extends a subset of VitePress's `UserConfig` fields (markdown, vite,
 * vue, and lifecycle hooks) and adds a `name` plus an optional `client`
 * descriptor for automatic client-side injection via the
 * `virtual:enhance-app` virtual module.
 *
 * 表示 vitepress-tuck 生态中的 VitePress 插件。
 *
 * 插件扩展了 VitePress `UserConfig` 的部分字段（markdown、vite、vue 及生命周期
 * 钩子），并新增 `name` 与可选的 `client` 描述符，用于通过
 * `virtual:enhance-app` 虚拟模块自动注入客户端代码。
 *
 * @example
 * ```ts
 * export const myPlugin = definePlugin((options?: MyOptions) => ({
 *   name: 'vitepress-plugin-my',
 *   markdown: { config: (md) => md.use(myMarkdownPlugin) },
 *   client: { enhance: true },
 * }))
 * ```
 */
export interface VitepressPlugin extends Pick<
  UserConfig,
  'markdown' | 'vite' | 'vue' | 'buildEnd' | 'transformHead' | 'transformHtml' | 'transformPageData' | 'postRender'
> {
  /**
   * Unique name of the plugin, also used as the client module specifier.
   *
   * 插件的唯一名称，同时用作客户端模块标识符。
   */
  name: string
  /**
   * Client-side injection descriptor consumed by the `virtual:enhance-app` module.
   *
   * When set, the built-in virtual plugin generates
   * `import enhanceApp from 'virtual:enhance-app'` and invokes it inside
   * `.vitepress/theme/index.ts` via `enhanceApp(ctx)`, so plugin consumers do
   * not need to wire up client code manually.
   *
   * 客户端注入描述符，由 `virtual:enhance-app` 模块消费。
   *
   * 设置后，内置虚拟插件会生成 `import enhanceApp from 'virtual:enhance-app'`，
   * 并在 `.vitepress/theme/index.ts` 中通过 `enhanceApp(ctx)` 调用，
   * 完成插件客户端代码的自动注入，插件使用者无需手动添加。
   */
  client?: {
    /**
     * Custom import statements injected into the generated client module.
     *
     * 向生成的客户端模块注入自定义 import 语句。
     *
     * @example
     * Import a CSS file / 导入 CSS 文件
     * ```ts
     * {
     *   imports: ['import "vitepress-plugin-xxx/styles/index.css"'],
     * }
     * ```
     */
    imports?: string[]
    /**
     * Name of the named `enhanceApp` function exported from
     * `vitepress-plugin-xxx/client`. This function is invoked as
     * `enhanceApp(ctx)` inside `vitepress/theme/index.ts`.
     *
     * 插件包 `vitepress-plugin-xxx/client` 中导出的具名 `enhanceApp` 函数名。
     * 该函数会在 `vitepress/theme/index.ts` 中的 `enhanceApp(ctx)` 调用。
     *
     * - When unset, no `enhanceApp` function is injected / 未设置时，默认不注入 enhanceApp 函数
     * - When `true`, the function name defaults to `enhanceApp` / 设置为 `true` 时，默认函数名为 `enhanceApp`
     * - When a string, that string is used as the function name / 设置为字符串时，函数名为该字符串
     *
     * @example
     * ```ts
     * {
     *   enhance: 'enhanceAppWithXXX',
     * }
     * ```
     */
    enhance?: string | boolean
  }

  /**
   * Component resolvers to be used by `unplugin-vue-components` plugin.
   *
   * 用于 `unplugin-vue-components` 插件的组件解析器。
   *
   */
  componentResolver?: ComponentResolver | string[] | (string | ComponentResolver)[]
}

/**
 * User configuration extension that adds a `plugins` field to VitePress's
 * `UserConfig`.
 *
 * 用户配置扩展，为 VitePress 的 `UserConfig` 新增 `plugins` 字段。
 */
export interface TuckConfig {
  /**
   * List of vitepress-tuck plugins to be processed by `defineConfig`.
   *
   * 由 `defineConfig` 处理的 vitepress-tuck 插件列表。
   */
  plugins?: VitepressPlugin[]

  /**
   * Options for `unplugin-vue-components` plugin.
   *
   * `unplugin-vue-components` 插件的选项。
   *
   * @see - https://github.com/unplugin/unplugin-vue-components
   */
  components?: ComponentsOptions
}

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
export interface VitepressPluginHooks {
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
