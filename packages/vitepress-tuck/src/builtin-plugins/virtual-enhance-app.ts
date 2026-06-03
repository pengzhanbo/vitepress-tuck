import type { Plugin } from 'vitepress'
import { definePlugin } from '../define-plugin.js'

export interface EnhanceItem {
  moduleName: string
  exportName: string
}

export interface EnhanceOptions {
  imports?: string[]
  enhances?: EnhanceItem[]
}

let uuid = 0

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
        const enhanceCode: string[] = []
        enhances?.forEach(({ moduleName, exportName }) => {
          // 重命名，避免冲突
          const alias = `${exportName}$${uuid++}`
          imports.push(`import { ${exportName} as ${alias} } from '${moduleName}/client'`)
          enhanceCode.push(`  ${alias}(ctx)`)
        })
        return `${imports.join('\n')}\n
export default function enhanceApp(ctx) {
${enhanceCode.join('\n')}
}
`
      }
    },
  }
}

export const virtualEnhanceAppPlugin = definePlugin((options?: EnhanceOptions) => ({
  name: 'virtual-enhance-app',
  vite: { plugins: [virtualEnhanceApp(options || {})] },
}))
