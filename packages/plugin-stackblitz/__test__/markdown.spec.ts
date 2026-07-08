import path from 'node:path'
import MarkdownIt from 'markdown-it'
import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest'
import { stackblitzMarkdownPlugin } from '../src/node/markdown'
import { logger } from '../src/node/utils'

const FIXTURES_DIR = path.resolve(__dirname, 'fixtures')

beforeAll(() => {
  ;(globalThis as Record<string, unknown>).VITEPRESS_CONFIG = {
    srcDir: FIXTURES_DIR,
    root: FIXTURES_DIR,
  }
})

afterAll(() => {
  delete (globalThis as Record<string, unknown>).VITEPRESS_CONFIG
})

// =============================================================================
// Embed syntax — basic
// =============================================================================

describe('stackblitzMarkdownPlugin - embed syntax', () => {
  it('embeds by StackBlitz ID', () => {
    const md = new MarkdownIt()
    md.use(stackblitzMarkdownPlugin)
    const result = md.render('@[stackblitz](my-project-id)')
    expect(result).toContain('<VPStackBlitz')
    expect(result).not.toContain('</VPStackBlitz>')
    expect(result).toContain('source="my-project-id"')
    expect(result).toContain('from="id"')
    expect(result).toContain('mode="embed"')
  })

  it('embeds by GitHub repository', () => {
    const md = new MarkdownIt()
    md.use(stackblitzMarkdownPlugin)
    const result = md.render('@[stackblitz github](user/repo)')
    expect(result).toContain('<VPStackBlitz')
    expect(result).toContain('source="user/repo"')
    expect(result).toContain('from="github"')
    expect(result).toContain('mode="embed"')
  })

  it('button mode', () => {
    const md = new MarkdownIt()
    md.use(stackblitzMarkdownPlugin)
    const result = md.render('@[stackblitz button](my-project-id)')
    expect(result).toContain('<VPStackBlitz')
    expect(result).toContain('mode="open"')
    expect(result).toContain('from="id"')
  })

  it('button mode with github', () => {
    const md = new MarkdownIt()
    md.use(stackblitzMarkdownPlugin)
    const result = md.render('@[stackblitz github button](user/repo)')
    expect(result).toContain('<VPStackBlitz')
    expect(result).toContain('mode="open"')
    expect(result).toContain('from="github"')
  })
})

// =============================================================================
// Embed syntax — local project
// =============================================================================

describe('stackblitzMarkdownPlugin - embed local project', () => {
  it('embeds local project with JSON config', () => {
    const md = new MarkdownIt()
    md.use(stackblitzMarkdownPlugin)
    const env = { path: path.join(FIXTURES_DIR, 'page.md') }
    const result = md.render('@[stackblitz local](test-project)', env)
    expect(result).toContain('<VPStackBlitz')
    expect(result).toContain('from="project"')
    expect(result).toContain('mode="embed"')
    // Should include the project config
    expect(result).toContain('project=')
    // Should include embed options
    expect(result).toContain('embed=')
  })

  it('embeds local project with YAML config', () => {
    const md = new MarkdownIt()
    md.use(stackblitzMarkdownPlugin)
    const env = { path: path.join(FIXTURES_DIR, 'page.md') }
    const result = md.render('@[stackblitz local](test-project-yaml)', env)
    expect(result).toContain('<VPStackBlitz')
    expect(result).toContain('from="project"')
  })

  it('embeds local project without config file', () => {
    const md = new MarkdownIt()
    md.use(stackblitzMarkdownPlugin)
    const env = { path: path.join(FIXTURES_DIR, 'page.md') }
    const result = md.render('@[stackblitz local title="NoConfig" description="No config project" template="html"](no-config-project)', env)
    expect(result).toContain('<VPStackBlitz')
    expect(result).toContain('from="project"')
  })

  it('shows error for non-existent local directory', () => {
    const md = new MarkdownIt()
    md.use(stackblitzMarkdownPlugin)
    const env = { path: path.join(FIXTURES_DIR, 'page.md') }
    const errorSpy = vi.spyOn(logger, 'error').mockImplementation(() => {})
    const result = md.render('@[stackblitz local](nonexistent-dir)', env)
    expect(result).toContain('does not exist')
    expect(errorSpy).toHaveBeenCalled()
    errorSpy.mockRestore()
  })

  it('resolves @ prefix for local project', () => {
    const md = new MarkdownIt()
    md.use(stackblitzMarkdownPlugin)
    const env = { path: path.join(FIXTURES_DIR, 'page.md') }
    const result = md.render('@[stackblitz local](@/test-project)', env)
    expect(result).toContain('<VPStackBlitz')
    expect(result).toContain('from="project"')
  })

  it('resolves / prefix for local project', () => {
    const md = new MarkdownIt()
    md.use(stackblitzMarkdownPlugin)
    const env = { path: path.join(FIXTURES_DIR, 'page.md') }
    const result = md.render('@[stackblitz local](/test-project)', env)
    expect(result).toContain('<VPStackBlitz')
    expect(result).toContain('from="project"')
  })

  it('local project with button mode', () => {
    const md = new MarkdownIt()
    md.use(stackblitzMarkdownPlugin)
    const env = { path: path.join(FIXTURES_DIR, 'page.md') }
    const result = md.render('@[stackblitz local button title="Btn" description="Button project" template="html"](test-project)', env)
    expect(result).toContain('<VPStackBlitz')
    expect(result).toContain('mode="open"')
    expect(result).toContain('open=')
  })
})

// =============================================================================
// Embed syntax — options
// =============================================================================

describe('stackblitzMarkdownPlugin - embed options', () => {
  it('passes theme option', () => {
    const md = new MarkdownIt()
    md.use(stackblitzMarkdownPlugin)
    const result = md.render('@[stackblitz theme="dark"](my-id)')
    expect(result).toContain('<VPStackBlitz')
    // theme is inside the encoded embed/open config
    const encoded = result.match(/embed="([^"]*)"/)?.[1]
    expect(encoded).toBeDefined()
    expect(decodeURIComponent(encoded!)).toContain('dark')
  })

  it('passes height option', () => {
    const md = new MarkdownIt()
    md.use(stackblitzMarkdownPlugin)
    const result = md.render('@[stackblitz height=500](my-id)')
    expect(result).toContain('<VPStackBlitz')
    const encoded = result.match(/embed="([^"]*)"/)?.[1]
    expect(decodeURIComponent(encoded!)).toContain('"height":500')
  })

  it('passes width option', () => {
    const md = new MarkdownIt()
    md.use(stackblitzMarkdownPlugin)
    const result = md.render('@[stackblitz width=800](my-id)')
    expect(result).toContain('<VPStackBlitz')
    const encoded = result.match(/embed="([^"]*)"/)?.[1]
    expect(decodeURIComponent(encoded!)).toContain('"width":800')
  })

  it('passes terminalHeight as number', () => {
    const md = new MarkdownIt()
    md.use(stackblitzMarkdownPlugin)
    const result = md.render('@[stackblitz terminalHeight=30](my-id)')
    expect(result).toContain('<VPStackBlitz')
    const encoded = result.match(/embed="([^"]*)"/)?.[1]
    expect(decodeURIComponent(encoded!)).toContain('"terminalHeight":30')
  })

  it('passes view option', () => {
    const md = new MarkdownIt()
    md.use(stackblitzMarkdownPlugin)
    const result = md.render('@[stackblitz view="editor"](my-id)')
    expect(result).toContain('<VPStackBlitz')
    const encoded = result.match(/embed="([^"]*)"/)?.[1]
    expect(decodeURIComponent(encoded!)).toContain('editor')
  })

  it('passes hideExplorer option', () => {
    const md = new MarkdownIt()
    md.use(stackblitzMarkdownPlugin)
    const result = md.render('@[stackblitz hideExplorer=true](my-id)')
    expect(result).toContain('<VPStackBlitz')
    const encoded = result.match(/embed="([^"]*)"/)?.[1]
    expect(decodeURIComponent(encoded!)).toContain('"hideExplorer":true')
  })

  it('passes clickToLoad option', () => {
    const md = new MarkdownIt()
    md.use(stackblitzMarkdownPlugin)
    const result = md.render('@[stackblitz clickToLoad=true](my-id)')
    expect(result).toContain('<VPStackBlitz')
    const encoded = result.match(/embed="([^"]*)"/)?.[1]
    expect(decodeURIComponent(encoded!)).toContain('"clickToLoad":true')
  })

  it('passes openFile as string', () => {
    const md = new MarkdownIt()
    md.use(stackblitzMarkdownPlugin)
    const result = md.render('@[stackblitz openFile="src/index.ts"](my-id)')
    expect(result).toContain('<VPStackBlitz')
    const encoded = result.match(/embed="([^"]*)"/)?.[1]
    expect(decodeURIComponent(encoded!)).toContain('src/index.ts')
  })

  it('passes showSidebar option', () => {
    const md = new MarkdownIt()
    md.use(stackblitzMarkdownPlugin)
    const result = md.render('@[stackblitz showSidebar=true](my-id)')
    expect(result).toContain('<VPStackBlitz')
    const encoded = result.match(/embed="([^"]*)"/)?.[1]
    expect(decodeURIComponent(encoded!)).toContain('"showSidebar":true')
  })

  it('passes settingsTrigger', () => {
    const md = new MarkdownIt()
    md.use(stackblitzMarkdownPlugin)
    const env = { path: path.join(FIXTURES_DIR, 'page.md') }
    const result = md.render('@[stackblitz local title="T" description="D" template="html" settingsTrigger="keystroke"](no-config-project)', env)
    expect(result).toContain('<VPStackBlitz')
    const encoded = result.match(/project="([^"]*)"/)?.[1]
    expect(encoded).toBeDefined()
    expect(decodeURIComponent(encoded!)).toContain('"trigger":"keystroke"')
  })

  it('passes settingsAction', () => {
    const md = new MarkdownIt()
    md.use(stackblitzMarkdownPlugin)
    const env = { path: path.join(FIXTURES_DIR, 'page.md') }
    const result = md.render('@[stackblitz local title="T" description="D" template="html" settingsAction="refresh"](no-config-project)', env)
    expect(result).toContain('<VPStackBlitz')
    const encoded = result.match(/project="([^"]*)"/)?.[1]
    expect(decodeURIComponent(encoded!)).toContain('"action":"refresh"')
  })

  it('passes settingsClearConsole', () => {
    const md = new MarkdownIt()
    md.use(stackblitzMarkdownPlugin)
    const env = { path: path.join(FIXTURES_DIR, 'page.md') }
    const result = md.render('@[stackblitz local title="T" description="D" template="html" settingsClearConsole=true](no-config-project)', env)
    expect(result).toContain('<VPStackBlitz')
    const encoded = result.match(/project="([^"]*)"/)?.[1]
    expect(decodeURIComponent(encoded!)).toContain('"clearConsole":true')
  })

  it('does not match unrelated embed syntax', () => {
    const md = new MarkdownIt()
    md.use(stackblitzMarkdownPlugin)
    const result = md.render('@[pdf](https://example.com)')
    expect(result).not.toContain('<VPStackBlitz')
  })
})

// =============================================================================
// Embed syntax — error handling
// =============================================================================

describe('stackblitzMarkdownPlugin - embed error handling', () => {
  it('shows error for invalid config', () => {
    const md = new MarkdownIt()
    md.use(stackblitzMarkdownPlugin)
    const errorSpy = vi.spyOn(logger, 'error').mockImplementation(() => {})
    // Missing required title, description, template for local mode
    const env = { path: path.join(FIXTURES_DIR, 'page.md') }
    const result = md.render('@[stackblitz local](empty-project)', env)
    expect(result).toContain('Error parsing config')
    expect(errorSpy).toHaveBeenCalled()
    errorSpy.mockRestore()
  })
})

// =============================================================================
// Container syntax
// =============================================================================

describe('stackblitzMarkdownPlugin - container syntax', () => {
  it('renders container with project config', () => {
    const md = new MarkdownIt()
    md.use(stackblitzMarkdownPlugin)
    const result = md.render([
      '::: stackblitz title="My Project" description="A demo" template="html"',
      '',
      '```json [config]',
      '{',
      '  "settings": {',
      '    "trigger": "keystroke"',
      '  }',
      '}',
      '```',
      '',
      ':::',
    ].join('\n'))
    expect(result).toContain('<VPStackBlitz')
    expect(result).toContain('from="project"')
    expect(result).toContain('mode="embed"')
  })

  it('renders container with file fences', () => {
    const md = new MarkdownIt()
    md.use(stackblitzMarkdownPlugin)
    const result = md.render([
      '::: stackblitz title="Files" description="With files" template="html"',
      '',
      '```html [index.html]',
      '<h1>Hello</h1>',
      '```',
      '',
      '```css [style.css]',
      'h1 { color: red; }',
      '```',
      '',
      ':::',
    ].join('\n'))
    expect(result).toContain('<VPStackBlitz')
    expect(result).toContain('from="project"')
  })

  it('renders container in button mode', () => {
    const md = new MarkdownIt()
    md.use(stackblitzMarkdownPlugin)
    const result = md.render([
      '::: stackblitz title="Btn" description="A button" template="html" button',
      '',
      '```html [index.html]',
      '<h1>Hello</h1>',
      '```',
      '',
      ':::',
    ].join('\n'))
    expect(result).toContain('<VPStackBlitz')
    expect(result).toContain('mode="open"')
    expect(result).toContain('open=')
  })

  it('handles empty container', () => {
    const md = new MarkdownIt()
    md.use(stackblitzMarkdownPlugin)
    const result = md.render('::: stackblitz\n:::')
    expect(result).toContain('Error parsing config')
  })

  it('handles container with settings attributes', () => {
    const md = new MarkdownIt()
    md.use(stackblitzMarkdownPlugin)
    const result = md.render([
      '::: stackblitz title="Settings" description="With settings" template="html" settingsTrigger="auto" settingsAction="hmr" settingsClearConsole=true',
      '',
      '```html [index.html]',
      '<h1>Hello</h1>',
      '```',
      '',
      ':::',
    ].join('\n'))
    expect(result).toContain('<VPStackBlitz')
  })

  it('does not affect fences outside container', () => {
    const md = new MarkdownIt()
    md.use(stackblitzMarkdownPlugin)
    const result = md.render('```ts\nconst a = 1\n```')
    expect(result).toContain('const a = 1')
  })

  it('renders multiple container instances', () => {
    const md = new MarkdownIt()
    md.use(stackblitzMarkdownPlugin)
    const result = md.render([
      '::: stackblitz title="A" description="First" template="html"',
      '',
      '```html [a.html]',
      '<h1>A</h1>',
      '```',
      '',
      ':::',
      '',
      '::: stackblitz title="B" description="Second" template="html"',
      '',
      '```html [b.html]',
      '<h1>B</h1>',
      '```',
      '',
      ':::',
    ].join('\n'))
    // Both containers should render
    const matches = result.match(/<VPStackBlitz/g)
    expect(matches).toHaveLength(2)
  })

  it('handles config fence without explicit format', () => {
    const md = new MarkdownIt()
    md.use(stackblitzMarkdownPlugin)
    const result = md.render([
      '::: stackblitz title="T" description="D" template="html"',
      '',
      '```json [config]',
      '{"settings":{"trigger":"save"}}',
      '```',
      '',
      ':::',
    ].join('\n'))
    expect(result).toContain('<VPStackBlitz')
  })
})

// =============================================================================
// Container syntax — error handling
// =============================================================================

describe('stackblitzMarkdownPlugin - container error handling', () => {
  it('shows error for invalid config in container', () => {
    const md = new MarkdownIt()
    md.use(stackblitzMarkdownPlugin)
    const errorSpy = vi.spyOn(logger, 'error').mockImplementation(() => {})
    // Missing required fields
    const result = md.render('::: stackblitz theme="dark"\n:::')
    expect(result).toContain('Error parsing config')
    expect(errorSpy).toHaveBeenCalled()
    errorSpy.mockRestore()
  })

  it('handles invalid YAML in container config fence', () => {
    const md = new MarkdownIt()
    md.use(stackblitzMarkdownPlugin)
    const errorSpy = vi.spyOn(logger, 'error').mockImplementation(() => {})
    const result = md.render([
      '::: stackblitz',
      '',
      '```yaml [config]',
      ': invalid: yaml: :',
      '```',
      '',
      ':::',
    ].join('\n'))
    expect(result).toContain('Error parsing config')
    errorSpy.mockRestore()
  })

  it('handles invalid JSON in container config fence', () => {
    const md = new MarkdownIt()
    md.use(stackblitzMarkdownPlugin)
    const errorSpy = vi.spyOn(logger, 'error').mockImplementation(() => {})
    const result = md.render([
      '::: stackblitz',
      '',
      '```json [config]',
      '{invalid}',
      '```',
      '',
      ':::',
    ].join('\n'))
    expect(result).toContain('Error parsing config')
    errorSpy.mockRestore()
  })

  it('ignores fences without [filename] in container', () => {
    const md = new MarkdownIt()
    md.use(stackblitzMarkdownPlugin)
    const result = md.render([
      '::: stackblitz title="T" description="D" template="html"',
      '',
      '```html',
      '<h1>No filename</h1>',
      '```',
      '',
      ':::',
    ].join('\n'))
    expect(result).toContain('<VPStackBlitz')
  })

  it('handles non-fence content between container fences', () => {
    const md = new MarkdownIt()
    md.use(stackblitzMarkdownPlugin)
    // Text between the header and the fence creates paragraph tokens that are not fences
    const result = md.render([
      '::: stackblitz title="Mixed" description="With text" template="html"',
      '',
      'Some descriptive text here',
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

// =============================================================================
// Edge cases
// =============================================================================

describe('stackblitzMarkdownPlugin - edge cases', () => {
  it('handles embed with number string conversion', () => {
    const md = new MarkdownIt()
    md.use(stackblitzMarkdownPlugin)
    // Pass height and terminalHeight as strings (as from markdown attrs)
    // They should be converted to numbers by transformNumberKeys
    const result = md.render('@[stackblitz terminalHeight=30 height="400"](my-id)')
    expect(result).toContain('<VPStackBlitz')
  })

  it('handles github embed with options', () => {
    const md = new MarkdownIt()
    md.use(stackblitzMarkdownPlugin)
    const result = md.render('@[stackblitz github theme="light" hideExplorer=true](user/repo)')
    expect(result).toContain('<VPStackBlitz')
    expect(result).toContain('from="github"')
  })

  it('handles local project with deduplicated files', () => {
    const md = new MarkdownIt()
    md.use(stackblitzMarkdownPlugin)
    const env = { path: path.join(FIXTURES_DIR, 'page.md') }
    // test-project has stackblitz.config.json, style.css, index.html, src/app.ts
    // The config file should be removed from files and parsed as config
    const result = md.render('@[stackblitz local](test-project)', env)
    expect(result).toContain('<VPStackBlitz')
    const projectEncoded = result.match(/project="([^"]*)"/)?.[1]
    expect(projectEncoded).toBeDefined()
    const project = JSON.parse(decodeURIComponent(projectEncoded!))
    expect(project.files).not.toHaveProperty('stackblitz.config.json')
    expect(project.title).toBeDefined()
  })
})
