import MarkdownIt from 'markdown-it'
import { describe, expect, it } from 'vitest'
import { collapsedLinesMarkdownPlugin } from '../src/node/markdown'
import { collapsedLines } from '../src/node/plugin'
import { resolveCollapsedLines } from '../src/node/resolveCollapsedLine'

/**
 * Create a VitePress-style fence renderer that wraps code blocks in
 * `<div class="language-xxx">...</div>` format, matching what the
 * plugin's HTML transformations expect.
 *
 * 创建 VitePress 风格的 fence 渲染器，将代码块包装为
 * `<div class="language-xxx">...</div>` 格式，与插件的 HTML 转换逻辑匹配。
 */
function createVitepressStyleFenceRenderer(md: MarkdownIt): void {
  const { utils } = md
  md.renderer.rules.fence = (tokens, idx) => {
    const token = tokens[idx]
    const info = token.info ? utils.unescapeAll(token.info).trim() : ''
    const lang = info ? info.split(/\s+/)[0] || '' : ''
    const content = utils.escapeHtml(token.content)
    const langClass = lang ? ` class="language-${lang}"` : ''
    return `<div${langClass}><pre><code>${content}</code></pre></div>`
  }
}

/**
 * Create a VitePress-style fence renderer where the `<div>` already has an
 * inline `style` attribute (to test the style-merging branch in the plugin).
 */
function createVitepressStyleFenceRendererWithStyle(md: MarkdownIt): void {
  const { utils } = md
  md.renderer.rules.fence = (tokens, idx) => {
    const token = tokens[idx]
    const info = token.info ? utils.unescapeAll(token.info).trim() : ''
    const lang = info ? info.split(/\s+/)[0] || '' : ''
    const content = utils.escapeHtml(token.content)
    return `<div class="language-${lang}" style="color:red"><pre><code>${content}</code></pre></div>`
  }
}

/**
 * Generate a multi-line code snippet with the given number of lines.
 */
function generateCodeLines(count: number): string {
  return Array.from({ length: count }, (_, i) => `const a${i} = ${i};`).join('\n')
}

// =============================================================================
// resolveCollapsedLines 单元测试
// =============================================================================
describe('resolveCollapsedLines', () => {
  it(':collapsed-lines=num 返回数字', () => {
    expect(resolveCollapsedLines('js :collapsed-lines=10')).toBe(10)
  })

  it(':collapsed-lines=0 返回 0', () => {
    expect(resolveCollapsedLines('ts :collapsed-lines=0')).toBe(0)
  })

  it(':collapsed-lines 无值返回 true', () => {
    expect(resolveCollapsedLines('ts :collapsed-lines')).toBe(true)
  })

  it(':no-collapsed-lines 返回 false', () => {
    expect(resolveCollapsedLines('js :no-collapsed-lines')).toBe(false)
  })

  it('无指令返回 null', () => {
    expect(resolveCollapsedLines('js')).toBeNull()
  })

  it('空字符串返回 null', () => {
    expect(resolveCollapsedLines('')).toBeNull()
  })

  it(':collapsed-lines=num 优先于其他指令', () => {
    // :collapsed-lines=5 先匹配，返回数字
    expect(resolveCollapsedLines('js :collapsed-lines=5 :no-collapsed-lines')).toBe(5)
  })

  it('大数字正常返回', () => {
    expect(resolveCollapsedLines('py :collapsed-lines=999')).toBe(999)
  })

  it('非数字值不匹配 =num 模式，退回到 :collapsed-lines', () => {
    // :collapsed-lines=abc 中的 =abc 不匹配 (\d+)，所以继续匹配到 :collapsed-lines → true
    expect(resolveCollapsedLines('js :collapsed-lines=abc')).toBe(true)
  })

  it('仅匹配完整单词边界', () => {
    // :collapsed-linesextra 不应该匹配
    expect(resolveCollapsedLines('js :collapsed-linesextra')).toBeNull()
  })

  it('info 中包含多个空格和制表符', () => {
    expect(resolveCollapsedLines('  js   :collapsed-lines=20  ')).toBe(20)
  })

  it('仅有指令无语言', () => {
    expect(resolveCollapsedLines(':collapsed-lines=5')).toBe(5)
  })
})

// =============================================================================
// collapsedLinesMarkdownPlugin 单元测试
// =============================================================================
describe('collapsedLinesMarkdownPlugin', () => {
  // ---- 完全禁用 ----
  it('options 为 "disable" 时完全禁用插件', () => {
    const md = new MarkdownIt()
    createVitepressStyleFenceRenderer(md)
    md.use(collapsedLinesMarkdownPlugin, 'disable')

    const result = md.render(`\`\`\`ts\n${generateCodeLines(20)}\n\`\`\``)
    // 禁用时不做任何处理，不包含 collapsed 相关类名
    expect(result).not.toContain('has-collapsed-lines')
    expect(result).not.toContain('collapsed-lines')
  })

  // ---- options=false: 不全局启用，但允许单块指令 ----
  it('options=false 时不全局启用，短代码正常渲染', () => {
    const md = new MarkdownIt()
    createVitepressStyleFenceRenderer(md)
    md.use(collapsedLinesMarkdownPlugin, false)

    const result = md.render('```ts\nconst a = 1;\n```')
    expect(result).toContain('const a = 1;')
    expect(result).not.toContain('has-collapsed-lines')
  })

  it('options=false 时可通过 :collapsed-lines=5 触发折叠', () => {
    const md = new MarkdownIt()
    createVitepressStyleFenceRenderer(md)
    md.use(collapsedLinesMarkdownPlugin, false)

    const result = md.render(`\`\`\`ts :collapsed-lines=5\n${generateCodeLines(20)}\n\`\`\``)
    expect(result).toContain('has-collapsed-lines')
    expect(result).toContain('collapsed')
    expect(result).toContain('<div class="collapsed-lines"></div>')
    expect(result).toContain('--vp-collapsed-lines:5;')
  })

  it('options=false 时 :collapsed-lines 无值使用默认阈值 15', () => {
    const md = new MarkdownIt()
    createVitepressStyleFenceRenderer(md)
    md.use(collapsedLinesMarkdownPlugin, false)

    const result = md.render(`\`\`\`ts :collapsed-lines\n${generateCodeLines(20)}\n\`\`\``)
    expect(result).toContain('has-collapsed-lines')
    expect(result).toContain('--vp-collapsed-lines:15;')
  })

  it('options=false 时 :no-collapsed-lines 不折叠', () => {
    const md = new MarkdownIt()
    createVitepressStyleFenceRenderer(md)
    md.use(collapsedLinesMarkdownPlugin, false)

    const result = md.render(`\`\`\`ts :no-collapsed-lines\n${generateCodeLines(20)}\n\`\`\``)
    expect(result).not.toContain('has-collapsed-lines')
  })

  // ---- options=number: 全局启用折叠 ----
  it('options=number 时超过阈值折叠代码块', () => {
    const md = new MarkdownIt()
    createVitepressStyleFenceRenderer(md)
    md.use(collapsedLinesMarkdownPlugin, 5)

    const result = md.render(`\`\`\`ts\n${generateCodeLines(20)}\n\`\`\``)
    expect(result).toContain('has-collapsed-lines collapsed')
    expect(result).toContain('<div class="collapsed-lines"></div>')
    expect(result).toContain('--vp-collapsed-lines:5;')
  })

  it('options=number 时不足阈值不折叠', () => {
    const md = new MarkdownIt()
    createVitepressStyleFenceRenderer(md)
    md.use(collapsedLinesMarkdownPlugin, 10)

    const result = md.render('```ts\nconst a = 1;\n```')
    expect(result).not.toContain('has-collapsed-lines')
  })

  it('边界：代码行数恰好等于阈值时触发折叠', () => {
    const md = new MarkdownIt()
    createVitepressStyleFenceRenderer(md)
    md.use(collapsedLinesMarkdownPlugin, 5)

    // 恰好 5 行代码
    const result = md.render(`\`\`\`ts\n${generateCodeLines(5)}\n\`\`\``)
    // >= startLines 触发折叠
    expect(result).toContain('has-collapsed-lines')
  })

  it('边界：代码行数不足阈值时不触发折叠', () => {
    const md = new MarkdownIt()
    createVitepressStyleFenceRenderer(md)
    md.use(collapsedLinesMarkdownPlugin, 5)

    // 3 行代码 (< 5, 即使加上 <code> 前缀行和尾行也不超过阈值)
    const result = md.render(`\`\`\`ts\n${generateCodeLines(3)}\n\`\`\``)
    expect(result).not.toContain('has-collapsed-lines')
  })

  it(':collapsed-lines=0 时任何代码块都触发折叠', () => {
    const md = new MarkdownIt()
    createVitepressStyleFenceRenderer(md)
    md.use(collapsedLinesMarkdownPlugin, false)

    const result = md.render(`\`\`\`ts :collapsed-lines=0\nconst a = 1;\n\`\`\``)
    // 阈值 0，单行代码 >= 0，触发折叠
    expect(result).toContain('has-collapsed-lines')
    expect(result).toContain('--vp-collapsed-lines:0;')
  })

  it('单块 :collapsed-lines 指令覆盖全局 options', () => {
    const md = new MarkdownIt()
    createVitepressStyleFenceRenderer(md)
    md.use(collapsedLinesMarkdownPlugin, 100) // 全局阈值很大，几乎不折叠

    // 单块指定 :collapsed-lines=3，覆盖全局
    const result = md.render(`\`\`\`ts :collapsed-lines=3\n${generateCodeLines(5)}\n\`\`\``)
    expect(result).toContain('--vp-collapsed-lines:3;')
  })

  it('单块 :no-collapsed-lines 覆盖全局的 number 选项', () => {
    const md = new MarkdownIt()
    createVitepressStyleFenceRenderer(md)
    md.use(collapsedLinesMarkdownPlugin, 5) // 全局启用

    const result = md.render(`\`\`\`ts :no-collapsed-lines\n${generateCodeLines(20)}\n\`\`\``)
    expect(result).not.toContain('has-collapsed-lines')
  })

  // ---- options=true: 使用默认阈值 15 ----
  it('options=true 时使用默认阈值 15', () => {
    const md = new MarkdownIt()
    createVitepressStyleFenceRenderer(md)
    md.use(collapsedLinesMarkdownPlugin, true)

    // 12 行 < 15（考虑 slice 额外行），不折叠
    const shortResult = md.render(`\`\`\`ts\n${generateCodeLines(12)}\n\`\`\``)
    expect(shortResult).not.toContain('has-collapsed-lines')

    // 20 行 >= 15，折叠
    const longResult = md.render(`\`\`\`ts\n${generateCodeLines(20)}\n\`\`\``)
    expect(longResult).toContain('has-collapsed-lines collapsed')
    expect(longResult).toContain('--vp-collapsed-lines:15;')
  })

  // ---- 多代码块混合 ----
  it('同一页面中部分代码块折叠、部分不折叠', () => {
    const md = new MarkdownIt()
    createVitepressStyleFenceRenderer(md)
    md.use(collapsedLinesMarkdownPlugin, 5)

    const result = md.render([
      '```ts',
      generateCodeLines(10),
      '```',
      '',
      '```js',
      'const x = 1;',
      '```',
    ].join('\n'))

    // 第一个长代码块被折叠
    expect(result).toContain('has-collapsed-lines')
    // 第二个短代码块不折叠，且内容正常
    expect(result).toContain('const x = 1;')
  })

  // ---- 无语言代码块 ----
  it('无语言标识的代码块也能被折叠(有 collapse div 和 style)', () => {
    const md = new MarkdownIt()
    createVitepressStyleFenceRenderer(md)
    md.use(collapsedLinesMarkdownPlugin, 3)

    const result = md.render(`\`\`\`\n${generateCodeLines(10)}\n\`\`\``)
    // 无 language- 类，所以 has-collapsed-lines 不通过 class 添加，
    // 但 collapse div 和 style CSS 变量仍然被注入
    expect(result).toContain('<div class="collapsed-lines"></div>')
    expect(result).toContain('--vp-collapsed-lines:3;')
  })

  it('无语言标识+无 info 的代码块正常渲染', () => {
    const md = new MarkdownIt()
    createVitepressStyleFenceRenderer(md)
    md.use(collapsedLinesMarkdownPlugin, false)

    const result = md.render('```\nconst a = 1;\n```')
    expect(result).toContain('<code>')
    expect(result).not.toContain('has-collapsed-lines')
  })

  // ---- 空代码块 ----
  it('空代码块不触发折叠', () => {
    const md = new MarkdownIt()
    createVitepressStyleFenceRenderer(md)
    md.use(collapsedLinesMarkdownPlugin, 5)

    const result = md.render('```ts\n```')
    expect(result).not.toContain('has-collapsed-lines')
  })

  // ---- <div> 已有 style 属性时正确合并 ----
  it('外层 div 已有 style 属性时 CSS 变量被前置合并', () => {
    const md = new MarkdownIt()
    createVitepressStyleFenceRendererWithStyle(md)
    md.use(collapsedLinesMarkdownPlugin, 3)

    const result = md.render(`\`\`\`ts\n${generateCodeLines(10)}\n\`\`\``)
    expect(result).toContain('has-collapsed-lines')
    // CSS 变量被前置插入到已有 style 属性中
    expect(result).toContain('--vp-collapsed-lines:3;color:red')
    // collapse div 也被注入
    expect(result).toContain('<div class="collapsed-lines"></div>')
  })

  // ---- 无默认 options 参数 ----
  it('不传 options 时默认为 false', () => {
    const md = new MarkdownIt()
    createVitepressStyleFenceRenderer(md)
    md.use(collapsedLinesMarkdownPlugin)

    const result = md.render(`\`\`\`ts :collapsed-lines=5\n${generateCodeLines(20)}\n\`\`\``)
    expect(result).toContain('has-collapsed-lines')
  })
})

// =============================================================================
// collapsedLines 插件工厂 单元测试
// =============================================================================
describe('collapsedLines 插件工厂', () => {
  it('name 为 vitepress-plugin-code-collapse', () => {
    const plugin = collapsedLines() as any
    expect(plugin.name).toBe('vitepress-plugin-code-collapse')
  })

  it('client.enhance 为 enhanceAppWithCollapsedLines', () => {
    const plugin = collapsedLines() as any
    expect(plugin.client?.enhance).toBe('enhanceAppWithCollapsedLines')
  })

  it('markdown.config 为函数', () => {
    const plugin = collapsedLines() as any
    expect(typeof plugin.markdown?.config).toBe('function')
  })

  it('markdown.config 可注册 markdown-it 规则', () => {
    const plugin = collapsedLines(3) as any
    const md = new MarkdownIt()
    createVitepressStyleFenceRenderer(md)
    plugin.markdown.config(md)

    const result = md.render(`\`\`\`ts\n${generateCodeLines(10)}\n\`\`\``)
    expect(result).toContain('has-collapsed-lines')
    expect(result).toContain('--vp-collapsed-lines:3;')
  })

  it('支持传入 options=false', () => {
    const plugin = collapsedLines(false) as any
    expect(plugin.name).toBe('vitepress-plugin-code-collapse')
  })

  it('支持传入 options=true', () => {
    const plugin = collapsedLines(true) as any
    expect(plugin.name).toBe('vitepress-plugin-code-collapse')
  })

  it('支持传入 options=number', () => {
    const plugin = collapsedLines(10) as any
    expect(plugin.name).toBe('vitepress-plugin-code-collapse')
  })

  it('支持传入 options="disable"', () => {
    const plugin = collapsedLines('disable') as any
    expect(plugin.name).toBe('vitepress-plugin-code-collapse')
  })

  it('不传 options 时正常工作', () => {
    const plugin = collapsedLines() as any
    expect(plugin.name).toBe('vitepress-plugin-code-collapse')
  })
})
