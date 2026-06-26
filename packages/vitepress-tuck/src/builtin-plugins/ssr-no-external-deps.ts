import { definePlugin } from '../define-plugin.js'

export const ssrNoExternalDepsPlugin = definePlugin(() => ({
  name: 'vitepress-tuck:deps',
  vite: {
    ssr: {
      noExternal: ['vitepress-plugin-toolkit'],
    },
  },
}))
