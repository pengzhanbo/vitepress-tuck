import { describe, expect, it } from 'vitest'
import { resolveIcon } from '../src/node/resolveIcon'

// 基础解析
describe('resolveIcon - 基础解析', () => {
  it('简单名称，使用默认提供商', () => {
    expect(resolveIcon('tdesign:logo-github-filled', 'iconify')).toEqual({
      provider: 'iconify',
      size: '',
      color: '',
      name: 'tdesign:logo-github-filled',
    })
  })

  it('简单名称，默认提供商为 iconfont', () => {
    expect(resolveIcon('github', 'iconfont')).toEqual({
      provider: 'iconfont',
      size: '',
      color: '',
      name: 'github',
    })
  })

  it('简单名称，默认提供商为 fontawesome', () => {
    expect(resolveIcon('circle-user', 'fontawesome')).toEqual({
      provider: 'fontawesome',
      size: '',
      color: '',
      name: 'circle-user',
    })
  })
})

// 提供商前缀解析
describe('resolveIcon - 提供商前缀', () => {
  it('显式 iconify 前缀', () => {
    expect(resolveIcon('iconify logo-github-filled', 'iconfont')).toEqual({
      provider: 'iconify',
      size: '',
      color: '',
      name: 'logo-github-filled',
    })
  })

  it('显式 iconfont 前缀', () => {
    expect(resolveIcon('iconfont github', 'iconify')).toEqual({
      provider: 'iconfont',
      size: '',
      color: '',
      name: 'github',
    })
  })

  it('显式 fontawesome 前缀', () => {
    expect(resolveIcon('fontawesome circle-user', 'iconify')).toEqual({
      provider: 'fontawesome',
      size: '',
      color: '',
      name: 'circle-user',
    })
  })

  it('提供商前缀后多个空格仍正确解析', () => {
    expect(resolveIcon('iconify  name', 'iconfont')).toEqual({
      provider: 'iconify',
      size: '',
      color: '',
      name: 'name',
    })
  })

  it('提供商前缀后 tab 分隔仍正确解析', () => {
    expect(resolveIcon('iconify\tname', 'iconfont')).toEqual({
      provider: 'iconify',
      size: '',
      color: '',
      name: 'name',
    })
  })

  it('无空格的 iconify 前缀不匹配（视为名称）', () => {
    const result = resolveIcon('iconifyname', 'iconfont')
    expect(result.provider).toBe('iconfont')
    expect(result.name).toBe('iconifyname')
  })

  it('提供商前缀后无内容时 name 为空', () => {
    const result = resolveIcon('iconify ', 'iconfont')
    expect(result.provider).toBe('iconify')
    expect(result.name).toBe('')
  })
})

// 尺寸解析
describe('resolveIcon - 尺寸解析', () => {
  it('带尺寸 =1.2em', () => {
    expect(resolveIcon('name =1.2em', 'iconify')).toEqual({
      provider: 'iconify',
      size: '1.2em',
      color: '',
      name: 'name',
    })
  })

  it('带宽x高尺寸 =1.2emx1.5em', () => {
    const result = resolveIcon('name =1.2emx1.5em', 'iconify')
    expect(result.size).toBe('1.2emx1.5em')
    expect(result.name).toBe('name')
  })

  it('数字尺寸 =36', () => {
    const result = resolveIcon('name =36', 'iconify')
    expect(result.size).toBe('36')
    expect(result.name).toBe('name')
  })

  it('尺寸在开头 =1.2em name', () => {
    const result = resolveIcon('=1.2em name', 'iconify')
    expect(result.size).toBe('1.2em')
    expect(result.name).toBe('name')
  })

  it('无空格 name=1.2em 不解析为尺寸', () => {
    const result = resolveIcon('name=1.2em', 'iconify')
    expect(result.size).toBe('')
    expect(result.name).toBe('name=1.2em')
  })

  it('尺寸与颜色（空格分隔）=1.2em /red', () => {
    const result = resolveIcon('name =1.2em /red', 'iconify')
    expect(result.size).toBe('1.2em')
    expect(result.color).toBe('red')
    expect(result.name).toBe('name')
  })

  it('尺寸与颜色无空格分隔 =1.2em/#fff -> size 包含整段', () => {
    const result = resolveIcon('name =1.2em/#fff', 'iconify')
    expect(result.size).toBe('1.2em/#fff')
    expect(result.color).toBe('')
    expect(result.name).toBe('name')
  })
})

// 颜色解析
describe('resolveIcon - 颜色解析', () => {
  it('带颜色 /red', () => {
    expect(resolveIcon('name /red', 'iconify')).toEqual({
      provider: 'iconify',
      size: '',
      color: 'red',
      name: 'name',
    })
  })

  it('带16进制颜色 /#ff0000', () => {
    const result = resolveIcon('name /#ff0000', 'iconify')
    expect(result.color).toBe('#ff0000')
  })

  it('颜色在开头 /red name', () => {
    const result = resolveIcon('/red name', 'iconify')
    expect(result.color).toBe('red')
    expect(result.name).toBe('name')
  })

  it('无空格 name/red 不解析为颜色', () => {
    const result = resolveIcon('name/red', 'iconify')
    expect(result.color).toBe('')
    expect(result.name).toBe('name/red')
  })

  it('颜色与尺寸组合 /red =1.2em name', () => {
    const result = resolveIcon('/red =1.2em name', 'iconify')
    expect(result.color).toBe('red')
    expect(result.size).toBe('1.2em')
    expect(result.name).toBe('name')
  })
})

// 提供商 + 尺寸 + 颜色组合
describe('resolveIcon - 组合解析', () => {
  it('提供商 + 尺寸 + 颜色', () => {
    const result = resolveIcon('iconfont github =1.2em /#fff', 'iconify')
    expect(result.provider).toBe('iconfont')
    expect(result.name).toBe('github')
    expect(result.size).toBe('1.2em')
    expect(result.color).toBe('#fff')
  })

  it('fontawesome + 颜色 + 尺寸', () => {
    const result = resolveIcon('fontawesome circle-user /red =1.2em', 'iconify')
    expect(result.provider).toBe('fontawesome')
    expect(result.name).toBe('circle-user')
    expect(result.color).toBe('red')
    expect(result.size).toBe('1.2em')
  })

  it('尺寸在开头 + 颜色在开头 + 名称', () => {
    const result = resolveIcon('=1.2em /red name', 'iconify')
    expect(result.size).toBe('1.2em')
    expect(result.color).toBe('red')
    expect(result.name).toBe('name')
  })
})

// extra 属性解析
describe('resolveIcon - extra 属性', () => {
  it('单个布尔属性 border', () => {
    const result = resolveIcon('fontawesome circle-user border', 'iconify')
    expect(result.provider).toBe('fontawesome')
    expect(result.name).toBe('circle-user')
    expect(result.extra).toBe('border')
  })

  it('多个布尔属性 border spin', () => {
    const result = resolveIcon('name border spin', 'iconify')
    expect(result.name).toBe('name')
    expect(result.extra).toBe('border spin')
  })

  it('key=value 属性 width="100"', () => {
    const result = resolveIcon('name width="100"', 'iconify') as any
    expect(result.name).toBe('name')
    expect(result.extra).toBe('')
    expect(result.width).toBe('100')
  })

  it('混合布尔属性和 key=value 属性', () => {
    const result = resolveIcon('name border width="100" spin', 'iconify') as any
    expect(result.name).toBe('name')
    expect(result.extra).toBe('border spin')
    expect(result.width).toBe('100')
  })

  it('class 属性作为 key=value', () => {
    const result = resolveIcon('name class="my-class"', 'iconify') as any
    expect(result.name).toBe('name')
    expect(result.class).toBe('my-class')
    expect(result.extra).toBe('')
  })

  it('class 布尔属性', () => {
    const result = resolveIcon('name class', 'iconify') as any
    expect(result.name).toBe('name')
    expect(result.extra).toBe('class')
    // class 作为布尔属性被 omit 掉
    expect(result.class).toBeUndefined()
  })

  it('data-value 属性 camelCase 转换', () => {
    const result = resolveIcon('name data-value="123"', 'iconify') as any
    expect(result.dataValue).toBe('123')
  })

  it('单引号属性值 title=\'hello\'', () => {
    const result = resolveIcon('name title=\'hello\'', 'iconify') as any
    expect(result.title).toBe('hello')
  })

  it('数字开头的布尔属性 2x -> extra 为 2x', () => {
    // words('2x') = ['2', 'x'], camelCase = '2X'
    // kebabCase('2X') = '2-x', RE_EXTRA_KEY 匹配 '2-' -> 替换为 '2'
    // 最终 extra = '2x'
    const result = resolveIcon('name 2x', 'iconify') as any
    expect(result.extra).toBe('2x')
  })

  it('含数字的布尔属性 border2x -> extra 为 border-2x', () => {
    // words('border2x') = ['border', '2', 'x'], camelCase = 'border2X'
    // kebabCase('border2X') = 'border-2-x'
    // RE_EXTRA_KEY 匹配 '-2-' -> 替换为 '-2'
    // 最终 extra = 'border-2x'
    const result = resolveIcon('name border2x', 'iconify') as any
    expect(result.extra).toBe('border-2x')
  })

  it('class + 布尔属性组合', () => {
    const result = resolveIcon('name class="custom" border', 'iconify') as any
    expect(result.class).toBe('custom')
    expect(result.extra).toBe('border')
  })

  it('空 extra（仅名称）', () => {
    const result = resolveIcon('name', 'iconify') as any
    expect(result.extra).toBeUndefined()
  })
})

// 边界情况
describe('resolveIcon - 边界情况', () => {
  it('空字符串', () => {
    const result = resolveIcon('', 'iconify')
    expect(result.provider).toBe('iconify')
    expect(result.name).toBe('')
    expect(result.size).toBe('')
    expect(result.color).toBe('')
  })

  it('仅空格', () => {
    const result = resolveIcon('   ', 'iconify')
    expect(result.provider).toBe('iconify')
    expect(result.name).toBe('')
  })

  it('仅尺寸', () => {
    const result = resolveIcon('=1.2em', 'iconify')
    expect(result.size).toBe('1.2em')
    expect(result.name).toBe('')
  })

  it('仅颜色', () => {
    const result = resolveIcon('/red', 'iconify')
    expect(result.color).toBe('red')
    expect(result.name).toBe('')
  })

  it('仅提供商前缀', () => {
    const result = resolveIcon('iconfont', 'iconify')
    // RE_PROVIDER 需要 \s+ 后缀，'iconfont' 无空格不匹配
    expect(result.provider).toBe('iconify')
    expect(result.name).toBe('iconfont')
  })

  it('名称含冒号（iconify 图标格式）', () => {
    const result = resolveIcon('tdesign:logo-github-filled =1.2em', 'iconify')
    expect(result.name).toBe('tdesign:logo-github-filled')
    expect(result.size).toBe('1.2em')
  })

  it('多个连续空格被 trim', () => {
    const result = resolveIcon('  name  =1.2em  /red  ', 'iconify')
    // RE_PROVIDER 不匹配（开头不是 iconify/iconfont/fontawesome + space）
    // 实际上开头空格不影响 RE_SIZE/RE_COLOR 的 lookbehind
    // 但 trim 会清理最终结果
    expect(result.name).toBe('name')
    expect(result.size).toBe('1.2em')
    expect(result.color).toBe('red')
  })

  it('提供商前缀 + extra 属性', () => {
    const result = resolveIcon('fontawesome circle-user border spin', 'iconify') as any
    expect(result.provider).toBe('fontawesome')
    expect(result.name).toBe('circle-user')
    expect(result.extra).toBe('border spin')
  })

  it('提供商前缀 + 尺寸 + 颜色 + extra', () => {
    const result = resolveIcon('fontawesome circle-user =1.2em /red border', 'iconify') as any
    expect(result.provider).toBe('fontawesome')
    expect(result.name).toBe('circle-user')
    expect(result.size).toBe('1.2em')
    expect(result.color).toBe('red')
    expect(result.extra).toBe('border')
  })

  it('false 值属性被保留在 attrs 中', () => {
    const result = resolveIcon('name disabled=false', 'iconify') as any
    expect(result.disabled).toBe(false)
  })

  it('true 值属性被当作布尔属性处理（移入 extra）', () => {
    // resolveAttrs 将 'true' 转为布尔 true，循环中 attrs[key] === true 判定为布尔属性
    const result = resolveIcon('name active=true', 'iconify') as any
    expect(result.extra).toBe('active')
    expect(result.active).toBeUndefined()
  })

  it('空引号属性值', () => {
    const result = resolveIcon('name title=""', 'iconify') as any
    expect(result.title).toBe('')
  })
})
