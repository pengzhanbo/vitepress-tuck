import { definePlugin } from 'vitepress-tuck'
import { pdfMarkdownPlugin } from './markdown.js'

/**
 * VitePress plugin for embedding PDF documents in markdown.
 *
 * VitePress 插件，用于在 markdown 中嵌入 PDF 文档。
 *
 * The plugin registers the `@[pdf]` markdown embed rule and wires up the
 * client-side `VPPdf` component via `virtual:enhance-app`. It also configures
 * Vite SSR and dependency optimization for the plugin and its utilities.
 *
 * 该插件注册 `@[pdf]` markdown 嵌入规则，并通过 `virtual:enhance-app`
 * 接入客户端 `VPPdf` 组件。同时为该插件及其工具库配置 Vite SSR
 * 和依赖预优化。
 *
 * @example
 * `.vitepress/config.ts`
 * ```ts
 * import { defineConfig } from 'vitepress-tuck'
 * import pdf from 'vitepress-plugin-pdf'
 *
 * export default defineConfig({
 *   plugins: [pdf()],
 * })
 * ```
 *
 * @example
 * // Markdown usage
 * ```md
 * @[pdf](/files/sample.pdf)
 * @[pdf 1 no-toolbar width="100%" height="600px"](/files/sample.pdf)
 * ```
 */
export const pdf = definePlugin(() => ({
  name: 'vitepress-plugin-pdf',
  client: {
    enhance: 'enhanceAppWithPDF',
  },
  markdown: {
    config: (md) => {
      md.use(pdfMarkdownPlugin)
    },
  },
  vite: {
    ssr: {
      noExternal: ['vitepress-plugin-pdf'],
    },
    optimizeDeps: {
      include: ['@pengzhanbo/utils'],
    },
  },
}))
