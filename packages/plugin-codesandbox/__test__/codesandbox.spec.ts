import MarkdownIt from 'markdown-it'
import { describe, expect, it } from 'vitest'
import { codeSandboxMarkdownPlugin } from '../src/node/codeSandboxPlugin'

describe('codeSandboxMarkdownPlugin', () => {
  it('should render codesandbox embed', () => {
    const md = new MarkdownIt()
    md.use(codeSandboxMarkdownPlugin)

    const result = md.render('@[codesandbox](5wyzu)')
    expect(result).toContain('<iframe')
    expect(result).toContain('codesandbox.io')
  })

  it('should render button mode', () => {
    const md = new MarkdownIt()
    md.use(codeSandboxMarkdownPlugin)

    const result = md.render('@[codesandbox button](5wyzu)')
    expect(result).toContain('vp-codesandbox-link')
    expect(result).not.toContain('<iframe')
  })

  it('should support width and height options', () => {
    const md = new MarkdownIt()
    md.use(codeSandboxMarkdownPlugin)

    const result = md.render('@[codesandbox width="80%" height="600px"](5wyzu)')
    expect(result).toContain('width:80%')
    expect(result).toContain('height:600px')
  })

  it('should support layout option', () => {
    const md = new MarkdownIt()
    md.use(codeSandboxMarkdownPlugin)

    const result = md.render('@[codesandbox layout="Editor+Preview"](5wyzu)')
    expect(result).toContain('<iframe')
  })

  it('should support navbar/hiddenavigation option', () => {
    const md = new MarkdownIt()
    md.use(codeSandboxMarkdownPlugin)

    const result = md.render('@[codesandbox navbar="false"](5wyzu)')
    expect(result).toContain('hidenavigation=1')
  })

  it('should support console/expanddevtools option', () => {
    const md = new MarkdownIt()
    md.use(codeSandboxMarkdownPlugin)

    const result = md.render('@[codesandbox console="true"](5wyzu)')
    expect(result).toContain('expanddevtools=1')
  })

  it('should support filepath via # in URL', () => {
    const md = new MarkdownIt()
    md.use(codeSandboxMarkdownPlugin)

    const result = md.render('@[codesandbox](5wyzu#src/App.vue)')
    expect(result).toContain('module=')
    // The path gets double-encoded: encodeURIComponent applied to already-encoded value
    expect(result).toContain('src')
    expect(result).toContain('App.vue')
  })

  it('should support workspace/user format', () => {
    const md = new MarkdownIt()
    md.use(codeSandboxMarkdownPlugin)

    const result = md.render('@[codesandbox](workspace/5wyzu)')
    expect(result).toContain('<iframe')
  })

  it('should set sandbox attributes for iframe', () => {
    const md = new MarkdownIt()
    md.use(codeSandboxMarkdownPlugin)

    const result = md.render('@[codesandbox](5wyzu)')
    expect(result).toContain('sandbox=')
    expect(result).toContain('allow=')
  })
})
