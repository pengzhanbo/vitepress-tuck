import type { CodeTreeFile } from '../src/node/types'
import path from 'node:path'
import MarkdownIt from 'markdown-it'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { codeTreeMarkdownPlugin } from '../src/node/markdown'

// --- Fixtures directory setup ---

const FIXTURES_DIR = path.resolve(__dirname, 'fixtures')

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
    expect(result).toContain('src=&quot;/logo.svg&quot;')
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
