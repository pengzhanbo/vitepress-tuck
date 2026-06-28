/**
 * Collapse container plugin
 *
 * 折叠面板容器插件
 *
 * Syntax:
 * ```md
 * ::: collapse accordion
 * - + 标题
 *   内容
 * - - 标题
 *   内容
 * :::
 * ```
 *
 * @module markdown
 */

import type { PluginSimple } from 'markdown-it'
import type Token from 'markdown-it/lib/token.mjs'
import { createContainerPlugin, resolveAttrs, stringifyAttrs } from 'vitepress-plugin-toolkit'

/**
 * Collapse metadata, parsed from the `::: collapse` container info string.
 *
 * 折叠面板元数据，从 `::: collapse` 容器的信息字符串中解析得到。
 *
 * Can be set via the container info string, for example:
 * `::: collapse accordion card expand`
 *
 * 可通过容器信息字符串设置，例如：
 * `::: collapse accordion card expand`
 */
interface CollapseData {
  /**
   * Whether to enable accordion mode. In accordion mode, only one item can be
   * expanded at a time; expanding one item collapses all others.
   *
   * 是否启用手风琴模式。手风琴模式下同时只能展开一项，展开新项会自动收起其他项。
   */
  accordion?: boolean

  /**
   * Whether all items are expanded by default. In accordion mode, this expands
   * the first item when no explicit `:+` flag is present.
   *
   * 是否默认展开全部项。手风琴模式下，当没有显式的 `:+` 标记时，该项会展开第一项。
   */
  expand?: boolean

  /**
   * Whether to render with a card style (bordered and rounded container).
   *
   * 是否显示卡片样式（带边框和圆角的容器）。
   */
  card?: boolean
}

/**
 * Collapse item metadata, attached to each `collapse_item_open` token.
 *
 * 折叠面板项元数据，附加在每个 `collapse_item_open` 令牌上。
 */
interface CollapseItemData {
  /**
   * Whether the current item is expanded.
   *
   * 是否展开当前项。
   */
  expand?: boolean

  /**
   * Zero-based index of the current item within the collapse container.
   *
   * 当前项在折叠面板容器中的索引（从 0 开始）。
   */
  index?: number
}

/**
 * Collapse plugin - Enable collapse container in markdown-it.
 *
 * 折叠面板插件 - 在 markdown-it 中启用折叠面板容器。
 *
 * Registers the `::: collapse` container and custom renderer rules for
 * `collapse_item_*` tokens. The container is converted into a `<VPCollapse>`
 * Vue component, and each list item is converted into a `<VPCollapseItem>`.
 *
 * 注册 `::: collapse` 容器以及 `collapse_item_*` 令牌的自定义渲染规则。
 * 容器会被转换为 `<VPCollapse>` Vue 组件，每个列表项会被转换为 `<VPCollapseItem>`。
 *
 * @param md - Markdown instance / Markdown 实例
 * @example
 * ```ts
 * import MarkdownIt from 'markdown-it'
 * import { collapseMarkdownPlugin } from 'vitepress-plugin-collapse'
 *
 * const md = new MarkdownIt()
 * md.use(collapseMarkdownPlugin)
 * ```
 */
export const collapseMarkdownPlugin: PluginSimple = (md): void => {
  createContainerPlugin(md, 'collapse', {
    before: (info, tokens, index) => {
      const attrs = resolveAttrs<CollapseData>(info)
      const idx = parseCollapse(tokens, index, attrs)
      const { accordion, card } = attrs

      return `<VPCollapse${stringifyAttrs({ accordion, card, index: idx })}>`
    },
    after: () => `</VPCollapse>`,
  })
  // Render collapse_item_open token as <VPCollapseItem> opening tag with
  // expand and index attributes.
  // 将 collapse_item_open 令牌渲染为带 expand 和 index 属性的 <VPCollapseItem> 起始标签。
  md.renderer.rules.collapse_item_open = (tokens, idx) => {
    const token = tokens[idx]
    const { expand, index } = token.meta as CollapseItemData
    return `<VPCollapseItem${stringifyAttrs({ expand, index })}>`
  }
  md.renderer.rules.collapse_item_close = () => '</VPCollapseItem>'
  // Wrap the item title with a `#title` slot so it is projected into the
  // header area of <VPCollapseItem>.
  // 使用 `#title` 插槽包裹标题，使标题投射到 <VPCollapseItem> 的头部区域。
  md.renderer.rules.collapse_item_title_open = () => '<template #title>'
  md.renderer.rules.collapse_item_title_close = () => '</template>'
}

/**
 * Parse collapse tokens and transform list items into collapse items.
 *
 * 解析折叠面板令牌，并将列表项转换为折叠面板项。
 *
 * Walks the token stream starting after the `container_collapse_open` token,
 * hides the wrapping list tokens, and rewrites root-level list item tokens
 * into `collapse_item_*` tokens. Each title's leading `:+` or `:-` flag is
 * stripped and used to determine the item's expand state:
 *  - `:+` expands the item (in accordion mode, only the first one wins).
 *  - `:-` collapses the item.
 *  - No flag falls back to the container's `expand` attribute.
 *
 * 从 `container_collapse_open` 令牌之后开始遍历令牌流，隐藏外层列表令牌，
 * 并将根级列表项令牌重写为 `collapse_item_*` 令牌。每个标题前缀的 `:+` 或 `:-`
 * 标记会被移除，用于决定该项的展开状态：
 *  - `:+` 展开该项（手风琴模式下仅第一个生效）。
 *  - `:-` 收起该项。
 *  - 无标记时回退到容器的 `expand` 属性。
 *
 * @param tokens - Token array / 令牌数组
 * @param index - Start index (the `container_collapse_open` token) / 起始索引（`container_collapse_open` 令牌）
 * @param attrs - Collapse metadata parsed from container info / 从容器信息解析得到的折叠面板元数据
 * @returns Default expanded index for accordion mode, or undefined / 手风琴模式下默认展开项的索引，无则返回 undefined
 */
function parseCollapse(tokens: Token[], index: number, attrs: CollapseData): number | void {
  const listStack: number[] = [] // Track list nesting depth / 跟踪列表嵌套深度
  let idx = -1 // Current list item index / 当前列表项索引
  let defaultIndex: number | undefined
  let hashExpand = false
  for (let i = index + 1; i < tokens.length; i++) {
    const token = tokens[i]
    if (token.type === 'container_collapse_close') {
      break
    }
    // Track list level
    if (token.type === 'bullet_list_open' || token.type === 'ordered_list_open') {
      listStack.push(0) // Each new list starts at level 0
      if (listStack.length === 1)
        token.hidden = true
    }
    else if (token.type === 'bullet_list_close' || token.type === 'ordered_list_close') {
      listStack.pop()
      if (listStack.length === 0)
        token.hidden = true
    }
    else if (token.type === 'list_item_open') {
      const currentLevel = listStack.length
      // Only process root level list items (level 1)
      if (currentLevel === 1) {
        token.type = 'collapse_item_open'
        tokens[i + 1].type = 'collapse_item_title_open'
        tokens[i + 3].type = 'collapse_item_title_close'

        idx++

        const inlineToken = tokens[i + 2]
        const firstToken = inlineToken.children?.[0]
        let flag: string = ''
        let expand: boolean | undefined
        if (firstToken?.type === 'text') {
          firstToken.content = firstToken.content.trim().replace(/^:[+\-]\s*/, (match) => {
            flag = match.trim()
            return ''
          })
        }
        if (attrs.accordion) {
          if (!hashExpand && flag === ':+') {
            expand = hashExpand = true
            defaultIndex = idx
          }
        }
        else if (flag === ':+') {
          expand = true
        }
        else if (flag === ':-') {
          expand = false
        }
        else {
          expand = !!attrs.expand
        }

        token.meta = {
          index: idx,
          expand,
        } as CollapseItemData
      }
    }
    else if (token.type === 'list_item_close') {
      const currentLevel = listStack.length
      if (currentLevel === 1) {
        token.type = 'collapse_item_close'
      }
    }
  }
  // In accordion mode with `expand` set but no explicit `:+` flag, fall back
  // to expanding the first item.
  // 手风琴模式下设置了 `expand` 但未显式标记 `:+` 时，回退为展开第一项。
  if (attrs.accordion && attrs.expand && !hashExpand) {
    defaultIndex = 0
  }
  return defaultIndex
}
