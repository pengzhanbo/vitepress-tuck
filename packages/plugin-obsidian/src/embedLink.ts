/**
 * Embed Link is an official Obsidian markdown extension.
 *
 * Embed Link 是属于 Obsidian 官方扩展的 markdown 语法。
 *
 * Supported forms:
 * 支持的形式：
 * - `![[文件名]]`、`![[文件名#标题]]`、`![[文件名#标题#标题]]`
 * - `![[资源链接]]`：
 *   - `![[图片]]`、`![[图片|width]]`、`![[图片|widthxheight]]`
 *   - `![[pdf]]`、`![[pdf#page=1#height=300]]`
 *   - `![[音频]]`
 *   - `![[视频]]`
 *
 * @see - https://obsidian.md/zh/help/embeds
 * @see - https://obsidian.md/zh/help/file-formats
 *
 * The plugin provides compatibility support for this syntax, not a full
 * reimplementation of Obsidian's behavior.
 *
 * 插件提供的是对该语法的兼容性支持，并非实现其完全的功能。
 */

import type { PluginWithOptions } from 'markdown-it'
import type { RuleBlock } from 'markdown-it/lib/parser_block.mjs'
import type { RuleInline } from 'markdown-it/lib/parser_inline.mjs'
import type StateBlock from 'markdown-it/lib/rules_block/state_block.mjs'
import type StateInline from 'markdown-it/lib/rules_inline/state_inline.mjs'
import type { MarkdownEnv } from 'vitepress'
import type { FilesResult } from './types'
import { randomUUID } from 'node:crypto'
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { attempt, isHttp } from '@pengzhanbo/utils'
import grayMatter from 'gray-matter'
import Token from 'markdown-it/lib/token.mjs'
import { EXTENSION_AUDIOS, EXTENSION_IMAGES, EXTENSION_VIDEOS, parseRect, slugify } from 'vitepress-plugin-toolkit'
import { findFirstFile, loadFiles } from './loadFiles'

const audioExtensions = EXTENSION_AUDIOS.map(ext => `.${ext}`)
const videoExtensions = EXTENSION_VIDEOS.map(ext => `.${ext}`)
const imageExtensions = EXTENSION_IMAGES.map(ext => `.${ext}`)

/**
 * Build a block rule that recognizes standalone embed link syntax `![[...]]`.
 *
 * 构造识别独立成行的嵌入链接语法 `![[...]]` 的块级规则。
 *
 * 校验起始行以 `![[` 开头并以 `]]` 结尾，提取中间内容后交给 `genEmbedAsset`
 * 生成对应的 token。该规则用于独占一行的嵌入资源，例如图片、视频或 markdown 文件。
 *
 * @param root - Absolute path of the VitePress source root / VitePress 源根目录的绝对路径
 * @param files - Markdown file list for internal link resolution / 用于内部链接解析的 markdown 文件列表
 * @returns markdown-it block rule / markdown-it 块级规则
 */
function blockEmbedLinkDef(root: string, files: string[]): RuleBlock {
  return (state, startLine, endLine, silent) => {
    const start = state.bMarks[startLine]! + state.tShift[startLine]!
    const max = state.eMarks[startLine]!

    // - ![[]]
    if (max - start < 6)
      return false

    // 是否以 `![[` 开头
    if (
      state.src.charCodeAt(start) !== 0x21 // \!
      || state.src.charCodeAt(start + 1) !== 0x5B // [
      || state.src.charCodeAt(start + 2) !== 0x5B // [
    ) {
      return false
    }

    const line = state.src.slice(start, max).trim()
    // 是否以 `]]` 结尾
    if (
      line.charCodeAt(line.length - 1) !== 0x5D // ]
      || line.charCodeAt(line.length - 2) !== 0x5D // ]
    ) {
      return false
    }

    /* istanbul ignore if -- @preserve */
    if (silent)
      return true

    // ![[xxxx]]
    //    ^^^^  <- content
    const content = line.slice(3, -2).trim()
    genEmbedAsset(state, content, root, files)

    state.line = startLine + 1
    return true
  }
}

/**
 * Build an inline rule that recognizes inline embed link syntax `![[...]]`.
 *
 * 构造识别行内嵌入链接语法 `![[...]]` 的行内规则。
 *
 * 从当前位置扫描 `![[` 起始与 `]]` 结束，提取中间内容后交给 `genEmbedAsset`
 * 生成 token，并标记 `isInline = true`，使内部 markdown 文件以链接形式渲染
 * 而非内联展开内容。
 *
 * @param root - Absolute path of the VitePress source root / VitePress 源根目录的绝对路径
 * @param files - Markdown file list for internal link resolution / 用于内部链接解析的 markdown 文件列表
 * @returns markdown-it inline rule / markdown-it 行内规则
 */
function inlineEmbedLinkDef(root: string, files: string[]): RuleInline {
  return (state, silent) => {
    let found = false
    const max = state.posMax
    const start = state.pos

    if (
      state.src.charCodeAt(start) !== 0x21 // \!
      || state.src.charCodeAt(start + 1) !== 0x5B // [
      || state.src.charCodeAt(start + 2) !== 0x5B // [
    ) {
      return false
    }

    /* istanbul ignore if -- @preserve */
    if (silent)
      return false

    // - ![[]]
    if (max - start < 6)
      return false

    state.pos = start + 2

    // 查找 ]]
    while (state.pos < max) {
      if (state.src.charCodeAt(state.pos) === 0x5D
        && state.src.charCodeAt(state.pos + 1) === 0x5D) {
        found = true
        break
      }

      state.md.inline.skipToken(state)
    }

    if (!found || start + 2 === state.pos) {
      state.pos = start
      return false
    }
    // [[xxxx]]
    //   ^^^^  <- content
    const content = state.src.slice(start + 3, state.pos).trim()
    // found!
    state.posMax = state.pos
    state.pos = start + 3

    genEmbedAsset(state, content, root, files, true)

    state.pos = state.posMax + 2
    state.posMax = max

    return true
  }
}

/**
 * markdown-it plugin that registers Obsidian embed link rules and renderer.
 *
 * markdown-it 插件，注册 Obsidian 嵌入链接规则与渲染器。
 *
 * 注册内容：
 * - 块级规则 `obsidian_block_embed_link`：在 `code` 之前识别独占一行的 `![[...]]`。
 * - 行内规则 `obsidian_inline_embed_link`：在 `emphasis` 之前识别行内 `![[...]]`。
 * - `obsidian_embed_link` 渲染器：将内嵌 markdown 内容的子 token 递归渲染。
 *
 * 当未显式传入 `options` 时，会调用 `loadFiles()` 收集站点 markdown 文件列表。
 *
 * @example
 * ```ts
 * import MarkdownIt from 'markdown-it'
 * import { embedLinkMarkdownPlugin } from 'vitepress-plugin-obsidian'
 *
 * const md = new MarkdownIt().use(embedLinkMarkdownPlugin)
 * md.render('![[image.png|300x200]]')
 * ```
 *
 * @param md - markdown-it instance / markdown-it 实例
 * @param options - Optional `FilesResult` to reuse a precomputed file list / 可选的 `FilesResult`，用于复用预先计算的文件列表
 */
export const embedLinkMarkdownPlugin: PluginWithOptions<Partial<FilesResult>> = (
  md,
  options,
): void => {
  if (!options)
    options = loadFiles()

  const { root = process.cwd(), files } = options as FilesResult

  md.block.ruler.before(
    'code',
    'obsidian_block_embed_link',
    blockEmbedLinkDef(root, files),
    { alt: ['paragraph', 'reference', 'blockquote', 'list'] },
  )
  md.inline.ruler.before('emphasis', 'obsidian_inline_embed_link', inlineEmbedLinkDef(root, files))
  md.renderer.rules.obsidian_embed_link = (tokens, idx, _, env) => {
    const token = tokens[idx]!
    return md.renderer.render(token.children!, _, env)
  }
}

/**
 * Generate markdown-it tokens for an embed link content based on its file type.
 *
 * 根据文件类型为嵌入链接内容生成 markdown-it token。
 *
 * 解析 `content` 中的文件名、`#` 标题片段与 `|` 后的尺寸/别名设置，按扩展名
 * 分发到不同的渲染分支：
 * - 图片：生成 `image` token，支持 `width`、`height` 样式。
 * - 音频：生成 `audio` 容器与 `source` 子 token。
 * - 视频：生成 `VPArtPlayer` 组件 token。
 * - PDF：生成 `VPPdf` 组件 token，并将 `#` 片段作为属性。
 * - HTTP(S) 或非 markdown 外部资源：生成新窗口打开的 `<a>` 链接。
 * - 站内 markdown 文件：
 *   - 行内（`isInline` 为 `true`）：渲染为指向目标文件的 `<a>` 链接。
 *   - 块级：读取目标文件内容，剥离 frontmatter，按 `#` 标题片段截取后内联展开。
 * - 未命中的其他情况：按绝对或相对路径渲染为 `<a>` 链接。
 *
 * @param state - markdown-it parser state (block or inline) / markdown-it 解析器状态（块级或行内）
 * @param content - Raw content between `![[` and `]]` / `![[` 与 `]]` 之间的原始内容
 * @param root - Absolute path of the VitePress source root / VitePress 源根目录的绝对路径
 * @param files - Markdown file list for internal link resolution / 用于内部链接解析的 markdown 文件列表
 * @param isInline - Whether the embed link appears inline / 该嵌入链接是否出现在行内位置
 */
function genEmbedAsset(
  state: StateBlock | StateInline,
  content: string,
  root: string,
  files: string[],
  isInline = false,
): void {
  const [file, settings] = content.split('|').map(x => x.trim())
  const infos = file!.trim().split('#').map(x => x.trim())
  const filename = infos[0] || ''
  const hashes = infos.slice(1)
  const extname = path.extname(filename!).toLowerCase()
  const env = state.env as MarkdownEnv

  // 渲染为 图片
  if (imageExtensions.includes(extname)) {
    const token = state.push('image', 'img', 1)
    token.content = filename
    token.attrSet('src', resolveFilenameToAssetPath(filename, root, env.relativePath))
    token.attrSet('alt', filename)
    if (settings) {
      const [width, height] = settings.split('x').map(x => x.trim())
      const styles: string[] = []
      if (width)
        styles.push(`width: ${parseRect(width)}`)
      if (height)
        styles.push(`height: ${parseRect(height)}`)
      token.attrSet('style', styles.join(';'))
    }
    const text = new Token('text', '', 0)
    text.content = filename
    token.children = [text]
  }
  // 渲染为音频
  else if (audioExtensions.includes(extname)) {
    const token = state.push('audio_open', 'audio', 1)
    token.content = filename
    token.attrSet('controls', 'true')
    token.attrSet('preload', 'metadata')
    token.attrSet('aria-label', filename)
    const sourceToken = state.push('source_open', 'source', 1)
    sourceToken.attrSet('src', resolveFilenameToAssetPath(filename))
    state.push('audio_close', 'audio', -1)
  }
  // 渲染为视频
  else if (videoExtensions.includes(extname)) {
    const token = state.push('video_artPlayer_open', 'VPArtPlayer', 1)
    const type = extname.slice(1)
    token.attrSet('src', resolveFilenameToAssetPath(filename))
    token.attrSet('type', type)
    token.attrSet('width', '100%')
    token.attrSet(':fullscreen', 'true')
    token.attrSet(':flip', 'true')
    token.attrSet(':playback-rate', 'true')
    token.attrSet(':aspect-ratio', 'true')
    token.attrSet(':setting', 'true')
    token.attrSet(':pip', 'true')
    token.attrSet(':volume', '0.75')
    token.content = filename
    state.push('video_artPlayer_close', 'VPArtPlayer', -1)
  }
  // 渲染为 pdf
  else if (extname === '.pdf') {
    const token = state.push('pdf_open', 'VPPdf', 1)
    token.attrSet('src', resolveFilenameToAssetPath(filename))
    token.attrSet('width', '100%')
    for (const hash of hashes) {
      const [key, value] = hash.split('=').map(x => x.trim())
      token.attrSet(key!, value!)
    }
    token.content = filename
    state.push('pdf_close', 'VPPdf', -1)
  }
  // 非受支持的外部资源，渲染为链接
  else if (isHttp(filename) || (extname && extname !== '.md')) {
    const token = state.push('link_open', 'a', 1)
    token.attrSet('href', filename)
    token.attrSet('target', '_blank')
    token.attrSet('rel', 'noopener noreferrer')
    token.content = filename
    const content = state.push('text', '', 0)
    content.content = filename
    state.push('link_close', 'a', -1)
  }
  // 剩余情况，如内部的 markdown 文件
  else {
    const page = findFirstFile(files, env.relativePath, filename)
    // 行内规则，内部链接，渲染为链接
    if (isInline && page) {
      const anchor = hashes.at(-1)
      const slug = anchor ? `#${slugify(anchor)}` : ''
      const linkToken = state.push('link_open', 'a', 1)
      const textToken = state.push('text', '', 0)
      textToken.content = settings?.trim() || ''
      const href = path.relative(path.dirname(state.env.path), path.join(root, page))

      linkToken.attrJoin('href', `${href}${slug}`)
      const title = path.basename(page, '.md') || ''
      textToken.content ||= [title, ...hashes].join(' > ')
      state.push('link_close', 'a', -1)
    }
    else if (page) {
      const [error, markdown] = attempt(() => fs.readFileSync(path.join(root, page), 'utf-8'))
      if (error) {
        console.warn(`[embedLinkPlugin] can not read file: ${page}`)
        return
      }
      const { content: rawContent } = grayMatter(markdown || '')
      if (!rawContent) {
        console.warn(`[embedLinkPlugin] file ${page} is empty`)
        return
      }
      const content = extractContentByHeadings(rawContent, hashes)

      const token = state.push('obsidian_embed_link', '', 0)
      token.content = content
      token.children = [...state.md.parse(content, env)]
    }
    else {
      const linkToken = state.push('link_open', 'a', 1)
      const textToken = state.push('text', '', 0)
      textToken.content = settings?.trim() || ''
      const url = filename[0] === '.'
        ? path.join(path.dirname(state.env.relativePath), filename)
        : filename
      linkToken.attrJoin('href', url)
      textToken.content ||= [filename, ...hashes].join(' > ')
      state.push('link_close', 'a', -1)
    }
  }
}

/**
 * Resolve a filename to a web-friendly asset path relative to the current page.
 *
 * 将文件名解析为相对于当前页面的、可在浏览器中访问的资源路径。
 *
 * 解析规则：
 * - HTTP(S) 链接、以 `.` 或 `/` 开头的路径：原样返回。
 * - 当 `root` 或 `relativePath` 缺失时：返回以 `/` 开头的绝对路径。
 * - 否则在 `root/filename` 与当前文件所在目录下查找实际存在的文件，
 *   命中则返回相对于当前目录的相对路径（必要时补 `./` 前缀）；
 *   未命中则回退为 `/filename`。
 *
 * @param filename - Filename or path to resolve / 待解析的文件名或路径
 * @param root - Absolute path of the VitePress source root / VitePress 源根目录的绝对路径
 * @param relativePath - Relative path of the current markdown file / 当前 markdown 文件的相对路径
 * @returns Resolved asset path suitable for `src`/`href` / 适合用于 `src`/`href` 的资源路径
 */
function resolveFilenameToAssetPath(filename: string, root = '', relativePath = ''): string {
  if (isHttp(filename) || filename[0] === '.' || filename[0] === '/') {
    return filename
  }
  if (!root || !relativePath)
    return `/${filename}`

  const dirname = path.dirname(path.join(root, relativePath))
  const actualPath = [path.join(root, filename), path.join(dirname, filename)].find(x => fs.existsSync(x))
  if (actualPath) {
    const relative = path.relative(dirname, actualPath)
    return relative[0] === '.' ? relative : `./${relative}`
  }
  return `/${filename}`
}

/**
 * Parsed heading entry used by `extractContentByHeadings`.
 *
 * `extractContentByHeadings` 使用的已解析标题条目。
 */
interface ParsedHeading {
  /**
   * Index of the heading line in the source content.
   *
   * 标题在源内容中的行索引。
   */
  lineIndex: number
  /**
   * Heading level derived from the leading `#` count.
   *
   * 由前导 `#` 数量推导出的标题层级。
   */
  level: number
  /**
   * Heading text with attributes stripped.
   *
   * 已移除属性部分的标题文本。
   */
  text: string
}

// 支持: ## 标题 {#id .class key=value} 或 ## 标题 {#id}
const HEADING_HASH_REG = /^#+/
const HEADING_ATTRS_REG = /(?:\{[^}]*\})?$/

/**
 * Extract a section of markdown content by matching a sequence of headings.
 *
 * 通过匹配标题序列从 markdown 内容中截取一个片段。
 *
 * 解析流程：
 * 1. 先用占位符替换 `:::` 容器块，避免容器内的标题干扰匹配。
 * 2. 逐行扫描，收集所有标题（含层级与文本，剥离 `{#id}` 等属性）。
 * 3. 在标题列表中查找与 `headings` 序列匹配的位置：首个标题匹配 `headings[0]`，
 *    后续标题需层级更深且文本依次匹配 `headings[1..]`；遇到同级或更浅标题时
 *    重置匹配状态。
 * 4. 命中后，从目标标题的下一行开始，直到下一个同级或更浅标题为止，
 *    截取内容并还原占位符容器后返回。未命中返回空字符串。
 *
 * @example
 * ```ts
 * extractContentByHeadings('# 简介\n内容', ['简介'])
 * // => '内容'
 * ```
 *
 * @param content - Markdown source content / markdown 源内容
 * @param headings - Heading text sequence to match / 待匹配的标题文本序列
 * @returns Extracted markdown fragment, or empty string when not found / 截取到的 markdown 片段，未命中时为空字符串
 */
function extractContentByHeadings(content: string, headings: string[]): string {
  if (!headings.length)
    return content

  const containers: Record<string, string> = {}

  content = content.replaceAll(/(?<mark>:{3,})[\s\S]*?\k<mark>/g, (matched) => {
    const key = randomUUID()
    containers[key] = matched
    return `<!--container:${key}-->`
  })
  const lines = content.split(/\r?\n/)

  const allHeadings: ParsedHeading[] = []

  for (let i = 0; i < lines.length; i++) {
    let text = lines[i]!.trimEnd()
    let level = 0
    text = text.replace(HEADING_HASH_REG, (matched) => {
      level = matched.length
      return ''
    })
    if (level) {
      text = text.replace(HEADING_ATTRS_REG, '').trim()
      allHeadings.push({ lineIndex: i, level, text })
    }
  }

  // 查找匹配的标题序列（逻辑同上）
  let targetHeadingIndex = -1
  let currentLevel = 0
  let headingPointer = 0

  for (let i = 0; i < allHeadings.length; i++) {
    const heading = allHeadings[i]!

    if (headingPointer === 0) {
      if (heading.text === headings[0]) {
        headingPointer++
        currentLevel = heading.level
        if (headingPointer === headings.length) {
          targetHeadingIndex = i
          break
        }
      }
    }
    else {
      if (heading.level > currentLevel && heading.text === headings[headingPointer]) {
        headingPointer++
        currentLevel = heading.level
        if (headingPointer === headings.length) {
          targetHeadingIndex = i
          break
        }
      }
      else if (heading.level <= currentLevel) {
        if (heading.text === headings[0]) {
          headingPointer = 1
          currentLevel = heading.level
        }
        else {
          headingPointer = 0
          currentLevel = 0
        }
      }
    }
  }

  if (targetHeadingIndex === -1) {
    console.warn(`No heading found for ${headings.join(' > ')}`)
    return ''
  }

  const targetHeading = allHeadings[targetHeadingIndex]!
  const startLine = targetHeading.lineIndex + 1
  const targetLevel = targetHeading.level

  let endLine = lines.length
  for (let i = targetHeadingIndex + 1; i < allHeadings.length; i++) {
    if (allHeadings[i]!.level <= targetLevel) {
      endLine = allHeadings[i]!.lineIndex
      break
    }
  }

  const result = lines.slice(startLine, endLine).join('\n').trim()

  return result.replaceAll(/<!--container:(.*?)-->/g, (_, key) => containers[key] ?? '')
}
