import type { SiteConfig } from 'vitepress'

/**
 * Get the current VitePress site configuration from the global context.
 *
 * 从全局上下文获取当前的 VitePress 站点配置。
 *
 * VitePress stores its resolved `SiteConfig` on `globalThis.VITEPRESS_CONFIG`
 * during the build and dev lifecycle. This helper reads that value and throws
 * when it has not been initialized yet.
 *
 * VitePress 在构建和开发生命周期中将解析后的 `SiteConfig` 存储在
 * `globalThis.VITEPRESS_CONFIG` 上。该辅助函数读取该值，未初始化时抛出错误。
 *
 * @returns The current VitePress site config / 当前的 VitePress 站点配置
 * @throws {Error} When VITEPRESS_CONFIG is not initialized / VITEPRESS_CONFIG 未初始化时
 * @example
 * ```ts
 * const config = getVitepressConfig()
 * console.log(config.userConfig.title)
 * ```
 */
export function getVitepressConfig(): SiteConfig {
  const config = (globalThis as any).VITEPRESS_CONFIG
  if (!config)
    throw new Error('VITEPRESS_CONFIG is not initialized')
  return config
}
