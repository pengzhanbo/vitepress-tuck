import { definePlugin } from 'vitepress-tuck'
import { plotMarkdownPlugin } from './markdown.js'

/**
 * VitePress plugin that hides inline text behind a spoiler (plot) effect.
 *
 * VitePress 插件，将内联文本隐藏在黑幕效果之后。
 *
 * Wires the `plotMarkdownPlugin` markdown-it rule into VitePress and registers
 * the client-side `Plot` Vue component via `virtual:enhance-app`. The plugin
 * also marks itself as `noExternal` for SSR so Vite can bundle it during
 * server-side rendering.
 *
 * 将 `plotMarkdownPlugin` markdown-it 规则接入 VitePress，并通过
 * `virtual:enhance-app` 注册客户端 `Plot` Vue 组件。该插件还将自身标记为
 * SSR 的 `noExternal`，以便 Vite 在服务端渲染时对其进行打包。
 *
 * @example
 * `.vitepress/config.ts`
 * ```ts
 * import { defineConfig } from 'vitepress-tuck'
 * import plot from 'vitepress-plugin-plot'
 *
 * export default defineConfig({
 *   plugins: [plot({ trigger: 'click', effect: 'blur' })],
 * })
 * ```
 */
export const plot = definePlugin(() => ({
  name: 'vitepress-plugin-plot',
  componentResolver: ['VPPlot'],
  markdown: {
    config: (md) => {
      md.use(plotMarkdownPlugin)
    },
  },
  vite: {
    ssr: {
      noExternal: ['vitepress-plugin-plot'],
    },
  },
}))
