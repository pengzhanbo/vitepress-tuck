import { defineConfig, type UserConfig } from 'tsdown'
import vue from 'unplugin-vue/rolldown'

export default defineConfig([
  {
    entry: 'src/node/index.ts',
    outDir: 'dist/node',
    format: 'esm',
    dts: true,
    target: 'node20.19.0',
    fixedExtension: false,
  },
  ...['browser', 'ssr'].map(type => ({
    entry: 'src/client/index.ts',
    outDir: `dist/client/${type}`,
    format: 'esm',
    dts: { vue: true },
    plugins: [vue({ isProduction: true, ssr: type === 'ssr' })],
    platform: type === 'browser' ? 'browser' : 'node',
    fixedExtension: false,
    treeshake: true,
  } as UserConfig)),
])
