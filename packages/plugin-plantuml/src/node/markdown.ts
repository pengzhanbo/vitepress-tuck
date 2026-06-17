import type { PluginWithOptions } from 'markdown-it'
import type { PlantumlFormat, PlantumlMarkdownPluginOptions } from './types.js'
import ansis from 'ansis'
import { genHash } from 'vitepress-plugin-toolkit'
import { getVitepressConfig, isBuild } from 'vitepress-plugin-toolkit'
import { SERVER_PREFIX } from './constants.js'
import { cache, getFilename, getOutputPath } from './utils.js'

/**
 * Markdown-it plugin that transforms PlantUML fenced code blocks into renderable images.
 *
 * Markdown-it 插件，将 PlantUML 围栏代码块转换为可渲染的图片元素。
 *
 * 该插件拦截以 `plantuml` 开头的代码块，根据内容生成哈希并缓存，
 * 在开发环境通过本地服务器提供图片，在构建环境直接引用输出路径。
 * 支持亮色和暗色双主题输出。
 *
 * @param md - The markdown-it instance / markdown-it 实例
 * @param options - Plugin options / 插件选项
 * @param options.format - Default output format, defaults to `'svg'` / 默认输出格式，默认为 `'svg'`
 *
 * @example
 * ```ts
 * import MarkdownIt from 'markdown-it'
 * import { plantumlMarkdownPlugin } from 'vitepress-plugin-plantuml/node'
 *
 * const md = new MarkdownIt()
 * md.use(plantumlMarkdownPlugin, { format: 'svg' })
 * ```
 */
export const plantumlMarkdownPlugin: PluginWithOptions<PlantumlMarkdownPluginOptions> = (md, options = {}) => {
  const { format = 'svg' } = options
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
    // In dev mode, wrap with `:src=` to avoid Vite treating it as an import
    const lightUrl = isBuild
      ? `src="${getOutputPath(cacheDir, light)}"`
      : `:src="\`${SERVER_PREFIX}${light}\`"`
    const darkUrl = isBuild
      ? `src="${getOutputPath(cacheDir, dark)}"`
      : `:src="\`${SERVER_PREFIX}${dark}\`"`

    return `<VPPlantUML><img ${lightUrl} alt="PlantUML light" class="light"><img ${darkUrl} alt="PlantUML dark" class="dark"><template #source>${code}</template></VPPlantUML>`
  }
}
