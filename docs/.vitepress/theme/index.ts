import type { Theme } from 'vitepress'
import enhanceApp from 'virtual:enhance-app'
import CopyOrDownloadAsMarkdownButtons from 'vitepress-plugin-llms/vitepress-components/CopyOrDownloadAsMarkdownButtons.vue'
import DefaultTheme from 'vitepress/theme'
import NpmBadge from './components/NpmBadge.vue'

import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    enhanceApp(ctx)
    ctx.app.component('NpmBadge', NpmBadge)
    ctx.app.component('CopyOrDownloadAsMarkdownButtons', CopyOrDownloadAsMarkdownButtons)
  },
} satisfies Theme
