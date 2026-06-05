import MarkdownIt from 'markdown-it'
import { describe, expect, it } from 'vitest'
import { caniuseMarkdownPlugin } from '../src/node/caniusePlugin'

describe('caniuseMarkdownPlugin', () => {
  it('should render embed mode by default', () => {
    const md = new MarkdownIt()
    md.use(caniuseMarkdownPlugin)

    const result = md.render('@[caniuse](fetch)')
    expect(result).toContain('<VPCaniuse')
    expect(result).toContain('feature="fetch"')
  })

  it('should render baseline mode', () => {
    const md = new MarkdownIt()
    md.use(caniuseMarkdownPlugin)

    const result = md.render('@[caniuse baseline](fetch)')
    expect(result).toContain('<VPCaniuse')
  })

  it('should support version range', () => {
    const md = new MarkdownIt()
    md.use(caniuseMarkdownPlugin)

    const result = md.render('@[caniuse{-2,3}](fetch)')
    expect(result).toContain('<VPCaniuse')
  })

  it('should return empty for empty feature', () => {
    const md = new MarkdownIt()
    md.use(caniuseMarkdownPlugin)

    const result = md.render('@[caniuse]()')
    // Should return empty string for empty feature
    expect(result).not.toContain('<VPCaniuse')
  })

  it('should handle features with underscores', () => {
    const md = new MarkdownIt()
    md.use(caniuseMarkdownPlugin)

    const result = md.render('@[caniuse](mdn-api_abortcontroller)')
    expect(result).toContain('<VPCaniuse')
  })
})
