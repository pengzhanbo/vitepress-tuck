import MarkdownIt from 'markdown-it'
import { describe, expect, it } from 'vitest'
import { pdfMarkdownPlugin } from '../src/node/pdfPlugin'

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

    const result = md.render('@[pdf 3](https://example.com/sample.pdf)')
    expect(result).toContain('<VPPdf')
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
})
