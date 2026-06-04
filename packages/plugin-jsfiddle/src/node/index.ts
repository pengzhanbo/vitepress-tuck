import { definePlugin } from 'vitepress-tuck'
import { jsfiddleMarkdownPlugin } from './jsfiddlePlugin'

export { jsfiddleMarkdownPlugin }

/**
 * @example
 * ```ts
 * import jsfiddle from 'vitepress-plugin-jsfiddle'
 * import { defineConfig } from 'vitepress-tuck'
 * export default defineConfig({
 *   plugins: [jsfiddle()]
 * })
 * ```
 */
export default definePlugin(() => ({
  name: 'vitepress-plugin-jsfiddle',
  client: {
    enhance: 'enhanceAppWithJsFiddle',
  },
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
