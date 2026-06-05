import MarkdownIt from 'markdown-it'
import { describe, expect, it } from 'vitest'
import { jsfiddleMarkdownPlugin } from '../src/node/jsfiddlePlugin'

describe('jsfiddleMarkdownPlugin', () => {
  it('should render jsfiddle embed', () => {
    const md = new MarkdownIt()
    md.use(jsfiddleMarkdownPlugin)

    const result = md.render('@[jsfiddle](user/id)')
    expect(result).toContain('<VPJsfiddle')
  })

  it('should support height option', () => {
    const md = new MarkdownIt()
    md.use(jsfiddleMarkdownPlugin)

    const result = md.render('@[jsfiddle height="500px"](user/id)')
    expect(result).toContain('height="500px"')
  })

  it('should support tab option with whitespace removal', () => {
    const md = new MarkdownIt()
    md.use(jsfiddleMarkdownPlugin)

    const result = md.render('@[jsfiddle tab="js, css, html, result"](user/id)')
    expect(result).toContain('js,css,html,result')
  })

  it('should use default title', () => {
    const md = new MarkdownIt()
    md.use(jsfiddleMarkdownPlugin)

    const result = md.render('@[jsfiddle](user/id)')
    expect(result).toContain('title="JS Fiddle"')
  })

  it('should support theme option', () => {
    const md = new MarkdownIt()
    md.use(jsfiddleMarkdownPlugin)

    const result = md.render('@[jsfiddle theme="dark"](user/id)')
    expect(result).toContain('theme="dark"')
  })

  it('should support width option', () => {
    const md = new MarkdownIt()
    md.use(jsfiddleMarkdownPlugin)

    const result = md.render('@[jsfiddle width="80%"](user/id)')
    expect(result).toContain('width="80%"')
  })

  it('should support custom title', () => {
    const md = new MarkdownIt()
    md.use(jsfiddleMarkdownPlugin)

    const result = md.render('@[jsfiddle title="Custom"](user/id)')
    expect(result).toContain('title="Custom"')
  })
})
