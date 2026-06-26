/**
 * npm-to container plugin
 *
 * 只写一个 npm 代码块，自动转为 代码块分组 [npm, pnpm, yarn, bun, deno]
 *
 * ::: npm-to
 * ``` sh
 * npm i -D vuepress-theme-plume
 * ```
 * :::
 * ↓ ↓ ↓ ↓ ↓
 * ::: code-group
 * ```sh [npm]
 * npm i -D vuepress-theme-plume
 * ```
 * ```sh [pnpm]
 * pnpm add -D vuepress-theme-plume
 * ```
 * ```sh [yarn]
 * yarn add -D vuepress-theme-plume
 * ```
 * :::
 */

import type { PluginWithOptions } from 'markdown-it'
import type { MarkdownEnv } from 'vitepress'
import type { CommandConfig, CommandConfigItem } from './npmTo.js'
import type { NpmToPackageManager, NpmToPluginOptions } from './types.js'
import { isArray } from '@pengzhanbo/utils'
import colors from 'ansis'
import { createContainerPlugin, resolveAttrs } from 'vitepress-plugin-toolkit'
import { logger } from './logger.js'
import { ALLOW_LIST, BOOL_FLAGS, DEFAULT_TABS, MANAGERS_CONFIG } from './npmTo.js'

/**
 * markdown-it plugin that registers the `::: npm-to` container and converts
 * a single npm/npx code block into a `code-group` with one tab per
 * configured package manager.
 *
 * 注册 `::: npm-to` 容器的 markdown-it 插件，将单个 npm/npx 代码块
 * 转换为按配置的包管理器各显示一个选项卡的 `code-group`。
 *
 * @param md - markdown-it instance to extend / 要扩展的 markdown-it 实例
 * @param options - Plugin options, either an array of manager names or an
 * options object / 插件选项，包管理器名称数组或选项对象
 * @example
 * ```ts
 * md.use(npmToMarkdownPlugin, { tabs: ['npm', 'pnpm', 'yarn'] })
 * ```
 */
export const npmToMarkdownPlugin: PluginWithOptions<NpmToPluginOptions> = (md, options = {}): void => {
  const opt = isArray(options) ? { tabs: options } : options
  const defaultTabs = opt.tabs?.length ? opt.tabs : DEFAULT_TABS

  createContainerPlugin(md, 'npm-to', {
    before: (info, tokens, idx, _opt, env: MarkdownEnv) => {
      const attrs = resolveAttrs<{ tabs?: string }>(info)
      const tabs = (attrs.tabs ? attrs.tabs.split(/,\s*/) : defaultTabs) as NpmToPackageManager[]
      const token = tokens[idx + 1]
      if (token.type === 'fence') {
        const content = token.content
        token.hidden = true
        token.type = 'text'
        token.content = ''
        // Split command line content, convert to multiple package manager commands
        const lines = content.split(/(\n|\s*&&\s*)/)
        const rendered = md.render(resolveNpmTo(lines, token.info.trim(), idx, tabs), env)
        // replaceAll callback only fires with VitePress code-group tab rendering
        /* v8 ignore next */
        return rendered.replaceAll(/(for|id)="tab-(\d+)"/g, (_, attr, num) => `${attr}="tab-${idx}-${num}"`)
      }
      // Invalid container warning
      logger.warn(`Invalid npm-to container in ${colors.gray(env.relativePath)}`)
      return ''
    },
    after: () => '',
  })
}

/**
 * Build a `::: code-group` block by translating each npm/npx command line
 * into the equivalent command for every requested package manager tab.
 *
 * 将每行 npm/npx 命令翻译为各请求包管理器选项卡的等价命令，
 * 构建一个 `::: code-group` 代码块。
 *
 * @param lines - Source command lines (may include separators like `\n` or `&&`)
 * / 源命令行（可能包含 `\n` 或 `&&` 等分隔符）
 * @param info - Fence info string of the original code block, reused for
 * each generated tab / 原代码块的 fence 信息字符串，复用于每个生成的选项卡
 * @param idx - Index of the container token, used to keep generated tab ids
 * unique / 容器 token 的索引，用于保证生成的选项卡 id 唯一
 * @param tabs - Package managers to generate tabs for / 要生成选项卡的包管理器列表
 * @returns Rendered `::: code-group` markdown string / 渲染后的 `::: code-group` markdown 字符串
 */
function resolveNpmTo(lines: string[], info: string, idx: number, tabs: NpmToPackageManager[]): string {
  tabs = validateTabs(tabs)
  const res: string[] = []
  const map: Record<string, LineParsed | false> = {}
  for (const tab of tabs) {
    const newLines: string[] = []
    for (const line of lines) {
      const config = findConfig(line)
      if (config && config[tab as keyof CommandConfig]) {
        // Parse and replace command arguments
        const parsed = (map[line] ??= parseLine(line)) as LineParsed
        const { cli, flags } = config[tab as keyof CommandConfig] as CommandConfigItem

        let newLine = `${parsed.env ? `${parsed.env} ` : ''}${cli}`
        if (parsed.args && flags) {
          let args = parsed.args
          for (const [key, value] of Object.entries(flags)) {
            args = args.replaceAll(key, value)
          }
          newLine += ` ${args.replace(/\s+-/g, ' -').trim()}`
        }

        if (parsed.cmd)
          newLine += ` ${parsed.cmd}`

        if (parsed.scriptArgs)
          newLine += ` ${parsed.scriptArgs}`
        newLines.push(newLine.trim())
      }
      else {
        newLines.push(line)
      }
    }
    // Concatenate as code-tabs format
    res.push(`\`\`\`${info} [${tab}]\n${newLines.join('')}\n\`\`\``)
  }
  return `:::code-group\n${res.join('\n')}\n:::`
}

/**
 * Find the matching {@link CommandConfig} for a command line by testing
 * it against each command pattern in {@link MANAGERS_CONFIG}.
 *
 * 通过将命令行与 {@link MANAGERS_CONFIG} 中每个命令的正则进行匹配，
 * 查找对应的 {@link CommandConfig}。
 *
 * @param line - Single command line / 单行命令
 * @returns Matching command config, or `undefined` when no pattern matches
 * / 匹配的命令配置，无匹配时返回 `undefined`
 */
function findConfig(line: string): CommandConfig | undefined {
  for (const { pattern, ...config } of Object.values(MANAGERS_CONFIG)) {
    if (pattern.test(line)) {
      return config
    }
  }
  return undefined
}

/**
 * Filter the requested tabs against {@link ALLOW_LIST} and fall back to
 * {@link DEFAULT_TABS} when none survive.
 *
 * 按 {@link ALLOW_LIST} 过滤请求的选项卡，若全部被过滤则回退到
 * {@link DEFAULT_TABS}。
 *
 * @param tabs - Requested package manager tabs / 请求的包管理器选项卡
 * @returns Validated, non-empty list of package manager tabs
 * / 校验后的非空包管理器选项卡列表
 */
function validateTabs(tabs: NpmToPackageManager[]): NpmToPackageManager[] {
  tabs = tabs.filter(tab => ALLOW_LIST.includes(tab))
  if (tabs.length === 0) {
    return DEFAULT_TABS
  }
  return tabs
}

/**
 * Result of parsing a single npm/npx command line.
 *
 * 单行 npm/npx 命令的解析结果。
 */
interface LineParsed {
  /** Environment variable prefix, such as `NODE_ENV=production` / 环境变量前缀，例如 `NODE_ENV=production` */
  env: string
  /** CLI tool name, such as `npm` or `npx` / CLI 工具名称，例如 `npm` 或 `npx` */
  cli: string
  /** Command or script name, such as `install` or a `run` script / 命令或脚本名，例如 `install` 或 `run` 脚本 */
  cmd: string
  /** Flags and arguments portion of the command / 命令的标志与参数部分 */
  args?: string
  /** Arguments passed through `--` to the underlying script / 通过 `--` 传递给底层脚本的参数 */
  scriptArgs?: string
}

/**
 * Regex for parsing npm/npx commands. Captures an optional environment
 * prefix, the `npm`/`npx` binary, and the remaining command text.
 *
 * 解析 npm/npx 命令的正则。捕获可选的环境变量前缀、`npm`/`npx`
 * 可执行文件名以及剩余的命令文本。
 */
const LINE_REG = /(.*)(npm|npx)\s+(.*)/

/**
 * Parse a single npm/npx command line into its component parts:
 * environment prefix, CLI tool, command, args, and script args.
 *
 * 将单行 npm/npx 命令解析为各组成部分：环境变量前缀、CLI 工具、
 * 命令、参数以及脚本参数。
 *
 * @param line - Command line to parse / 要解析的命令行
 * @returns Parsed result, or `false` when the line is not an npm/npx command
 * / 解析结果，非 npm/npx 命令时返回 `false`
 * @example
 * ```ts
 * parseLine('NODE_ENV=production npm run build -- --silent')
 * // { env: 'NODE_ENV=production', cli: 'npm run', cmd: 'build', scriptArgs: '--silent' }
 * ```
 */
export function parseLine(line: string): false | LineParsed {
  const match = line.match(LINE_REG)
  if (!match)
    return false

  const [, env, cli, rest] = match
  const idx = rest.trim().indexOf(' ')
  if (cli === 'npx') {
    let cmd = ''
    let scriptArgs = ''
    if (idx !== -1) {
      cmd = rest.slice(0, idx)
      scriptArgs = rest.slice(idx + 1).trim()
    }
    else {
      cmd = rest
    }
    return { env, cli, cmd, scriptArgs }
  }

  if (idx === -1)
    return { env, cli: `${cli} ${rest.trim()}`, cmd: '' }

  return { env, cli: `${cli} ${rest.slice(0, idx)}`, ...parseArgs(rest.slice(idx + 1)) }
}

/**
 * Parse the argument portion of an npm command, separating the command
 * name, flags/args, and script args (after `--`).
 *
 * 解析 npm 命令的参数部分，区分命令名、标志/参数以及脚本参数
 * （`--` 之后的部分）。
 *
 * Handles quoted command names and boolean flags listed in
 * {@link BOOL_FLAGS}.
 *
 * 处理带引号的命令名以及 {@link BOOL_FLAGS} 中列出的布尔标志。
 *
 * @param line - Argument portion of the command / 命令的参数部分
 * @returns Object with `cmd`, `args`, and `scriptArgs` fields
 * / 包含 `cmd`、`args` 和 `scriptArgs` 字段的对象
 */
function parseArgs(line: string): { cmd: string, args?: string, scriptArgs?: string } {
  line = line?.trim()

  const [npmArgs, scriptArgs] = line.split(/\s+--\s+/)
  let cmd = ''
  let args = ''
  if (npmArgs[0] !== '-') {
    // Process command and args
    if (npmArgs[0] === '"' || npmArgs[0] === '\'') {
      const idx = npmArgs.slice(1).indexOf(npmArgs[0])
      cmd = npmArgs.slice(0, idx + 2)
      args = npmArgs.slice(idx + 2)
    }
    else {
      const idx = npmArgs.indexOf(' -')
      if (idx === -1) {
        cmd = npmArgs
      }
      else {
        cmd = npmArgs.slice(0, idx)
        args = npmArgs.slice(idx + 1)
      }
    }
  }
  else {
    // Process args only
    let newLine = ''
    let value = ''
    let isQuote = false
    let isBool = false
    let isNextValue = false
    let quote = ''
    for (let i = 0; i < npmArgs.length; i++) {
      const v = npmArgs[i]
      if (!isQuote && (v === '"' || v === '\'')) {
        quote = v
        isQuote = true
        value += v
      }
      else if (isQuote && v === quote) {
        isQuote = false
        value += v
      }
      else if ((v === ' ' || v === '=' || i === npmArgs.length - 1) && !isQuote && value) {
        if (i === npmArgs.length - 1) {
          value += v
        }

        const isKey = value[0] === '-'
        if (isKey) {
          isBool = BOOL_FLAGS.includes(value)
          isNextValue = !isBool
        }
        if (!isKey && !isNextValue) {
          cmd += ` ${value}`
        }
        else {
          newLine += `${value}${i !== npmArgs.length - 1 ? v : ''}`
          if (!isKey && isNextValue) {
            isNextValue = false
          }
        }
        value = ''
      }
      else {
        value += v
      }
    }
    args = newLine
  }
  return { cmd: cmd.trim(), args: args.trim(), scriptArgs }
}
