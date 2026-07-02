import type { HeadConfig } from 'vitepress'
import type { FontAwesomeOptions, IconfontOptions } from './types.js'
import { toArray } from '@pengzhanbo/utils'

/**
 * Build the VitePress head config entries for iconfont and FontAwesome assets.
 *
 * 为 iconfont 和 FontAwesome 资源构建 VitePress head 配置项。
 *
 * For iconfont, each asset URL is injected as a `<link>` stylesheet (when it
 * ends with `.css`) or a `<script>` tag (when it ends with `.js`).
 *
 * For FontAwesome, built-in asset names are expanded to their CDN script tags,
 * while custom URLs follow the same `.css`/`.js` rule as iconfont.
 *
 * @param iconfont - The iconfont options, or `undefined` when not configured / iconfont 配置，未配置时为 `undefined`
 * @param fontawesome - The FontAwesome options, or `undefined` when not configured / FontAwesome 配置，未配置时为 `undefined`
 * @returns An array of VitePress `HeadConfig` entries / VitePress `HeadConfig` 配置项数组
 */
export function createHeadConfig(iconfont: IconfontOptions | undefined, fontawesome: FontAwesomeOptions | undefined) {
  const head: HeadConfig[] = []

  iconfont && toArray(iconfont.assets).forEach((asset) => {
    if (asset.endsWith('.css')) {
      head.push(['link', { rel: 'stylesheet', href: asset }])
    }
    else if (asset.endsWith('.js')) {
      head.push(['script', { src: asset }])
    }
  })

  fontawesome && toArray(fontawesome.assets ?? 'fontawesome').forEach((asset) => {
    if (asset === 'fontawesome') {
      ['solid', 'regular', 'fontawesome'].forEach((type) => {
        head.push(['script', { 'src': getFontAwesomeCDNLink(type), 'data-auto-replace-svg': 'nest' }])
      })
    }
    else if (asset === 'fontawesome-with-brands') {
      head.push(['script', { 'src': getFontAwesomeCDNLink('brands'), 'data-auto-replace-svg': 'nest' }])
    }
    else if (asset.endsWith('.css')) {
      head.push(['link', { rel: 'stylesheet', href: asset }])
    }
    else if (asset.endsWith('.js')) {
      head.push(['script', { 'src': asset, 'data-auto-replace-svg': 'nest' }])
    }
  })

  return head
}

/**
 * Get the jsDelivr CDN link for a given FontAwesome kit type.
 *
 * 根据指定的 FontAwesome 套件类型获取 jsDelivr CDN 链接。
 *
 * @param type - The FontAwesome kit type, e.g. `solid`, `brands` / FontAwesome 套件类型，例如 `solid`、`brands`
 * @returns The CDN URL for the FontAwesome kit / FontAwesome 套件的 CDN 链接
 */
function getFontAwesomeCDNLink(type: string): string {
  return `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/js/${type}.min.js`
}
