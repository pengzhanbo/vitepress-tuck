import type { ResolvedConfig, UserConfig } from 'tsdown'
import fs from 'node:fs'
import { mergeConfig } from 'tsdown'
import vue from 'unplugin-vue/rolldown'
import { strip } from './strip-comments'

const baseConfig: UserConfig = {
  clean: true,
  format: 'esm',
  fixedExtension: false,
}

interface Options {
  mode?: 'only-node' | 'only-node-deep' | 'normal'
  inlineStyle?: boolean
  styleAssets?: string[]
  nodeConfig?: UserConfig
  clientConfig?: UserConfig
  browserConfig?: UserConfig
  ssrConfig?: UserConfig
}

export function build({
  mode = 'normal',
  inlineStyle = true,
  styleAssets = [],
  nodeConfig = {},
  clientConfig = {},
  browserConfig = {},
  ssrConfig = {},
}: Options = {}): UserConfig | UserConfig[] {
  if (mode === 'only-node' || mode === 'only-node-deep') {
    return mergeConfig({}, baseConfig, {
      entry: mode === 'only-node-deep' ? 'src/node/index.ts' : 'src/index.ts',
      outDir: mode === 'only-node-deep' ? 'dist/node' : 'dist',
      target: 'node20.19.0',
      dts: true,
      onSuccess,
    }, nodeConfig)
  }

  if (inlineStyle)
    styleAssets = ['../style.css', ...styleAssets]

  return [
    // node 环境
    mergeConfig({}, baseConfig, {
      entry: 'src/node/index.ts',
      outDir: 'dist/node',
      dts: true,
      target: 'node20.19.0',
      onSuccess,
    }, nodeConfig),
    // ssr 环境
    mergeConfig({}, baseConfig, {
      entry: 'src/client/index.ts',
      outDir: `dist/client/ssr`,
      platform: 'node',
      dts: { vue: true },
      plugins: [vue({ isProduction: true, ssr: true })],
      onSuccess,
    }, clientConfig, ssrConfig),
    // browser 环境
    mergeConfig({}, baseConfig, {
      entry: 'src/client/index.ts',
      outDir: `dist/client/browser`,
      platform: 'browser',
      dts: { vue: true },
      plugins: [vue({ isProduction: true, ssr: false })],
      outputOptions: {
        banner: styleAssets.map(asset => `import "${asset}"`).join('\n') || undefined,
      },
      onSuccess,
    }, clientConfig, browserConfig),
  ]
}

export async function onSuccess({ entry, outDir, watch }: ResolvedConfig): Promise<void> {
  if (watch)
    return
  const files = Object.keys(entry).map(key => `${outDir}/${key}.js`)
  await Promise.all(files.map(prettyFile))
}

async function prettyFile(file: string) {
  const content = await fs.promises.readFile(file, 'utf-8')
  await fs.promises.writeFile(file, strip(content), 'utf-8')
}
