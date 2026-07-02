import type { Arrayable, LiteralUnion } from '@pengzhanbo/utils'
import type { Options as RawIconifyOptions } from 'unplugin-icons'
import type { ComponentResolverOption } from 'unplugin-icons/resolver'

/**
 * Base options shared by all icon providers.
 *
 * 所有图标提供商共享的基础选项。
 */
interface BaseOptions {
  /**
   * Icon provider.
   *
   * 图标提供商。
   *
   * @default 'iconify'
   */
  provider?: 'iconify' | 'iconfont' | 'fontawesome'

  /**
   * Whether to use as the default icon provider.
   *
   * 是否作为默认图标提供商。
   *
   * @default false
   */
  default?: boolean

  /**
   * Color of the icon.
   *
   * 图标颜色。
   *
   * @default ''
   */
  color?: string

  /**
   * Size of the icon.
   *
   * 图标大小。
   *
   * @default '1.2em'
   */
  size?: string | number
}

/**
 * Options for the Iconify icon provider.
 *
 * Iconify 图标提供商的配置选项。
 */
export interface IconifyOptions extends BaseOptions, RawIconifyOptions, Omit<ComponentResolverOption, 'customCollections'> {
  provider: 'iconify'
}

/**
 * Options for the iconfont icon provider.
 *
 * iconfont 图标提供商的配置选项。
 */
export interface IconfontOptions extends BaseOptions {
  provider: 'iconfont'
  /**
   * The prefix of the iconfont.
   *
   * iconfont 图标的类名前缀。
   *
   * @default 'icon-'
   */
  prefix?: string

  /**
   * The assets of the iconfont.
   *
   * 图标字体资源链接。
   */
  assets?: IconAssetLink | IconAssetLink[]
}

/**
 * Options for the FontAwesome icon provider.
 *
 * FontAwesome 图标提供商的配置选项。
 */
export interface FontAwesomeOptions extends BaseOptions {
  provider: 'fontawesome'
  /**
   * The prefix of the fontawesome icon.
   *
   * FontAwesome 图标的前缀。
   *
   * @default 'fas'
   */
  prefix?: LiteralUnion<FontAwesomePrefix>

  /**
   * The assets of the fontawesome.
   *
   * FontAwesome 的资源，支持内置资源名或自定义资源链接。
   *
   * @default 'fontawesome'
   */
  assets?: Arrayable<FontAwesomeAssetBuiltIn | IconAssetLink>
}

/**
 * Union type of all icon provider options.
 *
 * 所有图标提供商配置选项的联合类型。
 */
export type IconOptions = IconifyOptions | IconfontOptions | FontAwesomeOptions

/**
 * Icon asset link, supporting protocol-relative, http, and https URLs.
 *
 * 图标资源链接，支持协议相对路径、http 和 https 链接。
 */
export type IconAssetLink = `//${string}` | `//${string}` | `https://${string}` | `http://${string}`

/**
 * Built-in FontAwesome asset names.
 *
 * 内置的 FontAwesome 资源名称。
 */
export type FontAwesomeAssetBuiltIn = 'fontawesome' | 'fontawesome-with-brands'

export type FontAwesomePrefix
  = | 'fas' | 's' // fa-solid fa-name
    | 'far' | 'r' // fa-regular fa-name
    | 'fal' | 'l' // fa-light fa-name
    | 'fat' | 't' // fa-thin fa-name
    | 'fads' | 'ds' // fa-duotone fa-solid fa-name
    | 'fass' | 'ss' // fa-sharp fa-solid fa-name
    | 'fasr' | 'sr' // fa-sharp fa-regular fa-name
    | 'fasl' | 'sl' // fa-sharp fa-light fa-name
    | 'fast' | 'st' // fa-sharp fa-thin fa-name
    | 'fasds' | 'sds' // fa-sharp-duotone fa-solid fa-name
    | 'fab' | 'b' // fa-brands fa-name
