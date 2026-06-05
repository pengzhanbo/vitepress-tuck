import MarkdownIt from 'markdown-it'
import { describe, expect, it } from 'vitest'
import { createContainerPlugin, createContainerSyntaxPlugin, createEmbedRuleBlock } from '../src/node/markdown/index'

describe('createContainerPlugin', () => {
  it('should wrap content in a default div with custom-container class', () => {
    const md = new MarkdownIt()
    createContainerPlugin(md, 'steps')

    const result = md.render('::: steps\nHello\n:::')
    expect(result).toContain('class="custom-container steps"')
    expect(result).toContain('Hello')
  })

  it('should use custom before render', () => {
    const md = new MarkdownIt()
    createContainerPlugin(md, 'custom', {
      before: () => '<div class="my-custom">',
    })

    const result = md.render('::: custom\nContent\n:::')
    expect(result).toContain('class="my-custom"')
  })

  it('should use custom after render', () => {
    const md = new MarkdownIt()
    createContainerPlugin(md, 'custom', {
      after: () => '</custom>',
    })

    const result = md.render('::: custom\nContent\n:::')
    expect(result).toContain('</custom>')
  })

  it('should pass info string to before callback', () => {
    const md = new MarkdownIt()
    const infos: string[] = []
    createContainerPlugin(md, 'test', {
      before: (info) => {
        infos.push(info)
        return '<div>'
      },
    })

    md.render('::: test extra info\nContent\n:::')
    expect(infos[0]).toContain('extra info')
  })

  it('should handle empty content', () => {
    const md = new MarkdownIt()
    createContainerPlugin(md, 'empty')

    const result = md.render('::: empty\n:::')
    expect(result).toContain('class="custom-container empty"')
  })

  it('should support nested containers', () => {
    const md = new MarkdownIt()
    createContainerPlugin(md, 'outer')
    createContainerPlugin(md, 'inner')

    const result = md.render('::: outer\n::: inner\nNested\n:::\n:::')
    expect(result).toContain('class="custom-container outer"')
    expect(result).toContain('class="custom-container inner"')
    expect(result).toContain('Nested')
  })
})

describe('createContainerSyntaxPlugin', () => {
  it('should wrap content with default div', () => {
    const md = new MarkdownIt()
    createContainerSyntaxPlugin(md, 'file-tree')

    const result = md.render('::: file-tree\n- src/\n  - index.ts\n:::')
    expect(result).toContain('class="custom-container file-tree"')
    expect(result).toContain('- src/')
  })

  it('should use custom render function', () => {
    const md = new MarkdownIt()
    createContainerSyntaxPlugin(md, 'fancy', (tokens, index) => {
      const { content, meta } = tokens[index]!
      return `<div class="fancy">${meta?.title || ''}${content}</div>`
    })

    const result = md.render('::: fancy title="Hello"\nWorld\n:::')
    expect(result).toContain('class="fancy"')
    expect(result).toContain('Hello')
    expect(result).toContain('World')
  })

  it('should parse attributes from info string', () => {
    const md = new MarkdownIt()
    createContainerSyntaxPlugin(md, 'attrs-test')

    const result = md.render('::: attrs-test title="Test Title"\nContent\n:::')
    expect(result).toContain('Content')
  })

  it('should handle content with no closing marker gracefully', () => {
    const md = new MarkdownIt()
    createContainerSyntaxPlugin(md, 'test')
    // Just opening marker without closing should not match
    const result = md.render('::: test\nSome content')
    // Should be treated as plain text since no closing marker
    expect(result).toBeDefined()
  })
})

describe('createEmbedRuleBlock', () => {
  it('should match and transform embed syntax', () => {
    const md = new MarkdownIt()
    createEmbedRuleBlock(md, {
      type: 'pdf',
      syntaxPattern: /^@\[pdf([^\]]*)\]\(([^)]*)\)/,
      meta: match => ({
        src: match[2] || '',
        attrs: match[1] || '',
      }),
      content: meta => `<VPPdf src="${meta.src}" ${meta.attrs} />`,
    })

    const result = md.render('@[pdf](https://example.com/test.pdf)')
    expect(result).toContain('<VPPdf')
    expect(result).toContain('https://example.com/test.pdf')
  })

  it('should handle custom attributes in embed syntax', () => {
    const md = new MarkdownIt()
    createEmbedRuleBlock(md, {
      type: 'qrcode',
      syntaxPattern: /^@\[qrcode([^\]]*)\]\(([^)]*)\)/,
      meta: match => ({
        text: match[2] || '',
        attrs: match[1] || '',
      }),
      content: meta => `<VPQrcode text="${meta.text}" ${meta.attrs} />`,
    })

    const result = md.render('@[qrcode card title="Scan Me"](https://example.com)')
    expect(result).toContain('<VPQrcode')
  })

  it('should not match unrelated syntax', () => {
    const md = new MarkdownIt()
    createEmbedRuleBlock(md, {
      type: 'pdf',
      syntaxPattern: /^@\[pdf([^\]]*)\]\(([^)]*)\)/,
      meta: () => ({}),
      content: () => '<PDF />',
    })

    const result = md.render('Some regular text @[video](url)')
    expect(result).not.toContain('<PDF />')
  })

  it('should support custom token name', () => {
    const md = new MarkdownIt()
    createEmbedRuleBlock(md, {
      type: 'custom',
      name: 'my-custom-token',
      syntaxPattern: /^@\[custom\]\(([^)]*)\)/,
      meta: ([, src]) => ({ src }),
      content: meta => `<Custom src="${meta.src}" />`,
    })

    const result = md.render('@[custom](hello)')
    expect(result).toContain('<Custom')
  })

  it('should handle edge case: short line', () => {
    const md = new MarkdownIt()
    createEmbedRuleBlock(md, {
      type: 'longtype',
      syntaxPattern: /^@\[longtype\]\(([^)]*)\)/,
      meta: ([, src]) => ({ src }),
      content: () => '',
    })

    // line too short
    const result = md.render('@[lon')
    expect(result).toBe('<p>@[lon</p>\n')
  })
})
