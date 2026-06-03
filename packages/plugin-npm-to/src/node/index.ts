import type { NpmToPluginOptions } from './types.js'
import { definePlugin } from 'vitepress-tuck'
import { npmToPlugin } from './npmToPlugin.js'

export { npmToPlugin }
export type { NpmToPluginOptions }

export default definePlugin((options?: NpmToPluginOptions) => ({
  name: 'vitepress-plugin-npm-to',
  markdown: {
    config: (md) => {
      md.use(npmToPlugin, options)
    },
  },
}))
