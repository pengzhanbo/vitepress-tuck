import MarkdownIt from 'markdown-it'
import { describe, expect, it } from 'vitest'
import { commentMarkdownPlugin } from '../src/comment'

describe('commentMarkdownPlugin', () => {
  it('should remove inline comments from output', () => {
    const md = new MarkdownIt()
    md.use(commentMarkdownPlugin)

    const result = md.render('Hello %%hidden%% World')
    expect(result).not.toContain('hidden')
    expect(result).toContain('Hello')
    expect(result).toContain('World')
  })

  it('should remove block comments from output', () => {
    const md = new MarkdownIt()
    md.use(commentMarkdownPlugin)

    const input = 'Before\n%%\nHidden block\n%%\nAfter'
    const result = md.render(input)
    expect(result).not.toContain('Hidden block')
    expect(result).toContain('Before')
    expect(result).toContain('After')
  })

  it('should handle inline comments at start of line', () => {
    const md = new MarkdownIt()
    md.use(commentMarkdownPlugin)

    const result = md.render('%%secret%% visible')
    expect(result).not.toContain('secret')
    expect(result).toContain('visible')
  })

  it('should not match single percent signs', () => {
    const md = new MarkdownIt()
    md.use(commentMarkdownPlugin)

    const result = md.render('100% complete')
    expect(result).toContain('100%')
    expect(result).toContain('complete')
  })

  it('should handle consecutive inline comments', () => {
    const md = new MarkdownIt()
    md.use(commentMarkdownPlugin)

    // The inline comment rule processes %%a%% first, consuming those chars.
    // Then the remaining text starts at position after the first %%.
    // The "%%b%%" part's first %% is found as a new comment starting at the space after 'a'
    const result = md.render('%%a%% %%b%% visible')
    expect(result).toContain('visible')
    // Both 'a' and 'b' should be hidden
    expect(result).not.toContain('>a<')
    expect(result).not.toContain('>b<')
  })

  it('should treat unterminated comment as plain text', () => {
    const md = new MarkdownIt()
    md.use(commentMarkdownPlugin)

    const result = md.render('%% unterminated')
    expect(result).toContain('%% unterminated')
  })

  // 行内注释过短（%%%%）不匹配，覆盖 max - start < 5 分支
  it('should not match inline comment that is too short', () => {
    const md = new MarkdownIt()
    md.use(commentMarkdownPlugin)

    // %%%% 只有 4 个字符，max - start = 4 < 5，不匹配
    const result = md.render('%%%%')
    expect(result).toContain('%%%%')
  })

  // 块级注释：%% 独占一行时触发块级规则（需要前后有空行分隔）
  it('should handle block comment with blank line separation', () => {
    const md = new MarkdownIt()
    md.use(commentMarkdownPlugin)

    const input = 'Before\n\n%%\nblock comment\n%%\n\nAfter'
    const result = md.render(input)
    expect(result).not.toContain('block comment')
    expect(result).toContain('Before')
    expect(result).toContain('After')
  })

  // 块级注释多行内容：验证多行内容被正确移除
  it('should remove multi-line block comments', () => {
    const md = new MarkdownIt()
    md.use(commentMarkdownPlugin)

    const input = '%%\nline 1\nline 2\nline 3\n%%'
    const result = md.render(input)
    expect(result).not.toContain('line 1')
    expect(result).not.toContain('line 2')
    expect(result).not.toContain('line 3')
  })

  // 块级注释紧跟正文：%%\ncomment\n%%\ntext after 验证 text after 保留
  it('should preserve text after block comment', () => {
    const md = new MarkdownIt()
    md.use(commentMarkdownPlugin)

    const input = '%%\ncomment\n%%\n\ntext after'
    const result = md.render(input)
    expect(result).not.toContain('comment')
    expect(result).toContain('text after')
  })

  // 块级注释未闭合时返回 false（不匹配）
  it('should not match unclosed block comment', () => {
    const md = new MarkdownIt()
    md.use(commentMarkdownPlugin)

    const input = '%%\nno closing\nno closing'
    const result = md.render(input)
    // 未闭合时内容原样输出
    expect(result).toContain('no closing')
  })
})
