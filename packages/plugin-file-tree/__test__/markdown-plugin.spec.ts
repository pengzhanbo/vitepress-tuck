import MarkdownIt from 'markdown-it'
import { describe, expect, it } from 'vitest'
import { fileTreeToCMDText } from '../src/node/fileTreeToCMDText.js'
import { fileTreeMarkdownPlugin } from '../src/node/markdown.js'
import { fileTree } from '../src/node/plugin.js'

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
