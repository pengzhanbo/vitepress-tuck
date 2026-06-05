import MarkdownIt from 'markdown-it'
import { describe, expect, it } from 'vitest'
import { plotMarkdownPlugin } from '../src/node/plotPlugin'

describe('plotMarkdownPlugin', () => {
  it('should wrap !!text!! in spoiler tokens', () => {
    const md = new MarkdownIt()
    md.use(plotMarkdownPlugin)

    const result = md.render('The answer is !!plot!!')
    expect(result).toContain('Plot')
    // Should still render the text content
    expect(result).toContain('The answer is')
  })

  it('should render plot tokens with default options', () => {
    const md = new MarkdownIt()
    md.use(plotMarkdownPlugin)

    const result = md.render('!!hidden text!!')
    expect(result).toContain('hidden text')
  })

  it('should pass trigger option', () => {
    const md = new MarkdownIt()
    md.use(plotMarkdownPlugin, { trigger: 'click' })

    const result = md.render('!!click to reveal!!')
    expect(result).toContain('click to reveal')
  })

  it('should pass effect option', () => {
    const md = new MarkdownIt()
    md.use(plotMarkdownPlugin, { effect: 'blur' })

    const result = md.render('!!blurred text!!')
    expect(result).toContain('blurred text')
  })

  it('should pass both trigger and effect options', () => {
    const md = new MarkdownIt()
    md.use(plotMarkdownPlugin, { trigger: 'click', effect: 'blur' })

    const result = md.render('!!secret!!')
    expect(result).toContain('secret')
  })

  it('should not match !! with space', () => {
    const md = new MarkdownIt()
    md.use(plotMarkdownPlugin)

    const result = md.render('!! not hidden')
    // The text "!! not hidden" should be treated as plain text since "!! " is not valid
    expect(result).toContain('!! not hidden')
  })

  it('!!! is parsed as one ! followed by !!not hidden!!', () => {
    const md = new MarkdownIt()
    md.use(plotMarkdownPlugin)

    // The parser sees: '!' then '!!not hidden' then '!!'
    // So it matches the inner content as plot
    const result = md.render('!!!not hidden!!!')
    // The outer '!' and trailing '!' remain as text, inner !!not hidden!! becomes plot
    expect(result).toContain('Plot')
  })

  it('should not match !!text !! (trailing space before !!)', () => {
    const md = new MarkdownIt()
    md.use(plotMarkdownPlugin)

    const result = md.render('!!text with trailing space !!')
    expect(result).toContain('!!text with trailing space !!')
  })

  it('should handle multiple plot instances', () => {
    const md = new MarkdownIt()
    md.use(plotMarkdownPlugin)

    const result = md.render('!!first!! and !!second!!')
    expect(result).toContain('first')
    expect(result).toContain('second')
  })

  it('should handle short content (minimum length)', () => {
    const md = new MarkdownIt()
    md.use(plotMarkdownPlugin)

    const result = md.render('!!a!!')
    expect(result).toContain('a')
  })

  it('should not match !!!! (too short)', () => {
    const md = new MarkdownIt()
    md.use(plotMarkdownPlugin)

    // '!!!!' has 4 chars, min is start(2)+content(1)+end(2)=5
    const result = md.render('!!!!')
    // Should not match - treated as plain text
    expect(result).toContain('!!!!')
  })
})
