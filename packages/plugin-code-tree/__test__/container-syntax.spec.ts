import path from 'node:path'
import MarkdownIt from 'markdown-it'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { codeTreeMarkdownPlugin } from '../src/node/markdown'
import { codeTree } from '../src/node/plugin'

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
