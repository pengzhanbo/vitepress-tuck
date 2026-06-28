import MarkdownIt from 'markdown-it'
import { describe, expect, it } from 'vitest'
import { collapseMarkdownPlugin } from '../src/node/markdown.js'

// =============================================================================
// collapseMarkdownPlugin 单元测试
// =============================================================================
describe('collapseMarkdownPlugin', () => {
  // ---- 基础渲染 ----

  it('基础容器渲染为 VPCollapse 组件', () => {
    const md = new MarkdownIt()
    md.use(collapseMarkdownPlugin)

    const result = md.render('::: collapse\n- 标题 1\n\n  内容 1\n\n- 标题 2\n\n  内容 2\n:::')
    expect(result).toContain('<VPCollapse')
    expect(result).toContain('</VPCollapse>')
  })

  it('每个列表项渲染为 VPCollapseItem 组件', () => {
    const md = new MarkdownIt()
    md.use(collapseMarkdownPlugin)

    const result = md.render('::: collapse\n- 标题 1\n\n  内容 1\n\n- 标题 2\n\n  内容 2\n:::')
    const itemMatches = result.match(/<VPCollapseItem/g)
    expect(itemMatches).toHaveLength(2)
    expect(result).toContain('</VPCollapseItem>')
  })

  it('列表项标题渲染在 #title 插槽中', () => {
    const md = new MarkdownIt()
    md.use(collapseMarkdownPlugin)

    const result = md.render('::: collapse\n- 我的标题\n\n  内容\n:::')
    expect(result).toContain('<template #title>')
    expect(result).toContain('</template>')
    expect(result).toContain('我的标题')
  })

  it('列表项正文渲染在默认插槽中', () => {
    const md = new MarkdownIt()
    md.use(collapseMarkdownPlugin)

    const result = md.render('::: collapse\n- 标题\n\n  这是正文内容\n:::')
    expect(result).toContain('这是正文内容')
  })

  it('每个项有正确的递增索引', () => {
    const md = new MarkdownIt()
    md.use(collapseMarkdownPlugin)

    const result = md.render('::: collapse\n- A\n\n  a\n\n- B\n\n  b\n\n- C\n\n  c\n:::')
    expect(result).toContain(':index="0"')
    expect(result).toContain(':index="1"')
    expect(result).toContain(':index="2"')
  })

  // ---- 容器属性 ----

  it('accordion 属性被传递到 VPCollapse', () => {
    const md = new MarkdownIt()
    md.use(collapseMarkdownPlugin)

    const result = md.render('::: collapse accordion\n- A\n\n  a\n:::')
    expect(result).toContain('<VPCollapse accordion')
  })

  it('card 属性被传递到 VPCollapse', () => {
    const md = new MarkdownIt()
    md.use(collapseMarkdownPlugin)

    const result = md.render('::: collapse card\n- A\n\n  a\n:::')
    expect(result).toContain('<VPCollapse card')
  })

  it('accordion 和 card 属性可组合使用', () => {
    const md = new MarkdownIt()
    md.use(collapseMarkdownPlugin)

    const result = md.render('::: collapse accordion card\n- A\n\n  a\n:::')
    expect(result).toContain('<VPCollapse accordion card')
  })

  it('无属性时 VPCollapse 不包含额外属性', () => {
    const md = new MarkdownIt()
    md.use(collapseMarkdownPlugin)

    const result = md.render('::: collapse\n- A\n\n  a\n:::')
    expect(result).toContain('<VPCollapse>')
  })

  // ---- 手风琴模式 ----

  it('手风琴模式 + expand 无 :+ 标记时,默认展开第一项并传递 index', () => {
    const md = new MarkdownIt()
    md.use(collapseMarkdownPlugin)

    const result = md.render('::: collapse accordion expand\n- A\n\n  a\n\n- B\n\n  b\n:::')
    expect(result).toContain('<VPCollapse accordion :index="0"')
  })

  it('手风琴模式无 expand 且无 :+ 标记时不传递 index', () => {
    const md = new MarkdownIt()
    md.use(collapseMarkdownPlugin)

    const result = md.render('::: collapse accordion\n- A\n\n  a\n\n- B\n\n  b\n:::')
    expect(result).toContain('<VPCollapse accordion>')
  })

  it('手风琴模式有 expand 但 :+ 标记优先于 expand 属性', () => {
    const md = new MarkdownIt()
    md.use(collapseMarkdownPlugin)

    const result = md.render('::: collapse accordion expand\n- A\n\n  a\n\n- :+ B\n\n  b\n:::')
    // :+ 在第二项,index 应为 1
    expect(result).toContain('<VPCollapse accordion :index="1"')
  })

  // ---- 单项展开标记 ----

  it(':+ 标记展开项并从标题中移除标记', () => {
    const md = new MarkdownIt()
    md.use(collapseMarkdownPlugin)

    const result = md.render('::: collapse\n- :+ 展开\n\n  内容\n:::')
    expect(result).toContain('<VPCollapseItem expand')
    // 标记被移除,标题应为"展开"
    expect(result).toContain('展开')
    expect(result).not.toContain(':+')
  })

  it(':- 标记收起项并从标题中移除标记', () => {
    const md = new MarkdownIt()
    md.use(collapseMarkdownPlugin)

    const result = md.render('::: collapse\n- :- 收起\n\n  内容\n:::')
    // expand 为 false,stringifyAttrs 会省略 false 布尔值
    expect(result).not.toContain('expand')
    expect(result).toContain('收起')
    expect(result).not.toContain(':-')
  })

  it('无标记时遵循容器 expand 属性', () => {
    const md = new MarkdownIt()
    md.use(collapseMarkdownPlugin)

    const result = md.render('::: collapse expand\n- A\n\n  a\n:::')
    expect(result).toContain('<VPCollapseItem expand')
  })

  it('无标记且容器无 expand 时项默认收起', () => {
    const md = new MarkdownIt()
    md.use(collapseMarkdownPlugin)

    const result = md.render('::: collapse\n- A\n\n  a\n:::')
    expect(result).not.toContain('expand')
  })

  it(':+ 标记后无空格也能正确解析', () => {
    const md = new MarkdownIt()
    md.use(collapseMarkdownPlugin)

    const result = md.render('::: collapse\n- :+展开\n\n  内容\n:::')
    expect(result).toContain('<VPCollapseItem expand')
    expect(result).toContain('展开')
  })

  it(':- 标记后无空格也能正确解析', () => {
    const md = new MarkdownIt()
    md.use(collapseMarkdownPlugin)

    const result = md.render('::: collapse\n- :-收起\n\n  内容\n:::')
    expect(result).toContain('收起')
    expect(result).not.toContain(':-')
  })

  it(':+ 和 :- 可在同一容器中混合使用', () => {
    const md = new MarkdownIt()
    md.use(collapseMarkdownPlugin)

    const result = md.render('::: collapse\n- :+ A\n\n  a\n\n- :- B\n\n  b\n\n- C\n\n  c\n:::')
    // 第一项展开,第二项收起,第三项无标记(默认收起,因为容器无 expand)
    const itemMatches = result.match(/<VPCollapseItem[^>]*>/g)
    expect(itemMatches).toHaveLength(3)
    expect(itemMatches![0]).toContain('expand')
    expect(itemMatches![1]).not.toContain('expand')
    expect(itemMatches![2]).not.toContain('expand')
  })

  // ---- 手风琴模式 :+ 标记行为 ----

  it('手风琴模式多个 :+ 标记仅第一个生效', () => {
    const md = new MarkdownIt()
    md.use(collapseMarkdownPlugin)

    const result = md.render('::: collapse accordion\n- :+ A\n\n  a\n\n- :+ B\n\n  b\n:::')
    const itemMatches = result.match(/<VPCollapseItem[^>]*>/g)
    expect(itemMatches![0]).toContain('expand')
    // 第二个 :+ 不生效,expand 为 undefined(被省略)
    expect(itemMatches![1]).not.toContain('expand')
    // index 指向第一项
    expect(result).toContain(':index="0"')
  })

  it('手风琴模式 :- 标记不展开任何项', () => {
    const md = new MarkdownIt()
    md.use(collapseMarkdownPlugin)

    const result = md.render('::: collapse accordion\n- :- A\n\n  a\n\n- :- B\n\n  b\n:::')
    // 无 :+ 且无 expand,defaultIndex 为 undefined
    expect(result).toContain('<VPCollapse accordion>')
    // 所有项都不展开
    expect(result).not.toContain('expand')
  })

  // ---- 有序列表 ----

  it('有序列表也能渲染为折叠面板', () => {
    const md = new MarkdownIt()
    md.use(collapseMarkdownPlugin)

    const result = md.render('::: collapse\n1. 第一项\n\n   内容 1\n\n2. 第二项\n\n   内容 2\n:::')
    const itemMatches = result.match(/<VPCollapseItem/g)
    expect(itemMatches).toHaveLength(2)
    expect(result).toContain('第一项')
    expect(result).toContain('第二项')
  })

  it('有序列表 + accordion 模式正常工作', () => {
    const md = new MarkdownIt()
    md.use(collapseMarkdownPlugin)

    const result = md.render('::: collapse accordion expand\n1. A\n\n   a\n\n2. B\n\n   b\n:::')
    expect(result).toContain('<VPCollapse accordion :index="0"')
  })

  // ---- 嵌套列表 ----

  it('嵌套列表不转换为折叠项,仅根级列表项转换', () => {
    const md = new MarkdownIt()
    md.use(collapseMarkdownPlugin)

    const result = md.render([
      '::: collapse',
      '- 根项',
      '',
      '  - 嵌套项 1',
      '  - 嵌套项 2',
      '',
      '  根项内容',
      ':::',
    ].join('\n'))
    // 仅 1 个 VPCollapseItem(根级)
    const itemMatches = result.match(/<VPCollapseItem/g)
    expect(itemMatches).toHaveLength(1)
    // 嵌套项应作为列表渲染在正文中
    expect(result).toContain('嵌套项 1')
    expect(result).toContain('嵌套项 2')
  })

  // ---- 内容格式 ----

  it('标题中的 markdown 格式被正确渲染', () => {
    const md = new MarkdownIt()
    md.use(collapseMarkdownPlugin)

    const result = md.render('::: collapse\n- **加粗标题**\n\n  内容\n:::')
    expect(result).toContain('<strong>加粗标题</strong>')
  })

  it('正文中的 markdown 格式被正确渲染', () => {
    const md = new MarkdownIt()
    md.use(collapseMarkdownPlugin)

    const result = md.render('::: collapse\n- 标题\n\n  **加粗**和`代码`\n:::')
    expect(result).toContain('<strong>加粗</strong>')
    expect(result).toContain('<code>代码</code>')
  })

  it('正文中可包含代码块', () => {
    const md = new MarkdownIt()
    md.use(collapseMarkdownPlugin)

    const result = md.render('::: collapse\n- 标题\n\n  ```ts\n  const a = 1\n  ```\n:::')
    expect(result).toContain('<pre><code')
    expect(result).toContain('const a = 1')
  })

  it('正文中可包含多段内容', () => {
    const md = new MarkdownIt()
    md.use(collapseMarkdownPlugin)

    const result = md.render('::: collapse\n- 标题\n\n  第一段。\n\n  第二段。\n:::')
    expect(result).toContain('第一段。')
    expect(result).toContain('第二段。')
  })

  // ---- 边界情况 ----

  it('空容器(无列表项)正常渲染', () => {
    const md = new MarkdownIt()
    md.use(collapseMarkdownPlugin)

    const result = md.render('::: collapse\n:::')
    expect(result).toContain('<VPCollapse>')
    expect(result).toContain('</VPCollapse>')
    expect(result).not.toContain('<VPCollapseItem')
  })

  it('容器内无列表的文本内容正常渲染', () => {
    const md = new MarkdownIt()
    md.use(collapseMarkdownPlugin)

    const result = md.render('::: collapse\n一些文本\n:::')
    expect(result).toContain('<VPCollapse>')
    expect(result).toContain('一些文本')
  })

  it('单个列表项正常渲染', () => {
    const md = new MarkdownIt()
    md.use(collapseMarkdownPlugin)

    const result = md.render('::: collapse\n- 唯一项\n\n  内容\n:::')
    const itemMatches = result.match(/<VPCollapseItem/g)
    expect(itemMatches).toHaveLength(1)
    expect(result).toContain(':index="0"')
  })

  it('同一页面中多个 collapse 容器独立渲染', () => {
    const md = new MarkdownIt()
    md.use(collapseMarkdownPlugin)

    const result = md.render([
      '::: collapse',
      '- A',
      '',
      '  a',
      ':::',
      '',
      '::: collapse accordion',
      '- B',
      '',
      '  b',
      ':::',
    ].join('\n'))
    // 使用 <VPCollapse[ >] 避免匹配到 <VPCollapseItem
    const containerMatches = result.match(/<VPCollapse[ >]/g)
    expect(containerMatches).toHaveLength(2)
    const itemMatches = result.match(/<VPCollapseItem/g)
    expect(itemMatches).toHaveLength(2)
  })

  it('标题为空时不报错', () => {
    const md = new MarkdownIt()
    md.use(collapseMarkdownPlugin)

    const result = md.render('::: collapse\n-\n\n  内容\n:::')
    expect(result).toContain('<VPCollapseItem')
  })

  // ---- 标记解析边界 ----

  it('标题中 :+ 不在开头时不被识别为标记', () => {
    const md = new MarkdownIt()
    md.use(collapseMarkdownPlugin)

    const result = md.render('::: collapse\n- 文本 :+ 其他\n\n  内容\n:::')
    // :+ 不在开头,不匹配正则 /^:[+\-]/
    expect(result).not.toContain('expand')
    expect(result).toContain('文本 :+ 其他')
  })

  it('标题中冒号后无 + 或 - 不被识别为标记', () => {
    const md = new MarkdownIt()
    md.use(collapseMarkdownPlugin)

    const result = md.render('::: collapse\n- :标题\n\n  内容\n:::')
    expect(result).toContain(':标题')
    expect(result).not.toContain('expand')
  })

  it('标题前有空白时 :+ 标记仍能正确解析', () => {
    const md = new MarkdownIt()
    md.use(collapseMarkdownPlugin)

    // markdown-it 会 trim inline content,所以前导空格不影响
    const result = md.render('::: collapse\n-    :+ 展开\n\n  内容\n:::')
    expect(result).toContain('<VPCollapseItem expand')
    expect(result).toContain('展开')
  })

  it('expand 属性为 false 时不展开项', () => {
    const md = new MarkdownIt()
    md.use(collapseMarkdownPlugin)

    // expand=false 被解析为 boolean false
    const result = md.render('::: collapse expand=false\n- A\n\n  a\n:::')
    expect(result).not.toContain('expand')
  })

  // ---- 多级嵌套列表深度 ----

  it('三级嵌套列表中仅一级列表项转换为折叠项', () => {
    const md = new MarkdownIt()
    md.use(collapseMarkdownPlugin)

    const result = md.render([
      '::: collapse',
      '- 一级',
      '',
      '  - 二级',
      '',
      '    - 三级',
      '',
      '  一级内容',
      ':::',
    ].join('\n'))
    const itemMatches = result.match(/<VPCollapseItem/g)
    expect(itemMatches).toHaveLength(1)
  })

  // ---- 手风琴模式 expand=false 边界 ----

  it('手风琴模式 expand=false 时不默认展开第一项', () => {
    const md = new MarkdownIt()
    md.use(collapseMarkdownPlugin)

    const result = md.render('::: collapse accordion expand=false\n- A\n\n  a\n\n- B\n\n  b\n:::')
    // expand 为 false,不满足 attrs.accordion && attrs.expand 条件
    // VPCollapse 标签不应包含 :index 属性
    const containerMatch = result.match(/<VPCollapse[^>]*>/)
    expect(containerMatch).toBeTruthy()
    expect(containerMatch![0]).not.toContain(':index=')
  })

  it('手风琴模式 :+ 标记使 index 指向对应项', () => {
    const md = new MarkdownIt()
    md.use(collapseMarkdownPlugin)

    const result = md.render('::: collapse accordion\n- A\n\n  a\n\n- :+ B\n\n  b\n\n- C\n\n  c\n:::')
    // :+ 在第二项(idx=1),index 应为 1
    expect(result).toContain(':index="1"')
    const itemMatches = result.match(/<VPCollapseItem[^>]*>/g)
    expect(itemMatches![1]).toContain('expand')
  })

  it('非手风琴模式 :+ 标记不影响其他项的展开状态', () => {
    const md = new MarkdownIt()
    md.use(collapseMarkdownPlugin)

    const result = md.render('::: collapse\n- :+ A\n\n  a\n\n- B\n\n  b\n\n- :+ C\n\n  c\n:::')
    const itemMatches = result.match(/<VPCollapseItem[^>]*>/g)
    // 非手风琴模式,每个 :+ 独立展开
    expect(itemMatches![0]).toContain('expand')
    expect(itemMatches![1]).not.toContain('expand')
    expect(itemMatches![2]).toContain('expand')
  })
})
