import MarkdownIt from 'markdown-it'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { findFirstFile, loadFiles } from '../src/loadFiles'
import { obsidianMarkdownPlugin } from '../src/obsidian'
import { obsidian } from '../src/plugin'

// findFirstFile 内部调用 getLocaleWithPath，后者依赖 globalThis.VITEPRESS_CONFIG
// obsidianMarkdownPlugin 默认启用 embedLink/wikiLink 时会调用 loadFiles()，同样依赖
beforeAll(() => {
  (globalThis as any).VITEPRESS_CONFIG = {
    srcDir: __dirname,
    root: __dirname,
    userConfig: { locales: {} },
  }
})

afterAll(() => {
  delete (globalThis as any).VITEPRESS_CONFIG
})

describe('findFirstFile', () => {
  // 精确匹配：files=['guide.md'], filename='guide' -> 'guide.md'
  it('should match exact filename', () => {
    const result = findFirstFile(['guide.md'], 'index.md', 'guide')
    expect(result).toBe('guide.md')
  })

  // 带扩展名匹配：filename='guide.md' -> 'guide.md'
  it('should match filename with extension', () => {
    const result = findFirstFile(['guide.md'], 'index.md', 'guide.md')
    expect(result).toBe('guide.md')
  })

  // 相对路径：filename='./guide', currentPath='index.md' -> 'guide.md'
  it('should match relative path', () => {
    const result = findFirstFile(['guide.md'], 'index.md', './guide')
    expect(result).toBe('guide.md')
  })

  // 目录：filename='guide/' 追加 index.md
  it('should match directory and append index.md', () => {
    const result = findFirstFile(['guide/index.md'], 'index.md', 'guide/')
    expect(result).toBe('guide/index.md')
  })

  // 同语言优先：files=['en/guide.md', 'guide.md'], currentPath='en/index.md' -> 'en/guide.md'
  it('should prefer same locale file', () => {
    const result = findFirstFile(['en/guide.md', 'guide.md'], 'en/index.md', 'guide')
    expect(result).toBe('en/guide.md')
  })

  // 未匹配返回 undefined
  it('should return undefined when no match', () => {
    const result = findFirstFile(['other.md'], 'index.md', 'guide')
    expect(result).toBeUndefined()
  })
})

describe('loadFiles', () => {
  // loadFiles 从 VITEPRESS_CONFIG.srcDir 扫描 markdown 文件
  it('should load files from srcDir', () => {
    const result = loadFiles()
    expect(result.root).toBe(__dirname)
    expect(Array.isArray(result.files)).toBe(true)
  })

  // loadFiles 返回的文件包含 fixtures 目录下的 .md 文件
  it('should return markdown files from fixtures directory', () => {
    const result = loadFiles()
    // fixtures 目录下有 guide.md, empty.md, with-container.md, headings.md
    expect(result.files).toContain('fixtures/guide.md')
    expect(result.files).toContain('fixtures/empty.md')
    expect(result.files).toContain('fixtures/with-container.md')
    expect(result.files).toContain('fixtures/headings.md')
  })

  // loadFiles 忽略 dist, node_modules, .vitepress 目录
  it('should ignore dist, node_modules, .vitepress directories', () => {
    const result = loadFiles()
    // 不应包含这些目录中的文件
    expect(result.files.every(f => !f.includes('dist/'))).toBe(true)
    expect(result.files.every(f => !f.includes('node_modules/'))).toBe(true)
    expect(result.files.every(f => !f.includes('.vitepress/'))).toBe(true)
  })

  // loadFiles 按目录深度从浅到深排序
  it('should sort files by directory depth', () => {
    const result = loadFiles()
    // 所有 fixtures/ 下的文件深度相同，但应存在
    expect(result.files.length).toBeGreaterThan(0)
    // 验证排序：浅层文件在前
    for (let i = 1; i < result.files.length; i++) {
      const prevDepth = result.files[i - 1]!.split('/').length
      const currDepth = result.files[i]!.split('/').length
      expect(prevDepth).toBeLessThanOrEqual(currDepth)
    }
  })
})

describe('obsidianMarkdownPlugin', () => {
  // 默认启用所有特性（callout, comment, embedLink, wikiLink）
  it('should enable all features by default', () => {
    const md = new MarkdownIt()
    md.use(obsidianMarkdownPlugin)

    const env = { path: '/root/index.md', relativePath: 'index.md' }

    // callout 默认启用
    const calloutResult = md.render('> [!note]\n> content', env)
    expect(calloutResult).toContain('custom-block')

    // comment 默认启用
    const commentResult = md.render('text %%hidden%% more', env)
    expect(commentResult).not.toContain('hidden')

    // wikiLink 默认启用
    const wikiResult = md.render('[[guide]]', env)
    expect(wikiResult).toContain('<a')

    // embedLink 默认启用
    const embedResult = md.render('![[image.png]]', env)
    expect(embedResult).toContain('<img')
  })

  // callout=false 时禁用 callout
  it('should disable callout when callout is false', () => {
    const md = new MarkdownIt()
    md.use(obsidianMarkdownPlugin, { callout: false, embedLink: false, wikiLink: false })

    const result = md.render('> [!note]\n> content')
    // 禁用后不渲染为 custom-block，而是普通 blockquote
    expect(result).not.toContain('custom-block')
  })

  // comment=false 时禁用 comment
  it('should disable comment when comment is false', () => {
    const md = new MarkdownIt()
    md.use(obsidianMarkdownPlugin, { comment: false, embedLink: false, wikiLink: false })

    const result = md.render('text %%hidden%% more')
    // 禁用后注释内容原样输出
    expect(result).toContain('hidden')
  })

  // wikiLink=false 时只禁用 wikiLink，其他特性仍工作
  it('should disable wikiLink only when wikiLink is false', () => {
    const md = new MarkdownIt()
    md.use(obsidianMarkdownPlugin, { wikiLink: false })

    const env = { path: '/root/index.md', relativePath: 'index.md' }
    // wikiLink 禁用：[[guide]] 不渲染为链接
    const wikiResult = md.render('[[guide]]', env)
    expect(wikiResult).not.toContain('<a')

    // embedLink 仍启用
    const embedResult = md.render('![[image.png]]', env)
    expect(embedResult).toContain('<img')

    // callout 仍启用
    const calloutResult = md.render('> [!note]\n> content', env)
    expect(calloutResult).toContain('custom-block')
  })

  // embedLink=false 时只禁用 embedLink，其他特性仍工作
  it('should disable embedLink only when embedLink is false', () => {
    const md = new MarkdownIt()
    md.use(obsidianMarkdownPlugin, { embedLink: false })

    const env = { path: '/root/index.md', relativePath: 'index.md' }
    // embedLink 禁用：![[image.png]] 不渲染为图片
    const embedResult = md.render('![[image.png]]', env)
    expect(embedResult).not.toContain('<img')

    // wikiLink 仍启用
    const wikiResult = md.render('[[guide]]', env)
    expect(wikiResult).toContain('<a')

    // comment 仍启用
    const commentResult = md.render('text %%hidden%% more', env)
    expect(commentResult).not.toContain('hidden')
  })
})

describe('obsidian plugin factory', () => {
  // name 为 'vitepress-plugin-obsidian'
  it('should have name vitepress-plugin-obsidian', () => {
    const plugin = obsidian()
    expect(plugin.name).toBe('vitepress-plugin-obsidian')
  })

  // markdown.config 为函数
  it('should expose markdown.config as a function', () => {
    const plugin = obsidian()
    expect(typeof plugin.markdown?.config).toBe('function')
  })

  // 调用 plugin.markdown.config(md) 注册 markdown 插件
  it('should register markdown plugins when config is called', () => {
    const plugin = obsidian()
    const md = new MarkdownIt()
    // 调用 config 函数，触发 obsidianMarkdownPlugin 注册
    plugin.markdown!.config?.(md as any)

    const env = { path: '/root/index.md', relativePath: 'index.md' }
    // 验证 callout 已注册
    expect(md.render('> [!note]\n> content', env)).toContain('custom-block')
    // 验证 comment 已注册
    expect(md.render('text %%hidden%% more', env)).not.toContain('hidden')
    // 验证 embedLink 已注册
    expect(md.render('![[image.png]]', env)).toContain('<img')
    // 验证 wikiLink 已注册
    expect(md.render('[[guide]]', env)).toContain('<a')
  })

  // 调用 plugin.markdown.config(md) 带选项
  it('should respect options when config is called', () => {
    const plugin = obsidian({ callout: false })
    const md = new MarkdownIt()
    plugin.markdown!.config?.(md as any)

    // callout 禁用
    expect(md.render('> [!note]\n> content')).not.toContain('custom-block')
  })
})
