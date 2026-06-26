import MarkdownIt from 'markdown-it'
import { describe, expect, it } from 'vitest'
import { acfunMarkdownPlugin } from '../src/node/acfun'
import { artPlayerMarkdownPlugin } from '../src/node/artplayer'
import { bilibiliMarkdownPlugin } from '../src/node/bilibili'
import { youtubeMarkdownPlugin } from '../src/node/youtube'

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
