import { definePlugin } from 'vitepress-tuck'
import { caniuseMarkdownPlugin } from './markdown.js'

/**
 * VitePress plugin for embedding Can I Use browser support information.
 *
 * VitePress 插件，用于嵌入 Can I Use 浏览器支持信息。
 *
 * The plugin registers a markdown embed rule (`@[caniuse](feature_name)`)PCaniuse`
PCaniuse`
 * Vue component, which renders an iframe pointing to the Can I Use embed service.
 *
 * 该插件注册 markdown 嵌入规则（`@[caniuse](feature_name)`）和 `VPCaniuse` Vue 组件，
 * 组件会渲染指向 Can I Use 嵌入服务的 iframe。
 *
 * @example
 * `.vitepress/config.ts`
 * ```ts
 * import { definePlugin } from 'vitepress-tuck'
 * import caniuse from 'vitepress-plugin-caniuse'
 * export default defineConfig({
 *   plugins: [caniuse()],
 * })
 * ```
 */
export const caniuse = definePlugin(() => ({
  name: 'vitepress-plugin-caniuse',
  componentResolver: ['VPCaniuse'],
  markdown: {
    config: (md) => {
      md.use(caniuseMarkdownPlugin)
    },
  },
  vite: {
    ssr: {
      noExternal: ['vitepress-plugin-caniuse'],
    },
  },
}))
