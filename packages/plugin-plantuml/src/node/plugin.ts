import type { PlantumlPluginOptions } from './types.js'
import { definePlugin } from 'vitepress-tuck'
import { plantumlMarkdownPlugin } from './markdown.js'
import { plantumlVitePlugin } from './vite.js'

/**
 * VitePress plugin for embedding PlantUML diagrams in markdown.
 *
 * VitePress 插件，用于在 Markdown 中嵌入 PlantUML 图表。
 *
 * 该插件注册 Markdown-it 插件以识别 `plantuml` 代码块，
 * 并通过 Vite 插件在开发环境提供本地服务、在构建环境生成图片资源。
 * 支持亮色和暗色双主题、SVG/PNG 格式输出、缩放、全屏与下载等交互能力。
 *
 * @param options - Plugin options / 插件选项
 *
 * @example
 * ```ts
 * import { plantuml } from 'vitepress-plugin-plantuml'
 * import { defineConfig } from 'vitepress-tuck'
 *
 * export default defineConfig({
 *   plugins: [plantuml()],
 * })
 * ```
 */
export const plantuml = definePlugin((options?: PlantumlPluginOptions) => ({
  name: 'vitepress-plugin-plantuml',
  client: { enhance: 'enhanceAppWithPlantuml' },
  markdown: {
    config(md) {
      md.use(plantumlMarkdownPlugin, options)
    },
    languageAlias: { plantuml: 'txt' },
  },
  vite: {
    plugins: [plantumlVitePlugin(options)],
  },
}))
