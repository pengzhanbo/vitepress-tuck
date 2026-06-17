import { createLogger } from 'vitepress-plugin-toolkit'

/**
 * Shared logger instance for the video plugin, used to emit warnings and info
 * messages during markdown parsing and Vite plugin execution.
 *
 * 视频插件共享的日志实例，用于在 markdown 解析和 Vite 插件执行过程中
 * 输出警告与提示信息。
 */
export const logger = createLogger('vitepress-plugin-video')

/**
 * Convert a time string into the equivalent total seconds.
 *
 * 将时间字符串转换为对应的总秒数。
 *
 * Supports two input formats:
 * - A numeric string such as `"90"` or `"90.5"`, interpreted as seconds directly.
 * - A colon-separated string such as `"mm:ss"` or `"hh:mm:ss"`, where segments are
 *   interpreted from right to left as seconds, minutes, and hours.
 *
 * 支持两种输入格式：
 * - 纯数字字符串（如 `"90"` 或 `"90.5"`），直接作为秒数解析。
 * - 冒号分隔字符串（如 `"mm:ss"` 或 `"hh:mm:ss"`），从右到左依次解析为
 *   秒、分、时。
 *
 * @param time - Time string to convert / 待转换的时间字符串
 * @returns Total seconds represented by the input string / 输入字符串对应的总秒数
 * @example
 * // Returns 90
 * timeToSeconds('90')
 * @example
 * // Returns 90 (1 minute 30 seconds)
 * timeToSeconds('01:30')
 * @example
 * // Returns 3661 (1 hour 1 minute 1 second)
 * timeToSeconds('01:01:01')
 */
export function timeToSeconds(time: string): number {
  if (!time)
    return 0

  if (Number.parseFloat(time) === Number(time))
    return Number(time)

  const [s, m, h = 0] = time
    .split(/\s*:\s*/)
    .reverse()
    .map(n => Number(n) || 0)

  return s + m * 60 + h * 3600
}
