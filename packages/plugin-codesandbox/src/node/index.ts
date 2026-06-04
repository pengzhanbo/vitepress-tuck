import { definePlugin } from 'vitepress-tuck'
import { codeSandboxMarkdownPlugin } from './codeSandboxPlugin.js'

export { codeSandboxMarkdownPlugin }

/**
 * @example
 * ```ts
 * import codeSandbox from 'vitepress-plugin-codesandbox'
 * import { defineConfig } from 'vitepress-tuck'
 * export default defineConfig({
 *   plugins: [codeSandbox()],
 * })
 * ```
 */
export default definePlugin(() => ({
  name: 'vitepress-plugin-codesandbox',
  markdown: {
    config(md) {
      md.use(codeSandboxMarkdownPlugin)
    },
  },
}))
