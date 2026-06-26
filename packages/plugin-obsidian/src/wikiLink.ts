/**
 * Wiki Link is an official Obsidian markdown extension.
 *
 * Wiki Link 是属于 Obsidian 官方扩展的 markdown 语法。
 *
 * Supported forms:
 * 支持的形式：
 * - `[[文件名]]`
 * - `[[文件名#标题]]`
 * - `[[文件名#标题#标题]]`
 * - `[[文件名#标题|别名]]`
 *
 * @see - https://obsidian.md/zh/help/links
 *
 * The plugin provides compatibility support for this syntax, not a full
 * reimplementation of Obsidian's behavior.
 *
 * 插件提供的是对该语法的兼容性支持，并非实现其完全的功能。
 */

import type { PluginWithOptions } from 'markdown-it'
import type { RuleInline } from 'markdown-it/lib/parser_inline.mjs'
import type { FilesResult } from './types.js'
import path from 'node:path'
import process from 'node:process'
import { isHttp } from '@pengzhanbo/utils'
import { slugify } from 'vitepress-plugin-toolkit'
import { findFirstFile, loadFiles } from './loadFiles.js'

/**
 * Build an inline rule that recognizes Obsidian wiki link syntax `[[...]]`.
 *
 * 构造识别 Obsidian wiki 链接语法 `[[...]]` 的行内规则。
 *
 * 解析流程：
 * 1. 校验当前位置以 `[[` 开头，并扫描至配对的 `]]`。
 * 2. 将内容按 `|` 拆分为文件名与别名，按 `#` 拆分文件名与标题层级。
 * 3. 根据文件名类型分别处理：
 *    - HTTP(S) 外部链接：输出带 `target` 与 `rel` 属性的 `<a>`。
 *    - 空文件名（页内锚点）：仅生成 `#slug` 形式的 href。
 *    - 站内 markdown 文件（通过 `findFirstFile` 命中）：生成相对路径 href。
 *    - 其他情况：按绝对或相对路径直接作为 href。
 * 4. 别名缺省时，回退为 `文件名 > 标题` 形式的文本。
 *
 * @example
 * ```ts
 * import MarkdownIt from 'markdown-it'
 * import { wikiLinkMarkdownPlugin } from 'vitepress-plugin-obsidian'
 *
 * const md = new MarkdownIt().use(wikiLinkMarkdownPlugin, { root: '.', files: [] })
 * md.render('[[guide|指南]]')
 * ```
 *
 * @param root - Absolute path of the VitePress source root / VitePress 源根目录的绝对路径
 * @param files - Markdown file list for internal link resolution / 用于内部链接解析的 markdown 文件列表
 * @returns markdown-it inline rule / markdown-it 行内规则
 */
function wikiLinkDef(root: string, files: string[]): RuleInline {
  return (state, silent) => {
    let found = false
    const max = state.posMax
    const start = state.pos

    if (
      state.src.charCodeAt(start) !== 0x5B
      || state.src.charCodeAt(start + 1) !== 0x5B
    ) {
      return false
    }

    /* istanbul ignore if -- @preserve */
    if (silent)
      return false

    // - [[]]
    if (max - start < 5)
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
    const content = state.src.slice(start + 2, state.pos).trim()
    // found!
    state.posMax = state.pos
    state.pos = start + 2

    const [file, alias] = content.split('|')
    const infos = file!.trim().split('#')
    const filename = infos[0]!.trim()
    const titles = infos.slice(1).map(title => title!.trim())
    const anchor = titles.at(-1)
    const slug = anchor ? `#${slugify(anchor)}` : ''
    let page: string | undefined = ''

    const linkToken = state.push('link_open', 'a', 1)
    const textToken = state.push('text', '', 0)
    textToken.content = alias?.trim() || ''
    // 处理 外部链接
    if (isHttp(filename)) {
      linkToken.attrJoin('href', `${filename}${slug}`)
      linkToken.attrJoin('target', '_blank')
      linkToken.attrJoin('rel', 'noopener noreferrer')
      textToken.content ||= [filename, ...titles].join(' > ')
    }
    // 处理页内 hash 链接
    else if (!filename) {
      linkToken.attrJoin('href', slug)
      const title = state.env.title || path.basename(state.env.relativePath, '.md') || ''
      textToken.content ||= [title, ...titles].join(' > ')
    }
    // 处理内部链接
    // eslint-disable-next-line no-cond-assign
    else if (page = findFirstFile(files, state.env.relativePath, filename)) {
      const href = path.relative(path.dirname(state.env.path), path.join(root, page))
      linkToken.attrJoin('href', `${href}${slug}`)
      const title = path.basename(page, '.md') || ''
      textToken.content ||= [title, ...titles].join(' > ')
    }
    // 处理其他链接， 此类链接使用 绝对路径或相对路径，但无法判断是否存在目标文件
    else {
      const url = filename[0] === '.'
        ? path.join(path.dirname(state.env.relativePath), filename)
        : filename
      linkToken.attrJoin('href', `${url}${slug}`)
      textToken.content ||= [filename, ...titles].join(' > ')
    }

    state.push('link_close', 'a', -1)

    state.pos = state.posMax + 2
    state.posMax = max

    return true
  }
}

/**
 * markdown-it plugin that registers the Obsidian wiki link inline rule.
 *
 * markdown-it 插件，注册 Obsidian wiki 链接的行内规则。
 *
 * 在 `emphasis` 规则之前插入 `obsidian_wiki_link` 规则。当未显式传入 `options`
 * 时，会调用 `loadFiles()` 收集站点 markdown 文件列表用于内部链接解析。
 *
 * @example
 * ```ts
 * import MarkdownIt from 'markdown-it'
 * import { wikiLinkMarkdownPlugin } from 'vitepress-plugin-obsidian'
 *
 * const md = new MarkdownIt().use(wikiLinkMarkdownPlugin)
 * md.render('[[guide]]')
 * ```
 *
 * @param md - markdown-it instance / markdown-it 实例
 * @param options - Optional `FilesResult` to reuse a precomputed file list / 可选的 `FilesResult`，用于复用预先计算的文件列表
 */
export const wikiLinkMarkdownPlugin: PluginWithOptions<Partial<FilesResult>> = (
  md,
  options,
): void => {
  if (!options)
    options = loadFiles()

  const { root = process.cwd(), files } = options as FilesResult
  md.inline.ruler.before('emphasis', 'obsidian_wiki_link', wikiLinkDef(root, files))
}
