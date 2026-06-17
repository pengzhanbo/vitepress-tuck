import type { ResolvedConfig } from 'vite'
import type { Plugin } from 'vitepress'
import type { PlantumlAllFormat, PlantumlVitePluginOptions } from './types.js'
import { Buffer } from 'node:buffer'
import fs, { createReadStream } from 'node:fs'
import path from 'node:path'
import { attemptAsync, indent, remove } from '@pengzhanbo/utils'
import { optimize } from 'svgo'
import { createLocales, iconPlugin, isBuild } from 'vitepress-plugin-toolkit'
import { fallbackPNG, fallbackSVG, OUTPUT_DIR, plantumlUrl, SERVER_PREFIX } from './constants.js'
import { builtinLocales } from './locales.js'
import { cache, encodePlantuml, getOutputPath, parseFilename } from './utils.js'

/**
 * Create the Vite plugin set for the PlantUML plugin.
 *
 * 为 PlantUML 插件创建 Vite 插件集合。
 *
 * 返回的插件集合包含三个部分：
 * 1. 虚拟模块插件，提供客户端所需的多语言数据；
 * 2. 图标插件，注册下载、全屏、缩放等内置 SVG 图标；
 * 3. 根据当前环境选择开发服务器插件或构建插件，负责图片的生成与提供。
 *
 * @param options - Plugin options / 插件选项
 * @returns Array of Vite plugins / Vite 插件数组
 */
export function plantumlVitePlugin(options: PlantumlVitePluginOptions = {}): Plugin[] {
  const moduleId = 'virtual:vitepress-plantuml'
  const resolveId = `\0${moduleId}`
  return [
    {
      name: 'vitepress:plantuml-locales',
      resolveId(id) {
        if (id === moduleId)
          return resolveId
      },
      load(id) {
        if (id === resolveId) {
          return `export const locales = ${JSON.stringify(createLocales(builtinLocales, options.locales))}
`
        }
      },
    },
    iconPlugin([{
      name: 'download',
      svg: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-6 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z'/%3E%3C/svg%3E")`,
    }, {
      name: 'fullscreen',
      svg: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M3 21v-5h2v3h3v2zm13 0v-2h3v-3h2v5zM3 8V3h5v2H5v3zm16 0V5h-3V3h5v5z'/%3E%3C/svg%3E")`,
    }, {
      name: 'zoom-in',
      svg: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Ccircle cx='11' cy='11' r='8'/%3E%3Cpath d='m21 21l-4.35-4.35M11 8v6m-3-3h6'/%3E%3C/g%3E%3C/svg%3E")`,
    }, {
      name: 'zoom-out',
      svg: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Ccircle cx='11' cy='11' r='8'/%3E%3Cpath d='m21 21l-4.35-4.35M8 11h6'/%3E%3C/g%3E%3C/svg%3E")`,
    }, {
      name: 'zoom-reset',
      svg: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M2 12a9 9 0 0 0 9 9c2.39 0 4.68-.94 6.4-2.6l-1.5-1.5A6.7 6.7 0 0 1 11 19c-6.24 0-9.36-7.54-4.95-11.95S18 5.77 18 12h-3l4 4h.1l3.9-4h-3a9 9 0 0 0-18 0'/%3E%3C/svg%3E")`,
    }]),
    isBuild ? plantumlVitePluginWithBuild(options) : plantumlVitePluginWithServer(options),
  ]
}

/**
 * Create the dev-server Vite plugin for PlantUML.
 *
 * 创建 PlantUML 的开发服务器 Vite 插件。
 *
 * 在开发环境下，通过 Vite 开发服务器的中间件机制拦截以
 * `SERVER_PREFIX` 开头的请求，按需从 PlantUML 服务器获取图片并缓存到本地。
 *
 * @param options - Plugin options / 插件选项
 * @returns Vite plugin instance / Vite 插件实例
 */
function plantumlVitePluginWithServer(options: PlantumlVitePluginOptions = {}): Plugin {
  let config!: ResolvedConfig
  return {
    name: 'vitepress:plantuml',
    configResolved(_config) {
      config = _config
      fs.mkdirSync(path.join(config.cacheDir, OUTPUT_DIR), { recursive: true })
    },
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url!
        if (!url.startsWith(SERVER_PREFIX))
          return next()

        const filename = url.slice(SERVER_PREFIX.length)
        const { format, isDark } = parseFilename(filename)
        const cached = cache.get(filename)
        if (!cached)
          return next()

        const type = format === 'svg' ? 'image/svg+xml' : `image/${format}`
        const outputPath = getOutputPath(config.cacheDir, filename)

        if (fs.existsSync(outputPath)) {
          res.setHeader('Content-Type', type)
          return createReadStream(outputPath).pipe(res)
        }

        const promise = cached.promise ?? attemptAsync(async () => {
          const buffer = await fetchPlantuml(cached.content, (isDark ? 'd' : '') + format as PlantumlAllFormat, options.serverURL)
          buffer && await fs.promises.writeFile(outputPath, buffer)
          return buffer
        })
        const [, buffer] = await promise
        if (!buffer) {
          config.logger.error(`Failed to render: \n${indent(cached.content, ' '.repeat(4))}`)
          cached.promise = null
          return next()
        }
        res.setHeader('Content-Type', type)
        return createReadStream(outputPath).pipe(res)
      })
    },
  }
}

/**
 * Create the build-time Vite plugin for PlantUML.
 *
 * 创建 PlantUML 的构建时 Vite 插件。
 *
 * 在构建环境下，通过 `transform` 钩子在处理 Markdown 文件时，
 * 预先获取所有引用的 PlantUML 图片并写入缓存目录。渲染失败时
 * 使用兜底图片占位，确保构建不会中断。
 *
 * @param options - Plugin options / 插件选项
 * @returns Vite plugin instance / Vite 插件实例
 */
function plantumlVitePluginWithBuild(options: PlantumlVitePluginOptions = {}): Plugin {
  let config!: ResolvedConfig
  return {
    name: 'vitepress:plantuml',
    enforce: 'post',

    configResolved(_config) {
      config = _config
      fs.mkdirSync(path.join(config.cacheDir, OUTPUT_DIR), { recursive: true })
    },

    transform: {
      filter: { id: /\.md($|\?.*)/ },
      async handler(code, id) {
        const pagePath = id.split('?')[0]

        const tasks: Promise<any>[] = []
        for (const [filename, cached] of cache.entries()) {
          if (cached.loaded && cached.paths.has(pagePath))
            continue
          const outputPath = getOutputPath(config.cacheDir, filename)

          if (fs.existsSync(outputPath)) {
            cached.loaded = true
            continue
          }
          const { isDark, format } = parseFilename(filename)
          const promise = cached.promise ?? attemptAsync(async () => {
            const buffer = await fetchPlantuml(cached.content, (isDark ? 'd' : '') + format as PlantumlAllFormat, options.serverURL)
            if (!buffer) {
              config.logger.error(`Failed to render: \n${indent(cached.content, '  ')}`)

              await fs.promises.copyFile(format === 'png' ? fallbackPNG : fallbackSVG, outputPath)
              cached.promise = null
              return
            }
            await fs.promises.writeFile(outputPath, buffer)
            cached.loaded = true
          })
          cached.promise = promise
          tasks.push(promise)
        }
        await Promise.all(tasks)
        return code
      },
    },
  }
}

const RE_PLANTUML_TAG = /<\?plantuml.*?\?>/g

/**
 * Fetch a rendered PlantUML image buffer from the PlantUML server.
 *
 * 从 PlantUML 服务器获取渲染后的图片 Buffer。
 *
 * @param source - PlantUML source text / PlantUML 源文本
 * @param format - Output format, including dark-mode variants / 输出格式，包含暗色模式变体
 * @param serverURL - Optional custom server URL / 可选的自定义服务器地址
 * @returns Rendered image buffer, or `null` on failure / 渲染后的图片 Buffer，失败时返回 `null`
 */
async function fetchPlantuml(source: string, format: PlantumlAllFormat, serverURL?: string): Promise<Buffer | null> {
  const encoded = encodePlantuml(source)
  const url = `${serverURL || plantumlUrl}/${format}/${encoded}`
  const res = await fetch(url)
  if (!res.ok)
    return null

  // optimize svg
  if (format === 'svg' || format === 'dsvg') {
    const svg = await res.text()
    const data = svgo(svg)
    return Buffer.from(data)
  }
  return Buffer.from(await res.arrayBuffer())
}

/**
 * Optimize an SVG string using SVGO with a custom plugin that removes
 * the root background style and the corresponding full-size rect element.
 *
 * 使用 SVGO 优化 SVG 字符串，自定义插件会移除根背景样式及对应的满尺寸 rect 元素。
 *
 * @param svg - Raw SVG string / 原始 SVG 字符串
 * @returns Optimized SVG string / 优化后的 SVG 字符串
 */
function svgo(svg: string) {
  return optimize(svg, {
    multipass: true,
    plugins: [{
      name: 'removeRootStyle',
      fn: () => {
        let width!: string
        let height!: string
        let background!: string
        return {
          element: {
            enter(element, parent) {
              const attrs = element.attributes
              if (element.name === 'svg') {
                width = `${Number.parseInt(attrs.width)}`
                height = `${Number.parseInt(attrs.height)}`
                background = attrs.style?.split(';').filter(item => item.trim().startsWith('background'))[0]?.split(':')[1]?.trim() || ''
                delete attrs.style
              }
              if (element.name === 'rect' && attrs.fill === background && attrs.width === width && attrs.height === height && attrs.x === '0' && attrs.y === '0') {
                remove(parent.children, element)
              }
            },
          },
        }
      },
    }, 'preset-default'],
  }).data.replaceAll(RE_PLANTUML_TAG, '')
}
