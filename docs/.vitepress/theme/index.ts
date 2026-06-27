import type { Theme } from 'vitepress'
import enhanceApp from 'virtual:enhance-app'
import CopyOrDownloadAsMarkdownButtons from 'vitepress-plugin-llms/vitepress-components/CopyOrDownloadAsMarkdownButtons.vue'
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'

import './style.css'

export default {
  extends: DefaultTheme,
  Layout,
  async enhanceApp(ctx) {
    ctx.app.component('CopyOrDownloadAsMarkdownButtons', CopyOrDownloadAsMarkdownButtons)
    await enhanceApp(ctx)
  },
} satisfies Theme
