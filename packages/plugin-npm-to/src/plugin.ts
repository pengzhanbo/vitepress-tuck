import type { NpmToPluginOptions } from './types.js'
import { definePlugin } from 'vitepress-tuck'
import { npmToMarkdownPlugin } from './markdown.js'

/**
 * VitePress plugin that converts a single npm/npx code block into a
 * tabbed `code-group` showing the equivalent command for multiple
 * package managers (npm, pnpm, yarn, bun, deno).
 *
 * VitePress 插件，将单个 npm/npx 代码块转换为展示多个包管理器
 * （npm、pnpm、yarn、bun、deno）等价命令的选项卡式 `code-group`。
 *
 * @param options - Plugin options. Can be:
 *   - `NpmToPackageManager[]`: shorthand to set the rendered tabs
 *   - `{ tabs?: NpmToPackageManager[] }`: explicit options object
 * / 插件选项。可以是：
 *   - `NpmToPackageManager[]`：设置渲染选项卡的简写
 *   - `{ tabs?: NpmToPackageManager[] }`：显式选项对象
 * @returns A `VitepressPlugin` that registers the markdown-it container
 * / 注册 markdown-it 容器的 `VitepressPlugin`
 * @example
 * `.vitepress/config.ts`
 * ```ts
 * import { defineConfig } from 'vitepress'
 * import { definePlugin } from 'vitepress-tuck'
 * import npmTo from 'vitepress-plugin-npm-to'
 *
 * export default defineConfig({
 *   extends: definePlugin({
 *     // Render only npm, pnpm, and yarn tabs
 *     plugins: [npmTo(['npm', 'pnpm', 'yarn'])],
 *   }),
 * })
 * ```
 *
 * @example
 * Markdown usage:
 * ```md
 * ::: npm-to
 * ```sh
 * npm i -D vitepress
 * ```
 * :::
 * ```
 *
 * @example
 * Override tabs per-container via the `tabs` attribute:
 * ```md
 * ::: npm-to tabs=npm,pnpm,bun
 * ```sh
 * npm i -D vitepress
 * ```
 * :::
 * ```
 */
export const npmTo = definePlugin((options?: NpmToPluginOptions) => ({
  name: 'vitepress-plugin-npm-to',
  markdown: {
    config: (md) => {
      md.use(npmToMarkdownPlugin, options)
    },
  },
}))
