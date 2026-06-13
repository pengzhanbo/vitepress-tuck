import { definePlugin } from 'vitepress-tuck'
import { plotMarkdownPlugin } from './markdown.js'

export const plot = definePlugin(() => ({
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
