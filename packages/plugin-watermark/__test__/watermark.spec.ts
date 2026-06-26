import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'

// 使用 vi.hoisted 创建可在 mock 工厂中使用的可变状态和 mock 函数
const { state, mocks } = vi.hoisted(() => ({
  state: { inBrowser: false },
  mocks: {
    changeOptions: vi.fn(),
    destroy: vi.fn(),
    useData: vi.fn(),
  },
}))

// Mock vitepress/client,使用 getter 使 inBrowser 可动态控制
vi.mock('vitepress/client', () => ({
  get inBrowser() { return state.inBrowser },
  useData: mocks.useData,
  withBase: (url: string) => `/base${url}`,
}))

// Mock watermark-js-plus/es 的 Watermark 类
// 注意:必须使用 class(非箭头函数),否则无法用 new 调用
vi.mock('watermark-js-plus/es', () => ({
  Watermark: class MockWatermark {
    changeOptions = mocks.changeOptions
    destroy = mocks.destroy
  },
}))

import setupWatermarkDefault from '../src/index'
import { setupWatermark } from '../src/watermark'

describe('setupWatermark (非浏览器环境)', () => {
  beforeEach(() => {
    state.inBrowser = false
  })

  // 模块正确导出 setupWatermark 函数
  it('setupWatermark 应为函数', () => {
    expect(typeof setupWatermark).toBe('function')
  })

  // 在非浏览器环境下调用 setupWatermark 不应抛错
  it('非浏览器环境下调用不抛错(因 inBrowser 为 false 直接返回)', () => {
    expect(() => setupWatermark()).not.toThrow()
  })

  // 带选项在非浏览器环境下调用不抛错
  it('带选项在非浏览器环境下调用不抛错', () => {
    expect(() => setupWatermark({ content: 'test' })).not.toThrow()
  })

  // 不传参数时不抛错
  it('不传参数时不抛错', () => {
    expect(() => setupWatermark(undefined)).not.toThrow()
  })

  // 默认导出等于 setupWatermark
  it('默认导出等于 setupWatermark', () => {
    expect(setupWatermarkDefault).toBe(setupWatermark)
  })

  // 非浏览器环境下不调用 useData
  it('非浏览器环境下不调用 useData', () => {
    setupWatermark()
    expect(mocks.useData).not.toHaveBeenCalled()
  })
})

describe('setupWatermark (浏览器环境)', () => {
  beforeEach(() => {
    state.inBrowser = true
    mocks.changeOptions.mockClear()
    mocks.destroy.mockClear()
    mocks.useData.mockReset()
  })

  afterEach(() => {
    state.inBrowser = false
  })

  // 默认配置调用 changeOptions,内容为站点标题
  it('默认配置调用 changeOptions,内容为站点标题', () => {
    mocks.useData.mockReturnValue({
      frontmatter: ref({}),
      site: ref({ title: 'Test Site', locales: {} }),
      page: ref({}),
      localeIndex: ref(0),
    })
    setupWatermark()
    expect(mocks.changeOptions).toHaveBeenCalledWith(
      expect.objectContaining({
        content: 'Test Site',
        fontColor: '#76747f',
        globalAlpha: 0.165,
      }),
    )
  })

  // frontmatter.watermark 为 false 时调用 destroy
  it('frontmatter.watermark 为 false 时调用 destroy', () => {
    mocks.useData.mockReturnValue({
      frontmatter: ref({ watermark: false }),
      site: ref({ title: 'Test Site', locales: {} }),
      page: ref({}),
      localeIndex: ref(0),
    })
    setupWatermark()
    expect(mocks.destroy).toHaveBeenCalled()
    expect(mocks.changeOptions).not.toHaveBeenCalled()
  })

  // frontmatter.watermark 为字符串时设置 content
  it('frontmatter.watermark 为字符串时设置 content', () => {
    mocks.useData.mockReturnValue({
      frontmatter: ref({ watermark: 'Custom Watermark' }),
      site: ref({ title: 'Test Site', locales: {} }),
      page: ref({}),
      localeIndex: ref(0),
    })
    setupWatermark()
    expect(mocks.changeOptions).toHaveBeenCalledWith(
      expect.objectContaining({
        content: 'Custom Watermark',
      }),
    )
  })

  // options.enabled 为 false 时调用 destroy
  it('options.enabled 为 false 时调用 destroy', () => {
    mocks.useData.mockReturnValue({
      frontmatter: ref({}),
      site: ref({ title: 'Test Site', locales: {} }),
      page: ref({}),
      localeIndex: ref(0),
    })
    setupWatermark({ enabled: false })
    expect(mocks.destroy).toHaveBeenCalled()
    expect(mocks.changeOptions).not.toHaveBeenCalled()
  })

  // options.enabled 为函数时调用该函数
  it('options.enabled 为函数时调用该函数', () => {
    const enabledFn = vi.fn(() => false)
    mocks.useData.mockReturnValue({
      frontmatter: ref({}),
      site: ref({ title: 'Test Site', locales: {} }),
      page: ref({ path: '/test' }),
      localeIndex: ref(0),
    })
    setupWatermark({ enabled: enabledFn })
    expect(enabledFn).toHaveBeenCalled()
    // enabled 返回 false,所以应调用 destroy
    expect(mocks.destroy).toHaveBeenCalled()
  })

  // options.enabled 为函数返回 true 时调用 changeOptions
  it('options.enabled 为函数返回 true 时调用 changeOptions', () => {
    const enabledFn = vi.fn(() => true)
    mocks.useData.mockReturnValue({
      frontmatter: ref({}),
      site: ref({ title: 'Test Site', locales: {} }),
      page: ref({ path: '/test' }),
      localeIndex: ref(0),
    })
    setupWatermark({ enabled: enabledFn })
    expect(enabledFn).toHaveBeenCalled()
    expect(mocks.changeOptions).toHaveBeenCalled()
  })

  // options.mode 为 blind 时 globalAlpha 为 0.005
  it('options.mode 为 blind 时 globalAlpha 为 0.005', () => {
    mocks.useData.mockReturnValue({
      frontmatter: ref({}),
      site: ref({ title: 'Test Site', locales: {} }),
      page: ref({}),
      localeIndex: ref(0),
    })
    setupWatermark({ mode: 'blind' })
    expect(mocks.changeOptions).toHaveBeenCalledWith(
      expect.objectContaining({
        globalAlpha: 0.005,
      }),
    )
  })

  // locale 存在时使用 locale.title 作为 content
  it('locale 存在时使用 locale.title 作为 content', () => {
    mocks.useData.mockReturnValue({
      frontmatter: ref({}),
      site: ref({ title: 'Site Title', locales: { root: { title: 'Locale Title' } } }),
      page: ref({}),
      localeIndex: ref('root'),
    })
    setupWatermark()
    expect(mocks.changeOptions).toHaveBeenCalledWith(
      expect.objectContaining({
        content: 'Locale Title',
      }),
    )
  })

  // locale 不存在时使用 site.title 作为 content
  it('locale 不存在时使用 site.title 作为 content', () => {
    mocks.useData.mockReturnValue({
      frontmatter: ref({}),
      site: ref({ title: 'Site Title', locales: {} }),
      page: ref({}),
      localeIndex: ref('root'),
    })
    setupWatermark()
    expect(mocks.changeOptions).toHaveBeenCalledWith(
      expect.objectContaining({
        content: 'Site Title',
      }),
    )
  })

  // frontmatter.watermark 为对象时合并选项
  it('frontmatter.watermark 为对象时合并选项', () => {
    mocks.useData.mockReturnValue({
      frontmatter: ref({ watermark: { content: 'Frontmatter Content' } }),
      site: ref({ title: 'Test Site', locales: {} }),
      page: ref({}),
      localeIndex: ref(0),
    })
    setupWatermark()
    expect(mocks.changeOptions).toHaveBeenCalledWith(
      expect.objectContaining({
        content: 'Frontmatter Content',
      }),
    )
  })

  // image 以 / 开头时调用 withBase
  it('image 以 / 开头时调用 withBase 处理', () => {
    mocks.useData.mockReturnValue({
      frontmatter: ref({ watermark: { image: '/logo.png' } }),
      site: ref({ title: 'Test Site', locales: {} }),
      page: ref({}),
      localeIndex: ref(0),
    })
    setupWatermark()
    expect(mocks.changeOptions).toHaveBeenCalledWith(
      expect.objectContaining({
        image: '/base/logo.png',
      }),
    )
  })

  // image 不以 / 开头时不调用 withBase
  it('image 不以 / 开头时不调用 withBase', () => {
    mocks.useData.mockReturnValue({
      frontmatter: ref({ watermark: { image: 'https://example.com/logo.png' } }),
      site: ref({ title: 'Test Site', locales: {} }),
      page: ref({}),
      localeIndex: ref(0),
    })
    setupWatermark()
    expect(mocks.changeOptions).toHaveBeenCalledWith(
      expect.objectContaining({
        image: 'https://example.com/logo.png',
      }),
    )
  })

  // 自定义 options.content 覆盖默认 content
  it('自定义 options.content 覆盖默认 content', () => {
    mocks.useData.mockReturnValue({
      frontmatter: ref({}),
      site: ref({ title: 'Test Site', locales: {} }),
      page: ref({}),
      localeIndex: ref(0),
    })
    setupWatermark({ content: 'Options Content' })
    expect(mocks.changeOptions).toHaveBeenCalledWith(
      expect.objectContaining({
        content: 'Options Content',
      }),
    )
  })

  // 自定义 fontColor 覆盖默认值
  it('自定义 fontColor 覆盖默认值', () => {
    mocks.useData.mockReturnValue({
      frontmatter: ref({}),
      site: ref({ title: 'Test Site', locales: {} }),
      page: ref({}),
      localeIndex: ref(0),
    })
    setupWatermark({ fontColor: '#ff0000' })
    expect(mocks.changeOptions).toHaveBeenCalledWith(
      expect.objectContaining({
        fontColor: '#ff0000',
      }),
    )
  })
})
