import type { FontAwesomeOptions, IconfontOptions, IconifyOptions, IconOptions } from './types.js'
import { objectKeys, omit, toArray, toTruthy } from '@pengzhanbo/utils'
import iconResolver from 'unplugin-icons/resolver'
import iconifyPlugin from 'unplugin-icons/vite'
import { isBuild } from 'vitepress-plugin-toolkit'
import { definePlugin } from 'vitepress-tuck'
import { createHeadConfig } from './headConfig.js'
import { iconsMarkdownPlugin } from './markdown.js'

/**
 * Create an icons plugin for VitePress with support for multiple icon providers.
 *
 * 为 VitePress 创建图标插件，支持 iconify、iconfont、fontawesome 多种图标提供商。
 *
 * The plugin registers an inline markdown syntax (`::name::`), wires up the
 * `unplugin-icons` Vite plugin and component resolver for Iconify, and injects
 * the required `<link>`/`<script>` head tags for iconfont and FontAwesome.
 *
 * @param options - A single icon provider option, an array of provider options,
 *   or omitted to use the default Iconify provider.
 *   单个图标提供商配置、配置数组，或省略以使用默认的 Iconify 提供商。
 * @returns The Vitepress plugin definition.
 *
 * @example
 * // Use the default Iconify provider
 * icons()
 *
 * @example
 * // Use iconfont with custom assets
 * icons({ provider: 'iconfont', assets: '//at.alicdn.com/w/font.css' })
 *
 * @example
 * // Combine multiple providers and mark iconfont as default
 * icons([
 *   { provider: 'iconify' },
 *   { provider: 'iconfont', default: true, assets: '//at.alicdn.com/w/font.css' },
 * ])
 */
export const icons = definePlugin((options?: IconOptions | IconOptions[]) => {
  const list = toArray(options)
  let iconify = findOptions<IconifyOptions>(list, 'iconify')
  const iconfont = findOptions<IconfontOptions>(list, 'iconfont')
  const fontawesome = findOptions<FontAwesomeOptions>(list, 'fontawesome')

  // 如果没有指定图标提供商，默认使用 iconify
  if (!iconify && !iconfont && !fontawesome) {
    iconify = { provider: 'iconify' }
  }

  // 检查默认图标供应商
  const defaultProvider = list.find(item => item.default)?.provider || 'iconify'

  const headConfigList = createHeadConfig(iconfont, fontawesome)
  return {
    name: 'vitepress-plugin-icons',
    client: { imports: [`import 'vitepress-plugin-icons/style.css'`] },
    componentResolver: [
      iconify && iconResolver({
        ...omit(iconify, ['customCollections']),
        customCollections: objectKeys(iconify.customCollections ?? {}),
      }),
    ].filter(toTruthy),
    markdown: {
      config(md) {
        md.use(iconsMarkdownPlugin, { defaultProvider, iconify, iconfont, fontawesome })
      },
    },
    vite: {
      plugins: [iconify && iconifyPlugin(iconify)],
    },
    transformHead() {
      if (isBuild) {
        return [...headConfigList]
      }
    },
    transformPageData(pageData) {
      if (!isBuild) {
        const head = (pageData.frontmatter.head ??= [])
        head.push(...headConfigList)
      }
    },
  }
})

/**
 * Find the first option matching the given provider from the options list.
 *
 * 从配置列表中查找第一个匹配指定提供商的配置项。
 *
 * @param list - The list of icon provider options / 图标提供商配置列表
 * @param provider - The provider name to match / 要匹配的提供商名称
 * @returns The matched option cast to `T`, or `undefined` / 匹配的配置项，未找到时返回 `undefined`
 */
function findOptions<T>(list: IconOptions[], provider: IconOptions['provider']): T | undefined {
  return list.find(item => item.provider === provider) as T | undefined
}
