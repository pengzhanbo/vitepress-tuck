import { describe, expect, it } from 'vitest'
import { embedSchema, openSchema, projectSchema, schema } from '../src/node/schema'

describe('projectSchema', () => {
  const validProject = {
    title: 'My Project',
    description: 'A test project',
    template: 'typescript' as const,
  }

  it('valid project passes', () => {
    expect(projectSchema.safeParse(validProject).success).toBe(true)
  })

  it('fails without title', () => {
    const { success } = projectSchema.safeParse({ description: 'desc', template: 'html' })
    expect(success).toBe(false)
  })

  it('fails without description', () => {
    const { success } = projectSchema.safeParse({ title: 'Test', template: 'html' })
    expect(success).toBe(false)
  })

  it('fails without template', () => {
    const { success } = projectSchema.safeParse({ title: 'Test', description: 'desc' })
    expect(success).toBe(false)
  })

  it('fails with invalid template', () => {
    const result = projectSchema.safeParse({ title: 'Test', description: 'desc', template: 'invalid' })
    expect(result.success).toBe(false)
  })

  it('accepts all valid templates', () => {
    const templates = ['angular-cli', 'create-react-app', 'html', 'javascript', 'typescript', 'polymer', 'vue', 'node']
    for (const tpl of templates) {
      const result = projectSchema.safeParse({ title: 'T', description: 'D', template: tpl })
      expect(result.success).toBe(true)
    }
  })

  it('accepts optional files', () => {
    const result = projectSchema.safeParse({ ...validProject, files: { 'index.html': '<h1>Hi</h1>' } })
    expect(result.success).toBe(true)
  })

  it('accepts optional dependencies', () => {
    const result = projectSchema.safeParse({ ...validProject, dependencies: { vue: '^3.5.0' } })
    expect(result.success).toBe(true)
  })

  it('accepts optional settings', () => {
    const result = projectSchema.safeParse({
      ...validProject,
      settings: { trigger: 'save', action: 'hmr', clearConsole: true },
    })
    expect(result.success).toBe(true)
  })

  it('fails with invalid settings.trigger', () => {
    const result = projectSchema.safeParse({
      ...validProject,
      settings: { trigger: 'invalid' },
    })
    expect(result.success).toBe(false)
  })

  it('fails with invalid settings.action', () => {
    const result = projectSchema.safeParse({
      ...validProject,
      settings: { action: 'invalid' },
    })
    expect(result.success).toBe(false)
  })

  it('accepts settings with partial fields', () => {
    const result = projectSchema.safeParse({ ...validProject, settings: { trigger: 'auto' } })
    expect(result.success).toBe(true)
  })
})

describe('openSchema', () => {
  it('accepts empty object', () => {
    expect(openSchema.safeParse({}).success).toBe(true)
  })

  it('accepts clickToLoad', () => {
    expect(openSchema.safeParse({ clickToLoad: true }).success).toBe(true)
  })

  it('accepts devToolsHeight within range', () => {
    expect(openSchema.safeParse({ devToolsHeight: 50 }).success).toBe(true)
    expect(openSchema.safeParse({ devToolsHeight: 0 }).success).toBe(true)
    expect(openSchema.safeParse({ devToolsHeight: 100 }).success).toBe(true)
  })

  it('rejects devToolsHeight out of range', () => {
    expect(openSchema.safeParse({ devToolsHeight: -1 }).success).toBe(false)
    expect(openSchema.safeParse({ devToolsHeight: 101 }).success).toBe(false)
  })

  it('accepts forceEmbedLayout', () => {
    expect(openSchema.safeParse({ forceEmbedLayout: true }).success).toBe(true)
  })

  it('accepts hideDevTools', () => {
    expect(openSchema.safeParse({ hideDevTools: true }).success).toBe(true)
  })

  it('accepts hideExplorer', () => {
    expect(openSchema.safeParse({ hideExplorer: true }).success).toBe(true)
  })

  it('accepts newWindow', () => {
    expect(openSchema.safeParse({ newWindow: true }).success).toBe(true)
  })

  it('accepts openFile as string', () => {
    expect(openSchema.safeParse({ openFile: 'index.ts' }).success).toBe(true)
  })

  it('accepts openFile as array', () => {
    expect(openSchema.safeParse({ openFile: ['index.ts', 'app.ts'] }).success).toBe(true)
  })

  it('rejects openFile as number', () => {
    expect(openSchema.safeParse({ openFile: 123 }).success).toBe(false)
  })

  it('accepts origin', () => {
    expect(openSchema.safeParse({ origin: 'https://example.com' }).success).toBe(true)
  })

  it('accepts showSidebar', () => {
    expect(openSchema.safeParse({ showSidebar: true }).success).toBe(true)
  })

  it('accepts terminalHeight within range', () => {
    expect(openSchema.safeParse({ terminalHeight: 30 }).success).toBe(true)
    expect(openSchema.safeParse({ terminalHeight: 0 }).success).toBe(true)
    expect(openSchema.safeParse({ terminalHeight: 100 }).success).toBe(true)
  })

  it('rejects terminalHeight out of range', () => {
    expect(openSchema.safeParse({ terminalHeight: -1 }).success).toBe(false)
    expect(openSchema.safeParse({ terminalHeight: 101 }).success).toBe(false)
  })

  it('accepts valid themes', () => {
    expect(openSchema.safeParse({ theme: 'dark' }).success).toBe(true)
    expect(openSchema.safeParse({ theme: 'light' }).success).toBe(true)
    expect(openSchema.safeParse({ theme: 'default' }).success).toBe(true)
  })

  it('rejects invalid theme', () => {
    expect(openSchema.safeParse({ theme: 'blue' }).success).toBe(false)
  })

  it('accepts valid views', () => {
    expect(openSchema.safeParse({ view: 'default' }).success).toBe(true)
    expect(openSchema.safeParse({ view: 'preview' }).success).toBe(true)
    expect(openSchema.safeParse({ view: 'editor' }).success).toBe(true)
  })

  it('rejects invalid view', () => {
    expect(openSchema.safeParse({ view: 'terminal' }).success).toBe(false)
  })
})

describe('embedSchema', () => {
  it('accepts empty object', () => {
    expect(embedSchema.safeParse({}).success).toBe(true)
  })

  it('accepts width', () => {
    expect(embedSchema.safeParse({ width: 800 }).success).toBe(true)
  })

  it('accepts height', () => {
    expect(embedSchema.safeParse({ height: 600 }).success).toBe(true)
  })

  it('rejects negative width', () => {
    expect(embedSchema.safeParse({ width: -1 }).success).toBe(false)
  })

  it('rejects negative height', () => {
    expect(embedSchema.safeParse({ height: -1 }).success).toBe(false)
  })

  it('combines embed options with open options', () => {
    const result = embedSchema.safeParse({
      width: 800,
      height: 600,
      theme: 'dark',
      hideExplorer: true,
    })
    expect(result.success).toBe(true)
  })
})

describe('schema (combined)', () => {
  const validFull = {
    title: 'Project',
    description: 'Desc',
    template: 'typescript' as const,
  }

  it('accepts valid full config', () => {
    expect(schema.safeParse(validFull).success).toBe(true)
  })

  it('accepts full config with all options', () => {
    const result = schema.safeParse({
      ...validFull,
      width: 800,
      height: 600,
      theme: 'dark' as const,
      view: 'preview' as const,
      files: { 'index.html': '<h1>Hi</h1>' },
      dependencies: { vue: '^3.5.0' },
      settings: { trigger: 'save' as const },
    })
    expect(result.success).toBe(true)
  })

  it('rejects full config without required project fields', () => {
    expect(schema.safeParse({ theme: 'dark' }).success).toBe(false)
  })
})
