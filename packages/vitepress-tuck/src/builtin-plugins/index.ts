import type { VitepressPlugin } from '../types.js'
import type { EnhanceOptions } from './virtual-enhance-app.js'

import { virtualEnhanceAppPlugin } from './virtual-enhance-app.js'

interface BuiltinPluginOptions {
  enhanceApp?: EnhanceOptions
}

export function builtinPlugins(options: BuiltinPluginOptions): VitepressPlugin[] {
  return [
    virtualEnhanceAppPlugin(options.enhanceApp),
    () => ({
      name: 'vitepress-tuck:deps',
      vite: {
        ssr: {
          noExternal: ['vitepress-plugin-toolkit'],
        },
      },
    }),
  ]
}
