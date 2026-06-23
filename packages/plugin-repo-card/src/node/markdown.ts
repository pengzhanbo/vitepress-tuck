import type { PluginSimple } from 'markdown-it'
import ansis from 'ansis'
import { createContainerPlugin, createEmbedRuleBlock, createLogger, stringifyAttrs } from 'vitepress-plugin-toolkit'

const logger = createLogger('vitepress-plugin-repo-card')

/** Supported repository platform registries / 支持的仓库平台 */
const registerList = ['github', 'gitee']

/**
 * A markdown-it plugin that transforms `@[repo]` and `::: repo :::` syntax into
 * repository cards for GitHub and Gitee repositories.
 *
 * 一个 markdown-it 插件，将 `@[repo]` 和 `::: repo :::` 语法转换为 GitHub 和 Gitee
 * 仓库信息卡片。
 *
 * ## Syntax / 语法
 *
 * ### Embed syntax:
 *
 * ```md
 * @[repo github](owner/name)
 * @[repo gitee](owner/name)
 * @[repo fullname github](owner/name)
 * ```
 *
 * ### Container syntax (multi-card grid layout):
 *
 * ```md
 * ::: repo
 * @[repo github](owner/name)
 * @[repo gitee](owner/name)
 * :::
 * ```
 *
 * @param md - markdown-it instance / markdown-it 实例
 */
export const repoCardMarkdownPlugin: PluginSimple = (md) => {
  createContainerPlugin(md, 'repo', {
    before: () => '<div class="vp-repo-container">',
  })

  createEmbedRuleBlock(md, {
    type: 'repo',
    meta: (info, repo) => {
      let fullname = false
      const register = info.replace(/\bfullname\b/, () => {
        fullname = true
        return ''
      }).trim()
      return { register, repo, fullname }
    },
    content: ({ register, repo, fullname }) => {
      if (register && !registerList.includes(register)) {
        logger.warn(`register "${ansis.red(register)}" is not supported`)
        return `<p style="color:red;">register "${register}" is not supported, @[repo ${register}](${repo})</p>`
      }
      return `<RepoCard${stringifyAttrs({ register, repo, fullname })}  />`
    },
  })
}
