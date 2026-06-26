import type { CodeTreeFile } from '../src/node/types'
import path from 'node:path'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { initLoaders, loadCodeContent } from '../src/node/loader'

// --- Fixtures directory setup ---

const FIXTURES_DIR = path.resolve(__dirname, 'fixtures')
const SRC_DIR = path.join(FIXTURES_DIR, 'src')

beforeAll(() => {
  // Mock VITEPRESS_CONFIG for embed syntax tests
  ;(globalThis as Record<string, unknown>).VITEPRESS_CONFIG = {
    srcDir: FIXTURES_DIR,
    root: FIXTURES_DIR,
  }
})

afterAll(() => {
  delete (globalThis as Record<string, unknown>).VITEPRESS_CONFIG
})

// --- loadCodeContent tests ---

describe('loadCodeContent', () => {
  it('should generate fenced code block with file content', () => {
    const file: CodeTreeFile = {
      path: 'src/index.ts',
      absolutePath: path.join(SRC_DIR, 'index.ts'),
      relativePath: './src/index.ts',
      extname: 'ts',
      basename: 'index.ts',
    }
    const result = loadCodeContent(file)
    // Should use six backticks as fence delimiter
    expect(result).toContain('``````ts [src/index.ts]')
    expect(result).toContain('const a = 1')
    expect(result).toMatch(/`{6}$/)
  })

  it('should use file extension as language by default', () => {
    const file: CodeTreeFile = {
      path: 'README.md',
      absolutePath: path.join(FIXTURES_DIR, 'README.md'),
      relativePath: './README.md',
      extname: 'md',
      basename: 'README.md',
    }
    const result = loadCodeContent(file)
    expect(result).toContain('``````md [README.md]')
  })

  it('should use provided lang override', () => {
    const file: CodeTreeFile = {
      path: 'src/index.ts',
      absolutePath: path.join(SRC_DIR, 'index.ts'),
      relativePath: './src/index.ts',
      extname: 'ts',
      basename: 'index.ts',
    }
    const result = loadCodeContent(file, 'typescript')
    expect(result).toContain('``````typescript [src/index.ts]')
  })

  it('should trim file content', () => {
    const file: CodeTreeFile = {
      path: 'src/index.ts',
      absolutePath: path.join(SRC_DIR, 'index.ts'),
      relativePath: './src/index.ts',
      extname: 'ts',
      basename: 'index.ts',
    }
    const result = loadCodeContent(file)
    // Content should not have leading/trailing whitespace from the file
    expect(result).not.toMatch(/\n$/)
  })
})

// --- initLoaders tests ---

describe('initLoaders', () => {
  it('should merge user loaders before built-in loaders', () => {
    const customLoader = {
      filter: '**/*.custom',
      load: () => 'custom content',
    }
    const loaders = initLoaders([customLoader])
    // User loader should be first
    expect(loaders[0]!.load).toBe(customLoader.load)
    // Built-in loaders should follow
    expect(loaders.length).toBeGreaterThan(1)
  })

  it('should work with no user loaders', () => {
    const loaders = initLoaders()
    expect(loaders.length).toBeGreaterThan(0)
  })

  it('should work with empty user loaders array', () => {
    const loaders = initLoaders([])
    expect(loaders.length).toBeGreaterThan(0)
  })

  it('should normalize function filters', () => {
    const filterFn = (file: CodeTreeFile) => file.extname === 'custom'
    const loaders = initLoaders([{ filter: filterFn, load: () => 'custom' }])
    expect(loaders[0]!.filter).toBe(filterFn)
    expect(loaders[0]!.matcher).toBeUndefined()
  })

  it('should normalize string filters to matcher', () => {
    const loaders = initLoaders([{ filter: '**/*.ts', load: () => 'ts' }])
    expect(loaders[0]!.filter).toBeUndefined()
    expect(loaders[0]!.matcher).toBeDefined()
  })

  it('should normalize array filters to matcher', () => {
    const loaders = initLoaders([{ filter: ['**/*.ts', '**/*.js'], load: () => 'js' }])
    expect(loaders[0]!.filter).toBeUndefined()
    expect(loaders[0]!.matcher).toBeDefined()
  })

  it('should have built-in loaders for common file types', () => {
    const loaders = initLoaders()
    // Should have multiple built-in loaders
    expect(loaders.length).toBe(5)
    // Test that built-in loaders can match .ts files
    const tsFile: CodeTreeFile = {
      path: 'test.ts',
      absolutePath: '/test/test.ts',
      relativePath: './test.ts',
      extname: 'ts',
      basename: 'test.ts',
    }
    const matchingLoader = loaders.find(l => l.filter?.(tsFile) ?? l.matcher?.('test.ts'))
    expect(matchingLoader).toBeDefined()
  })
})
