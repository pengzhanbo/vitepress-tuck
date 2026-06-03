import { definePlugin } from 'vitepress-tuck'
import { jsfiddlePlugin } from './jsfiddlePlugin'

export { jsfiddlePlugin }

export default definePlugin(() => ({
  name: 'vitepress-plugin-jsfiddle',
  client: {
    enhance: 'enhanceAppWithJsFiddle',
  },
  markdown: {
    config(md) {
      md.use(jsfiddlePlugin)
    },
  },
  vite: {
    ssr: {
      noExternal: ['vitepress-plugin-jsfiddle'],
    },
  },
}))
