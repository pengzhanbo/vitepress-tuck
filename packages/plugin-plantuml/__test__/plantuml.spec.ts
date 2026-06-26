import { Buffer } from 'node:buffer'
import fs from 'node:fs'
import path from 'node:path'
import { Writable } from 'node:stream'
import MarkdownIt from 'markdown-it'
import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest'
import { OUTPUT_DIR, SERVER_PREFIX } from '../src/node/constants'
import { plantumlMarkdownPlugin } from '../src/node/markdown'
import { plantuml } from '../src/node/plugin'
import { cache, encodePlantuml, getFilename, getOutputPath, parseFilename } from '../src/node/utils'
import { plantumlVitePlugin } from '../src/node/vite'

// 测试用临时目录统一置于 __test__/fixtures/tmp 下，禁止使用系统临时目录
const FIXTURES_TMP_DIR = path.join(__dirname, 'fixtures', 'tmp')

// 设置 VITEPRESS_CONFIG，plantumlMarkdownPlugin 在注册时会调用 getVitepressConfig()
beforeAll(() => {
  fs.mkdirSync(FIXTURES_TMP_DIR, { recursive: true })
  ;(globalThis as Record<string, unknown>).VITEPRESS_CONFIG = {
    srcDir: '/test/src',
    cacheDir: '/test/cache',
    logger: { warn: vi.fn(), error: vi.fn() },
    userConfig: { locales: {} },
  }
})

afterAll(() => {
  delete (globalThis as Record<string, unknown>).VITEPRESS_CONFIG
  fs.rmSync(FIXTURES_TMP_DIR, { recursive: true, force: true })
})

// --- getFilename 测试 ---

describe('getFilename', () => {
  it('亮色 svg 格式应返回 hash.light.svg', () => {
    // 验证亮色模式 + svg 格式的文件名
    expect(getFilename('abc', 'svg', false)).toBe('abc.light.svg')
  })

  it('暗色 png 格式应返回 hash.dark.png', () => {
    // 验证暗色模式 + png 格式的文件名
    expect(getFilename('abc', 'png', true)).toBe('abc.dark.png')
  })

  it('暗色 svg 格式应返回 hash.dark.svg', () => {
    // 验证暗色模式 + svg 格式的文件名
    expect(getFilename('hash123', 'svg', true)).toBe('hash123.dark.svg')
  })
})

// --- parseFilename 测试 ---

describe('parseFilename', () => {
  it('应正确解析亮色 svg 文件名', () => {
    // 验证亮色模式文件名的解析结果
    expect(parseFilename('abc.light.svg')).toEqual({ hash: 'abc', format: 'svg', isDark: false })
  })

  it('应正确解析暗色 png 文件名', () => {
    // 验证暗色模式文件名的解析结果
    expect(parseFilename('abc.dark.png')).toEqual({ hash: 'abc', format: 'png', isDark: true })
  })
})

// --- getOutputPath 测试 ---

describe('getOutputPath', () => {
  it('应将缓存目录与 OUTPUT_DIR 和文件名拼接', () => {
    // 验证输出路径包含缓存目录、plantuml 输出目录和文件名
    const result = getOutputPath('/cache', 'file.svg')
    expect(result).toContain('plantuml')
    expect(result).toContain('file.svg')
    expect(result).toContain('/cache')
  })

  it('路径应包含 OUTPUT_DIR（plantuml）', () => {
    // 验证输出路径中包含 OUTPUT_DIR 常量值
    const result = getOutputPath('/cache', 'test.png')
    expect(result).toContain('plantuml')
  })
})

// --- encodePlantuml 测试 ---

describe('encodePlantuml', () => {
  it('对相同输入返回相同输出（确定性）', () => {
    // 验证编码函数的确定性
    const input = '@startuml\nBob -> Alice : hello\n@enduml'
    expect(encodePlantuml(input)).toBe(encodePlantuml(input))
  })

  it('对有效输入返回非空字符串', () => {
    // 验证编码结果非空
    const result = encodePlantuml('@startuml\nBob -> Alice : hello\n@enduml')
    expect(result).toBeTruthy()
    expect(result.length).toBeGreaterThan(0)
  })

  it('不同输入返回不同输出', () => {
    // 验证不同输入产生不同的编码结果
    const a = encodePlantuml('@startuml\nA -> B\n@enduml')
    const b = encodePlantuml('@startuml\nC -> D\n@enduml')
    expect(a).not.toBe(b)
  })

  it('返回值只包含 PlantUML base64 字符集 [0-9A-Za-z\\-_]', () => {
    // 验证编码结果仅包含 PlantUML 自定义 base64 字符集
    const result = encodePlantuml('@startuml\nBob -> Alice : hello\n@enduml')
    expect(result).toMatch(/^[\w\-]+$/)
  })
})

// --- plantumlMarkdownPlugin 测试 ---

describe('plantumlMarkdownPlugin', () => {
  it('应将 plantuml 代码块渲染为 VPPlantUML 组件', () => {
    // 验证 plantuml 围栏代码块被转换为 <VPPlantUML> 组件
    const md = new MarkdownIt()
    md.use(plantumlMarkdownPlugin)

    const result = md.render('```plantuml\n@startuml\nA -> B\n@enduml\n```', { path: '/test/page.md' })
    expect(result).toContain('<VPPlantUML>')
  })

  it('输出应包含 light 和 dark 两个 img', () => {
    // 验证输出同时包含亮色和暗色两种主题的图片
    const md = new MarkdownIt()
    md.use(plantumlMarkdownPlugin)

    const result = md.render('```plantuml\n@startuml\nA -> B\n@enduml\n```', { path: '/test/page.md' })
    expect(result).toContain('class="light"')
    expect(result).toContain('class="dark"')
    expect(result).toContain('alt="PlantUML light"')
    expect(result).toContain('alt="PlantUML dark"')
  })

  it('输出应包含 #source 插槽', () => {
    // 验证输出包含 #source 插槽，其中含有原始渲染代码
    const md = new MarkdownIt()
    md.use(plantumlMarkdownPlugin)

    const result = md.render('```plantuml\n@startuml\nA -> B\n@enduml\n```', { path: '/test/page.md' })
    expect(result).toContain('<template #source>')
    expect(result).toContain('@startuml')
    expect(result).toContain('A -&gt; B')
  })

  it('非 plantuml 代码块不应被转换', () => {
    // 验证非 plantuml 代码块正常渲染
    const md = new MarkdownIt()
    md.use(plantumlMarkdownPlugin)

    const result = md.render('```js\nconst a = 1\n```', { path: '/test/page.md' })
    expect(result).not.toContain('<VPPlantUML>')
    expect(result).toContain('const a = 1')
  })

  it('带 format 的 plantuml 代码块（如 plantuml png）应使用指定 format', () => {
    // 验证通过 info 指定 format 时使用该 format
    const md = new MarkdownIt()
    md.use(plantumlMarkdownPlugin)

    const result = md.render('```plantuml png\n@startuml\nA -> B\n@enduml\n```', { path: '/test/page.md' })
    expect(result).toContain('<VPPlantUML>')
    // png 格式的文件名应以 .png 结尾
    expect(result).toContain('.light.png')
    expect(result).toContain('.dark.png')
  })

  it('默认 format 应为 svg', () => {
    // 验证未指定 format 时默认使用 svg
    const md = new MarkdownIt()
    md.use(plantumlMarkdownPlugin)

    const result = md.render('```plantuml\n@startuml\nA -> B\n@enduml\n```', { path: '/test/page.md' })
    expect(result).toContain('.light.svg')
    expect(result).toContain('.dark.svg')
  })

  it('开发模式下输出应含 :src= 和 SERVER_PREFIX', () => {
    // isBuild 在测试环境为 false，输出应使用 :src= 模板字符串
    const md = new MarkdownIt()
    md.use(plantumlMarkdownPlugin)

    const result = md.render('```plantuml\n@startuml\nA -> B\n@enduml\n```', { path: '/test/page.md' })
    expect(result).toContain(':src=')
    expect(result).toContain(SERVER_PREFIX)
  })

  it('内容相同的不同代码块生成相同 hash（缓存）', () => {
    // 验证相同内容生成相同的 hash/filename
    const md = new MarkdownIt()
    md.use(plantumlMarkdownPlugin)

    const content = '```plantuml\n@startuml\nA -> B\n@enduml\n```'
    const result1 = md.render(content, { path: '/test/page1.md' })
    const result2 = md.render(content, { path: '/test/page2.md' })

    // 两次渲染应包含相同的文件名（hash 相同）
    const extractFilename = (html: string) => {
      const match = html.match(/\/vitepress-plantuml\/([^\s`"]+)/)
      return match?.[1]
    }
    expect(extractFilename(result1)).toBe(extractFilename(result2))
  })

  it('env.path 应被记录到 cache 中', () => {
    // 验证渲染时 env.path 被添加到缓存的 paths 集合中
    cache.clear()

    const md = new MarkdownIt()
    md.use(plantumlMarkdownPlugin)

    const pagePath = '/test/env-path-test.md'
    md.render('```plantuml\n@startuml\nA -> B\n@enduml\n```', { path: pagePath })

    // 检查缓存中是否存在包含该页面路径的条目
    let found = false
    for (const [, entry] of cache.entries()) {
      if (entry.paths.has(pagePath)) {
        found = true
        break
      }
    }
    expect(found).toBe(true)
  })

  it('不支持的 format 应回退为默认渲染并输出警告', () => {
    // 验证不支持的格式（如 gif）不渲染为 VPPlantUML，且调用 logger.warn
    const md = new MarkdownIt()
    md.use(plantumlMarkdownPlugin)

    const result = md.render('```plantuml gif\n@startuml\nA -> B\n@enduml\n```', { path: '/test/page.md' })
    expect(result).not.toContain('<VPPlantUML>')
    // logger.warn 应被调用（在 beforeAll 中通过 vi.fn() 设置）
    const logger = (globalThis as Record<string, any>).VITEPRESS_CONFIG.logger
    expect(logger.warn).toHaveBeenCalled()
  })
})

// --- plantumlVitePlugin 测试 ---

describe('plantumlVitePlugin', () => {
  it('应返回数组，包含 locales 插件、iconPlugin 和 server/build 插件', () => {
    // 验证返回值为数组，且包含多个插件
    const plugins = plantumlVitePlugin()
    expect(Array.isArray(plugins)).toBe(true)
    expect(plugins.length).toBeGreaterThanOrEqual(3)

    // 验证包含 locales 虚拟模块插件
    const localesPlugin = plugins.find(p => p.name === 'vitepress:plantuml-locales')
    expect(localesPlugin).toBeDefined()

    // 验证包含 server 插件（isBuild=false 时返回 server 版本）
    const serverPlugin = plugins.find(p => p.name === 'vitepress:plantuml')
    expect(serverPlugin).toBeDefined()
  })

  it('locales 插件 resolveId 对 virtual:vitepress-plantuml 返回 \\0 前缀 ID', () => {
    // 验证 locales 虚拟模块的 resolveId
    const plugins = plantumlVitePlugin()
    const localesPlugin = plugins.find(p => p.name === 'vitepress:plantuml-locales')!
    const resolveId = localesPlugin.resolveId as (id: string) => string | undefined

    expect(resolveId('virtual:vitepress-plantuml')).toBe('\0virtual:vitepress-plantuml')
  })

  it('locales 插件 resolveId 对其他 ID 返回 undefined', () => {
    // 验证非目标 ID 不被解析
    const plugins = plantumlVitePlugin()
    const localesPlugin = plugins.find(p => p.name === 'vitepress:plantuml-locales')!
    const resolveId = localesPlugin.resolveId as (id: string) => string | undefined

    expect(resolveId('other-module')).toBeUndefined()
  })

  it('locales 插件 load 返回含 locales 导出的代码字符串', () => {
    // 验证 locales 虚拟模块的 load 返回包含 locales 导出的代码
    const plugins = plantumlVitePlugin()
    const localesPlugin = plugins.find(p => p.name === 'vitepress:plantuml-locales')!
    const load = localesPlugin.load as (id: string) => string | undefined

    const code = load('\0virtual:vitepress-plantuml')
    expect(typeof code).toBe('string')
    expect(code).toContain('export const locales')
  })

  it('locales 插件 load 对非目标 ID 返回 undefined', () => {
    // 验证非目标 ID 不触发 load
    const plugins = plantumlVitePlugin()
    const localesPlugin = plugins.find(p => p.name === 'vitepress:plantuml-locales')!
    const load = localesPlugin.load as (id: string) => string | undefined

    expect(load('other-id')).toBeUndefined()
  })

  it('server 插件 name 应含 vitepress:plantuml', () => {
    // 验证 server 插件的名称
    const plugins = plantumlVitePlugin()
    const serverPlugin = plugins.find(p => p.name === 'vitepress:plantuml')
    expect(serverPlugin).toBeDefined()
    expect(serverPlugin!.name).toBe('vitepress:plantuml')
  })

  it('server 插件应包含 configureServer 钩子', () => {
    // 验证 server 插件包含 configureServer 方法
    const plugins = plantumlVitePlugin()
    const serverPlugin = plugins.find(p => p.name === 'vitepress:plantuml')!
    expect(typeof serverPlugin.configureServer).toBe('function')
  })

  it('server 插件 configResolved 应创建输出目录', () => {
    // 验证 configResolved 钩子创建 plantuml 输出目录
    const mkdirSpy = vi.spyOn(fs, 'mkdirSync').mockImplementation(() => undefined as any)
    try {
      const plugins = plantumlVitePlugin()
      const serverPlugin = plugins.find(p => p.name === 'vitepress:plantuml')!
      const configResolved = serverPlugin.configResolved as (config: any) => void

      configResolved({ cacheDir: '/test/cache' })

      expect(mkdirSpy).toHaveBeenCalledWith(
        expect.stringContaining(OUTPUT_DIR),
        { recursive: true },
      )
    }
    finally {
      mkdirSpy.mockRestore()
    }
  })

  it('configureServer 应注册中间件', () => {
    // 验证 configureServer 注册了请求处理中间件
    const mkdirSpy = vi.spyOn(fs, 'mkdirSync').mockImplementation(() => undefined as any)
    try {
      const plugins = plantumlVitePlugin()
      const serverPlugin = plugins.find(p => p.name === 'vitepress:plantuml')!
      const configResolved = serverPlugin.configResolved as (config: any) => void
      const configureServer = serverPlugin.configureServer as (server: any) => void

      configResolved({ cacheDir: '/test/cache' })

      let middleware: ((req: any, res: any, next: any) => Promise<void>) | undefined
      configureServer({
        middlewares: { use: (handler: any) => { middleware = handler } },
      })

      expect(middleware).toBeDefined()
      expect(typeof middleware).toBe('function')
    }
    finally {
      mkdirSpy.mockRestore()
    }
  })

  it('中间件对非 plantuml URL 应直接 next', async () => {
    // 验证非 plantuml 路径的请求直接交给下一个中间件
    const mkdirSpy = vi.spyOn(fs, 'mkdirSync').mockImplementation(() => undefined as any)
    try {
      const plugins = plantumlVitePlugin()
      const serverPlugin = plugins.find(p => p.name === 'vitepress:plantuml')!
      const configResolved = serverPlugin.configResolved as (config: any) => void
      const configureServer = serverPlugin.configureServer as (server: any) => void

      configResolved({ cacheDir: '/test/cache' })

      let middleware: any
      configureServer({
        middlewares: { use: (handler: any) => { middleware = handler } },
      })

      const next = vi.fn()
      await middleware({ url: '/other-path' }, {}, next)
      expect(next).toHaveBeenCalled()
    }
    finally {
      mkdirSpy.mockRestore()
    }
  })

  it('中间件对无缓存的 plantuml URL 应 next', async () => {
    // 验证 plantuml 路径但缓存中不存在对应条目时直接 next
    const mkdirSpy = vi.spyOn(fs, 'mkdirSync').mockImplementation(() => undefined as any)
    try {
      cache.clear()
      const plugins = plantumlVitePlugin()
      const serverPlugin = plugins.find(p => p.name === 'vitepress:plantuml')!
      const configResolved = serverPlugin.configResolved as (config: any) => void
      const configureServer = serverPlugin.configureServer as (server: any) => void

      configResolved({ cacheDir: '/test/cache' })

      let middleware: any
      configureServer({
        middlewares: { use: (handler: any) => { middleware = handler } },
      })

      const next = vi.fn()
      await middleware({ url: `${SERVER_PREFIX}nonexistent.light.svg` }, {}, next)
      expect(next).toHaveBeenCalled()
    }
    finally {
      mkdirSpy.mockRestore()
    }
  })

  it('中间件对有缓存且文件存在的 plantuml URL 应返回文件内容', async () => {
    // 验证缓存命中且文件已存在时，直接读取文件并设置 Content-Type
    // 由于 vi.spyOn 无法拦截 ESM 命名导入的 createReadStream，
    // 这里使用真实临时文件和真实 Writable 流进行端到端验证
    const tmpDir = fs.mkdtempSync(path.join(FIXTURES_TMP_DIR, 'plantuml-test-'))
    try {
      cache.clear()
      const filename = 'testhash.light.svg'
      const svgContent = '<svg xmlns="http://www.w3.org/2000/svg"></svg>'

      const plugins = plantumlVitePlugin()
      const serverPlugin = plugins.find(p => p.name === 'vitepress:plantuml')!
      const configResolved = serverPlugin.configResolved as (config: any) => void
      const configureServer = serverPlugin.configureServer as (server: any) => void

      // configResolved 会创建 OUTPUT_DIR 目录
      configResolved({ cacheDir: tmpDir })

      // 在中间件计算出的输出路径写入测试文件
      const outputPath = getOutputPath(tmpDir, filename)
      fs.mkdirSync(path.dirname(outputPath), { recursive: true })
      fs.writeFileSync(outputPath, svgContent)
      cache.set(filename, { content: '@startuml\nA -> B\n@enduml', paths: new Set() })

      let middleware: any
      configureServer({
        middlewares: { use: (handler: any) => { middleware = handler } },
      })

      // 使用真实 Writable 流收集管道写入的数据
      // 由于 createReadStream().pipe(res) 是异步的，需要等待 finish 事件
      const chunks: Buffer[] = []
      const res = new Writable({
        write(chunk, _encoding, cb) {
          chunks.push(Buffer.from(chunk))
          cb()
        },
      })
      ;(res as any).setHeader = vi.fn()
      const next = vi.fn()
      const finished = new Promise<void>((resolve, reject) => {
        res.on('finish', resolve)
        res.on('error', reject)
      })
      await middleware({ url: `${SERVER_PREFIX}${filename}` }, res, next)
      await finished

      expect(next).not.toHaveBeenCalled()
      expect((res as any).setHeader).toHaveBeenCalledWith('Content-Type', 'image/svg+xml')
      expect(Buffer.concat(chunks).toString()).toBe(svgContent)
    }
    finally {
      fs.rmSync(tmpDir, { recursive: true, force: true })
    }
  })

  it('中间件对 png 格式应设置 image/png Content-Type', async () => {
    // 验证 png 格式使用正确的 Content-Type
    // 使用真实临时文件避免 vi.spyOn 对 ESM 命名导入的不生效问题
    const tmpDir = fs.mkdtempSync(path.join(FIXTURES_TMP_DIR, 'plantuml-test-'))
    try {
      cache.clear()
      const filename = 'testhash.dark.png'
      const pngContent = Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A])

      const plugins = plantumlVitePlugin()
      const serverPlugin = plugins.find(p => p.name === 'vitepress:plantuml')!
      const configResolved = serverPlugin.configResolved as (config: any) => void
      const configureServer = serverPlugin.configureServer as (server: any) => void

      configResolved({ cacheDir: tmpDir })

      const outputPath = getOutputPath(tmpDir, filename)
      fs.mkdirSync(path.dirname(outputPath), { recursive: true })
      fs.writeFileSync(outputPath, pngContent)
      cache.set(filename, { content: '@startuml\nA -> B\n@enduml', paths: new Set() })

      let middleware: any
      configureServer({
        middlewares: { use: (handler: any) => { middleware = handler } },
      })

      const chunks: Buffer[] = []
      const res = new Writable({
        write(chunk, _encoding, cb) {
          chunks.push(Buffer.from(chunk))
          cb()
        },
      })
      ;(res as any).setHeader = vi.fn()
      const next = vi.fn()
      const finished = new Promise<void>((resolve, reject) => {
        res.on('finish', resolve)
        res.on('error', reject)
      })
      await middleware({ url: `${SERVER_PREFIX}${filename}` }, res, next)
      await finished

      expect(next).not.toHaveBeenCalled()
      expect((res as any).setHeader).toHaveBeenCalledWith('Content-Type', 'image/png')
      expect(Buffer.concat(chunks).equals(pngContent)).toBe(true)
    }
    finally {
      fs.rmSync(tmpDir, { recursive: true, force: true })
    }
  })
})

// --- 服务器中间件缓存未命中测试 ---

describe('plantumlVitePlugin - 服务器中间件缓存未命中', () => {
  it('缓存未命中时应从服务器获取 SVG 并返回内容', async () => {
    // 验证缓存未命中时，通过 fetch 从 PlantUML 服务器获取 SVG 并返回
    const tmpDir = fs.mkdtempSync(path.join(FIXTURES_TMP_DIR, 'plantuml-test-'))
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      text: async () => '<svg xmlns="http://www.w3.org/2000/svg"><rect width="10" height="10"/></svg>',
      arrayBuffer: async () => new ArrayBuffer(0),
    })
    const originalFetch = globalThis.fetch
    globalThis.fetch = fetchMock as any
    try {
      cache.clear()
      const filename = 'testhash.light.svg'
      cache.set(filename, { content: '@startuml\nA -> B\n@enduml', paths: new Set() })

      const plugins = plantumlVitePlugin()
      const serverPlugin = plugins.find(p => p.name === 'vitepress:plantuml')!
      const configResolved = serverPlugin.configResolved as (config: any) => void
      const configureServer = serverPlugin.configureServer as (server: any) => void

      configResolved({ cacheDir: tmpDir, logger: { error: vi.fn() } })

      let middleware: any
      configureServer({
        middlewares: { use: (handler: any) => { middleware = handler } },
      })

      const chunks: Buffer[] = []
      const res = new Writable({
        write(chunk, _encoding, cb) {
          chunks.push(Buffer.from(chunk))
          cb()
        },
      })
      ;(res as any).setHeader = vi.fn()
      const next = vi.fn()
      const finished = new Promise<void>((resolve, reject) => {
        res.on('finish', resolve)
        res.on('error', reject)
      })
      await middleware({ url: `${SERVER_PREFIX}${filename}` }, res, next)
      await finished

      expect(fetchMock).toHaveBeenCalled()
      expect(next).not.toHaveBeenCalled()
      expect((res as any).setHeader).toHaveBeenCalledWith('Content-Type', 'image/svg+xml')
      expect(chunks.length).toBeGreaterThan(0)
    }
    finally {
      globalThis.fetch = originalFetch
      fs.rmSync(tmpDir, { recursive: true, force: true })
    }
  })

  it('缓存未命中时对 PNG 应从服务器获取并返回', async () => {
    // 验证缓存未命中时，对 PNG 格式通过 arrayBuffer 获取并返回
    const tmpDir = fs.mkdtempSync(path.join(FIXTURES_TMP_DIR, 'plantuml-test-'))
    const pngBytes = new Uint8Array([0x89, 0x50, 0x4E, 0x47])
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      text: async () => '',
      arrayBuffer: async () => pngBytes.buffer,
    })
    const originalFetch = globalThis.fetch
    globalThis.fetch = fetchMock as any
    try {
      cache.clear()
      const filename = 'testhash.light.png'
      cache.set(filename, { content: '@startuml\nA -> B\n@enduml', paths: new Set() })

      const plugins = plantumlVitePlugin()
      const serverPlugin = plugins.find(p => p.name === 'vitepress:plantuml')!
      const configResolved = serverPlugin.configResolved as (config: any) => void
      const configureServer = serverPlugin.configureServer as (server: any) => void

      configResolved({ cacheDir: tmpDir, logger: { error: vi.fn() } })

      let middleware: any
      configureServer({
        middlewares: { use: (handler: any) => { middleware = handler } },
      })

      const chunks: Buffer[] = []
      const res = new Writable({
        write(chunk, _encoding, cb) {
          chunks.push(Buffer.from(chunk))
          cb()
        },
      })
      ;(res as any).setHeader = vi.fn()
      const next = vi.fn()
      const finished = new Promise<void>((resolve, reject) => {
        res.on('finish', resolve)
        res.on('error', reject)
      })
      await middleware({ url: `${SERVER_PREFIX}${filename}` }, res, next)
      await finished

      expect(fetchMock).toHaveBeenCalled()
      expect(next).not.toHaveBeenCalled()
      expect((res as any).setHeader).toHaveBeenCalledWith('Content-Type', 'image/png')
      expect(Buffer.concat(chunks).length).toBeGreaterThan(0)
    }
    finally {
      globalThis.fetch = originalFetch
      fs.rmSync(tmpDir, { recursive: true, force: true })
    }
  })

  it('获取失败时应调用 next 并记录错误', async () => {
    // 验证 fetch 返回失败时，调用 next 并记录错误日志
    const tmpDir = fs.mkdtempSync(path.join(FIXTURES_TMP_DIR, 'plantuml-test-'))
    const fetchMock = vi.fn().mockResolvedValue({
      ok: false,
      text: async () => '',
      arrayBuffer: async () => new ArrayBuffer(0),
    })
    const originalFetch = globalThis.fetch
    globalThis.fetch = fetchMock as any
    const loggerError = vi.fn()
    try {
      cache.clear()
      const filename = 'testhash.light.svg'
      cache.set(filename, { content: '@startuml\nA -> B\n@enduml', paths: new Set() })

      const plugins = plantumlVitePlugin()
      const serverPlugin = plugins.find(p => p.name === 'vitepress:plantuml')!
      const configResolved = serverPlugin.configResolved as (config: any) => void
      const configureServer = serverPlugin.configureServer as (server: any) => void

      configResolved({ cacheDir: tmpDir, logger: { error: loggerError } })

      let middleware: any
      configureServer({
        middlewares: { use: (handler: any) => { middleware = handler } },
      })

      const next = vi.fn()
      await middleware({ url: `${SERVER_PREFIX}${filename}` }, { setHeader: vi.fn() }, next)

      expect(fetchMock).toHaveBeenCalled()
      expect(next).toHaveBeenCalled()
      expect(loggerError).toHaveBeenCalled()
    }
    finally {
      globalThis.fetch = originalFetch
      fs.rmSync(tmpDir, { recursive: true, force: true })
    }
  })
})

// --- 构建模式测试 ---

describe('plantumlVitePlugin - 构建模式', () => {
  it('构建模式下应返回 build 插件（含 transform 钩子和 enforce: post）', async () => {
    // 通过动态导入在 NODE_ENV=production 下重新加载模块，
    // 使 isBuild 为 true，验证返回 build 变体插件
    vi.stubEnv('NODE_ENV', 'production')
    vi.resetModules()
    try {
      const { plantumlVitePlugin: buildPluginFactory } = await import('../src/node/vite')
      const plugins = buildPluginFactory()
      const buildPlugin = plugins.find((p: any) => p.name === 'vitepress:plantuml')!

      expect(buildPlugin.enforce).toBe('post')
      expect(buildPlugin.transform).toBeDefined()
      // transform 应为对象形式（带 filter 和 handler）
      expect(typeof buildPlugin.transform).toBe('object')
    }
    finally {
      vi.unstubAllEnvs()
      vi.resetModules()
    }
  })

  it('构建模式 transform 对空缓存应直接返回 code', async () => {
    // 验证构建模式下 transform 对空缓存直接返回原始 code
    vi.stubEnv('NODE_ENV', 'production')
    vi.resetModules()
    try {
      const { plantumlVitePlugin: buildPluginFactory } = await import('../src/node/vite')
      const { cache: buildCache } = await import('../src/node/utils')
      buildCache.clear()

      const tmpDir = fs.mkdtempSync(path.join(FIXTURES_TMP_DIR, 'plantuml-build-'))
      try {
        const plugins = buildPluginFactory()
        const buildPlugin = plugins.find((p: any) => p.name === 'vitepress:plantuml')!
        const configResolved = buildPlugin.configResolved as (config: any) => void
        configResolved({ cacheDir: tmpDir, logger: { error: vi.fn() } })

        const transform = buildPlugin.transform as any
        const code = '<h1>test</h1>'
        const result = await transform.handler(code, '/test/page.md')
        expect(result).toBe(code)
      }
      finally {
        fs.rmSync(tmpDir, { recursive: true, force: true })
      }
    }
    finally {
      vi.unstubAllEnvs()
      vi.resetModules()
    }
  })

  it('构建模式 transform 对已存在文件应设置 loaded', async () => {
    // 验证构建模式下 transform 对已存在的输出文件设置 loaded 标志
    vi.stubEnv('NODE_ENV', 'production')
    vi.resetModules()
    try {
      const { plantumlVitePlugin: buildPluginFactory } = await import('../src/node/vite')
      const { cache: buildCache } = await import('../src/node/utils')
      buildCache.clear()

      const tmpDir = fs.mkdtempSync(path.join(FIXTURES_TMP_DIR, 'plantuml-build-'))
      try {
        const filename = 'testhash.light.svg'
        const outputPath = getOutputPath(tmpDir, filename)
        fs.mkdirSync(path.dirname(outputPath), { recursive: true })
        fs.writeFileSync(outputPath, '<svg></svg>')
        buildCache.set(filename, { content: '@startuml\nA -> B\n@enduml', paths: new Set(['/test/page.md']) })

        const plugins = buildPluginFactory()
        const buildPlugin = plugins.find((p: any) => p.name === 'vitepress:plantuml')!
        const configResolved = buildPlugin.configResolved as (config: any) => void
        configResolved({ cacheDir: tmpDir, logger: { error: vi.fn() } })

        const transform = buildPlugin.transform as any
        await transform.handler('code', '/test/page.md')

        const cached = buildCache.get(filename)
        expect(cached?.loaded).toBe(true)
      }
      finally {
        fs.rmSync(tmpDir, { recursive: true, force: true })
      }
    }
    finally {
      vi.unstubAllEnvs()
      vi.resetModules()
    }
  })

  it('构建模式 transform 对已加载页面应跳过', async () => {
    // 验证构建模式下 transform 对已加载且页面路径匹配的条目跳过处理
    vi.stubEnv('NODE_ENV', 'production')
    vi.resetModules()
    try {
      const { plantumlVitePlugin: buildPluginFactory } = await import('../src/node/vite')
      const { cache: buildCache } = await import('../src/node/utils')
      buildCache.clear()

      const tmpDir = fs.mkdtempSync(path.join(FIXTURES_TMP_DIR, 'plantuml-build-'))
      try {
        const filename = 'testhash.light.svg'
        buildCache.set(filename, { content: '@startuml\nA -> B\n@enduml', paths: new Set(['/test/page.md']), loaded: true })

        const plugins = buildPluginFactory()
        const buildPlugin = plugins.find((p: any) => p.name === 'vitepress:plantuml')!
        const configResolved = buildPlugin.configResolved as (config: any) => void
        configResolved({ cacheDir: tmpDir, logger: { error: vi.fn() } })

        const transform = buildPlugin.transform as any
        const code = '<h1>test</h1>'
        const result = await transform.handler(code, '/test/page.md')
        expect(result).toBe(code)
      }
      finally {
        fs.rmSync(tmpDir, { recursive: true, force: true })
      }
    }
    finally {
      vi.unstubAllEnvs()
      vi.resetModules()
    }
  })

  it('构建模式 transform 对缓存未命中应获取并写入文件', async () => {
    // 验证构建模式下 transform 对不存在的文件通过 fetch 获取并写入
    vi.stubEnv('NODE_ENV', 'production')
    vi.resetModules()
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      text: async () => '<svg xmlns="http://www.w3.org/2000/svg"><rect width="10" height="10"/></svg>',
      arrayBuffer: async () => new ArrayBuffer(0),
    })
    const originalFetch = globalThis.fetch
    globalThis.fetch = fetchMock as any
    try {
      const { plantumlVitePlugin: buildPluginFactory } = await import('../src/node/vite')
      const { cache: buildCache } = await import('../src/node/utils')
      buildCache.clear()

      const tmpDir = fs.mkdtempSync(path.join(FIXTURES_TMP_DIR, 'plantuml-build-'))
      try {
        const filename = 'testhash.light.svg'
        buildCache.set(filename, { content: '@startuml\nA -> B\n@enduml', paths: new Set(['/test/page.md']) })

        const plugins = buildPluginFactory()
        const buildPlugin = plugins.find((p: any) => p.name === 'vitepress:plantuml')!
        const configResolved = buildPlugin.configResolved as (config: any) => void
        configResolved({ cacheDir: tmpDir, logger: { error: vi.fn() } })

        const transform = buildPlugin.transform as any
        await transform.handler('code', '/test/page.md')

        expect(fetchMock).toHaveBeenCalled()
        // 文件应已写入输出路径
        const outputPath = getOutputPath(tmpDir, filename)
        expect(fs.existsSync(outputPath)).toBe(true)
        const cached = buildCache.get(filename)
        expect(cached?.loaded).toBe(true)
      }
      finally {
        fs.rmSync(tmpDir, { recursive: true, force: true })
      }
    }
    finally {
      globalThis.fetch = originalFetch
      vi.unstubAllEnvs()
      vi.resetModules()
    }
  })

  it('构建模式 transform 对获取失败应使用兜底图片', async () => {
    // 验证构建模式下 fetch 失败时复制兜底图片到输出路径
    vi.stubEnv('NODE_ENV', 'production')
    vi.resetModules()
    const fetchMock = vi.fn().mockResolvedValue({
      ok: false,
      text: async () => '',
      arrayBuffer: async () => new ArrayBuffer(0),
    })
    const originalFetch = globalThis.fetch
    globalThis.fetch = fetchMock as any
    try {
      const { plantumlVitePlugin: buildPluginFactory } = await import('../src/node/vite')
      const { cache: buildCache } = await import('../src/node/utils')
      buildCache.clear()

      const tmpDir = fs.mkdtempSync(path.join(FIXTURES_TMP_DIR, 'plantuml-build-'))
      try {
        const filename = 'testhash.light.svg'
        buildCache.set(filename, { content: '@startuml\nA -> B\n@enduml', paths: new Set(['/test/page.md']) })

        const plugins = buildPluginFactory()
        const buildPlugin = plugins.find((p: any) => p.name === 'vitepress:plantuml')!
        const loggerError = vi.fn()
        const configResolved = buildPlugin.configResolved as (config: any) => void
        configResolved({ cacheDir: tmpDir, logger: { error: loggerError } })

        const transform = buildPlugin.transform as any
        await transform.handler('code', '/test/page.md')

        expect(fetchMock).toHaveBeenCalled()
        expect(loggerError).toHaveBeenCalled()
        // 兜底图片应已复制到输出路径
        const outputPath = getOutputPath(tmpDir, filename)
        expect(fs.existsSync(outputPath)).toBe(true)
      }
      finally {
        fs.rmSync(tmpDir, { recursive: true, force: true })
      }
    }
    finally {
      globalThis.fetch = originalFetch
      vi.unstubAllEnvs()
      vi.resetModules()
    }
  })
})

// --- 构建模式 markdown 测试 ---

describe('plantumlMarkdownPlugin - 构建模式', () => {
  it('构建模式下输出应使用 src= 而非 :src=', async () => {
    // 验证 isBuild=true 时输出使用 src= 形式引用图片
    vi.stubEnv('NODE_ENV', 'production')
    vi.resetModules()
    try {
      const { plantumlMarkdownPlugin: buildMarkdownPlugin } = await import('../src/node/markdown')
      const md = new MarkdownIt()
      md.use(buildMarkdownPlugin)

      const result = md.render('```plantuml\n@startuml\nA -> B\n@enduml\n```', { path: '/test/page.md' })
      expect(result).toContain('src="')
      expect(result).not.toContain(':src=')
    }
    finally {
      vi.unstubAllEnvs()
      vi.resetModules()
    }
  })
})

// --- plantuml 插件工厂测试 ---

describe('plantuml 插件工厂', () => {
  it('name 应为 vitepress-plugin-plantuml', () => {
    // 验证插件名称
    const plugin = plantuml()
    expect(plugin.name).toBe('vitepress-plugin-plantuml')
  })

  it('componentResolver 应包含 VPPlantUML', () => {
    // 验证组件解析器包含 VPPlantUML
    const plugin = plantuml()
    expect(plugin.componentResolver).toContain('VPPlantUML')
  })

  it('markdown.config 应为函数', () => {
    // 验证 markdown.config 是一个可调用函数
    const plugin = plantuml()
    expect(typeof plugin.markdown?.config).toBe('function')
  })

  it('markdown.languageAlias 应含 { plantuml: txt }', () => {
    // 验证 languageAlias 将 plantuml 映射为 txt
    const plugin = plantuml()
    expect(plugin.markdown?.languageAlias).toEqual({ plantuml: 'txt' })
  })

  it('vite.plugins 应非空', () => {
    // 验证 vite.plugins 数组非空
    const plugin = plantuml()
    expect(plugin.vite?.plugins).toBeDefined()
    expect(plugin.vite!.plugins!.length).toBeGreaterThan(0)
  })

  it('markdown.config 调用后应注册 plantumlMarkdownPlugin', () => {
    // 验证 markdown.config 能正确注册 markdown 插件
    const plugin = plantuml()
    const md = new MarkdownIt()
    plugin.markdown!.config!(md as any)

    const result = md.render('```plantuml\n@startuml\nA -> B\n@enduml\n```', { path: '/test/page.md' })
    expect(result).toContain('<VPPlantUML>')
  })
})
