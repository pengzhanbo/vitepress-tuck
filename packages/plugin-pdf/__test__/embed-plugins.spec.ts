import MarkdownIt from 'markdown-it'
import { describe, expect, it } from 'vitest'
import { pdfMarkdownPlugin } from '../src/node/markdown'
import { pdf } from '../src/node/plugin'

describe('pdfMarkdownPlugin', () => {
  it('should render pdf embed', () => {
    const md = new MarkdownIt()
    md.use(pdfMarkdownPlugin)

    const result = md.render('@[pdf](https://example.com/sample.pdf)')
    expect(result).toContain('<VPPdf')
    expect(result).toContain('https://example.com/sample.pdf')
  })

  it('should support page number', () => {
    const md = new MarkdownIt()
    md.use(pdfMarkdownPlugin)

    const result = md.render('@[pdf page=3](https://example.com/sample.pdf)')
    expect(result).toContain('<VPPdf')
    expect(result).toContain('page="3"')

    const result2 = md.render('@[pdf p=3](https://example.com/sample.pdf)')
    expect(result2).toContain('<VPPdf')
    expect(result2).toContain('page="3"')
  })

  it('should support width and height options', () => {
    const md = new MarkdownIt()
    md.use(pdfMarkdownPlugin)

    const result = md.render('@[pdf width="800px" height="600px"](https://example.com/sample.pdf)')
    expect(result).toContain('width="800px"')
    expect(result).toContain('height="600px"')
  })

  it('should support zoom option', () => {
    const md = new MarkdownIt()
    md.use(pdfMarkdownPlugin)

    const result = md.render('@[pdf zoom="100"](https://example.com/sample.pdf)')
    expect(result).toContain('<VPPdf')
  })

  it('should support no-toolbar option', () => {
    const md = new MarkdownIt()
    md.use(pdfMarkdownPlugin)

    const result = md.render('@[pdf no-toolbar](https://example.com/sample.pdf)')
    expect(result).toContain('<VPPdf')
  })

  it('should default width to 100%', () => {
    const md = new MarkdownIt()
    md.use(pdfMarkdownPlugin)

    const result = md.render('@[pdf](https://example.com/sample.pdf)')
    expect(result).toContain('width="100%"')
  })

  it('should not match unrelated syntax', () => {
    const md = new MarkdownIt()
    md.use(pdfMarkdownPlugin)

    const result = md.render('Some text @[something](url)')
    expect(result).not.toContain('<VPPdf')
  })

  // p 别名也设置 page
  it('should support p alias for page number', () => {
    const md = new MarkdownIt()
    md.use(pdfMarkdownPlugin)

    const result = md.render('@[pdf p=5](https://example.com/sample.pdf)')
    expect(result).toContain('page="5"')
  })

  // page=0 时回退为默认 1（因 parsedPage > 0 判断）
  it('should fallback page to 1 when page is 0', () => {
    const md = new MarkdownIt()
    md.use(pdfMarkdownPlugin)

    const result = md.render('@[pdf page=0](https://example.com/sample.pdf)')
    expect(result).toContain('page="1"')
    expect(result).not.toContain('page="0"')
  })

  // page 为负数时回退为默认 1
  it('should fallback page to 1 when page is negative', () => {
    const md = new MarkdownIt()
    md.use(pdfMarkdownPlugin)

    const result = md.render('@[pdf page=-1](https://example.com/sample.pdf)')
    expect(result).toContain('page="1"')
    expect(result).not.toContain('page="-1"')
  })

  // page 非数字时回退为 1
  it('should fallback page to 1 when page is non-numeric', () => {
    const md = new MarkdownIt()
    md.use(pdfMarkdownPlugin)

    const result = md.render('@[pdf page=abc](https://example.com/sample.pdf)')
    expect(result).toContain('page="1"')
  })

  // zoom 非数字时回退为 50（因 +attrs.zoom || 50）
  it('should fallback zoom to 50 when zoom is non-numeric', () => {
    const md = new MarkdownIt()
    md.use(pdfMarkdownPlugin)

    const result = md.render('@[pdf zoom=abc](https://example.com/sample.pdf)')
    expect(result).toContain(':zoom="50"')
  })

  // zoom=0 时保留为 0
  it('should keep zoom as 0 when zoom is 0', () => {
    const md = new MarkdownIt()
    md.use(pdfMarkdownPlugin)

    const result = md.render('@[pdf zoom=0](https://example.com/sample.pdf)')
    expect(result).toContain(':zoom="0"')
  })

  // height 纯数字被 parseRect 加 px
  it('should add px unit to numeric height', () => {
    const md = new MarkdownIt()
    md.use(pdfMarkdownPlugin)

    const result = md.render('@[pdf height=600](https://example.com/sample.pdf)')
    expect(result).toContain('height="600px"')
  })

  // ratio 属性设置 ratio
  it('should support ratio attribute', () => {
    const md = new MarkdownIt()
    md.use(pdfMarkdownPlugin)

    const result = md.render('@[pdf ratio="16:9"](https://example.com/sample.pdf)')
    expect(result).toContain('ratio="16:9"')
  })

  // title 默认为 PDF 文件名（path.basename(src)）
  it('should set title to PDF filename from src', () => {
    const md = new MarkdownIt()
    md.use(pdfMarkdownPlugin)

    const result = md.render('@[pdf](https://example.com/sample.pdf)')
    expect(result).toContain('title="sample.pdf"')
  })

  // title 来自 URL 路径最后一段
  it('should set title from URL path last segment', () => {
    const md = new MarkdownIt()
    md.use(pdfMarkdownPlugin)

    const result = md.render('@[pdf](/files/doc.pdf)')
    expect(result).toContain('title="doc.pdf"')
  })

  // 空 src 时 title 为空字符串
  it('should set empty title when src is empty', () => {
    const md = new MarkdownIt()
    md.use(pdfMarkdownPlugin)

    const result = md.render('@[pdf]()')
    expect(result).toContain('title=""')
  })

  // 多个属性组合
  it('should support multiple attributes combined', () => {
    const md = new MarkdownIt()
    md.use(pdfMarkdownPlugin)

    const result = md.render('@[pdf page=2 no-toolbar zoom="100" width="100%" height="600px" ratio="16:9"](/files/doc.pdf)')
    expect(result).toContain('<VPPdf')
    expect(result).toContain('page="2"')
    expect(result).toContain('no-toolbar')
    expect(result).toContain(':zoom="100"')
    expect(result).toContain('width="100%"')
    expect(result).toContain('height="600px"')
    expect(result).toContain('ratio="16:9"')
    expect(result).toContain('title="doc.pdf"')
  })

  // 不带任何属性的默认值
  it('should use default values when no attributes provided', () => {
    const md = new MarkdownIt()
    md.use(pdfMarkdownPlugin)

    const result = md.render('@[pdf](https://example.com/sample.pdf)')
    expect(result).toContain(':page="1"')
    expect(result).toContain(':zoom="50"')
    expect(result).toContain('width="100%"')
    expect(result).toContain('height=""')
    expect(result).toContain('ratio=""')
    expect(result).toContain('title="sample.pdf"')
    // noToolbar 默认 false，不渲染 no-toolbar 属性
    expect(result).not.toContain('no-toolbar')
  })
})

describe('pdf plugin factory', () => {
  it('should have name vitepress-plugin-pdf', () => {
    const plugin = pdf()
    expect(plugin.name).toBe('vitepress-plugin-pdf')
  })

  it('should include VPPdf in componentResolver', () => {
    const plugin = pdf()
    expect(plugin.componentResolver).toContain('VPPdf')
  })

  it('should expose markdown.config as a function', () => {
    const plugin = pdf()
    expect(typeof plugin.markdown?.config).toBe('function')
  })

  it('should configure vite.ssr.noExternal with vitepress-plugin-pdf', () => {
    const plugin = pdf()
    expect(plugin.vite?.ssr?.noExternal).toContain('vitepress-plugin-pdf')
  })

  it('should configure vite.optimizeDeps.include with @pengzhanbo/utils', () => {
    const plugin = pdf()
    expect(plugin.vite?.optimizeDeps?.include).toContain('@pengzhanbo/utils')
  })
})
