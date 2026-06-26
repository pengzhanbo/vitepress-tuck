import fs from 'node:fs'
import path from 'node:path'
import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest'
import { encodePlantuml, getFilename, getOutputPath, parseFilename } from '../src/node/utils'

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
