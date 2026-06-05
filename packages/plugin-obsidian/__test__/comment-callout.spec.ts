import MarkdownIt from 'markdown-it'
import { describe, expect, it } from 'vitest'
import { calloutPlugin } from '../src/node/calloutPlugin'
import { commentPlugin } from '../src/node/commentPlugin'

describe('commentPlugin', () => {
  it('should remove inline comments from output', () => {
    const md = new MarkdownIt()
    md.use(commentPlugin)

    const result = md.render('Hello %%hidden%% World')
    expect(result).not.toContain('hidden')
    expect(result).toContain('Hello')
    expect(result).toContain('World')
  })

  it('should remove block comments from output', () => {
    const md = new MarkdownIt()
    md.use(commentPlugin)

    const input = 'Before\n%%\nHidden block\n%%\nAfter'
    const result = md.render(input)
    expect(result).not.toContain('Hidden block')
    expect(result).toContain('Before')
    expect(result).toContain('After')
  })

  it('should handle inline comments at start of line', () => {
    const md = new MarkdownIt()
    md.use(commentPlugin)

    const result = md.render('%%secret%% visible')
    expect(result).not.toContain('secret')
    expect(result).toContain('visible')
  })

  it('should not match single percent signs', () => {
    const md = new MarkdownIt()
    md.use(commentPlugin)

    const result = md.render('100% complete')
    expect(result).toContain('100%')
    expect(result).toContain('complete')
  })

  it('should handle consecutive inline comments', () => {
    const md = new MarkdownIt()
    md.use(commentPlugin)

    // The inline comment rule processes %%a%% first, consuming those chars.
    // Then the remaining text starts at position after the first %%.
    // The "%%b%%" part's first %% is found as a new comment starting at the space after 'a'
    const result = md.render('%%a%% %%b%% visible')
    expect(result).toContain('visible')
    // Both 'a' and 'b' should be hidden
    expect(result).not.toContain('>a<')
    expect(result).not.toContain('>b<')
  })

  it('should treat unterminated comment as plain text', () => {
    const md = new MarkdownIt()
    md.use(commentPlugin)

    const result = md.render('%% unterminated')
    expect(result).toContain('%% unterminated')
  })
})

describe('calloutPlugin', () => {
  it('should render note callout', () => {
    const md = new MarkdownIt()
    md.use(calloutPlugin)

    const result = md.render('> [!note]\n> This is a note')
    expect(result).toContain('custom-block')
    expect(result).toContain('note')
    expect(result).toContain('This is a note')
  })

  it('should render tip callout', () => {
    const md = new MarkdownIt()
    md.use(calloutPlugin)

    const result = md.render('> [!tip]\n> This is a tip')
    expect(result).toContain('custom-block')
    expect(result).toContain('tip')
  })

  it('should render warning callout', () => {
    const md = new MarkdownIt()
    md.use(calloutPlugin)

    const result = md.render('> [!warning]\n> Warning message')
    expect(result).toContain('warning')
    expect(result).toContain('Warning message')
  })

  it('should render caution callout', () => {
    const md = new MarkdownIt()
    md.use(calloutPlugin)

    const result = md.render('> [!caution]\n> Be careful')
    expect(result).toContain('caution')
  })

  it('should render info callout', () => {
    const md = new MarkdownIt()
    md.use(calloutPlugin)

    const result = md.render('> [!info]\n> Information')
    expect(result).toContain('info')
  })

  it('should render important callout', () => {
    const md = new MarkdownIt()
    md.use(calloutPlugin)

    const result = md.render('> [!important]\n> Very important')
    expect(result).toContain('important')
  })

  it('should render details callout as HTML details element', () => {
    const md = new MarkdownIt()
    md.use(calloutPlugin)

    const result = md.render('> [!details]\n> Hidden content')
    expect(result).toContain('<details')
    expect(result).toContain('<summary')
    expect(result).toContain('</details>')
  })

  it('should support custom title', () => {
    const md = new MarkdownIt()
    md.use(calloutPlugin)

    const result = md.render('> [!tip] My Title\n> Content')
    expect(result).toContain('My Title')
    expect(result).toContain('Content')
  })

  it('should support callout aliases', () => {
    const md = new MarkdownIt()
    md.use(calloutPlugin)

    // success is an alias for tip
    const result = md.render('> [!success]\n> Success message')
    expect(result).toContain('tip')
    expect(result).toContain('success')
    expect(result).toContain('custom-block')
  })

  it('should support faq alias for warning', () => {
    const md = new MarkdownIt()
    md.use(calloutPlugin)

    const result = md.render('> [!faq]\n> FAQ content')
    expect(result).toContain('warning')
    expect(result).toContain('faq')
  })

  it('should support bug alias for caution', () => {
    const md = new MarkdownIt()
    md.use(calloutPlugin)

    const result = md.render('> [!bug]\n> Bug report')
    expect(result).toContain('caution')
    expect(result).toContain('bug')
  })

  it('should support example alias for important', () => {
    const md = new MarkdownIt()
    md.use(calloutPlugin)

    const result = md.render('> [!example]\n> Example content')
    expect(result).toContain('important')
    expect(result).toContain('example')
  })

  it('should not render invalid callout types', () => {
    const md = new MarkdownIt()
    md.use(calloutPlugin)

    const result = md.render('> [!invalid]\n> Should be blockquote')
    // Should be treated as a regular blockquote
    expect(result).not.toContain('custom-block')
  })

  it('should handle multi-line callout content', () => {
    const md = new MarkdownIt()
    md.use(calloutPlugin)

    const result = md.render('> [!tip]\n> Line 1\n> Line 2\n> Line 3')
    expect(result).toContain('Line 1')
    expect(result).toContain('Line 2')
    expect(result).toContain('Line 3')
  })

  it('should handle callout without body content as blockquote', () => {
    const md = new MarkdownIt()
    md.use(calloutPlugin)

    const result = md.render('> [!note]')
    // Should fall through to blockquote because no body content
    expect(result).not.toContain('custom-block')
  })
})
