import MarkdownIt from 'markdown-it'
import { describe, expect, it } from 'vitest'
import { stackblitz } from '../src/node/plugin'

describe('stackblitz plugin', () => {
  it('has correct name', () => {
    const plugin = stackblitz() as any
    expect(plugin.name).toBe('vitepress-plugin-stackblitz')
  })

  it('has componentResolver for VPStackBlitz', () => {
    const plugin = stackblitz() as any
    expect(plugin.componentResolver).toEqual(['VPStackBlitz'])
  })

  it('has markdown.config function', () => {
    const plugin = stackblitz() as any
    expect(typeof plugin.markdown?.config).toBe('function')
  })

  it('markdown.config registers stackblitz plugin in markdown-it', () => {
    const plugin = stackblitz() as any
    const md = new MarkdownIt()
    plugin.markdown.config(md)
    const result = md.render('@[stackblitz](test-id)')
    expect(result).toContain('<VPStackBlitz')
  })

  it('markdown.config registers container syntax', () => {
    const plugin = stackblitz() as any
    const md = new MarkdownIt()
    plugin.markdown.config(md)
    const result = md.render([
      '::: stackblitz title="T" description="D" template="html"',
      '',
      '```html [index.html]',
      '<h1>Hello</h1>',
      '```',
      '',
      ':::',
    ].join('\n'))
    expect(result).toContain('<VPStackBlitz')
  })
})
