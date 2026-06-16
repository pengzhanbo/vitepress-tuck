/**
 * @[jsfiddle](user/id)
 * @[jsfiddle theme="dark" tab="js,css,html,result"](user/id)
 */

import type { PluginSimple } from 'markdown-it'
import type { JSFiddleData } from './types.js'
import { createEmbedRuleBlock, parseRect, resolveAttrs, stringifyAttrs } from 'vitepress-plugin-toolkit'

export const jsfiddleMarkdownPlugin: PluginSimple = (md) => {
  createEmbedRuleBlock<JSFiddleData>(md, {
    type: 'jsfiddle',
    meta(info, source) {
      const { width, height, title, tab, theme } = resolveAttrs<JSFiddleData>(info)

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
