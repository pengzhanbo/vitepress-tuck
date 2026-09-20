import type { Plugin } from 'vitepress'
import type { FieldPluginOptions } from './types.js'
import { createLocales } from 'vitepress-plugin-toolkit'
import { locales } from './locales.js'

export function fieldVitePlugin(options: FieldPluginOptions = {}): Plugin {
  const moduleId = 'virtual:vitepress-field'
  const resolveId = `\0${moduleId}`

  return {
    name: 'vitepress:field',
    resolveId(id) {
      if (id === moduleId)
        return resolveId
    },
    load(id) {
      if (id === resolveId)
        return `export const locales = ${JSON.stringify(createLocales(locales, options.locales))}`
    },
  }
}
