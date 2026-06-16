import type MarkdownIt from 'markdown-it'
import type { RuleOptions } from 'markdown-it/lib/ruler.mjs'
import type Token from 'markdown-it/lib/token.mjs'
import type { MarkdownEnv } from 'vitepress'

/**
 * Embed rule block options
 *
 * 嵌入规则块选项
 *
 * @typeParam Meta - Metadata type / 元数据类型
 */
export interface EmbedRuleBlockOptions<Meta extends Record<string, any>> {
  /**
   * Embed type syntax: @[type]()
   *
   * 嵌入类型语法：@[type]()
   */
  type: string
  /**
   * Token name
   *
   * 令牌名称
   */
  name?: string
  /**
   * Name of the rule to insert before
   *
   * 要插入在其前面的规则名称
   */
  beforeName?: string
  /**
   * Rule options
   *
   * 规则选项
   */
  ruleOptions?: RuleOptions
  /**
   * Parse the `info` and `source` in `@[type info](source)` and convert them into a metadata object.
   *
   * 解析 `@[type info](source)` 中的 `info` 和 `source`，转换为元数据对象
   *
   * @param info - Information / 信息
   * @param source - Source / 来源
   * @returns Metadata object / 元数据对象
   */
  meta: (info: string, source: string) => Meta
  /**
   * Generate content from metadata
   *
   * 从元数据生成内容
   *
   * @param meta - Metadata / 元数据
   * @param env - Markdown environment / Markdown 环境
   * @returns Generated content / 生成的内容
   */
  content?: (meta: Meta, env: MarkdownEnv) => string

  /**
   * Render content from tokens
   *
   * 从令牌渲染内容
   *
   * @param tokens - Tokens / 令牌
   * @param index - Index / 索引
   * @param env - Markdown environment / Markdown 环境
   * @returns Generated content / 生成的内容
   */
  render?: (tokens: Token[], index: number, env: MarkdownEnv) => string
}

/**
 * Create embed rule block
 *
 * 创建嵌入规则块
 *
 * Syntax: \@\[name]()
 *
 * 语法：\@\[name]()
 *
 * @param md - Markdown instance / Markdown 实例
 * @param {EmbedRuleBlockOptions} options - Embed rule block options / 嵌入规则块选项
 * @typeParam Meta - Metadata type / 元数据类型
 */
export function createEmbedRuleBlock<Meta extends Record<string, any> = Record<string, any>>(
  md: MarkdownIt,
  {
    type,
    name = type,
    beforeName = 'code',
    ruleOptions = { alt: ['paragraph', 'reference', 'blockquote', 'list'] },
    meta,
    content,
    render,
  }: EmbedRuleBlockOptions<Meta>,
): void {
  const MIN_LENGTH = type.length + 5
  const START_CODES = [64, 91, ...type.split('').map(c => c.charCodeAt(0))]
  const escapedType = type.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const syntaxPattern = new RegExp(`^@\\[${escapedType}(?:\\s+([^\\]]*))?\\]\\(([^)]*)\\)$`)

  md.block.ruler.before(
    beforeName,
    name,
    (state, startLine, endLine, silent) => {
      const pos = state.bMarks[startLine]! + state.tShift[startLine]!
      const max = state.eMarks[startLine]!

      // return false if the length is shorter than min length
      // 如果长度小于最小长度，返回 false
      if (pos + MIN_LENGTH > max)
        return false

      // check if it's matched the start
      // 检查是否匹配开始
      for (let i = 0; i < START_CODES.length; i += 1) {
        if (state.src.charCodeAt(pos + i) !== START_CODES[i])
          return false
      }

      // check if it's matched the syntax
      // 检查是否匹配语法
      const content = state.src.slice(pos, max).trim()
      const match = content.match(syntaxPattern)
      if (!match)
        return false

      // return true as we have matched the syntax
      // 返回 true 表示已匹配语法
      /* istanbul ignore if -- @preserve */
      if (silent)
        return true

      const token = state.push(name, '', 0)

      const [, info = '', source = ''] = match
      token.meta = meta(info.trim(), source.trim())
      token.content = content
      token.map = [startLine, startLine + 1]

      state.line = startLine + 1

      return true
    },
    ruleOptions,
  )

  md.renderer.rules[name] = (tokens, index, _, env: MarkdownEnv) => {
    return content?.(tokens[index].meta, env)
      ?? render?.(tokens, index, env)
      ?? tokens[index].content
  }
}
