import path from 'node:path'
import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest'
import { loadFiles, logger, parseConfig, resolveStackBlitzDir, transformConfig } from '../src/node/utils'

const FIXTURES_DIR = path.resolve(__dirname, 'fixtures')

beforeAll(() => {
  ;(globalThis as Record<string, unknown>).VITEPRESS_CONFIG = {
    srcDir: FIXTURES_DIR,
    root: FIXTURES_DIR,
  }
})

afterAll(() => {
  delete (globalThis as Record<string, unknown>).VITEPRESS_CONFIG
})

describe('parseConfig', () => {
  let errorSpy: ReturnType<typeof vi.spyOn>

  beforeEach(() => {
    errorSpy = vi.spyOn(logger, 'error').mockImplementation(() => {})
  })

  afterEach(() => {
    errorSpy.mockRestore()
  })

  it('parses valid JSON config', () => {
    const result = parseConfig('json', '{"title":"Test","description":"Desc","template":"html"}')
    expect(result).toEqual({ title: 'Test', description: 'Desc', template: 'html' })
  })

  it('logs error on invalid JSON', () => {
    const result = parseConfig('json', '{invalid}')
    expect(result).toEqual({})
    expect(errorSpy).toHaveBeenCalled()
  })

  it('removes $schema from JSON config', () => {
    const result = parseConfig('json', '{"title":"Test","description":"Desc","template":"html","$schema":"http://example.com"}')
    expect(result).not.toHaveProperty('$schema')
    expect(result).toHaveProperty('title', 'Test')
  })

  it('returns empty object for falsy JSON config value', () => {
    const result = parseConfig('json', '0')
    expect(result).toEqual({})
  })

  it('parses valid YAML config', () => {
    const config = `title: YAML Test
description: A yaml project
template: vue`
    const result = parseConfig('yaml', config)
    expect(result).toEqual({ title: 'YAML Test', description: 'A yaml project', template: 'vue' })
  })

  it('parses YML format (same as YAML)', () => {
    const config = `title: YML Test
description: A yml project
template: javascript`
    const result = parseConfig('yml', config)
    expect(result).toEqual({ title: 'YML Test', description: 'A yml project', template: 'javascript' })
  })

  it('logs error on invalid YAML', () => {
    const result = parseConfig('yaml', ': invalid: yaml: :')
    expect(result).toEqual({})
    expect(errorSpy).toHaveBeenCalled()
  })

  it('logs error for unknown format', () => {
    const result = parseConfig('xml', '<config></config>')
    expect(result).toEqual({})
    expect(errorSpy).toHaveBeenCalledWith('Unknown config format: xml')
  })

  it('returns empty object for empty YAML content', () => {
    const result = parseConfig('yaml', '')
    expect(result).toEqual({})
  })
})

describe('transformConfig', () => {
  it('transforms config to URL-encoded JSON', () => {
    const result = transformConfig({ theme: 'dark', height: 400 })
    expect(result).toBe(encodeURIComponent(JSON.stringify({ theme: 'dark', height: 400 })))
  })

  it('removes undefined values', () => {
    const result = transformConfig({ theme: 'dark', height: undefined as any, width: 800 })
    expect(result).toBe(encodeURIComponent(JSON.stringify({ theme: 'dark', width: 800 })))
  })

  it('handles empty objects', () => {
    const result = transformConfig({})
    expect(result).toBe(encodeURIComponent('{}'))
  })

  it('handles nested objects', () => {
    const result = transformConfig({ settings: { trigger: 'save' } })
    expect(result).toBe(encodeURIComponent(JSON.stringify({ settings: { trigger: 'save' } })))
  })
})

describe('resolveStackBlitzDir', () => {
  it('resolves @ prefix relative to srcDir', () => {
    const result = resolveStackBlitzDir('@/test-project', { path: path.join(FIXTURES_DIR, 'page.md') } as any)
    expect(result).toBe(path.join(FIXTURES_DIR, 'test-project'))
  })

  it('resolves / prefix relative to project root', () => {
    const result = resolveStackBlitzDir('/test-project', { path: path.join(FIXTURES_DIR, 'page.md') } as any)
    expect(result).toBe(path.join(FIXTURES_DIR, 'test-project'))
  })

  it('resolves relative path to current markdown file directory', () => {
    const result = resolveStackBlitzDir('./test-project', { path: path.join(FIXTURES_DIR, 'page.md') } as any)
    expect(result).toBe(path.join(FIXTURES_DIR, 'test-project'))
  })

  it('resolves just @ as srcDir itself', () => {
    const result = resolveStackBlitzDir('@', { path: path.join(FIXTURES_DIR, 'page.md') } as any)
    expect(result).toBe(FIXTURES_DIR)
  })

  it('resolves / as project root', () => {
    const result = resolveStackBlitzDir('/', { path: path.join(FIXTURES_DIR, 'page.md') } as any)
    expect(result).toBe(FIXTURES_DIR)
  })
})

describe('loadFiles', () => {
  it('loads all files from directory', () => {
    const files = loadFiles(path.join(FIXTURES_DIR, 'test-project'))
    expect(files).toHaveProperty('index.html')
    expect(files).toHaveProperty('style.css')
    expect(files).toHaveProperty('stackblitz.config.json')
    expect(files).toHaveProperty('src/app.ts')
  })

  it('returns correct file contents', () => {
    const files = loadFiles(path.join(FIXTURES_DIR, 'test-project'))
    expect(files['style.css']).toContain('color: red')
    expect(files['src/app.ts']).toContain('export function hello()')
  })

  it('ignores node_modules', () => {
    const files = loadFiles(path.join(FIXTURES_DIR, 'load-test'))
    expect(files).toHaveProperty('src/index.ts')
    expect(files).not.toHaveProperty('node_modules/some-pkg/index.js')
  })

  it('ignores .DS_Store', () => {
    const files = loadFiles(path.join(FIXTURES_DIR, 'load-test'))
    expect(files).not.toHaveProperty('.DS_Store')
  })

  it('includes dotfiles', () => {
    const files = loadFiles(path.join(FIXTURES_DIR, 'empty-project'))
    expect(files).toHaveProperty('.gitkeep')
  })

  it('returns empty object for empty directory (after ignoring only .gitkeep)', () => {
    const files = loadFiles(path.join(FIXTURES_DIR, 'empty-project'))
    // .gitkeep exists but is empty
    expect(files['.gitkeep']).toBe('')
  })
})

describe('logger', () => {
  it('is an object with error method', () => {
    expect(typeof logger.error).toBe('function')
  })
})
