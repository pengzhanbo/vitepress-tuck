import type { SiteConfig, UserConfig } from 'vitepress'
import { describe, expect, it } from 'vitest'
import { createHooks, mergePluginHooks } from '../src/hooks'

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
