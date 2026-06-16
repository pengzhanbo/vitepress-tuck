import type { PlantumlPluginOptions } from './types.js'
import { definePlugin } from 'vitepress-tuck'
import { plantumlMarkdownPlugin } from './markdown.js'
import { plantumlVitePlugin } from './vite.js'

/**
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
