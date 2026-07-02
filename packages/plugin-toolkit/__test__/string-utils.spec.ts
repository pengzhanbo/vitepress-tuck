import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  EXTENSION_AUDIOS,
  EXTENSION_IMAGES,
  EXTENSION_VIDEOS,
  isBuild,
  parseRect,
  resolveAttr,
  resolveAttrs,
  slugify,
  stringifyAttrs,
  treatAsHtml,
} from '../src/node/index'
import { isExternal, isLinkWithProtocol } from '../src/shared/index'

afterEach(() => {
  vi.unstubAllEnvs()
  vi.resetModules()
})

describe('parseRect', () => {
  it('should append "px" to numeric strings', () => {
    expect(parseRect('400')).toBe('400px')
    expect(parseRect('0')).toBe('0px')
    expect(parseRect('100')).toBe('100px')
  })

  it('should keep strings with units unchanged', () => {
    expect(parseRect('100%')).toBe('100%')
    expect(parseRect('50vh')).toBe('50vh')
    expect(parseRect('10rem')).toBe('10rem')
  })

  it('should use custom unit', () => {
    expect(parseRect('10', 'rem')).toBe('10rem')
    expect(parseRect('0', 'em')).toBe('0em')
  })

  it('should handle floating point numbers', () => {
    expect(parseRect('12.5')).toBe('12.5px')
  })

  it('should not modify non-numeric strings', () => {
    expect(parseRect('auto')).toBe('auto')
    expect(parseRect('inherit')).toBe('inherit')
  })
})

describe('slugify', () => {
  it('should convert text to slug', () => {
    expect(slugify('Hello World')).toBe('hello-world')
    expect(slugify('Foo Bar Baz')).toBe('foo-bar-baz')
  })

  it('should remove special characters', () => {
    expect(slugify('hello!@#$%world')).toBe('hello-world')
  })

  it('should collapse multiple separators', () => {
    expect(slugify('foo---bar')).toBe('foo-bar')
  })

  it('should trim leading/trailing separators', () => {
    expect(slugify('-foo-bar-')).toBe('foo-bar')
  })

  it('should prepend underscore to numeric start', () => {
    expect(slugify('123abc')).toBe('_123abc')
  })

  it('should lowercase the result', () => {
    expect(slugify('UPPERCASE')).toBe('uppercase')
  })

  it('should handle chinese characters', () => {
    const result = slugify('你好世界')
    expect(result.length).toBeGreaterThan(0)
  })

  it('should handle empty string', () => {
    expect(slugify('')).toBe('')
  })
})

describe('resolveAttrs', () => {
  it('should parse key=value pairs', () => {
    expect(resolveAttrs('width="100%" height="400"')).toEqual({
      width: '100%',
      height: '400',
    })
  })

  it('should parse boolean attributes (no value)', () => {
    expect(resolveAttrs('dark')).toEqual({ dark: true })
    expect(resolveAttrs('visible hidden')).toEqual({ visible: true, hidden: true })
  })

  it('should parse "true" and "false" as booleans', () => {
    expect(resolveAttrs('active=true')).toEqual({ active: true })
    expect(resolveAttrs('active=false')).toEqual({ active: false })
  })

  it('should parse empty quotes as empty string', () => {
    expect(resolveAttrs('title=""')).toEqual({ title: '' })
    expect(resolveAttrs('title=\'\'')).toEqual({ title: '' })
  })

  it('should camelCase attribute keys', () => {
    expect(resolveAttrs('data-value="123"')).toEqual({ dataValue: '123' })
    expect(resolveAttrs('margin-top="10"')).toEqual({ marginTop: '10' })
  })

  it('should handle empty string', () => {
    expect(resolveAttrs('')).toEqual({})
    expect(resolveAttrs('  ')).toEqual({})
  })

  it('should handle single-quoted values', () => {
    expect(resolveAttrs('title=\'hello world\'')).toEqual({ title: 'hello world' })
  })

  it('should handle mixed attributes', () => {
    expect(resolveAttrs('width="100%" hidden autoplay=true disabled=false')).toEqual({
      width: '100%',
      hidden: true,
      autoplay: true,
      disabled: false,
    })
  })
})

describe('resolveAttr', () => {
  it('should extract single attribute value', () => {
    expect(resolveAttr('width="100%" height="400"', 'width')).toBe('100%')
    expect(resolveAttr('width="100%" height="400"', 'height')).toBe('400')
  })

  it('should return undefined for missing attribute', () => {
    expect(resolveAttr('width="100%"', 'height')).toBeUndefined()
  })

  it('should handle single-quoted values', () => {
    expect(resolveAttr('title=\'hello\'', 'title')).toBe('hello')
  })

  it('should handle boolean attributes', () => {
    expect(resolveAttr('dark hidden', 'dark')).toBeUndefined()
  })
})

describe('stringifyAttrs', () => {
  it('should stringify simple attributes', () => {
    const result = stringifyAttrs({ width: '100%', height: '400' })
    expect(result).toContain('width="100%"')
    expect(result).toContain('height="400"')
  })

  it('should handle boolean true', () => {
    expect(stringifyAttrs({ dark: true })).toContain('dark')
    expect(stringifyAttrs({ visible: true })).not.toContain('=')
  })

  it('should skip boolean false', () => {
    const result = stringifyAttrs({ dark: false })
    expect(result).not.toContain('dark')
  })

  it('should handle numbers with dynamic binding prefix', () => {
    expect(stringifyAttrs({ height: 400 })).toContain(':height="400"')
  })

  it('should kebab-case keys', () => {
    const result = stringifyAttrs({ dataValue: '123', marginTop: '10' })
    expect(result).toContain('data-value="123"')
    expect(result).toContain('margin-top="10"')
  })

  it('should skip undefined and null by default', () => {
    const result = stringifyAttrs({ foo: undefined as any, bar: null as any, baz: 'hello' })
    expect(result).not.toContain('foo')
    expect(result).not.toContain('bar')
    expect(result).toContain('baz="hello"')
  })

  it('should return empty string for empty object', () => {
    expect(stringifyAttrs({})).toBe('')
  })

  it('should handle array/object values with dynamic binding', () => {
    const result = stringifyAttrs({ items: '[1,2,3]' })
    expect(result).toContain(':items="[1,2,3]"')
  })

  it('should handle forceStringify option', () => {
    const result = stringifyAttrs({ items: '[1,2,3]' }, false, ['items'])
    expect(result).toContain('items="[1,2,3]"')
    expect(result).not.toContain(':items')
  })

  it('should handle withUndefinedOrNull option', () => {
    const result = stringifyAttrs({ foo: undefined as any }, true)
    expect(result).toContain(':foo="undefined"')
  })
})

describe('treatAsHtml', () => {
  it('should treat .md as HTML', () => {
    expect(treatAsHtml('test.md')).toBe(true)
  })

  it('should not treat .js as HTML', () => {
    expect(treatAsHtml('test.js')).toBe(false)
  })

  it('should not treat .css as HTML', () => {
    expect(treatAsHtml('test.css')).toBe(false)
  })

  it('should not treat .png as HTML', () => {
    expect(treatAsHtml('test.png')).toBe(false)
  })

  it('should not treat .pdf as HTML', () => {
    expect(treatAsHtml('test.pdf')).toBe(false)
  })

  it('should treat unknown extensions as HTML', () => {
    expect(treatAsHtml('test.xyz')).toBe(true)
  })

  it('should treat no extension as HTML', () => {
    expect(treatAsHtml('test')).toBe(true)
  })
})

describe('isExternal', () => {
  it('should detect http links as external', () => {
    expect(isExternal('http://example.com')).toBe(true)
    expect(isExternal('https://example.com')).toBe(true)
  })

  it('should detect protocol-relative links as external', () => {
    expect(isExternal('//example.com')).toBe(true)
  })

  it('should treat relative paths as not external', () => {
    expect(isExternal('/path/to/file')).toBe(false)
    expect(isExternal('./relative')).toBe(false)
    expect(isExternal('../parent')).toBe(false)
  })

  it('should detect other protocols', () => {
    expect(isExternal('ftp://example.com')).toBe(true)
    expect(isExternal('mailto:test@example.com')).toBe(true)
  })
})

describe('isLinkWithProtocol', () => {
  it('should detect links with protocol', () => {
    expect(isLinkWithProtocol('https://example.com')).toBe(true)
    expect(isLinkWithProtocol('http://example.com')).toBe(true)
    expect(isLinkWithProtocol('ftp://example.com')).toBe(true)
  })

  it('should detect protocol-relative links', () => {
    expect(isLinkWithProtocol('//example.com')).toBe(true)
  })

  it('should treat relative paths as not having protocol', () => {
    expect(isLinkWithProtocol('/path/to/file')).toBe(false)
    expect(isLinkWithProtocol('./relative')).toBe(false)
  })

  it('should not treat hash links as having protocol', () => {
    expect(isLinkWithProtocol('#section')).toBe(false)
  })
})

// ---- constants ----

describe('constants', () => {
  it('isBuild should be false in test environment', () => {
    expect(isBuild).toBe(false)
  })

  it('extensionVideos should contain common video formats', () => {
    expect(EXTENSION_VIDEOS).toContain('mp4')
    expect(EXTENSION_VIDEOS).toContain('webm')
    expect(EXTENSION_VIDEOS).toContain('ogg')
    expect(EXTENSION_VIDEOS).toContain('mov')
  })

  it('extensionImages should contain common image formats', () => {
    expect(EXTENSION_IMAGES).toContain('png')
    expect(EXTENSION_IMAGES).toContain('jpg')
    expect(EXTENSION_IMAGES).toContain('svg')
    expect(EXTENSION_IMAGES).toContain('webp')
  })

  it('eXTENSION_AUDIOS should contain common audio formats', () => {
    expect(EXTENSION_AUDIOS).toContain('mp3')
    expect(EXTENSION_AUDIOS).toContain('wav')
    expect(EXTENSION_AUDIOS).toContain('flac')
  })
})

// ---- stringifyAttrs extra edge cases ----

describe('stringifyAttrs extra', () => {
  it('should handle "true" string as boolean true', () => {
    const result = stringifyAttrs({ active: 'true' as any })
    expect(result).toContain('active')
    expect(result).not.toContain('=')
  })

  it('should handle "false" string as boolean false', () => {
    const result = stringifyAttrs({ active: 'false' as any })
    expect(result).not.toContain('active')
  })

  it('should handle "undefined" string values', () => {
    const result = stringifyAttrs({ foo: 'undefined' as any })
    expect(result).toBe('')

    const resultWith = stringifyAttrs({ foo: 'undefined' as any }, true)
    expect(resultWith).toContain(':foo="undefined"')
  })

  it('should handle "null" string values', () => {
    const result = stringifyAttrs({ foo: 'null' as any })
    expect(result).toBe('')

    const resultWith = stringifyAttrs({ foo: 'null' as any }, true)
    expect(resultWith).toContain(':foo="null"')
  })

  it('should handle dynamic key prefix (starting with :)', () => {
    const result = stringifyAttrs({ ':onClick': 'handle' as any })
    expect(result).toContain(':on-click="handle"')
    expect(result).not.toContain('::')
  })

  it('should handle null and undefined with withUndefinedOrNull', () => {
    const result = stringifyAttrs({ foo: undefined as any, bar: null as any }, true)
    expect(result).toContain(':foo="undefined"')
    expect(result).toContain(':bar="null"')
  })

  it('should replace double quotes with single quotes for object/array values', () => {
    const result = stringifyAttrs({ items: '[{"a":1}]' as any })
    expect(result).toContain(`:items="[{'a':1}]"`)
  })
})

// ---- treatAsHtml extra edge cases ----

describe('treatAsHtml extra', () => {
  it('should handle uppercase extensions', () => {
    expect(treatAsHtml('test.PNG')).toBe(false)
    expect(treatAsHtml('test.JPG')).toBe(false)
    expect(treatAsHtml('test.PDF')).toBe(false)
  })

  it('should handle filenames with multiple dots', () => {
    expect(treatAsHtml('test.min.js')).toBe(false)
    expect(treatAsHtml('test.spec.vue')).toBe(true) // .vue not in known list
    expect(treatAsHtml('test.module.css')).toBe(false)
  })

  it('should handle known extensions correctly', () => {
    expect(treatAsHtml('test.zip')).toBe(false)
    expect(treatAsHtml('test.json')).toBe(false)
    expect(treatAsHtml('test.xml')).toBe(false)
    expect(treatAsHtml('test.csv')).toBe(false)
    expect(treatAsHtml('test.ttf')).toBe(false)
    expect(treatAsHtml('test.woff2')).toBe(false)
    expect(treatAsHtml('test.avif')).toBe(false)
    expect(treatAsHtml('test.opus')).toBe(false)
    expect(treatAsHtml('test.mjs')).toBe(false)
  })

  it('should handle extra extensions from VITE_EXTRA_EXTENSIONS env', async () => {
    // Reset modules to clear the module-level KNOWN_EXTENSIONS cache,
    // then set the env var and dynamically import to test the branch
    vi.resetModules()
    vi.stubEnv('VITE_EXTRA_EXTENSIONS', 'custom-ext,vue-ext')

    const { treatAsHtml: freshTreatAsHtml } = await import('../src/node/utils/treat-as-html')

    expect(freshTreatAsHtml('file.custom-ext')).toBe(false)
    expect(freshTreatAsHtml('file.vue-ext')).toBe(false)
    expect(freshTreatAsHtml('file.png')).toBe(false)
    expect(freshTreatAsHtml('file.unknown-ext')).toBe(true)
  })
})
