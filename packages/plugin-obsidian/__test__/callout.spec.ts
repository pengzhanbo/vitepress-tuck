import MarkdownIt from 'markdown-it'
import { describe, expect, it } from 'vitest'
import { calloutMarkdownPlugin } from '../src/callout'

describe('calloutMarkdownPlugin', () => {
  it('should render note callout', () => {
    const md = new MarkdownIt()
    md.use(calloutMarkdownPlugin)

    const result = md.render('> [!note]\n> This is a note')
    expect(result).toContain('custom-block')
    expect(result).toContain('note')
    expect(result).toContain('This is a note')
  })

  it('should render tip callout', () => {
    const md = new MarkdownIt()
    md.use(calloutMarkdownPlugin)

    const result = md.render('> [!tip]\n> This is a tip')
    expect(result).toContain('custom-block')
    expect(result).toContain('tip')
  })

  it('should render warning callout', () => {
    const md = new MarkdownIt()
    md.use(calloutMarkdownPlugin)

    const result = md.render('> [!warning]\n> Warning message')
    expect(result).toContain('warning')
    expect(result).toContain('Warning message')
  })

  it('should render caution callout', () => {
    const md = new MarkdownIt()
    md.use(calloutMarkdownPlugin)

    const result = md.render('> [!caution]\n> Be careful')
    expect(result).toContain('caution')
  })

  it('should render info callout', () => {
    const md = new MarkdownIt()
    md.use(calloutMarkdownPlugin)

    const result = md.render('> [!info]\n> Information')
    expect(result).toContain('info')
  })

  it('should render important callout', () => {
    const md = new MarkdownIt()
    md.use(calloutMarkdownPlugin)

    const result = md.render('> [!important]\n> Very important')
    expect(result).toContain('important')
  })

  it('should render details callout as HTML details element', () => {
    const md = new MarkdownIt()
    md.use(calloutMarkdownPlugin)

    const result = md.render('> [!details]\n> Hidden content')
    expect(result).toContain('<details')
    expect(result).toContain('<summary')
    expect(result).toContain('</details>')
  })

  it('should support custom title', () => {
    const md = new MarkdownIt()
    md.use(calloutMarkdownPlugin)

    const result = md.render('> [!tip] My Title\n> Content')
    expect(result).toContain('My Title')
    expect(result).toContain('Content')
  })

  it('should support callout aliases', () => {
    const md = new MarkdownIt()
    md.use(calloutMarkdownPlugin)

    // success is an alias for tip
    const result = md.render('> [!success]\n> Success message')
    expect(result).toContain('tip')
    expect(result).toContain('success')
    expect(result).toContain('custom-block')
  })

  it('should support faq alias for warning', () => {
    const md = new MarkdownIt()
    md.use(calloutMarkdownPlugin)

    const result = md.render('> [!faq]\n> FAQ content')
    expect(result).toContain('warning')
    expect(result).toContain('faq')
  })

  it('should support bug alias for caution', () => {
    const md = new MarkdownIt()
    md.use(calloutMarkdownPlugin)

    const result = md.render('> [!bug]\n> Bug report')
    expect(result).toContain('caution')
    expect(result).toContain('bug')
  })

  it('should support example alias for important', () => {
    const md = new MarkdownIt()
    md.use(calloutMarkdownPlugin)

    const result = md.render('> [!example]\n> Example content')
    expect(result).toContain('important')
    expect(result).toContain('example')
  })

  it('should not render invalid callout types', () => {
    const md = new MarkdownIt()
    md.use(calloutMarkdownPlugin)

    const result = md.render('> [!invalid]\n> Should be blockquote')
    // Should be treated as a regular blockquote
    expect(result).not.toContain('custom-block')
  })

  it('should handle multi-line callout content', () => {
    const md = new MarkdownIt()
    md.use(calloutMarkdownPlugin)

    const result = md.render('> [!tip]\n> Line 1\n> Line 2\n> Line 3')
    expect(result).toContain('Line 1')
    expect(result).toContain('Line 2')
    expect(result).toContain('Line 3')
  })

  it('should handle callout without body content as blockquote', () => {
    const md = new MarkdownIt()
    md.use(calloutMarkdownPlugin)

    const result = md.render('> [!note]')
    // Should fall through to blockquote because no body content
    expect(result).not.toContain('custom-block')
  })

  // 默认标题：无自定义标题时回退为大写类型名
  it('should use uppercased type name as default title', () => {
    const md = new MarkdownIt()
    md.use(calloutMarkdownPlugin)

    const result = md.render('> [!note]\n> content')
    expect(result).toContain('NOTE')
    expect(result).toContain('custom-block-title-default')
  })

  // 带前导减号的标题：> [!tip] - Title，前导 - 被移除
  it('should remove leading dash from title', () => {
    const md = new MarkdownIt()
    md.use(calloutMarkdownPlugin)

    const result = md.render('> [!tip] - Title\n> content')
    expect(result).toContain('Title')
    expect(result).not.toContain('- Title')
  })

  // 带前导加号的标题：> [!tip] + Title，前导 + 被移除
  it('should remove leading plus from title', () => {
    const md = new MarkdownIt()
    md.use(calloutMarkdownPlugin)

    const result = md.render('> [!tip] + Title\n> content')
    expect(result).toContain('Title')
    expect(result).not.toContain('+ Title')
  })

  // details 类型带自定义标题：> [!details] Custom Summary
  it('should render details callout with custom summary', () => {
    const md = new MarkdownIt()
    md.use(calloutMarkdownPlugin)

    const result = md.render('> [!details] Custom Summary\n> content')
    expect(result).toContain('<details')
    expect(result).toContain('<summary')
    expect(result).toContain('Custom Summary')
    expect(result).toContain('</details>')
  })

  // details 类型无标题：使用大写类型名
  it('should render details callout without title using uppercase type', () => {
    const md = new MarkdownIt()
    md.use(calloutMarkdownPlugin)

    const result = md.render('> [!details]\n> content')
    expect(result).toContain('<details')
    expect(result).toContain('<summary')
    expect(result).toContain('DETAILS')
    expect(result).toContain('</details>')
  })

  // 多行 callout 含空行：> [!note]\n> Line 1\n>\n> Line 2
  it('should handle multi-line callout with empty line', () => {
    const md = new MarkdownIt()
    md.use(calloutMarkdownPlugin)

    const result = md.render('> [!note]\n> Line 1\n>\n> Line 2')
    expect(result).toContain('Line 1')
    expect(result).toContain('Line 2')
    expect(result).toContain('custom-block')
  })

  // callout 后跟普通段落（空行分隔）
  it('should handle callout followed by paragraph', () => {
    const md = new MarkdownIt()
    md.use(calloutMarkdownPlugin)

    const result = md.render('> [!note]\n> content\n\nparagraph after')
    expect(result).toContain('custom-block')
    expect(result).toContain('content')
    expect(result).toContain('paragraph after')
  })

  // callout 前有段落（触发 silent 探测）
  it('should handle callout preceded by paragraph', () => {
    const md = new MarkdownIt()
    md.use(calloutMarkdownPlugin)

    const result = md.render('text before\n> [!note]\n> content')
    expect(result).toContain('text before')
    expect(result).toContain('custom-block')
    expect(result).toContain('content')
  })

  // note 别名 quote：> [!quote] 渲染为 note 类型
  it('should render quote alias as note type', () => {
    const md = new MarkdownIt()
    md.use(calloutMarkdownPlugin)

    const result = md.render('> [!quote]\n> content')
    expect(result).toContain('note')
    expect(result).toContain('quote')
    expect(result).toContain('custom-block')
  })

  // cite 别名：> [!cite] 渲染为 note 类型
  it('should render cite alias as note type', () => {
    const md = new MarkdownIt()
    md.use(calloutMarkdownPlugin)

    const result = md.render('> [!cite]\n> content')
    expect(result).toContain('note')
    expect(result).toContain('cite')
  })

  // todo 别名：> [!todo] 渲染为 info 类型
  it('should render todo alias as info type', () => {
    const md = new MarkdownIt()
    md.use(calloutMarkdownPlugin)

    const result = md.render('> [!todo]\n> content')
    expect(result).toContain('info')
    expect(result).toContain('todo')
  })

  // caution 别名 attention
  it('should render attention alias as caution type', () => {
    const md = new MarkdownIt()
    md.use(calloutMarkdownPlugin)

    const result = md.render('> [!attention]\n> content')
    expect(result).toContain('caution')
    expect(result).toContain('attention')
  })

  // caution 别名 failure
  it('should render failure alias as caution type', () => {
    const md = new MarkdownIt()
    md.use(calloutMarkdownPlugin)

    const result = md.render('> [!failure]\n> content')
    expect(result).toContain('caution')
    expect(result).toContain('failure')
  })

  // caution 别名 fail
  it('should render fail alias as caution type', () => {
    const md = new MarkdownIt()
    md.use(calloutMarkdownPlugin)

    const result = md.render('> [!fail]\n> content')
    expect(result).toContain('caution')
    expect(result).toContain('fail')
  })

  // caution 别名 missing
  it('should render missing alias as caution type', () => {
    const md = new MarkdownIt()
    md.use(calloutMarkdownPlugin)

    const result = md.render('> [!missing]\n> content')
    expect(result).toContain('caution')
    expect(result).toContain('missing')
  })

  // caution 别名 danger
  it('should render danger alias as caution type', () => {
    const md = new MarkdownIt()
    md.use(calloutMarkdownPlugin)

    const result = md.render('> [!danger]\n> content')
    expect(result).toContain('caution')
    expect(result).toContain('danger')
  })

  // caution 别名 error
  it('should render error alias as caution type', () => {
    const md = new MarkdownIt()
    md.use(calloutMarkdownPlugin)

    const result = md.render('> [!error]\n> content')
    expect(result).toContain('caution')
    expect(result).toContain('error')
  })

  // 缩进 4+ 空格的 callout 不匹配（视为代码块）
  it('should not match callout indented 4+ spaces', () => {
    const md = new MarkdownIt()
    md.use(calloutMarkdownPlugin)

    const result = md.render('    > [!note]\n    > content')
    expect(result).not.toContain('custom-block')
  })

  // tab 在 > 之后：>\t[!note]
  it('should handle tab after blockquote marker', () => {
    const md = new MarkdownIt()
    md.use(calloutMarkdownPlugin)

    const result = md.render('>\t[!note]\n> content')
    expect(result).toContain('custom-block')
    expect(result).toContain('content')
  })

  // tab 在 body 行的 > 之后：>\tcontent
  it('should handle tab in body line after blockquote marker', () => {
    const md = new MarkdownIt()
    md.use(calloutMarkdownPlugin)

    const result = md.render('> [!note]\n>\tcontent')
    expect(result).toContain('custom-block')
    expect(result).toContain('content')
  })

  // callout 类型名未闭合（无 ]）：不匹配
  it('should not match callout with unclosed type bracket', () => {
    const md = new MarkdownIt()
    md.use(calloutMarkdownPlugin)

    const result = md.render('> [!note\n> content')
    expect(result).not.toContain('custom-block')
  })

  // > 后无 [! 标记：不匹配 callout（走 blockquote）
  it('should not match when [! marker is missing', () => {
    const md = new MarkdownIt()
    md.use(calloutMarkdownPlugin)

    const result = md.render('> abc def\n> content')
    expect(result).not.toContain('custom-block')
  })

  // > 后过短（max - currentPos < 4）：不匹配
  it('should not match callout that is too short after marker', () => {
    const md = new MarkdownIt()
    md.use(calloutMarkdownPlugin)

    const result = md.render('> [!\n> content')
    expect(result).not.toContain('custom-block')
  })

  // > 后过度缩进（offset - initial >= 4）：不匹配
  it('should not match callout with excessive indentation after marker', () => {
    const md = new MarkdownIt()
    md.use(calloutMarkdownPlugin)

    const result = md.render('>     [!note]\n> content')
    expect(result).not.toContain('custom-block')
  })

  // callout 中的懒续行（非 > 开头的行）
  it('should handle lazy continuation lines in callout', () => {
    const md = new MarkdownIt()
    md.use(calloutMarkdownPlugin)

    const result = md.render('> [!note]\n> content\nlazy continuation')
    expect(result).toContain('custom-block')
    expect(result).toContain('content')
    expect(result).toContain('lazy continuation')
  })

  // callout 在列表项中（blkIndent !== 0）
  it('should handle callout inside list item', () => {
    const md = new MarkdownIt()
    md.use(calloutMarkdownPlugin)

    const result = md.render('- item\n  > [!note]\n  > content')
    expect(result).toContain('custom-block')
    expect(result).toContain('content')
  })

  // callout 在列表中，后面跟缩进不足的行（isOutdented 分支）
  it('should break on outdented line in list callout', () => {
    const md = new MarkdownIt()
    md.use(calloutMarkdownPlugin)

    const result = md.render('- item\n  > [!note]\n  > content\noutdented')
    expect(result).toContain('custom-block')
    expect(result).toContain('content')
    expect(result).toContain('outdented')
  })

  // callout 中空 > 行后跟非 > 行（lastLineEmpty 分支）
  it('should break on non-blockquote line after empty marker line', () => {
    const md = new MarkdownIt()
    md.use(calloutMarkdownPlugin)

    const result = md.render('> [!note]\n> content\n>\ntext without marker')
    expect(result).toContain('custom-block')
    expect(result).toContain('content')
    expect(result).toContain('text without marker')
  })

  // ---- 额外覆盖测试 ----
  // callout body 行 > 后有额外空格（覆盖 offset++ 分支）
  it('should handle body line with extra spaces after marker', () => {
    const md = new MarkdownIt()
    md.use(calloutMarkdownPlugin)

    // > 后有两个空格：>  content
    const result = md.render('> [!note]\n>  more indented content')
    expect(result).toContain('custom-block')
    expect(result).toContain('more indented content')
  })

  // callout body 行 > 后有 tab（覆盖 tab 分支的调整逻辑 offset+=）
  it('should handle body line with tab after marker for additional indent', () => {
    const md = new MarkdownIt()
    md.use(calloutMarkdownPlugin)

    // > 后跟 tab：>\tmore content（tab 不是第一个空格后的额外缩进）
    const result = md.render('> [!note]\n>  \tindented with tab')
    expect(result).toContain('custom-block')
    expect(result).toContain('indented with tab')
  })

  // callout 被其他块规则终止（覆盖 terminator 305-312 分支）
  it('should terminate callout when another block rule matches', () => {
    const md = new MarkdownIt()
    md.use(calloutMarkdownPlugin)

    // callout 后跟另一个以 > 开头的块引用样式内容，可能触发 blockquote 规则终止
    const result = md.render('> [!note]\n> content\nmore text outside')
    expect(result).toContain('custom-block')
    expect(result).toContain('content')
  })

  // 列表中 callout 被终止(覆盖 blkIndent 恢复分支 320-334)
  it('should handle callout termination inside list item', () => {
    const md = new MarkdownIt()
    md.use(calloutMarkdownPlugin)

    const result = md.render('- item\n  > [!note]\n  > content in list\n  still in list')
    expect(result).toContain('custom-block')
    expect(result).toContain('content in list')
  })

  // 空白 callout 定义(无 body 内容)在 silent 模式中
  it('should not match callout without body content in list', () => {
    const md = new MarkdownIt()
    md.use(calloutMarkdownPlugin)

    // callout 在列表中但无 body 内容
    const result = md.render('- item\n  > [!note]\n- next item')
    expect(result).not.toContain('custom-block')
    expect(result).toContain('next item')
  })
})
