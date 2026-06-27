import type { PluginSimple } from 'markdown-it'
import type { MarkdownEnv } from 'vitepress'
import { isUndefined } from '@pengzhanbo/utils'
import { createContainerPlugin, createContainerSyntaxPlugin, stringifyAttrs } from 'vitepress-plugin-toolkit'
import { parseFieldContent } from './parseFieldContent.js'

/**
 * markdown-it plugin that registers `::: field` and `::: field-group` containers.
 *
 * Registers two container syntaxes:
 * - `::: field-group` — wraps a group of fields in a `<div class="vp-field-group">`
 * - `::: field` — parses the container body via `parseFieldContent` and renders
 *   a `<VPField>` Vue component with the extracted props
 *
 * markdown-it 插件，注册 `::: field` 和 `::: field-group` 容器。
 *
 * 注册两种容器语法：
 * - `::: field-group` — 将一组字段包裹在 `<div class="vp-field-group">` 中
 * - `::: field` — 通过 `parseFieldContent` 解析容器正文，并渲染带有提取属性的
 *   `<VPField>` Vue 组件
 *
 * @param md - The markdown-it instance to extend / 要扩展的 markdown-it 实例
 * @example
 * ```ts
 * import MarkdownIt from 'markdown-it'
 * import { fieldMarkdownPlugin } from 'vitepress-plugin-field/node'
 *
 * const md = new MarkdownIt()
 * md.use(fieldMarkdownPlugin)
 * ```
 */
export const fieldMarkdownPlugin: PluginSimple = (md) => {
  createContainerPlugin(md, 'field-group', {
    before: () => '<div class="vp-field-group">',
  })

  createContainerSyntaxPlugin(md, 'field', (tokens, idx, _, env: MarkdownEnv) => {
    const { info, content } = tokens[idx]
    const { description, type, default: defaultValue, ...props } = parseFieldContent(content, info)
    return `<VPField${stringifyAttrs(props)}${
      isUndefined(type) ? '' : ` type="${md.utils.escapeHtml(type)}"`
    }${
      isUndefined(defaultValue) ? '' : ` default-value="${md.utils.escapeHtml(defaultValue)}"`
    }>${description ? md.render(description, env) : ''}</VPField>`
  })
}
