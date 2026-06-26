import fs from 'node:fs'
import path from 'node:path'
import MarkdownIt from 'markdown-it'
import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest'
import { plantuml } from '../src/node/plugin'

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
