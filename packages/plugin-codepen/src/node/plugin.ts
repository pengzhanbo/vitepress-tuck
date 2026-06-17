import { definePlugin } from 'vitepress-tuck'
import { codepenMarkdownPlugin } from './markdown.js'

/**
 * VitePress plugin for embedding CodePen demos.
 *
 * VitePress 插件，用于嵌入 CodePen 演示。
 *
 * The plugin registers a markdown embed rule (`@codepen`) and the `VPCodepen`
 * Vue component, which renders an iframe pointing to the CodePen embed service.
 *
 * 该插件注册 markdown 嵌入规则（`@codepen`）和 `VPCodepen` Vue 组件，
 * 组件会渲染指向 CodePen 嵌入服务的 iframe。
 *
 * @example
 * `.vitepress/config.ts`
 * ```ts
 * import codepen from 'vitepress-plugin-codepen'
 * import { defineConfig } from 'vitepress-tuck'
 * export default defineConfig({
 *   plugins: [codepen()]
 * })
 * ```
 */
export const codepen = definePlugin(() => ({
  name: 'vitepress-plugin-codepen',
  client: {
    enhance: 'enhanceAppWithCodepen',
  },
  markdown: {
    config(md) {
      md.use(codepenMarkdownPlugin)
    },
  },
  vite: {
    optimizeDeps: {
      include: ['@pengzhanbo/utils'],
    },
    ssr: {
      noExternal: ['vitepress-plugin-codepen'],
    },
  },
}))
