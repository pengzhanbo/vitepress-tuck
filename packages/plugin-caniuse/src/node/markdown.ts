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
 * markdown-it plugin that registers the `@caniuse` embed block rule.
 *
 * markdown-it 插件，注册 `@caniuse` 嵌入块规则。
 *
 * Supported syntaxes:
 * - `@[caniuse](feature_name)` — default embed view
 * - `@[caniuse embed{-2,4}](feature_name)` — embed with version range
 * - `@[caniuse baseline](feature_name)` — baseline view
 *
 * 支持的语法：
 * - `@[caniuse](feature_name)` — 默认嵌入视图
 * - `@[caniuse embed{-2,4}](feature_name)` — 带版本范围的嵌入
 * - `@[caniuse baseline](feature_name)` — Baseline 视图
 *
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

/**
 * Parses a version range string into past and future browser version offsets.
 *
 * 将版本范围字符串解析为过去和未来的浏览器版本偏移量。
 *
 * The input uses comma-separated numbers where negative values represent past
 * versions and positive values represent future versions. The value `0` is
 * always included as the anchor. Values outside the range `[-5, 3]` are ignored.
 *
 * 输入使用逗号分隔的数字，负值表示过去版本，正值表示未来版本。
 * 值 `0` 始终作为锚点包含在内。超出 `[-5, 3]` 范围的值会被忽略。
 *
 * @param versions - Comma-separated version offsets (e.g. `-2,4`) / 逗号分隔的版本偏移量（例如 `-2,4`）
 * @returns An object containing the past and future version offsets / 包含过去和未来版本偏移量的对象
 *
 * @example
 * // Default values when no range is provided
 * resolveVersions('') // { past: 5, future: 3 }
 *
 * // Custom range
 * resolveVersions('-2,4') // { past: 2, future: 4 }
 */
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
