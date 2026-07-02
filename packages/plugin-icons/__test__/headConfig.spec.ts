import type { FontAwesomeOptions, IconfontOptions } from '../src/node/types'
import { describe, expect, it } from 'vitest'
import { createHeadConfig } from '../src/node/headConfig'

// createHeadConfig - 无配置
describe('createHeadConfig - 无配置', () => {
  it('iconfont 和 fontawesome 均未配置时返回空数组', () => {
    expect(createHeadConfig(undefined, undefined)).toEqual([])
  })
})

// createHeadConfig - iconfont 配置
describe('createHeadConfig - iconfont', () => {
  it('css 资源生成 link 标签', () => {
    const iconfont: IconfontOptions = {
      provider: 'iconfont',
      assets: '//at.alicdn.com/w/font.css',
    }
    const result = createHeadConfig(iconfont, undefined)
    expect(result).toEqual([
      ['link', { rel: 'stylesheet', href: '//at.alicdn.com/w/font.css' }],
    ])
  })

  it('js 资源生成 script 标签', () => {
    const iconfont: IconfontOptions = {
      provider: 'iconfont',
      assets: '//at.alicdn.com/w/font.js',
    }
    const result = createHeadConfig(iconfont, undefined)
    expect(result).toEqual([
      ['script', { src: '//at.alicdn.com/w/font.js' }],
    ])
  })

  it('数组资源生成多个标签', () => {
    const iconfont: IconfontOptions = {
      provider: 'iconfont',
      assets: ['//at.alicdn.com/w/font.css', '//at.alicdn.com/w/font.js'],
    }
    const result = createHeadConfig(iconfont, undefined)
    expect(result).toEqual([
      ['link', { rel: 'stylesheet', href: '//at.alicdn.com/w/font.css' }],
      ['script', { src: '//at.alicdn.com/w/font.js' }],
    ])
  })

  it('非 css/js 后缀的资源被跳过', () => {
    const iconfont: IconfontOptions = {
      provider: 'iconfont',
      assets: '//at.alicdn.com/w/font.woff',
    }
    const result = createHeadConfig(iconfont, undefined)
    expect(result).toEqual([])
  })

  it('混合有效和无效资源，仅生成有效资源的标签', () => {
    const iconfont: IconfontOptions = {
      provider: 'iconfont',
      assets: ['//at.alicdn.com/w/font.woff', '//at.alicdn.com/w/font.css'],
    }
    const result = createHeadConfig(iconfont, undefined)
    expect(result).toHaveLength(1)
    expect(result[0]).toEqual(['link', { rel: 'stylesheet', href: '//at.alicdn.com/w/font.css' }])
  })

  it('https 资源链接', () => {
    const iconfont: IconfontOptions = {
      provider: 'iconfont',
      assets: 'https://example.com/font.css',
    }
    const result = createHeadConfig(iconfont, undefined)
    expect(result).toEqual([
      ['link', { rel: 'stylesheet', href: 'https://example.com/font.css' }],
    ])
  })

  it('http 资源链接', () => {
    const iconfont: IconfontOptions = {
      provider: 'iconfont',
      assets: 'http://example.com/font.js',
    }
    const result = createHeadConfig(iconfont, undefined)
    expect(result).toEqual([
      ['script', { src: 'http://example.com/font.js' }],
    ])
  })
})

// createHeadConfig - fontawesome 配置
describe('createHeadConfig - fontawesome', () => {
  it('内置 fontawesome 资源生成 3 个 script 标签（solid, regular, fontawesome）', () => {
    const fontawesome: FontAwesomeOptions = {
      provider: 'fontawesome',
      assets: 'fontawesome',
    }
    const result = createHeadConfig(undefined, fontawesome)
    expect(result).toHaveLength(3)
    expect(result[0]).toEqual([
      'script',
      { 'src': 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/js/solid.min.js', 'data-auto-replace-svg': 'nest' },
    ])
    expect(result[1]).toEqual([
      'script',
      { 'src': 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/js/regular.min.js', 'data-auto-replace-svg': 'nest' },
    ])
    expect(result[2]).toEqual([
      'script',
      { 'src': 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/js/fontawesome.min.js', 'data-auto-replace-svg': 'nest' },
    ])
  })

  it('内置 fontawesome-with-brands 资源生成 1 个 brands script 标签', () => {
    const fontawesome: FontAwesomeOptions = {
      provider: 'fontawesome',
      assets: 'fontawesome-with-brands',
    }
    const result = createHeadConfig(undefined, fontawesome)
    expect(result).toEqual([
      ['script', { 'src': 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/js/brands.min.js', 'data-auto-replace-svg': 'nest' }],
    ])
  })

  it('自定义 css 资源生成 link 标签', () => {
    const fontawesome: FontAwesomeOptions = {
      provider: 'fontawesome',
      assets: 'https://example.com/fontawesome.css',
    }
    const result = createHeadConfig(undefined, fontawesome)
    expect(result).toEqual([
      ['link', { rel: 'stylesheet', href: 'https://example.com/fontawesome.css' }],
    ])
  })

  it('自定义 js 资源生成 script 标签（带 data-auto-replace-svg）', () => {
    const fontawesome: FontAwesomeOptions = {
      provider: 'fontawesome',
      assets: 'https://example.com/fontawesome.js',
    }
    const result = createHeadConfig(undefined, fontawesome)
    expect(result).toEqual([
      ['script', { 'src': 'https://example.com/fontawesome.js', 'data-auto-replace-svg': 'nest' }],
    ])
  })

  it('数组资源混合内置和自定义', () => {
    const fontawesome: FontAwesomeOptions = {
      provider: 'fontawesome',
      assets: ['fontawesome-with-brands', 'https://example.com/custom.css'],
    }
    const result = createHeadConfig(undefined, fontawesome)
    expect(result).toHaveLength(2)
    expect(result[0]).toEqual([
      'script',
      { 'src': 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/js/brands.min.js', 'data-auto-replace-svg': 'nest' },
    ])
    expect(result[1]).toEqual([
      'link',
      { rel: 'stylesheet', href: 'https://example.com/custom.css' },
    ])
  })

  it('非 css/js 后缀的自定义资源被跳过', () => {
    const fontawesome: FontAwesomeOptions = {
      provider: 'fontawesome',
      assets: 'https://example.com/fontawesome.woff',
    }
    const result = createHeadConfig(undefined, fontawesome)
    expect(result).toEqual([])
  })

  it('完整 fontawesome + 自定义 js 数组', () => {
    const fontawesome: FontAwesomeOptions = {
      provider: 'fontawesome',
      assets: ['fontawesome', 'https://example.com/custom.js'],
    }
    const result = createHeadConfig(undefined, fontawesome)
    expect(result).toHaveLength(4)
    // 前 3 个为内置 solid, regular, fontawesome
    expect(result[0][0]).toBe('script')
    expect(result[1][0]).toBe('script')
    expect(result[2][0]).toBe('script')
    // 第 4 个为自定义 js
    expect(result[3]).toEqual([
      'script',
      { 'src': 'https://example.com/custom.js', 'data-auto-replace-svg': 'nest' },
    ])
  })
})

// createHeadConfig - iconfont + fontawesome 组合
describe('createHeadConfig - 组合配置', () => {
  it('iconfont + fontawesome 同时配置时合并所有标签', () => {
    const iconfont: IconfontOptions = {
      provider: 'iconfont',
      assets: '//at.alicdn.com/w/font.css',
    }
    const fontawesome: FontAwesomeOptions = {
      provider: 'fontawesome',
      assets: 'fontawesome-with-brands',
    }
    const result = createHeadConfig(iconfont, fontawesome)
    expect(result).toHaveLength(2)
    // 第 1 个为 iconfont css
    expect(result[0]).toEqual([
      'link',
      { rel: 'stylesheet', href: '//at.alicdn.com/w/font.css' },
    ])
    // 第 2 个为 fontawesome brands
    expect(result[1]).toEqual([
      'script',
      { 'src': 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/js/brands.min.js', 'data-auto-replace-svg': 'nest' },
    ])
  })

  it('iconfont 多资源 + fontawesome 多资源', () => {
    const iconfont: IconfontOptions = {
      provider: 'iconfont',
      assets: ['//at.alicdn.com/w/font.css', '//at.alicdn.com/w/font.js'],
    }
    const fontawesome: FontAwesomeOptions = {
      provider: 'fontawesome',
      assets: ['fontawesome', 'https://example.com/custom.css'],
    }
    const result = createHeadConfig(iconfont, fontawesome)
    // iconfont: 2 个（css + js）
    // fontawesome: 4 个（3 内置 + 1 自定义 css）
    expect(result).toHaveLength(6)
  })
})
