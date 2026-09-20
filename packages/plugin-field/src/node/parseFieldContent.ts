import type { LiteralUnion } from '@pengzhanbo/utils'
/**
 * Parsed result from a `::: field` container block.
 *
 * 字段对象 — 解析自 `::: field` 容器块的结构化结果
 */
export interface FieldObject {
  /**
   * Field name — defaults to `info`, overridable via `@name`
   *
   * 字段名称 — 默认从 `info` 中获取，可通过 `@name` 覆盖
   */
  name: string
  /**
   * `@type` value, undefined if not set
   *
   * 类型注解 — 如果未设置则为 `undefined`
   */
  type?: string

  /**
   * `@typeLink` value
   *
   * 类型引用链接
   */
  typelink?: string
  /**
   * `@default` value, preserved as-is
   *
   * 默认值 — 保持原样
   */
  default?: string
  /**
   * Whether `@required` is present
   *
   * 是否为必填项
   */
  required?: boolean
  /**
   * Whether `@deprecated` is present, or a version/date string describing when it was deprecated
   *
   * 是否为已弃用项；也可以为描述弃用版本或日期的字符串
   */
  deprecated?: boolean | string
  /**
   * Whether `@experimental` is present, or a version/date string describing when it was introduced
   *
   * 是否为实验性项；也可以为描述实验版本或日期的字符串
   */
  experimental?: boolean | string
  /**
   * Description text, may span multiple lines joined by `\n`
   *
   * 描述文本 — 可跨多行，以 `\n` 连接
   */
  description?: string
  /**
   * `@enum` candidate values, appended across lines, quotes preserved
   *
   * `@enum` 候选值 — 多个 `@enum` 行追加，保留引号
   */
  enum?: string[]

  /**
   * `@unit` value
   *
   * 单位注解
   */
  unit?: string

  /**
   * `@format` value
   *
   * 格式注解
   */
  format?: string

  /**
   * `@constraint` value
   *
   * 约束注解
   */
  constraint?: string
  /**
   * Value of the first `@since`, undefined if absent
   *
   * 首个 `@since` 的值 — 未设置则为 `undefined`
   */
  since?: string
}

/**
 * Tags that carry structured meaning; everything else is description text.
 *
 * 携带结构化含义的标签；其他内容均视为描述文本。
 */
const KNOWN_TAGS = new Set<LiteralUnion<keyof FieldObject>>([
  'name',
  'type',
  'typelink',
  'default',
  'required',
  'deprecated',
  'experimental',
  'description',
  'enum',
  'unit',
  'format',
  'constraint',
  'since',
])

const BACKTICK_RE = /^`|`$/g

/**
 * Parse the body of a `::: field` container into a structured `FieldObject`.
 *
 * Supports a JSDoc-style tag syntax:
 * - `@name` — override the field name (derived from `info` by default)
 * - `@type` — type annotation
 * - `@typeLink` — type reference link
 * - `@default` — default value
 * - `@required` — mark as required (boolean flag)
 * - `@deprecated` — mark as deprecated (boolean flag), or provide the version/date of deprecation
 * - `@experimental` — mark as experimental (boolean flag), or provide the version/date when it was introduced
 * - `@description` — explicit description; any non-tag line also feeds into description
 * - `@enum` — candidate values split by `|`, appended across lines, quotes preserved
 * - `@since` — version/date string, only the first occurrence is kept
 * - `@unit` — unit annotation
 * - `@format` — format annotation
 * - `@constraint` — constraint annotation
 *
 * Unknown `@`-prefixed tags are treated as description text.
 * Empty lines are ignored and never interrupt a description paragraph.
 *
 * 将 `::: field` 容器的正文解析为结构化的 `FieldObject`。
 *
 * 支持类 JSDoc 的标签语法：
 * - `@name` — 覆盖字段名称（默认从 `info` 派生）
 * - `@type` — 类型注解
 * - `@typeLink` — 类型引用链接
 * - `@default` — 默认值
 * - `@required` — 标记为必需（布尔标志）
 * - `@deprecated` — 标记为已弃用（布尔标志），或提供弃用版本/日期
 * - `@experimental` — 标记为实验性（布尔标志），或提供引入的版本/日期
 * - `@description` — 显式描述；任何非标签行也会被纳入描述
 * - `@enum` — 候选值，以 `|` 分隔，多个 `@enum` 行追加，保留引号
 * - `@since` — 版本/日期字符串，只保留第一个出现的值
 * - `@unit` — 单位注解
 * - `@format` — 格式注解
 * - `@constraint` — 约束注解
 *
 * 未知的以 `@` 开头的标签将被视为描述文本。
 * 空行会被忽略，且不会中断描述段落。
 *
 * @param content Raw text inside the `:::` container
 * @param info    Text after `::: field` on the opening line (the field name)
 */
export function parseFieldContent(content: string, info: string): FieldObject {
  const lines = content.split('\n')

  const result: FieldObject = {
    name: info.trim(),
    description: '',
  }

  /** Accumulates the current description paragraph. / 累积当前描述段落。 */
  let currentDesc = ''
  /** Completed description segments, joined with `\n` at the end. / 已完成的描述片段，最后以 `\n` 连接。 */
  const descriptions: string[] = []

  /**
   * Flushes the accumulated description paragraph into the `descriptions` array.
   *
   * 将已累积的描述段落刷新到 `descriptions` 数组中。
   */
  function flushDesc(): void {
    if (currentDesc) {
      descriptions.push(currentDesc)
      currentDesc = ''
    }
  }

  for (let cur = 0; cur < lines.length; cur++) {
    const rawLine = lines[cur]
    const line = rawLine.trim()

    if (line.startsWith('@')) {
      // Extract the first word as the tag name, the remainder as the value.
      const spaceIdx = line.indexOf(' ')
      let tag: string
      let rest: string

      if (spaceIdx === -1) {
        tag = line.slice(1).toLowerCase() // strip leading '@'
        rest = ''
      }
      else {
        tag = line.slice(1, spaceIdx).toLowerCase()
        // Remove exactly one leading space after the tag name.
        rest = line.slice(spaceIdx + 1).trim()
      }

      // `@optional` 已废弃，不被解析
      if (tag === 'optional') {
        continue
      }

      if (KNOWN_TAGS.has(tag)) {
        // A known tag ends the current description paragraph.
        flushDesc()

        switch (tag) {
          case 'name':
          case 'type':
          case 'typelink':
          case 'default':
          case 'unit':
          case 'format':
          case 'constraint':
            rest && (result[tag] = rest.replace(BACKTICK_RE, '')) // remove backticks
            break
          case 'required':
            result[tag] = true
            break
          case 'deprecated':
          case 'experimental':
            // bare tag → boolean flag; tag with value → version/date string
            result[tag] = rest ? rest.replace(BACKTICK_RE, '') : true
            break
          case 'description':
            currentDesc = rest
            break
          case 'enum':
            if (rest) {
              const items = rest.split('|').map(v => v.trim())
              const target = (result.enum ??= [])
              target.push(...items)
            }
            break
          case 'since':
            if (rest && !result.since) {
              result.since = rest.replace(BACKTICK_RE, '')
            }
            break
        }
      }
      else {
        // Unknown @-tag — the entire line (including '@') is description text.
        if (currentDesc)
          currentDesc += '\n'
        currentDesc += line
      }
    }
    else {
      // Plain text line — append to the current description paragraph.
      if (currentDesc)
        currentDesc += '\n'
      currentDesc += line
    }
  }

  // Flush any remaining description after the last line.
  flushDesc()

  result.description = descriptions.join('\n')

  return result
}
