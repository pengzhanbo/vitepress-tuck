import { isBoolean } from '@pengzhanbo/utils'
import ansis from 'ansis'

/**
 * Log type for categorizing log messages.
 *
 * 用于分类日志消息的日志类型。
 */
export type LogType = 'info' | 'warn' | 'error' | 'debug'

/**
 * Log level controlling the verbosity of the logger.
 *
 * 控制日志输出详细程度的日志级别。
 */
export type LogLevel = LogType | 'silent'

/**
 * Logger interface
 *
 * 日志接口
 */
export interface Logger {
  /**
   * Debug log
   *
   * 调试日志
   */
  debug: (msg: string, level?: boolean | LogLevel) => void
  /**
   * Info log
   *
   * 信息日志
   */
  info: (msg: string, level?: boolean | LogLevel) => void
  /**
   * Warning log
   *
   * 警告日志
   */
  warn: (msg: string, level?: boolean | LogLevel) => void
  /**
   * Error log
   *
   * 错误日志
   */
  error: (msg: string, level?: boolean | LogLevel) => void
}

/**
 * Log levels mapping
 *
 * 日志级别映射
 */
export const logLevels: Record<LogLevel, number> = {
  silent: 0,
  error: 1,
  warn: 2,
  info: 3,
  debug: 4,
}

/**
 * Create logger instance
 *
 * 创建日志实例
 *
 * @param prefix - Log prefix / 日志前缀
 * @param defaultLevel - Default log level / 默认日志级别
 * @returns Logger instance / 日志实例
 * @example
 * ```ts
 * const logger = createLogger('my-plugin', 'info')
 * logger.info('Starting build')
 * logger.warn('Deprecated feature used')
 * logger.debug('Verbose details', 'debug')
 * ```
 */
export function createLogger(
  prefix: string,
  defaultLevel: LogLevel = 'info',
): Logger {
  prefix = `[${prefix}]`

  /**
   * Output log
   *
   * 输出日志
   */
  function output(type: LogType, msg: string, level: boolean | LogLevel) {
    level = isBoolean(level) ? (level ? defaultLevel : 'error') : level
    const thresh = logLevels[level]
    if (thresh >= logLevels[type]) {
      const method = type === 'info' || type === 'debug' ? 'log' : type
      const tag
        = type === 'debug'
          ? ansis.magenta.bold(prefix)
          : type === 'info'
            ? ansis.cyan.bold(prefix)
            : type === 'warn'
              ? ansis.yellow.bold(prefix)
              : ansis.red.bold(prefix)
      const format = `${ansis.dim(
        new Date().toLocaleTimeString(),
      )} ${tag} ${msg}`

      // eslint-disable-next-line no-console
      console[method](format)
    }
  }
  const logger: Logger = {
    debug(msg, level = defaultLevel) {
      output('debug', msg, level)
    },
    info(msg, level = defaultLevel) {
      output('info', msg, level)
    },
    warn(msg, level = defaultLevel) {
      output('warn', msg, level)
    },
    error(msg, level = defaultLevel) {
      output('error', msg, level)
    },
  }

  return logger
}
