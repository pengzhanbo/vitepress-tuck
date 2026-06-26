import { Buffer } from 'node:buffer'
import fs from 'node:fs'
import path from 'node:path'
import { Writable } from 'node:stream'
import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest'
import { OUTPUT_DIR, SERVER_PREFIX } from '../src/node/constants'
import { cache, getOutputPath } from '../src/node/utils'
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
