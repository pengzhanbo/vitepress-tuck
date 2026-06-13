/**
 * Embed Link 是属于 obsidian 官方扩展的 markdown 语法
 *
 * - ![[文件名]]  ![[文件名#标题]]  ![[文件名#标题#标题]]
 * - ![[资源链接]]：
 *   - ![[图片]]   ![[图片|width]] ![[图片|widthxheight]]
 *   - ![[pdf]] ![[pdf#page=1#height=300]]
 *   - ![[音频]]
 *   - ![[视频]]
 *
 * @see - https://obsidian.md/zh/help/embeds
 * @see - https://obsidian.md/zh/help/file-formats
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

interface ParsedHeading {
  lineIndex: number
  level: number
  text: string
}

// 支持: ## 标题 {#id .class key=value} 或 ## 标题 {#id}
const HEADING_HASH_REG = /^#+/
const HEADING_ATTRS_REG = /(?:\{[^}]*\})?$/

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
