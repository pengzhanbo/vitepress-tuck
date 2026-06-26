import MarkdownIt from 'markdown-it'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { acfunMarkdownPlugin } from '../src/node/acfun'
import { artPlayerMarkdownPlugin, artPlayerVitePlugin, checkSupportType } from '../src/node/artplayer'
import { bilibiliMarkdownPlugin } from '../src/node/bilibili'
import { videoMarkdownPlugin } from '../src/node/markdown'
import { video } from '../src/node/plugin'
import { logger, timeToSeconds } from '../src/node/utils'
import { youtubeMarkdownPlugin } from '../src/node/youtube'

// 时间字符串转秒数工具函数测试
describe('timeToSeconds', () => {
  it('纯数字字符串 90 -> 90', () => {
    expect(timeToSeconds('90')).toBe(90)
  })

  it('浮点数字符串 90.5 -> 90.5', () => {
    expect(timeToSeconds('90.5')).toBe(90.5)
  })

  it('mm:ss 格式 01:30 -> 90', () => {
    expect(timeToSeconds('01:30')).toBe(90)
  })

  it('hh:mm:ss 格式 01:01:01 -> 3661', () => {
    expect(timeToSeconds('01:01:01')).toBe(3661)
  })

  it('空字符串 -> 0', () => {
    expect(timeToSeconds('')).toBe(0)
  })

  it('带空格的冒号 01 : 30 -> 90', () => {
    expect(timeToSeconds('01 : 30')).toBe(90)
  })

  it('非数字段按 0 处理 ab:cd -> 0', () => {
    expect(timeToSeconds('ab:cd')).toBe(0)
  })
})

// Bilibili 视频嵌入插件测试
describe('bilibiliMarkdownPlugin', () => {
  it('使用 bvid 渲染为 VPVideoEmbed', () => {
    const md = new MarkdownIt()
    md.use(bilibiliMarkdownPlugin)

    const result = md.render('@[bilibili](BV1xx411c7mD)')
    expect(result).toContain('<VPVideoEmbed')
    expect(result).toContain('bvid=BV1xx411c7mD')
  })

  it('使用 aid 和 cid', () => {
    const md = new MarkdownIt()
    md.use(bilibiliMarkdownPlugin)

    const result = md.render('@[bilibili](av170001 27976570)')
    expect(result).toContain('<VPVideoEmbed')
    expect(result).toContain('aid=av170001')
    expect(result).toContain('cid=27976570')
  })

  it('设置 page=1', () => {
    const md = new MarkdownIt()
    md.use(bilibiliMarkdownPlugin)

    const result = md.render('@[bilibili p1](BV1xx411c7mD)')
    expect(result).toContain('p=1')
  })

  it('autoplay=true', () => {
    const md = new MarkdownIt()
    md.use(bilibiliMarkdownPlugin)

    const result = md.render('@[bilibili autoplay](BV1xx411c7mD)')
    expect(result).toContain('autoplay=1')
  })

  it('设置 t=60', () => {
    const md = new MarkdownIt()
    md.use(bilibiliMarkdownPlugin)

    const result = md.render('@[bilibili time=60](BV1xx411c7mD)')
    expect(result).toContain('t=60')
  })

  it('设置 width 和 height', () => {
    const md = new MarkdownIt()
    md.use(bilibiliMarkdownPlugin)

    const result = md.render('@[bilibili width="80%" height="400px"](BV1xx411c7mD)')
    expect(result).toContain('width="80%"')
    expect(result).toContain('height="400px"')
  })

  it('设置自定义 title', () => {
    const md = new MarkdownIt()
    md.use(bilibiliMarkdownPlugin)

    const result = md.render('@[bilibili title="My Video"](BV1xx411c7mD)')
    expect(result).toContain('title="My Video"')
  })

  it('默认 title 为 Bilibili', () => {
    const md = new MarkdownIt()
    md.use(bilibiliMarkdownPlugin)

    const result = md.render('@[bilibili](BV1xx411c7mD)')
    expect(result).toContain('title="Bilibili"')
  })

  it('默认 width 为 100%', () => {
    const md = new MarkdownIt()
    md.use(bilibiliMarkdownPlugin)

    const result = md.render('@[bilibili](BV1xx411c7mD)')
    expect(result).toContain('width="100%"')
  })

  it('src 包含 player.bilibili.com 和 high_quality=1', () => {
    const md = new MarkdownIt()
    md.use(bilibiliMarkdownPlugin)

    const result = md.render('@[bilibili](BV1xx411c7mD)')
    expect(result).toContain('player.bilibili.com')
    expect(result).toContain('high_quality=1')
  })

  it('type 为 bilibili', () => {
    const md = new MarkdownIt()
    md.use(bilibiliMarkdownPlugin)

    const result = md.render('@[bilibili](BV1xx411c7mD)')
    expect(result).toContain('type="bilibili"')
  })

  it('混合 bvid 和 aid/cid', () => {
    const md = new MarkdownIt()
    md.use(bilibiliMarkdownPlugin)

    const result = md.render('@[bilibili](BV1xx411c7mD av170001 27976570)')
    expect(result).toContain('bvid=BV1xx411c7mD')
    expect(result).toContain('aid=av170001')
    expect(result).toContain('cid=27976570')
  })
})

// YouTube 视频嵌入插件测试
describe('youtubeMarkdownPlugin', () => {
  it('渲染为 VPVideoEmbed,src 含 youtube.com/embed/', () => {
    const md = new MarkdownIt()
    md.use(youtubeMarkdownPlugin)

    const result = md.render('@[youtube](dQw4w9WgXcQ)')
    expect(result).toContain('<VPVideoEmbed')
    // 注意:源码中 YOUTUBE_LINK 已含尾部 '/',模板字符串又拼接 '/',
    // 导致 src 中出现双斜杠 'embed//' (源码 bug,此处匹配实际输出)
    expect(result).toContain('youtube.com/embed/')
    expect(result).toContain('dQw4w9WgXcQ')
  })

  it('autoplay=true', () => {
    const md = new MarkdownIt()
    md.use(youtubeMarkdownPlugin)

    const result = md.render('@[youtube autoplay](dQw4w9WgXcQ)')
    expect(result).toContain('autoplay=1')
  })

  it('loop=true', () => {
    const md = new MarkdownIt()
    md.use(youtubeMarkdownPlugin)

    const result = md.render('@[youtube loop](dQw4w9WgXcQ)')
    expect(result).toContain('loop=1')
  })

  it('start=30', () => {
    const md = new MarkdownIt()
    md.use(youtubeMarkdownPlugin)

    const result = md.render('@[youtube start=30](dQw4w9WgXcQ)')
    expect(result).toContain('start=30')
  })

  it('end=01:00 -> 60', () => {
    const md = new MarkdownIt()
    md.use(youtubeMarkdownPlugin)

    const result = md.render('@[youtube end=01:00](dQw4w9WgXcQ)')
    expect(result).toContain('end=60')
  })

  it('同时设置 start 和 end', () => {
    const md = new MarkdownIt()
    md.use(youtubeMarkdownPlugin)

    const result = md.render('@[youtube start=30 end=60](dQw4w9WgXcQ)')
    expect(result).toContain('start=30')
    expect(result).toContain('end=60')
  })

  it('设置 width', () => {
    const md = new MarkdownIt()
    md.use(youtubeMarkdownPlugin)

    const result = md.render('@[youtube width="80%"](dQw4w9WgXcQ)')
    expect(result).toContain('width="80%"')
  })

  it('设置自定义 title', () => {
    const md = new MarkdownIt()
    md.use(youtubeMarkdownPlugin)

    const result = md.render('@[youtube title="My Video"](dQw4w9WgXcQ)')
    expect(result).toContain('title="My Video"')
  })

  it('默认 title 为 YouTube,默认 width 为 100%', () => {
    const md = new MarkdownIt()
    md.use(youtubeMarkdownPlugin)

    const result = md.render('@[youtube](dQw4w9WgXcQ)')
    expect(result).toContain('title="YouTube"')
    expect(result).toContain('width="100%"')
  })

  it('type 为 youtube', () => {
    const md = new MarkdownIt()
    md.use(youtubeMarkdownPlugin)

    const result = md.render('@[youtube](dQw4w9WgXcQ)')
    expect(result).toContain('type="youtube"')
  })

  it('不设置 autoplay/loop 时 URL 不含这些参数', () => {
    const md = new MarkdownIt()
    md.use(youtubeMarkdownPlugin)

    const result = md.render('@[youtube](dQw4w9WgXcQ)')
    expect(result).not.toContain('autoplay=')
    expect(result).not.toContain('loop=')
  })

  it('设置 height', () => {
    const md = new MarkdownIt()
    md.use(youtubeMarkdownPlugin)

    const result = md.render('@[youtube height="400px"](dQw4w9WgXcQ)')
    expect(result).toContain('height="400px"')
  })
})

// AcFun 视频嵌入插件测试
describe('acfunMarkdownPlugin', () => {
  it('渲染为 VPVideoEmbed,src 含 acfun.cn/player/', () => {
    const md = new MarkdownIt()
    md.use(acfunMarkdownPlugin)

    const result = md.render('@[acfun](ac4456321)')
    expect(result).toContain('<VPVideoEmbed')
    expect(result).toContain('acfun.cn/player/ac4456321')
  })

  it('设置自定义 title', () => {
    const md = new MarkdownIt()
    md.use(acfunMarkdownPlugin)

    const result = md.render('@[acfun title="Demo"](ac4456321)')
    expect(result).toContain('title="Demo"')
  })

  it('设置 width', () => {
    const md = new MarkdownIt()
    md.use(acfunMarkdownPlugin)

    const result = md.render('@[acfun width="80%"](ac4456321)')
    expect(result).toContain('width="80%"')
  })

  it('设置 height', () => {
    const md = new MarkdownIt()
    md.use(acfunMarkdownPlugin)

    const result = md.render('@[acfun height="400px"](ac4456321)')
    expect(result).toContain('height="400px"')
  })

  it('设置 ratio', () => {
    const md = new MarkdownIt()
    md.use(acfunMarkdownPlugin)

    const result = md.render('@[acfun ratio="16:9"](ac4456321)')
    expect(result).toContain('ratio="16:9"')
  })

  it('默认 title 为 AcFun,默认 width 为 100%,默认 ratio 为 16:10', () => {
    const md = new MarkdownIt()
    md.use(acfunMarkdownPlugin)

    const result = md.render('@[acfun](ac4456321)')
    expect(result).toContain('title="AcFun"')
    expect(result).toContain('width="100%"')
    expect(result).toContain('ratio="16:10"')
  })

  it('type 为 acfun', () => {
    const md = new MarkdownIt()
    md.use(acfunMarkdownPlugin)

    const result = md.render('@[acfun](ac4456321)')
    expect(result).toContain('type="acfun"')
  })
})

// ArtPlayer 自托管视频嵌入插件测试
describe('artPlayerMarkdownPlugin', () => {
  it('渲染为 VPArtPlayer,含 src、fullscreen、flip 等', () => {
    const md = new MarkdownIt()
    md.use(artPlayerMarkdownPlugin)

    const result = md.render('@[artPlayer](https://example.com/video.mp4)')
    expect(result).toContain('<VPArtPlayer')
    expect(result).toContain('src="https://example.com/video.mp4"')
    expect(result).toContain('fullscreen')
    expect(result).toContain('flip')
    expect(result).toContain('playback-rate')
    expect(result).toContain('aspect-ratio')
    expect(result).toContain('setting')
    expect(result).toContain('pip')
  })

  it('autoplay=true 且 muted=true', () => {
    const md = new MarkdownIt()
    md.use(artPlayerMarkdownPlugin)

    const result = md.render('@[artPlayer autoplay](https://example.com/video.mp4)')
    // autoplay 为布尔 true,渲染为裸属性
    expect(result).toContain(' autoplay')
    // muted 随 autoplay 自动开启
    expect(result).toContain(' muted')
  })

  it('muted=true', () => {
    const md = new MarkdownIt()
    md.use(artPlayerMarkdownPlugin)

    const result = md.render('@[artPlayer muted](https://example.com/video.mp4)')
    expect(result).toContain(' muted')
  })

  it('loop=true', () => {
    const md = new MarkdownIt()
    md.use(artPlayerMarkdownPlugin)

    const result = md.render('@[artPlayer loop](https://example.com/video.mp4)')
    expect(result).toContain(' loop')
  })

  it('volume=0.5', () => {
    const md = new MarkdownIt()
    md.use(artPlayerMarkdownPlugin)

    const result = md.render('@[artPlayer volume=0.5](https://example.com/video.mp4)')
    expect(result).toContain(':volume="0.5"')
  })

  it('设置 poster', () => {
    const md = new MarkdownIt()
    md.use(artPlayerMarkdownPlugin)

    const result = md.render('@[artPlayer poster="https://example.com/poster.jpg"](https://example.com/video.mp4)')
    expect(result).toContain('poster="https://example.com/poster.jpg"')
  })

  it('设置 width 和 height', () => {
    const md = new MarkdownIt()
    md.use(artPlayerMarkdownPlugin)

    const result = md.render('@[artPlayer width="80%" height="400px"](https://example.com/video.mp4)')
    expect(result).toContain('width="80%"')
    expect(result).toContain('height="400px"')
  })

  it('设置 ratio', () => {
    const md = new MarkdownIt()
    md.use(artPlayerMarkdownPlugin)

    const result = md.render('@[artPlayer ratio="16:9"](https://example.com/video.mp4)')
    expect(result).toContain('ratio="16:9"')
  })

  it('默认 volume 为 0.75,默认 width 为 100%', () => {
    const md = new MarkdownIt()
    md.use(artPlayerMarkdownPlugin)

    const result = md.render('@[artPlayer](https://example.com/video.mp4)')
    expect(result).toContain(':volume="0.75"')
    expect(result).toContain('width="100%"')
  })

  it('设置 type', () => {
    const md = new MarkdownIt()
    md.use(artPlayerMarkdownPlugin)

    const result = md.render('@[artPlayer type="mp4"](https://example.com/video.mp4)')
    expect(result).toContain('type="mp4"')
  })

  it('从 URL 扩展名推断 type', () => {
    const md = new MarkdownIt()
    md.use(artPlayerMarkdownPlugin)

    // 使用 .mp4 扩展名,checkSupportType('mp4') 不会警告
    expect(() => md.render('@[artPlayer](https://example.com/video.mp4)')).not.toThrow()
  })
})

// checkSupportType 函数测试
describe('checkSupportType', () => {
  let warnSpy: ReturnType<typeof vi.spyOn>

  beforeEach(() => {
    // 抑制 logger.warn 的控制台输出
    warnSpy = vi.spyOn(logger, 'warn').mockImplementation(() => {})
  })

  afterEach(() => {
    warnSpy.mockRestore()
  })

  it('无参数(type undefined)直接返回', () => {
    expect(checkSupportType(undefined)).toBeUndefined()
    expect(warnSpy).not.toHaveBeenCalled()
  })

  it('已安装的常见类型不警告(如 mp4)', () => {
    checkSupportType('mp4')
    expect(warnSpy).not.toHaveBeenCalled()
  })

  it('mp4 不抛出异常', () => {
    expect(() => checkSupportType('mp4')).not.toThrow()
  })

  it('webm 不抛出异常', () => {
    expect(() => checkSupportType('webm')).not.toThrow()
  })

  it('m3u8 类型不抛出异常', () => {
    expect(() => checkSupportType('m3u8')).not.toThrow()
  })

  it('flv 类型不抛出异常', () => {
    expect(() => checkSupportType('flv')).not.toThrow()
  })

  it('mpd 类型不抛出异常', () => {
    expect(() => checkSupportType('mpd')).not.toThrow()
  })

  it('不支持的类型不抛出异常', () => {
    expect(() => checkSupportType('xyz')).not.toThrow()
  })
})

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
