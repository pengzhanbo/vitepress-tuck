import type { ResolvedConfig, UserConfig } from 'tsdown'
import fs from 'node:fs'
import { mergeConfig } from 'tsdown'
import vue from 'unplugin-vue/rolldown'
import { strip, stripRegionComments } from './strip-comments'

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
  await Promise.all(Object.keys(entry).map(async (name) => {
    // 移除 js 文件中的注释，仅保留代码本身
    // IDE 提示可直接从 dts 文件中读取注释
    const file = `${outDir}/${name}.js`
    await fs.promises.writeFile(file, strip(await fs.promises.readFile(file, 'utf-8')))

    // rolldown 会生成一些无关的 region 注释包围代码标识它们属于哪个源文件
    // 可以直接安全的移除它们
    const dts = `${outDir}/${name}.d.ts`
    await fs.promises.writeFile(dts, stripRegionComments(await fs.promises.readFile(dts, 'utf-8')))
  }))
}
