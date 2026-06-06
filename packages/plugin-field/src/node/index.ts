import { definePlugin } from 'vitepress-tuck'
import { fieldMarkdownPlugin } from './fieldPlugin.js'

export { fieldMarkdownPlugin } from './fieldPlugin.js'

export default definePlugin(() => ({
  name: 'vitepress-plugin-field',
  client: {
    enhance: 'enhanceAppWithField',
  },
  markdown: {
    config(md) {
      md.use(fieldMarkdownPlugin)
    },
  },
}))
