import type { Theme } from 'vitepress'
import enhanceApp from 'virtual:enhance-app'
import CopyOrDownloadAsMarkdownButtons from 'vitepress-plugin-llms/vitepress-components/CopyOrDownloadAsMarkdownButtons.vue'
import { setupWatermark } from 'vitepress-plugin-watermark'
import DefaultTheme from 'vitepress/theme'

import './style.css'

export default {
  extends: DefaultTheme,
  async enhanceApp(ctx) {
    ctx.app.component('CopyOrDownloadAsMarkdownButtons', CopyOrDownloadAsMarkdownButtons)
    await enhanceApp(ctx)
  },
  setup() {
    setupWatermark({ enabled: false })
  },
} satisfies Theme
