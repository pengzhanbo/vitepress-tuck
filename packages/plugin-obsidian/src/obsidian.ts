import type { PluginWithOptions } from 'markdown-it'
import type { ObsidianPluginOptions } from './types'
import { calloutMarkdownPlugin } from './callout.js'
import { commentMarkdownPlugin } from './comment.js'
import { embedLinkMarkdownPlugin } from './embedLink.js'
import { loadFiles } from './loadFiles.js'
import { wikiLinkMarkdownPlugin } from './wikiLink.js'

/**
 * markdown-it plugin that aggregates all Obsidian-flavored syntax rules.
 *
 * markdown-it 插件，聚合所有 Obsidian 风格的语法规则。
 *
 * 根据 `options` 启用对应的子插件：callout、comment、embedLink 与 wikiLink。
 * 当 embedLink 或 wikiLink 任一启用时，会先调用 `loadFiles()` 收集站点内的
 * markdown 文件列表，供链接解析使用。所有特性默认启用。
 *
 * @example
 * ```ts
 * import MarkdownIt from 'markdown-it'
 * import { obsidianMarkdownPlugin } from 'vitepress-plugin-obsidian'
 *
 * const md = new MarkdownIt()
 * md.use(obsidianMarkdownPlugin, { callout: true, comment: false })
 * ```
 *
 * @param md - markdown-it instance / markdown-it 实例
 * @param options - Plugin options to toggle each syntax feature / 插件选项，用于开关各语法特性
 */
export const obsidianMarkdownPlugin: PluginWithOptions<ObsidianPluginOptions> = (md, options = {}) => {
  const { callout, comment, embedLink, wikiLink } = options

  if (callout !== false)
    md.use(calloutMarkdownPlugin)

  if (comment !== false)
    md.use(commentMarkdownPlugin)

  if (wikiLink !== false || embedLink !== false) {
    const files = loadFiles()
    if (embedLink !== false)
      md.use(embedLinkMarkdownPlugin, files)

    if (wikiLink !== false)
      md.use(wikiLinkMarkdownPlugin, files)
  }
}
