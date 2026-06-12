import type { PluginWithOptions } from 'markdown-it'
import type { PlantumlFormat } from './types.js'
import ansis from 'ansis'
import { genHash } from 'vitepress-plugin-toolkit'
import { getVitepressConfig, isBuild } from 'vitepress-plugin-toolkit'
import { SERVER_PREFIX } from './constants.js'
import { cache, getFilename, getOutputPath } from './utils.js'

export const plantumlMarkdownPlugin: PluginWithOptions<PlantumlFormat> = (md, format = 'svg') => {
  const config = getVitepressConfig()
  const cacheDir = config.cacheDir
  const name = 'plantuml'
  const supportedFormats = ['svg', 'png']

  const rawFence = md.renderer.rules.fence!
  md.renderer.rules.fence = (...args) => {
    const [tokens, idx, _, env] = args
    const token = tokens[idx]
    const { content, info } = token
    const code = rawFence(...args)

    if (!info.trim().startsWith(name))
      return code

    const resolvedFormat = (info.trim().slice(name.length).trim() || format) as PlantumlFormat
    if (resolvedFormat && !supportedFormats.includes(resolvedFormat)) {
      config.logger.warn(`PlantUML format ${ansis.red(resolvedFormat)} is not supported, please use ${ansis.green(supportedFormats.join(', '))}`)
      return code
    }

    const hash = genHash(content, 12)
    const light = getFilename(hash, resolvedFormat, false)
    const dark = getFilename(hash, resolvedFormat, true)

    let cached = cache.get(light)
    if (!cached)
      cache.set(light, cached = { content, paths: new Set() })
    cached.paths.add(env.path)

    cached = cache.get(dark)
    if (!cached)
      cache.set(dark, cached = { content, paths: new Set() })

    cached.paths.add(env.path)

    // 开发环境使用 `:src=` 包装为字符串变量，避免被 vite 处理为 `import`
    const lightUrl = isBuild
      ? `src="${getOutputPath(cacheDir, light)}"`
      : `:src="\`${SERVER_PREFIX}${light}\`"`
    const darkUrl = isBuild
      ? `src="${getOutputPath(cacheDir, dark)}"`
      : `:src="\`${SERVER_PREFIX}${dark}\`"`

    return `<VPPlantUML><img ${lightUrl} alt="PlantUML light" class="light"><img ${darkUrl} alt="PlantUML dark" class="dark"><template #source>${code}</template></VPPlantUML>`
  }
}
