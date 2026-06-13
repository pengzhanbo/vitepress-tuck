import { definePlugin } from 'vitepress-tuck'
import { codepenMarkdownPlugin } from './markdown.js'

/**
 * @example
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
