import type { PluginWithOptions } from 'markdown-it'
import type { RuleBlock } from 'markdown-it/lib/parser_block.mjs'
import type { RuleInline } from 'markdown-it/lib/parser_inline.mjs'
import type StateBlock from 'markdown-it/lib/rules_block/state_block.mjs'
import type StateInline from 'markdown-it/lib/rules_inline/state_inline.mjs'
import type Token from 'markdown-it/lib/token.mjs'
import type { MarkdownEnv } from 'vitepress'
import { objectMap, toArray } from '@pengzhanbo/utils'
import { cleanMarkdownEnv } from 'vitepress-plugin-toolkit'

/**
 * Annotation token with meta information
 *
 * 带元信息的注释令牌
 */
interface AnnotationToken extends Token {
  /**
   * Token meta information
   *
   * 令牌元信息
   */
  meta: {
    /**
     * Annotation label
     *
     * 注释标签
     */
    label: string
  }
}

/**
 * Annotation environment
 *
 * 注释环境
 */
interface AnnotationEnv extends MarkdownEnv {
  /**
   * Annotations record
   *
   * 注释记录
   */
  annotations: Record<string, {
    /**
     * Source texts
     *
     * 源文本
     */
    sources: string[]
    /**
     * Rendered contents
     *
     * 渲染后的内容
     */
    rendered: string[]
  }>
}

/**
 * Annotation state block
 *
 * 注释状态块
 */
interface AnnotationStateBlock extends StateBlock {
  /**
   * Tokens array
   *
   * 令牌数组
   */
  tokens: AnnotationToken[]
  /**
   * Environment
   *
   * 环境
   */
  env: AnnotationEnv
}

/**
 * Annotation state inline
 *
 * 注释行内状态
 */
interface AnnotationStateInline extends StateInline {
  /**
   * Tokens array
   *
   * 令牌数组
   */
  tokens: AnnotationToken[]
  /**
   * Environment
   *
   * 环境
   */
  env: AnnotationEnv
}

/**
 * Annotation definition rule
 *
 * 注释定义规则
 *
 * @param state - State block / 状态块
 * @param startLine - Start line number / 开始行号
 * @param endLine - End line number / 结束行号
 * @param silent - Silent mode / 静默模式
 * @returns Whether matched / 是否匹配
 */
const annotationDef: RuleBlock = (
  state: AnnotationStateBlock,
  startLine: number,
  endLine: number,
  silent: boolean,
) => {
  const start = state.bMarks[startLine] + state.tShift[startLine]
  const max = state.eMarks[startLine]

  if (
    // line should be at least 5 chars - "[+x]:"
    start + 4 > max
    || state.src.charAt(start) !== '['
    || state.src.charAt(start + 1) !== '+'
  ) {
    return false
  }

  let pos = start + 2

  while (pos < max) {
    if (state.src.charAt(pos) === ' ')
      return false
    if (state.src.charAt(pos) === ']')
      break
    pos++
  }

  if (
    // empty annotation label
    pos === start + 2
    || pos + 1 >= max
    || state.src.charAt(++pos) !== ':'
  ) {
    return false
  }
  /* istanbul ignore if -- @preserve */
  if (silent)
    return true

  pos++

  const data = state.env.annotations ??= {}
  const label = state.src.slice(start + 2, pos - 2)

  let annotation = state.src.slice(pos, max).trim()

  // 处理多行注释
  let nextLine = startLine + 1
  while (nextLine < endLine) {
    const nextStart = state.bMarks[nextLine] + state.tShift[nextLine]
    const nextMax = state.eMarks[nextLine]
    const source = state.src.slice(nextStart, nextMax).slice(state.blkIndent).trimEnd()

    // 行不为空，且行缩进小于块缩进，则跳出
    if (state.sCount[nextLine] < state.blkIndent + 2 && source !== '')
      break

    annotation += `\n${source}`
    nextLine++
  }

  const current = data[`:${label}`] ??= { sources: [], rendered: [] }
  current.sources.push(annotation)

  state.line = nextLine

  return true
}

/**
 * Annotation reference rule
 *
 * 注释引用规则
 *
 * @param state - State inline / 行内状态
 * @param silent - Silent mode / 静默模式
 * @returns Whether matched / 是否匹配
 */
const annotationRef: RuleInline = (
  state: AnnotationStateInline,
  silent: boolean,
): boolean => {
  const start = state.pos
  const max = state.posMax

  if (
    // should be at least 4 chars - "[+x]"
    start + 3 > max
    || typeof state.env.annotations === 'undefined'
    || state.src.charAt(start) !== '['
    || state.src.charAt(start + 1) !== '+'
  ) {
    return false
  }

  let pos = start + 2

  while (pos < max) {
    if (state.src.charAt(pos) === ' ' || state.src.charAt(pos) === '\n')
      return false
    if (state.src.charAt(pos) === ']')
      break
    pos++
  }

  if (
    //  empty annotation labels
    pos === start + 2
    || pos >= max
  ) {
    return false
  }

  pos++

  const label = state.src.slice(start + 2, pos - 1)
  const annotations = state.env.annotations?.[`:${label}`]?.sources ?? []

  if (annotations.length === 0)
    return false

  /* istanbul ignore if -- @preserve */
  if (!silent) {
    const refToken = state.push('annotation_ref', '', 0)

    refToken.meta = { label } as AnnotationToken['meta']
  }

  state.pos = pos
  state.posMax = max

  return true
}

/**
 * Annotation plugin - Enable annotation syntax in markdown-it.
 *
 * 注释插件 - 在 markdown-it 中启用注释语法。
 *
 * Registers two rules:
 * - A block rule (`annotationDef`) that recognizes annotation definitions of
 *   the form `[+label]: content` and stores them in `env.annotations`.
 *   Definitions support multi-line content via indented continuation lines,
 *   and multiple definitions for the same label are accumulated.
 * - An inline rule (`annotationRef`) that recognizes annotation references of
 *   the form `[+label]` and pushes an `annotation_ref` token to be rendered
 *   as a `<VPAnnotation>` component.
 *
 * 注册两条规则：
 * - 块规则（`annotationDef`）识别 `[+标签]: 内容` 形式的注释定义，并将其
 *   存储到 `env.annotations` 中。定义通过缩进续行支持多行内容，同一标签的
 *   多次定义会被累加。
 * - 行内规则（`annotationRef`）识别 `[+标签]` 形式的注释引用，并推入
 *   `annotation_ref` 令牌，最终渲染为 `<VPAnnotation>` 组件。
 *
 * Definition syntax: `[+label]: annotation content`
 * Reference syntax: `[+label]`
 *
 * 定义语法：`[+标签]: 注释内容`
 * 引用语法：`[+标签]`
 *
 * @param md - Markdown-it instance / Markdown-it 实例
 * @param globalAnnotations - Global annotations preset, a map of label to
 *   annotation content (string or string array) / 全局注释预设，标签到
 *   注释内容（字符串或字符串数组）的映射
 */
export const annotationMarkdownPlugin: PluginWithOptions<Record<string, string | string[]>> = (
  md,
  globalAnnotations = {},
) => {
  // Normalize global annotations: ensure keys start with ':' and values are arrays.
  // 规范化全局注释：确保 key 以 ':' 开头，value 为数组。
  const annotations = objectMap(globalAnnotations, (key, value) => {
    return [
      key.startsWith(':') ? key : `:${key}`,
      { sources: toArray(value), rendered: [] },
    ]
  })

  /**
   * Custom renderer for the `annotation_ref` token.
   *
   * `annotation_ref` 令牌的自定义渲染器。
   *
   * Renders the annotation reference as a `<VPAnnotation>` component tag. Each
   * annotation source is rendered as block-level markdown and placed into a
   * named slot (`#item-0`, `#item-1`, …). Rendered results are cached on the
   * environment so that repeated references to the same label reuse the
   * rendered output without re-rendering. The environment passed to the nested
   * render is cleaned via `cleanMarkdownEnv` to strip `references` and
   * `annotations`, preventing recursive annotation processing inside annotation
   * content.
   *
   * 将注释引用渲染为 `<VPAnnotation>` 组件标签。每个注释源作为块级 markdown
   * 渲染，并放入具名插槽（`#item-0`、`#item-1`、…）。渲染结果缓存在环境对象上，
   * 使得对同一标签的重复引用可复用已渲染的结果而无需重复渲染。传递给嵌套渲染的
   * 环境通过 `cleanMarkdownEnv` 清理，去除 `references` 和 `annotations`，
   * 防止在注释内容中递归处理注释。
   *
   * When a label is not found in the inline (env) annotations, the renderer
   * falls back to the global annotations preset.
   *
   * 当标签在内联（环境）注释中未找到时，渲染器回退到全局注释预设。
   *
   * @param tokens - Token array / token 数组
   * @param idx - Current token index / 当前 token 索引
   * @param _ - Render options (unused) / 渲染选项（未使用）
   * @param env - Render environment containing annotations / 包含注释的渲染环境
   * @returns Rendered HTML string / 渲染后的 HTML 字符串
   */
  md.renderer.rules.annotation_ref = (
    tokens: AnnotationToken[],
    idx: number,
    _,
    env: AnnotationEnv,
  ) => {
    const label = tokens[idx].meta.label
    /* istanbul ignore next -- @preserve */
    const data = env.annotations[`:${label}`] || annotations[`:${label}`]

    return `<VPAnnotation label="${md.utils.escapeHtml(label)}" :total="${data.sources.length}">${
      data.sources.map((source, i) => {
        const annotation = data.rendered[i] ??= md.render(source, cleanMarkdownEnv(env, ['references', 'annotations']))
        return `<template #item-${i}>${annotation}</template>`
      }).join('\n')
    }</VPAnnotation>`
  }

  // Register the inline reference rule before 'image' so that `[+label]` is
  // matched before any image or link-reference syntax.
  // 在 'image' 之前注册行内引用规则，使 `[+标签]` 在图片或链接引用语法之前被匹配。
  md.inline.ruler.before('image', 'annotation_ref', annotationRef)

  // Register the block definition rule before 'reference' so that
  // `[+label]: content` is matched before regular link reference definitions.
  // The `alt` option allows the rule to interrupt paragraphs and reference
  // definition blocks.
  // 在 'reference' 之前注册块定义规则，使 `[+标签]: 内容` 在常规链接引用定义之前
  // 被匹配。`alt` 选项允许该规则中断段落和引用定义块。
  md.block.ruler.before('reference', 'annotation', annotationDef, {
    alt: ['paragraph', 'reference'],
  })
}
