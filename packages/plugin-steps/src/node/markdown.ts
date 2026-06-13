import type { PluginSimple } from 'markdown-it'
import { createContainerPlugin } from 'vitepress-plugin-toolkit'

export const stepsMarkdownPlugin: PluginSimple = (md) => {
  createContainerPlugin(md, 'steps', {
    before: () => '<div class="vp-steps">',
  })
}
