import MarkdownIt from 'markdown-it'
import { describe, expect, it } from 'vitest'
import steps from '../src/node/index'
import { stepsMarkdownPlugin } from '../src/node/stepsPlugin'

describe('stepsMarkdownPlugin', () => {
  it('should render steps container', () => {
    const md = new MarkdownIt()
    md.use(stepsMarkdownPlugin)

    const result = md.render('::: steps\n- Step 1\n\n  Description 1\n\n- Step 2\n\n  Description 2\n:::')
    expect(result).toContain('class="vp-steps"')
  })

  it('should render nested content', () => {
    const md = new MarkdownIt()
    md.use(stepsMarkdownPlugin)

    const result = md.render('::: steps\n- Step 1\n\n  Content with **bold** text\n:::')
    expect(result).toContain('<strong>bold</strong>')
  })

  it('should handle empty steps', () => {
    const md = new MarkdownIt()
    md.use(stepsMarkdownPlugin)

    const result = md.render('::: steps\n:::')
    expect(result).toContain('class="vp-steps"')
  })
})

describe('steps plugin (definePlugin)', () => {
  it('should export a default definePlugin function', () => {
    const plugin = steps()
    expect(plugin.name).toBe('vitepress-plugin-steps')
    expect(plugin.client).toBeDefined()
    expect(plugin.client?.imports).toBeDefined()
    expect(plugin.markdown).toBeDefined()
    expect(typeof plugin.markdown?.config).toBe('function')
  })
})
