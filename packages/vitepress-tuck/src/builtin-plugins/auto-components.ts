import type { Options } from 'unplugin-vue-components'
import Components from 'unplugin-vue-components/vite'
import { definePlugin } from '../define-plugin.js'

export const autoComponentsPlugin = definePlugin((options?: Options) => ({
  name: 'auto-components',
  vite: { plugins: [
    Components({
      dts: 'node_modules/.vite/components.d.ts',
      include: [/\.vue$/, /\.vue\?vue/, /\.vue\.[tj]sx?\?vue/, /\.md$/, /\.md?import/],
      ...options,
    }),
  ] },
}))
