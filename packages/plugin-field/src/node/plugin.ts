import { definePlugin } from 'vitepress-tuck'
import { fieldMarkdownPlugin } from './markdown.js'

export const field = definePlugin(() => ({
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
