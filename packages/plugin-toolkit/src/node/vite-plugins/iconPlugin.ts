import type { Plugin } from 'vitepress'
import { omit } from '@pengzhanbo/utils'

/**
 * Represents an SVG icon definition with optional classname.
 *
 * 表示一个 SVG 图标定义，包含可选的类名。
 */
interface Icon {
  /**
   * Icon name used as the CSS class identifier.
   *
   * 用作 CSS 类标识的图标名称。
   */
  name: string
  /**
   * SVG content for the icon.
   *
   * 图标的 SVG 内容。
   */
  svg: string
  /**
   * Optional classname override for the icon.
   *
   * 图标的可选类名覆盖。
   */
  classname?: string
}

/**
 * Resolved icon with a set of classnames collected from registrations.
 *
 * 解析后的图标，包含从注册中收集的类名集合。
 */
type ResolvedIcon = Omit<Icon, 'classname'> & { classname: Set<string> }

/**
 * Vite plugin name for the icons virtual module.
 *
 * 图标虚拟模块的 Vite 插件名称。
 */
const name = 'vitepress:tuck-icons'

/**
 * Global list of resolved icons accumulated across plugin invocations.
 *
 * 跨插件调用累积的全局已解析图标列表。
 */
const iconList: ResolvedIcon[] = []

/**
 * Whether the virtual module is currently being processed.
 *
 * 虚拟模块是否正在处理中。
 */
let isProcessing = false

/**
 * Create a Vite plugin that registers SVG icons as CSS custom properties.
 *
 * 创建一个 Vite 插件，将 SVG 图标注册为 CSS 自定义属性。
 *
 * The plugin collects icons into a global list and exposes them through a
 * virtual module `virtual:tuck-icons.css`. Each icon is rendered as a CSS
 * rule that sets the `--icon` custom property on `.vpi-<name>` selectors.
 *
 * 该插件将图标收集到全局列表中，并通过虚拟模块 `virtual:tuck-icons.css`
 * 暴露它们。每个图标被渲染为一条 CSS 规则，在 `.vpi-<name>` 选择器上
 * 设置 `--icon` 自定义属性。
 *
 * @param icons - Array of icon definitions to register / 要注册的图标定义数组
 * @returns A Vite plugin instance / Vite 插件实例
 * @example
 * ```ts
 * import { iconPlugin } from 'vitepress-plugin-toolkit/node'
 * icons: iconPlugin([
 *   { name: 'github', svg: '<svg>...</svg>' },
 *   { name: 'twitter', svg: '<svg>...</svg>' },
 * ])
 * ```
 */
function iconPlugin(icons: Icon[]): Plugin {
  for (const icon of icons) {
    const index = iconList.findIndex(item => item.name === icon.name)
    if (index === -1) {
      iconList.push({ ...omit(icon, ['classname']), classname: new Set([icon.classname || icon.name]) })
    }
    else {
      icon.classname && iconList[index].classname.add(icon.classname)
    }
  }

  const moduleId = 'virtual:tuck-icons.css'
  const resolveId = `\0${moduleId}`
  return {
    name,
    enforce: 'post',

    resolveId(id) {
      if (id === moduleId) {
        isProcessing = true
        return resolveId
      }
    },
    load(id) {
      if (id !== resolveId)
        return null

      if (!isProcessing)
        return null

      let css = ''
      for (const icon of iconList) {
        const classname = Array.from(icon.classname)
          .map(name => `.vpi-${name}`)
          .join(',')
        css += `${classname} { --icon: ${icon.svg}; }\n`
      }
      isProcessing = false
      return css
    },
  }
}

export { iconPlugin }
