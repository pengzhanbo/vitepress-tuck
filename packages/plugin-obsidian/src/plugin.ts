import type { ObsidianPluginOptions } from './types'
import { definePlugin } from 'vitepress-tuck'
import { obsidianMarkdownPlugin } from './obsidian.js'

/**
 * VitePress plugin for Obsidian-flavored markdown syntax compatibility.
 *
 * VitePress 插件，提供 Obsidian 风格 markdown 语法的兼容性支持。
 *
 * 支持的语法包括：callout 标注块、`%%` 注释、`![[...]]` 嵌入链接 与 `[[...]]` wiki 链接。
 * 各子功能可通过 `options` 单独开关，默认全部启用。
 *
 * @example
 * `.vitepress/config.ts`
 * ```ts
 * import { defineConfig } from 'vitepress'
 * import { obsidian } from 'vitepress-plugin-obsidian'
 *
 * export default defineConfig({
 *   markdown: { config: (md) => md.use(obsidian()) },
 * })
 * ```
 *
 * @param options - Plugin options to toggle each syntax feature / 插件选项，用于开关各语法特性
 * @returns VitePress plugin definition / VitePress 插件定义
 */
export const obsidian = definePlugin((options: ObsidianPluginOptions = {}) => ({
  name: 'vitepress-plugin-obsidian',
  markdown: {
    config: (md) => {
      md.use(obsidianMarkdownPlugin, options)
    },
  },
}))
