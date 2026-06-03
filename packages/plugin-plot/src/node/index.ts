import { definePlugin } from 'vitepress-tuck'
import { plotPlugin } from './plotPlugin.js'

export { plotPlugin }

export default definePlugin(() => ({
  name: 'vitepress-plugin-plot',
  client: {
    enhance: 'enhanceAppWithPlot',
  },
  markdown: {
    config: (md) => {
      md.use(plotPlugin)
    },
  },
  vite: {
    ssr: {
      noExternal: ['vitepress-plugin-plot'],
    },
  },
}))
