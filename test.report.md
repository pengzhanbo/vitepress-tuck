# 测试问题报告

> 本报告记录在为 `vitepress-tuck` monorepo 各插件编写单元测试过程中发现的源代码问题。
> 依据任务约定,测试期间发现的源码缺陷**未对源码做任何修改**,仅在此汇总,供后续代码审查与修复参考。

## 一、测试概览

| 指标 | 数值 |
| --- | --- |
| 测试文件数 | 25 |
| 测试用例总数 | 633 |
| 通过数 | 633 |
| 失败数 | 0 |
| Lint 检查 | 通过(无错误) |

### 覆盖率(按插件)

| 插件 | 语句覆盖率 |
| --- | --- |
| plugin-abbr | 97.8% |
| plugin-mermaid-tuck | 100% |
| plugin-pdf | 100% |
| plugin-plantuml | 98.64% |
| plugin-repo-card | 100% |
| plugin-video | 100% |
| plugin-watermark | 100% |
| plugin-obsidian | 96.44% |

> 所有插件均达到 90% 以上的语句/分支/函数覆盖率目标。

## 二、发现的源码问题

共发现 **6** 个源码问题,分布如下:

| 编号 | 插件 | 文件 | 问题类型 |
| --- | --- | --- | --- |
| #1 | plugin-mermaid-tuck | `src/node/markdown.ts:39` | 标签大小写不一致 |
| #2 | plugin-video | `src/node/youtube.ts:15,67` | URL 双斜杠 |
| #3 | plugin-obsidian | `src/wikiLink.ts:140` | 锚点丢失 |
| #4 | plugin-pdf | `src/node/markdown.ts:51` | ratio 单位错误 |
| #5 | plugin-obsidian | `src/embedLink.ts:63` | 空内容校验不足 |
| #6 | plugin-pdf | `src/node/markdown.ts:48` | zoom=0 被忽略 |

---

### 问题 #1:Mermaid 组件闭合标签大小写不一致

- **所属插件**:plugin-mermaid-tuck
- **文件位置**:[packages/plugin-mermaid-tuck/src/node/markdown.ts](file:///Users/pengzhanbo/OpenSource/coding/vitepress-tuck/packages/plugin-mermaid-tuck/src/node/markdown.ts#L39)
- **问题描述**:
  在 [markdown.ts:39](file:///Users/pengzhanbo/OpenSource/coding/vitepress-tuck/packages/plugin-mermaid-tuck/src/node/markdown.ts#L39) 中,mermaid 围栏代码块被渲染为 Vue 组件,但开始标签与闭合标签大小写不一致:

  ```ts
  return `<VPMermaid id="Mermaid-${idx}" graph="${encodeURIComponent(content)}"><template #source>${code}</template></VPmermaid>`
  //      ^^^^^^^^^ 大写 M                                                                                ^^^^^^^^^ 小写 m
  ```

  开始标签为 `<VPMermaid>`(大写 M),闭合标签为 `</VPmermaid>`(小写 m)。

- **复现步骤**:

  ```ts
  import MarkdownIt from 'markdown-it'
  import { mermaidMarkdownPlugin } from 'vitepress-plugin-mermaid-tuck/node'
  const md = new MarkdownIt().use(mermaidMarkdownPlugin)
  const html = md.render('```mermaid\ngraph TD; A-->B\n```')
  // html 中包含 <VPMermaid ...></VPmermaid>
  ```

  断言 `html` 中闭合标签为 `</VPmermaid>`(小写),与开始标签 `<VPMermaid>` 不匹配。

- **影响范围**:
  - 在原生 HTML5 中标签名不区分大小写,浏览器渲染通常不出错;
  - 但 Vue 单文件组件解析器对自定义元素标签名**区分大小写**,在严格的 Vue 模板编译或 SSR 环境下,可能因标签不匹配导致组件无法正确闭合、出现警告或渲染异常;
  - 影响所有 mermaid 代码块的渲染输出。

- **建议修复方案**:
  将闭合标签统一为大写 M,与开始标签保持一致:

  ```ts
  return `<VPMermaid id="Mermaid-${idx}" graph="${encodeURIComponent(content)}"><template #source>${code}</template></VPMermaid>`
  ```

---

### 问题 #2:YouTube 嵌入 URL 出现双斜杠

- **所属插件**:plugin-video
- **文件位置**:[packages/plugin-video/src/node/youtube.ts](file:///Users/pengzhanbo/OpenSource/coding/vitepress-tuck/packages/plugin-video/src/node/youtube.ts)
- **问题描述**:
  常量 `YOUTUBE_LINK` 已含尾部斜杠([youtube.ts:15](file:///Users/pengzhanbo/OpenSource/coding/vitepress-tuck/packages/plugin-video/src/node/youtube.ts#L15)),而生成 `src` 时又拼接了一个 `/`([youtube.ts:67](file:///Users/pengzhanbo/OpenSource/coding/vitepress-tuck/packages/plugin-video/src/node/youtube.ts#L67)):

  ```ts
  const YOUTUBE_LINK = 'https://www.youtube.com/embed/' // 已含尾部 /
  // ...
  const src = `${YOUTUBE_LINK}/${meta.id}?${params.toString()}`
  //             ^^^^^^^^^^^^^^^                 ^
  //             已含 /                         又拼一个 /
  ```

  最终生成的 URL 形如 `https://www.youtube.com/embed//dQw4w9WgXcQ?...`,路径中出现双斜杠。

- **复现步骤**:

  ```ts
  import MarkdownIt from 'markdown-it'
  import { youtubeMarkdownPlugin } from 'vitepress-plugin-video/node'
  const md = new MarkdownIt().use(youtubeMarkdownPlugin)
  const html = md.render('@[youtube](dQw4w9WgXcQ)')
  // html 中 src 为 https://www.youtube.com/embed//dQw4w9WgXcQ?
  ```

  断言 `src` 包含 `/embed//` 双斜杠。

- **影响范围**:
  - YouTube 服务器对双斜杠通常能容错重定向到正确地址,功能不受影响;
  - 但在部分代理、CDN 或严格的 URL 校验场景下可能被识别为非法路径,导致视频无法加载;
  - 属于代码质量问题,URL 不规范。

- **建议修复方案**:
  移除模板字符串中多余的 `/`,任选其一:

  ```ts
  // 方案 A:保留常量尾部 /,移除模板中的 /
  const src = `${YOUTUBE_LINK}${meta.id}?${params.toString()}`
  // 方案 B:常量去掉尾部 /,模板保留 /
  const YOUTUBE_LINK = 'https://www.youtube.com/embed'
  const src = `${YOUTUBE_LINK}/${meta.id}?${params.toString()}`
  ```

---

### 问题 #3:Wiki 链接 else 分支未追加锚点 slug

- **所属插件**:plugin-obsidian
- **文件位置**:[packages/plugin-obsidian/src/wikiLink.ts:140](file:///Users/pengzhanbo/OpenSource/coding/vitepress-tuck/packages/plugin-obsidian/src/wikiLink.ts#L140)
- **问题描述**:
  在 [wikiLink.ts](file:///Users/pengzhanbo/OpenSource/coding/vitepress-tuck/packages/plugin-obsidian/src/wikiLink.ts) 中,`[[...]]` 内部链接解析分为四个分支。其中三个分支都会将锚点 `slug`(形如 `#标题`)追加到 `href`,唯独处理"其他链接"(相对/绝对路径但文件不存在)的 else 分支遗漏了 `slug`:

  | 分支 | 行号 | href 拼接 |
  | --- | --- | --- |
  | 外部链接(HTTP) | 116 | `${filename}${slug}` ✅ |
  | 页内 hash 链接 | 123 | `slug` ✅ |
  | 内部链接(文件存在) | 131 | `${href}${slug}` ✅ |
  | **其他链接(文件不存在)** | **140** | **`url`(无 slug)** ❌ |

  ```ts
  else {
    const url = filename[0] === '.'
      ? path.join(path.dirname(state.env.relativePath), filename)
      : filename
    linkToken.attrJoin('href', url) // 缺少 ${slug}
    textToken.content ||= [filename, ...titles].join(' > ')
  }
  ```

- **复现步骤**:

  ```ts
  import MarkdownIt from 'markdown-it'
  import { wikiLinkMarkdownPlugin } from 'vitepress-plugin-obsidian'
  const md = new MarkdownIt().use(wikiLinkMarkdownPlugin, { root: '/root', files: [] })
  // env.path 需指向真实文件路径,使 state.env.path 存在
  const html = md.render('[[./not-exist.md#章节标题]]', { path: '/root/index.md', relativePath: 'index.md' })
  // html 中 href 为 ./not-exist.md,缺少 #章节标题
  ```

  断言 `href` 不包含 `#` 开头的锚点。

- **影响范围**:
  - 当用户使用 `[[相对路径#标题]]` 或 `[[绝对路径#标题]]` 指向一个不存在的文件时,链接会丢失 `#标题` 锚点,点击后无法跳转到对应章节;
  - 影响所有指向不存在文件的带锚点 wiki 链接;
  - 与其他三个分支行为不一致,属于逻辑遗漏。

- **建议修复方案**:
  在 else 分支的 `href` 拼接中追加 `slug`,与其他分支保持一致:

  ```ts
  else {
    const url = filename[0] === '.'
      ? path.join(path.dirname(state.env.relativePath), filename)
      : filename
    linkToken.attrJoin('href', `${url}${slug}`)
    textToken.content ||= [filename, ...titles].join(' > ')
  }
  ```

---

### 问题 #4:PDF ratio 纯数字被错误添加 px 后缀

- **所属插件**:plugin-pdf
- **文件位置**:[packages/plugin-pdf/src/node/markdown.ts:51](file:///Users/pengzhanbo/OpenSource/coding/vitepress-tuck/packages/plugin-pdf/src/node/markdown.ts#L51)
- **问题描述**:
  在 [markdown.ts:51](file:///Users/pengzhanbo/OpenSource/coding/vitepress-tuck/packages/plugin-pdf/src/node/markdown.ts#L51) 中,`ratio` 属性通过 `parseRect` 处理:

  ```ts
  ratio: attrs.ratio ? parseRect(attrs.ratio) : '',
  ```

  `parseRect` 的设计用途是处理宽度/高度(纯数字加 `px`,百分比原样返回)。但 `ratio` 用于 CSS `aspect-ratio`,其合法值是纯数字比例(如 `16/9`、`1.77`)或数字字符串,**不应添加 `px` 单位**。

  当用户写 `ratio="2"` 时,`parseRect` 返回 `"2px"`,生成的 `aspect-ratio: 2px` 是无效 CSS。

- **复现步骤**:

  ```ts
  import MarkdownIt from 'markdown-it'
  import { pdfMarkdownPlugin } from 'vitepress-plugin-pdf/node'
  const md = new MarkdownIt().use(pdfMarkdownPlugin)
  const html = md.render('@[pdf zoom="1" ratio="2"](/files/sample.pdf)')
  // html 中 ratio="2px",aspect-ratio: 2px 无效
  ```

  断言 `ratio` 属性值为 `"2px"`。

- **影响范围**:
  - 当用户以纯数字形式指定 `ratio`(如 `2`、`1.77`)时,生成的 `aspect-ratio` CSS 无效,浏览器会忽略该属性,PDF 容器无法获得预期的宽高比;
  - 仅影响纯数字 ratio,百分比或带 `/` 的比例(如 `16/9`)不受影响;
  - 与 `plugin-video` 中 `youtube` 等其他插件直接使用 `attrs.ratio`(不经 `parseRect`)的处理方式不一致。

- **建议修复方案**:
  `ratio` 不应使用 `parseRect` 处理,应直接透传原始值:

  ```ts
  ratio: attrs.ratio ?? '',
  ```

---

### 问题 #5:Obsidian embedLink 空内容校验不足

- **所属插件**:plugin-obsidian
- **文件位置**:[packages/plugin-obsidian/src/embedLink.ts:63](file:///Users/pengzhanbo/OpenSource/coding/vitepress-tuck/packages/plugin-obsidian/src/embedLink.ts#L63)
- **问题描述**:
  在 [embedLink.ts:63](file:///Users/pengzhanbo/OpenSource/coding/vitepress-tuck/packages/plugin-obsidian/src/embedLink.ts#L63) 的块级嵌入规则中,通过 `max - start < 6` 校验最小长度。`![[ ]]`(含一个空格)正好是 6 个字符,通过该校验:

  ```ts
  // - ![[]]
  if (max - start < 6)
    return false
  ```

  随后提取内容 `content = line.slice(3, -2).trim()` 得到空字符串,最终进入"未命中的其他情况"分支,生成一个空的 `<a href="">` 链接。

- **复现步骤**:

  ```ts
  import MarkdownIt from 'markdown-it'
  import { embedLinkMarkdownPlugin } from 'vitepress-plugin-obsidian'
  const md = new MarkdownIt().use(embedLinkMarkdownPlugin, { root: '/root', files: [] })
  const html = md.render('![[ ]]', { path: '/root/index.md', relativePath: 'index.md' })
  // html 中包含 <a href="">...</a> 空链接
  ```

  断言输出包含 `href=""` 的空 `<a>` 标签。

- **影响范围**:
  - 当用户误写 `![[ ]]`(或 `![[  ]]` 等仅含空白)时,会渲染出一个指向当前页面自身的空链接,影响页面质量与可访问性;
  - 不影响正常使用的嵌入语法;
  - 属于边界输入处理不足。

- **建议修复方案**:
  在提取 `content` 后增加非空校验,空内容直接返回 `false` 让其他规则处理:

  ```ts
  const content = line.slice(3, -2).trim()
  if (!content)
    return false
  genEmbedAsset(state, content, root, files)
  ```

---

### 问题 #6:PDF zoom="0" 被错误忽略回退为默认值

- **所属插件**:plugin-pdf
- **文件位置**:[packages/plugin-pdf/src/node/markdown.ts:48](file:///Users/pengzhanbo/OpenSource/coding/vitepress-tuck/packages/plugin-pdf/src/node/markdown.ts#L48)
- **问题描述**:
  在 [markdown.ts:48](file:///Users/pengzhanbo/OpenSource/coding/vitepress-tuck/packages/plugin-pdf/src/node/markdown.ts#L48) 中,`zoom` 使用 `||` 短路求值:

  ```ts
  zoom: +attrs.zoom || 50,
  ```

  当用户显式设置 `zoom="0"` 时,`+attrs.zoom` 为数字 `0`(falsy),触发 `||` 回退为默认值 `50`。用户明确指定的 `0` 被忽略。

- **复现步骤**:

  ```ts
  import MarkdownIt from 'markdown-it'
  import { pdfMarkdownPlugin } from 'vitepress-plugin-pdf/node'
  const md = new MarkdownIt().use(pdfMarkdownPlugin)
  const html = md.render('@[pdf zoom="0"](/files/sample.pdf)')
  // html 中 zoom="50",而非用户指定的 0
  ```

  断言 `zoom` 属性值为 `"50"` 而非 `"0"`。

- **影响范围**:
  - 当用户希望以 `0` 缩放(即原始尺寸)显示 PDF 时,设置 `zoom="0"` 不生效,会被强制改为 `50`;
  - 仅影响显式设置 `zoom="0"` 的场景,其他数值不受影响;
  - 属于 falsy 值判断的经典陷阱。

- **建议修复方案**:
  区分"未设置"与"设置为 0"两种情况,使用 `??` 或显式判断:

  ```ts
  // 方案 A:使用 ?? 处理 undefined/null
  zoom: attrs.zoom != null ? +attrs.zoom : 50,
  // 方案 B:仅当属性不存在时回退
  zoom: attrs.zoom === undefined ? 50 : +attrs.zoom,
  ```

---

## 三、总结与建议

### 测试结论

- 全部 633 个单元测试用例通过,覆盖 8 个插件的核心 node 端逻辑;
- 所有插件覆盖率均达到 90% 以上目标;
- ESLint / Stylelint 检查无错误;
- 测试过程中发现 6 个源码问题,均**未修改源码**,仅记录于此报告。

### 问题严重度分布

| 严重度 | 问题编号 | 数量 |
| --- | --- | --- |
| 中(影响功能正确性) | #3、#4、#6 | 3 |
| 低(边界/容错问题) | #2、#5 | 2 |
| 提示(代码规范) | #1 | 1 |

### 修复优先级建议

1. **优先修复 #3、#4、#6**:这三处会导致用户明确指定的配置不生效(ratio 无效、zoom 被覆盖、锚点丢失),影响实际使用体验;
2. **建议修复 #2、#5**:URL 双斜杠与空内容校验属于边界容错问题,虽多数场景能正常运行,但应予规范化;
3. **规范化 #1**:统一标签大小写,避免在严格 Vue 解析环境下的潜在风险。

### 后续工作建议

- 修复上述问题后,可补充针对修复行为的回归测试(如 `zoom="0"` 应保留为 `0`、`ratio="2"` 应为 `"2"` 而非 `"2px"` 等);
- 建议为 `plugin-toolkit` 的 `parseRect` 等工具函数补充更完整的单元测试,明确其语义边界,避免被误用于非尺寸场景(如 #4 的 ratio)。
