import type { PluginSimple } from 'markdown-it'
import type { MarkdownEnv } from 'vitepress'
import { isString, isUndefined } from '@pengzhanbo/utils'
import { createContainerPlugin, createContainerSyntaxPlugin, slugify, stringifyAttrs } from 'vitepress-plugin-toolkit'
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
    const parsed = parseFieldContent(content, info)
    const props = {
      name: parsed.name,
      type: encodeData(parsed.type),
      typeLink: parsed.typelink,
      required: parsed.required,
      deprecated: isString(parsed.deprecated) ? encodeData(parsed.deprecated) : parsed.deprecated,
      experimental: isString(parsed.experimental) ? encodeData(parsed.experimental) : parsed.experimental,
      defaultValue: encodeData(parsed.default),
      slug: createSlug(parsed.name, env),
      since: encodeData(parsed.since),
      unit: encodeData(parsed.unit),
      format: encodeData(parsed.format),
      constraint: encodeData(parsed.constraint),
    }
    // 可选值
    const enums = parsed.enum?.length
      ? `<template #enum>${parsed.enum
        .map(item => `<span>${md.utils.escapeHtml(item)}</span>`)
        .join('')}</template>`
      : ''
    const description = parsed.description ? md.render(parsed.description, env) : ''
    return `<VPField${stringifyAttrs(props)}>\n${enums}\n${description}\n</VPField>\n`
  })
}

/**
 * Create a unique slug for a field.
 *
 * To avoid anchor link conflicts caused by duplicate slugs when the same field name exists
 * on the same page, add a count to the slug for duplicate field names.
 *
 * 创建一个唯一的字段 slug。
 *
 * 避免同一个页面存在相同的 field name 时，slug 重复导致锚点链接冲突，
 * 对于重复的 field name，在 slug 中添加计数。
 *
 * @param name - The name of the field
 * @param env - The markdown-it environment
 * @returns A unique slug for the field
 */
function createSlug(name: string, env: MarkdownEnv & { __FIELD_SLUG__?: Record<string, number> }) {
  const cache = env.__FIELD_SLUG__ ??= {}
  const slug = slugify(`field-${name}`)
  const count = cache[slug] || 0
  cache[slug] = count + 1
  return `${slug}${count > 0 ? `-${count}` : ''}`
}

function encodeData(data?: string) {
  return !isUndefined(data) ? encodeURIComponent(data) : undefined
}
