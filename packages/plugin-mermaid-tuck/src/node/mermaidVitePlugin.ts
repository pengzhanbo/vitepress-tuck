import type { Plugin } from 'vitepress'
import type { MermaidPluginOptions } from './types.js'
import { createLocales, iconPlugin } from 'vitepress-plugin-toolkit'
import { builtinLocales } from './locales.js'

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
