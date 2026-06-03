import type { MermaidPluginOptions } from './types.js'
import { definePlugin } from 'vitepress-tuck'
import { mermaidPlugin } from './mermaidPlugin.js'
import { mermaidVitePlugin } from './mermaidVitePlugin.js'

export { mermaidPlugin, mermaidVitePlugin }
export type { MermaidPluginOptions } from './types.js'

export default definePlugin((options?: MermaidPluginOptions) => ({
  name: 'vitepress-plugin-mermaid-next',
  client: {
    enhance: 'enhanceAppWithMermaid',
  },
  markdown: {
    config(md) {
      md.use(mermaidPlugin)
    },
  },
  vite: {
    plugins: [mermaidVitePlugin(options)],
    optimizeDeps: {
      exclude: ['mermaid'],
    },
    ssr: {
      noExternal: ['vitepress-plugin-mermaid-next'],
    },
  },
}))
