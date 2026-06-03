import { definePlugin } from 'vitepress-tuck'
import { stepsPlugin } from './stepsPlugin.js'

export { stepsPlugin }

export default definePlugin(() => ({
  name: 'vitepress-plugin-steps',
  client: {
    imports: [`import 'vitepress-plugin-steps/style.css'`],
  },
  markdown: {
    config: (md) => {
      md.use(stepsPlugin)
    },
  },
}))
