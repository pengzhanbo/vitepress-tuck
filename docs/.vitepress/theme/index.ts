import type { Theme } from 'vitepress'
import enhanceApp from 'virtual:enhance-app'
import DefaultTheme from 'vitepress/theme'
import NpmBadge from './components/NpmBadge.vue'

import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    enhanceApp(ctx)
    ctx.app.component('NpmBadge', NpmBadge)
  },
} satisfies Theme
