import { createLogger } from 'vitepress-plugin-toolkit'

/**
 * Shared logger instance for the `vitepress-plugin-npm-to` package.
 *
 * Used to emit warnings and informational messages scoped under the
 * `vitepress-plugin-npm-to` namespace during markdown processing.
 *
 * `vitepress-plugin-npm-to` 包共享的日志实例。
 *
 * 用于在 markdown 处理过程中，输出以 `vitepress-plugin-npm-to`
 * 为命名空间的警告和信息消息。
 *
 * @example
 * ```ts
 * logger.warn('Invalid npm-to container in path/to/file.md')
 * ```
 */
export const logger = createLogger('vitepress-plugin-npm-to')
