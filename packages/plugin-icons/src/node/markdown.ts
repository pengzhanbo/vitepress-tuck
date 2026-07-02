/**
 * markdown 行内图标语法插件，支持 iconify、iconfont、fontawesome 图标提供商
 * 默认使用 iconify 图标提供商，可在配置中制定其他提供商 provider, 并设置默认图标提供商 default: true
 *
 * 语法：
 * ```md
 * ::name =size /color::
 * ```
 * - `name` 图标名称，根据不同的提供商，图标名称的格式不同
 * - `=size` 图标大小，支持写为 `=widthxheight`, 例如 `=1.2emx1.2em` 表示图标宽度为 1.2em，高度为 1.2em
 *                     支持写为 `=width`, 例如 `=1.2em` 表示图标宽度和高度都为 1.2em
 * - `/color` 图标颜色，例如 `/red` 表示图标颜色为 red， `/#ff0000` 表示图标颜色为 #ff0000
 *
 * 以默认 iconify 为例：
 * ```md
 * ::tdesign:logo-github-filled:: 表示使用 tdesign collect 中的 logo-github-filled 图标
 * ::tdesign:logo-github-filled =1.2em/#fff:: 将图标宽度和高度都设置为 1.2em，颜色设置为 #fff
 * ::iconify logo-github-filled:: 显式指定使用 iconify 图标提供商
 * ```
 * 以默认 iconfont 为例：
 * ```md
 * ::github:: 表示使用 iconfont 中的 icon-github 图标
 * ::iconfont github =1.2em/#fff:: 将图标宽度和高度都设置为 1.2em，颜色设置为 #fff
 * ::iconfont github:: 显式指定使用 iconfont 图标提供商
 * ```
 * 以默认 fontawesome 为例：
 * ```md
 * ::circle-user:: 表示使用 fontawesome 中的 circle-user 图标
 * ::circle-user =1.2em/#fff:: 将图标宽度和高度都设置为 1.2em，颜色设置为 #fff
 * ::fontawesome circle-user:: 显式指定使用 fontawesome 图标提供商
 * ::fontawesome circle-user border:: 添加图标边框
 * ```
 */

import type { PluginWithOptions } from 'markdown-it'
import type { FontAwesomeOptions, IconfontOptions, IconifyOptions } from './types.js'
import { capitalize, escape, pascalCase } from '@pengzhanbo/utils'
import { stringifyAttrs } from 'vitepress-plugin-toolkit'
import { resolveIcon } from './resolveIcon.js'
import { getFontawesomeName, mergeStyles, parseSize } from './utils.js'

/**
 * Options for the icons markdown plugin.
 *
 * 图标 markdown 插件的配置选项。
 */
interface IconsMarkdownOptions {
  iconify?: IconifyOptions
  iconfont?: IconfontOptions
  fontawesome?: FontAwesomeOptions
  defaultProvider: 'iconify' | 'iconfont' | 'fontawesome'
}

/**
 * Render an inline icon token into the corresponding HTML string.
 *
 * 将行内图标 token 渲染为对应的 HTML 字符串。
 *
 * The rendered output depends on the resolved provider:
 * - `iconify` renders an auto-imported Vue component tag.
 * - `iconfont` renders a `<span>` with the iconfont class names.
 * - `fontawesome` renders a `<span>` with the FontAwesome class names.
 *
 * When the target provider is not configured, the original `::content::`
 * text is returned as a fallback.
 *
 * @param content - The raw content between the `::` delimiters / `::` 分隔符之间的原始内容
 * @param options - The resolved provider options and default provider / 已解析的提供商配置与默认提供商
 * @returns The rendered HTML string / 渲染后的 HTML 字符串
 */
export function iconRender(content: string, options: IconsMarkdownOptions): string {
  const { iconify, iconfont, fontawesome, defaultProvider } = options
  const { provider, name, size, color, extra, class: classname, ...attrs } = resolveIcon(content, defaultProvider)

  if (iconify && provider === 'iconify') {
    const component = `${capitalize(iconify.prefix || 'i')}${pascalCase(name)}`
    const classes = ['iconify']
    classname && classes.push(classname as string)
    extra && classes.push(extra)

    return `<${component} class="${classes.join(' ')}" aria-hidden${stringifyAttrs({
      color: color || iconify.color,
      ...parseSize(size || iconify.size || '1.2em'),
      ...attrs,
    })} />`
  }

  if (iconfont && provider === 'iconfont') {
    const style = mergeStyles(size || iconfont.size || '1.2em', color || iconfont.color, true)
    const classes = ['iconfont', `${iconfont.prefix || 'icon-'}${name}`]
    classname && classes.push(classname as string)
    extra && classes.push(extra)
    return `<span class="${classes.join(' ')}" aria-hidden${stringifyAttrs({ style, ...attrs })} />`
  }

  if (fontawesome && provider === 'fontawesome') {
    const style = mergeStyles(size || fontawesome.size, color || fontawesome.color)
    const classes = ['fontawesome', getFontawesomeName(name, fontawesome.prefix)]
    classname && classes.push(classname as string)
    extra && classes.push(...extra.split(' ').map(v => `fa-${v.trim()}`))

    return `<span class="${classes.join(' ')}" aria-hidden${stringifyAttrs({ style, ...attrs })} />`
  }
  // fallback to plain text
  return `<span>::${escape(content)}::</span>`
}

/**
 * markdown-it plugin that registers the inline icon syntax `::name::`.
 *
 * 注册行内图标语法 `::name::` 的 markdown-it 插件。
 *
 * The plugin adds a new inline rule that runs before the `link` rule. It scans
 * for `::...::` delimited content and produces an `icon` token rendered by
 * {@link iconRender}.
 *
 * @param md - The markdown-it instance / markdown-it 实例
 * @param options - The provider options and default provider / 提供商配置与默认提供商
 *
 * @example
 * ```ts
 * import MarkdownIt from 'markdown-it'
 * import { iconsMarkdownPlugin } from 'vitepress-plugin-icons'
 *
 * const md = new MarkdownIt()
 * md.use(iconsMarkdownPlugin, {
 *   defaultProvider: 'iconify',
 *   iconify: { provider: 'iconify' },
 * })
 * ```
 */
export const iconsMarkdownPlugin: PluginWithOptions<IconsMarkdownOptions> = (
  md,
  options = { defaultProvider: 'iconify' },
) => {
  md.inline.ruler.before('link', 'icon', (state, silent) => {
    let found = false
    const max = state.posMax
    const start = state.pos

    // ::xxx
    // ^^
    if (
      state.src.charCodeAt(start) !== 0x3A
      || state.src.charCodeAt(start + 1) !== 0x3A
    ) {
      return false
    }

    const next = state.src.charCodeAt(start + 2)

    // :: xxx  |  :::xxx
    //   ^     |    ^
    if (next === 0x20 || next === 0x3A)
      return false

    /* istanbul ignore if -- @preserve */
    if (silent)
      return false

    // ::::
    if (max - start < 5)
      return false

    state.pos = start + 2

    while (state.pos < max) {
    // ::xxx::
    //      ^^
      if (
        state.src.charCodeAt(state.pos) === 0x3A
        && state.src.charCodeAt(state.pos + 1) === 0x3A
      ) {
        found = true
        break
      }

      state.md.inline.skipToken(state)
    }

    if (
      !found
      || start + 2 === state.pos
      // ::xxx ::
      //      ^
      || state.src.charCodeAt(state.pos - 1) === 0x20
    ) {
      state.pos = start

      return false
    }

    const info = state.src.slice(start + 2, state.pos)

    // found
    state.posMax = state.pos
    state.pos = start + 2

    const icon = state.push('icon', 'i', 0)

    icon.markup = '::'
    icon.content = info

    state.pos = state.posMax + 2
    state.posMax = max

    return true
  })

  md.renderer.rules.icon = (tokens, idx) => iconRender(tokens[idx].content, options)
}
