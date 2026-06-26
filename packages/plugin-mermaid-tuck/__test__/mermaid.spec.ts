import type { Fn } from '@pengzhanbo/utils'
import type { MermaidOptions } from '../src/node/types'
import MarkdownIt from 'markdown-it'
import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest'
import { mermaidMarkdownPlugin } from '../src/node/markdown'
import { mermaid } from '../src/node/plugin'
import { mermaidVitePlugin } from '../src/node/vite'

// 设置 VITEPRESS_CONFIG，供 createLocales（vite 插件 load 时调用）使用
beforeAll(() => {
  ;(globalThis as Record<string, unknown>).VITEPRESS_CONFIG = {
    srcDir: '/test/src',
    cacheDir: '/test/cache',
    logger: { warn: vi.fn(), error: vi.fn() },
    userConfig: { locales: {} },
  }
})

afterAll(() => {
  delete (globalThis as Record<string, unknown>).VITEPRESS_CONFIG
})

// --- mermaidMarkdownPlugin 测试 ---

describe('mermaidMarkdownPlugin', () => {
  it('应将 mermaid 代码块渲染为 VPMermaid 组件', () => {
    // 验证 mermaid 围栏代码块被转换为 <VPMermaid> 组件
    const md = new MarkdownIt()
    md.use(mermaidMarkdownPlugin)

    const result = md.render('```mermaid\ngraph TD\nA --> B\n```')
    expect(result).toMatch(/<VPMermaid/i)
  })

  it('id 属性格式应为 Mermaid-{idx}', () => {
    // 验证第一个 mermaid 代码块的 idx 为 0
    const md = new MarkdownIt()
    md.use(mermaidMarkdownPlugin)

    const result = md.render('```mermaid\ngraph TD\nA --> B\n```')
    expect(result).toContain('id="Mermaid-0"')
  })

  it('graph 属性应为 encodeURIComponent 编码的内容', () => {
    // 验证 graph 属性包含 encodeURIComponent 编码后的内容
    const md = new MarkdownIt()
    md.use(mermaidMarkdownPlugin)

    const input = '```mermaid\nA --> B\n```'
    // 通过 md.parse 获取 token 的原始 content，确保断言准确
    const tokens = md.parse(input, {})
    const fenceToken = tokens.find(t => t.type === 'fence')!
    const expectedGraph = encodeURIComponent(fenceToken.content)

    const result = md.render(input)
    expect(result).toContain(`graph="${expectedGraph}"`)
  })

  it('source 插槽应包含原始渲染代码', () => {
    // 验证 #source 插槽中包含默认围栏渲染器的输出
    const md = new MarkdownIt()
    md.use(mermaidMarkdownPlugin)

    const result = md.render('```mermaid\ngraph TD\nA --> B\n```')
    expect(result).toContain('<template #source>')
    expect(result).toContain('language-mermaid')
    // 原始内容中的 > 会被 markdown-it 转义为 &gt;
    expect(result).toContain('A --&gt; B')
  })

  it('非 mermaid 代码块（如 js）不应被转换', () => {
    // 验证 js 代码块正常渲染，不被转换为 VPMermaid
    const md = new MarkdownIt()
    md.use(mermaidMarkdownPlugin)

    const result = md.render('```js\nconst a = 1\n```')
    expect(result).not.toMatch(/<VPMermaid/i)
    expect(result).toContain('const a = 1')
    expect(result).toContain('language-js')
  })

  it('非 mermaid 代码块（如 ts）不应被转换', () => {
    // 验证 ts 代码块正常渲染，不被转换为 VPMermaid
    const md = new MarkdownIt()
    md.use(mermaidMarkdownPlugin)

    const result = md.render('```ts\nconst a: number = 1\n```')
    expect(result).not.toMatch(/<VPMermaid/i)
    expect(result).toContain('language-ts')
  })

  it('带 info 的 mermaid 代码块（如 mermaid {theme: dark}）也应被识别', () => {
    // 验证 info 以 'mermaid' 开头时即被识别
    const md = new MarkdownIt()
    md.use(mermaidMarkdownPlugin)

    const result = md.render('```mermaid {theme: dark}\ngraph TD\nA --> B\n```')
    expect(result).toMatch(/<VPMermaid/i)
  })

  it('空内容的 mermaid 代码块也能渲染', () => {
    // 验证空内容也能正确生成 VPMermaid 组件
    const md = new MarkdownIt()
    md.use(mermaidMarkdownPlugin)

    const result = md.render('```mermaid\n```')
    expect(result).toMatch(/<VPMermaid/i)
  })

  it('多个 mermaid 代码块 idx 应递增', () => {
    // 验证多个 mermaid 代码块的 idx 依次递增
    const md = new MarkdownIt()
    md.use(mermaidMarkdownPlugin)

    const result = md.render('```mermaid\nA --> B\n```\n\n```mermaid\nC --> D\n```')
    expect(result).toContain('id="Mermaid-0"')
    expect(result).toContain('id="Mermaid-1"')
  })
})

// --- mermaidVitePlugin 测试 ---

describe('mermaidVitePlugin', () => {
  it('应返回数组，包含 iconPlugin 和虚拟模块插件', () => {
    // 验证返回值为数组，且包含至少两个插件
    const plugins = mermaidVitePlugin()
    expect(Array.isArray(plugins)).toBe(true)
    expect(plugins.length).toBeGreaterThanOrEqual(2)

    // 虚拟模块插件的 name 应为 'vitepress:mermaid'
    const virtualPlugin = plugins.find(p => p.name === 'vitepress:mermaid')
    expect(virtualPlugin).toBeDefined()
  })

  it('虚拟模块 resolveId 对 virtual:vitepress-mermaid 返回 \\0 前缀 ID', () => {
    // 验证 resolveId 将虚拟模块 ID 解析为内部 ID
    const plugins = mermaidVitePlugin()
    const virtualPlugin = plugins.find(p => p.name === 'vitepress:mermaid')!

    expect((virtualPlugin.resolveId as Fn)!('virtual:vitepress-mermaid')).toBe('\0virtual:vitepress-mermaid')
  })

  it('虚拟模块 resolveId 对其他 ID 返回 undefined', () => {
    // 验证非目标 ID 不被解析
    const plugins = mermaidVitePlugin()
    const virtualPlugin = plugins.find(p => p.name === 'vitepress:mermaid')!

    expect((virtualPlugin.resolveId as Fn)!('other-module')).toBeUndefined()
  })

  it('虚拟模块 load 返回包含 defaultOptions 和 locales 导出的代码字符串', () => {
    // 验证 load 返回的代码包含 defaultOptions 和 locales 导出
    const plugins = mermaidVitePlugin()
    const virtualPlugin = plugins.find(p => p.name === 'vitepress:mermaid')!

    const code = (virtualPlugin.load as Fn)('\0virtual:vitepress-mermaid')
    expect(typeof code).toBe('string')
    expect(code).toContain('defaultOptions')
    expect(code).toContain('locales')
  })

  it('无 options 时 defaultOptions 为 {}', () => {
    // 验证无 options 时 defaultOptions 导出空对象
    const plugins = mermaidVitePlugin()
    const virtualPlugin = plugins.find(p => p.name === 'vitepress:mermaid')!

    const code = (virtualPlugin.load as Fn)('\0virtual:vitepress-mermaid')
    expect(code).toContain('export const defaultOptions = {}')
  })

  it('有 options 时 defaultOptions 为 JSON.stringify(options) 的结果', () => {
    // 验证传入 options 时 defaultOptions 为 JSON 序列化的结果
    const options = { theme: 'dark', flowchart: { curve: 'basis' } } as MermaidOptions
    const plugins = mermaidVitePlugin({ options })
    const virtualPlugin = plugins.find(p => p.name === 'vitepress:mermaid')!

    const code = (virtualPlugin.load as Fn)('\0virtual:vitepress-mermaid')
    expect(code).toContain(`export const defaultOptions = ${JSON.stringify(options)}`)
  })

  it('locales 为 JSON 字符串', () => {
    // 验证 locales 导出为 JSON 字符串格式
    const plugins = mermaidVitePlugin()
    const virtualPlugin = plugins.find(p => p.name === 'vitepress:mermaid')!

    const code = (virtualPlugin.load as Fn)('\0virtual:vitepress-mermaid')
    // locales 应该是 JSON.stringify 的结果，以 = { 开头
    expect(code).toMatch(/export const locales = \{/)
  })

  it('load 对非目标 ID 返回 undefined', () => {
    // 验证非目标 ID 不触发 load
    const plugins = mermaidVitePlugin()
    const virtualPlugin = plugins.find(p => p.name === 'vitepress:mermaid')!

    expect((virtualPlugin.load as Fn)('other-id')).toBeUndefined()
  })
})

// --- mermaid 插件工厂测试 ---

describe('mermaid 插件工厂', () => {
  it('name 应为 vitepress-plugin-mermaid-tuck', () => {
    // 验证插件名称
    const plugin = mermaid()
    expect(plugin.name).toBe('vitepress-plugin-mermaid-tuck')
  })

  it('componentResolver 应包含 VPMermaid', () => {
    // 验证组件解析器包含 VPMermaid
    const plugin = mermaid()
    expect(plugin.componentResolver).toContain('VPMermaid')
  })

  it('markdown.config 应为函数', () => {
    // 验证 markdown.config 是一个可调用函数
    const plugin = mermaid()
    expect(typeof plugin.markdown?.config).toBe('function')
  })

  it('vite.plugins 应非空', () => {
    // 验证 vite.plugins 数组非空
    const plugin = mermaid()
    expect(plugin.vite?.plugins).toBeDefined()
    expect(plugin.vite!.plugins!.length).toBeGreaterThan(0)
  })

  it('vite.optimizeDeps.include 应含 mermaid/dist/mermaid.esm.min.mjs', () => {
    // 验证 optimizeDeps 中预构建 mermaid ESM 产物
    const plugin = mermaid()
    expect(plugin.vite?.optimizeDeps?.include).toContain('mermaid/dist/mermaid.esm.min.mjs')
  })

  it('vite.ssr.noExternal 应含 vitepress-plugin-mermaid-tuck', () => {
    // 验证 SSR 配置中将本插件标记为需要打包
    const plugin = mermaid()
    expect(plugin.vite?.ssr?.noExternal).toContain('vitepress-plugin-mermaid-tuck')
  })

  it('markdown.config 调用后应注册 mermaidMarkdownPlugin', () => {
    // 验证 markdown.config 能正确注册 markdown 插件
    const plugin = mermaid()
    const md = new MarkdownIt()
    plugin.markdown!.config!(md as any)

    const result = md.render('```mermaid\nA --> B\n```')
    expect(result).toMatch(/<VPMermaid/i)
  })
})
