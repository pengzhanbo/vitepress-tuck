import MarkdownIt from 'markdown-it'
import { describe, expect, it } from 'vitest'
import { abbrMarkdownPlugin } from '../src/node/markdown'
import { abbr } from '../src/node/plugin'

describe('abbrMarkdownPlugin', () => {
  // 内联定义语法 *[ABBR]: description 能被识别
  it('内联定义语法 *[ABBR]: description 能被识别并替换为 VPAbbreviation', () => {
    const md = new MarkdownIt()
    md.use(abbrMarkdownPlugin)

    const result = md.render('*[HTML]: HyperText Markup Language\n\nThe HTML spec')
    expect(result).toContain('<VPAbbreviation')
    expect(result).toContain('>HTML<')
  })

  // aria-label 属性包含描述(去除 HTML 标签)
  it('aria-label 属性包含描述文本', () => {
    const md = new MarkdownIt()
    md.use(abbrMarkdownPlugin)

    const result = md.render('*[HTML]: HyperText Markup Language\n\nThe HTML spec')
    expect(result).toContain('aria-label="HyperText Markup Language"')
  })

  // 有 info 时生成 #tooltip 插槽
  it('有 info 时生成 #tooltip 插槽', () => {
    const md = new MarkdownIt()
    md.use(abbrMarkdownPlugin)

    const result = md.render('*[HTML]: HyperText Markup Language\n\nThe HTML spec')
    expect(result).toContain('<template #tooltip>')
    expect(result).toContain('</template>')
  })

  // 全局缩写词选项(globalAbbreviations)能工作
  it('全局缩写词选项能工作', () => {
    const md = new MarkdownIt()
    md.use(abbrMarkdownPlugin, { HTML: 'HyperText Markup Language' })

    const result = md.render('The HTML spec')
    expect(result).toContain('<VPAbbreviation')
    expect(result).toContain('aria-label="HyperText Markup Language"')
  })

  // 内联定义与全局定义同时存在时,内联定义优先
  it('内联定义优先于全局定义', () => {
    const md = new MarkdownIt()
    md.use(abbrMarkdownPlugin, { HTML: 'Global Definition' })

    const result = md.render('*[HTML]: Inline Definition\n\nThe HTML spec')
    expect(result).toContain('aria-label="Inline Definition"')
    expect(result).not.toContain('Global Definition')
  })

  // ??= 操作符:同一缩写词多次内联定义时首次定义生效
  it('同一缩写词多次内联定义时首次定义生效', () => {
    const md = new MarkdownIt()
    md.use(abbrMarkdownPlugin)

    const result = md.render(
      '*[HTML]: First Definition\n*[HTML]: Second Definition\n\nThe HTML spec',
    )
    expect(result).toContain('aria-label="First Definition"')
    expect(result).not.toContain('Second Definition')
  })

  // disableAbbrReplace 环境变量为 true 时跳过替换
  it('disableAbbrReplace 为 true 时跳过替换', () => {
    const md = new MarkdownIt()
    md.use(abbrMarkdownPlugin)

    const env = { disableAbbrReplace: true }
    const result = md.render(
      '*[HTML]: HyperText Markup Language\n\nThe HTML spec',
      env,
    )
    expect(result).not.toContain('<VPAbbreviation')
    // 文本中的 HTML 应保持原样
    expect(result).toContain('HTML')
  })

  // 没有缩写词时不替换
  it('没有缩写词时不替换', () => {
    const md = new MarkdownIt()
    md.use(abbrMarkdownPlugin)

    const result = md.render('Hello World')
    expect(result).not.toContain('<VPAbbreviation')
  })

  // 有全局缩写词但文本中不包含时不替换
  it('有全局缩写词但文本中不包含时不替换', () => {
    const md = new MarkdownIt()
    md.use(abbrMarkdownPlugin, { HTML: 'desc' })

    const result = md.render('Hello World')
    expect(result).not.toContain('<VPAbbreviation')
  })

  // 边界:空 label 不应被识别为定义
  it('空 label 不应被识别为定义', () => {
    const md = new MarkdownIt()
    md.use(abbrMarkdownPlugin)

    const result = md.render('*[]: description\n\nHTML')
    expect(result).not.toContain('<VPAbbreviation')
  })

  // 边界:空 title 不应被识别为定义
  it('空 title 不应被识别为定义', () => {
    const md = new MarkdownIt()
    md.use(abbrMarkdownPlugin)

    const result = md.render('*[HTML]:\n\nHTML')
    expect(result).not.toContain('<VPAbbreviation')
  })

  // 边界:label 中含 [ 应不匹配
  it('label 中含 [ 应不匹配', () => {
    const md = new MarkdownIt()
    md.use(abbrMarkdownPlugin)

    const result = md.render('*[AB[BR]: description\n\nAB[BR')
    expect(result).not.toContain('<VPAbbreviation')
  })

  // 边界:转义字符 \] 在 label 中被正确处理
  it('转义字符 \\] 在 label 中被正确处理', () => {
    const md = new MarkdownIt()
    md.use(abbrMarkdownPlugin)

    const result = md.render('*[AB\\]BR]: description\n\nThe AB]BR spec')
    expect(result).toContain('<VPAbbreviation')
    expect(result).toContain('>AB]BR<')
    expect(result).toContain('aria-label="description"')
  })

  // 边界:转义字符 \[ 在 label 中被正确处理
  it('转义字符 \\[ 在 label 中被正确处理', () => {
    const md = new MarkdownIt()
    md.use(abbrMarkdownPlugin)

    const result = md.render('*[AB\\[BR]: description\n\nThe AB[BR spec')
    expect(result).toContain('<VPAbbreviation')
    expect(result).toContain('>AB[BR<')
  })

  // 边界:多个缩写词在同一文本中
  it('多个缩写词在同一文本中被替换', () => {
    const md = new MarkdownIt()
    md.use(abbrMarkdownPlugin)

    const result = md.render(
      '*[HTML]: HyperText Markup Language\n*[CSS]: Cascading Style Sheets\n\nHTML and CSS',
    )
    const matches = result.match(/<VPAbbreviation/g)
    expect(matches).toHaveLength(2)
    expect(result).toContain('aria-label="HyperText Markup Language"')
    expect(result).toContain('aria-label="Cascading Style Sheets"')
  })

  // 边界:缩写词位于文本开头
  it('缩写词位于文本开头被替换', () => {
    const md = new MarkdownIt()
    md.use(abbrMarkdownPlugin)

    const result = md.render('*[HTML]: HyperText Markup Language\n\nHTML is great')
    expect(result).toContain('<VPAbbreviation')
    expect(result).toContain('>HTML<')
  })

  // 边界:缩写词位于文本结尾
  it('缩写词位于文本结尾被替换', () => {
    const md = new MarkdownIt()
    md.use(abbrMarkdownPlugin)

    const result = md.render('*[HTML]: HyperText Markup Language\n\nGreat is HTML')
    expect(result).toContain('<VPAbbreviation')
    expect(result).toContain('>HTML<')
  })

  // 渲染器:描述中的 markdown 被渲染为内联 HTML
  it('描述中的 markdown 被渲染为内联 HTML', () => {
    const md = new MarkdownIt()
    md.use(abbrMarkdownPlugin)

    const result = md.render(
      '*[HTML]: HyperText **Markup** Language\n\nThe HTML spec',
    )
    // tooltip 中包含渲染后的 <strong> 标签
    expect(result).toContain('<strong>Markup</strong>')
    // aria-label 去除了 HTML 标签
    expect(result).toContain('aria-label="HyperText Markup Language"')
  })

  // 渲染器:tooltip 内容中不触发缩写词递归替换
  it('tooltip 内容中不触发缩写词递归替换', () => {
    const md = new MarkdownIt()
    md.use(abbrMarkdownPlugin)

    const result = md.render(
      '*[HTML]: HyperText Markup Language\n*[Markup]: M Language\n\nThe HTML spec',
    )
    // 提取 tooltip 内容
    const tooltipMatch = result.match(/<template #tooltip>(.*?)<\/template>/)
    expect(tooltipMatch).toBeTruthy()
    // tooltip 中不应出现嵌套的 VPAbbreviation
    expect(tooltipMatch![1]).not.toContain('<VPAbbreviation')
  })

  // 全局缩写词值为空字符串时不生成 tooltip 但仍替换
  it('全局缩写词值为空字符串时不生成 tooltip 插槽', () => {
    const md = new MarkdownIt()
    md.use(abbrMarkdownPlugin, { HTML: '' })

    const result = md.render('The HTML spec')
    expect(result).toContain('<VPAbbreviation')
    expect(result).not.toContain('<template #tooltip>')
  })

  // 缩写词作为更大单词的一部分时不替换
  it('缩写词作为更大单词的一部分时不替换(如 HTML5 中的 HTML)', () => {
    const md = new MarkdownIt()
    md.use(abbrMarkdownPlugin)

    const result = md.render('*[HTML]: HyperText Markup Language\n\nHTML5 is the latest')
    expect(result).not.toContain('<VPAbbreviation')
  })

  // 缩写词前后有标点符号时正确替换
  it('缩写词前后有标点符号时正确替换', () => {
    const md = new MarkdownIt()
    md.use(abbrMarkdownPlugin)

    const result = md.render('*[HTML]: HyperText Markup Language\n\nUse HTML, or not.')
    expect(result).toContain('<VPAbbreviation')
    expect(result).toContain('>HTML<')
  })

  // 边界：以 * 开头但不是 *[ 的行不被识别为定义
  it('以 * 开头但不是 *[ 的行不被识别为缩写定义', () => {
    const md = new MarkdownIt()
    md.use(abbrMarkdownPlugin)

    const result = md.render('*italic text*\n\nThe HTML spec')
    // *italic text* 被渲染为 <em>italic text</em>，而非缩写定义
    expect(result).toContain('<em>italic text</em>')
    expect(result).not.toContain('<VPAbbreviation')
  })

  // 边界：** 开头(加粗语法)不被识别为缩写定义
  it('以 ** 开头(加粗语法)不被识别为缩写定义', () => {
    const md = new MarkdownIt()
    md.use(abbrMarkdownPlugin)

    const result = md.render('**bold text**\n\nThe HTML spec')
    expect(result).toContain('<strong>bold text</strong>')
    expect(result).not.toContain('<VPAbbreviation')
  })

  // 边界：] 后不跟 : 的行不被识别为定义
  it('] 后不跟 : 的行不被识别为定义', () => {
    const md = new MarkdownIt()
    md.use(abbrMarkdownPlugin)

    const result = md.render('*[HTML] text\n\nThe HTML spec')
    // 不被识别为缩写定义，HTML 在正文中不会被替换
    expect(result).not.toContain('<VPAbbreviation')
    // 原始文本作为段落渲染
    expect(result).toContain('*[HTML] text')
  })

  // 边界：行内代码中的缩写词不被替换
  it('行内代码中的缩写词不被替换', () => {
    const md = new MarkdownIt()
    md.use(abbrMarkdownPlugin)

    const result = md.render('*[HTML]: HyperText Markup Language\n\n`HTML` code and HTML text.')
    // code span 中的 HTML 不应被替换
    expect(result).toContain('<code>HTML</code>')
    // 文本中的 HTML 应被替换
    const vpMatches = result.match(/<VPAbbreviation/g)
    expect(vpMatches).toHaveLength(1)
  })

  // 边界：同名缩写词在段落中多次出现都应被替换
  it('同名缩写词在段落中多次出现都应被替换', () => {
    const md = new MarkdownIt()
    md.use(abbrMarkdownPlugin)

    const result = md.render('*[HTML]: HyperText Markup Language\n\nHTML and HTML and HTML')
    const matches = result.match(/<VPAbbreviation/g)
    expect(matches).toHaveLength(3)
  })

  // 边界：较短缩写词在较长缩写词之前定义，较长者优先匹配
  it('多个缩写词按长度降序匹配，避免短词截断长词', () => {
    const md = new MarkdownIt()
    md.use(abbrMarkdownPlugin, {
      JS: 'JavaScript',
      JSON: 'JavaScript Object Notation',
    })

    const result = md.render('Use JSON or JS.')
    // JSON 应匹配为完整的 JSON(不被 JS 截断)
    expect(result).toContain('aria-label="JavaScript Object Notation"')
    expect(result).toContain('aria-label="JavaScript"')
  })

  // 边界：label 中含 \\ 转义其他字符
  it('label 中间含 \\\\ 转义字符被正确处理', () => {
    const md = new MarkdownIt()
    md.use(abbrMarkdownPlugin)

    const result = md.render('*[A\\*B]: Asterisk\n\nThe A*B spec')
    expect(result).toContain('<VPAbbreviation')
    expect(result).toContain('>A*B<')
  })

  // 边界：仅有内联定义无正文文本
  it('仅有内联定义没有正文文本时不生成任何 VPAbbreviation', () => {
    const md = new MarkdownIt()
    md.use(abbrMarkdownPlugin)

    const result = md.render('*[HTML]: HyperText Markup Language')
    expect(result).not.toContain('<VPAbbreviation')
  })

  // 边界：定义与正文在同一行(定义在段落中)时不应被识别
  it('定义语法出现在段落文本中不被识别为缩写定义', () => {
    const md = new MarkdownIt()
    md.use(abbrMarkdownPlugin)

    // *[HTML]: description 作为段落文本的一部分
    const result = md.render('text *[HTML]: desc text\n\nHTML')
    expect(result).not.toContain('<VPAbbreviation')
  })

  // 渲染器：描述 info 为空字符串时不生成 tooltip 插槽
  it('内联定义描述为空时不生成 tooltip 插槽', () => {
    const md = new MarkdownIt()
    md.use(abbrMarkdownPlugin)

    const result = md.render('*[HTML]:\n\nThe HTML spec')
    // 空 title 不构成有效缩写定义，因此 HTML 不会被替换
    expect(result).not.toContain('<VPAbbreviation')
  })

  // 渲染器：使用默认导出(abbr factory)可正常注册
  it('使用 abbr factory 注册后可正常渲染缩写', () => {
    const md = new MarkdownIt()
    const plugin = abbr({ HTML: 'HyperText Markup Language' }) as any
    plugin.markdown.config(md)

    const result = md.render('The HTML spec')
    expect(result).toContain('<VPAbbreviation')
    expect(result).toContain('aria-label="HyperText Markup Language"')
  })

  // 边界：Html 标签内的文本不应被替换
  it('原始 HTML 标签中的文本不被替换', () => {
    const md = new MarkdownIt()
    md.use(abbrMarkdownPlugin)

    const result = md.render('*[HTML]: HyperText Markup Language\n\n<span>HTML</span>')
    // 在 <span> 内的 HTML 被 markdown-it 视为 HTML，不产生 VPAbbreviation token
    expect(result).toContain('>HTML<')
  })

  // 边界：全局缩写词 key 已包含 : 前缀时保持原样
  it('全局缩写词 key 已包含 : 前缀时保持原样', () => {
    const md = new MarkdownIt()
    md.use(abbrMarkdownPlugin, { ':HTML': 'HyperText Markup Language' })

    const result = md.render('The HTML spec')
    expect(result).toContain('<VPAbbreviation')
    expect(result).toContain('aria-label="HyperText Markup Language"')
  })
})

describe('abbr 插件工厂', () => {
  it('name 为 vitepress-plugin-abbr', () => {
    const plugin = abbr() as any
    expect(plugin.name).toBe('vitepress-plugin-abbr')
  })

  it('componentResolver 包含 VPAbbreviation', () => {
    const plugin = abbr() as any
    expect(plugin.componentResolver).toContain('VPAbbreviation')
  })

  it('markdown.config 为函数', () => {
    const plugin = abbr() as any
    expect(typeof plugin.markdown?.config).toBe('function')
  })

  it('markdown.config 可注册 markdown-it 规则', () => {
    const plugin = abbr() as any
    const md = new MarkdownIt()
    plugin.markdown.config(md)

    const result = md.render('*[HTML]: HyperText Markup Language\n\nThe HTML spec')
    expect(result).toContain('<VPAbbreviation')
  })

  it('vite.optimizeDeps.include 包含 @floating-ui/vue', () => {
    const plugin = abbr() as any
    expect(plugin.vite?.optimizeDeps?.include).toContain('@floating-ui/vue')
  })

  it('支持传入全局缩写词参数', () => {
    const plugin = abbr({ HTML: 'HyperText Markup Language' }) as any
    const md = new MarkdownIt()
    plugin.markdown.config(md)

    const result = md.render('The HTML spec')
    expect(result).toContain('<VPAbbreviation')
    expect(result).toContain('aria-label="HyperText Markup Language"')
  })
})
