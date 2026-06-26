import { describe, expect, it } from 'vitest'
import { parseNodeInfo } from '../src/node/parseNodeInfo.js'

// =============================================================================
// parseNodeInfo
// =============================================================================
describe('parseNodeInfo', () => {
  it('解析简单文件名', () => {
    const result = parseNodeInfo('index.ts')
    expect(result.filename).toBe('index.ts')
    expect(result.type).toBe('file')
  })

  it('通过尾部斜杠检测文件夹', () => {
    const result = parseNodeInfo('src/')
    expect(result.filename).toBe('src')
    expect(result.type).toBe('folder')
    expect(result.expanded).toBe(false)
  })

  it('检测 ++ 新增标记', () => {
    const result = parseNodeInfo('++ new-file.ts')
    expect(result.filename).toBe('new-file.ts')
    expect(result.diff).toBe('add')
  })

  it('检测 -- 删除标记', () => {
    const result = parseNodeInfo('-- old-file.ts')
    expect(result.filename).toBe('old-file.ts')
    expect(result.diff).toBe('remove')
  })

  it('检测 ** 聚焦标记', () => {
    const result = parseNodeInfo('**main.ts**')
    expect(result.filename).toBe('main.ts')
    expect(result.focus).toBe(true)
  })

  it('提取 # 后的注释', () => {
    const result = parseNodeInfo('file.ts # this is a comment')
    expect(result.filename).toBe('file.ts')
    expect(result.comment).toContain('this is a comment')
  })

  it('注释中保留特殊字符', () => {
    const result = parseNodeInfo('file.ts # a **bold** comment')
    expect(result.filename).toBe('file.ts')
    expect(result.comment).toContain('**bold**')
  })

  it('++ 和 # 组合', () => {
    const result = parseNodeInfo('++ new-file.ts # new file added')
    expect(result.filename).toBe('new-file.ts')
    expect(result.diff).toBe('add')
    expect(result.comment).toContain('new file added')
  })

  it('-- 和 # 组合', () => {
    const result = parseNodeInfo('-- old-file.ts # removed')
    expect(result.filename).toBe('old-file.ts')
    expect(result.diff).toBe('remove')
    expect(result.comment).toContain('removed')
  })

  it('省略号 ...', () => {
    const result = parseNodeInfo('…')
    expect(result.type).toBe('file')
  })

  // ---- 额外边界测试 ----
  it('** 聚焦 + 文件夹尾部斜杠', () => {
    const result = parseNodeInfo('**src/**')
    expect(result.filename).toBe('src')
    expect(result.focus).toBe(true)
    expect(result.type).toBe('folder')
    expect(result.expanded).toBe(false)
  })

  it('** 聚焦 + # 注释', () => {
    const result = parseNodeInfo('**config.ts** # important config')
    expect(result.filename).toBe('config.ts')
    expect(result.focus).toBe(true)
    expect(result.comment).toContain('important config')
  })

  it('++ 和文件夹尾部斜杠', () => {
    const result = parseNodeInfo('++ new-folder/')
    expect(result.filename).toBe('new-folder')
    expect(result.diff).toBe('add')
    expect(result.type).toBe('folder')
  })

  it('-- 和文件夹尾部斜杠', () => {
    const result = parseNodeInfo('-- old-folder/')
    expect(result.filename).toBe('old-folder')
    expect(result.diff).toBe('remove')
    expect(result.type).toBe('folder')
  })

  it('只有 # 注释没有文件名', () => {
    const result = parseNodeInfo('# only comment')
    expect(result.filename).toBe('')
    expect(result.comment).toContain('only comment')
  })

  it('文件名中包含多个 # 符号', () => {
    const result = parseNodeInfo('file#name.ts # comment')
    // 第一个 # 在 'file#name.ts' 中，indexOf('#' )找到它后，
    // filename = 'file' (第一个#之前)，comment = '#name.ts # comment'
    expect(result.filename).toBe('file')
    expect(result.comment).toContain('#name.ts')
  })

  it('文件名前后有空格', () => {
    const result = parseNodeInfo('  spaced-file.ts  ')
    expect(result.filename).toBe('spaced-file.ts')
  })

  it('++ 后跟空格再跟文件名', () => {
    const result = parseNodeInfo('++  file.ts')
    expect(result.filename).toBe('file.ts')
    expect(result.diff).toBe('add')
  })

  it('仅空白字符', () => {
    const result = parseNodeInfo('   ')
    expect(result.filename).toBe('')
  })

  it('带扩展名的文件夹', () => {
    const result = parseNodeInfo('my.module/')
    expect(result.filename).toBe('my.module')
    expect(result.type).toBe('folder')
    expect(result.expanded).toBe(false)
  })

  it('** 聚焦 + ++ 新增组合', () => {
    const result = parseNodeInfo('++ **new-feature.ts**')
    expect(result.filename).toBe('new-feature.ts')
    expect(result.diff).toBe('add')
    expect(result.focus).toBe(true)
  })
})
