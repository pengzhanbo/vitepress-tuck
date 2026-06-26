import { describe, expect, it } from 'vitest'
import { iconPlugin } from '../src/node/vite-plugins/iconPlugin'

describe('iconPlugin', () => {
  it('should return a Vite plugin with correct name and enforce', () => {
    const plugin = iconPlugin([
      { name: 'icon-a1', svg: '<svg>A1</svg>' },
    ])

    expect(plugin.name).toBe('vitepress:tuck-icons')
    expect(plugin.enforce).toBe('post')
    expect(plugin.resolveId).toBeDefined()
    expect(plugin.load).toBeDefined()
  })

  it('should resolve virtual module id', () => {
    const plugin = iconPlugin([
      { name: 'icon-a2', svg: '<svg>A2</svg>' },
    ])

    const resolved = (plugin.resolveId as any)('virtual:tuck-icons.css')
    expect(resolved).toBe('\0virtual:tuck-icons.css')

    // Unknown id should return undefined
    const unknown = (plugin.resolveId as any)('other-module')
    expect(unknown).toBeUndefined()
  })

  it('should generate CSS custom properties from icons', () => {
    const plugin = iconPlugin([
      { name: 'icon-b1', svg: '<svg>B1</svg>' },
    ])

    const resolvedId = (plugin.resolveId as any)('virtual:tuck-icons.css')
    const css = (plugin.load as any)(resolvedId) as string

    expect(css).toContain('.vpi-icon-b1')
    expect(css).toContain('--icon: <svg>B1</svg>')
  })

  it('should collect multiple icons and generate CSS for all', () => {
    const plugin = iconPlugin([
      { name: 'icon-c1', svg: '<svg>C1</svg>' },
      { name: 'icon-c2', svg: '<svg>C2</svg>' },
    ])

    const resolvedId = (plugin.resolveId as any)('virtual:tuck-icons.css')
    const css = (plugin.load as any)(resolvedId) as string

    expect(css).toContain('.vpi-icon-c1')
    expect(css).toContain('.vpi-icon-c2')
  })

  it('should handle icons with custom classname', () => {
    const plugin = iconPlugin([
      { name: 'icon-d2', svg: '<svg>D2</svg>', classname: 'my-custom-class-d2' },
    ])

    const resolvedId = (plugin.resolveId as any)('virtual:tuck-icons.css')
    const css = (plugin.load as any)(resolvedId) as string

    // When custom classname is provided, it replaces the default name-based classname
    expect(css).toContain('.vpi-my-custom-class-d2')
    expect(css).toContain('<svg>D2</svg>')
  })

  it('should merge classnames for duplicate icon names', () => {
    // Register same icon name twice with different classnames (both in one call)
    const plugin = iconPlugin([
      { name: 'icon-star-3', svg: '<svg>STAR3</svg>', classname: 'star-icon-x' },
      { name: 'icon-star-3', svg: '<svg>STAR3</svg>', classname: 'favorite-icon-x' },
    ])

    const resolvedId = (plugin.resolveId as any)('virtual:tuck-icons.css')
    const css = (plugin.load as any)(resolvedId) as string

    // When custom classname is given, it replaces the default (name-based) classname
    // So the css should have the custom classnames only
    expect(css).toContain('.vpi-star-icon-x')
    expect(css).toContain('.vpi-favorite-icon-x')
    // The icon name itself is not automatically added when custom classname is set
  })

  it('should not duplicate default classname when duplicate icon registered', () => {
    const plugin = iconPlugin([
      { name: 'icon-star-4', svg: '<svg>STAR4</svg>' },
      { name: 'icon-star-4', svg: '<svg>STAR4</svg>' },
    ])

    const resolvedId = (plugin.resolveId as any)('virtual:tuck-icons.css')
    const css = (plugin.load as any)(resolvedId) as string

    // Should only have one occurrence of .vpi-icon-star-4
    const matches = css.match(/\.vpi-icon-star-4/g)
    expect(matches?.length).toBe(1)
  })

  it('should return null when loading unknown id', () => {
    const plugin = iconPlugin([
      { name: 'icon-e1', svg: '<svg>E1</svg>' },
    ])

    const result = (plugin.load as any)('some-other-id')
    expect(result).toBeNull()
  })

  it('should return null when module not yet resolved (isProcessing guard)', () => {
    // iconList is module-level shared state
    // Since a previous test already resolved and loaded, isProcessing should be false now
    const plugin = iconPlugin([
      { name: 'icon-f1', svg: '<svg>F1</svg>' },
    ])

    // Load without resolving first should return null (isProcessing is false)
    const result = (plugin.load as any)('\0virtual:tuck-icons.css')
    expect(result).toBeNull()
  })
})
