import { definePlugin } from 'vitepress-tuck'
import { plotMarkdownPlugin } from './plotPlugin.js'

export { plotMarkdownPlugin }

export default definePlugin(() => ({
  name: 'vitepress-plugin-plot',
  client: {
    enhance: 'enhanceAppWithPlot',
  },
  markdown: {
    config: (md) => {
      md.use(plotMarkdownPlugin)
    },
  },
  vite: {
    ssr: {
      noExternal: ['vitepress-plugin-plot'],
    },
  },
}))
