import { definePlugin } from 'vitepress-tuck'
import { stackblitzMarkdownPlugin } from './markdown.js'

/**
 * VitePress plugin for embedding StackBlitz projects.
 *
 * Registers the StackBlitz markdown-it plugin and the `VPStackBlitz`
 * Vue component for auto-import.
 *
 * VitePress 插件，用于嵌入 StackBlitz 项目。注册 StackBlitz markdown-it 插件
 * 和 `VPStackBlitz` Vue 组件的自动导入。
 *
 * @example
 * ```ts
 * // .vitepress/config.ts
 * import { defineConfig } from 'vitepress-tuck'
 * import stackblitz from 'vitepress-plugin-stackblitz'
 *
 * export default defineConfig({
 *   plugins: [stackblitz()],
 * })
 * ```
 */
export const stackblitz = definePlugin(() => ({
  name: 'vitepress-plugin-stackblitz',
  componentResolver: ['VPStackBlitz'],
  markdown: {
    config(md) {
      md.use(stackblitzMarkdownPlugin)
    },
  },
  vite: {
    optimizeDeps: {
      include: ['@stackblitz/sdk'],
    },
  },
}))
