import type { ComponentResolver, ComponentResolverObject } from 'unplugin-vue-components'
import type { SiteConfig, UserConfig } from 'vitepress'
import { describe, expect, it } from 'vitest'
import { autoComponentsPlugin } from '../src/builtin-plugins/auto-components'
import { builtinPlugins } from '../src/builtin-plugins/index'
import { virtualEnhanceApp } from '../src/builtin-plugins/virtual-enhance-app'
import { createHooks, mergePluginHooks } from '../src/hooks'
import { defineConfig, definePlugin } from '../src/index'

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

// ============================================================
// createHooks
// ============================================================

describe('createHooks', () => {
  it('should create empty hooks object', () => {
    const hooks = createHooks()

    expect(hooks.buildEnd).toEqual([])
    expect(hooks.transformHead).toEqual([])
    expect(hooks.transformHtml).toEqual([])
    expect(hooks.transformPageData).toEqual([])
    expect(hooks.postRender).toEqual([])
    expect(hooks.markdownConfig).toEqual([])
  })

  it('should return independent hook arrays', () => {
    const hooks1 = createHooks()
    const hooks2 = createHooks()

    hooks1.buildEnd.push(async () => {})
    expect(hooks2.buildEnd).toEqual([])
  })
})

// ============================================================
// mergePluginHooks — execution tests
// ============================================================

describe('mergePluginHooks', () => {
  it('should not modify config when all hook arrays are empty', () => {
    const hooks = createHooks()
    const config: UserConfig = { title: 'Test' }

    mergePluginHooks(hooks, config)

    // Config should remain unchanged for hooks
    expect(config.buildEnd).toBeUndefined()
    expect(config.transformHead).toBeUndefined()
    expect(config.transformHtml).toBeUndefined()
    expect(config.transformPageData).toBeUndefined()
    expect(config.postRender).toBeUndefined()
    expect(config.markdown?.config).toBeUndefined()
  })

  // ---- markdownConfig ----

  it('should execute markdown.config hooks in parallel', async () => {
    const hooks = createHooks()
    const callOrder: number[] = []

    hooks.markdownConfig.push(
      async () => { callOrder.push(1) },
      async () => { callOrder.push(2) },
    )

    const config: any = {}
    mergePluginHooks(hooks, config)

    expect(config.markdown.config).toBeDefined()
    const fakeMd = {}
    await config.markdown.config(fakeMd)
    // Both hooks should have been called (order not guaranteed due to Promise.all)
    expect(callOrder).toContain(1)
    expect(callOrder).toContain(2)
  })

  it('should execute user markdown.config alongside plugin hooks', async () => {
    const hooks = createHooks()
    const callOrder: number[] = []

    hooks.markdownConfig.push(
      async () => { callOrder.push(1) },
    )

    const config: any = {
      markdown: {
        config: async () => { callOrder.push(2) },
      },
    }
    mergePluginHooks(hooks, config)

    const fakeMd = {}
    await config.markdown.config(fakeMd)
    expect(callOrder).toContain(1)
    expect(callOrder).toContain(2)
  })

  // ---- buildEnd ----

  it('should execute buildEnd hooks in parallel', async () => {
    const hooks = createHooks()
    const callOrder: number[] = []

    hooks.buildEnd.push(
      async () => { callOrder.push(1) },
      async () => { callOrder.push(2) },
    )

    const config: any = {}
    mergePluginHooks(hooks, config)

    expect(config.buildEnd).toBeDefined()
    const fakeSite = {} as SiteConfig
    await config.buildEnd(fakeSite)
    expect(callOrder).toContain(1)
    expect(callOrder).toContain(2)
  })

  it('should execute user buildEnd alongside plugin buildEnd hooks', async () => {
    const hooks = createHooks()
    const callOrder: number[] = []

    hooks.buildEnd.push(
      async () => { callOrder.push(1) },
    )

    const config: any = {
      buildEnd: async () => { callOrder.push(2) },
    }
    mergePluginHooks(hooks, config)

    const fakeSite = {} as SiteConfig
    await config.buildEnd(fakeSite)
    expect(callOrder).toContain(1)
    expect(callOrder).toContain(2)
  })

  // ---- transformHead ----

  it('should execute transformHead hooks and merge results', async () => {
    const hooks = createHooks()

    hooks.transformHead.push(
      async () => [['meta', { name: 'a', content: '1' }] as any],
      async () => [['meta', { name: 'b', content: '2' }] as any],
    )

    const config: any = {}
    mergePluginHooks(hooks, config)

    expect(config.transformHead).toBeDefined()
    const fakeSite = {} as SiteConfig
    const result = await config.transformHead(fakeSite)

    expect(result).toHaveLength(2)
    expect(result[0]).toEqual(['meta', { name: 'a', content: '1' }])
    expect(result[1]).toEqual(['meta', { name: 'b', content: '2' }])
  })

  it('should merge user transformHead with plugin transformHead results', async () => {
    const hooks = createHooks()

    hooks.transformHead.push(
      async () => [['meta', { name: 'plugin', content: 'p' }] as any],
    )

    const config: any = {
      transformHead: async () => [['meta', { name: 'user', content: 'u' }] as any],
    }
    mergePluginHooks(hooks, config)

    const fakeSite = {} as SiteConfig
    const result = await config.transformHead(fakeSite)
    expect(result).toHaveLength(2)
  })

  it('should handle transformHead hook returning void/null', async () => {
    const hooks = createHooks()

    hooks.transformHead.push(
      async () => undefined as any,
      async () => [['meta', { name: 'valid', content: 'v' }] as any],
    )

    const config: any = {}
    mergePluginHooks(hooks, config)

    const fakeSite = {} as SiteConfig
    const result = await config.transformHead(fakeSite)
    expect(result).toHaveLength(1)
    expect(result[0]).toEqual(['meta', { name: 'valid', content: 'v' }])
  })

  // ---- transformHtml (sequential) ----

  it('should execute transformHtml hooks sequentially', async () => {
    const hooks = createHooks()
    const order: number[] = []

    hooks.transformHtml.push(
      async (code: string) => {
        order.push(1)
        return code.replace('a', 'A')
      },
      async (code: string) => {
        order.push(2)
        return code.replace('b', 'B')
      },
    )

    const config: any = {}
    mergePluginHooks(hooks, config)

    expect(config.transformHtml).toBeDefined()
    const result = await config.transformHtml('abcdef', 'test.md', {})

    expect(order).toEqual([1, 2])
    expect(result).toBe('ABcdef')
  })

  it('should execute user transformHtml after plugin hooks', async () => {
    const hooks = createHooks()
    const order: number[] = []

    hooks.transformHtml.push(
      async (code: string) => {
        order.push(1)
        return `${code}-plugin`
      },
    )

    const config: any = {
      transformHtml: async (code: string) => {
        order.push(2)
        return `${code}-user`
      },
    }
    mergePluginHooks(hooks, config)

    const result = await config.transformHtml('hello', 'test.md', {})
    expect(order).toEqual([1, 2])
    expect(result).toBe('hello-plugin-user')
  })

  it('should handle transformHtml hook returning void (use previous value)', async () => {
    const hooks = createHooks()

    hooks.transformHtml.push(
      async (_code: string) => undefined as any,
      async (code: string) => `${code}-modified`,
    )

    const config: any = {}
    mergePluginHooks(hooks, config)

    const result = await config.transformHtml('hello', 'test.md', {})
    expect(result).toBe('hello-modified')
  })

  // ---- transformPageData (sequential) ----

  it('should execute transformPageData hooks sequentially', async () => {
    const hooks = createHooks()
    const order: number[] = []

    hooks.transformPageData.push(
      async (data: any) => {
        order.push(1)
        return { ...data, modifiedBy1: true }
      },
      async (data: any) => {
        order.push(2)
        return { ...data, modifiedBy2: true }
      },
    )

    const config: any = {}
    mergePluginHooks(hooks, config)

    expect(config.transformPageData).toBeDefined()
    const result = await config.transformPageData({ title: 'Test' }, {})

    expect(order).toEqual([1, 2])
    expect(result.modifiedBy1).toBe(true)
    expect(result.modifiedBy2).toBe(true)
    expect(result.title).toBe('Test')
  })

  it('should execute user transformPageData after plugin hooks', async () => {
    const hooks = createHooks()
    const order: number[] = []

    hooks.transformPageData.push(
      async (data: any) => {
        order.push(1)
        return { ...data, pluginStep: true }
      },
    )

    const config: any = {
      transformPageData: async (data: any) => {
        order.push(2)
        return { ...data, userStep: true }
      },
    }
    mergePluginHooks(hooks, config)

    const result = await config.transformPageData({ title: 'Test' }, {})
    expect(order).toEqual([1, 2])
    expect(result.pluginStep).toBe(true)
    expect(result.userStep).toBe(true)
  })

  it('should handle transformPageData hook returning void', async () => {
    const hooks = createHooks()

    hooks.transformPageData.push(
      async (_data: any) => undefined as any,
      async (data: any) => ({ ...data, modified: true }),
    )

    const config: any = {}
    mergePluginHooks(hooks, config)

    const result = await config.transformPageData({ title: 'Test' }, {})
    expect(result.modified).toBe(true)
    expect(result.title).toBe('Test')
  })

  // ---- postRender (sequential) ----

  it('should execute postRender hooks sequentially', async () => {
    const hooks = createHooks()
    const order: number[] = []

    hooks.postRender.push(
      async (ctx: any) => {
        order.push(1)
        return { ...ctx, step1: true }
      },
      async (ctx: any) => {
        order.push(2)
        return { ...ctx, step2: true }
      },
    )

    const config: any = {}
    mergePluginHooks(hooks, config)

    expect(config.postRender).toBeDefined()
    const result = await config.postRender({ initial: true })

    expect(order).toEqual([1, 2])
    expect(result.step1).toBe(true)
    expect(result.step2).toBe(true)
    expect(result.initial).toBe(true)
  })

  it('should execute user postRender after plugin hooks', async () => {
    const hooks = createHooks()
    const order: number[] = []

    hooks.postRender.push(
      async (ctx: any) => {
        order.push(1)
        return { ...ctx, pluginStep: true }
      },
    )

    const config: any = {
      postRender: async (ctx: any) => {
        order.push(2)
        return { ...ctx, userStep: true }
      },
    }
    mergePluginHooks(hooks, config)

    const result = await config.postRender({ initial: true })
    expect(order).toEqual([1, 2])
    expect(result.pluginStep).toBe(true)
    expect(result.userStep).toBe(true)
  })

  it('should handle postRender hook returning void', async () => {
    const hooks = createHooks()

    hooks.postRender.push(
      async (_ctx: any) => undefined as any,
      async (ctx: any) => ({ ...ctx, modified: true }),
    )

    const config: any = {}
    mergePluginHooks(hooks, config)

    const result = await config.postRender({ initial: true })
    expect(result.modified).toBe(true)
    expect(result.initial).toBe(true)
  })

  // ---- Multiple hook types ----

  it('should merge multiple hook types at once', () => {
    const hooks = createHooks()
    hooks.buildEnd.push(async () => {})
    hooks.markdownConfig.push(async () => {})
    hooks.transformHtml.push(async (code: string) => code)

    const config: any = {}
    mergePluginHooks(hooks, config)

    expect(config.buildEnd).toBeDefined()
    expect(config.markdown?.config).toBeDefined()
    expect(config.transformHtml).toBeDefined()
    // Types without hooks should remain undefined
    expect(config.transformHead).toBeUndefined()
    expect(config.transformPageData).toBeUndefined()
    expect(config.postRender).toBeUndefined()
  })
})

// ============================================================
// builtinPlugins
// ============================================================

describe('builtinPlugins', () => {
  it('should return an array of 3 plugins', () => {
    const plugins = builtinPlugins({})
    expect(plugins).toHaveLength(3)
  })

  it('should include virtual-enhance-app plugin', () => {
    const plugins = builtinPlugins({})
    // plugins are already VitepressPlugin objects (factory called inside builtinPlugins)
    const virtualPlugin = plugins[0]!
    expect(virtualPlugin.name).toBe('virtual-enhance-app')
    expect(virtualPlugin.vite?.plugins).toBeDefined()
  })

  it('should include auto-components plugin', () => {
    const plugins = builtinPlugins({})
    const autoCompPlugin = plugins[1]!
    expect(autoCompPlugin.name).toBe('auto-components')
    expect(autoCompPlugin.vite?.plugins).toBeDefined()
  })

  it('should include deps plugin', () => {
    const plugins = builtinPlugins({})
    const depsPlugin = (plugins[2] as any)!()
    expect(depsPlugin.name).toBe('vitepress-tuck:deps')
    expect(depsPlugin.vite?.ssr?.noExternal).toContain('vitepress-plugin-toolkit')
  })

  it('should pass enhanceApp options through', () => {
    const enhanceOptions = {
      imports: ['import "test.css"'],
      enhances: [{ moduleName: 'test-plugin', exportName: 'enhanceApp' }],
    }
    const plugins = builtinPlugins({ enhanceApp: enhanceOptions })
    const virtualPlugin = plugins[0]!
    expect(virtualPlugin.vite?.plugins).toBeDefined()
  })

  it('should pass components options through', () => {
    const componentsOptions = {
      dts: 'custom-types/components.d.ts',
    }
    const plugins = builtinPlugins({ components: componentsOptions })
    const autoCompPlugin = plugins[1]!
    expect(autoCompPlugin.vite?.plugins).toBeDefined()
  })
})

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
