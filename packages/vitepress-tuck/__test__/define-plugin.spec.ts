import { describe, expect, it } from 'vitest'
import { definePlugin } from '../src/index'

// ============================================================
// definePlugin
// ============================================================

describe('definePlugin', () => {
  it('should return the same function (identity helper)', () => {
    const fn = () => ({ name: 'test-plugin' })
    const defined = definePlugin(fn)
    expect(defined).toBe(fn)
  })

  it('should preserve generic type parameter', () => {
    interface MyOptions { foo: string }
    const fn = (opts?: MyOptions) => ({
      name: 'test-plugin',
      vite: { ssr: { noExternal: [opts?.foo || 'default'] } },
    })
    const defined = definePlugin(fn)
    const result = defined({ foo: 'bar' })
    expect(result.name).toBe('test-plugin')
    expect(result.vite).toBeDefined()
  })

  it('should work with no options', () => {
    const fn = () => ({ name: 'no-options-plugin' })
    const defined = definePlugin(fn)
    expect(defined()).toEqual({ name: 'no-options-plugin' })
  })
})
