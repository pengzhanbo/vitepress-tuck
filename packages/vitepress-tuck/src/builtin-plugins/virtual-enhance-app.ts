import type { Plugin } from 'vitepress'
import { definePlugin } from '../define-plugin.js'

/**
 * Describes a single `enhanceApp` function to be injected into the virtual module.
 *
 * 描述要注入虚拟模块的单个 `enhanceApp` 函数。
 */
export interface EnhanceItem {
  /**
   * Plugin name used as the module specifier (`<name>/client`).
   *
   * 插件名称，用作模块标识符（`<name>/client`）。
   */
  moduleName: string
  /**
   * Name of the named export to import from `<moduleName>/client`.
   *
   * 从 `<moduleName>/client` 导入的具名导出名称。
   */
  exportName: string
}

/**
 * Options for generating the `virtual:enhance-app` virtual module.
 *
 * 生成 `virtual:enhance-app` 虚拟模块的选项。
 */
export interface EnhanceOptions {
  /**
   * Custom import statements to include in the generated module.
   *
   * 生成模块中包含的自定义 import 语句。
   */
  imports?: string[]
  /**
   * List of `enhanceApp` functions to import and invoke in the generated module.
   *
   * 生成模块中要导入并调用的 `enhanceApp` 函数列表。
   */
  enhances?: EnhanceItem[]
}

/**
 * Creates a Vite virtual module plugin that generates the
 * `virtual:enhance-app` module on the fly.
 *
 * The generated module imports every plugin's client entry and chains their
 * `enhanceApp(ctx)` calls inside a single default export. Users import this
 * module once in `.vitepress/theme/index.ts` to activate all plugin client
 * side effects.
 *
 * 创建 Vite 虚拟模块插件，动态生成 `virtual:enhance-app` 模块。
 *
 * 生成的模块导入每个插件的客户端入口，并在单个默认导出中链式调用它们的
 * `enhanceApp(ctx)`。用户在 `.vitepress/theme/index.ts` 中导入该模块一次，
 * 即可激活所有插件的客户端副作用。
 *
 * @param options - Options describing imports and enhance functions / 描述导入与 enhance 函数的选项
 * @returns A Vite `Plugin` instance / Vite `Plugin` 实例
 * @example
 * `Generated module (conceptual)`:
 * ```ts
 * import { enhanceApp as enhanceApp$0 } from 'vitepress-plugin-foo/client'
 * export default function enhanceApp(ctx) {
 *  enhanceApp$0(ctx)
 * }
 * ```
 */
export function virtualEnhanceApp(options: EnhanceOptions): Plugin {
  const moduleId = 'virtual:enhance-app'
  const resolveId = `\0${moduleId}`
  return {
    name: 'virtual-enhance-app',
    resolveId(id) {
      if (id === moduleId)
        return resolveId
    },
    load(id) {
      if (id === resolveId) {
        const { imports = [], enhances } = options
        const importList = [...imports]
        const enhanceCode: string[] = []
        let uuid = 0
        enhances?.forEach(({ moduleName, exportName }) => {
          // 重命名，避免冲突
          const alias = `${exportName}$${uuid++}`
          importList.push(`import { ${exportName} as ${alias} } from '${moduleName}/client'`)
          enhanceCode.push(`  await ${alias}(ctx)`)
        })
        return `${importList.join('\n')}\n\nexport default async function enhanceApp(ctx) {\n${enhanceCode.join('\n')}\n}\n`
      }
    },
  }
}

/**
 * Plugin factory wrapping `virtualEnhanceApp` as a vitepress-tuck plugin.
 *
 * 将 `virtualEnhanceApp` 包装为 vitepress-tuck 插件的工厂函数。
 *
 * @param options - Options forwarded to `virtualEnhanceApp` / 转发给 `virtualEnhanceApp` 的选项
 * @returns A `VitepressPlugin` that registers the virtual module / 注册虚拟模块的 `VitepressPlugin`
 */
export const virtualEnhanceAppPlugin = definePlugin((options?: EnhanceOptions) => ({
  name: 'virtual-enhance-app',
  vite: { plugins: [virtualEnhanceApp(options || {})] },
}))
