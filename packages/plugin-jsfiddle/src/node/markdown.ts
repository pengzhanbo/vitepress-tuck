/**
 * @[jsfiddle](user/id)
 * @[jsfiddle theme="dark" tab="js,css,html,result"](user/id)
 */

import type { PluginSimple } from 'markdown-it'
import type { JSFiddleData } from './types.js'
import { createEmbedRuleBlock, parseRect, resolveAttrs, stringifyAttrs } from 'vitepress-plugin-toolkit'

/**
 * markdown-it plugin that registers the `@[jsfiddle](user/id)` embed block rule.
 *
 * markdown-it 插件，注册 `@[jsfiddle](user/id)` 嵌入块规则。
 *
 * Supported syntaxes:
 * - `@[jsfiddle](user/id)` — default embed view
 * - `@[jsfiddle theme="dark" tab="js,css,html,result"](user/id)` —
 *   embed with custom theme and tabs
 *
 * 支持的语法：
 * - `@[jsfiddle](user/id)` — 默认嵌入视图
 * - `@[jsfiddle theme="dark" tab="js,css,html,result"](user/id)` —
 *   自定义主题和选项卡的嵌入
 *
 * @example
 * `.vitepress/config.ts`
 * ```ts
 * import { defineConfig } from 'vitepress'
 * import { jsfiddleMarkdownPlugin } from 'vitepress-plugin-jsfiddle'
 * export default defineConfig({
 *   markdown: {
 *     config: (md) => {
 *       md.use(jsfiddleMarkdownPlugin)
 *     },
 *   },
 * })
 * ```
 */
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
