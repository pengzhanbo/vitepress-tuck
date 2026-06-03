/**
 * @[codepen](user/slash)
 * @[codepen preview](user/slash)
 * @[codepen preview editable title="" height="400px" tab="css,result" theme="dark"](user/slash)
 */

import type { PluginSimple } from 'markdown-it'
import type { CodepenTokenMeta } from './types.js'
import { createEmbedRuleBlock, parseRect, resolveAttrs, stringifyAttrs } from 'vitepress-plugin-toolkit'

export const codepenPlugin: PluginSimple = (md) => {
  createEmbedRuleBlock<CodepenTokenMeta>(md, {
    type: 'codepen',
    syntaxPattern: /^@\[codepen([^\]]*)\]\(([^)]*)\)/,
    meta: ([, info, source]) => {
      const { width, height, title, tab, ...rest } = resolveAttrs<CodepenTokenMeta>(info)
      const [user, slash] = source.split('/')

      return {
        title: title || 'Code Pen',
        tab: tab || 'result',
        width: width ? parseRect(width) : '100%',
        height: height ? parseRect(height) : '400px',
        user,
        slash,
        ...rest,
      }
    },
    content: meta => `<VPCodepen${stringifyAttrs(meta)} />`,
  })
}
