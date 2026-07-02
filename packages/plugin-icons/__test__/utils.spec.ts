import { describe, expect, it } from 'vitest'
import { fontawesomePrefixes, getFontawesomeName, mergeStyles, parseSize } from '../src/node/utils'

// parseSize 函数测试
describe('parseSize', () => {
  it('单值尺寸 1.2em -> width=1.2em, height=1.2em', () => {
    expect(parseSize('1.2em')).toEqual({ width: '1.2em', height: '1.2em' })
  })

  it('宽x高尺寸 1.2emx1.5em -> width=1.2em, height=1.5em', () => {
    expect(parseSize('1.2emx1.5em')).toEqual({ width: '1.2em', height: '1.5em' })
  })

  it('数字字符串 36 -> 36px, 36px', () => {
    expect(parseSize('36')).toEqual({ width: '36px', height: '36px' })
  })

  it('数字类型 36 -> 36px, 36px', () => {
    expect(parseSize(36)).toEqual({ width: '36px', height: '36px' })
  })

  it('带 px 单位 36px -> 36px, 36px', () => {
    expect(parseSize('36px')).toEqual({ width: '36px', height: '36px' })
  })

  it('带 px 的宽x高 36pxx48px -> 36px, 48px', () => {
    expect(parseSize('36pxx48px')).toEqual({ width: '36px', height: '48px' })
  })

  it('百分号尺寸 100% -> 100%, 100%', () => {
    expect(parseSize('100%')).toEqual({ width: '100%', height: '100%' })
  })

  it('空字符串 -> undefined, undefined', () => {
    expect(parseSize('')).toEqual({ width: undefined, height: undefined })
  })

  it('仅高度 x10px -> width=undefined, height=10px', () => {
    expect(parseSize('x10px')).toEqual({ width: undefined, height: '10px' })
  })

  it('三段尺寸 10x20x30 -> 取前两段 10px, 20px', () => {
    expect(parseSize('10x20x30')).toEqual({ width: '10px', height: '20px' })
  })

  it('rem 单位 1.5rem -> 1.5rem, 1.5rem', () => {
    expect(parseSize('1.5rem')).toEqual({ width: '1.5rem', height: '1.5rem' })
  })

  it('vh 单位 50vh -> 50vh, 50vh', () => {
    expect(parseSize('50vh')).toEqual({ width: '50vh', height: '50vh' })
  })

  it('浮点数字 12.5 -> 12.5px, 12.5px', () => {
    expect(parseSize('12.5')).toEqual({ width: '12.5px', height: '12.5px' })
  })

  it('0 -> 0px, 0px', () => {
    expect(parseSize('0')).toEqual({ width: '0px', height: '0px' })
  })

  it('带空格的宽度 1.2em x 1.5em 解析时 trim', () => {
    // split('x') 后 parseRect 会 trim，但 ' 1.5em' 经过 trim 变 '1.5em'
    // 但实际 ' 1.2em x 1.5em' split('x') -> [' 1.2em ', ' 1.5em']
    // parseRect trim 后 -> '1.2em' 和 '1.5em'
    // 但 ' 1.2em '.trim() = '1.2em', parseFloat('1.2em')=1.2, Number('1.2em')=NaN, 1.2!==NaN -> 返回 '1.2em'
    const result = parseSize(' 1.2em x 1.5em')
    expect(result.width).toBe('1.2em')
    expect(result.height).toBe('1.5em')
  })

  it('auto 尺寸 -> auto, auto', () => {
    expect(parseSize('auto')).toEqual({ width: 'auto', height: 'auto' })
  })
})

// mergeStyles 函数测试
describe('mergeStyles', () => {
  it('仅 size，fontSize=false -> width:;height:;', () => {
    expect(mergeStyles('1.2em', undefined, false)).toBe('width:1.2em;height:1.2em;')
  })

  it('仅 size，fontSize=true -> font-size:;', () => {
    expect(mergeStyles('1.2em', undefined, true)).toBe('font-size:1.2em;')
  })

  it('仅 color -> color:;', () => {
    expect(mergeStyles(undefined, 'red')).toBe('color:red;')
  })

  it('size + color，fontSize=false', () => {
    expect(mergeStyles('1.2em', 'red')).toBe('width:1.2em;height:1.2em;color:red;')
  })

  it('size + color，fontSize=true', () => {
    expect(mergeStyles('1.2em', 'red', true)).toBe('font-size:1.2em;color:red;')
  })

  it('size + color 均为空 -> undefined', () => {
    expect(mergeStyles(undefined, undefined)).toBeUndefined()
  })

  it('空字符串 size + color -> color:;', () => {
    expect(mergeStyles('', 'red')).toBe('color:red;')
  })

  it('宽x高 size，fontSize=false -> width:;height:;', () => {
    expect(mergeStyles('1.2emx1.5em', undefined, false)).toBe('width:1.2em;height:1.5em;')
  })

  it('宽x高 size，fontSize=true -> font-size:使用 height', () => {
    expect(mergeStyles('1.2emx1.5em', undefined, true)).toBe('font-size:1.5em;')
  })

  it('数字 size，fontSize=false -> width:36px;height:36px;', () => {
    expect(mergeStyles(36, undefined, false)).toBe('width:36px;height:36px;')
  })

  it('数字 size，fontSize=true -> font-size:36px;', () => {
    expect(mergeStyles(36, undefined, true)).toBe('font-size:36px;')
  })

  it('仅 height 有值（x10px），fontSize=false -> height:10px;', () => {
    expect(mergeStyles('x10px', undefined, false)).toBe('height:10px;')
  })

  it('仅 height 有值（x10px），fontSize=true -> font-size:10px;', () => {
    expect(mergeStyles('x10px', undefined, true)).toBe('font-size:10px;')
  })

  it('16进制颜色 #fff -> color:#fff;', () => {
    expect(mergeStyles(undefined, '#fff')).toBe('color:#fff;')
  })

  it('默认 fontSize 为 false', () => {
    expect(mergeStyles('1.2em', undefined)).toBe('width:1.2em;height:1.2em;')
  })

  it('size 为空字符串时跳过尺寸样式', () => {
    expect(mergeStyles('', undefined, false)).toBeUndefined()
  })
})

// fontawesomePrefixes 常量测试
describe('fontawesomePrefixes', () => {
  it('应包含所有 11 种 FontAwesome 样式', () => {
    expect(fontawesomePrefixes).toHaveLength(11)
  })

  it('solid 对应 fas 和 s', () => {
    const solid = fontawesomePrefixes.find(([key]) => key === 'solid')
    expect(solid?.[1]).toEqual(['fas', 's'])
  })

  it('regular 对应 far 和 r', () => {
    const regular = fontawesomePrefixes.find(([key]) => key === 'regular')
    expect(regular?.[1]).toEqual(['far', 'r'])
  })

  it('brands 对应 fab 和 b', () => {
    const brands = fontawesomePrefixes.find(([key]) => key === 'brands')
    expect(brands?.[1]).toEqual(['fab', 'b'])
  })

  it('duotone solid 对应 fads 和 ds', () => {
    const duotone = fontawesomePrefixes.find(([key]) => key === 'duotone solid')
    expect(duotone?.[1]).toEqual(['fads', 'ds'])
  })

  it('sharp solid 对应 fass 和 ss', () => {
    const sharp = fontawesomePrefixes.find(([key]) => key === 'sharp solid')
    expect(sharp?.[1]).toEqual(['fass', 'ss'])
  })

  it('sharp-duotone solid 对应 fasds 和 sds', () => {
    const sharpDuotone = fontawesomePrefixes.find(([key]) => key === 'sharp-duotone solid')
    expect(sharpDuotone?.[1]).toEqual(['fasds', 'sds'])
  })
})

// getFontawesomeName 函数测试
describe('getFontawesomeName', () => {
  it('无前缀 name，默认 prefix fas -> fa-solid fa-name', () => {
    expect(getFontawesomeName('circle-user')).toBe('fa-solid fa-circle-user')
  })

  it('无前缀 name，自定义 prefix fab -> fa-brands fa-name', () => {
    expect(getFontawesomeName('circle-user', 'fab')).toBe('fa-brands fa-circle-user')
  })

  it('显式前缀 fab:github -> fa-brands fa-github', () => {
    expect(getFontawesomeName('fab:github')).toBe('fa-brands fa-github')
  })

  it('显式前缀覆盖默认 prefix', () => {
    expect(getFontawesomeName('fab:github', 'fas')).toBe('fa-brands fa-github')
  })

  it('无 prefix 参数时使用 fas 默认', () => {
    expect(getFontawesomeName('house', undefined)).toBe('fa-solid fa-house')
  })

  // 所有别名测试
  it('fas -> fa-solid', () => {
    expect(getFontawesomeName('fas:house')).toBe('fa-solid fa-house')
  })

  it('s -> fa-solid (短别名)', () => {
    expect(getFontawesomeName('s:house')).toBe('fa-solid fa-house')
  })

  it('far -> fa-regular', () => {
    expect(getFontawesomeName('far:house')).toBe('fa-regular fa-house')
  })

  it('r -> fa-regular (短别名)', () => {
    expect(getFontawesomeName('r:house')).toBe('fa-regular fa-house')
  })

  it('fal -> fa-light', () => {
    expect(getFontawesomeName('fal:house')).toBe('fa-light fa-house')
  })

  it('l -> fa-light (短别名)', () => {
    expect(getFontawesomeName('l:house')).toBe('fa-light fa-house')
  })

  it('fat -> fa-thin', () => {
    expect(getFontawesomeName('fat:house')).toBe('fa-thin fa-house')
  })

  it('t -> fa-thin (短别名)', () => {
    expect(getFontawesomeName('t:house')).toBe('fa-thin fa-house')
  })

  it('fads -> fa-duotone fa-solid', () => {
    expect(getFontawesomeName('fads:house')).toBe('fa-duotone fa-solid fa-house')
  })

  it('ds -> fa-duotone fa-solid (短别名)', () => {
    expect(getFontawesomeName('ds:house')).toBe('fa-duotone fa-solid fa-house')
  })

  it('fass -> fa-sharp fa-solid', () => {
    expect(getFontawesomeName('fass:house')).toBe('fa-sharp fa-solid fa-house')
  })

  it('ss -> fa-sharp fa-solid (短别名)', () => {
    expect(getFontawesomeName('ss:house')).toBe('fa-sharp fa-solid fa-house')
  })

  it('fasr -> fa-sharp fa-regular', () => {
    expect(getFontawesomeName('fasr:house')).toBe('fa-sharp fa-regular fa-house')
  })

  it('sr -> fa-sharp fa-regular (短别名)', () => {
    expect(getFontawesomeName('sr:house')).toBe('fa-sharp fa-regular fa-house')
  })

  it('fasl -> fa-sharp fa-light', () => {
    expect(getFontawesomeName('fasl:house')).toBe('fa-sharp fa-light fa-house')
  })

  it('sl -> fa-sharp fa-light (短别名)', () => {
    expect(getFontawesomeName('sl:house')).toBe('fa-sharp fa-light fa-house')
  })

  it('fast -> fa-sharp fa-thin', () => {
    expect(getFontawesomeName('fast:house')).toBe('fa-sharp fa-thin fa-house')
  })

  it('st -> fa-sharp fa-thin (短别名)', () => {
    expect(getFontawesomeName('st:house')).toBe('fa-sharp fa-thin fa-house')
  })

  it('fasds -> fa-sharp-duotone fa-solid', () => {
    expect(getFontawesomeName('fasds:house')).toBe('fa-sharp-duotone fa-solid fa-house')
  })

  it('sds -> fa-sharp-duotone fa-solid (短别名)', () => {
    expect(getFontawesomeName('sds:house')).toBe('fa-sharp-duotone fa-solid fa-house')
  })

  it('fab -> fa-brands', () => {
    expect(getFontawesomeName('fab:github')).toBe('fa-brands fa-github')
  })

  it('b -> fa-brands (短别名)', () => {
    expect(getFontawesomeName('b:github')).toBe('fa-brands fa-github')
  })

  // 边界情况
  it('未知前缀 xyz:house -> 回退到 fa-solid', () => {
    expect(getFontawesomeName('xyz:house')).toBe('fa-solid fa-house')
  })

  it('空字符串 name -> fa-solid fa-(空)', () => {
    expect(getFontawesomeName('')).toBe('fa-solid fa-')
  })

  it('name 含多个冒号 fab:github:extra -> 取第一段为 type，第二段为 iconName', () => {
    // split(':') 对 'fab:github:extra' -> ['fab', 'github', 'extra']
    // 解构 [type, iconName] = ['fab', 'github', 'extra']，extra 被丢弃
    expect(getFontawesomeName('fab:github:extra')).toBe('fa-brands fa-github')
  })
})
