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

  // 内部链接文本通过 VitePress 路由系统解析
  it('should resolve internal link text via route system', () => {
    ;(globalThis as any).VITEPRESS_CONFIG = {
      site: { base: '/' },
      userConfig: { locales: {} },
    }
    try {
      const md = new MarkdownIt()
      md.use(qrcodeMarkdownPlugin)

      const result = md.render('@[qrcode](./guide.md)')
      expect(result).toContain('text="./guide.html"')
    }
    finally {
      delete (globalThis as any).VITEPRESS_CONFIG
    }
  })

  // 页内 hash 与协议链接原样保留
  it('should keep hash and protocol text as-is', () => {
    const md = new MarkdownIt()
    md.use(qrcodeMarkdownPlugin)

    expect(md.render('@[qrcode](#section)')).toContain('text="#section"')
    expect(md.render('@[qrcode](https://www.baidu.com)')).toContain('text="https://www.baidu.com"')
  })
})
