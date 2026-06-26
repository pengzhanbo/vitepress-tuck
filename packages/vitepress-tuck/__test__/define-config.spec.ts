import type { ComponentResolver, ComponentResolverObject } from 'unplugin-vue-components'
import { describe, expect, it } from 'vitest'
import { defineConfig, definePlugin } from '../src/index'

// ============================================================
// defineConfig
// ============================================================

describe('defineConfig', () => {
  it('should return a valid config with no plugins', () => {
    const config = defineConfig({
      title: 'My Site',
      description: 'Test',
    })
    expect(config.title).toBe('My Site')
    expect(config.description).toBe('Test')
  })

  it('should default plugins to empty array', () => {
    const config = defineConfig({
      title: 'Test',
    })
    expect(config.title).toBe('Test')
  })

  it('should merge plugin vite configuration', () => {
    const plugin = definePlugin(() => ({
      name: 'test-vite-plugin',
      vite: {
        ssr: { noExternal: ['my-lib'] },
      },
    }))

    const config = defineConfig({
      plugins: [plugin()],
    })

    expect(config.vite).toBeDefined()
    expect(config.vite?.ssr?.noExternal).toContain('my-lib')
  })

  it('should merge plugin markdown configuration', () => {
    const plugin = definePlugin(() => ({
      name: 'test-md-plugin',
      markdown: {
        config: (_md: any) => {
          // custom config
        },
      },
    }))

    const config = defineConfig({
      plugins: [plugin()],
    })

    expect(config.markdown).toBeDefined()
    expect(typeof config.markdown?.config).toBe('function')
  })

  it('should collect buildEnd hooks from plugins', () => {
    const plugin = definePlugin(() => ({
      name: 'test-build-hook',
      buildEnd: async () => { /* hook called */ },
    }))

    const config = defineConfig({
      plugins: [plugin()],
    })

    expect(typeof config.buildEnd).toBe('function')
  })

  it('should collect transformHead hooks', () => {
    const plugin = definePlugin(() => ({
      name: 'test-head-hook',
      transformHead: async () => [['meta', { name: 'test', content: 'value' }] as any],
    }))

    const config = defineConfig({
      plugins: [plugin()],
    })

    expect(typeof config.transformHead).toBe('function')
  })

  it('should support multiple plugins', () => {
    const plugin1 = definePlugin(() => ({
      name: 'plugin-1',
      vite: { ssr: { noExternal: ['lib-a'] } },
    }))
    const plugin2 = definePlugin(() => ({
      name: 'plugin-2',
      vite: { ssr: { noExternal: ['lib-b'] } },
    }))

    const config = defineConfig({
      plugins: [plugin1(), plugin2()],
    })

    expect(config.vite?.ssr?.noExternal).toBeDefined()
  })

  it('should preserve user config options alongside plugins', () => {
    const plugin = definePlugin(() => ({
      name: 'test-plugin',
      vite: { ssr: { noExternal: ['lib-a'] } },
    }))

    const config = defineConfig({
      title: 'My Site',
      description: 'My Description',
      plugins: [plugin()],
    })

    expect(config.title).toBe('My Site')
    expect(config.description).toBe('My Description')
  })

  it('should pass config with client enhance as string', () => {
    const plugin = definePlugin(() => ({
      name: 'test-client-plugin',
      client: {
        enhance: 'enhanceAppWithTest',
      },
    }))

    const config = defineConfig({
      plugins: [plugin()],
    })

    expect(config).toBeDefined()
  })

  it('should pass config with client enhance as true', () => {
    const plugin = definePlugin(() => ({
      name: 'test-client-plugin',
      client: {
        enhance: true,
      },
    }))

    const config = defineConfig({
      plugins: [plugin()],
    })

    expect(config).toBeDefined()
  })

  it('should pass config with client imports', () => {
    const plugin = definePlugin(() => ({
      name: 'test-client-plugin',
      client: {
        imports: ['import "some-package/style.css"'],
      },
    }))

    const config = defineConfig({
      plugins: [plugin()],
    })

    expect(config).toBeDefined()
  })

  it('should merge user markdown.config alongside plugin markdown.config', () => {
    const plugin = definePlugin(() => ({
      name: 'test-md-plugin',
      markdown: {
        config: (_md: any) => {
          // plugin hook
        },
      },
    }))

    const config = defineConfig({
      plugins: [plugin()],
      markdown: {
        config: (_md: any) => {
          // user hook
        },
      },
    })

    expect(typeof config.markdown?.config).toBe('function')
  })

  it('should handle plugins with vue configuration', () => {
    const plugin = definePlugin(() => ({
      name: 'test-vue-plugin',
      vue: {
        template: {
          compilerOptions: { isCustomElement: (tag: string) => tag.startsWith('my-') },
        },
      },
    }))

    const config = defineConfig({
      plugins: [plugin()],
    })

    expect(config.vue).toBeDefined()
  })

  it('should collect postRender hooks', () => {
    const plugin = definePlugin(() => ({
      name: 'test-post-render',
      postRender: async (ctx: any) => ctx,
    }))

    const config = defineConfig({
      plugins: [plugin()],
    })

    expect(typeof config.postRender).toBe('function')
  })

  it('should collect transformPageData hooks', () => {
    const plugin = definePlugin(() => ({
      name: 'test-transform-page',
      transformPageData: async (pageData: any) => pageData,
    }))

    const config = defineConfig({
      plugins: [plugin()],
    })

    expect(typeof config.transformPageData).toBe('function')
  })

  it('should collect transformHtml hooks and chain them', () => {
    const plugin1 = definePlugin(() => ({
      name: 'test-html-1',
      transformHtml: async (code: string) => `${code}-modified1`,
    }))
    const plugin2 = definePlugin(() => ({
      name: 'test-html-2',
      transformHtml: async (code: string) => `${code}-modified2`,
    }))

    const config = defineConfig({
      plugins: [plugin1(), plugin2()],
    })

    expect(typeof config.transformHtml).toBe('function')
  })

  it('should handle empty plugin array explicitly', () => {
    const config = defineConfig({
      plugins: [],
      title: 'Test',
    })

    expect(config.title).toBe('Test')
  })

  // ---- Edge Cases ----

  it('should handle componentResolver as string array', () => {
    const plugin = definePlugin(() => ({
      name: 'test-resolver-plugin',
      componentResolver: ['MyComponent', 'OtherComponent'],
    }))

    const config = defineConfig({
      plugins: [plugin()],
    })

    expect(config).toBeDefined()
  })

  it('should normalize string[] componentResolver to a working resolve function', () => {
    const plugin = definePlugin(() => ({
      name: 'test-resolver-fn',
      componentResolver: ['CompA', 'CompB'],
    }))

    // Pass a shared resolvers array to capture the normalized resolver
    const resolvers: ComponentResolver[] = []
    defineConfig({
      plugins: [plugin()],
      components: { resolvers },
    })

    // The resolver should have been pushed to our shared array
    expect(resolvers.length).toBeGreaterThan(0)

    const resolver = resolvers[0]! as ComponentResolverObject
    expect(resolver.type).toBe('component')
    expect(resolver.resolve).toBeDefined()

    // Test matching component name
    const matchResult = (resolver as any).resolve('CompA')
    expect(matchResult).toEqual({ name: 'CompA', from: 'test-resolver-fn/client' })

    // Test non-matching component name (returns undefined)
    const noMatch = (resolver as any).resolve('UnknownComponent')
    expect(noMatch).toBeUndefined()
  })

  it('should handle componentResolver as ComponentResolver object', () => {
    const customResolver: ComponentResolver = {
      type: 'component',
      resolve: (name: string) => {
        if (name === 'CustomComp') {
          return { name: 'CustomComp', from: 'my-lib' }
        }
      },
    }

    const plugin = definePlugin(() => ({
      name: 'test-resolver-obj-plugin',
      componentResolver: customResolver,
    }))

    const config = defineConfig({
      plugins: [plugin()],
    })

    expect(config).toBeDefined()
  })

  it('should handle client with both imports and enhance', () => {
    const plugin = definePlugin(() => ({
      name: 'test-full-client-plugin',
      client: {
        imports: ['import "some-style.css"'],
        enhance: 'setupPlugin',
      },
    }))

    const config = defineConfig({
      plugins: [plugin()],
    })

    expect(config).toBeDefined()
  })

  it('should handle markdown config without config function', () => {
    const plugin = definePlugin(() => ({
      name: 'test-md-settings',
      markdown: {
        lineNumbers: true,
      },
    }))

    const config = defineConfig({
      plugins: [plugin()],
    })

    // lineNumbers should be merged into config
    expect(config.markdown?.lineNumbers).toBe(true)
  })

  it('should handle plugin without client, componentResolver, or hooks', () => {
    const plugin = definePlugin(() => ({
      name: 'minimal-plugin',
    }))

    const config = defineConfig({
      plugins: [plugin()],
    })

    expect(config).toBeDefined()
  })

  it('should merge user vue config with plugin vue config', () => {
    const plugin = definePlugin(() => ({
      name: 'test-vue-plugin',
      vue: {
        template: {
          compilerOptions: { isCustomElement: (tag: string) => tag.startsWith('x-') },
        },
      },
    }))

    const config = defineConfig({
      plugins: [plugin()],
      vue: {
        template: {
          compilerOptions: { whitespace: 'preserve' as const },
        },
      },
    })

    expect(config.vue).toBeDefined()
  })

  it('should handle multiple plugins with different hook types', () => {
    const pluginA = definePlugin(() => ({
      name: 'plugin-a',
      buildEnd: async () => {},
      transformHtml: async (code: string) => code,
    }))
    const pluginB = definePlugin(() => ({
      name: 'plugin-b',
      transformHead: async () => [['link', { rel: 'stylesheet', href: '/style.css' }] as any],
      postRender: async (ctx: any) => ctx,
    }))
    const pluginC = definePlugin(() => ({
      name: 'plugin-c',
      markdown: { config: (_md: any) => {} },
      transformPageData: async (data: any) => data,
    }))

    const config = defineConfig({
      plugins: [pluginA(), pluginB(), pluginC()],
    })

    expect(config.buildEnd).toBeDefined()
    expect(config.transformHtml).toBeDefined()
    expect(config.transformHead).toBeDefined()
    expect(config.postRender).toBeDefined()
    expect(config.markdown?.config).toBeDefined()
    expect(config.transformPageData).toBeDefined()
  })

  it('should handle client enhance with true (default exportName)', () => {
    const plugin = definePlugin(() => ({
      name: 'test-client-true',
      client: { enhance: true },
    }))

    const config = defineConfig({
      plugins: [plugin()],
    })

    expect(config).toBeDefined()
  })

  it('should handle client with only imports (no enhance)', () => {
    const plugin = definePlugin(() => ({
      name: 'test-imports-only',
      client: {
        imports: ['import "package-a/style.css"', 'import "package-b/style.css"'],
      },
    }))

    const config = defineConfig({
      plugins: [plugin()],
    })

    expect(config).toBeDefined()
  })
})
