import type { MermaidPluginOptions } from './types.js'
import { definePlugin } from 'vitepress-tuck'
import { mermaidMarkdownPlugin } from './markdown.js'
import { mermaidVitePlugin } from './vite.js'

/**
 * VitePress plugin that renders Mermaid diagrams inside markdown with
 * interactive zoom, fullscreen, and download support.
 *
 * VitePress 插件，在 markdown 中渲染 Mermaid 图表，并支持交互式缩放、
 * 全屏与下载功能。
 *
 * The plugin registers a markdown-it rule to convert `mermaid` fenced code
 * blocks into `<VPMermaid>` components, injects a virtual module that exposes
 * runtime options and locales, and ensures the `mermaid` ESM bundle is
 * pre-bundled and SSR-compatible.
 *
 * 该插件注册一条 markdown-it 规则，将 `mermaid` 围栏代码块转换为
 * `<VPMermaid>` 组件；注入一个虚拟模块以暴露运行时选项与多语言配置；
 * 同时确保 `mermaid` 的 ESM 产物被预构建并兼容 SSR。
 *
 * @param options - Plugin options including mermaid config and locales / 插件选项，包含 mermaid 配置与多语言数据
 * @example
 * `.vitepress/config.ts`
 * ```ts
 * import { defineConfig } from 'vitepress'
 * import { mermaid } from 'vitepress-plugin-mermaid-tuck'
 * export default defineConfig({
 *   vite: { plugins: [mermaid()] },
 * })
 * ```
 */
export const mermaid = definePlugin((options?: MermaidPluginOptions) => ({
  name: 'vitepress-plugin-mermaid-tuck',
  componentResolver: ['VPMermaid'],
  markdown: {
    config(md) {
      md.use(mermaidMarkdownPlugin)
    },
  },
  vite: {
    plugins: [mermaidVitePlugin(options)],
    optimizeDeps: {
      include: ['mermaid/dist/mermaid.esm.min.mjs'],
    },
    ssr: {
      noExternal: ['vitepress-plugin-mermaid-tuck'],
    },
  },
}))
