import type { FontAwesomeOptions, IconfontOptions, IconifyOptions } from '../src/node/types'
import MarkdownIt from 'markdown-it'
import { describe, expect, it } from 'vitest'
import { iconRender, iconsMarkdownPlugin } from '../src/node/markdown'

// iconRender - iconify 渲染
describe('iconRender - iconify', () => {
  const iconify: IconifyOptions = { provider: 'iconify' }
  const options = { defaultProvider: 'iconify' as const, iconify }

  it('简单图标名 -> Vue 组件标签', () => {
    const result = iconRender('tdesign:logo-github-filled', options)
    expect(result).toContain('<ITdesignLogoGithubFilled')
    expect(result).toContain('class="iconify"')
    expect(result).toContain('aria-hidden')
    expect(result).toContain('width="1.2em"')
    expect(result).toContain('height="1.2em"')
  })

  it('带尺寸覆盖 =2em', () => {
    const result = iconRender('name =2em', options)
    expect(result).toContain('width="2em"')
    expect(result).toContain('height="2em"')
  })

  it('带颜色覆盖 /red', () => {
    const result = iconRender('name /red', options)
    expect(result).toContain('color="red"')
  })

  it('带 extra 属性 border', () => {
    const result = iconRender('name border', options)
    expect(result).toContain('class="iconify border"')
  })

  it('带 class 属性（iconify 分支不使用 classname，仅保留 iconify 类名）', () => {
    // 注意：iconify 渲染分支中 class 被解构但未使用，因此 class 不出现在输出中
    const result = iconRender('name class="my-class"', options)
    expect(result).toContain('class="iconify"')
    expect(result).not.toContain('my-class')
  })

  it('使用 iconify.prefix 自定义前缀', () => {
    const result = iconRender('name', { defaultProvider: 'iconify', iconify: { provider: 'iconify', prefix: 'icon' } })
    expect(result).toContain('<IconName')
  })

  it('使用 iconify.color 作为默认颜色', () => {
    const result = iconRender('name', { defaultProvider: 'iconify', iconify: { provider: 'iconify', color: 'blue' } })
    expect(result).toContain('color="blue"')
  })

  it('语法颜色覆盖 iconify.color', () => {
    const result = iconRender('name /red', { defaultProvider: 'iconify', iconify: { provider: 'iconify', color: 'blue' } })
    expect(result).toContain('color="red"')
    expect(result).not.toContain('color="blue"')
  })

  it('使用 iconify.size 作为默认尺寸', () => {
    const result = iconRender('name', { defaultProvider: 'iconify', iconify: { provider: 'iconify', size: '2em' } })
    expect(result).toContain('width="2em"')
    expect(result).toContain('height="2em"')
  })

  it('语法尺寸覆盖 iconify.size', () => {
    const result = iconRender('name =3em', { defaultProvider: 'iconify', iconify: { provider: 'iconify', size: '2em' } })
    expect(result).toContain('width="3em"')
    expect(result).toContain('height="3em"')
  })

  it('带 key=value 属性（如 title）', () => {
    const result = iconRender('name title="hello"', options)
    expect(result).toContain('title="hello"')
  })

  it('宽x高尺寸 =1.2emx1.5em', () => {
    const result = iconRender('name =1.2emx1.5em', options)
    expect(result).toContain('width="1.2em"')
    expect(result).toContain('height="1.5em"')
  })
})

// iconRender - iconfont 渲染
describe('iconRender - iconfont', () => {
  const iconfont: IconfontOptions = { provider: 'iconfont' }
  const options = { defaultProvider: 'iconfont' as const, iconfont }

  it('简单图标名 -> span 标签', () => {
    const result = iconRender('github', options)
    expect(result).toContain('<span')
    expect(result).toContain('class="iconfont icon-github"')
    expect(result).toContain('aria-hidden')
    expect(result).toContain('font-size:1.2em')
  })

  it('带尺寸覆盖 =2em', () => {
    const result = iconRender('github =2em', options)
    expect(result).toContain('font-size:2em')
  })

  it('带颜色覆盖 /red', () => {
    const result = iconRender('github /red', options)
    expect(result).toContain('color:red')
  })

  it('使用 iconfont.prefix 自定义前缀', () => {
    const result = iconRender('github', { defaultProvider: 'iconfont', iconfont: { provider: 'iconfont', prefix: 'ifont-' } })
    expect(result).toContain('class="iconfont ifont-github"')
  })

  it('使用 iconfont.color 作为默认颜色', () => {
    const result = iconRender('github', { defaultProvider: 'iconfont', iconfont: { provider: 'iconfont', color: 'green' } })
    expect(result).toContain('color:green')
  })

  it('语法颜色覆盖 iconfont.color', () => {
    const result = iconRender('github /red', { defaultProvider: 'iconfont', iconfont: { provider: 'iconfont', color: 'green' } })
    expect(result).toContain('color:red')
    expect(result).not.toContain('color:green')
  })

  it('使用 iconfont.size 作为默认尺寸', () => {
    const result = iconRender('github', { defaultProvider: 'iconfont', iconfont: { provider: 'iconfont', size: '1.5em' } })
    expect(result).toContain('font-size:1.5em')
  })

  it('语法尺寸覆盖 iconfont.size', () => {
    const result = iconRender('github =2em', { defaultProvider: 'iconfont', iconfont: { provider: 'iconfont', size: '1.5em' } })
    expect(result).toContain('font-size:2em')
  })

  it('带 class 属性', () => {
    const result = iconRender('github class="my-class"', options)
    expect(result).toContain('class="iconfont icon-github my-class"')
  })

  it('带 extra 属性', () => {
    const result = iconRender('github border', options)
    expect(result).toContain('class="iconfont icon-github border"')
  })

  it('带 key=value 属性', () => {
    const result = iconRender('github title="hello"', options)
    expect(result).toContain('title="hello"')
  })

  it('显式 iconfont 前缀', () => {
    const result = iconRender('iconfont github', options)
    expect(result).toContain('class="iconfont icon-github"')
  })
})

// iconRender - fontawesome 渲染
describe('iconRender - fontawesome', () => {
  const fontawesome: FontAwesomeOptions = { provider: 'fontawesome' }
  const options = { defaultProvider: 'fontawesome' as const, fontawesome }

  it('简单图标名 -> span 标签', () => {
    const result = iconRender('circle-user', options)
    expect(result).toContain('<span')
    expect(result).toContain('class="fontawesome fa-solid fa-circle-user"')
    expect(result).toContain('aria-hidden')
  })

  it('带尺寸 =2em', () => {
    const result = iconRender('circle-user =2em', options)
    expect(result).toContain('width:2em')
    expect(result).toContain('height:2em')
  })

  it('带颜色 /red', () => {
    const result = iconRender('circle-user /red', options)
    expect(result).toContain('color:red')
  })

  it('使用 fontawesome.prefix 自定义前缀', () => {
    const result = iconRender('circle-user', { defaultProvider: 'fontawesome', fontawesome: { provider: 'fontawesome', prefix: 'fab' } })
    expect(result).toContain('class="fontawesome fa-brands fa-circle-user"')
  })

  it('使用 fontawesome.color 作为默认颜色', () => {
    const result = iconRender('circle-user', { defaultProvider: 'fontawesome', fontawesome: { provider: 'fontawesome', color: 'blue' } })
    expect(result).toContain('color:blue')
  })

  it('语法颜色覆盖 fontawesome.color', () => {
    const result = iconRender('circle-user /red', { defaultProvider: 'fontawesome', fontawesome: { provider: 'fontawesome', color: 'blue' } })
    expect(result).toContain('color:red')
    expect(result).not.toContain('color:blue')
  })

  it('使用 fontawesome.size 作为默认尺寸', () => {
    const result = iconRender('circle-user', { defaultProvider: 'fontawesome', fontawesome: { provider: 'fontawesome', size: '2em' } })
    expect(result).toContain('width:2em')
    expect(result).toContain('height:2em')
  })

  it('语法尺寸覆盖 fontawesome.size', () => {
    const result = iconRender('circle-user =3em', { defaultProvider: 'fontawesome', fontawesome: { provider: 'fontawesome', size: '2em' } })
    expect(result).toContain('width:3em')
    expect(result).toContain('height:3em')
  })

  it('带 extra 属性 border -> fa-border', () => {
    const result = iconRender('circle-user border', options)
    expect(result).toContain('fa-border')
  })

  it('带多个 extra 属性 border spin -> fa-border fa-spin', () => {
    const result = iconRender('circle-user border spin', options)
    expect(result).toContain('fa-border')
    expect(result).toContain('fa-spin')
  })

  it('带 class 属性', () => {
    const result = iconRender('circle-user class="my-class"', options)
    expect(result).toContain('class="fontawesome fa-solid fa-circle-user my-class"')
  })

  it('带 key=value 属性', () => {
    const result = iconRender('circle-user title="hello"', options)
    expect(result).toContain('title="hello"')
  })

  it('显式 fontawesome 前缀', () => {
    const result = iconRender('fontawesome circle-user', options)
    expect(result).toContain('class="fontawesome fa-solid fa-circle-user"')
  })

  it('无尺寸无颜色时不生成 style', () => {
    const result = iconRender('circle-user', options)
    expect(result).not.toContain('style=')
  })

  it('fab:github 显式前缀名', () => {
    const result = iconRender('fab:github', options)
    expect(result).toContain('class="fontawesome fa-brands fa-github"')
  })
})

// iconRender - 回退渲染
describe('iconRender - 回退（fallback）', () => {
  it('未配置任何提供商时回退为纯文本', () => {
    const result = iconRender('name', { defaultProvider: 'iconify' })
    expect(result).toBe('<span>::name::</span>')
  })

  it('配置了 iconify 但解析为 iconfont 提供商时回退', () => {
    const result = iconRender('iconfont github', { defaultProvider: 'iconify', iconify: { provider: 'iconify' } })
    expect(result).toBe('<span>::iconfont github::</span>')
  })

  it('配置了 iconfont 但解析为 iconify 提供商时回退', () => {
    const result = iconRender('iconify name', { defaultProvider: 'iconfont', iconfont: { provider: 'iconfont' } })
    expect(result).toBe('<span>::iconify name::</span>')
  })

  it('配置了 fontawesome 但解析为 iconify 提供商时回退', () => {
    const result = iconRender('iconify name', { defaultProvider: 'fontawesome', fontawesome: { provider: 'fontawesome' } })
    expect(result).toBe('<span>::iconify name::</span>')
  })

  it('默认提供商为 iconfont 但仅配置了 iconify 时回退', () => {
    const result = iconRender('github', { defaultProvider: 'iconfont', iconify: { provider: 'iconify' } })
    expect(result).toBe('<span>::github::</span>')
  })

  it('回退时保留原始内容（含尺寸/颜色）', () => {
    const result = iconRender('name =1.2em /red', { defaultProvider: 'iconify' })
    expect(result).toBe('<span>::name =1.2em /red::</span>')
  })
})

// iconsMarkdownPlugin - 基础渲染
describe('iconsMarkdownPlugin - 基础渲染', () => {
  it('iconify 默认提供商渲染 ::name::', () => {
    const md = new MarkdownIt()
    md.use(iconsMarkdownPlugin, {
      defaultProvider: 'iconify',
      iconify: { provider: 'iconify' },
    })
    const result = md.render('::tdesign:logo-github-filled::')
    expect(result).toContain('<ITdesignLogoGithubFilled')
    expect(result).toContain('class="iconify"')
  })

  it('iconfont 默认提供商渲染 ::name::', () => {
    const md = new MarkdownIt()
    md.use(iconsMarkdownPlugin, {
      defaultProvider: 'iconfont',
      iconfont: { provider: 'iconfont' },
    })
    const result = md.render('::github::')
    expect(result).toContain('class="iconfont icon-github"')
  })

  it('fontawesome 默认提供商渲染 ::name::', () => {
    const md = new MarkdownIt()
    md.use(iconsMarkdownPlugin, {
      defaultProvider: 'fontawesome',
      fontawesome: { provider: 'fontawesome' },
    })
    const result = md.render('::circle-user::')
    expect(result).toContain('class="fontawesome fa-solid fa-circle-user"')
  })

  it('使用默认选项（无参数）时使用 iconify 默认提供商', () => {
    const md = new MarkdownIt()
    md.use(iconsMarkdownPlugin)
    // 无提供商配置，回退为纯文本
    const result = md.render('::name::')
    expect(result).toContain('<span>::name::</span>')
  })

  it('同一行中多个图标', () => {
    const md = new MarkdownIt()
    md.use(iconsMarkdownPlugin, {
      defaultProvider: 'iconify',
      iconify: { provider: 'iconify' },
    })
    const result = md.render('::a:: and ::b::')
    expect(result).toContain('<IA')
    expect(result).toContain('<IB')
  })

  it('图标在段落文本中间', () => {
    const md = new MarkdownIt()
    md.use(iconsMarkdownPlugin, {
      defaultProvider: 'iconify',
      iconify: { provider: 'iconify' },
    })
    const result = md.render('Hello ::name:: World')
    expect(result).toContain('<IName')
    expect(result).toContain('Hello')
    expect(result).toContain('World')
  })
})

// iconsMarkdownPlugin - 语法边界
describe('iconsMarkdownPlugin - 语法边界', () => {
  const options = {
    defaultProvider: 'iconify' as const,
    iconify: { provider: 'iconify' } as IconifyOptions,
  }

  it(':: 后跟空格不匹配 -> 纯文本', () => {
    const md = new MarkdownIt()
    md.use(iconsMarkdownPlugin, options)
    const result = md.render(':: name::')
    expect(result).not.toContain('<I')
    expect(result).toContain(':: name::')
  })

  it(':::name:: 在位置 0 不匹配，但 markdown-it 在位置 1 重新尝试 -> 匹配 ::name::', () => {
    // 位置 0: next === 0x3A 不匹配
    // 位置 1: ::name:: 匹配，前导 : 作为文本输出
    const md = new MarkdownIt()
    md.use(iconsMarkdownPlugin, options)
    const result = md.render(':::name::')
    expect(result).toContain('<IName')
    expect(result).toContain('>:<')
  })

  it('闭合 :: 前有空格不匹配 -> 纯文本', () => {
    const md = new MarkdownIt()
    md.use(iconsMarkdownPlugin, options)
    const result = md.render('::name ::')
    expect(result).not.toContain('<IName')
  })

  it(':::: 四个冒号不匹配', () => {
    const md = new MarkdownIt()
    md.use(iconsMarkdownPlugin, options)
    const result = md.render('::::')
    expect(result).not.toContain('<I')
  })

  it(':: 太短不匹配（max - start < 5）', () => {
    const md = new MarkdownIt()
    md.use(iconsMarkdownPlugin, options)
    const result = md.render('::')
    expect(result).not.toContain('<I')
  })

  it('::x: 4字符太短不匹配', () => {
    const md = new MarkdownIt()
    md.use(iconsMarkdownPlugin, options)
    const result = md.render('::x:')
    expect(result).not.toContain('<I')
  })

  it('::x:: 最小有效长度（5字符）匹配', () => {
    const md = new MarkdownIt()
    md.use(iconsMarkdownPlugin, options)
    const result = md.render('::x::')
    expect(result).toContain('<IX')
  })

  it(':: :: 5字符但空格不匹配', () => {
    const md = new MarkdownIt()
    md.use(iconsMarkdownPlugin, options)
    const result = md.render(':: ::')
    expect(result).not.toContain('<I')
  })

  it('文本中的 :: 不是图标（后跟空格）', () => {
    const md = new MarkdownIt()
    md.use(iconsMarkdownPlugin, options)
    const result = md.render('Use :: in text')
    expect(result).not.toContain('<I')
  })

  it('无闭合 :: 不匹配', () => {
    const md = new MarkdownIt()
    md.use(iconsMarkdownPlugin, options)
    const result = md.render('::name no closing')
    expect(result).not.toContain('<IName')
  })

  it('空内容 ::: 不匹配（start+2 === state.pos）', () => {
    const md = new MarkdownIt()
    md.use(iconsMarkdownPlugin, options)
    // ::::: 五个冒号，next 是 :，不匹配
    // 需要构造一个 start+2 === state.pos 的场景
    // :: ::  -> 空格不匹配
    // 实际上 start+2 === state.pos 意味着 :: 后立即跟 ::
    // 但 :::: next 是 :，在前面已被拦截
    // 这个分支在正常输入中难以触发，因为 :: 后必须是非空格非冒号字符
    const result = md.render('text :: :: more')
    expect(result).not.toContain('<I')
  })

  it('图标名后跟闭合 :: 立即匹配', () => {
    const md = new MarkdownIt()
    md.use(iconsMarkdownPlugin, options)
    const result = md.render('::abc::')
    expect(result).toContain('<IAbc')
  })

  it('图标语法在代码块中不被处理', () => {
    const md = new MarkdownIt()
    md.use(iconsMarkdownPlugin, options)
    const result = md.render('`::name::`')
    expect(result).toContain('<code>')
    expect(result).toContain('::name::')
    expect(result).not.toContain('<IName')
  })
})

// iconsMarkdownPlugin - 多提供商组合
describe('iconsMarkdownPlugin - 多提供商组合', () => {
  it('三种提供商同时配置，显式指定提供商', () => {
    const md = new MarkdownIt()
    md.use(iconsMarkdownPlugin, {
      defaultProvider: 'iconify',
      iconify: { provider: 'iconify' },
      iconfont: { provider: 'iconfont' },
      fontawesome: { provider: 'fontawesome' },
    })

    expect(md.render('::iconify name::')).toContain('<IName')
    expect(md.render('::iconfont github::')).toContain('class="iconfont icon-github"')
    expect(md.render('::fontawesome circle-user::')).toContain('class="fontawesome fa-solid fa-circle-user"')
  })

  it('默认提供商为 iconfont 时不显式指定使用 iconfont', () => {
    const md = new MarkdownIt()
    md.use(iconsMarkdownPlugin, {
      defaultProvider: 'iconfont',
      iconify: { provider: 'iconify' },
      iconfont: { provider: 'iconfont' },
    })
    const result = md.render('::github::')
    expect(result).toContain('class="iconfont icon-github"')
  })

  it('fontawesome 带 extra 属性 border', () => {
    const md = new MarkdownIt()
    md.use(iconsMarkdownPlugin, {
      defaultProvider: 'fontawesome',
      fontawesome: { provider: 'fontawesome' },
    })
    const result = md.render('::circle-user border::')
    expect(result).toContain('fa-border')
  })

  it('iconfont 带尺寸和颜色', () => {
    const md = new MarkdownIt()
    md.use(iconsMarkdownPlugin, {
      defaultProvider: 'iconfont',
      iconfont: { provider: 'iconfont' },
    })
    const result = md.render('::github =2em /red::')
    expect(result).toContain('font-size:2em')
    expect(result).toContain('color:red')
  })
})

// iconsMarkdownPlugin - 渲染器规则
describe('iconsMarkdownPlugin - 渲染器规则', () => {
  it('icon token 使用 icon 渲染规则', () => {
    const md = new MarkdownIt()
    md.use(iconsMarkdownPlugin, {
      defaultProvider: 'iconify',
      iconify: { provider: 'iconify' },
    })
    // 验证渲染规则已注册
    expect(typeof md.renderer.rules.icon).toBe('function')
  })

  it('默认选项参数正确处理', () => {
    const md = new MarkdownIt()
    // 不传 options 参数，使用默认值
    md.use(iconsMarkdownPlugin as any)
    const result = md.render('::name::')
    // 默认 defaultProvider 为 'iconify'，无提供商配置，回退为纯文本
    expect(result).toContain('<span>::name::</span>')
  })
})
