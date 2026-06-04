import { definePlugin } from 'vitepress-tuck'
import { stepsMarkdownPlugin } from './stepsPlugin.js'

export { stepsMarkdownPlugin }

export default definePlugin(() => ({
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
