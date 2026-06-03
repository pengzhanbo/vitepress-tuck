import type { Plugin } from 'vitepress'
import type { MermaidPluginOptions } from './types.js'
import { createLocales } from 'vitepress-plugin-toolkit'
import { builtinLocales } from './locales.js'

export function mermaidVitePlugin({ options, locales }: MermaidPluginOptions = {}): Plugin {
  const moduleId = 'virtual:vitepress-mermaid'
  const resolveId = `\0${moduleId}`
  return {
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
  }
}
