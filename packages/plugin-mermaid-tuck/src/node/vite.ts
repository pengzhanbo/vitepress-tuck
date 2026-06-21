import type { Plugin } from 'vitepress'
import type { MermaidPluginOptions } from './types.js'
import { createLocales, iconPlugin } from 'vitepress-plugin-toolkit'
import { builtinLocales } from './locales.js'

/**
 * Creates the Vite plugins required by the mermaid-tuck plugin.
 *
 * 创建 mermaid-tuck 插件所需的 Vite 插件集合。
 *
 * The returned plugins perform two tasks:
 * 1. Register SVG icons (download, fullscreen, zoom controls) via the toolkit
 *    `iconPlugin` so they are available as CSS background images.
 * 2. Provide a virtual module `virtual:vitepress-mermaid` that exposes the
 *    user-supplied mermaid options and resolved locale map to the client.
 *
 * 返回的插件承担两项职责：
 * 1. 通过 toolkit 的 `iconPlugin` 注册 SVG 图标（下载、全屏、缩放控件），
 *    使其可作为 CSS 背景图使用。
 * 2. 提供虚拟模块 `virtual:vitepress-mermaid`，将用户配置的 mermaid 选项
 *    与解析后的语言映射暴露给客户端。
 *
 * @returns Array of Vite plugins / Vite 插件数组
 * @example
 * ```ts
 * import { mermaidVitePlugin } from 'vitepress-plugin-mermaid-tuck/node'
 * vite: { plugins: [...mermaidVitePlugin({ options: { theme: 'dark' } })] }
 * ```
 */
export function mermaidVitePlugin({ options, locales }: MermaidPluginOptions = {}): Plugin[] {
  const moduleId = 'virtual:vitepress-mermaid'
  const resolveId = `\0${moduleId}`
  return [
    iconPlugin([{
      name: 'download',
      svg: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-6 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z'/%3E%3C/svg%3E")`,
    }, {
      name: 'fullscreen',
      svg: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M3 21v-5h2v3h3v2zm13 0v-2h3v-3h2v5zM3 8V3h5v2H5v3zm16 0V5h-3V3h5v5z'/%3E%3C/svg%3E")`,
    }, {
      name: 'zoom-in',
      svg: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Ccircle cx='11' cy='11' r='8'/%3E%3Cpath d='m21 21l-4.35-4.35M11 8v6m-3-3h6'/%3E%3C/g%3E%3C/svg%3E")`,
    }, {
      name: 'zoom-out',
      svg: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Ccircle cx='11' cy='11' r='8'/%3E%3Cpath d='m21 21l-4.35-4.35M8 11h6'/%3E%3C/g%3E%3C/svg%3E")`,
    }, {
      name: 'zoom-reset',
      svg: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Cpath d='M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2'/%3E%3Crect width='10' height='8' x='7' y='8' rx='1'/%3E%3C/g%3E%3C/svg%3E")`,
    }]),
    {
      name: 'vitepress:mermaid',
      resolveId(id) {
        if (id === moduleId)
          return resolveId
      },
      load(id) {
        if (id === resolveId) {
          return `export const defaultOptions = ${!options ? '{}' : JSON.stringify(options)}
export const locales = ${JSON.stringify(createLocales(builtinLocales, locales))}
`
        }
      },
    },
  ]
}
