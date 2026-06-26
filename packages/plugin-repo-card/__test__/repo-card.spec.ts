import MarkdownIt from 'markdown-it'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { repoCardMarkdownPlugin } from '../src/node/markdown'
import { repoCard } from '../src/node/plugin'

describe('repoCardMarkdownPlugin', () => {
  let warnSpy: ReturnType<typeof vi.spyOn>

  beforeEach(() => {
    // 抑制 logger.warn 的控制台输出
    warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
  })

  afterEach(() => {
    warnSpy.mockRestore()
  })

  // 嵌入语法 @[repo github](owner/name) 渲染为 VPRepoCard
  it('嵌入语法 @[repo github](owner/name) 渲染为 VPRepoCard', () => {
    const md = new MarkdownIt()
    md.use(repoCardMarkdownPlugin)

    const result = md.render('@[repo github](owner/name)')
    expect(result).toContain('<VPRepoCard')
    expect(result).toContain('register="github"')
    expect(result).toContain('repo="owner/name"')
  })

  // @[repo gitee](owner/name) 支持 gitee
  it('@[repo gitee](owner/name) 支持 gitee', () => {
    const md = new MarkdownIt()
    md.use(repoCardMarkdownPlugin)

    const result = md.render('@[repo gitee](owner/name)')
    expect(result).toContain('<VPRepoCard')
    expect(result).toContain('register="gitee"')
    expect(result).toContain('repo="owner/name"')
  })

  // @[repo fullname github](owner/name) 设置 fullname=true
  it('@[repo fullname github](owner/name) 设置 fullname=true', () => {
    const md = new MarkdownIt()
    md.use(repoCardMarkdownPlugin)

    const result = md.render('@[repo fullname github](owner/name)')
    expect(result).toContain('<VPRepoCard')
    expect(result).toContain('register="github"')
    expect(result).toContain('repo="owner/name"')
    // fullname 为布尔 true,渲染为裸属性
    expect(result).toContain('fullname')
    expect(result).not.toContain('fullname="true"')
  })

  // @[repo github fullname](owner/name) fullname 在 register 后面也能工作
  it('@[repo github fullname](owner/name) fullname 在后也能工作', () => {
    const md = new MarkdownIt()
    md.use(repoCardMarkdownPlugin)

    const result = md.render('@[repo github fullname](owner/name)')
    expect(result).toContain('register="github"')
    expect(result).toContain('fullname')
  })

  // @[repo fullname](owner/name) 只有 fullname,无 register
  it('@[repo fullname](owner/name) 只有 fullname,无 register', () => {
    const md = new MarkdownIt()
    md.use(repoCardMarkdownPlugin)

    const result = md.render('@[repo fullname](owner/name)')
    expect(result).toContain('<VPRepoCard')
    expect(result).toContain('fullname')
    expect(result).toContain('repo="owner/name"')
  })

  // 容器语法 ::: repo 包裹多个 repo 卡片
  it('容器语法 ::: repo 包裹多个 repo 卡片', () => {
    const md = new MarkdownIt()
    md.use(repoCardMarkdownPlugin)

    const result = md.render(
      '::: repo\n@[repo github](owner/name)\n@[repo gitee](owner/name2)\n:::',
    )
    expect(result).toContain('vp-repo-container')
    expect(result).toContain('<VPRepoCard')
    expect(result).toContain('register="github"')
    expect(result).toContain('register="gitee"')
  })

  // 不支持的 register(如 gitlab)渲染错误提示且包含红色样式
  it('不支持的 register(如 gitlab)渲染错误提示且包含红色样式', () => {
    const md = new MarkdownIt()
    md.use(repoCardMarkdownPlugin)

    const result = md.render('@[repo gitlab](owner/name)')
    expect(result).not.toContain('<VPRepoCard')
    expect(result).toContain('color:red;')
    expect(result).toContain('register "gitlab" is not supported')
    expect(result).toContain('@[repo gitlab](owner/name)')
    // 应调用 logger.warn
    expect(warnSpy).toHaveBeenCalled()
  })

  // 不支持的 register 在容器内也渲染错误提示
  it('不支持的 register 在容器内也渲染错误提示', () => {
    const md = new MarkdownIt()
    md.use(repoCardMarkdownPlugin)

    const result = md.render('::: repo\n@[repo gitlab](owner/name)\n:::')
    expect(result).toContain('color:red;')
    expect(result).toContain('register "gitlab" is not supported')
  })

  // 属性组合(register, repo, fullname)正确传递
  it('属性组合 register/repo/fullname 正确传递', () => {
    const md = new MarkdownIt()
    md.use(repoCardMarkdownPlugin)

    const result = md.render('@[repo fullname github](vitepress/vitepress)')
    expect(result).toContain('register="github"')
    expect(result).toContain('repo="vitepress/vitepress"')
    expect(result).toContain('fullname')
  })

  // 边界:空源 @[repo github]()
  it('空源 @[repo github]() 渲染为 VPRepoCard 且 repo 为空', () => {
    const md = new MarkdownIt()
    md.use(repoCardMarkdownPlugin)

    const result = md.render('@[repo github]()')
    expect(result).toContain('<VPRepoCard')
    expect(result).toContain('register="github"')
    expect(result).toContain('repo=""')
  })

  // 边界:无 register 的情况 @[repo](owner/name)
  it('无 register 的情况 @[repo](owner/name) 仍渲染为 VPRepoCard', () => {
    const md = new MarkdownIt()
    md.use(repoCardMarkdownPlugin)

    const result = md.render('@[repo](owner/name)')
    expect(result).toContain('<VPRepoCard')
    expect(result).toContain('repo="owner/name"')
    // register 为空字符串
    expect(result).toContain('register=""')
    // fullname 应为 false,不出现在属性中
    expect(result).not.toContain('fullname')
  })

  // 边界:空源且无 register @[repo]()
  it('空源且无 register @[repo]() 渲染为 VPRepoCard', () => {
    const md = new MarkdownIt()
    md.use(repoCardMarkdownPlugin)

    const result = md.render('@[repo]()')
    expect(result).toContain('<VPRepoCard')
  })

  // 容器内空内容
  it('容器内空内容仍渲染容器', () => {
    const md = new MarkdownIt()
    md.use(repoCardMarkdownPlugin)

    const result = md.render('::: repo\n:::')
    expect(result).toContain('vp-repo-container')
  })

  // 不匹配的语法不被处理(如 @[repo](owner/name 中缺少闭括号)
  it('不匹配的语法不被处理', () => {
    const md = new MarkdownIt()
    md.use(repoCardMarkdownPlugin)

    const result = md.render('@[repo]')
    expect(result).not.toContain('<VPRepoCard')
  })
})

describe('repoCard 插件工厂', () => {
  it('name 为 vitepress-plugin-repo-card', () => {
    const plugin = repoCard() as any
    expect(plugin.name).toBe('vitepress-plugin-repo-card')
  })

  it('componentResolver 包含 VPRepoCard 和 RepoCard', () => {
    const plugin = repoCard() as any
    expect(plugin.componentResolver).toContain('VPRepoCard')
    expect(plugin.componentResolver).toContain('RepoCard')
  })

  it('markdown.config 为函数', () => {
    const plugin = repoCard() as any
    expect(typeof plugin.markdown?.config).toBe('function')
  })

  it('markdown.config 可注册 markdown-it 规则', () => {
    const plugin = repoCard() as any
    const md = new MarkdownIt()
    plugin.markdown.config(md)

    const result = md.render('@[repo github](owner/name)')
    expect(result).toContain('<VPRepoCard')
  })
})
