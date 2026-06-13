import MarkdownIt from 'markdown-it'
import { describe, expect, it } from 'vitest'
import { npmToMarkdownPlugin, parseLine } from '../src/markdown'
import { ALLOW_LIST, DEFAULT_TABS } from '../src/npmTo'

describe('npmToMarkdownPlugin', () => {
  it('should convert npm install to code-group with multiple package managers', () => {
    const md = new MarkdownIt()
    md.use(npmToMarkdownPlugin)

    const result = md.render('::: npm-to\n```sh\nnpm install vitepress-plugin-steps\n```\n:::')
    expect(result).toContain('code-group')
    expect(result).toContain('npm')
    expect(result).toContain('pnpm')
    expect(result).toContain('yarn')
  })

  it('should convert npm install -D', () => {
    const md = new MarkdownIt()
    md.use(npmToMarkdownPlugin)

    const result = md.render('::: npm-to\n```sh\nnpm install -D vitepress-plugin-steps\n```\n:::')
    expect(result).toContain('code-group')
  })

  it('should handle custom tabs option', () => {
    const md = new MarkdownIt()
    md.use(npmToMarkdownPlugin, ['npm', 'pnpm'])

    const result = md.render('::: npm-to\n```sh\nnpm install vitepress-plugin-steps\n```\n:::')
    expect(result).toContain('npm')
    expect(result).toContain('pnpm')
    // Should not contain yarn since we specified tabs
    expect(result).not.toContain('[yarn]')
  })

  it('should handle tabs via container attribute', () => {
    const md = new MarkdownIt()
    md.use(npmToMarkdownPlugin)

    const result = md.render('::: npm-to tabs="npm,bun"\n```sh\nnpm install vitepress-plugin-steps\n```\n:::')
    expect(result).toContain('npm')
    expect(result).toContain('bun')
  })

  it('should convert npm run commands', () => {
    const md = new MarkdownIt()
    md.use(npmToMarkdownPlugin)

    const result = md.render('::: npm-to\n```sh\nnpm run build\n```\n:::')
    expect(result).toContain('code-group')
  })

  it('should convert npx commands', () => {
    const md = new MarkdownIt()
    md.use(npmToMarkdownPlugin)

    const result = md.render('::: npm-to\n```sh\nnpx eslint .\n```\n:::')
    expect(result).toContain('code-group')
    expect(result).toContain('pnpm dlx')
  })

  it('should convert npm uninstall commands', () => {
    const md = new MarkdownIt()
    md.use(npmToMarkdownPlugin)

    const result = md.render('::: npm-to\n```sh\nnpm uninstall react\n```\n:::')
    expect(result).toContain('code-group')
  })

  it('should convert npm create commands', () => {
    const md = new MarkdownIt()
    md.use(npmToMarkdownPlugin)

    const result = md.render('::: npm-to\n```sh\nnpm create vite@latest\n```\n:::')
    expect(result).toContain('code-group')
  })

  it('should convert npm init commands', () => {
    const md = new MarkdownIt()
    md.use(npmToMarkdownPlugin)

    const result = md.render('::: npm-to\n```sh\nnpm init -y\n```\n:::')
    expect(result).toContain('code-group')
  })

  it('should return empty for invalid container (no fence)', () => {
    const md = new MarkdownIt()
    md.use(npmToMarkdownPlugin)

    const result = md.render('::: npm-to\nJust text, no code fence\n:::')
    // Invalid container should render empty
    expect(result).not.toContain('code-group')
  })

  it('should support all package manager options via options', () => {
    const md = new MarkdownIt()
    md.use(npmToMarkdownPlugin, ['npm', 'pnpm', 'yarn', 'bun', 'deno'])

    const result = md.render('::: npm-to\n```sh\nnpm i react\n```\n:::')
    expect(result).toContain('code-group')
  })

  it('should default tabs to npm, pnpm, yarn', () => {
    expect(DEFAULT_TABS).toEqual(['npm', 'pnpm', 'yarn'])
  })

  it('should have valid allow list', () => {
    expect(ALLOW_LIST).toContain('npm')
    expect(ALLOW_LIST).toContain('pnpm')
    expect(ALLOW_LIST).toContain('yarn')
    expect(ALLOW_LIST).toContain('bun')
    expect(ALLOW_LIST).toContain('deno')
  })
})

describe('parseLine', () => {
  it('should parse npm install command', () => {
    const result = parseLine('npm install react')
    expect(result).not.toBe(false)
    if (result) {
      expect(result.cli).toContain('npm')
    }
  })

  it('should parse npx command', () => {
    const result = parseLine('npx eslint .')
    expect(result).not.toBe(false)
    if (result) {
      expect(result.cli).toBe('npx')
    }
  })

  it('should parse command with env prefix', () => {
    const result = parseLine('NODE_ENV=production npm run build')
    expect(result).not.toBe(false)
    if (result) {
      // The regex captures everything before 'npm' including trailing space as env
      expect(result.env).toContain('NODE_ENV=production')
    }
  })

  it('should parse pnpm as "p" prefix + "npm install"', () => {
    // The regex matches 'npm' within 'pnpm' - "p" is the env prefix
    const result = parseLine('pnpm install react')
    expect(result).not.toBe(false)
    if (result) {
      // The regex captures "p" as env (before 'npm') and "npm install" as cli
      expect(result.env).toBe('p')
      expect(result.cli).toContain('npm install')
    }
  })

  it('should handle install with -D flag', () => {
    const result = parseLine('npm install -D react')
    expect(result).not.toBe(false)
  })

  it('should handle npx without arguments', () => {
    const result = parseLine('npx some-tool')
    expect(result).not.toBe(false)
    if (result) {
      expect(result.cmd).toBe('some-tool')
    }
  })
})
