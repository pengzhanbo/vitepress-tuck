import { definePlugin } from 'vitepress-tuck'
import { caniusePlugin } from './caniusePlugin.js'

export { caniusePlugin }

export default definePlugin(() => ({
  name: 'vitepress-plugin-caniuse',
  client: {
    enhance: 'enhanceAppWithCaniuse',
  },
  markdown: {
    config: (md) => {
      md.use(caniusePlugin)
    },
  },
  vite: {
    ssr: {
      noExternal: ['vitepress-plugin-caniuse'],
    },
  },
}))
