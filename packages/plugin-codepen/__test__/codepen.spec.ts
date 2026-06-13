import MarkdownIt from 'markdown-it'
import { describe, expect, it } from 'vitest'
import { codepenMarkdownPlugin } from '../src/node/markdown'

describe('codepenMarkdownPlugin', () => {
  it('should render codepen embed', () => {
    const md = new MarkdownIt()
    md.use(codepenMarkdownPlugin)

    const result = md.render('@[codepen](user/penId)')
    expect(result).toContain('<VPCodepen')
  })

  it('should parse user and slash from source', () => {
    const md = new MarkdownIt()
    md.use(codepenMarkdownPlugin)

    const result = md.render('@[codepen](leimapapa/RwOZQOW)')
    expect(result).toContain('<VPCodepen')
    expect(result).toContain('user="leimapapa"')
    expect(result).toContain('slash="RwOZQOW"')
  })

  it('should support height option', () => {
    const md = new MarkdownIt()
    md.use(codepenMarkdownPlugin)

    const result = md.render('@[codepen height="500px"](user/pen)')
    expect(result).toContain('height="500px"')
  })

  it('should support title option', () => {
    const md = new MarkdownIt()
    md.use(codepenMarkdownPlugin)

    const result = md.render('@[codepen title="My Pen"](user/pen)')
    expect(result).toContain('title="My Pen"')
  })

  it('should support editable option', () => {
    const md = new MarkdownIt()
    md.use(codepenMarkdownPlugin)

    const result = md.render('@[codepen editable](user/pen)')
    expect(result).toContain('<VPCodepen')
  })

  it('should support tab option', () => {
    const md = new MarkdownIt()
    md.use(codepenMarkdownPlugin)

    const result = md.render('@[codepen tab="css"](user/pen)')
    expect(result).toContain('tab="css"')
  })

  it('should support preview option', () => {
    const md = new MarkdownIt()
    md.use(codepenMarkdownPlugin)

    const result = md.render('@[codepen preview](user/pen)')
    expect(result).toContain('<VPCodepen')
  })
})
