import { describe, expect, it } from 'vitest'
import { autoComponentsPlugin } from '../src/builtin-plugins/auto-components'
import { virtualEnhanceApp } from '../src/builtin-plugins/virtual-enhance-app'

// ============================================================
// virtualEnhanceApp
// ============================================================

describe('virtualEnhanceApp', () => {
  it('should resolve virtual:enhance-app module id', () => {
    const plugin = virtualEnhanceApp({})
    const resolved = (plugin.resolveId as any)('virtual:enhance-app')
    expect(resolved).toBe('\0virtual:enhance-app')
  })

  it('should not resolve unknown module id', () => {
    const plugin = virtualEnhanceApp({})
    const resolved = (plugin.resolveId as any)('other-module')
    expect(resolved).toBeUndefined()
  })

  it('should return undefined when loading non-matching id', () => {
    const plugin = virtualEnhanceApp({})
    const result = (plugin.load as any)('some-other-id')
    expect(result).toBeUndefined()
  })

  it('should return undefined when no id matches (load without resolveId)', () => {
    const plugin = virtualEnhanceApp({})
    // load with a non-resolved id
    const result = (plugin.load as any)('\0virtual:other-module')
    expect(result).toBeUndefined()
  })

  it('should generate module with only imports', () => {
    const options = {
      imports: ['import "style.css"'],
    }
    const plugin = virtualEnhanceApp(options)
    const resolvedId = (plugin.resolveId as any)('virtual:enhance-app')
    const code = (plugin.load as any)(resolvedId) as string

    expect(code).toContain('import "style.css"')
    expect(code).toContain('export default function enhanceApp(ctx)')
  })

  it('should generate module with enhances (imports and function calls)', () => {
    const options = {
      enhances: [
        { moduleName: 'test-plugin', exportName: 'enhanceApp' },
      ],
    }
    const plugin = virtualEnhanceApp(options)
    const resolvedId = (plugin.resolveId as any)('virtual:enhance-app')
    const code = (plugin.load as any)(resolvedId) as string

    expect(code).toContain('import { enhanceApp as enhanceApp$')
    expect(code).toContain('from \'test-plugin/client\'')
    expect(code).toContain('enhanceApp$')
    expect(code).toContain('(ctx)')
  })

  it('should generate module with multiple enhances', () => {
    const options = {
      enhances: [
        { moduleName: 'plugin-a', exportName: 'setup' },
        { moduleName: 'plugin-b', exportName: 'enhanceApp' },
      ],
    }
    const plugin = virtualEnhanceApp(options)
    const resolvedId = (plugin.resolveId as any)('virtual:enhance-app')
    const code = (plugin.load as any)(resolvedId) as string

    // Should have two import lines
    const importMatches = code.match(/import/g)
    expect(importMatches).not.toBeNull()
    // Each enhance generates an import
    expect(code).toContain('from \'plugin-a/client\'')
    expect(code).toContain('from \'plugin-b/client\'')
  })

  it('should generate module with both imports and enhances', () => {
    const options = {
      imports: ['import "style-a.css"', 'import "style-b.css"'],
      enhances: [
        { moduleName: 'plugin-c', exportName: 'enhanceApp' },
      ],
    }
    const plugin = virtualEnhanceApp(options)
    const resolvedId = (plugin.resolveId as any)('virtual:enhance-app')
    const code = (plugin.load as any)(resolvedId) as string

    expect(code).toContain('import "style-a.css"')
    expect(code).toContain('import "style-b.css"')
    expect(code).toContain('from \'plugin-c/client\'')
    expect(code).toContain('export default function enhanceApp(ctx)')
  })

  it('should generate valid module with empty options', () => {
    const plugin = virtualEnhanceApp({})
    const resolvedId = (plugin.resolveId as any)('virtual:enhance-app')
    const code = (plugin.load as any)(resolvedId) as string

    expect(code).toContain('export default function enhanceApp(ctx)')
  })

  it('should use unique aliases for each enhance to avoid conflicts', () => {
    const options = {
      enhances: [
        { moduleName: 'plugin-x', exportName: 'enhanceApp' },
        { moduleName: 'plugin-y', exportName: 'enhanceApp' },
      ],
    }
    const plugin = virtualEnhanceApp(options)
    const resolvedId = (plugin.resolveId as any)('virtual:enhance-app')
    const code = (plugin.load as any)(resolvedId) as string

    // Each alias appears twice in the code (import + call), but should be unique per enhance
    const aliases = code.match(/enhanceApp\$\d+/g)
    expect(aliases).not.toBeNull()
    // Should have 4 occurrences (2 per enhance), but only 2 unique aliases
    expect(aliases!.length).toBe(4)
    expect(new Set(aliases).size).toBe(2)
  })
})

// ============================================================
// autoComponentsPlugin
// ============================================================

describe('autoComponentsPlugin', () => {
  it('should create a plugin returning auto-components configuration', () => {
    const result = autoComponentsPlugin()

    expect(result.name).toBe('auto-components')
    expect(result.vite?.plugins).toBeDefined()
    expect(result.vite?.plugins).toHaveLength(1)
  })

  it('should accept custom options', () => {
    const result = autoComponentsPlugin({
      dts: 'my-types/components.d.ts',
    })

    expect(result.name).toBe('auto-components')
    expect(result.vite?.plugins).toBeDefined()
  })

  it('should accept undefined options', () => {
    const result = autoComponentsPlugin()

    expect(result).toBeDefined()
    expect(result.name).toBe('auto-components')
  })
})
