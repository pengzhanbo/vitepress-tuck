import MarkdownIt from 'markdown-it'
import { describe, expect, it } from 'vitest'
import { qrcodeMarkdownPlugin } from '../src/node/markdown'

describe('qrcodeMarkdownPlugin', () => {
  it('should render qrcode from embed syntax', () => {
    const md = new MarkdownIt()
    md.use(qrcodeMarkdownPlugin)

    const result = md.render('@[qrcode](https://www.baidu.com)')
    expect(result).toContain('<VPQrcode')
  })

  it('should support card mode', () => {
    const md = new MarkdownIt()
    md.use(qrcodeMarkdownPlugin)

    const result = md.render('@[qrcode card](https://www.baidu.com)')
    expect(result).toContain('<VPQrcode')
    expect(result).toContain('mode="card"')
  })

  it('should support title attribute', () => {
    const md = new MarkdownIt()
    md.use(qrcodeMarkdownPlugin)

    const result = md.render('@[qrcode title="Scan Me"](https://www.baidu.com)')
    expect(result).toContain('title="Scan Me"')
  })

  it('should render qrcode from container syntax', () => {
    const md = new MarkdownIt()
    md.use(qrcodeMarkdownPlugin)

    const result = md.render('::: qrcode\nhttps://www.baidu.com\n:::')
    expect(result).toContain('<VPQrcode')
  })

  it('should support container with card mode', () => {
    const md = new MarkdownIt()
    md.use(qrcodeMarkdownPlugin)

    const result = md.render('::: qrcode card title="QR"\nhttps://www.baidu.com\n:::')
    expect(result).toContain('<VPQrcode')
    expect(result).toContain('mode="card"')
  })

  it('should render text qrcode', () => {
    const md = new MarkdownIt()
    md.use(qrcodeMarkdownPlugin)

    const result = md.render('@[qrcode](Hello World)')
    expect(result).toContain('<VPQrcode')
  })

  it('should support width option', () => {
    const md = new MarkdownIt()
    md.use(qrcodeMarkdownPlugin)

    const result = md.render('@[qrcode width="200"](https://www.baidu.com)')
    expect(result).toContain('<VPQrcode')
  })
})
