import type { MarkdownEnv } from 'vitepress'
import fs from 'node:fs'
import path from 'node:path'
import { attempt, clearUndefined } from '@pengzhanbo/utils'
import { safeDestr } from 'destr'
import { globSync } from 'tinyglobby'
import { createLogger, getVitepressConfig } from 'vitepress-plugin-toolkit'
import { parse } from 'yaml'

/** Logger instance with the `vitepress-plugin-stackblitz` prefix. */
export const logger = createLogger('vitepress-plugin-stackblitz')

/**
 * Parse a StackBlitz configuration file content based on its format.
 *
 * Supports JSON, YAML, and YML formats. On parse errors, logs the error
 * and returns an empty object.
 *
 * 根据格式解析 StackBlitz 配置文件内容。支持 JSON、YAML 和 YML 格式。
 * 解析失败时会记录错误并返回空对象。
 *
 * @param format - The config file format (`json`, `yaml`, or `yml`)
 * @param content - The raw file content to parse
 * @returns The parsed configuration object
 */
export function parseConfig(format: string, content: string) {
  if (!content)
    return {}

  if (format === 'json') {
    const [error, config] = attempt(safeDestr, content)
    if (error) {
      logger.error(`Error parsing JSON config: ${error.message}`)
    }
    if (config)
      delete (config as any).$schema

    return config || {}
  }
  if (format === 'yaml' || format === 'yml') {
    const [error, config] = attempt(() => parse(content))
    if (error) {
      logger.error(`Error parsing YAML config: ${error.message}`)
    }
    return config || {}
  }

  logger.error(`Unknown config format: ${format}`)

  return {}
}

/**
 * Transform a configuration object into a URL-encoded JSON string
 * for use as a StackBlitz SDK parameter.
 *
 * 将配置对象转换为 URL 编码的 JSON 字符串，用于 StackBlitz SDK 参数。
 *
 * @param config - The configuration object to transform
 * @returns URL-encoded JSON string with undefined values removed
 */
export function transformConfig(config: Record<string, any>): string {
  return encodeURIComponent(JSON.stringify(clearUndefined(config)))
}

/**
 * Resolve the target directory for the embed syntax based on its prefix.
 *
 * 根据前缀解析嵌入语法的目标目录。
 *
 * Supports three path prefixes:
 * - `@`: Relative to VitePress `srcDir` / 相对于 VitePress `srcDir`
 * - `/`: Relative to VitePress project root / 相对于 VitePress 项目根目录
 * - (none): Relative to the current markdown file's directory / 相对于当前 markdown 文件所在目录
 *
 * @param dir - The directory path from the embed syntax / 嵌入语法中的目录路径
 * @param env - The markdown-it environment / markdown-it 环境
 * @returns Absolute path to the resolved directory / 解析后的目录绝对路径
 */
export function resolveStackBlitzDir(dir: string, env: MarkdownEnv) {
  const config = getVitepressConfig()
  if (dir[0] === '@')
    return path.join(config.srcDir, dir.slice(1))

  if (dir[0] === '/')
    return path.join(config.root, dir.slice(1))

  const dirname = path.dirname(env.path)
  return path.join(dirname, dir)
}

/**
 * Load all files from a directory recursively as a `Record<filename, content>`.
 *
 * Ignores `node_modules` and `.DS_Store` files. Dotfiles are included.
 *
 * 递归加载目录下所有文件，返回 `Record<文件名, 内容>`。忽略 `node_modules` 和 `.DS_Store`，包含点文件。
 *
 * @param cwd - The root directory to scan
 * @returns A record mapping relative file paths to their contents
 */
export function loadFiles(cwd: string) {
  return Object.fromEntries(globSync('**/*', {
    cwd,
    ignore: ['**/node_modules/**', '**/.DS_Store'],
    onlyFiles: true,
    dot: true,
  }).map(file => [file, fs.readFileSync(path.join(cwd, file), 'utf-8')]))
}
