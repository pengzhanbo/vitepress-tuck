import type { EnhanceAppContext } from 'vitepress/client'
import Plot from './Plot.vue'

export { Plot }

export function enhanceAppWithPlot({ app }: EnhanceAppContext) {
  app.component('Plot', Plot)
}
