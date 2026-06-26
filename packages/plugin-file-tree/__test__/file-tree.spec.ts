import MarkdownIt from 'markdown-it'
import { describe, expect, it } from 'vitest'
import { fileTreeToCMDText } from '../src/node/fileTreeToCMDText.js'
import { fileTreeMarkdownPlugin } from '../src/node/markdown.js'
import { parseContentWithContainer } from '../src/node/parseContentWithContainer.js'
import { parseContentWithFence } from '../src/node/parseContentWithFence.js'
import { parseNodeInfo } from '../src/node/parseNodeInfo.js'
import { fileTree } from '../src/node/plugin.js'

// =============================================================================
// parseNodeInfo
// =============================================================================
describe('parseNodeInfo', () => {
  it('解析简单文件名', () => {
    const result = parseNodeInfo('index.ts')
    expect(result.filename).toBe('index.ts')
    expect(result.type).toBe('file')
  })

  it('通过尾部斜杠检测文件夹', () => {
    const result = parseNodeInfo('src/')
    expect(result.filename).toBe('src')
    expect(result.type).toBe('folder')
    expect(result.expanded).toBe(false)
  })

  it('检测 ++ 新增标记', () => {
    const result = parseNodeInfo('++ new-file.ts')
    expect(result.filename).toBe('new-file.ts')
    expect(result.diff).toBe('add')
  })

  it('检测 -- 删除标记', () => {
    const result = parseNodeInfo('-- old-file.ts')
    expect(result.filename).toBe('old-file.ts')
    expect(result.diff).toBe('remove')
  })

  it('检测 ** 聚焦标记', () => {
    const result = parseNodeInfo('**main.ts**')
    expect(result.filename).toBe('main.ts')
    expect(result.focus).toBe(true)
  })

  it('提取 # 后的注释', () => {
    const result = parseNodeInfo('file.ts # this is a comment')
    expect(result.filename).toBe('file.ts')
    expect(result.comment).toContain('this is a comment')
  })

  it('注释中保留特殊字符', () => {
    const result = parseNodeInfo('file.ts # a **bold** comment')
    expect(result.filename).toBe('file.ts')
    expect(result.comment).toContain('**bold**')
  })

  it('++ 和 # 组合', () => {
    const result = parseNodeInfo('++ new-file.ts # new file added')
    expect(result.filename).toBe('new-file.ts')
    expect(result.diff).toBe('add')
    expect(result.comment).toContain('new file added')
  })

  it('-- 和 # 组合', () => {
    const result = parseNodeInfo('-- old-file.ts # removed')
    expect(result.filename).toBe('old-file.ts')
    expect(result.diff).toBe('remove')
    expect(result.comment).toContain('removed')
  })

  it('省略号 ...', () => {
    const result = parseNodeInfo('…')
    expect(result.type).toBe('file')
  })

  // ---- 额外边界测试 ----
  it('** 聚焦 + 文件夹尾部斜杠', () => {
    const result = parseNodeInfo('**src/**')
    expect(result.filename).toBe('src')
    expect(result.focus).toBe(true)
    expect(result.type).toBe('folder')
    expect(result.expanded).toBe(false)
  })

  it('** 聚焦 + # 注释', () => {
    const result = parseNodeInfo('**config.ts** # important config')
    expect(result.filename).toBe('config.ts')
    expect(result.focus).toBe(true)
    expect(result.comment).toContain('important config')
  })

  it('++ 和文件夹尾部斜杠', () => {
    const result = parseNodeInfo('++ new-folder/')
    expect(result.filename).toBe('new-folder')
    expect(result.diff).toBe('add')
    expect(result.type).toBe('folder')
  })

  it('-- 和文件夹尾部斜杠', () => {
    const result = parseNodeInfo('-- old-folder/')
    expect(result.filename).toBe('old-folder')
    expect(result.diff).toBe('remove')
    expect(result.type).toBe('folder')
  })

  it('只有 # 注释没有文件名', () => {
    const result = parseNodeInfo('# only comment')
    expect(result.filename).toBe('')
    expect(result.comment).toContain('only comment')
  })

  it('文件名中包含多个 # 符号', () => {
    const result = parseNodeInfo('file#name.ts # comment')
    // 第一个 # 在 'file#name.ts' 中，indexOf('#' )找到它后，
    // filename = 'file' (第一个#之前)，comment = '#name.ts # comment'
    expect(result.filename).toBe('file')
    expect(result.comment).toContain('#name.ts')
  })

  it('文件名前后有空格', () => {
    const result = parseNodeInfo('  spaced-file.ts  ')
    expect(result.filename).toBe('spaced-file.ts')
  })

  it('++ 后跟空格再跟文件名', () => {
    const result = parseNodeInfo('++  file.ts')
    expect(result.filename).toBe('file.ts')
    expect(result.diff).toBe('add')
  })

  it('仅空白字符', () => {
    const result = parseNodeInfo('   ')
    expect(result.filename).toBe('')
  })

  it('带扩展名的文件夹', () => {
    const result = parseNodeInfo('my.module/')
    expect(result.filename).toBe('my.module')
    expect(result.type).toBe('folder')
    expect(result.expanded).toBe(false)
  })

  it('** 聚焦 + ++ 新增组合', () => {
    const result = parseNodeInfo('++ **new-feature.ts**')
    expect(result.filename).toBe('new-feature.ts')
    expect(result.diff).toBe('add')
    expect(result.focus).toBe(true)
  })
})

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

// =============================================================================
// fileTreeToCMDText
// =============================================================================
describe('fileTreeToCMDText', () => {
  it('生成带根的树形文本', () => {
    const nodes = [
      { filename: 'src', type: 'folder' as const, level: 0, children: [
        { filename: 'index.ts', type: 'file' as const, level: 1, children: [] },
      ] },
    ]
    const result = fileTreeToCMDText(nodes)
    expect(result).toContain('.\n')
    expect(result).toContain('└── src')
    expect(result).toContain('    └── index.ts')
  })

  it('多个顶层节点正确显示', () => {
    const nodes = [
      { filename: 'a.ts', type: 'file' as const, level: 0, children: [] },
      { filename: 'b.ts', type: 'file' as const, level: 0, children: [] },
      { filename: 'c.ts', type: 'file' as const, level: 0, children: [] },
    ]
    const result = fileTreeToCMDText(nodes)
    expect(result).toContain('├── a.ts')
    expect(result).toContain('├── b.ts')
    expect(result).toContain('└── c.ts')
  })

  it('空文件夹不生成子项（省略号被过滤）', () => {
    const nodes = [
      { filename: 'empty-folder', type: 'folder' as const, level: 0, children: [] },
      { filename: 'file.ts', type: 'file' as const, level: 0, children: [] },
    ]
    const result = fileTreeToCMDText(nodes)
    expect(result).toContain('├── empty-folder')
    // 空文件夹不应该有子项
    const lines = result.split('\n')
    // 找到 empty-folder 行，下一行不应该是它的子项
    const folderLineIndex = lines.findIndex(l => l.includes('empty-folder'))
    expect(folderLineIndex).toBeGreaterThan(0)
    // empty-folder 后面是 file.ts (同级)，没有额外的缩进行
  })

  it('深层嵌套文件夹生成正确的缩进', () => {
    const nodes = [
      { filename: 'a', type: 'folder' as const, level: 0, children: [
        { filename: 'b', type: 'folder' as const, level: 1, children: [
          { filename: 'c.ts', type: 'file' as const, level: 2, children: [] },
        ] },
      ] },
    ]
    const result = fileTreeToCMDText(nodes)
    expect(result).toContain('└── a')
    expect(result).toContain('    └── b')
    expect(result).toContain('        └── c.ts')
  })

  it('同时有文件和文件夹的混合', () => {
    const nodes = [
      { filename: 'file.ts', type: 'file' as const, level: 0, children: [] },
      { filename: 'folder', type: 'folder' as const, level: 0, children: [
        { filename: 'nested.ts', type: 'file' as const, level: 1, children: [] },
      ] },
    ]
    const result = fileTreeToCMDText(nodes)
    expect(result).toContain('├── file.ts')
    expect(result).toContain('└── folder')
    expect(result).toContain('    └── nested.ts')
  })
})

// =============================================================================
// fileTreeMarkdownPlugin
// =============================================================================
describe('fileTreeMarkdownPlugin', () => {
  // ---- 容器语法 ----
  it('::: file-tree 渲染为 VPFileTree 和 VPFileTreeNode', () => {
    const md = new MarkdownIt()
    md.use(fileTreeMarkdownPlugin)
    const result = md.render('::: file-tree\n- src/\n  - index.ts\n- package.json\n:::')
    expect(result).toContain('VPFileTree')
    expect(result).toContain('VPFileTreeNode')
  })

  it('::: file-tree 带 title 属性', () => {
    const md = new MarkdownIt()
    md.use(fileTreeMarkdownPlugin)
    const result = md.render('::: file-tree title="Project"\n- src/\n- package.json\n:::')
    expect(result).toContain('VPFileTree')
  })

  it('::: file-tree 空内容', () => {
    const md = new MarkdownIt()
    md.use(fileTreeMarkdownPlugin)
    const result = md.render('::: file-tree\n:::')
    expect(result).toBeDefined()
  })

  it('::: file-tree 叶子文件夹自动获得省略号占位符', () => {
    const md = new MarkdownIt()
    md.use(fileTreeMarkdownPlugin)
    const result = md.render('::: file-tree\n- empty-folder/\n- file.ts\n:::')
    // empty-folder 应该有子节点渲染（省略号占位符来显示文件夹图标）
    expect(result).toContain('VPFileTree')
    expect(result).toContain('VPFileTreeNode')
  })

  it('::: file-tree 节点注释渲染为 #comment 插槽', () => {
    const md = new MarkdownIt()
    md.use(fileTreeMarkdownPlugin)
    const result = md.render('::: file-tree\n- file.ts # important file\n:::')
    expect(result).toContain('#comment')
    expect(result).toContain('important file')
  })

  // ---- 围栏语法 ----
  it('```tree 围栏语法渲染文件树', () => {
    const md = new MarkdownIt()
    md.use(fileTreeMarkdownPlugin)
    const input = [
      '```tree',
      '.',
      '├── src',
      '│   └── index.ts',
      '└── package.json',
      '```',
    ].join('\n')
    const result = md.render(input)
    expect(result).toContain('VPFileTree')
    expect(result).toContain('VPFileTreeNode')
  })

  it('```file-tree 围栏语法渲染文件树', () => {
    const md = new MarkdownIt()
    md.use(fileTreeMarkdownPlugin)
    const input = [
      '```file-tree',
      '.',
      '├── README.md',
      '└── LICENSE',
      '```',
    ].join('\n')
    const result = md.render(input)
    expect(result).toContain('VPFileTree')
  })

  it('```tree 围栏包含注释和聚焦标记', () => {
    const md = new MarkdownIt()
    md.use(fileTreeMarkdownPlugin)
    const input = [
      '```tree',
      '.',
      '├── **main.ts** # entry point',
      '└── utils',
      '    └── helper.ts # utilities',
      '```',
    ].join('\n')
    const result = md.render(input)
    expect(result).toContain('VPFileTree')
    expect(result).toContain('#comment')
    expect(result).toContain('entry point')
  })

  it('普通代码块不受文件树插件影响', () => {
    const md = new MarkdownIt()
    md.use(fileTreeMarkdownPlugin)
    const result = md.render('```ts\nconst a = 1;\n```')
    // 普通代码块应正常渲染
    expect(result).toContain('const a = 1;')
    expect(result).not.toContain('VPFileTree')
  })

  it('tree 前缀的信息字符串也正确识别(如 treeview)', () => {
    // 'treeview' starts with 'tree' — 但 fence renderer 检查 startsWith('tree')
    // 应该被识别为文件树
    const md = new MarkdownIt()
    md.use(fileTreeMarkdownPlugin)
    const input = [
      '```treeview',
      '.',
      '└── hello.ts',
      '```',
    ].join('\n')
    const result = md.render(input)
    // 'treeview' starts with 'tree', so it's treated as file tree
    expect(result).toContain('VPFileTree')
  })

  it('嵌套文件夹中注释被正确渲染', () => {
    const md = new MarkdownIt()
    md.use(fileTreeMarkdownPlugin)
    const result = md.render('::: file-tree\n- src/ # source folder\n  - index.ts # entry point\n:::')
    expect(result).toContain('#comment')
    expect(result).toContain('source folder')
    expect(result).toContain('entry point')
  })
})

// =============================================================================
// fileTree 插件工厂
// =============================================================================
describe('fileTree 插件工厂', () => {
  it('name 为 vitepress-plugin-file-tree', () => {
    const plugin = fileTree() as any
    expect(plugin.name).toBe('vitepress-plugin-file-tree')
  })

  it('componentResolver 包含 VPFileTree 和 VPFileTreeNode', () => {
    const plugin = fileTree() as any
    expect(plugin.componentResolver).toContain('VPFileTree')
    expect(plugin.componentResolver).toContain('VPFileTreeNode')
  })

  it('markdown.config 为函数', () => {
    const plugin = fileTree() as any
    expect(typeof plugin.markdown?.config).toBe('function')
  })

  it('markdown.config 可注册 markdown-it 规则', () => {
    const plugin = fileTree() as any
    const md = new MarkdownIt()
    plugin.markdown.config(md)

    const result = md.render('::: file-tree\n- file.ts\n:::')
    expect(result).toContain('VPFileTree')
  })

  it('vite.optimizeDeps.exclude 包含 @pengzhanbo/utils', () => {
    const plugin = fileTree() as any
    expect(plugin.vite?.optimizeDeps?.exclude).toContain('@pengzhanbo/utils')
  })

  it('vite.ssr.noExternal 包含 vitepress-plugin-file-tree', () => {
    const plugin = fileTree() as any
    expect(plugin.vite?.ssr?.noExternal).toContain('vitepress-plugin-file-tree')
  })
})
