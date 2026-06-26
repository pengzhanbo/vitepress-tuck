import { describe, expect, it } from 'vitest'
import {
  createMatcher,
  genHash,
  resolveMatcherPattern,
} from '../src/node/index'

// ---- genHash ----

describe('genHash', () => {
  it('should generate a sha256 hash from a string', () => {
    const hash = genHash('hello')
    expect(hash).toBeTypeOf('string')
    expect(hash.length).toBe(64) // sha256 hex length
  })

  it('should generate the same hash for the same input', () => {
    expect(genHash('hello')).toBe(genHash('hello'))
    expect(genHash({ a: 1, b: 2 })).toBe(genHash({ a: 1, b: 2 }))
    expect(genHash({ b: 2, a: 1 })).not.toBe(genHash({ a: 1, b: 2 }))
  })

  it('should hash numbers and booleans', () => {
    expect(genHash(123)).toBeTypeOf('string')
    expect(genHash(true)).toBeTypeOf('string')
    expect(genHash(false)).toBeTypeOf('string')
  })

  it('should hash objects via JSON.stringify', () => {
    expect(genHash({ a: 1 })).toBeTypeOf('string')
    expect(genHash({ a: 1 }).length).toBe(64)
  })

  it('should hash arrays via JSON.stringify', () => {
    expect(genHash([1, 2, 3])).toBeTypeOf('string')
  })

  it('should truncate hash when length is provided', () => {
    expect(genHash('hello', 8).length).toBe(8)
    expect(genHash('hello', 16).length).toBe(16)
  })

  it('should produce full hash when length is not provided', () => {
    expect(genHash('hello').length).toBe(64)
  })

  it('should handle undefined', () => {
    // String(undefined) -> 'undefined'
    expect(genHash(undefined)).toBeTypeOf('string')
  })

  it('should handle null', () => {
    // String(null) -> 'null'
    expect(genHash(null)).toBeTypeOf('string')
  })
})

// ---- resolveMatcherPattern ----

describe('resolveMatcherPattern', () => {
  it('should return default pattern when no include/exclude', () => {
    const result = resolveMatcherPattern()
    expect(result.pattern).toEqual(['*'])
    expect(result.ignore).toEqual([])
  })

  it('should handle string include', () => {
    const result = resolveMatcherPattern('**/*.md')
    expect(result.pattern).toEqual(['**/*.md'])
    expect(result.ignore).toEqual([])
  })

  it('should handle array include', () => {
    const result = resolveMatcherPattern(['**/*.md', '**/*.vue'])
    expect(result.pattern).toEqual(['**/*.md', '**/*.vue'])
    expect(result.ignore).toEqual([])
  })

  it('should move negated patterns to ignore', () => {
    const result = resolveMatcherPattern(['**/*.md', '!**/node_modules/**'])
    expect(result.pattern).toEqual(['**/*.md'])
    expect(result.ignore).toEqual(['**/node_modules/**'])
  })

  it('should handle string exclude', () => {
    const result = resolveMatcherPattern(undefined, '**/dist/**')
    expect(result.pattern).toEqual(['*'])
    expect(result.ignore).toEqual(['**/dist/**'])
  })

  it('should handle array exclude', () => {
    const result = resolveMatcherPattern(undefined, ['**/dist/**', '**/node_modules/**'])
    expect(result.pattern).toEqual(['*'])
    expect(result.ignore).toEqual(['**/dist/**', '**/node_modules/**'])
  })

  it('should deduplicate ignore patterns', () => {
    const result = resolveMatcherPattern(undefined, ['**/dist/**', '**/dist/**'])
    expect(result.ignore).toEqual(['**/dist/**'])
  })

  it('should handle all negated includes', () => {
    const result = resolveMatcherPattern(['!**/dist/**'])
    expect(result.pattern).toEqual(['*'])
    expect(result.ignore).toEqual(['**/dist/**'])
  })
})

// ---- createMatcher ----

describe('createMatcher', () => {
  it('should create a matcher function from include pattern', () => {
    const matcher = createMatcher('**/*.md')
    expect(matcher('guide.md')).toBe(true)
    expect(matcher('guide.js')).toBe(false)
  })

  it('should create a matcher with exclude pattern', () => {
    const matcher = createMatcher('**/*', '**/node_modules/**')
    expect(matcher('src/index.ts')).toBe(true)
    expect(matcher('node_modules/pkg/index.js')).toBe(false)
  })

  it('should cache matchers for the same pattern', () => {
    const m1 = createMatcher('**/*.md', '**/node_modules/**')
    const m2 = createMatcher('**/*.md', '**/node_modules/**')
    // Should return the same cache hit - verify they work the same
    expect(m1('test.md')).toBe(m2('test.md'))
    expect(m1('node_modules/test.md')).toBe(m2('node_modules/test.md'))
  })

  it('should handle undefined include and exclude', () => {
    const matcher = createMatcher()
    expect(matcher('anything')).toBe(true)
  })

  it('should handle array include and exclude parameters', () => {
    const matcher = createMatcher(['**/*.md', '**/*.vue'], ['**/node_modules/**', '**/dist/**'])
    expect(matcher('guide.md')).toBe(true)
    expect(matcher('guide.vue')).toBe(true)
    expect(matcher('guide.js')).toBe(false)
    expect(matcher('node_modules/pkg/index.md')).toBe(false)
    expect(matcher('dist/index.md')).toBe(false)
  })

  it('should cache normalized array patterns', () => {
    const m1 = createMatcher(['**/*.ts', '**/*.md'])
    const m2 = createMatcher(['**/*.md', '**/*.ts']) // different order, same after sort
    // Both should work the same after normalization
    expect(m1('test.ts')).toBe(true)
    expect(m2('test.ts')).toBe(true)
    expect(m1('test.md')).toBe(true)
    expect(m2('test.md')).toBe(true)
  })
})
