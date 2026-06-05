import type { MermaidPluginOptions } from './types.js'
import { definePlugin } from 'vitepress-tuck'
import { mermaidMarkdownPlugin } from './mermaidPlugin.js'
import { mermaidVitePlugin } from './mermaidVitePlugin.js'

export { mermaidMarkdownPlugin, mermaidVitePlugin }
export type { MermaidPluginOptions } from './types.js'

export default definePlugin((options?: MermaidPluginOptions) => ({
  name: 'vitepress-plugin-mermaid-tuck',
  client: {
    enhance: 'enhanceAppWithMermaid',
  },
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
