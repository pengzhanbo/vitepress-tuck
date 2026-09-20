import MarkdownIt from 'markdown-it'
import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest'
import { locales } from '../src/node/locales.js'
import { fieldMarkdownPlugin } from '../src/node/markdown.js'
import { parseFieldContent } from '../src/node/parseFieldContent.js'
import { field } from '../src/node/plugin.js'
import { fieldVitePlugin } from '../src/node/vite.js'

// 设置 VITEPRESS_CONFIG，供 createLocales（vite 插件 load 时调用）使用
beforeAll(() => {
  ;(globalThis as Record<string, unknown>).VITEPRESS_CONFIG = {
    srcDir: '/test/src',
    cacheDir: '/test/cache',
    logger: { warn: vi.fn(), error: vi.fn() },
    userConfig: {
      locales: {
        root: { lang: 'en' },
        zh: { lang: 'zh' },
      },
    },
  }
})

afterAll(() => {
  delete (globalThis as Record<string, unknown>).VITEPRESS_CONFIG
})

/** 创建挂载了 fieldMarkdownPlugin 的 markdown-it 实例。 */
function createMd() {
  const md = new MarkdownIt()
  md.use(fieldMarkdownPlugin)
  return md
}

describe('parseFieldContent', () => {
  // --- 基础 ---

  it('should use info as the default name', () => {
    const result = parseFieldContent('', 'attr-name')
    expect(result.name).toBe('attr-name')
  })

  it('should handle empty info', () => {
    const result = parseFieldContent('', '')
    expect(result.name).toBe('')
  })

  it('should trim whitespace from info', () => {
    const result = parseFieldContent('', '  foo  ')
    expect(result.name).toBe('foo')
  })

  it('should return defaults for completely empty content', () => {
    const result = parseFieldContent('', 'field')
    expect(result).toEqual({
      name: 'field',
      description: '',
    })
  })

  it('should handle content with only whitespace', () => {
    const result = parseFieldContent('   \n  \n  ', 'field')
    expect(result.description).toBe('')
  })

  // --- @name ---

  it('should override name via @name', () => {
    const result = parseFieldContent('@name custom-name', 'attr-name')
    expect(result.name).toBe('custom-name')
  })

  it('should not override name when @name has no value', () => {
    const result = parseFieldContent('@name', 'attr-name')
    expect(result.name).toBe('attr-name')
  })

  it('should use last @name value when repeated', () => {
    const result = parseFieldContent('@name first\n@name second', 'field')
    expect(result.name).toBe('second')
  })

  // --- 字符串类型标签 ---

  it('should parse string tags (@type/@typeLink/@default/@unit/@format/@constraint)', () => {
    const result = parseFieldContent(
      `@type Number
@typeLink ./types.md
@default 42
@unit ms
@format YYYY-MM-DD
@constraint 1..100`,
      'count',
    )
    expect(result.type).toBe('Number')
    expect(result.typelink).toBe('./types.md')
    expect(result.default).toBe('42')
    expect(result.unit).toBe('ms')
    expect(result.format).toBe('YYYY-MM-DD')
    expect(result.constraint).toBe('1..100')
  })

  it('should remove surrounding backticks from string tag values', () => {
    const result = parseFieldContent('@type `String`', 'name')
    expect(result.type).toBe('String')
  })

  it('should not set string tags when the value is missing', () => {
    const result = parseFieldContent(
      `@type
@typelink
@default
@unit
@format
@constraint`,
      'field',
    )
    expect(result.type).toBe(undefined)
    expect(result.typelink).toBe(undefined)
    expect(result.default).toBe(undefined)
    expect(result.unit).toBe(undefined)
    expect(result.format).toBe(undefined)
    expect(result.constraint).toBe(undefined)
  })

  it('should use last @type value when repeated', () => {
    const result = parseFieldContent('@type String\n@type Number', 'field')
    expect(result.type).toBe('Number')
  })

  it('should trim the value of a string tag with trailing spaces', () => {
    const result = parseFieldContent('@type Number   ', 'field')
    expect(result.type).toBe('Number')
  })

  it('should treat tags as case-insensitive', () => {
    const result = parseFieldContent('@TYPE Number\n@Required', 'field')
    expect(result.type).toBe('Number')
    expect(result.required).toBe(true)
  })

  // --- @required ---

  it('should set required to true when @required is present', () => {
    const result = parseFieldContent('@required', 'field')
    expect(result.required).toBe(true)
  })

  it('should ignore any value after @required', () => {
    const result = parseFieldContent('@required yes', 'field')
    expect(result.required).toBe(true)
  })

  it('should default required to undefined', () => {
    const result = parseFieldContent('', 'field')
    expect(result.required).toBe(undefined)
  })

  // --- @deprecated ---

  it('should set deprecated to true when @deprecated is bare', () => {
    const result = parseFieldContent('@deprecated', 'oldField')
    expect(result.deprecated).toBe(true)
  })

  it('should keep the value of @deprecated as a string', () => {
    const result = parseFieldContent('@deprecated since v2.0', 'oldField')
    expect(result.deprecated).toBe('since v2.0')
  })

  it('should remove surrounding backticks from @deprecated', () => {
    const result = parseFieldContent('@deprecated `v2.0`', 'oldField')
    expect(result.deprecated).toBe('v2.0')
  })

  it('should default deprecated to undefined', () => {
    const result = parseFieldContent('', 'field')
    expect(result.deprecated).toBe(undefined)
  })

  // --- @experimental ---

  it('should set experimental to true when @experimental is bare', () => {
    const result = parseFieldContent('@experimental', 'field')
    expect(result.experimental).toBe(true)
  })

  it('should keep the value of @experimental as a string', () => {
    const result = parseFieldContent('@experimental v3.0', 'field')
    expect(result.experimental).toBe('v3.0')
  })

  it('should default experimental to undefined', () => {
    const result = parseFieldContent('', 'field')
    expect(result.experimental).toBe(undefined)
  })

  // --- @optional（已废弃，忽略） ---

  it('should ignore @optional entirely', () => {
    const result = parseFieldContent('@optional', 'field')
    expect(result.description).toBe('')
    expect(Object.keys(result)).toEqual(['name', 'description'])
  })

  it('should not merge @optional into adjacent description lines', () => {
    const result = parseFieldContent('第一段\n@optional\n第二段', 'field')
    expect(result.description).toBe('第一段\n第二段')
  })

  // --- 描述（隐式与显式） ---

  it('should capture implicit description (plain text lines)', () => {
    const result = parseFieldContent('用户总数。', 'count')
    expect(result.description).toBe('用户总数。')
  })

  it('should capture description from @description tag', () => {
    const result = parseFieldContent('@description 用户总数', 'count')
    expect(result.description).toBe('用户总数')
  })

  it('should join multiple description paragraphs with \\n', () => {
    const result = parseFieldContent(
      `用户总数。
@type Number
用户的计数。
@default 0
更多描述。`,
      'count',
    )
    expect(result.description).toBe('用户总数。\n用户的计数。\n更多描述。')
  })

  it('should append lines after @description to the same paragraph', () => {
    const result = parseFieldContent(
      `@description 第一行
第二行内容
第三行内容
@type String`,
      'field',
    )
    expect(result.description).toBe('第一行\n第二行内容\n第三行内容')
  })

  it('should handle multiple @description tags', () => {
    const result = parseFieldContent(
      `@description 第一部分
@deprecated
@description 第二部分`,
      'field',
    )
    expect(result.description).toBe('第一部分\n第二部分')
  })

  it('should handle an empty @description value', () => {
    const result = parseFieldContent(
      `第一段
@description
第二段`,
      'field',
    )
    expect(result.description).toBe('第一段\n第二段')
  })

  it('should default description to an empty string', () => {
    const result = parseFieldContent('', 'field')
    expect(result.description).toBe('')
  })

  it('should treat @ mid-line as description text (not a tag)', () => {
    const result = parseFieldContent('联系邮箱 user@example.com', 'email')
    expect(result.description).toBe('联系邮箱 user@example.com')
  })

  // --- 空行 ---

  it('should keep blank lines as description separators', () => {
    const result = parseFieldContent('第一段\n\n\n第二段', 'field')
    expect(result.description).toBe('第一段\n\n\n第二段')
  })

  // --- 未知标签 ---

  it('should treat unknown @-tags as description text', () => {
    const result = parseFieldContent('@author John', 'field')
    expect(result.description).toBe('@author John')
  })

  it('should treat an unknown @-tag without a value as description text', () => {
    const result = parseFieldContent('@unknowntag', 'field')
    expect(result.description).toBe('@unknowntag')
  })

  it('should include unknown tags in the current description paragraph', () => {
    const result = parseFieldContent(
      `基本描述。
@author John
@type Number`,
      'field',
    )
    expect(result.description).toBe('基本描述。\n@author John')
    expect(result.type).toBe('Number')
  })

  // --- @enum ---

  it('should parse @enum values split by |', () => {
    const result = parseFieldContent('@enum a | b | c', 'field')
    expect(result.enum).toEqual(['a', 'b', 'c'])
  })

  it('should append values across multiple @enum lines', () => {
    const result = parseFieldContent('@enum a\n@enum b | c', 'field')
    expect(result.enum).toEqual(['a', 'b', 'c'])
  })

  it('should preserve quotes in @enum values', () => {
    const result = parseFieldContent(`@enum "a" | 'b'`, 'field')
    expect(result.enum).toEqual(['"a"', '\'b\''])
  })

  it('should handle a bare @enum without values', () => {
    const result = parseFieldContent('@enum', 'field')
    expect(result.enum).toBe(undefined)
  })

  // --- @since ---

  it('should parse @since', () => {
    const result = parseFieldContent('@since 1.0', 'field')
    expect(result.since).toBe('1.0')
  })

  it('should keep only the first @since value', () => {
    const result = parseFieldContent('@since 1.0\n@since 2.0', 'field')
    expect(result.since).toBe('1.0')
  })

  it('should remove surrounding backticks from @since', () => {
    const result = parseFieldContent('@since `1.0`', 'field')
    expect(result.since).toBe('1.0')
  })

  it('should handle a bare @since without value', () => {
    const result = parseFieldContent('@since', 'field')
    expect(result.since).toBe(undefined)
  })

  // --- 混合场景 ---

  it('should handle mixed unknown and known tags correctly', () => {
    const result = parseFieldContent(
      `@author John
@description Main description
@since 1.0
@type String
@deprecated`,
      'field',
    )
    expect(result.description).toBe('@author John\nMain description')
    expect(result.since).toBe('1.0')
    expect(result.type).toBe('String')
    expect(result.deprecated).toBe(true)
  })
})

describe('fieldMarkdownPlugin', () => {
  it('应渲染基础字段为 VPField 组件', () => {
    const md = createMd()
    const result = md.render(`::: field count
@type Number
@default 0
用户总数。
:::`)

    expect(result).toContain('<VPField')
    expect(result).toContain('name="count"')
    expect(result).toContain('type="Number"')
    expect(result).toContain('default-value="0"')
    expect(result).toContain('slug="field-count"')
    expect(result).toContain('<p>用户总数。</p>')
    expect(result).toContain('</VPField>')
  })

  it('应对类型等属性进行 encodeURIComponent 编码', () => {
    const md = createMd()
    const result = md.render(`::: field size
@type string | number
@deprecated since v2.0
@experimental v3.0
@since 1.2.0
@unit ms
@format YYYY-MM-DD
@constraint 1..100
:::`)

    expect(result).toContain(`type="${encodeURIComponent('string | number')}"`)
    expect(result).toContain(`deprecated="${encodeURIComponent('since v2.0')}"`)
    expect(result).toContain(`experimental="${encodeURIComponent('v3.0')}"`)
    expect(result).toContain(`since="${encodeURIComponent('1.2.0')}"`)
    expect(result).toContain(`unit="${encodeURIComponent('ms')}"`)
    expect(result).toContain(`format="${encodeURIComponent('YYYY-MM-DD')}"`)
    expect(result).toContain(`constraint="${encodeURIComponent('1..100')}"`)
  })

  it('应对布尔标记渲染为无值属性', () => {
    const md = createMd()
    const result = md.render(`::: field token
@type String
@required
:::`)

    expect(result).toMatch(/required[\s>]/)
    expect(result).not.toContain('required="')
  })

  it('应渲染 @typeLink 属性', () => {
    const md = createMd()
    const result = md.render(`::: field options
@type Options
@typeLink ./options.md
:::`)

    expect(result).toContain('type-link="./options.md"')
  })

  it('应使用 @name 覆盖名称与 slug', () => {
    const md = createMd()
    const result = md.render(`::: field rawName
@name userName
:::`)

    expect(result).toContain('name="userName"')
    expect(result).toContain('slug="field-username"')
  })

  it('应为重复字段名生成唯一的 slug', () => {
    const md = createMd()
    const result = md.render(`::: field count
第一个。

:::

::: field count
第二个。
:::`)

    expect(result).toContain('slug="field-count"')
    expect(result).toContain('slug="field-count-1"')
  })

  it('应渲染 enum 插槽并转义 HTML', () => {
    const md = createMd()
    const result = md.render(`::: field mode
@enum <b>a</b> | b
:::`)

    expect(result).toContain('<template #enum>')
    expect(result).toContain('<span>&lt;b&gt;a&lt;/b&gt;</span>')
    expect(result).toContain('<span>b</span>')
  })

  it('应在没有枚举值时省略 enum 插槽', () => {
    const md = createMd()
    const result = md.render(`::: field mode
普通描述。
:::`)

    expect(result).not.toContain('<template #enum>')
  })

  it('应将描述按 markdown 渲染', () => {
    const md = createMd()
    const result = md.render(`::: field count
这是 **重要** 字段。
:::`)

    expect(result).toContain('<strong>重要</strong>')
  })

  it('应将字段包裹在 field-group 容器中', () => {
    const md = createMd()
    const result = md.render(`:::: field-group

::: field id
@type Number
@required
唯一标识符。
:::

::: field name
@type String
显示名称。
:::

::::`)

    expect(result).toContain('<div class="vp-field-group">')
    expect(result).toContain('name="id"')
    expect(result).toContain('name="name"')
    expect(result).toContain('</div>')
  })

  it('应对普通文本内容不生成 VPField', () => {
    const md = createMd()
    const result = md.render('普通段落。')
    expect(result).not.toContain('<VPField')
  })
})

describe('field plugin factory', () => {
  it('应返回包含 name 与 componentResolver 的插件对象', () => {
    const plugin = field()
    expect(plugin.name).toBe('vitepress-plugin-field')
    expect(plugin.componentResolver).toEqual(['VPField'])
  })

  it('markdown.config 应注册 field 容器', () => {
    const plugin = field()
    const md = new MarkdownIt()
    plugin.markdown!.config?.(md as any)

    const result = md.render(`::: field count
@type Number
:::`)
    expect(result).toContain('<VPField')
  })

  it('vite.plugins 应包含 field vite 插件', () => {
    const plugin = field()
    expect(plugin.vite?.plugins).toHaveLength(1)
    expect((plugin.vite!.plugins![0] as { name: string }).name).toBe('vitepress:field')
  })
})

describe('fieldVitePlugin', () => {
  it('resolveId 对 virtual:vitepress-field 返回 \\0 前缀 ID', () => {
    const plugin = fieldVitePlugin()
    expect((plugin.resolveId as (id: string) => string | undefined)('virtual:vitepress-field'))
      .toBe('\0virtual:vitepress-field')
  })

  it('resolveId 对其他 ID 返回 undefined', () => {
    const plugin = fieldVitePlugin()
    expect((plugin.resolveId as (id: string) => string | undefined)('other-module')).toBeUndefined()
  })

  it('load 对目标 ID 返回包含 locales 导出的代码', () => {
    const plugin = fieldVitePlugin()
    const code = (plugin.load as (id: string) => string | undefined)('\0virtual:vitepress-field')

    expect(typeof code).toBe('string')
    expect(code).toContain('export const locales = ')

    const parsed = JSON.parse(code!.replace('export const locales = ', ''))
    expect(parsed.root.required).toBe('Required')
    expect(parsed.zh.required).toBe('必填')
  })

  it('load 对非目标 ID 返回 undefined', () => {
    const plugin = fieldVitePlugin()
    expect((plugin.load as (id: string) => string | undefined)('other-id')).toBeUndefined()
  })

  it('load 应合并用户自定义 locales（按 key 匹配）', () => {
    const plugin = fieldVitePlugin({ locales: { root: { required: '必填项' } } })
    const code = (plugin.load as (id: string) => string | undefined)('\0virtual:vitepress-field')!
    const parsed = JSON.parse(code.replace('export const locales = ', ''))

    expect(parsed.root.required).toBe('必填项')
    expect(parsed.root.optional).toBe('Optional')
  })

  it('load 应支持按 lang 匹配用户自定义 locales', () => {
    const plugin = fieldVitePlugin({ locales: { en: { optional: 'Custom Optional' } } })
    const code = (plugin.load as (id: string) => string | undefined)('\0virtual:vitepress-field')!
    const parsed = JSON.parse(code.replace('export const locales = ', ''))

    expect(parsed.root.optional).toBe('Custom Optional')
    expect(parsed.root.required).toBe('Required')
  })

  it('未匹配到语言时应回退到内置的第一个 locale 作为 root', () => {
    const config = (globalThis as Record<string, unknown>).VITEPRESS_CONFIG as { userConfig: { locales: unknown } }
    config.userConfig.locales = {}
    try {
      const plugin = fieldVitePlugin()
      const code = (plugin.load as (id: string) => string | undefined)('\0virtual:vitepress-field')!
      const parsed = JSON.parse(code.replace('export const locales = ', ''))

      expect(parsed.root).toEqual(locales[0][1])
    }
    finally {
      config.userConfig.locales = {
        root: { lang: 'en' },
        zh: { lang: 'zh' },
      }
    }
  })
})
