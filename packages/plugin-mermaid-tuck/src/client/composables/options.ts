import type { MermaidOptions } from '../types.js'

let options: MermaidOptions = {}

/**
 * Sets the runtime mermaid options used by the client renderer.
 *
 * 设置客户端渲染器使用的 mermaid 运行时选项。
 *
 * Typically called once during application setup to override the options
 * injected via the virtual module.
 *
 * 通常在应用初始化阶段调用一次，以覆盖通过虚拟模块注入的选项。
 *
 * @param opts - Mermaid runtime options / Mermaid 运行时选项
 * @example
 * ```ts
 * defineMermaidOptions({ theme: 'dark' })
 * ```
 */
export function defineMermaidOptions(opts: MermaidOptions) {
  options = opts
}

/**
 * Returns the currently configured mermaid runtime options.
 *
 * 返回当前已配置的 mermaid 运行时选项。
 *
 * @returns The active mermaid options / 当前生效的 mermaid 选项
 */
export function useMermaidOptions(): MermaidOptions {
  return options
}
