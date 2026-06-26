import path from 'node:path'
import MarkdownIt from 'markdown-it'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { wikiLinkMarkdownPlugin } from '../src/wikiLink'

// wikiLink 的 findFirstFile 内部调用 getLocaleWithPath，
// 后者依赖 globalThis.VITEPRESS_CONFIG，需在 beforeAll 中设置
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

describe('wikiLinkMarkdownPlugin', () => {
  // [[文件名]] 渲染为 <a> 链接，href 为文件名
  it('should render wiki link as anchor tag', () => {
    const md = new MarkdownIt()
    md.use(wikiLinkMarkdownPlugin, { root: '/root', files: [] })

    const result = md.render('[[guide]]', { path: '/root/index.md', relativePath: 'index.md' })
    expect(result).toContain('<a')
    expect(result).toContain('href="guide"')
    expect(result).toContain('>guide</a>')
  })

  // [[文件名#标题]] href 含 # slug（需匹配内部文件才会追加 slug）
  it('should render wiki link with heading anchor', () => {
    const md = new MarkdownIt()
    md.use(wikiLinkMarkdownPlugin, { root: '/root', files: ['guide.md'] })

    const result = md.render('[[guide#intro]]', { path: '/root/index.md', relativePath: 'index.md' })
    expect(result).toContain('href="guide.md#intro"')
  })

  // [[文件名#标题#标题2]] 多级标题（需匹配内部文件才会追加 slug）
  it('should render wiki link with multiple heading levels', () => {
    const md = new MarkdownIt()
    md.use(wikiLinkMarkdownPlugin, { root: '/root', files: ['guide.md'] })

    const result = md.render('[[guide#section#subsection]]', { path: '/root/index.md', relativePath: 'index.md' })
    // slug 取最后一个标题
    expect(result).toContain('href="guide.md#subsection"')
    // 文本含所有标题
    expect(result).toContain('guide &gt; section &gt; subsection')
  })

  // [[文件名|别名]] 链接文本为别名
  it('should use alias as link text', () => {
    const md = new MarkdownIt()
    md.use(wikiLinkMarkdownPlugin, { root: '/root', files: [] })

    const result = md.render('[[guide|指南]]', { path: '/root/index.md', relativePath: 'index.md' })
    expect(result).toContain('href="guide"')
    expect(result).toContain('>指南</a>')
  })

  // 无别名时文本回退为 "文件名 > 标题" 形式
  it('should fallback to filename > heading text when no alias', () => {
    const md = new MarkdownIt()
    md.use(wikiLinkMarkdownPlugin, { root: '/root', files: [] })

    const result = md.render('[[guide#intro]]', { path: '/root/index.md', relativePath: 'index.md' })
    expect(result).toContain('guide &gt; intro')
  })

  // HTTP 外部链接含 target="_blank" 和 rel="noopener noreferrer"
  it('should render external HTTP link with target and rel', () => {
    const md = new MarkdownIt()
    md.use(wikiLinkMarkdownPlugin, { root: '/root', files: [] })

    const result = md.render('[[https://example.com]]', { path: '/root/index.md', relativePath: 'index.md' })
    expect(result).toContain('href="https://example.com"')
    expect(result).toContain('target="_blank"')
    expect(result).toContain('rel="noopener noreferrer"')
  })

  // 页内锚点 [[#标题]] href 为 #slug
  it('should render page anchor link', () => {
    const md = new MarkdownIt()
    md.use(wikiLinkMarkdownPlugin, { root: '/root', files: [] })

    const result = md.render('[[#intro]]', { path: '/root/index.md', relativePath: 'index.md' })
    expect(result).toContain('href="#intro"')
  })

  // 空 [[]] 不匹配（太短）
  it('should not match empty wiki link', () => {
    const md = new MarkdownIt()
    md.use(wikiLinkMarkdownPlugin, { root: '/root', files: [] })

    const result = md.render('[[]]', { path: '/root/index.md', relativePath: 'index.md' })
    expect(result).not.toContain('<a href=')
  })

  // 不匹配的内容原样输出
  it('should not match non-wiki-link content', () => {
    const md = new MarkdownIt()
    md.use(wikiLinkMarkdownPlugin, { root: '/root', files: [] })

    const result = md.render('普通文本内容', { path: '/root/index.md', relativePath: 'index.md' })
    expect(result).not.toContain('<a')
  })

  // 内部文件匹配：提供 files 数组，[[guide]] 匹配到 guide.md 时生成相对路径 href
  it('should resolve internal file to relative path', () => {
    const md = new MarkdownIt()
    md.use(wikiLinkMarkdownPlugin, { root: '/root', files: ['guide.md'] })

    const result = md.render('[[guide]]', { path: '/root/index.md', relativePath: 'index.md' })
    expect(result).toContain('href="guide.md"')
    expect(result).toContain('>guide</a>')
  })

  // 不传 options 时触发 loadFiles() 回退（依赖 VITEPRESS_CONFIG）
  it('should work without options by calling loadFiles', () => {
    const md = new MarkdownIt()
    md.use(wikiLinkMarkdownPlugin)

    const result = md.render('[[guide]]', { path: path.join(__dirname, 'index.md'), relativePath: 'index.md' })
    expect(result).toContain('<a')
  })

  // ---- 额外覆盖 ----
  // [[ 开头但无 ]]，长度足够（覆盖 found=false 时 line 93-94）
  it('should not match wiki link without closing brackets', () => {
    const md = new MarkdownIt()
    md.use(wikiLinkMarkdownPlugin, { root: '/root', files: [] })

    const result = md.render('[[guide without close', { path: '/root/index.md', relativePath: 'index.md' })
    // 未闭合，不渲染为链接，原样输出
    expect(result).toContain('[[guide without close')
    expect(result).not.toContain('<a href=')
  })

  // HTTP 带标题的链接
  it('should render HTTP wiki link with heading anchor', () => {
    const md = new MarkdownIt()
    md.use(wikiLinkMarkdownPlugin, { root: '/root', files: [] })

    const result = md.render('[[https://example.com/page#section]]', { path: '/root/index.md', relativePath: 'index.md' })
    expect(result).toContain('href="https://example.com/page#section"')
    expect(result).toContain('target="_blank"')
  })

  // 页内锚点无文本
  it('should render page anchor with only hash', () => {
    const md = new MarkdownIt()
    md.use(wikiLinkMarkdownPlugin, { root: '/root', files: [] })

    const result = md.render('[[#my-section]]', { path: '/root/index.md', relativePath: 'index.md', title: 'My Page' })
    expect(result).toContain('href="#my-section"')
  })

  // 页内锚点无 title 回退到 basename
  it('should fallback to basename when no title for page anchor', () => {
    const md = new MarkdownIt()
    md.use(wikiLinkMarkdownPlugin, { root: '/root', files: [] })

    const result = md.render('[[#section]]', { path: '/root/page.md', relativePath: 'page.md' })
    expect(result).toContain('href="#section"')
    // textToken.content 为 "page > section" (basename + headings)
    expect(result).toContain('page &gt; section')
  })
})
