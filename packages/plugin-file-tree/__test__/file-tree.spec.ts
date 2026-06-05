import MarkdownIt from 'markdown-it'
import { describe, expect, it } from 'vitest'
import { fileTreeMarkdownPlugin, parseFileTreeNodeInfo, parseFileTreeRawContent } from '../src/node/fileTreePlugin'

describe('parseFileTreeNodeInfo', () => {
  it('should parse a simple filename', () => {
    const result = parseFileTreeNodeInfo('index.ts')
    expect(result.filename).toBe('index.ts')
    expect(result.type).toBe('file')
  })

  it('should detect folder by trailing slash', () => {
    const result = parseFileTreeNodeInfo('src/')
    expect(result.filename).toBe('src')
    expect(result.type).toBe('folder')
    expect(result.expanded).toBe(false)
  })

  it('should detect added diff marker', () => {
    const result = parseFileTreeNodeInfo('++ new-file.ts')
    expect(result.filename).toBe('new-file.ts')
    expect(result.diff).toBe('add')
  })

  it('should detect removed diff marker', () => {
    const result = parseFileTreeNodeInfo('-- old-file.ts')
    expect(result.filename).toBe('old-file.ts')
    expect(result.diff).toBe('remove')
  })

  it('should detect focus marker', () => {
    const result = parseFileTreeNodeInfo('**main.ts**')
    expect(result.filename).toBe('main.ts')
    expect(result.focus).toBe(true)
  })

  it('should extract comment after #', () => {
    const result = parseFileTreeNodeInfo('file.ts # this is a comment')
    expect(result.filename).toBe('file.ts')
    expect(result.comment).toContain('this is a comment')
  })

  it('should handle comment with special characters', () => {
    const result = parseFileTreeNodeInfo('file.ts # a **bold** comment')
    expect(result.filename).toBe('file.ts')
    expect(result.comment).toContain('**bold**')
  })

  it('should handle add + comment', () => {
    const result = parseFileTreeNodeInfo('++ new-file.ts # new file added')
    expect(result.filename).toBe('new-file.ts')
    expect(result.diff).toBe('add')
    expect(result.comment).toContain('new file added')
  })

  it('should handle remove + comment', () => {
    const result = parseFileTreeNodeInfo('-- old-file.ts # removed')
    expect(result.filename).toBe('old-file.ts')
    expect(result.diff).toBe('remove')
    expect(result.comment).toContain('removed')
  })

  it('should handle ellipsis', () => {
    const result = parseFileTreeNodeInfo('…')
    expect(result.type).toBe('file')
  })
})

describe('parseFileTreeRawContent', () => {
  it('should parse simple flat structure', () => {
    const content = '- file1.ts\n- file2.ts\n- file3.ts'
    const result = parseFileTreeRawContent(content)
    expect(result).toHaveLength(3)
    expect(result[0]?.filename).toBe('file1.ts')
  })

  it('should parse nested folder structure', () => {
    const content = '- src/\n  - index.ts\n  - utils/\n    - helper.ts\n- package.json'
    const result = parseFileTreeRawContent(content)
    expect(result).toHaveLength(2)
    // First node is src/ folder
    expect(result[0]?.filename).toBe('src')
    expect(result[0]?.type).toBe('folder')
    expect(result[0]?.children).toHaveLength(2)
    // Second node is package.json
    expect(result[1]?.filename).toBe('package.json')
  })

  it('should parse files with annotations', () => {
    const content = '- ++ added.ts\n- -- removed.ts\n- **focus.ts**'
    const result = parseFileTreeRawContent(content)
    expect(result).toHaveLength(3)
  })

  it('should handle empty content', () => {
    const result = parseFileTreeRawContent('')
    expect(result).toHaveLength(0)
  })

  it('should handle deeply nested structure', () => {
    const content = '- a\n  - b\n    - c\n      - d.ts'
    const result = parseFileTreeRawContent(content)
    expect(result).toHaveLength(1)
    let node = result[0]!
    expect(node.filename).toBe('a')
    node = node.children[0]!
    expect(node.filename).toBe('b')
    node = node.children[0]!
    expect(node.filename).toBe('c')
    node = node.children[0]!
    expect(node.filename).toBe('d.ts')
  })
})

describe('fileTreeMarkdownPlugin', () => {
  it('should render file tree container', () => {
    const md = new MarkdownIt()
    md.use(fileTreeMarkdownPlugin)

    const result = md.render('::: file-tree\n- src/\n  - index.ts\n- package.json\n:::')
    expect(result).toContain('VPFileTree')
    expect(result).toContain('VPFileTreeNode')
  })

  it('should render file tree with title', () => {
    const md = new MarkdownIt()
    md.use(fileTreeMarkdownPlugin)

    const result = md.render('::: file-tree title="Project"\n- src/\n- package.json\n:::')
    expect(result).toContain('VPFileTree')
  })

  it('should handle empty file tree', () => {
    const md = new MarkdownIt()
    md.use(fileTreeMarkdownPlugin)

    const result = md.render('::: file-tree\n:::')
    expect(result).toBeDefined()
  })
})
