/**
 * @[caniuse embed{-2,4}](feature_name)
 * @[caniuse baseline](feature_name)
 */

import type { PluginSimple } from 'markdown-it'
import type { CanIUseData, CanIUseMode } from './types.js'
import { createEmbedRuleBlock, stringifyAttrs } from 'vitepress-plugin-toolkit'

const UNDERLINE_RE = /_+/g
let uuid = 0

/**
 * @example
 * `.vitepress/config.ts`
 * ```ts
 * import { definePlugin } from 'vitepress'
 * import { caniuseMarkdownPlugin } from 'vitepress-plugin-caniuse'
 * export default defineConfig({
 *   markdown: {
 *     config: (md) => {
 *       md.use(caniuseMarkdownPlugin)
 *     },
 *   },
 * })
 * ```
 */
export const caniuseMarkdownPlugin: PluginSimple = (md): void => {
  createEmbedRuleBlock<CanIUseData>(md, {
    type: 'caniuse',
    meta: (info, source) => {
      const [mode, versions = ''] = info.split('{')
      return {
        feature: source,
        mode: (mode.trim() as CanIUseMode) || 'embed',
        versions: versions.replace('}', ''),
      }
    },
    content: ({ feature, mode, versions }) => {
      if (!feature)
        return ''

      feature = feature.replace(UNDERLINE_RE, '_')
      const { past, future } = resolveVersions(versions)
      const meta = `${feature}-${uuid++}`

      return `<VPCaniuse${stringifyAttrs({ feature, meta, past, future, baseline: mode === 'baseline' })} />`
    },
  })
}

function resolveVersions(versions: string): { past: number, future: number } {
  if (!versions)
    return { past: 5, future: 3 }

  const list = versions
    .split(',')
    .map(v => Number(v.trim()))
    .filter(v => !Number.isNaN(v) && v >= -5 && v <= 3)

  list.push(0)

  const uniq = [...new Set(list)].sort((a, b) => b - a)
  return {
    future: uniq[0]!,
    past: Math.abs(uniq[uniq.length - 1]!),
  }
}
