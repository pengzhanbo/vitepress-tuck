import { definePlugin } from 'vitepress-tuck'
import { repoCardMarkdownPlugin } from './markdown.js'

/**
 * A VitePress plugin that renders GitHub/Gitee repository information cards in
 * markdown content.
 *
 * 一个 VitePress 插件，用于在 markdown 内容中渲染 GitHub/Gitee 仓库信息卡片。
 *
 * @example
 * ```ts
 * import { defineConfig } from 'vitepress'
 * import { repoCard } from 'vitepress-plugin-repo-card'
 *
 * export default defineConfig({
 *   plugins: [repoCard()],
 * })
 * ```
 */
export const repoCard = definePlugin(() => ({
  name: 'vitepress-plugin-repo-card',
  client: { enhance: 'enhanceAppWithRepoCard' },
  markdown: {
    config(md) {
      md.use(repoCardMarkdownPlugin)
    },
  },
}))
