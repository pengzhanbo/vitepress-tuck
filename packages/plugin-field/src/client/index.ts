import type { EnhanceAppContext } from 'vitepress'
import VPField from './VPField.vue'

export { VPField }

export function enhanceAppWithField({ app }: EnhanceAppContext) {
  app.component('VPField', VPField)
}
