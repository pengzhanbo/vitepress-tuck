import type { UserConfig } from 'vitepress'

export interface VitepressPlugin extends Pick<
  UserConfig,
  'markdown' | 'vite' | 'vue' | 'buildEnd' | 'transformHead' | 'transformHtml' | 'transformPageData' | 'postRender'
> {
  /**
   * 插件名称
   */
  name: string
  /**
   * 以 import enhanceApp from 'virtual:enhance-app' 注入到客户端代码中。
   *
   * 在 `.vitepress/theme/index.ts` 中调用 enhanceApp(ctx)，
   * 完成插件的客户端代码的自动注入，插件使用者无需手动添加。
   */
  client?: {
    /**
     * 添加自定义的 import 语句.
     *
     * @example
     * 导入 css 文件
     * ```ts
     * {
     *   imports: ['import "vitepress-plugin-xxx/styles/index.css"'],
     * }
     * ```
     */
    imports?: string[]
    /**
     * 插件包 `vitepress-plugin-xxx/client` 中导出的具名 `enhanceApp` 函数名。
     * 该函数会在 `vitepress/theme/index.ts` 中 的 `enhanceApp(ctx)` 调用。
     *
     * - 未设置时，默认不注入 enhanceApp 函数
     * - 设置为 `true` 时，默认函数名为 `enhanceApp`
     * - 设置为字符串时，函数名为该字符串
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
}

export interface PluginsConfig {
  /**
   * vitepress 插件
   */
  plugins?: VitepressPlugin[]
}
