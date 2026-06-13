import { definePlugin } from 'vitepress-tuck'
import { stepsMarkdownPlugin } from './markdown.js'

export const steps = definePlugin(() => ({
  name: 'vitepress-plugin-steps',
  client: {
    imports: [`import 'vitepress-plugin-steps/style.css'`],
  },
  markdown: {
    config: (md) => {
      md.use(stepsMarkdownPlugin)
    },
  },
}))
