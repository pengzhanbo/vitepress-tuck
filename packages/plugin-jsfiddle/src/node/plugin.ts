import { definePlugin } from 'vitepress-tuck'
import { jsfiddleMarkdownPlugin } from './markdown.js'

/**
 * VitePress plugin for embedding JSFiddle demos.
 *
 * VitePress 插件，用于嵌入 JSFiddle 示例。
 *
 * The plugin registers a markdown embed rule (`@[jsfiddle](user/id)`) and the `VPJsfiddle`
 * Vue component, which renders an iframe pointing to the JSFiddle embed service.
 *
 * 该插件注册 markdown 嵌入规则（`@[jsfiddle](user/id)`）和 `VPJsfiddle` Vue 组件，
 * 组件会渲染指向 JSFiddle 嵌入服务的 iframe。
 *
 * @example
 * `.vitepress/config.ts`
 * ```ts
 * import jsfiddle from 'vitepress-plugin-jsfiddle'
 * import { defineConfig } from 'vitepress-tuck'
 * export default defineConfig({
 *   plugins: [jsfiddle()]
 * })
 * ```
 */
export const jsfiddle = definePlugin(() => ({
  name: 'vitepress-plugin-jsfiddle',
  componentResolver: ['VPJsfiddle'],
  markdown: {
    config(md) {
      md.use(jsfiddleMarkdownPlugin)
    },
  },
  vite: {
    ssr: {
      noExternal: ['vitepress-plugin-jsfiddle'],
    },
  },
}))
