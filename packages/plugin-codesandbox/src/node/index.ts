import { definePlugin } from 'vitepress-tuck'
import { codeSandboxPlugin } from './codeSandboxPlugin'

export { codeSandboxPlugin }

export default definePlugin(() => ({
  name: 'vitepress-plugin-codesandbox',
  markdown: {
    config(md) {
      md.use(codeSandboxPlugin)
    },
  },
}))
