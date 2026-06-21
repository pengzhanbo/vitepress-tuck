import type { CodeTreeFile } from '../src/node/types'
import path from 'node:path'
import MarkdownIt from 'markdown-it'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { initLoaders, loadCodeContent } from '../src/node/loader'
import { codeTreeMarkdownPlugin } from '../src/node/markdown'

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

// --- Container syntax tests ---

describe('codeTreeMarkdownPlugin - container syntax', () => {
  it('should render code tree container with single file', () => {
    const md = new MarkdownIt()
    md.use(codeTreeMarkdownPlugin)

    const result = md.render('::: code-tree\n\n```ts [index.ts]\nconst a = 1\n```\n\n:::')
    expect(result).toContain('<VPCodeTree')
    expect(result).toContain('</VPCodeTree>')
    expect(result).toContain('<VPFileTreeNode')
    expect(result).toContain('filename="index.ts"')
    expect(result).toContain('filepath="index.ts"')
    expect(result).toContain('const a = 1')
  })

  it('should render code tree container with multiple files', () => {
    const md = new MarkdownIt()
    md.use(codeTreeMarkdownPlugin)

    const result = md.render([
      '::: code-tree',
      '',
      '```ts [index.ts]',
      'const a = 1',
      '```',
      '',
      '```rs [main.rs]',
      'fn main() {}',
      '```',
      '',
      ':::',
    ].join('\n'))
    expect(result).toContain('filename="index.ts"')
    expect(result).toContain('filename="main.rs"')
    expect(result).toContain('const a = 1')
    expect(result).toContain('fn main() {}')
  })

  it('should set entry-file to first file by default', () => {
    const md = new MarkdownIt()
    md.use(codeTreeMarkdownPlugin)

    const result = md.render([
      '::: code-tree',
      '',
      '```ts [index.ts]',
      'const a = 1',
      '```',
      '',
      '```ts [utils.ts]',
      'export const noop = () => {}',
      '```',
      '',
      ':::',
    ].join('\n'))
    expect(result).toContain('entry-file="index.ts"')
  })

  it('should set entry-file from entry attribute', () => {
    const md = new MarkdownIt()
    md.use(codeTreeMarkdownPlugin)

    const result = md.render([
      '::: code-tree entry="utils.ts"',
      '',
      '```ts [index.ts]',
      'const a = 1',
      '```',
      '',
      '```ts [utils.ts]',
      'export const noop = () => {}',
      '```',
      '',
      ':::',
    ].join('\n'))
    expect(result).toContain('entry-file="utils.ts"')
  })

  it('should set entry-file from :active marker', () => {
    const md = new MarkdownIt()
    md.use(codeTreeMarkdownPlugin)

    const result = md.render([
      '::: code-tree',
      '',
      '```ts [index.ts]',
      'const a = 1',
      '```',
      '',
      '```ts [utils.ts] :active',
      'export const noop = () => {}',
      '```',
      '',
      ':::',
    ].join('\n'))
    expect(result).toContain('entry-file="utils.ts"')
  })

  it('should prioritize :active marker over entry attribute', () => {
    const md = new MarkdownIt()
    md.use(codeTreeMarkdownPlugin)

    const result = md.render([
      '::: code-tree entry="index.ts"',
      '',
      '```ts [index.ts]',
      'const a = 1',
      '```',
      '',
      '```ts [utils.ts] :active',
      'export const noop = () => {}',
      '```',
      '',
      ':::',
    ].join('\n'))
    expect(result).toContain('entry-file="utils.ts"')
  })

  it('should render title attribute', () => {
    const md = new MarkdownIt()
    md.use(codeTreeMarkdownPlugin)

    const result = md.render('::: code-tree title="My Project"\n\n```ts [index.ts]\nconst a = 1\n```\n\n:::')
    expect(result).toContain('title="My Project"')
  })

  it('should render height attribute', () => {
    const md = new MarkdownIt()
    md.use(codeTreeMarkdownPlugin)

    const result = md.render('::: code-tree height="500px"\n\n```ts [index.ts]\nconst a = 1\n```\n\n:::')
    expect(result).toContain('height="500px"')
  })

  it('should add px unit to numeric height', () => {
    const md = new MarkdownIt()
    md.use(codeTreeMarkdownPlugin)

    const result = md.render('::: code-tree height="300"\n\n```ts [index.ts]\nconst a = 1\n```\n\n:::')
    expect(result).toContain('height="300px"')
  })

  it('should use default height from options', () => {
    const md = new MarkdownIt()
    md.use(codeTreeMarkdownPlugin, { height: '600px' })

    const result = md.render('::: code-tree\n\n```ts [index.ts]\nconst a = 1\n```\n\n:::')
    expect(result).toContain('height="600px"')
  })

  it('should render show-sidebar attribute when true', () => {
    const md = new MarkdownIt()
    md.use(codeTreeMarkdownPlugin)

    const result = md.render('::: code-tree show-sidebar=true\n\n```ts [index.ts]\nconst a = 1\n```\n\n:::')
    expect(result).toContain('show-sidebar')
  })

  it('should render show-sidebar when bare attribute', () => {
    const md = new MarkdownIt()
    md.use(codeTreeMarkdownPlugin)

    const result = md.render('::: code-tree show-sidebar\n\n```ts [index.ts]\nconst a = 1\n```\n\n:::')
    expect(result).toContain('show-sidebar')
  })

  it('should not render show-sidebar when false', () => {
    const md = new MarkdownIt()
    md.use(codeTreeMarkdownPlugin)

    const result = md.render('::: code-tree show-sidebar=false\n\n```ts [index.ts]\nconst a = 1\n```\n\n:::')
    expect(result).not.toContain('show-sidebar')
  })

  it('should render nested file paths as folder structure', () => {
    const md = new MarkdownIt()
    md.use(codeTreeMarkdownPlugin)

    const result = md.render([
      '::: code-tree',
      '',
      '```ts [src/index.ts]',
      'const a = 1',
      '```',
      '',
      '```ts [src/utils.ts]',
      'export const noop = () => {}',
      '```',
      '',
      ':::',
    ].join('\n'))
    // src folder node
    expect(result).toContain('filename="src"')
    expect(result).toContain('type="folder"')
    // files inside src
    expect(result).toContain('filepath="src/index.ts"')
    expect(result).toContain('filepath="src/utils.ts"')
  })

  it('should render deeply nested file paths', () => {
    const md = new MarkdownIt()
    md.use(codeTreeMarkdownPlugin)

    const result = md.render([
      '::: code-tree',
      '',
      '```ts [src/components/Button.ts]',
      'export const Button = {}',
      '```',
      '',
      ':::',
    ].join('\n'))
    expect(result).toContain('filename="src"')
    expect(result).toContain('filename="components"')
    expect(result).toContain('filename="Button.ts"')
    expect(result).toContain('filepath="src/components/Button.ts"')
  })

  it('should render empty container', () => {
    const md = new MarkdownIt()
    md.use(codeTreeMarkdownPlugin)

    const result = md.render('::: code-tree\n:::')
    expect(result).toContain('<VPCodeTree')
    expect(result).toContain('</VPCodeTree>')
  })

  it('should not affect fences outside code-tree container', () => {
    const md = new MarkdownIt()
    md.use(codeTreeMarkdownPlugin)

    const result = md.render('```ts\nconst a = 1\n```')
    expect(result).toContain('const a = 1')
    expect(result).not.toContain('data-filepath')
    expect(result).not.toContain('<VPCodeTree')
  })

  it('should not inject data-filepath on fences without [filename]', () => {
    const md = new MarkdownIt()
    md.use(codeTreeMarkdownPlugin)

    const result = md.render('::: code-tree\n\n```ts\nconst a = 1\n```\n\n:::')
    // Fence without [filename] should render normally, no data-filepath
    expect(result).toContain('const a = 1')
    expect(result).not.toContain('data-filepath')
  })

  it('should inject data-filepath on fences with [filename] when fence renderer produces div', () => {
    const md = new MarkdownIt()
    // Override fence renderer to produce <div> (like VitePress does)
    md.renderer.rules.fence = (tokens, idx) => {
      const token = tokens[idx]!
      const lang = token.info.split(/\s+/)[0] || ''
      return `<div class="language-${lang}"><pre><code>${md.utils.escapeHtml(token.content)}</code></pre></div>`
    }
    md.use(codeTreeMarkdownPlugin)

    const result = md.render('::: code-tree\n\n```ts [index.ts]\nconst a = 1\n```\n\n:::')
    expect(result).toContain('data-filepath="index.ts"')
  })

  it('should handle multiple code-tree containers in same markdown', () => {
    const md = new MarkdownIt()
    md.use(codeTreeMarkdownPlugin)

    const result = md.render([
      '::: code-tree',
      '',
      '```ts [a.ts]',
      'const a = 1',
      '```',
      '',
      ':::',
      '',
      '::: code-tree',
      '',
      '```ts [b.ts]',
      'const b = 2',
      '```',
      '',
      ':::',
    ].join('\n'))
    expect(result).toContain('filename="a.ts"')
    expect(result).toContain('filename="b.ts"')
    expect(result).toContain('const a = 1')
    expect(result).toContain('const b = 2')
  })

  it('should combine multiple attributes', () => {
    const md = new MarkdownIt()
    md.use(codeTreeMarkdownPlugin)

    const result = md.render([
      '::: code-tree title="Project" height="500px" entry="main.ts" show-sidebar',
      '',
      '```ts [main.ts]',
      'const a = 1',
      '```',
      '',
      ':::',
    ].join('\n'))
    expect(result).toContain('title="Project"')
    expect(result).toContain('height="500px"')
    expect(result).toContain('entry-file="main.ts"')
    expect(result).toContain('show-sidebar')
  })
})

// --- Embed syntax tests ---

describe('codeTreeMarkdownPlugin - embed syntax', () => {
  it('should embed directory as code tree', () => {
    const md = new MarkdownIt()
    md.use(codeTreeMarkdownPlugin)

    const env = { path: path.join(FIXTURES_DIR, 'index.md') }
    const result = md.render('@[code-tree](./src)', env)
    expect(result).toContain('<VPCodeTree')
    expect(result).toContain('</VPCodeTree>')
    expect(result).toContain('<VPFileTreeNode')
    expect(result).toContain('filename="index.ts"')
    expect(result).toContain('filename="utils.ts"')
    expect(result).toContain('filename="components"')
    expect(result).toContain('const a = 1')
    expect(result).toContain('export const noop')
  })

  it('should show error for invalid directory', () => {
    const md = new MarkdownIt()
    md.use(codeTreeMarkdownPlugin)

    const env = { path: path.join(FIXTURES_DIR, 'index.md') }
    const result = md.render('@[code-tree](./nonexistent)', env)
    expect(result).toContain('Invalid target directory')
  })

  it('should set entry-file to first file by default', () => {
    const md = new MarkdownIt()
    md.use(codeTreeMarkdownPlugin)

    const env = { path: path.join(FIXTURES_DIR, 'index.md') }
    const result = md.render('@[code-tree](./src)', env)
    expect(result).toContain('entry-file=')
  })

  it('should render embed attributes', () => {
    const md = new MarkdownIt()
    md.use(codeTreeMarkdownPlugin)

    const env = { path: path.join(FIXTURES_DIR, 'index.md') }
    const result = md.render('@[code-tree title="Source" height="500px" show-sidebar=true](./src)', env)
    expect(result).toContain('title="Source"')
    expect(result).toContain('height="500px"')
    expect(result).toContain('show-sidebar')
  })

  it('should set entry from embed attribute', () => {
    const md = new MarkdownIt()
    md.use(codeTreeMarkdownPlugin)

    const env = { path: path.join(FIXTURES_DIR, 'index.md') }
    const result = md.render('@[code-tree entry="utils.ts"](./src)', env)
    expect(result).toContain('entry-file="utils.ts"')
  })

  it('should respect ignores option', () => {
    const md = new MarkdownIt()
    md.use(codeTreeMarkdownPlugin, { ignores: ['**/*.ts'] })

    const env = { path: path.join(FIXTURES_DIR, 'index.md') }
    const result = md.render('@[code-tree](./src)', env)
    // .ts files should be ignored, only .vue file remains
    expect(result).not.toContain('filename="index.ts"')
    expect(result).not.toContain('filename="utils.ts"')
    expect(result).toContain('filename="components"')
  })

  it('should use custom loaders taking precedence over built-in', () => {
    const md = new MarkdownIt()
    md.use(codeTreeMarkdownPlugin, {
      loaders: [
        {
          filter: '**/*.ts',
          load: (file: CodeTreeFile) => `custom-loader: ${file.path}`,
        },
      ],
    })

    const env = { path: path.join(FIXTURES_DIR, 'index.md') }
    const result = md.render('@[code-tree](./src)', env)
    expect(result).toContain('custom-loader: index.ts')
    expect(result).toContain('custom-loader: utils.ts')
  })

  it('should track included files in env', () => {
    const md = new MarkdownIt()
    md.use(codeTreeMarkdownPlugin)

    const env: Record<string, unknown> = { path: path.join(FIXTURES_DIR, 'index.md') }
    md.render('@[code-tree](./src)', env)
    expect(Array.isArray(env.includes)).toBe(true)
    expect((env.includes as string[]).length).toBeGreaterThan(0)
    expect((env.includes as string[]).some(p => p.endsWith('index.ts'))).toBe(true)
  })

  it('should resolve @ prefix relative to srcDir', () => {
    const md = new MarkdownIt()
    md.use(codeTreeMarkdownPlugin)

    const env = { path: path.join(FIXTURES_DIR, 'index.md') }
    const result = md.render('@[code-tree](@/src)', env)
    expect(result).toContain('<VPCodeTree')
    expect(result).toContain('filename="index.ts"')
  })

  it('should resolve / prefix relative to project root', () => {
    const md = new MarkdownIt()
    md.use(codeTreeMarkdownPlugin)

    const env = { path: path.join(FIXTURES_DIR, 'index.md') }
    const result = md.render('@[code-tree](/src)', env)
    expect(result).toContain('<VPCodeTree')
    expect(result).toContain('filename="index.ts"')
  })

  it('should not match unrelated embed syntax', () => {
    const md = new MarkdownIt()
    md.use(codeTreeMarkdownPlugin)

    const result = md.render('@[pdf](https://example.com)')
    expect(result).not.toContain('<VPCodeTree')
  })

  it('should use default height from options in embed', () => {
    const md = new MarkdownIt()
    md.use(codeTreeMarkdownPlugin, { height: '600px' })

    const env = { path: path.join(FIXTURES_DIR, 'index.md') }
    const result = md.render('@[code-tree](./src)', env)
    expect(result).toContain('height="600px"')
  })
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
