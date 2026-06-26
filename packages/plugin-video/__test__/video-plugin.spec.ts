import MarkdownIt from 'markdown-it'
import { describe, expect, it } from 'vitest'
import { artPlayerVitePlugin } from '../src/node/artplayer'
import { videoMarkdownPlugin } from '../src/node/markdown'
import { video } from '../src/node/plugin'

// artPlayerVitePlugin Vite 插件测试
describe('artPlayerVitePlugin', () => {
  it('返回 name 为 vitepress-plugin-video-artplayer 的 Vite 插件对象', () => {
    const plugin = artPlayerVitePlugin() as any
    expect(plugin.name).toBe('vitepress-plugin-video-artplayer')
  })

  it('config() 返回 define 对象,含三个布尔标志', () => {
    const plugin = artPlayerVitePlugin() as any
    const config = plugin.config({})
    expect(config).toBeDefined()
    expect(config.define).toBeDefined()
    expect(typeof config.define.__TUCK_ARTPLAYER_DASHJS__).toBe('boolean')
    expect(typeof config.define.__TUCK_ARTPLAYER_HLSJS__).toBe('boolean')
    expect(typeof config.define.__TUCK_ARTPLAYER_MPEGTSJS__).toBe('boolean')
  })

  it('onLog 钩子:对含 COMMONJS_VARIABLE_IN_ESM 和 dashjs 的 log 返回 false', () => {
    const plugin = artPlayerVitePlugin() as any
    const result = plugin.onLog('warn', { message: 'COMMONJS_VARIABLE_IN_ESM dashjs something' })
    expect(result).toBe(false)
  })

  it('onLog 钩子:对其他 log 返回 undefined', () => {
    const plugin = artPlayerVitePlugin() as any
    const result = plugin.onLog('warn', { message: 'some other message' })
    expect(result).toBeUndefined()
  })
})

// videoMarkdownPlugin 聚合插件测试
describe('videoMarkdownPlugin', () => {
  it('默认启用所有 provider', () => {
    const md = new MarkdownIt()
    md.use(videoMarkdownPlugin)

    expect(md.render('@[bilibili](BV1xx)')).toContain('<VPVideoEmbed')
    expect(md.render('@[youtube](dQw4w9WgXcQ)')).toContain('<VPVideoEmbed')
    expect(md.render('@[acfun](ac4456321)')).toContain('<VPVideoEmbed')
    expect(md.render('@[artPlayer](https://example.com/video.mp4)')).toContain('<VPArtPlayer')
  })

  it('options.bilibili=false 时禁用 bilibili', () => {
    const md = new MarkdownIt()
    md.use(videoMarkdownPlugin, { bilibili: false })

    const result = md.render('@[bilibili](BV1xx)')
    expect(result).not.toContain('VPVideoEmbed')
  })

  it('options.youtube=false 时禁用 youtube', () => {
    const md = new MarkdownIt()
    md.use(videoMarkdownPlugin, { youtube: false })

    const result = md.render('@[youtube](dQw4w9WgXcQ)')
    expect(result).not.toContain('VPVideoEmbed')
  })

  it('options.acfun=false 时禁用 acfun', () => {
    const md = new MarkdownIt()
    md.use(videoMarkdownPlugin, { acfun: false })

    const result = md.render('@[acfun](ac4456321)')
    expect(result).not.toContain('VPVideoEmbed')
  })

  it('options.artplayer=false 时禁用 artPlayer', () => {
    const md = new MarkdownIt()
    md.use(videoMarkdownPlugin, { artplayer: false })

    const result = md.render('@[artPlayer](https://example.com/video.mp4)')
    expect(result).not.toContain('VPArtPlayer')
  })

  it('全部禁用时所有嵌入语法不被处理', () => {
    const md = new MarkdownIt()
    md.use(videoMarkdownPlugin, {
      bilibili: false,
      youtube: false,
      acfun: false,
      artplayer: false,
    })

    expect(md.render('@[bilibili](BV1xx)')).not.toContain('VPVideoEmbed')
    expect(md.render('@[youtube](dQw4w9WgXcQ)')).not.toContain('VPVideoEmbed')
    expect(md.render('@[acfun](ac4456321)')).not.toContain('VPVideoEmbed')
    expect(md.render('@[artPlayer](https://example.com/video.mp4)')).not.toContain('VPArtPlayer')
  })
})

// video 插件工厂测试
describe('video 插件工厂', () => {
  it('name 为 vitepress-plugin-video', () => {
    const plugin = video() as any
    expect(plugin.name).toBe('vitepress-plugin-video')
  })

  it('componentResolver 包含 VPArtPlayer 和 VPVideoEmbed', () => {
    const plugin = video() as any
    expect(plugin.componentResolver).toEqual(['VPArtPlayer', 'VPVideoEmbed'])
  })

  it('markdown.config 为函数', () => {
    const plugin = video() as any
    expect(typeof plugin.markdown?.config).toBe('function')
  })

  it('markdown.config 可注册 markdown-it 规则', () => {
    const plugin = video() as any
    const md = new MarkdownIt()
    plugin.markdown.config(md)
    // 验证规则已注册,能正常渲染嵌入语法
    expect(md.render('@[bilibili](BV1xx)')).toContain('<VPVideoEmbed')
  })

  it('vite.plugins 非空', () => {
    const plugin = video() as any
    expect(plugin.vite?.plugins).toBeDefined()
    expect(plugin.vite.plugins.length).toBeGreaterThan(0)
  })

  it('vite.optimizeDeps.include 含 artplayer 等', () => {
    const plugin = video() as any
    expect(plugin.vite?.optimizeDeps?.include).toContain('artplayer')
    expect(plugin.vite.optimizeDeps.include).toContain('dashjs')
    expect(plugin.vite.optimizeDeps.include).toContain('hls.js')
  })

  it('vite.ssr.noExternal 含 vitepress-plugin-video', () => {
    const plugin = video() as any
    expect(plugin.vite?.ssr?.noExternal).toContain('vitepress-plugin-video')
  })
})
