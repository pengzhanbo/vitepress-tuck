---
url: /zh/plugins/abbr.md
---
# 缩写词

缩写词插件，为 Markdown 中的缩写词添加可交互的提示框，鼠标悬停或聚焦时显示其完整描述。

基于 [`markdown-it-abbr`](https://github.com/markdown-it/markdown-it-abbr) 分叉并修改。

## 安装

::: npm-to

```sh
npm install vitepress-plugin-abbr
```

:::

## 使用

### vitepress-tuck 模式 推荐

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress-tuck'
import abbr from 'vitepress-plugin-abbr'

export default defineConfig({
  plugins: [abbr()],
})
```

[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}

### 传统模式

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress'
import { abbrMarkdownPlugin } from 'vitepress-plugin-abbr' // [!code ++]

export default defineConfig({
  markdown: {
    config: (md) => {
      // [!code ++:4]
      md.use(abbrMarkdownPlugin, {
        HTML: 'HyperText Markup Language',
        W3C: 'World Wide Web Consortium',
      })
    },
  },
})
```

在主题中注册组件并引入样式：

```ts [.vitepress/theme/index.ts]
import type { Theme } from 'vitepress'
import { enhanceAppWithAbbr } from 'vitepress-plugin-abbr/client' // [!code ++]
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    enhanceAppWithAbbr(ctx) // [!code ++]
  },
} satisfies Theme
```

## 语法

使用 `*[缩写]: 完整描述` 语法定义缩写词，定义后该缩写词在文档中出现的所有位置都会被自动识别并渲染为带有提示框的文本。

```md
HTML 规范由 W3C 维护。

*[HTML]: HyperText Markup Language
*[W3C]: World Wide Web Consortium
```

**渲染结果：**

HTML 规范由 W3C 维护。

\*\[HTML]: HyperText Markup Language
\*\[W3C]: World Wide Web Consortium

### 描述支持内联 Markdown

缩写词的完整描述支持内联 Markdown 语法，例如加粗、斜体、链接和代码等。

```md
**HTML** 规范由 W3C 维护。

*[HTML]: HyperText Markup Language
*[W3C]: World [Wide Web](https://www.w3.org/) Consortium
```

**渲染结果：**

**HTML** 规范由 W3C 维护。

\*\[HTML]: HyperText Markup Language
\*\[W3C]: World [Wide Web](https://www.w3.org/) Consortium

## 全局缩写词

除了在每个 Markdown 文件中内联定义缩写词外，还可以通过插件选项配置全局缩写词预设。当全局定义与内联定义存在相同的缩写词时，内联定义优先。

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress-tuck'
import abbr from 'vitepress-plugin-abbr'

export default defineConfig({
  plugins: [
    abbr({
      HTML: 'HyperText Markup Language',
      W3C: 'World Wide Web Consortium',
    }),
  ],
})
```

配置后，所有页面中出现的 `HTML` 和 `W3C` 都会自动渲染为缩写词，无需在每个文件中重复定义。

## 示例

鼠标移动或聚焦到下方缩写词上，查看完整描述：

```md
HTML W3C API CSS

*[HTML]: HyperText Markup Language
*[W3C]: World Wide Web Consortium
*[API]: Application Programming Interface
*[CSS]: Cascading Style Sheets
```

HTML W3C API CSS

\*\[HTML]: HyperText Markup Language
\*\[W3C]: World Wide Web Consortium
\*\[API]: Application Programming Interface
\*\[CSS]: Cascading Style Sheets
