/**
 * @[jsfiddle](user/id)
 * @[jsfiddle theme="dark" tab="js,css,html,result"](user/id)
 */

import type { PluginSimple } from 'markdown-it'
import type { JSFiddleTokenMeta } from './types.js'
import { createEmbedRuleBlock, parseRect, resolveAttrs, stringifyAttrs } from 'vitepress-plugin-toolkit'

export const jsfiddlePlugin: PluginSimple = (md) => {
  createEmbedRuleBlock<JSFiddleTokenMeta>(md, {
    type: 'jsfiddle',
    syntaxPattern: /^@\[jsfiddle([^\]]*)\]\(([^)]*)\)/,
    meta([, info, source]) {
      const { width, height, title, tab, theme } = resolveAttrs<JSFiddleTokenMeta>(info)

      return {
        width: width ? parseRect(width) : '100%',
        height: height ? parseRect(height) : '400px',
        source,
        title: title || 'JS Fiddle',
        tab: tab?.replace(/\s+/g, '') || 'js,css,html,result',
        theme,
      }
    },
    content: meta => `<VPJsfiddle${stringifyAttrs(meta)} />`,
  })
}
