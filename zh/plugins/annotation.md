---
url: /zh/plugins/annotation.md
---
# 注释

注释插件，为 Markdown 中的内容添加可交互的注释标记，点击标记后弹出浮层显示注释内容。

注释内容支持完整的块级 Markdown 语法，同一标签可多次定义，所有定义会作为独立条目展示在浮层中。

## 安装

::: npm-to

```sh
npm install vitepress-plugin-annotation
```

:::

## 使用

### vitepress-tuck 模式 推荐

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress-tuck'
import annotation from 'vitepress-plugin-annotation'

export default defineConfig({
  plugins: [annotation()],
})
```

[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}

### 传统模式

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress'
import { annotationMarkdownPlugin } from 'vitepress-plugin-annotation' // [!code ++]

export default defineConfig({
  markdown: {
    config: (md) => {
      // [!code ++:3]
      md.use(annotationMarkdownPlugin, {
        HTML: 'HyperText Markup Language',
      })
    },
  },
})
```

在主题中注册组件：

```ts [.vitepress/theme/index.ts]
import type { Theme } from 'vitepress'
import { enhanceAppWithAnnotation } from 'vitepress-plugin-annotation/client' // [!code ++]
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    enhanceAppWithAnnotation(ctx) // [!code ++]
  },
} satisfies Theme
```

## 语法

使用 `[+标签]: 注释内容` 语法定义注释，然后在文档中使用 `[+标签]` 引用。引用会渲染为一个小的可交互标记，点击后弹出浮层显示注释内容。

```md
中国古代 **四大名著** [+名著] 家喻户晓。

[+名著]: **《三国演义》** — 以三国时期为背景的历史小说。
```

**渲染结果：**

中国古代 **四大名著** \[+名著1] 家喻户晓。

\[+名著1]: **《三国演义》** — 以三国时期为背景的历史小说。

### 注释内容支持块级 Markdown

注释内容支持完整的块级 Markdown 语法，包括标题、段落、列表、代码块等。

```md
该框架基于 [+vue] 构建。

[+vue]:
  ## Vue

  渐进式 JavaScript 框架，用于构建用户界面。

  - 响应式数据绑定
  - 组件化架构
  - [了解更多](https://vuejs.org/)
```

### 多行定义

注释定义可以跨多行。续行必须至少缩进两个空格。缩进块内的空行会作为注释内容的一部分被保留。非缩进的内容行（如下一个定义或新段落）会终止多行定义。

```md
这个概念在 [+detail] 中有详细说明。

[+detail]:
  这是注释的第一段。

  这是第二段，中间隔了一个空行，
  但仍然是同一个注释的一部分。

这一行没有缩进，注释定义到此结束。
```

### 多次定义同一标签

同一标签可以多次定义。所有定义会被收集并作为独立条目展示在浮层中，适合为同一引用提供多条相关信息。

```md
JavaScript 有多个版本 [+js]。

[+js]: **ES2015 (ES6)** — 引入了类、模块、箭头函数等。

[+js]: **ES2020** — 新增了可选链、空值合并运算符、BigInt 等。
```

**渲染结果：**

JavaScript 有多个版本 \[+js]。

\[+js]: **ES2015 (ES6)** — 引入了类、模块、箭头函数等。

\[+js]: **ES2020** — 新增了可选链、空值合并运算符、BigInt 等。

## 全局注释

除了在每个 Markdown 文件中内联定义注释外，还可以通过插件选项配置全局注释预设。这对于需要在所有页面中一致注释的术语很有用。

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress-tuck'
import annotation from 'vitepress-plugin-annotation'

export default defineConfig({
  plugins: [
    annotation({
      HTML: 'HyperText Markup Language',
      CSS: ['Cascading Style Sheets', '一种用于描述文档表现的样式表语言。'],
    }),
  ],
})
```

每个全局注释值可以是字符串或字符串数组。当提供数组时，每个元素成为浮层中的一个独立条目，就像同一标签的多个内联定义一样。

## 示例

点击下方注释标记，查看完整内容：

```md
中国古代 **四大名著** [+名著] 家喻户晓。

[+名著]:
  **《三国演义》：**

  以三国时期的历史为背景，描写了魏、蜀、吴三国之间的政治、军事斗争。

[+名著]:
  **《西游记》：**

  讲述了唐僧师徒四人西天取经的故事，充满了神话色彩和奇幻冒险。

[+名著]:
  **《红楼梦》：**

  以贾、史、王、薛四大家族的兴衰为背景，描写了贾宝玉、林黛玉等人的爱情悲剧。

[+名著]:
  **《水浒传》：**

  描写了北宋末年以宋江为首的 108 位好汉在梁山泊聚义的故事。
```

中国古代 **四大名著** [+名著] 家喻户晓。

[+名著]: **《三国演义》：**

以三国时期的历史为背景，描写了魏、蜀、吴三国之间的政治、军事斗争。

[+名著]: **《西游记》：**

讲述了唐僧师徒四人西天取经的故事，充满了神话色彩和奇幻冒险。

[+名著]: **《红楼梦》：**

以贾、史、王、薛四大家族的兴衰为背景，描写了贾宝玉、林黛玉等人的爱情悲剧。

[+名著]: **《水浒传》：**

描写了北宋末年以宋江为首的 108 位好汉在梁山泊聚义的故事。
