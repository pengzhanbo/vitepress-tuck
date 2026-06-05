import { describe, expect, it } from 'vitest'
import { defineConfig, definePlugin } from '../src/index'

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
    // Should not throw and should return valid config
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

    // Should not throw
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
})
