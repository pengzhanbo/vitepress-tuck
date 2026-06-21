import { createLogger } from 'vitepress-plugin-toolkit'

/**
 * Shared logger instance for the `vitepress-plugin-code-tree` package.
 *
 * Used to emit warnings and informational messages scoped under the
 * `vitepress-plugin-code-tree` namespace during markdown processing.
 *
 * `vitepress-plugin-code-tree` 包共享的日志实例。
 *
 * 用于在 markdown 处理过程中，输出以 `vitepress-plugin-code-tree`
 * 为命名空间的警告和信息消息。
 *
 * @example
 * ```ts
 * logger.warn('Invalid code-tree container in path/to/file.md')
 * ```
 */
export const logger = createLogger('vitepress-plugin-code-tree')
