import type { EnhanceAppContext } from 'vitepress'
import VPArtPlayer from './VPArtPlayer.vue'
import VPVideoEmbed from './VPVideoEmbed.vue'

export { VPArtPlayer, VPVideoEmbed }

export function enhanceAppWithVideo({ app }: EnhanceAppContext) {
  app.component('VPArtPlayer', VPArtPlayer)
  app.component('VPVideoEmbed', VPVideoEmbed)
}
