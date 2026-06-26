import { describe, expect, it } from 'vitest'
import { parseContentWithContainer } from '../src/node/parseContentWithContainer.js'
import { parseContentWithFence } from '../src/node/parseContentWithFence.js'

// =============================================================================
// parseContentWithContainer
// =============================================================================
describe('parseContentWithContainer', () => {
  it('解析简单扁平结构', () => {
    const content = '- file1.ts\n- file2.ts\n- file3.ts'
    const result = parseContentWithContainer(content)
    expect(result).toHaveLength(3)
    expect(result[0]?.filename).toBe('file1.ts')
  })

  it('解析嵌套文件夹结构', () => {
    const content = '- src/\n  - index.ts\n  - utils/\n    - helper.ts\n- package.json'
    const result = parseContentWithContainer(content)
    expect(result).toHaveLength(2)
    expect(result[0]?.filename).toBe('src')
    expect(result[0]?.type).toBe('folder')
    expect(result[0]?.children).toHaveLength(2)
    expect(result[1]?.filename).toBe('package.json')
  })

  it('解析带标注的文件', () => {
    const content = '- ++ added.ts\n- -- removed.ts\n- **focus.ts**'
    const result = parseContentWithContainer(content)
    expect(result).toHaveLength(3)
  })

  it('空内容返回空数组', () => {
    const result = parseContentWithContainer('')
    expect(result).toHaveLength(0)
  })

  it('深层嵌套结构', () => {
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

  // ---- 额外边界测试 ----
  it('不匹配 - 前缀的行被跳过', () => {
    const content = '- file1.ts\nplain text\n- file2.ts'
    const result = parseContentWithContainer(content)
    expect(result).toHaveLength(2)
    expect(result[0]?.filename).toBe('file1.ts')
    expect(result[1]?.filename).toBe('file2.ts')
  })

  it('全部行都不匹配 - 返回空数组', () => {
    const content = 'no dash here\nstill no dash'
    const result = parseContentWithContainer(content)
    expect(result).toHaveLength(0)
  })

  it('缩进回退到更浅层级(兄弟节点)', () => {
    const content = '- a\n  - a1\n  - a2\n- b\n  - b1'
    const result = parseContentWithContainer(content)
    expect(result).toHaveLength(2)
    expect(result[0]?.filename).toBe('a')
    expect(result[0]?.children).toHaveLength(2)
    expect(result[0]?.children[0]?.filename).toBe('a1')
    expect(result[0]?.children[1]?.filename).toBe('a2')
    expect(result[1]?.filename).toBe('b')
    expect(result[1]?.children).toHaveLength(1)
    expect(result[1]?.children[0]?.filename).toBe('b1')
  })

  it('跳过多个层级直接回退', () => {
    const content = '- a\n  - b\n    - c\n- d'
    const result = parseContentWithContainer(content)
    expect(result).toHaveLength(2)
    expect(result[0]?.filename).toBe('a')
    expect(result[0]?.children[0]?.filename).toBe('b')
    expect(result[0]?.children[0]?.children[0]?.filename).toBe('c')
    expect(result[1]?.filename).toBe('d')
  })

  it('叶子文件夹(无子项的文件夹)', () => {
    const content = '- empty-folder/\n- file.ts'
    const result = parseContentWithContainer(content)
    expect(result).toHaveLength(2)
    expect(result[0]?.filename).toBe('empty-folder')
    expect(result[0]?.type).toBe('folder')
    expect(result[0]?.children).toHaveLength(0)
  })

  it('仅包含空行和空格的内容', () => {
    const result = parseContentWithContainer('  \n  \n  ')
    expect(result).toHaveLength(0)
  })

  it('内容末尾有多余换行', () => {
    const content = '- file.ts\n\n\n'
    const result = parseContentWithContainer(content)
    expect(result).toHaveLength(1)
    expect(result[0]?.filename).toBe('file.ts')
  })

  it('多级缩进中有注释', () => {
    const content = '- src/ # source\n  - index.ts # entry\n  - utils/ # utilities\n    - helper.ts # helper functions'
    const result = parseContentWithContainer(content)
    expect(result).toHaveLength(1)
    expect(result[0]?.filename).toBe('src')
    expect(result[0]?.comment).toContain('source')
    expect(result[0]?.children[0]?.filename).toBe('index.ts')
    expect(result[0]?.children[0]?.comment).toContain('entry')
    expect(result[0]?.children[1]?.filename).toBe('utils')
    expect(result[0]?.children[1]?.comment).toContain('utilities')
    expect(result[0]?.children[1]?.children[0]?.filename).toBe('helper.ts')
    expect(result[0]?.children[1]?.children[0]?.comment).toContain('helper functions')
  })

  it('以非零缩进开头的内容', () => {
    // 第一行缩进为基准，后续行相对计算
    const content = '    - root-file.ts\n    - folder/\n      - nested.ts'
    const result = parseContentWithContainer(content)
    expect(result).toHaveLength(2)
    expect(result[0]?.filename).toBe('root-file.ts')
    expect(result[1]?.filename).toBe('folder')
    expect(result[1]?.children).toHaveLength(1)
    expect(result[1]?.children[0]?.filename).toBe('nested.ts')
  })
})

// =============================================================================
// parseContentWithFence
// =============================================================================
describe('parseContentWithFence', () => {
  it('解析简单扁平树输出(含根点)', () => {
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

  it('解析嵌套文件夹结构', () => {
    const input = `.
├── src
│   ├── index.ts
│   └── utils.ts
└── package.json
`
    const result = parseContentWithFence(input)
    expect(result).toHaveLength(2)
    expect(result[0]?.filename).toBe('src')
    expect(result[0]?.type).toBe('folder')
    expect(result[0]?.level).toBe(0)
    expect(result[0]?.children).toHaveLength(2)
    expect(result[0]?.children[0]?.filename).toBe('index.ts')
    expect(result[0]?.children[0]?.level).toBe(1)
    expect(result[0]?.children[1]?.filename).toBe('utils.ts')
    expect(result[0]?.children[1]?.level).toBe(1)
    expect(result[1]?.filename).toBe('package.json')
    expect(result[1]?.type).toBe('file')
    expect(result[1]?.level).toBe(0)
  })

  it('深层嵌套结构', () => {
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

  it('# 后内联注释', () => {
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

  it('空内容返回空数组', () => {
    const result = parseContentWithFence('')
    expect(result).toHaveLength(0)
  })

  it('无根点的树输出', () => {
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

  it('有子节点的自动检测为文件夹', () => {
    const input = `.
├── myfolder
│   └── child.ts
`
    const result = parseContentWithFence(input)
    expect(result).toHaveLength(1)
    expect(result[0]?.filename).toBe('myfolder')
    expect(result[0]?.type).toBe('folder')
  })

  it('同级混合结构', () => {
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
    expect(result).toHaveLength(3)
    const src = result[0]!
    expect(src.filename).toBe('src')
    expect(src.children).toHaveLength(3)
    const components = src.children[1]!
    expect(components.filename).toBe('components')
    expect(components.type).toBe('folder')
    expect(components.children).toHaveLength(2)
    const utils = src.children[2]!
    expect(utils.filename).toBe('utils')
    expect(utils.type).toBe('folder')
    expect(utils.children).toHaveLength(2)
  })

  it('完整示例', () => {
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
    expect(result).toHaveLength(5)
    const src = result[3]!
    expect(src.filename).toBe('src')
    expect(src.type).toBe('folder')
    expect(src.children).toHaveLength(2)
    const client = src.children[0]!
    expect(client.filename).toBe('client')
    expect(client.type).toBe('folder')
    expect(client.children).toHaveLength(4)
    const node = src.children[1]!
    expect(node.filename).toBe('node')
    expect(node.type).toBe('folder')
    expect(node.children).toHaveLength(2)
    expect(node.children[0]?.filename).toBe('fileTreePlugin.ts')
    expect(node.children[1]?.filename).toBe('index.ts')
    expect(result[4]?.filename).toBe('tsdown.config.ts')
  })

  it('** 聚焦标记', () => {
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

  it('++ 和 -- 差异标记', () => {
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

  it('尾部斜杠标记显式文件夹', () => {
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
    expect(result[0]?.expanded).toBe(false)
    expect(result[1]?.filename).toBe('docs')
    expect(result[1]?.type).toBe('folder')
    expect(result[1]?.expanded).toBe(false)
  })

  it('跳过空行', () => {
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

  it('仅根点无内容', () => {
    const result = parseContentWithFence('.')
    expect(result).toHaveLength(0)
  })

  it('仅空白字符', () => {
    const result = parseContentWithFence('   \n  \n  ')
    expect(result).toHaveLength(0)
  })

  // ---- 额外边界测试 ----
  it('跳过与树格式不匹配的行', () => {
    const input = `.
├── file1.ts
some random text
├── file2.ts
`
    const result = parseContentWithFence(input)
    expect(result).toHaveLength(2)
    expect(result[0]?.filename).toBe('file1.ts')
    expect(result[1]?.filename).toBe('file2.ts')
  })

  it('根点后有空格', () => {
    const input = `.
├── file.ts`
    const result = parseContentWithFence(input)
    expect(result).toHaveLength(1)
    expect(result[0]?.filename).toBe('file.ts')
  })

  it('缩进回退到较浅层级', () => {
    const input = `.
├── a
│   ├── a1
│   └── a2
├── b
└── c
`
    const result = parseContentWithFence(input)
    expect(result).toHaveLength(3)
    expect(result[0]?.filename).toBe('a')
    expect(result[0]?.children).toHaveLength(2)
    expect(result[1]?.filename).toBe('b')
    expect(result[2]?.filename).toBe('c')
  })

  it('跳过非树格式行(前缀无树字符)', () => {
    const input = `.
├── valid.ts
not-a-tree-line
└── another.ts
`
    const result = parseContentWithFence(input)
    expect(result).toHaveLength(2)
  })

  it('行的内容只包含缩进前缀而无实际文件名时不匹配regex被跳过', () => {
    // ├── 后面没有内容，regex 的 .+ 要求至少一个字符，因此不匹配
    const input = `.
├── valid.ts
├──
└── another.ts
`
    const result = parseContentWithFence(input)
    // 中间的行被跳过，只有 valid.ts 和 another.ts
    expect(result).toHaveLength(2)
    expect(result[0]?.filename).toBe('valid.ts')
    expect(result[1]?.filename).toBe('another.ts')
  })

  it('文件类型节点获得子节点时自动提升为文件夹', () => {
    const input = `.
├── parent
│   └── child.ts
`
    const result = parseContentWithFence(input)
    expect(result).toHaveLength(1)
    // parent 没有标记为文件夹，但因为有 child，自动变为 folder
    expect(result[0]?.filename).toBe('parent')
    expect(result[0]?.type).toBe('folder')
  })
})
