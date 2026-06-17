/**
 * Supported package managers by the npm-to plugin.
 *
 * The plugin converts `npm`/`npx` commands into the equivalent commands
 * for each of these package managers, rendered as a code-group with one
 * tab per manager.
 *
 * npm-to 插件支持的包管理器。
 *
 * 插件会将 `npm`/`npx` 命令转换为下列每个包管理器的等价命令，
 * 并渲染为每个管理器一个选项卡的 code-group。
 */
export type NpmToPackageManager = 'npm' | 'pnpm' | 'yarn' | 'bun' | 'deno'

/**
 * Options for the npm-to plugin.
 *
 * Can be provided either as a plain array of package manager names
 * (shorthand for setting `tabs`), or as an object with a `tabs` field
 * to control which package manager tabs are rendered.
 *
 * npm-to 插件的配置选项。
 *
 * 可以传入包管理器名称数组（作为设置 `tabs` 的简写形式），
 * 也可以传入带有 `tabs` 字段的对象，用于控制渲染哪些包管理器选项卡。
 *
 * @example
 * // Array shorthand: only show npm and pnpm tabs
 * npmTo(['npm', 'pnpm'])
 *
 * @example
 * // Object form: explicitly set tabs
 * npmTo({ tabs: ['npm', 'pnpm', 'yarn', 'bun'] })
 */
export type NpmToPluginOptions = NpmToPackageManager[] | {
  /**
   * Package manager tabs to render. When omitted, the plugin falls back
   * to the default tabs defined by `DEFAULT_TABS`.
   *
   * 要渲染的包管理器选项卡。省略时，插件回退到 `DEFAULT_TABS` 定义的默认选项卡。
   */
  tabs?: NpmToPackageManager[]
}
