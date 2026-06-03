import type { EnhanceAppContext } from 'vitepress/client'
import VPQrcode from './VPQrcode.vue'

export { VPQrcode }
export * from './types.js'
export * from './use-qrcode.js'

export function enhanceAppWithQrcode({ app }: EnhanceAppContext) {
  app.component('VPQrcode', VPQrcode)
}
