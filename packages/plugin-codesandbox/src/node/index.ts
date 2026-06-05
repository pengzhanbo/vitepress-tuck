import { definePlugin } from 'vitepress-tuck'
import { codeSandboxMarkdownPlugin } from './codeSandboxPlugin.js'

export { codeSandboxMarkdownPlugin }

/**
 * @example
 * ```ts
 * import codeSandbox from 'vitepress-plugin-code-sandbox'
 * import { defineConfig } from 'vitepress-tuck'
 * export default defineConfig({
 *   plugins: [codeSandbox()],
 * })
 * ```
 */
export default definePlugin(() => ({
  name: 'vitepress-plugin-code-sandbox',
  markdown: {
    config(md) {
      md.use(codeSandboxMarkdownPlugin)
    },
  },
}))
