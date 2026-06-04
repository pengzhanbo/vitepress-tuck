import { definePlugin } from 'vitepress-tuck'
import { caniuseMarkdownPlugin } from './caniusePlugin.js'

export { caniuseMarkdownPlugin }

/**
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
export default definePlugin(() => ({
  name: 'vitepress-plugin-caniuse',
  client: {
    enhance: 'enhanceAppWithCaniuse',
  },
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
