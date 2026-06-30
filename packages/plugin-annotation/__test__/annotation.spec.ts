import MarkdownIt from 'markdown-it'
import { describe, expect, it, vi } from 'vitest'
import { annotationMarkdownPlugin } from '../src/node/markdown'

describe('annotationMarkdownPlugin', () => {
  // ==================== 基本功能 ====================
  describe('基本功能', () => {
    // 单行定义 + 引用渲染为 VPAnnotation 组件
    it('单行定义 + 引用渲染为 VPAnnotation 组件', () => {
      const md = new MarkdownIt()
      md.use(annotationMarkdownPlugin)

      const result = md.render('[+name]: description\n\n[+name]')
      expect(result).toContain('<VPAnnotation label="name"')
      expect(result).toContain(':total="1"')
      expect(result).toContain('<template #item-0>')
      expect(result).toContain('description')
      expect(result).toContain('</VPAnnotation>')
    })

    // 引用位于段落中间时正确渲染
    it('引用位于段落中间时正确渲染', () => {
      const md = new MarkdownIt()
      md.use(annotationMarkdownPlugin)

      const result = md.render('[+name]: description\n\nbefore [+name] after')
      expect(result).toContain('<VPAnnotation label="name"')
      expect(result).toContain('before')
      expect(result).toContain('after')
    })

    // 引用位于段落开头
    it('引用位于段落开头时正确渲染', () => {
      const md = new MarkdownIt()
      md.use(annotationMarkdownPlugin)

      const result = md.render('[+name]: description\n\n[+name] at start')
      expect(result).toContain('<VPAnnotation')
    })

    // 引用位于段落结尾
    it('引用位于段落结尾时正确渲染', () => {
      const md = new MarkdownIt()
      md.use(annotationMarkdownPlugin)

      const result = md.render('[+name]: description\n\nat end [+name]')
      expect(result).toContain('<VPAnnotation')
    })

    // 同一注释在段落中多次引用都应渲染
    it('同一注释在段落中多次引用都应渲染', () => {
      const md = new MarkdownIt()
      md.use(annotationMarkdownPlugin)

      const result = md.render('[+name]: description\n\n[+name] and [+name]')
      const matches = result.match(/<VPAnnotation/g)
      expect(matches).toHaveLength(2)
    })

    // 不同注释在同一段落中引用
    it('不同注释在同一段落中引用', () => {
      const md = new MarkdownIt()
      md.use(annotationMarkdownPlugin)

      const result = md.render('[+a]: desc a\n[+b]: desc b\n\n[+a] and [+b]')
      expect(result).toContain('<VPAnnotation label="a"')
      expect(result).toContain('<VPAnnotation label="b"')
    })

    // 定义位于文档末尾时正确处理（不产生可见输出）
    it('定义位于文档末尾时不产生可见输出', () => {
      const md = new MarkdownIt()
      md.use(annotationMarkdownPlugin)

      const result = md.render('[+name]: description')
      expect(result).not.toContain('<VPAnnotation')
      expect(result).not.toContain('<p>')
    })
  })

  // ==================== 注释定义 ====================
  describe('注释定义', () => {
    // 空 label 不被识别为定义
    it('空 label 不被识别为定义', () => {
      const md = new MarkdownIt()
      md.use(annotationMarkdownPlugin)

      const result = md.render('[+]: description\n\n[+]')
      expect(result).not.toContain('<VPAnnotation')
    })

    // label 中含空格不被识别为定义
    it('label 中含空格不被识别为定义', () => {
      const md = new MarkdownIt()
      md.use(annotationMarkdownPlugin)

      const result = md.render('[+ name]: description\n\n[+name]')
      expect(result).not.toContain('<VPAnnotation')
    })

    // ] 后不跟 : 不被识别为定义
    it('] 后不跟 : 不被识别为定义', () => {
      const md = new MarkdownIt()
      md.use(annotationMarkdownPlugin)

      const result = md.render('[+name] text\n\n[+name]')
      expect(result).not.toContain('<VPAnnotation')
    })

    // ] 后跟其他字符不被识别为定义
    it('] 后跟非 : 字符不被识别为定义', () => {
      const md = new MarkdownIt()
      md.use(annotationMarkdownPlugin)

      const result = md.render('[+name]x description\n\n[+name]')
      expect(result).not.toContain('<VPAnnotation')
    })

    // 缺少 ] 不被识别为定义
    it('缺少 ] 不被识别为定义', () => {
      const md = new MarkdownIt()
      md.use(annotationMarkdownPlugin)

      const result = md.render('[+name text\n\n[+name]')
      expect(result).not.toContain('<VPAnnotation')
    })

    // 行过短不被识别为定义（start + 4 > max）
    it('行过短不被识别为定义', () => {
      const md = new MarkdownIt()
      md.use(annotationMarkdownPlugin)

      const result = md.render('[+\n\n[+]')
      expect(result).not.toContain('<VPAnnotation')
    })

    // 不以 [ 开头不被识别为定义
    it('不以 [ 开头不被识别为定义', () => {
      const md = new MarkdownIt()
      md.use(annotationMarkdownPlugin)

      const result = md.render('+name]: description\n\n[+name]')
      expect(result).not.toContain('<VPAnnotation')
    })

    // 不以 [+ 开头不被识别为定义
    it('不以 [+ 开头不被识别为定义', () => {
      const md = new MarkdownIt()
      md.use(annotationMarkdownPlugin)

      const result = md.render('[*name]: description\n\n[*name]')
      expect(result).not.toContain('<VPAnnotation')
    })

    // ] 在行尾无 : 不被识别为定义（pos + 1 >= max）
    it('] 在行尾无冒号不被识别为定义', () => {
      const md = new MarkdownIt()
      md.use(annotationMarkdownPlugin)

      const result = md.render('[+name]\n\n[+name]')
      expect(result).not.toContain('<VPAnnotation')
    })

    // 定义后无内容时产生空注释源
    it('定义后无内容时产生空注释源', () => {
      const md = new MarkdownIt()
      md.use(annotationMarkdownPlugin)

      const result = md.render('[+name]:\n\n[+name]')
      expect(result).toContain('<VPAnnotation label="name"')
      expect(result).toContain(':total="1"')
    })

    // 同一 label 多次定义时累加 sources
    it('同一 label 多次定义时累加 sources', () => {
      const md = new MarkdownIt()
      md.use(annotationMarkdownPlugin)

      const result = md.render('[+name]: first\n[+name]: second\n\n[+name]')
      expect(result).toContain(':total="2"')
      expect(result).toContain('<template #item-0>')
      expect(result).toContain('<template #item-1>')
      expect(result).toContain('first')
      expect(result).toContain('second')
    })

    // 同一 label 多次定义时每个源只渲染一次（缓存）
    it('同一 label 多次定义时每个源只渲染一次', () => {
      const md = new MarkdownIt()
      md.use(annotationMarkdownPlugin)

      const spy = vi.spyOn(md, 'render')
      md.render('[+name]: first\n[+name]: second\n\n[+name]')
      // 1 次 document + 2 次注释源渲染（first 和 second 各一次）
      expect(spy).toHaveBeenCalledTimes(3)
    })

    // 定义语法不与普通链接引用定义冲突
    it('普通链接引用定义 [name]: url 不被误识别为注释', () => {
      const md = new MarkdownIt()
      md.use(annotationMarkdownPlugin)

      const result = md.render('[name]: https://example.com\n\n[name]')
      // 应该渲染为链接，而非 VPAnnotation
      expect(result).not.toContain('<VPAnnotation')
    })
  })

  // ==================== 多行注释定义 ====================
  describe('多行注释定义', () => {
    // 缩进续行被合并为多行注释
    it('缩进续行被合并为多行注释', () => {
      const md = new MarkdownIt()
      md.use(annotationMarkdownPlugin)

      const result = md.render('[+name]: description\n  continued\n\n[+name]')
      expect(result).toContain('description')
      expect(result).toContain('continued')
      expect(result).toContain(':total="1"')
    })

    // 空续行被保留（不中断多行定义）
    it('空续行不中断多行定义', () => {
      const md = new MarkdownIt()
      md.use(annotationMarkdownPlugin)

      const result = md.render('[+name]: description\n  \n  continued\n\n[+name]')
      expect(result).toContain('description')
      expect(result).toContain('continued')
    })

    // 非缩进内容行中断多行定义
    it('非缩进内容行中断多行定义', () => {
      const md = new MarkdownIt()
      md.use(annotationMarkdownPlugin)

      const result = md.render('[+name]: description\nnext line\n\n[+name]')
      // 注释只有 'description'，'next line' 作为独立段落
      expect(result).toContain('description')
      expect(result).toContain('next line')
      expect(result).toContain(':total="1"')
    })

    // 下一个定义行中断当前多行定义
    it('下一个定义行中断当前多行定义', () => {
      const md = new MarkdownIt()
      md.use(annotationMarkdownPlugin)

      const result = md.render(
        '[+a]: desc a\n[+b]: desc b\n\n[+a] and [+b]',
      )
      expect(result).toContain('<VPAnnotation label="a"')
      expect(result).toContain('<VPAnnotation label="b"')
      expect(result).toContain('desc a')
      expect(result).toContain('desc b')
    })

    // 定义后仅冒号无内容，续行提供内容
    it('定义后仅冒号无内容，续行提供内容', () => {
      const md = new MarkdownIt()
      md.use(annotationMarkdownPlugin)

      const result = md.render('[+name]:\n  content\n\n[+name]')
      expect(result).toContain('content')
    })

    // 文档示例：四大名著注释场景
    it('文档示例：四大名著多源注释', () => {
      const md = new MarkdownIt()
      md.use(annotationMarkdownPlugin)

      const result = md.render([
        '中国古代 **四大名著** [+名著] 家喻户晓。',
        '',
        '[+名著]:',
        '  **《三国演义》：**',
        '',
        '  以三国时期为背景。',
        '',
        '[+名著]:',
        '  **《西游记》：**',
        '',
        '  讲述了唐僧师徒四人西天取经的故事。',
        '',
      ].join('\n'))
      expect(result).toContain('<VPAnnotation label="名著"')
      expect(result).toContain(':total="2"')
      expect(result).toContain('三国演义')
      expect(result).toContain('西游记')
    })
  })

  // ==================== 注释引用 ====================
  describe('注释引用', () => {
    // 无定义时引用不被识别
    it('无定义时引用不被识别', () => {
      const md = new MarkdownIt()
      md.use(annotationMarkdownPlugin)

      const result = md.render('[+name]')
      expect(result).not.toContain('<VPAnnotation')
      expect(result).toContain('[+name]')
    })

    // env.annotations 不存在时引用不被识别
    it('env.annotations 不存在时引用不被识别', () => {
      const md = new MarkdownIt()
      md.use(annotationMarkdownPlugin)

      // 没有任何定义，env.annotations 不会被创建
      const result = md.render('text [+name] text')
      expect(result).not.toContain('<VPAnnotation')
    })

    // 引用 label 与定义不匹配时不被识别
    it('引用 label 与定义不匹配时不被识别', () => {
      const md = new MarkdownIt()
      md.use(annotationMarkdownPlugin)

      const result = md.render('[+defined]: desc\n\n[+undefined]')
      expect(result).not.toContain('<VPAnnotation label="undefined"')
      // 字面量 [+undefined] 保留在输出中
      expect(result).toContain('[+undefined]')
    })

    // 空 label 引用不被识别
    it('空 label 引用不被识别', () => {
      const md = new MarkdownIt()
      md.use(annotationMarkdownPlugin)

      const result = md.render('[+defined]: desc\n\n[+]')
      expect(result).not.toContain('<VPAnnotation')
    })

    // label 中含空格不被识别
    it('label 中含空格不被识别', () => {
      const md = new MarkdownIt()
      md.use(annotationMarkdownPlugin)

      const result = md.render('[+defined]: desc\n\n[+ name]')
      expect(result).not.toContain('<VPAnnotation')
    })

    // label 中含换行不被识别
    it('label 中含换行不被识别', () => {
      const md = new MarkdownIt()
      md.use(annotationMarkdownPlugin)

      const result = md.render('[+defined]: desc\n\n[+\nx]')
      expect(result).not.toContain('<VPAnnotation')
    })

    // 引用过短不被识别（start + 3 > max）
    it('引用过短不被识别', () => {
      const md = new MarkdownIt()
      md.use(annotationMarkdownPlugin)

      const result = md.render('[+defined]: desc\n\n[+')
      expect(result).not.toContain('<VPAnnotation')
    })

    // 缺少 ] 不被识别
    it('缺少 ] 不被识别', () => {
      const md = new MarkdownIt()
      md.use(annotationMarkdownPlugin)

      const result = md.render('[+defined]: desc\n\n[+name')
      expect(result).not.toContain('<VPAnnotation')
    })

    // 不以 [ 开头不被识别
    it('不以 [ 开头不被识别', () => {
      const md = new MarkdownIt()
      md.use(annotationMarkdownPlugin)

      const result = md.render('[+defined]: desc\n\n+name]')
      expect(result).not.toContain('<VPAnnotation')
    })

    // 不以 [+ 开头不被识别
    it('不以 [+ 开头不被识别', () => {
      const md = new MarkdownIt()
      md.use(annotationMarkdownPlugin)

      const result = md.render('[+defined]: desc\n\n[*name]')
      expect(result).not.toContain('<VPAnnotation')
    })

    // 行内代码中的引用不被识别
    it('行内代码中的引用不被识别', () => {
      const md = new MarkdownIt()
      md.use(annotationMarkdownPlugin)

      const result = md.render('[+name]: desc\n\n`[+name]` code and [+name] text')
      expect(result).toContain('<code>[+name]</code>')
      const matches = result.match(/<VPAnnotation/g)
      expect(matches).toHaveLength(1)
    })

    // 引用后紧跟内容时正确推进 state.pos
    it('引用后紧跟内容时正确推进位置', () => {
      const md = new MarkdownIt()
      md.use(annotationMarkdownPlugin)

      const result = md.render('[+name]: desc\n\n[+name]suffix')
      expect(result).toContain('<VPAnnotation')
      expect(result).toContain('suffix')
    })
  })

  // ==================== 渲染行为 ====================
  describe('渲染行为', () => {
    // 注释源中的 markdown 被渲染为 HTML
    it('注释源中的 markdown 被渲染为 HTML', () => {
      const md = new MarkdownIt()
      md.use(annotationMarkdownPlugin)

      const result = md.render('[+name]: **bold** text\n\n[+name]')
      expect(result).toContain('<strong>bold</strong>')
    })

    // 渲染结果被缓存，多次引用不重复渲染
    it('渲染结果被缓存，多次引用不重复渲染', () => {
      const md = new MarkdownIt()
      md.use(annotationMarkdownPlugin)

      const spy = vi.spyOn(md, 'render')
      md.render('[+name]: content\n\n[+name] and [+name]')
      // 1 次 document + 1 次 annotation（第二次引用使用缓存）
      expect(spy).toHaveBeenCalledTimes(2)
    })

    // 不同 label 的注释分别渲染
    it('不同 label 的注释分别渲染', () => {
      const md = new MarkdownIt()
      md.use(annotationMarkdownPlugin)

      const spy = vi.spyOn(md, 'render')
      md.render('[+a]: desc a\n[+b]: desc b\n\n[+a] and [+b]')
      // 1 次 document + 1 次 annotation a + 1 次 annotation b
      expect(spy).toHaveBeenCalledTimes(3)
    })

    // 注释源渲染时清除 annotations 环境（防止递归）
    it('注释源渲染时清除 annotations 环境（防止递归）', () => {
      const md = new MarkdownIt()
      md.use(annotationMarkdownPlugin)

      // [+outer] 的内容包含 [+inner] 引用
      // 渲染 [+outer] 时，源中的 [+inner] 不应被识别为引用
      const result = md.render(
        '[+outer]: text [+inner] more\n[+inner]: inner desc\n\n[+outer]',
      )
      const templateMatch = result.match(/<template #item-0>(.*?)<\/template>/s)
      expect(templateMatch).toBeTruthy()
      // 源中的 [+inner] 保持字面量，不被替换为 VPAnnotation
      expect(templateMatch![1]).toContain('[+inner]')
      expect(templateMatch![1]).not.toContain('<VPAnnotation label="inner"')
    })

    // 多源注释生成多个 #item 插槽
    it('多源注释生成多个 #item 插槽', () => {
      const md = new MarkdownIt()
      md.use(annotationMarkdownPlugin)

      const result = md.render(
        '[+name]: first\n[+name]: second\n[+name]: third\n\n[+name]',
      )
      expect(result).toContain(':total="3"')
      expect(result).toContain('<template #item-0>')
      expect(result).toContain('<template #item-1>')
      expect(result).toContain('<template #item-2>')
      expect(result).toContain('first')
      expect(result).toContain('second')
      expect(result).toContain('third')
    })

    // 注释源渲染为块级 HTML
    it('注释源渲染为块级 HTML', () => {
      const md = new MarkdownIt()
      md.use(annotationMarkdownPlugin)

      const result = md.render('[+name]: description\n\n[+name]')
      // md.render 生成块级 HTML（包含 <p> 标签）
      expect(result).toContain('<p>description</p>')
    })
  })

  // ==================== 全局注释 (globalAnnotations) ====================
  describe('全局注释 (globalAnnotations)', () => {
    // 局部定义优先于全局注释
    it('局部定义优先于全局注释', () => {
      const md = new MarkdownIt()
      md.use(annotationMarkdownPlugin, { name: 'global desc' })

      const result = md.render('[+name]: local desc\n\n[+name]')
      expect(result).toContain('<VPAnnotation label="name"')
      expect(result).toContain('local desc')
      expect(result).not.toContain('global desc')
    })

    // 全局注释配置为字符串值时局部定义优先
    it('全局注释配置为字符串值时局部定义优先', () => {
      const md = new MarkdownIt()
      md.use(annotationMarkdownPlugin, { name: 'global desc' })

      const result = md.render('[+name]: local\n\n[+name]')
      expect(result).toContain('local')
      expect(result).not.toContain('global desc')
    })

    // 全局注释配置为数组值时局部定义优先
    it('全局注释配置为数组值时局部定义优先', () => {
      const md = new MarkdownIt()
      md.use(annotationMarkdownPlugin, { name: ['desc1', 'desc2'] })

      const result = md.render('[+name]: local\n\n[+name]')
      expect(result).toContain('local')
      expect(result).not.toContain('desc1')
      expect(result).not.toContain('desc2')
    })

    // 全局注释 key 含 : 前缀时局部定义优先
    it('全局注释 key 含 : 前缀时局部定义优先', () => {
      const md = new MarkdownIt()
      md.use(annotationMarkdownPlugin, { ':name': 'global desc' })

      const result = md.render('[+name]: local\n\n[+name]')
      expect(result).toContain('local')
      expect(result).not.toContain('global desc')
    })

    // 全局注释不影响其他局部定义的渲染
    it('全局注释不影响其他局部定义的渲染', () => {
      const md = new MarkdownIt()
      md.use(annotationMarkdownPlugin, { name: 'global desc' })

      const result = md.render('[+other]: other desc\n\n[+other]')
      expect(result).toContain('<VPAnnotation label="other"')
      expect(result).toContain('other desc')
    })

    // 无局部定义时全局注释引用不被识别（当前行内解析器不回退到全局注释）
    it('无局部定义时全局注释引用不被识别', () => {
      const md = new MarkdownIt()
      md.use(annotationMarkdownPlugin, { name: 'global desc' })

      const result = md.render('[+name]')
      expect(result).not.toContain('<VPAnnotation')
      expect(result).toContain('[+name]')
    })

    // 不传全局注释时不报错
    it('不传全局注释时不报错', () => {
      const md = new MarkdownIt()
      md.use(annotationMarkdownPlugin)

      const result = md.render('[+name]: desc\n\n[+name]')
      expect(result).toContain('<VPAnnotation')
    })

    // 全局注释配置不影响多次引用的缓存行为
    it('全局注释配置不影响多次引用的缓存行为', () => {
      const md = new MarkdownIt()
      md.use(annotationMarkdownPlugin, { name: 'global desc' })

      const spy = vi.spyOn(md, 'render')
      md.render('[+name]: local\n\n[+name] and [+name]')
      // 1 document + 1 annotation（第二次引用使用缓存）
      expect(spy).toHaveBeenCalledTimes(2)
    })
  })

  // ==================== 插件注册 ====================
  describe('插件注册', () => {
    // 注册 inline 规则（before image）
    it('注册后 inline 规则可匹配注释引用', () => {
      const md = new MarkdownIt()
      md.use(annotationMarkdownPlugin)

      // 确保注释引用规则已注册在 image 规则之前
      const result = md.render('[+name]: desc\n\n[+name]')
      expect(result).toContain('<VPAnnotation')
    })

    // 注册 block 规则（before reference）
    it('注册后 block 规则可匹配注释定义', () => {
      const md = new MarkdownIt()
      md.use(annotationMarkdownPlugin)

      // 确保注释定义规则已注册在 reference 规则之前
      const result = md.render('[+name]: desc\n\n[+name]')
      expect(result).toContain('desc')
    })

    // 多次使用插件不冲突
    it('多次 use 插件不冲突', () => {
      const md = new MarkdownIt()
      md.use(annotationMarkdownPlugin)
      md.use(annotationMarkdownPlugin)

      const result = md.render('[+name]: desc\n\n[+name]')
      expect(result).toContain('<VPAnnotation')
    })
  })
})
