import MarkdownIt from 'markdown-it'
import { describe, expect, it } from 'vitest'
import { parseContentWithContainer } from '../src/node/container.js'
import { parseContentWithFence } from '../src/node/fence.js'
import { fileTreeMarkdownPlugin } from '../src/node/fileTreePlugin.js'
import { parseNodeInfo } from '../src/node/parseNodeInfo.js'

describe('parseNodeInfo', () => {
  it('should parse a simple filename', () => {
    const result = parseNodeInfo('index.ts')
    expect(result.filename).toBe('index.ts')
    expect(result.type).toBe('file')
  })

  it('should detect folder by trailing slash', () => {
    const result = parseNodeInfo('src/')
    expect(result.filename).toBe('src')
    expect(result.type).toBe('folder')
    expect(result.expanded).toBe(false)
  })

  it('should detect added diff marker', () => {
    const result = parseNodeInfo('++ new-file.ts')
    expect(result.filename).toBe('new-file.ts')
    expect(result.diff).toBe('add')
  })

  it('should detect removed diff marker', () => {
    const result = parseNodeInfo('-- old-file.ts')
    expect(result.filename).toBe('old-file.ts')
    expect(result.diff).toBe('remove')
  })

  it('should detect focus marker', () => {
    const result = parseNodeInfo('**main.ts**')
    expect(result.filename).toBe('main.ts')
    expect(result.focus).toBe(true)
  })

  it('should extract comment after #', () => {
    const result = parseNodeInfo('file.ts # this is a comment')
    expect(result.filename).toBe('file.ts')
    expect(result.comment).toContain('this is a comment')
  })

  it('should handle comment with special characters', () => {
    const result = parseNodeInfo('file.ts # a **bold** comment')
    expect(result.filename).toBe('file.ts')
    expect(result.comment).toContain('**bold**')
  })

  it('should handle add + comment', () => {
    const result = parseNodeInfo('++ new-file.ts # new file added')
    expect(result.filename).toBe('new-file.ts')
    expect(result.diff).toBe('add')
    expect(result.comment).toContain('new file added')
  })

  it('should handle remove + comment', () => {
    const result = parseNodeInfo('-- old-file.ts # removed')
    expect(result.filename).toBe('old-file.ts')
    expect(result.diff).toBe('remove')
    expect(result.comment).toContain('removed')
  })

  it('should handle ellipsis', () => {
    const result = parseNodeInfo('…')
    expect(result.type).toBe('file')
  })
})

describe('parseContentWithContainer', () => {
  it('should parse simple flat structure', () => {
    const content = '- file1.ts\n- file2.ts\n- file3.ts'
    const result = parseContentWithContainer(content)
    expect(result).toHaveLength(3)
    expect(result[0]?.filename).toBe('file1.ts')
  })

  it('should parse nested folder structure', () => {
    const content = '- src/\n  - index.ts\n  - utils/\n    - helper.ts\n- package.json'
    const result = parseContentWithContainer(content)
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
    const result = parseContentWithContainer(content)
    expect(result).toHaveLength(3)
  })

  it('should handle empty content', () => {
    const result = parseContentWithContainer('')
    expect(result).toHaveLength(0)
  })

  it('should handle deeply nested structure', () => {
    const content = '- a\n  - b\n    - c\n      - d.ts'
    const result = parseContentWithContainer(content)
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

describe('parseContentWithFence', () => {
  it('should parse simple flat tree output with root dot', () => {
    const input = `.
├── package.json
├── README.md
└── tsdown.config.ts
`
    const result = parseContentWithFence(input)
    expect(result).toHaveLength(3)
    expect(result[0]?.filename).toBe('package.json')
    expect(result[0]?.type).toBe('file')
    expect(result[0]?.level).toBe(0)
    expect(result[1]?.filename).toBe('README.md')
    expect(result[1]?.type).toBe('file')
    expect(result[2]?.filename).toBe('tsdown.config.ts')
    expect(result[2]?.type).toBe('file')
  })

  it('should parse nested folder structure', () => {
    const input = `.
├── src
│   ├── index.ts
│   └── utils.ts
└── package.json
`
    const result = parseContentWithFence(input)
    expect(result).toHaveLength(2)

    // src folder
    expect(result[0]?.filename).toBe('src')
    expect(result[0]?.type).toBe('folder')
    expect(result[0]?.level).toBe(0)
    expect(result[0]?.children).toHaveLength(2)
    expect(result[0]?.children[0]?.filename).toBe('index.ts')
    expect(result[0]?.children[0]?.level).toBe(1)
    expect(result[0]?.children[1]?.filename).toBe('utils.ts')
    expect(result[0]?.children[1]?.level).toBe(1)

    // package.json file
    expect(result[1]?.filename).toBe('package.json')
    expect(result[1]?.type).toBe('file')
    expect(result[1]?.level).toBe(0)
  })

  it('should handle deeply nested structure', () => {
    const input = `.
├── a
│   └── b
│       └── c
│           └── d.ts
`
    const result = parseContentWithFence(input)
    expect(result).toHaveLength(1)

    let node = result[0]!
    expect(node.filename).toBe('a')
    expect(node.type).toBe('folder')
    expect(node.level).toBe(0)

    node = node.children[0]!
    expect(node.filename).toBe('b')
    expect(node.type).toBe('folder')
    expect(node.level).toBe(1)

    node = node.children[0]!
    expect(node.filename).toBe('c')
    expect(node.type).toBe('folder')
    expect(node.level).toBe(2)

    node = node.children[0]!
    expect(node.filename).toBe('d.ts')
    expect(node.type).toBe('file')
    expect(node.level).toBe(3)
  })

  it('should handle inline comments after #', () => {
    const input = `.
├── package.json # project config
├── src # source code directory
└── README.md # readme file
`
    const result = parseContentWithFence(input)
    expect(result).toHaveLength(3)
    expect(result[0]?.filename).toBe('package.json')
    expect(result[0]?.comment).toContain('project config')
    expect(result[1]?.filename).toBe('src')
    expect(result[1]?.comment).toContain('source code directory')
    expect(result[2]?.filename).toBe('README.md')
    expect(result[2]?.comment).toContain('readme file')
  })

  it('should handle empty content', () => {
    const result = parseContentWithFence('')
    expect(result).toHaveLength(0)
  })

  it('should handle content without root dot', () => {
    const input = `├── file1.ts
├── folder
│   └── nested.ts
└── file2.ts`
    const result = parseContentWithFence(input)
    expect(result).toHaveLength(3)
    expect(result[0]?.filename).toBe('file1.ts')
    expect(result[1]?.filename).toBe('folder')
    expect(result[1]?.type).toBe('folder')
    expect(result[1]?.children).toHaveLength(1)
    expect(result[2]?.filename).toBe('file2.ts')
  })

  it('should auto-detect folder type when node has children', () => {
    const input = `.
├── myfolder
│   └── child.ts
`
    const result = parseContentWithFence(input)
    expect(result).toHaveLength(1)
    expect(result[0]?.filename).toBe('myfolder')
    // Should be auto-detected as folder because it has children
    expect(result[0]?.type).toBe('folder')
  })

  it('should handle mixed siblings at same level', () => {
    const input = `.
├── src
│   ├── index.ts
│   ├── components
│   │   ├── Header.vue
│   │   └── Footer.vue
│   └── utils
│       ├── format.ts
│       └── validate.ts
├── package.json
└── tsconfig.json
`
    const result = parseContentWithFence(input)
    expect(result).toHaveLength(3) // src, package.json, tsconfig.json

    const src = result[0]!
    expect(src.filename).toBe('src')
    expect(src.children).toHaveLength(3) // index.ts, components, utils

    const components = src.children[1]!
    expect(components.filename).toBe('components')
    expect(components.type).toBe('folder')
    expect(components.children).toHaveLength(2)

    const utils = src.children[2]!
    expect(utils.filename).toBe('utils')
    expect(utils.type).toBe('folder')
    expect(utils.children).toHaveLength(2)
  })

  it('should handle the full example from task description', () => {
    const input = `.
├── node_modules
├── package.json
├── README.md
├── src
│   ├── client
│   │   ├── index.ts
│   │   ├── style.css
│   │   ├── VPFileTree.vue
│   │   └── VPFileTreeNode.vue
│   └── node
│       ├── fileTreePlugin.ts
│       └── index.ts
└── tsdown.config.ts
`
    const result = parseContentWithFence(input)
    expect(result).toHaveLength(5) // node_modules, package.json, README.md, src, tsdown.config.ts

    // src folder
    const src = result[3]!
    expect(src.filename).toBe('src')
    expect(src.type).toBe('folder')
    expect(src.children).toHaveLength(2) // client, node

    // client folder
    const client = src.children[0]!
    expect(client.filename).toBe('client')
    expect(client.type).toBe('folder')
    expect(client.children).toHaveLength(4)

    // node folder
    const node = src.children[1]!
    expect(node.filename).toBe('node')
    expect(node.type).toBe('folder')
    expect(node.children).toHaveLength(2)
    expect(node.children[0]?.filename).toBe('fileTreePlugin.ts')
    expect(node.children[1]?.filename).toBe('index.ts')

    // last item
    expect(result[4]?.filename).toBe('tsdown.config.ts')
  })

  it('should handle files with focus markers', () => {
    const input = `.
├── **important.ts**
├── normal.ts
└── src
    └── **focus-utils.ts**
`
    const result = parseContentWithFence(input)
    expect(result).toHaveLength(3)
    expect(result[0]?.filename).toBe('important.ts')
    expect(result[0]?.focus).toBe(true)
    expect(result[1]?.filename).toBe('normal.ts')
    expect(result[1]?.focus).toBe(false)
    expect(result[2]?.children[0]?.filename).toBe('focus-utils.ts')
    expect(result[2]?.children[0]?.focus).toBe(true)
  })

  it('should handle files with diff markers', () => {
    const input = `.
├── ++ new-file.ts
├── -- removed-file.ts
└── unchanged.ts
`
    const result = parseContentWithFence(input)
    expect(result).toHaveLength(3)
    expect(result[0]?.filename).toBe('new-file.ts')
    expect(result[0]?.diff).toBe('add')
    expect(result[1]?.filename).toBe('removed-file.ts')
    expect(result[1]?.diff).toBe('remove')
    expect(result[2]?.filename).toBe('unchanged.ts')
    expect(result[2]?.diff).toBeUndefined()
  })

  it('should handle folders with trailing slash', () => {
    const input = `.
├── src/
│   └── index.ts
└── docs/
    └── guide.md
`
    const result = parseContentWithFence(input)
    expect(result).toHaveLength(2)
    expect(result[0]?.filename).toBe('src')
    expect(result[0]?.type).toBe('folder')
    expect(result[0]?.expanded).toBe(false) // explicit folders default to collapsed
    expect(result[1]?.filename).toBe('docs')
    expect(result[1]?.type).toBe('folder')
    expect(result[1]?.expanded).toBe(false)
  })

  it('should skip blank lines in the input', () => {
    const input = `.
├── file1.ts

├── folder
│   └── child.ts

└── file2.ts
`
    const result = parseContentWithFence(input)
    expect(result).toHaveLength(3)
    expect(result[0]?.filename).toBe('file1.ts')
    expect(result[1]?.filename).toBe('folder')
    expect(result[1]?.children).toHaveLength(1)
    expect(result[2]?.filename).toBe('file2.ts')
  })

  it('should handle only root dot', () => {
    const result = parseContentWithFence('.')
    expect(result).toHaveLength(0)
  })

  it('should return empty array for content with only whitespace', () => {
    const result = parseContentWithFence('   \n  \n  ')
    expect(result).toHaveLength(0)
  })
})
