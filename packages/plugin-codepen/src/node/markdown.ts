/**
 * @[codepen](user/slash)
 * @[codepen preview](user/slash)
 * @[codepen preview editable title="" height="400px" tab="css,result" theme="dark"](user/slash)
 */

import type { PluginSimple } from 'markdown-it'
import type { CodepenData } from './types.js'
import { createEmbedRuleBlock, parseRect, resolveAttrs, stringifyAttrs } from 'vitepress-plugin-toolkit'

/**
 * markdown-it plugin that registers the `@codepen` embed block rule.
 *
 * markdown-it 插件，注册 `@codepen` 嵌入块规则。
 *
 * Supported syntaxes:
 * - `@[codepen](user/slash)` — default embed view / 默认嵌入视图
 * - `@[codepen preview](user/slash)` — preview embed view / 预览嵌入视图
 * - `@[codepen preview editable title="" height="400px" tab="css,result" theme="dark"](user/slash)`
 *   — fully customized embed / 完全自定义的嵌入
 *
 * 支持的语法：
 * - `@[codepen](user/slash)` — 默认嵌入视图
 * - `@[codepen preview](user/slash)` — 预览嵌入视图
 * - `@[codepen preview editable title="" height="400px" tab="css,result" theme="dark"](user/slash)`
 *   — 完全自定义的嵌入
 *
 * @example
 * `.vitepress/config.ts`
 * ```ts
 * import { codepenMarkdownPlugin } from 'vitepress-plugin-codepen'
 * import { defineConfig } from 'vitepress'
 * export default defineConfig({
 *   markdown: {
 *     config: (md) => {
 *       md.use(codepenMarkdownPlugin)
 *     },
 *   },
 * })
 * ```
 */
export const codepenMarkdownPlugin: PluginSimple = (md) => {
  createEmbedRuleBlock<CodepenData>(md, {
    type: 'codepen',
    meta: (info, source) => {
      const { width, height, title, tab, ...rest } = resolveAttrs<CodepenData>(info)
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
