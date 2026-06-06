import { describe, expect, it } from 'vitest'
import { parseFieldContent } from '../src/node/parseFieldContent.js'

describe('parseFieldContent', () => {
  // --- Basics ---

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

  // --- @name ---

  it('should override name via @name', () => {
    const result = parseFieldContent('@name custom-name', 'attr-name')
    expect(result.name).toBe('custom-name')
  })

  it('should not override name when @name has no value', () => {
    const result = parseFieldContent('@name', 'attr-name')
    expect(result.name).toBe('attr-name')
  })

  // --- @type ---

  it('should parse @type', () => {
    const result = parseFieldContent('@type Number', 'count')
    expect(result.type).toBe('Number')
  })

  it('should set type to empty string when @type has no value', () => {
    const result = parseFieldContent('@type', 'count')
    expect(result.type).toBe(undefined)
  })

  // --- @default ---

  it('should parse @default', () => {
    const result = parseFieldContent('@default 42', 'count')
    expect(result.default).toBe('42')
  })

  it('should set default to empty string when @default has no value', () => {
    const result = parseFieldContent('@default', 'count')
    expect(result.default).toBe(undefined)
  })

  // --- @deprecated ---

  it('should set deprecated to true when @deprecated is present', () => {
    const result = parseFieldContent('@deprecated', 'oldField')
    expect(result.deprecated).toBe(true)
  })

  it('should ignore value after @deprecated', () => {
    const result = parseFieldContent('@deprecated since v2.0', 'oldField')
    expect(result.deprecated).toBe(true)
  })

  it('should default deprecated to undefined', () => {
    const result = parseFieldContent('', 'field')
    expect(result.deprecated).toBe(undefined)
  })

  // --- @optional ---

  it('should set optional to true when @optional is present', () => {
    const result = parseFieldContent('@optional', 'field')
    expect(result.optional).toBe(true)
  })

  it('should ignore value after @optional', () => {
    const result = parseFieldContent('@optional true', 'field')
    expect(result.optional).toBe(true)
  })

  it('should default optional to undefined', () => {
    const result = parseFieldContent('', 'field')
    expect(result.optional).toBe(undefined)
  })

  // --- Description (implicit & explicit) ---

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

  it('should handle empty description when no text is provided', () => {
    const result = parseFieldContent('', 'field')
    expect(result.description).toBe('')
  })

  // --- Empty lines ---

  it('should ignore empty lines (no interruption to description)', () => {
    const result = parseFieldContent(
      `用户总数。

@type Number
@default 0`,
      'count',
    )
    expect(result.description).toBe('用户总数。\n')
  })

  it('should ignore blank lines between description paragraphs', () => {
    const result = parseFieldContent(
      `第一段


第二段`,
      'field',
    )
    expect(result.description).toBe('第一段\n\n\n第二段')
  })

  // --- Unknown tags ---

  it('should treat unknown @-tags as description text', () => {
    const result = parseFieldContent('@since 2.0', 'field')
    expect(result.description).toBe('@since 2.0')
  })

  it('should include unknown tags in the current description paragraph', () => {
    const result = parseFieldContent(
      `基本描述。
@since 2.0
@type Number`,
      'field',
    )
    expect(result.description).toBe('基本描述。\n@since 2.0')
  })

  // --- @deprecated followed by @optional (one tag per line) ---

  it('should parse one tag per line (@deprecated does not consume @optional)', () => {
    const result = parseFieldContent(
      `@deprecated
@optional`,
      'field',
    )
    expect(result.deprecated).toBe(true)
    expect(result.optional).toBe(true)
  })

  // --- Repeated tags ---

  it('should use last @type value when repeated', () => {
    const result = parseFieldContent(
      `@type String
@type Number`,
      'field',
    )
    expect(result.type).toBe('Number')
  })

  it('should use last @name value when repeated', () => {
    const result = parseFieldContent(
      `@name first
@name second`,
      'field',
    )
    expect(result.name).toBe('second')
  })

  // --- @ symbol in description ---

  it('should treat @ mid-line as description text (not a tag)', () => {
    const result = parseFieldContent('联系邮箱 user@example.com', 'email')
    expect(result.description).toBe('联系邮箱 user@example.com')
  })

  it('should treat @ at line start of unknown tag as description', () => {
    const result = parseFieldContent('@not-a-real-tag some value', 'field')
    expect(result.description).toBe('@not-a-real-tag some value')
  })

  // --- Edge cases ---

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

  it('should handle mixed unknown and known tags correctly', () => {
    const result = parseFieldContent(
      `@author John
@description Main description
@since 1.0
@type String
@deprecated`,
      'field',
    )
    expect(result.description).toBe('@author John\nMain description\n@since 1.0')
    expect(result.type).toBe('String')
    expect(result.deprecated).toBe(true)
  })
})
