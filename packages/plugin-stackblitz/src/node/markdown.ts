/**
 * 嵌入 Stack Blitz 或者跳转到 Stack Blitz
 *
 * ````md
 * @[stackblitz](stackblitz-id) // 从 Stack Blitz ID 嵌入
 * @[stackblitz github](user/repo) // 从 GitHub 仓库嵌入
 * @[stackblitz local](path/to/local) // 本地项目使用一个 stackblitz.config.{json,yaml,yml} 文件作为配置文件
 *
 * @[stackblitz button](source) // 显示为一个按钮，点击后跳转到 Stack Blitz
 * @[stackblitz attr="value"](source) // 行内配置
 *
 * :::stackblitz
 * ```json [config] // Stack Blitz 配置
 * ```
 *
 * ```json [package.json]
 * ```
 * :::
 * ````
 */

import type { Project } from '@stackblitz/sdk'
import type { PluginSimple } from 'markdown-it'
import type { StackBlitzConfig } from './types.js'
import fs from 'node:fs'
import { deepMerge, ensureTrailingSlash, hasOwn, omit, pick } from '@pengzhanbo/utils'
import ansis from 'ansis'
import { createContainerPlugin, createEmbedRuleBlock, getVitepressConfig, resolveAttrs, stringifyAttrs } from 'vitepress-plugin-toolkit'
import { z } from 'zod'
import { embedSchema, schema } from './schema.js'
import { loadFiles, logger, parseConfig, resolveStackBlitzDir, transformConfig } from './utils.js'

/**
 * Regular expression to extract the filename from a fence info string.
 *
 * Matches the `[filename]` syntax used in fenced code blocks inside a
 * code-tree container to declare the file path.
 *
 * 用于从围栏代码块信息字符串中提取文件名的正则表达式。
 *
 * 匹配在代码树容器内的围栏代码块中使用的 `[文件名]` 语法，用于声明文件路径。
 *
 */
const RE_CODE_TREE_TITLE = /\[([^\]]*)\]/

/**
 * Configuration file names to search for when using a local project directory.
 *
 * 使用本地目录时，按顺序查找的配置文件名列表。
 */
const CONFIG_FILE_NAME = [
  'stackblitz.config.json',
  'stackblitz.config.yaml',
  'stackblitz.config.yml',
]

const projectKeys: Exclude<keyof Project, 'tags'>[] = [
  'title',
  'description',
  'template',
  'files',
  'dependencies',
  'settings',
]

/** Keys whose values should be coerced to numbers. */
const shouldNumberKeys: string[] = ['terminalHeight', 'height', 'width']

/**
 * Coerce specific string values in the config object to numbers.
 *
 * Certain options like `terminalHeight`, `height`, and `width` are parsed
 * as strings from markdown attributes and need to be converted to numbers
 * for the StackBlitz SDK.
 *
 * 将配置对象中特定字段的字符串值转换为数字。部分选项（如 `terminalHeight`、`height`、`width`）
 * 从 markdown 属性解析后为字符串，需要转换为数字以供 StackBlitz SDK 使用。
 */
function transformNumberKeys(data: Record<string, any>) {
  shouldNumberKeys.forEach((key) => {
    if (hasOwn(data, key))
      data[key] = Number(data[key])
  })
}

/**
 * Markdown-it plugin that registers the StackBlitz embed rule and container.
 *
 * Supports two syntaxes:
 * - **Embed syntax**: `@[stackblitz](source)` for quick embeds
 * - **Container syntax**: `:::stackblitz` for complex multi-file projects
 *
 * Markdown-it 插件，注册 StackBlitz 嵌入规则和容器。支持两种语法：
 * - **嵌入语法**：`@[stackblitz](source)` 快速嵌入
 * - **容器语法**：`:::stackblitz` 用于复杂的多文件项目
 */
export const stackblitzMarkdownPlugin: PluginSimple = (md) => {
  createEmbedRuleBlock<StackBlitzConfig>(md, {
    type: 'stackblitz',
    meta(info, source) {
      const { source: _, settingsTrigger, settingsAction, settingsClearConsole, ...attrs } = resolveAttrs(info)
      attrs.settings = {
        trigger: settingsTrigger,
        action: settingsAction,
        clearConsole: settingsClearConsole,
      }
      attrs.source = source
      // 转换为数字
      transformNumberKeys(attrs)
      return attrs as StackBlitzConfig
    },
    content(meta, env) {
      const config = getVitepressConfig()
      const { source, github, local, button, ...attrs } = meta
      const props: Record<string, any> = {
        from: local ? 'project' : github ? 'github' : 'id',
        mode: button ? 'open' : 'embed',
        source: !local ? source : undefined,
      }
      if (local && source) {
        const localDir = resolveStackBlitzDir(source, env)
        // 避免遍历到项目根目录以外
        if (!localDir.startsWith(ensureTrailingSlash(config.root))) {
          logger.warn(`Invalid stackblitz target directory ${ansis.yellow(source)}, in ${ansis.gray(env.relativePath)}`)
          return `<p>@[stackblitz](${source}) <em>Invalid target directory</em></p>`
        }
        // 校验本地目录是否存在
        if (!fs.existsSync(localDir)) {
          logger.error(`Local directory ${ansis.yellow(source)} does not exist`)
          return `<p>@[stackblitz](${source}) <em>Local directory ${source} does not exist</em></p>`
        }
        const files = loadFiles(localDir)
        let configFormat = ''
        let configContent = ''
        for (const file of CONFIG_FILE_NAME) {
          if (files[file]) {
            configFormat = file.split('.').pop()!
            configContent = files[file]
            delete files[file]
            break
          }
        }
        attrs.files = { ...attrs.files, ...files }
        deepMerge(attrs, parseConfig(configFormat, configContent))
      }
      const { success, data, error } = props.from === 'project'
        ? schema.safeParse(attrs)
        // github / id 仅校验 open & embed options
        : embedSchema.safeParse(attrs)
      // 校验配置是否符合 schema
      if (!success) {
        logger.error(`Error parsing config: ${z.prettifyError(error)}`)
        return `<p>Error parsing config <br> ${md.utils.escapeHtml(z.prettifyError(error))}</p>`
      }

      if (props.from === 'project')
        props.project = transformConfig(pick(data as StackBlitzConfig, projectKeys))

      props[props.mode] = transformConfig(omit(data as StackBlitzConfig, projectKeys))

      return `<VPStackBlitz${stringifyAttrs(props)} />`
    },
  })

  createContainerPlugin(md, 'stackblitz', {
    before(info, tokens, idx) {
      const files: Record<string, string> = {}
      let configFormat = ''
      let configContent = ''
      for (
        let i = idx + 1;
        !(tokens[i].nesting === -1 && tokens[i].type === 'container_stackblitz_close');
        ++i
      ) {
        if (tokens[i].type === 'fence') {
          const file = tokens[i].info.match(RE_CODE_TREE_TITLE)?.[1]
          if (file) {
            if (file === 'config') {
              configFormat = tokens[i].info.split(' ')[0].trim().toLowerCase()
              configContent = tokens[i].content
            }
            else {
              files[file] = tokens[i].content
            }
          }
        }
        tokens[i].hidden = true
        tokens[i].type = 'paragraph'
        tokens[i].content = ''
      }

      const { github, local, button, source: _, settingsTrigger, settingsAction, settingsClearConsole, ...attrs } = resolveAttrs(info)
      attrs.settings = {
        trigger: settingsTrigger,
        action: settingsAction,
        clearConsole: settingsClearConsole,
      }
      // 转换为数字
      transformNumberKeys(attrs)

      const { success, data, error } = schema.safeParse(deepMerge({}, attrs, parseConfig(configFormat, configContent)))
      // 校验配置是否符合 schema
      if (!success) {
        logger.error(`Error parsing config: ${z.prettifyError(error)}`)
        return `<p>[stackblitz] Error parsing config <br> ${md.utils.escapeHtml(z.prettifyError(error))}</p>`
      }
      data.files = { ...data.files, ...files }

      const mode = button ? 'open' : 'embed'
      const props: Record<string, any> = {
        from: 'project',
        mode,
        project: transformConfig(pick(data, projectKeys)),
        [mode]: transformConfig(omit(data, projectKeys)),
      }
      return `<VPStackBlitz${stringifyAttrs(props)} />`
    },
    after: () => '',
  })
}
