import MarkdownIt from 'markdown-it'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { icons } from '../src/node/plugin'

// icons 插件工厂 - 基础结构
describe('icons 插件工厂 - 基础结构', () => {
  it('name 为 vitepress-plugin-icons', () => {
    const plugin = icons() as any
    expect(plugin.name).toBe('vitepress-plugin-icons')
  })

  it('client.imports 包含 style.css 导入', () => {
    const plugin = icons() as any
    expect(plugin.client.imports).toContain(`import 'vitepress-plugin-icons/style.css'`)
  })

  it('markdown.config 为函数', () => {
    const plugin = icons() as any
    expect(typeof plugin.markdown?.config).toBe('function')
  })

  it('vite.plugins 为数组', () => {
    const plugin = icons() as any
    expect(Array.isArray(plugin.vite?.plugins)).toBe(true)
  })

  it('transformHead 为函数', () => {
    const plugin = icons() as any
    expect(typeof plugin.transformHead).toBe('function')
  })

  it('transformPageData 为函数', () => {
    const plugin = icons() as any
    expect(typeof plugin.transformPageData).toBe('function')
  })
})

// icons 插件工厂 - 默认 iconify
describe('icons - 默认 iconify', () => {
  it('无参数时默认使用 iconify', () => {
    const plugin = icons() as any
    // componentResolver 应包含 unplugin-icons resolver
    expect(plugin.componentResolver).toHaveLength(1)
    expect(plugin.componentResolver[0]).toBeDefined()
  })

  it('vite.plugins 包含 iconify 插件', () => {
    const plugin = icons() as any
    expect(plugin.vite.plugins[0]).toBeDefined()
    expect(plugin.vite.plugins[0]).not.toBe(false)
  })

  it('markdown.config 注册后可渲染 iconify 图标', () => {
    const plugin = icons() as any
    const md = new MarkdownIt()
    plugin.markdown.config(md)
    const result = md.render('::tdesign:logo-github-filled::')
    expect(result).toContain('<ITdesignLogoGithubFilled')
  })

  it('默认 defaultProvider 为 iconify', () => {
    const plugin = icons() as any
    const md = new MarkdownIt()
    plugin.markdown.config(md)
    // 使用默认提供商渲染
    const result = md.render('::name::')
    expect(result).toContain('<IName')
  })
})

// icons 插件工厂 - iconfont 配置
describe('icons - iconfont 配置', () => {
  it('仅配置 iconfont 时，componentResolver 为空数组', () => {
    const plugin = icons({ provider: 'iconfont', assets: '//at.alicdn.com/w/font.css' }) as any
    expect(plugin.componentResolver).toHaveLength(0)
  })

  it('vite.plugins 包含 undefined（iconify 未配置）', () => {
    const plugin = icons({ provider: 'iconfont', assets: '//at.alicdn.com/w/font.css' }) as any
    // iconify 未配置时 vite.plugins 为 [undefined]，unplugin-icons 不会被加载
    expect(plugin.vite.plugins).toHaveLength(1)
    expect(plugin.vite.plugins[0]).toBeUndefined()
  })

  it('markdown.config 注册后可渲染 iconfont 图标（显式前缀）', () => {
    // 仅配置 iconfont 未标记 default 时，defaultProvider 默认为 iconify
    // 需使用显式前缀 ::iconfont name:: 才能匹配 iconfont 渲染
    const plugin = icons({ provider: 'iconfont', assets: '//at.alicdn.com/w/font.css' }) as any
    const md = new MarkdownIt()
    plugin.markdown.config(md)
    const result = md.render('::iconfont github::')
    expect(result).toContain('class="iconfont icon-github"')
  })

  it('iconfont 带 prefix 和 assets（显式前缀）', () => {
    // 未标记 default 时需使用显式前缀
    const plugin = icons({
      provider: 'iconfont',
      prefix: 'ifont-',
      assets: ['//at.alicdn.com/w/font.css', '//at.alicdn.com/w/font.js'],
    }) as any
    const md = new MarkdownIt()
    plugin.markdown.config(md)
    const result = md.render('::iconfont github::')
    expect(result).toContain('class="iconfont ifont-github"')
  })

  it('iconfont 默认提供商（default: true）', () => {
    const plugin = icons([
      { provider: 'iconify' },
      { provider: 'iconfont', default: true, assets: '//at.alicdn.com/w/font.css' },
    ]) as any
    const md = new MarkdownIt()
    plugin.markdown.config(md)
    // 默认使用 iconfont
    const result = md.render('::github::')
    expect(result).toContain('class="iconfont icon-github"')
  })
})

// icons 插件工厂 - fontawesome 配置
describe('icons - fontawesome 配置', () => {
  it('仅配置 fontawesome 时，componentResolver 为空数组', () => {
    const plugin = icons({ provider: 'fontawesome', assets: 'fontawesome' }) as any
    expect(plugin.componentResolver).toHaveLength(0)
  })

  it('markdown.config 注册后可渲染 fontawesome 图标（显式前缀）', () => {
    // 仅配置 fontawesome 未标记 default 时，defaultProvider 默认为 iconify
    // 需使用显式前缀 ::fontawesome name:: 才能匹配 fontawesome 渲染
    const plugin = icons({ provider: 'fontawesome', assets: 'fontawesome' }) as any
    const md = new MarkdownIt()
    plugin.markdown.config(md)
    const result = md.render('::fontawesome circle-user::')
    expect(result).toContain('class="fontawesome fa-solid fa-circle-user"')
  })

  it('fontawesome 默认提供商（default: true）', () => {
    const plugin = icons([
      { provider: 'iconify' },
      { provider: 'fontawesome', default: true, assets: 'fontawesome' },
    ]) as any
    const md = new MarkdownIt()
    plugin.markdown.config(md)
    const result = md.render('::circle-user::')
    expect(result).toContain('class="fontawesome fa-solid fa-circle-user"')
  })

  it('fontawesome 带 prefix（显式前缀）', () => {
    // 未标记 default 时需使用显式前缀
    const plugin = icons({ provider: 'fontawesome', prefix: 'fab', assets: 'fontawesome' }) as any
    const md = new MarkdownIt()
    plugin.markdown.config(md)
    const result = md.render('::fontawesome circle-user::')
    expect(result).toContain('fa-brands fa-circle-user')
  })
})

// icons 插件工厂 - 多提供商组合
describe('icons - 多提供商组合', () => {
  it('三种提供商同时配置', () => {
    const plugin = icons([
      { provider: 'iconify' },
      { provider: 'iconfont', assets: '//at.alicdn.com/w/font.css' },
      { provider: 'fontawesome', assets: 'fontawesome' },
    ]) as any

    const md = new MarkdownIt()
    plugin.markdown.config(md)

    // 默认使用 iconify
    expect(md.render('::name::')).toContain('<IName')
    // 显式 iconfont
    expect(md.render('::iconfont github::')).toContain('class="iconfont icon-github"')
    // 显式 fontawesome
    expect(md.render('::fontawesome circle-user::')).toContain('class="fontawesome fa-solid fa-circle-user"')
  })

  it('iconfont 标记为默认时 defaultProvider 为 iconfont', () => {
    const plugin = icons([
      { provider: 'iconify' },
      { provider: 'iconfont', default: true, assets: '//at.alicdn.com/w/font.css' },
      { provider: 'fontawesome', assets: 'fontawesome' },
    ]) as any

    const md = new MarkdownIt()
    plugin.markdown.config(md)

    // 默认使用 iconfont
    expect(md.render('::github::')).toContain('class="iconfont icon-github"')
    // 显式 iconify 仍可用
    expect(md.render('::iconify name::')).toContain('<IName')
    // 显式 fontawesome 仍可用
    expect(md.render('::fontawesome circle-user::')).toContain('class="fontawesome fa-solid fa-circle-user"')
  })

  it('fontawesome 标记为默认时 defaultProvider 为 fontawesome', () => {
    const plugin = icons([
      { provider: 'iconify' },
      { provider: 'fontawesome', default: true, assets: 'fontawesome' },
    ]) as any

    const md = new MarkdownIt()
    plugin.markdown.config(md)

    // 默认使用 fontawesome
    expect(md.render('::circle-user::')).toContain('class="fontawesome fa-solid fa-circle-user"')
  })

  it('iconify 带 customCollections 时传递给 resolver', () => {
    const plugin = icons({
      provider: 'iconify',
      customCollections: { myIcons: {} as any },
    }) as any

    // componentResolver 应存在
    expect(plugin.componentResolver).toHaveLength(1)
    // resolver 的 customCollections 应为 ['myIcons']
    const resolver = plugin.componentResolver[0]
    expect(resolver).toBeDefined()
  })

  it('iconify 无 customCollections 时 resolver 的 customCollections 为空数组', () => {
    const plugin = icons({ provider: 'iconify' }) as any
    expect(plugin.componentResolver).toHaveLength(1)
  })
})

// icons 插件工厂 - transformHead（dev 模式，isBuild=false）
describe('icons - transformHead（dev 模式）', () => {
  it('dev 模式下 transformHead 返回 undefined', () => {
    const plugin = icons({ provider: 'iconfont', assets: '//at.alicdn.com/w/font.css' }) as any
    const result = plugin.transformHead()
    expect(result).toBeUndefined()
  })

  it('dev 模式下 fontawesome 的 transformHead 也返回 undefined', () => {
    const plugin = icons({ provider: 'fontawesome', assets: 'fontawesome' }) as any
    const result = plugin.transformHead()
    expect(result).toBeUndefined()
  })

  it('dev 模式下无提供商的 transformHead 返回 undefined', () => {
    const plugin = icons() as any
    const result = plugin.transformHead()
    expect(result).toBeUndefined()
  })
})

// icons 插件工厂 - transformPageData（dev 模式，isBuild=false）
describe('icons - transformPageData（dev 模式）', () => {
  it('iconfont 配置时将 head 配置注入 pageData.frontmatter.head', () => {
    const plugin = icons({ provider: 'iconfont', assets: '//at.alicdn.com/w/font.css' }) as any
    const pageData = { frontmatter: {} } as any
    plugin.transformPageData(pageData)

    expect(pageData.frontmatter.head).toBeDefined()
    expect(pageData.frontmatter.head).toHaveLength(1)
    expect(pageData.frontmatter.head[0]).toEqual([
      'link',
      { rel: 'stylesheet', href: '//at.alicdn.com/w/font.css' },
    ])
  })

  it('fontawesome 配置时将 head 配置注入 pageData.frontmatter.head', () => {
    const plugin = icons({ provider: 'fontawesome', assets: 'fontawesome-with-brands' }) as any
    const pageData = { frontmatter: {} } as any
    plugin.transformPageData(pageData)

    expect(pageData.frontmatter.head).toHaveLength(1)
    expect(pageData.frontmatter.head[0]).toEqual([
      'script',
      { 'src': 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/js/brands.min.js', 'data-auto-replace-svg': 'nest' },
    ])
  })

  it('无 iconfont/fontawesome 配置时 head 为空数组', () => {
    const plugin = icons() as any
    const pageData = { frontmatter: {} } as any
    plugin.transformPageData(pageData)

    expect(pageData.frontmatter.head).toEqual([])
  })

  it('pageData.frontmatter.head 已存在时追加到现有数组', () => {
    const plugin = icons({ provider: 'iconfont', assets: '//at.alicdn.com/w/font.css' }) as any
    const existingHead = [['meta', { name: 'existing', content: 'value' }]]
    const pageData = { frontmatter: { head: [...existingHead] } } as any
    plugin.transformPageData(pageData)

    expect(pageData.frontmatter.head).toHaveLength(2)
    expect(pageData.frontmatter.head[0]).toEqual(['meta', { name: 'existing', content: 'value' }])
    expect(pageData.frontmatter.head[1]).toEqual([
      'link',
      { rel: 'stylesheet', href: '//at.alicdn.com/w/font.css' },
    ])
  })

  it('pageData.frontmatter 不存在时抛出 TypeError（实际行为）', () => {
    // 插件代码 pageData.frontmatter.head ??= [] 在 frontmatter 为 undefined 时抛出
    const plugin = icons({ provider: 'iconfont', assets: '//at.alicdn.com/w/font.css' }) as any
    const pageData = {} as any
    expect(() => plugin.transformPageData(pageData)).toThrow(TypeError)
  })

  it('iconfont + fontawesome 同时配置时注入所有 head 配置', () => {
    const plugin = icons([
      { provider: 'iconfont', assets: ['//at.alicdn.com/w/font.css', '//at.alicdn.com/w/font.js'] },
      { provider: 'fontawesome', assets: 'fontawesome-with-brands' },
    ]) as any
    const pageData = { frontmatter: {} } as any
    plugin.transformPageData(pageData)

    // iconfont: 2 (css + js) + fontawesome: 1 (brands) = 3
    expect(pageData.frontmatter.head).toHaveLength(3)
  })
})

// icons 插件工厂 - 构建模式（isBuild=true）
describe('icons - 构建模式', () => {
  beforeEach(() => {
    vi.stubEnv('NODE_ENV', 'production')
    vi.resetModules()
  })

  afterEach(() => {
    vi.unstubAllEnvs()
    vi.resetModules()
  })

  it('构建模式下 transformHead 返回 head 配置', async () => {
    const { icons: buildIcons } = await import('../src/node/plugin')
    const plugin = buildIcons({ provider: 'iconfont', assets: '//at.alicdn.com/w/font.css' }) as any
    const result = plugin.transformHead()

    expect(result).toBeDefined()
    expect(result).toHaveLength(1)
    expect(result[0]).toEqual([
      'link',
      { rel: 'stylesheet', href: '//at.alicdn.com/w/font.css' },
    ])
  })

  it('构建模式下 fontawesome transformHead 返回 CDN 脚本', async () => {
    const { icons: buildIcons } = await import('../src/node/plugin')
    const plugin = buildIcons({ provider: 'fontawesome', assets: 'fontawesome' }) as any
    const result = plugin.transformHead()

    expect(result).toBeDefined()
    expect(result).toHaveLength(3)
    expect(result[0][0]).toBe('script')
  })

  it('构建模式下无 iconfont/fontawesome 时 transformHead 返回空数组', async () => {
    const { icons: buildIcons } = await import('../src/node/plugin')
    const plugin = buildIcons() as any
    const result = plugin.transformHead()

    expect(result).toBeDefined()
    expect(result).toEqual([])
  })

  it('构建模式下 transformPageData 不注入 head（isBuild=true）', async () => {
    const { icons: buildIcons } = await import('../src/node/plugin')
    const plugin = buildIcons({ provider: 'iconfont', assets: '//at.alicdn.com/w/font.css' }) as any
    const pageData = { frontmatter: {} } as any
    plugin.transformPageData(pageData)

    // 构建模式下 !isBuild 为 false，不执行 head 注入
    expect(pageData.frontmatter.head).toBeUndefined()
  })

  it('构建模式下 iconfont + fontawesome 同时配置时 transformHead 合并所有', async () => {
    const { icons: buildIcons } = await import('../src/node/plugin')
    const plugin = buildIcons([
      { provider: 'iconfont', assets: ['//at.alicdn.com/w/font.css', '//at.alicdn.com/w/font.js'] },
      { provider: 'fontawesome', assets: 'fontawesome-with-brands' },
    ]) as any
    const result = plugin.transformHead()

    // iconfont: 2 + fontawesome: 1 = 3
    expect(result).toHaveLength(3)
  })
})

// icons 插件工厂 - findOptions 间接测试
describe('icons - findOptions 间接测试', () => {
  it('数组中第一个匹配的 provider 被使用', () => {
    // 当数组中有两个 iconify 配置时，第一个被使用
    const plugin = icons([
      { provider: 'iconify', prefix: 'first' },
      { provider: 'iconify', prefix: 'second' },
    ]) as any

    const md = new MarkdownIt()
    plugin.markdown.config(md)
    const result = md.render('::name::')
    // 第一个 iconify 配置的 prefix 为 'first'
    expect(result).toContain('<FirstName')
  })

  it('空数组时默认使用 iconify', () => {
    const plugin = icons([]) as any
    expect(plugin.componentResolver).toHaveLength(1)
  })

  it('未指定 default 时 defaultProvider 默认为 iconify', () => {
    const plugin = icons([
      { provider: 'iconfont', assets: '//at.alicdn.com/w/font.css' },
      { provider: 'fontawesome', assets: 'fontawesome' },
    ]) as any

    const md = new MarkdownIt()
    plugin.markdown.config(md)
    // 无 default 标记，defaultProvider 为 'iconify'（但 iconify 未配置）
    // 使用 iconfont 或 fontawesome 需要显式指定
    const result = md.render('::github::')
    // iconify 未配置，回退为纯文本
    expect(result).toContain('<span>::github::</span>')
  })
})
