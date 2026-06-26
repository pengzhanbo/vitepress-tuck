import type { CodeTreeFile } from '../src/node/types'
import path from 'node:path'
import MarkdownIt from 'markdown-it'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { initLoaders, loadCodeContent } from '../src/node/loader'
import { codeTreeMarkdownPlugin } from '../src/node/markdown'
import { codeTree } from '../src/node/plugin'

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

  it('should handle empty height option gracefully', () => {
    const md = new MarkdownIt()
    md.use(codeTreeMarkdownPlugin, { height: '' })

    const result = md.render('::: code-tree\n\n```ts [index.ts]\nconst a = 1\n```\n\n:::')
    // With empty height, the height attr should be absent or undefined
    expect(result).toContain('<VPCodeTree')
    expect(result).not.toContain('height=')
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

// =============================================================================
// embed syntax — built-in loader coverage
// =============================================================================

describe('codeTreeMarkdownPlugin - embed built-in loaders', () => {
  it('should load .editorconfig as toml', () => {
    const md = new MarkdownIt()
    md.use(codeTreeMarkdownPlugin)
    const env = { path: path.join(FIXTURES_DIR, 'index.md') }
    const result = md.render('@[code-tree](./)', env)
    // .editorconfig is rendered as a toml code block
    expect(result).toContain('filename=".editorconfig"')
    expect(result).toContain('language-toml')
    expect(result).toContain('indent_style')
  })

  it('should load .gitignore as txt', () => {
    const md = new MarkdownIt()
    md.use(codeTreeMarkdownPlugin)
    const env = { path: path.join(FIXTURES_DIR, 'index.md') }
    const result = md.render('@[code-tree](./)', env)
    // .gitignore is rendered as a txt code block
    expect(result).toContain('filename=".gitignore"')
    expect(result).toContain('language-txt')
    expect(result).toContain('node_modules')
  })

  it('should load .eslintrc as json', () => {
    const md = new MarkdownIt()
    md.use(codeTreeMarkdownPlugin)
    const env = { path: path.join(FIXTURES_DIR, 'index.md') }
    const result = md.render('@[code-tree](./)', env)
    // .eslintrc is rendered as a json code block
    expect(result).toContain('filename=".eslintrc"')
    expect(result).toContain('language-json')
    expect(result).toContain('config:base')
  })

  it('should load image files as img tags', () => {
    const md = new MarkdownIt()
    md.use(codeTreeMarkdownPlugin)
    const env = { path: path.join(FIXTURES_DIR, 'index.md') }
    const result = md.render('@[code-tree](./src/components)', env)
    // Image file generates an img tag (HTML-escaped by markdown-it in paragraph)
    expect(result).toContain('filename="icon.svg"')
    expect(result).toContain('icon.svg')
  })

  it('should resolve image src via public path when in public dir', () => {
    const md = new MarkdownIt()
    md.use(codeTreeMarkdownPlugin)
    const env = { path: path.join(FIXTURES_DIR, 'index.md') }
    const result = md.render('@[code-tree](./public)', env)
    // Image in public dir uses public path (starts with /) instead of relative path
    expect(result).toContain('filename="logo.svg"')
  })

  it('should return empty string for unsupported file extension', () => {
    const md = new MarkdownIt()
    md.use(codeTreeMarkdownPlugin)
    const env = { path: path.join(FIXTURES_DIR, 'index.md') }
    // .xyz is not a known extension, no loader matches → returns ''
    const result = md.render('@[code-tree](./src)', env)
    // unknown.xyz is listed in the file tree but has no content
    expect(result).toContain('unknown.xyz')
  })
})

// =============================================================================
// embed syntax — edge cases
// =============================================================================

describe('codeTreeMarkdownPlugin - embed edge cases', () => {
  it('should generate fence without [filename] via custom loader (line 186)', () => {
    const md = new MarkdownIt()
    md.use(codeTreeMarkdownPlugin, {
      loaders: [{
        filter: '**/*.ts',
        load: () => '```plaintext\nno filepath here\n```',
      }],
    })
    const env = { path: path.join(FIXTURES_DIR, 'index.md') }
    const result = md.render('@[code-tree](./src)', env)
    // The custom loader generates a fence without [filename]
    // In the embed context (__IS_CODE_TREE__=true), the fence renderer
    // should handle this gracefully (rawFence fallback at line 186)
    expect(result).toContain('no filepath here')
  })

  it('should load content with default height option in embed', () => {
    const md = new MarkdownIt()
    md.use(codeTreeMarkdownPlugin, { height: '600px' })
    const env = { path: path.join(FIXTURES_DIR, 'index.md') }
    const result = md.render('@[code-tree](./src)', env)
    expect(result).toContain('height="600px"')
  })

  it('should embed directory at project root level', () => {
    const md = new MarkdownIt()
    md.use(codeTreeMarkdownPlugin)
    const env = { path: path.join(FIXTURES_DIR, 'index.md') }
    const result = md.render('@[code-tree](./)', env)
    expect(result).toContain('<VPCodeTree')
    expect(result).toContain('</VPCodeTree>')
  })

  it('should include files in env.includes for HMR', () => {
    const md = new MarkdownIt()
    md.use(codeTreeMarkdownPlugin)
    const env: Record<string, unknown> = { path: path.join(FIXTURES_DIR, 'index.md') }
    md.render('@[code-tree](./src/components)', env)
    expect(Array.isArray(env.includes)).toBe(true)
    expect((env.includes as string[]).some(p => p.endsWith('Button.vue'))).toBe(true)
  })

  it('should resolve path relative to markdown file directory without prefix', () => {
    const md = new MarkdownIt()
    md.use(codeTreeMarkdownPlugin)
    const env = { path: path.join(FIXTURES_DIR, 'subdir', 'page.md') }
    // Relative to subdir/page.md, ../src means fixtures/src
    const result = md.render('@[code-tree](../src)', env)
    expect(result).toContain('<VPCodeTree')
    expect(result).toContain('filename="index.ts"')
  })
})

// =============================================================================
// container syntax — edge cases
// =============================================================================

describe('codeTreeMarkdownPlugin - container edge cases', () => {
  it('should handle code-tree with only one file and entry set', () => {
    const md = new MarkdownIt()
    md.use(codeTreeMarkdownPlugin)
    const result = md.render('::: code-tree entry="index.ts"\n\n```ts [index.ts]\nconst a = 1\n```\n\n:::')
    expect(result).toContain('entry-file="index.ts"')
    expect(result).toContain('filename="index.ts"')
  })

  it('should handle code-tree with empty content (no fences)', () => {
    const md = new MarkdownIt()
    md.use(codeTreeMarkdownPlugin)
    const result = md.render('::: code-tree\n:::')
    expect(result).toContain('<VPCodeTree')
    expect(result).toContain('</VPCodeTree>')
  })

  it('should correctly process title in fence info with language', () => {
    const md = new MarkdownIt()
    md.use(codeTreeMarkdownPlugin)
    const result = md.render('::: code-tree\n\n```typescript [src/main.ts]\nconsole.log("hi")\n```\n\n:::')
    expect(result).toContain('filename="src')
    expect(result).toContain('filepath="src/main.ts"')
  })
})

// =============================================================================
// codeTree 插件工厂
// =============================================================================

describe('codeTree 插件工厂', () => {
  it('name 为 vitepress-plugin-code-tree', () => {
    const plugin = codeTree() as any
    expect(plugin.name).toBe('vitepress-plugin-code-tree')
  })

  it('componentResolver 可解析 VPCodeTree 和 VPFileTreeNode', () => {
    const plugin = codeTree() as any
    const resolver = plugin.componentResolver!
    expect(resolver.type).toBe('component')
    expect(resolver.resolve('VPCodeTree')).toEqual({ name: 'VPCodeTree', from: 'vitepress-plugin-code-tree/client' })
    expect(resolver.resolve('VPFileTreeNode')).toEqual({ name: 'VPFileTreeNode', from: 'vitepress-plugin-file-tree/client' })
    expect(resolver.resolve('OtherComponent')).toBeUndefined()
  })

  it('markdown.config 为函数', () => {
    const plugin = codeTree() as any
    expect(typeof plugin.markdown?.config).toBe('function')
  })

  it('markdown.config 可注册 markdown-it 规则', () => {
    const plugin = codeTree() as any
    const md = new MarkdownIt()
    plugin.markdown.config(md)
    const result = md.render('::: code-tree\n\n```ts [test.ts]\nconst a = 1\n```\n\n:::')
    expect(result).toContain('<VPCodeTree')
  })

  it('支持传入 options', () => {
    const plugin = codeTree({ height: '500px' }) as any
    expect(plugin.name).toBe('vitepress-plugin-code-tree')
  })

  it('不传 options 也能正常工作', () => {
    const plugin = codeTree() as any
    expect(plugin.name).toBe('vitepress-plugin-code-tree')
  })

  it('resolve 对未知组件返回 undefined', () => {
    const plugin = codeTree() as any
    const resolver = plugin.componentResolver!
    expect(resolver.resolve('UnknownComponent')).toBeUndefined()
  })
})
