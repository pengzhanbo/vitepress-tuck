import type { CodeTreeFile, CodeTreeFileLoader } from './types.js'
import fs from 'node:fs'
import path from 'node:path'
import { ensureLeadingSlash, isFunction, slash } from '@pengzhanbo/utils'
import { bundledLanguagesInfo } from 'shiki'
import { createMatcher, EXTENSION_IMAGES, getVitepressConfig } from 'vitepress-plugin-toolkit'

const supportedTextExts = bundledLanguagesInfo
  .map(({ id, aliases = [] }) => [id, ...aliases])
  .flat()

const FENCE = '`'.repeat(6)

const codeFence = (file: CodeTreeFile, lang?: string) => `${FENCE}${lang ?? file.extname} [${file.path}]\n${fs.readFileSync(file.absolutePath, 'utf-8').trim()}\n${FENCE}`

const defaultLoader: CodeTreeFileLoader[] = [
  {
    filter: ({ basename }) => basename === '.editorconfig',
    load: file => codeFence(file, 'toml'),
  },
  // 加载 dot 开头的文件
  {
    filter: ['.git*', '.env*', '.*ignore', '.npmrc'].map(item => `**/${item}`),
    load: file => codeFence(file, 'txt'),
  },
  // .XXXrc 格式的配置文件，比如 .eslintrc， 此类文件通常被当做 json 处理
  {
    filter: ({ basename }) => basename[0] === '.' && basename.endsWith('rc'),
    load: file => codeFence(file, 'json'),
  },
  // 图片文件
  {
    filter: ({ extname }) => EXTENSION_IMAGES.includes(extname),
    load: (file) => {
      const config = getVitepressConfig()
      const publicDir = path.join(config.srcDir, 'public')
      const src = file.absolutePath.startsWith(publicDir) ? ensureLeadingSlash(file.absolutePath.replace(publicDir, '')) : file.relativePath
      return `<img src="${slash(src)}" alt="${file.basename}" data-filepath="${file.path}">`
    },
  },
  // 已知的能被 shiki 语法高亮的文件类型
  {
    filter: ({ extname }) => supportedTextExts.includes(extname),
    load: codeFence,
  },
]

export function initLoaders(loaders?: CodeTreeFileLoader[]) {
  return [...loaders || [], ...defaultLoader].map(item => ({
    filter: isFunction(item.filter) ? item.filter : undefined,
    matcher: !isFunction(item.filter) ? createMatcher(item.filter) : undefined,
    load: item.load,
  }))
}
