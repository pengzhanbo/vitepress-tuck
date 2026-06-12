import { defineConfig, type UserConfig } from 'tsdown'
import vue from 'unplugin-vue/rolldown'

export default defineConfig([
  {
    entry: 'src/node/index.ts',
    clean: true,
    outDir: 'dist/node',
    format: 'esm',
    dts: true,
    target: 'node20.19.0',
    fixedExtension: false,
    deps: { neverBundle: ['vite'] },
  },
  ...['browser', 'ssr'].map(type => ({
    entry: 'src/client/index.ts',
    clean: true,
    outDir: `dist/client/${type}`,
    format: 'esm',
    dts: { vue: true },
    deps: { neverBundle: ['virtual:vitepress-plantuml'] },
    platform: type === 'browser' ? 'browser' : 'node',
    outputOptions: {
      banner: type === 'browser'
        ? 'import "virtual:tuck-icons.css"\nimport "../style.css"'
        : undefined,
    },
    fixedExtension: false,
    plugins: [vue({ isProduction: true, ssr: type === 'ssr' })],
  } as UserConfig)),
])
