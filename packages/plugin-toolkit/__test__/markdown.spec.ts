import MarkdownIt from 'markdown-it'
import { describe, expect, it, vi } from 'vitest'
import { cleanMarkdownEnv, createContainerPlugin, createContainerSyntaxPlugin, createEmbedRuleBlock } from '../src/node/markdown/index'

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

  it('should not match when marker length is insufficient', () => {
    const md = new MarkdownIt()
    createContainerSyntaxPlugin(md, 'test')
    // Only 2 colons instead of 3, should not match
    const result = md.render(':: test\nContent')
    expect(result).not.toContain('custom-container test')
  })

  it('should not match when info does not start with registered type', () => {
    const md = new MarkdownIt()
    createContainerSyntaxPlugin(md, 'registered')
    // wrong type after :::
    const result = md.render('::: other-type\nContent\n:::')
    expect(result).not.toContain('custom-container registered')
  })

  it('should handle multiline content with various line types', () => {
    const md = new MarkdownIt()
    createContainerSyntaxPlugin(md, 'multi')

    const result = md.render('::: multi\nLine 1\nLine 2\n  indented\n:::')
    expect(result).toContain('custom-container multi')
    expect(result).toContain('Line 1')
    expect(result).toContain('Line 2')
    expect(result).toContain('indented')
  })

  it('should coexist with regular paragraphs and other block elements', () => {
    const md = new MarkdownIt()
    createContainerSyntaxPlugin(md, 'test')

    // Regular paragraph before container
    const result = md.render('Before paragraph\n\n::: test\ninside container\n:::\n\nAfter paragraph')
    expect(result).toContain('custom-container test')
    expect(result).toContain('inside container')
    expect(result).toContain('Before')
    expect(result).toContain('After')
  })

  it('should handle container with only opening and closing markers', () => {
    const md = new MarkdownIt()
    createContainerSyntaxPlugin(md, 'empty')

    const result = md.render('::: empty\n:::')
    expect(result).toContain('custom-container empty')
  })
})

describe('createEmbedRuleBlock', () => {
  it('should match and transform embed syntax', () => {
    const md = new MarkdownIt()
    createEmbedRuleBlock(md, {
      type: 'pdf',
      meta: (info, source) => ({
        src: source || '',
        attrs: info || '',
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
      meta: (info, source) => ({
        text: source || '',
        attrs: info || '',
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
      meta: (_info, source) => ({ src: source }),
      content: meta => `<Custom src="${meta.src}" />`,
    })

    const result = md.render('@[custom](hello)')
    expect(result).toContain('<Custom')
  })

  it('should handle edge case: short line', () => {
    const md = new MarkdownIt()
    createEmbedRuleBlock(md, {
      type: 'longtype',
      meta: (_info, source) => ({ src: source }),
      content: () => '',
    })

    // line too short
    const result = md.render('@[lon')
    expect(result).toBe('<p>@[lon</p>\n')
  })

  it('should not match when syntax pattern does not match (wrong format)', () => {
    const md = new MarkdownIt()
    createEmbedRuleBlock(md, {
      type: 'pdf',
      meta: (_info, source) => ({ src: source }),
      content: () => '<PDF />',
    })

    // Line is long enough but regex won't match (type is pdf but content has extra chars in wrong place)
    const result = md.render('@[pdf-extra](url)')
    expect(result).not.toContain('<PDF />')
  })

  it('should pass meta info and source separately to meta function', () => {
    const md = new MarkdownIt()
    createEmbedRuleBlock(md, {
      type: 'video',
      meta: (info, source) => ({
        src: source,
        type: info || 'default',
      }),
      content: meta => `<VPVideo src="${meta.src}" type="${meta.type}" />`,
    })

    const result = md.render('@[video mp4](https://example.com/video.mp4)')
    expect(result).toContain('type="mp4"')
    expect(result).toContain('https://example.com/video.mp4')
  })

  it('should fallback to raw token content when neither content nor render is provided', () => {
    const md = new MarkdownIt()
    createEmbedRuleBlock(md, {
      type: 'raw',
      meta: () => ({}),
    })

    const result = md.render('@[raw](something)')
    expect(result).toContain('@[raw](something)')
  })

  it('should not match line where type prefix is part of another word', () => {
    const md = new MarkdownIt()
    createEmbedRuleBlock(md, {
      type: 'pdf',
      meta: (_info, source) => ({ src: source }),
      content: () => '<PDF />',
    })

    const result = md.render('Check out something@[pdf](url)')
    expect(result).not.toContain('<PDF />')
  })

  it('should handle empty info and source gracefully', () => {
    const md = new MarkdownIt()
    createEmbedRuleBlock(md, {
      type: 'test',
      meta: (info, source) => ({ info, source }),
      content: meta => `<Test info="${meta.info}" src="${meta.source}" />`,
    })

    const result = md.render('@[test]()')
    expect(result).toContain('<Test')
    expect(result).toContain('info=""')
    expect(result).toContain('src=""')
  })

  it('should warn and return early when type is empty', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
    const md = new MarkdownIt()
    createEmbedRuleBlock(md, {
      type: '',
      meta: () => ({}),
      content: () => '<Empty />',
    })

    expect(warnSpy).toHaveBeenCalledWith(
      expect.stringContaining('Embed rule block type is empty'),
    )

    const result = md.render('@[](url)')
    expect(result).not.toContain('<Empty />')

    warnSpy.mockRestore()
  })

  it('should warn and return early when type already exists', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
    const md = new MarkdownIt()
    createEmbedRuleBlock(md, {
      type: 'dup',
      meta: () => ({}),
      content: () => '<Dup1 />',
    })
    createEmbedRuleBlock(md, {
      type: 'dup',
      meta: () => ({}),
      content: () => '<Dup2 />',
    })

    expect(warnSpy).toHaveBeenCalledWith(
      expect.stringContaining('already exists'),
    )

    const result = md.render('@[dup](url)')
    expect(result).toContain('<Dup1 />')
    expect(result).not.toContain('<Dup2 />')

    warnSpy.mockRestore()
  })

  it('should warn and return early when renderer rule name already exists', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
    const md = new MarkdownIt()
    // Manually set a renderer rule to simulate name collision
    md.renderer.rules.embed_conflict = () => ''
    createEmbedRuleBlock(md, {
      type: 'conflict',
      name: 'embed_conflict',
      meta: () => ({}),
      content: () => '<Conflict />',
    })

    expect(warnSpy).toHaveBeenCalledWith(
      expect.stringContaining('already exists'),
    )

    warnSpy.mockRestore()
  })
})

describe('cleanMarkdownEnv', () => {
  it('should preserve whitelisted keys from env', () => {
    const env = {
      cleanUrls: true,
      path: '/guide/',
      realPath: '/guide/index.md',
      relativePath: 'guide/index.md',
      localeIndex: 'en',
      references: {},
      abbreviations: {},
      annotations: {},
      foo: 'bar',
      baz: 123,
    } as any

    const result = cleanMarkdownEnv(env)

    expect(result.cleanUrls).toBe(true)
    expect(result.path).toBe('/guide/')
    expect(result.realPath).toBe('/guide/index.md')
    expect(result.relativePath).toBe('guide/index.md')
    expect(result.localeIndex).toBe('en')
    expect(result.references).toBeDefined()
    expect(result.abbreviations).toBeDefined()
    expect(result.annotations).toBeDefined()
    expect((result as any).foo).toBeUndefined()
    expect((result as any).baz).toBeUndefined()
  })

  it('should exclude specified keys', () => {
    const env = {
      cleanUrls: true,
      path: '/guide/',
      realPath: '/guide/index.md',
      relativePath: 'guide/index.md',
      localeIndex: 'en',
      references: { some: 'ref' },
    } as any

    const result = cleanMarkdownEnv(env, ['references'])

    expect(result.cleanUrls).toBe(true)
    expect(result.path).toBe('/guide/')
    expect((result as any).references).toBeUndefined()
  })

  it('should handle empty env gracefully', () => {
    const result = cleanMarkdownEnv({} as any)
    expect(result.cleanUrls).toBeUndefined()
    expect(result.path).toBeUndefined()
    expect(result.realPath).toBeUndefined()
  })
})
