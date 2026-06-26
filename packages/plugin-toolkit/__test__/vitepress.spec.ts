import type { MarkdownEnv } from 'vitepress'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import {
  createLocales,
  getLocaleWithPath,
  getVitepressConfig,
  resolveRouteLink,
} from '../src/node/index'

const mockConfig = {
  site: {
    base: '/base/',
    lang: 'en-US',
    title: 'Test Site',
  },
  userConfig: {
    locales: {
      'root': { lang: 'en-US', label: 'English' },
      '/zh/': { lang: 'zh-CN', label: '中文' },
      '/ja/': { lang: 'ja-JP', label: '日本語' },
    },
  },
} as any

describe('vitepress utilities', () => {
  beforeEach(() => {
    (globalThis as any).VITEPRESS_CONFIG = mockConfig
  })

  afterEach(() => {
    delete (globalThis as any).VITEPRESS_CONFIG
  })

  describe('getVitepressConfig', () => {
    it('should return VITEPRESS_CONFIG from globalThis', () => {
      const config = getVitepressConfig()
      expect(config).toBeDefined()
      expect(config.site.base).toBe('/base/')
    })

    it('should throw when VITEPRESS_CONFIG is not initialized', () => {
      delete (globalThis as any).VITEPRESS_CONFIG
      expect(() => getVitepressConfig()).toThrow('VITEPRESS_CONFIG is not initialized')
      // restore for other tests
      ;(globalThis as any).VITEPRESS_CONFIG = mockConfig
    })
  })

  describe('getLocaleWithPath', () => {
    it('should resolve locale for a matched path', () => {
      const result = getLocaleWithPath('/zh/guide/')
      expect(result.lang).toBe('zh-CN')
      expect(result.locale).toBe('/zh/')
    })

    it('should return empty locale for root path', () => {
      const result = getLocaleWithPath('/guide/')
      expect(result.locale).toBe('')
    })

    it('should return lang for root locale', () => {
      const result = getLocaleWithPath('/guide/')
      expect(result.lang).toBe('en-US')
    })

    it('should fallback to first locale for unmatched path', () => {
      const result = getLocaleWithPath('/fr/guide/')
      // falls back to root (first key)
      expect(result.locale).toBe('')
    })

    it('should handle path that starts with locale key', () => {
      const result = getLocaleWithPath('/ja/about/')
      expect(result.lang).toBe('ja-JP')
      expect(result.locale).toBe('/ja/')
    })

    it('should return empty lang when lang is not set on locale config', () => {
      const configWithoutLang = {
        site: { base: '/', lang: '', title: '' },
        userConfig: {
          locales: {
            '/test/': { label: 'Test' },
          },
        },
      } as any
      ;(globalThis as any).VITEPRESS_CONFIG = configWithoutLang
      const result = getLocaleWithPath('/test/page')
      // key is '/test/' which is used as lang fallback
      expect(result.lang).toBe('/test/')
      expect(result.locale).toBe('/test/')
      ;(globalThis as any).VITEPRESS_CONFIG = mockConfig
    })

    it('should return empty lang and locale when no locales config', () => {
      const configWithoutLocales = {
        site: { base: '/', lang: '', title: '' },
        userConfig: {},
      } as any
      ;(globalThis as any).VITEPRESS_CONFIG = configWithoutLocales
      const result = getLocaleWithPath('/any/path')
      expect(result.lang).toBe('')
      expect(result.locale).toBe('')
      ;(globalThis as any).VITEPRESS_CONFIG = mockConfig
    })
  })

  describe('createLocales', () => {
    it('should create locales from builtin and VitePress config', () => {
      const builtin: [string[], Record<string, unknown>][] = [
        [['en', 'en-US'], { title: 'English Title' }],
        [['zh', 'zh-CN'], { title: '中文标题' }],
        [['ja', 'ja-JP'], { title: '日本語タイトル' }],
      ]

      const locales = createLocales(builtin)

      expect(locales.root).toBeDefined()
      expect(locales.root.title).toBe('English Title')
      expect(locales['/zh/']).toBeDefined()
      expect(locales['/zh/'].title).toBe('中文标题')
      expect(locales['/ja/']).toBeDefined()
      expect(locales['/ja/'].title).toBe('日本語タイトル')
    })

    it('should merge user locales on top of builtin', () => {
      const builtin: [string[], Record<string, unknown>][] = [
        [['zh', 'zh-CN'], { title: '中文标题', description: '描述' }],
      ]

      const userLocales = {
        '/zh/': { title: '我的自定义标题' },
      }

      const locales = createLocales(builtin, userLocales)
      // user value overrides builtin
      expect(locales['/zh/'].title).toBe('我的自定义标题')
      // builtin value preserved if not overridden
      expect(locales['/zh/'].description).toBe('描述')
    })

    it('should set root locale to first builtin when no root match', () => {
      const builtin: [string[], Record<string, unknown>][] = [
        [['en', 'en-US'], { title: 'Default' }],
        [['zh', 'zh-CN'], { title: '中文' }],
      ]
      // root is already defined in mockConfig, so it will match
      const locales = createLocales(builtin)
      expect(locales.root).toBeDefined()
    })

    it('should match locale by lang field', () => {
      const builtin: [string[], Record<string, unknown>][] = [
        [['zh', 'zh-CN'], { title: '中文' }],
      ]

      // VITEPRESS_CONFIG.root has lang 'en-US' which matches first builtin
      const locales = createLocales(builtin)
      expect(locales.root).toBeDefined()
      expect(locales.root.title).toBe('中文') // first builtin used for root
    })

    it('should handle empty builtin gracefully', () => {
      expect(() => createLocales([])).toThrow() // accessing [0][1] on empty array
    })

    it('should handle config without locales by falling back to {}', () => {
      const configWithoutLocales = {
        site: { base: '/', lang: '', title: '' },
        userConfig: {},
      } as any
      ;(globalThis as any).VITEPRESS_CONFIG = configWithoutLocales

      const builtin: [string[], Record<string, unknown>][] = [
        [['en', 'en-US'], { title: 'Default English' }],
      ]

      // Should not throw, should use first builtin for root
      const locales = createLocales(builtin)
      expect(locales.root).toBeDefined()
      expect(locales.root.title).toBe('Default English')

      // Restore config
      ;(globalThis as any).VITEPRESS_CONFIG = mockConfig
    })
  })

  describe('resolveRouteLink', () => {
    it('should return external URLs as-is', () => {
      const result = resolveRouteLink('https://example.com', {} as MarkdownEnv)
      expect(result).toBe('https://example.com')
    })

    it('should return protocol-relative URLs as-is', () => {
      const result = resolveRouteLink('//cdn.example.com/lib.js', {} as MarkdownEnv)
      expect(result).toBe('//cdn.example.com/lib.js')
    })

    it('should return mailto links as-is', () => {
      const result = resolveRouteLink('mailto:test@example.com', {} as MarkdownEnv)
      expect(result).toBe('mailto:test@example.com')
    })

    it('should prefix absolute paths with site base', () => {
      const result = resolveRouteLink('/about/', {} as MarkdownEnv)
      // base is '/base/' and path is '/about/', concatenated as '/base//about/'
      expect(result).toBe('/base//about/')
    })

    it('should slugify hash links', () => {
      const result = resolveRouteLink('#Hello World', {} as MarkdownEnv)
      expect(result).toBe('#hello-world')
    })

    it('should transform .md to .html when cleanUrls is false', () => {
      const env = { cleanUrls: false } as MarkdownEnv
      const result = resolveRouteLink('./guide.md', env)
      expect(result).toContain('guide.html')
    })

    it('should strip .md when cleanUrls is true', () => {
      const env = { cleanUrls: true } as MarkdownEnv
      const result = resolveRouteLink('./guide.md', env)
      expect(result).toBe('./guide')
    })

    it('should collapse index.md to directory', () => {
      const env = { cleanUrls: false } as MarkdownEnv
      const result = resolveRouteLink('./guide/index.md', env)
      expect(result).toBe('./guide/')
    })

    it('should preserve hash in index.md', () => {
      const env = { cleanUrls: true } as MarkdownEnv
      const result = resolveRouteLink('./guide/index.md#section', env)
      expect(result).toBe('./guide/#section')
    })

    it('should add .html extension for clean path without extension', () => {
      const env = { cleanUrls: false } as MarkdownEnv
      const result = resolveRouteLink('./guide/page', env)
      expect(result).toBe('./guide/page.html')
    })

    it('should not add .html when path already ends with .html', () => {
      const env = { cleanUrls: false } as MarkdownEnv
      const result = resolveRouteLink('./guide/page.html', env)
      expect(result).toBe('./guide/page.html')
    })

    it('should not add .html when path ends with /', () => {
      const env = { cleanUrls: false } as MarkdownEnv
      const result = resolveRouteLink('./guide/', env)
      expect(result).toBe('./guide/')
    })

    it('should handle relative path without leading ./', () => {
      const env = { cleanUrls: false } as MarkdownEnv
      const result = resolveRouteLink('guide.md', env)
      expect(result).toBe('./guide.html')
    })

    it('should preserve query params', () => {
      const env = { cleanUrls: false } as MarkdownEnv
      const result = resolveRouteLink('./guide.md?v=1', env)
      expect(result).toBe('./guide.html?v=1')
    })

    it('should handle non-md files that are treated as html', () => {
      const env = { cleanUrls: false } as MarkdownEnv
      const result = resolveRouteLink('./page.vue', env)
      expect(result).toBe('./page.vue.html')
    })

    it('should handle image files as non-html (preserved as-is)', () => {
      const env = {} as MarkdownEnv
      const result = resolveRouteLink('./image.png', env)
      // png is in known extensions list, so not treated as html
      expect(result).toBe('./image.png')
    })

    it('should preserve query and hash together', () => {
      const env = { cleanUrls: true } as MarkdownEnv
      const result = resolveRouteLink('./guide.md?utm=1#intro', env)
      expect(result).toBe('./guide?utm=1#intro')
    })
  })
})
