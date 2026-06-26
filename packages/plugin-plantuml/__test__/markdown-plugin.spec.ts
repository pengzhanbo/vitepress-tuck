import fs from 'node:fs'
import path from 'node:path'
import MarkdownIt from 'markdown-it'
import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest'
import { SERVER_PREFIX } from '../src/node/constants'
import { plantumlMarkdownPlugin } from '../src/node/markdown'
import { cache } from '../src/node/utils'

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
