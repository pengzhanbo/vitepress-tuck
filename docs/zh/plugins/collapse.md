# Collapse

<NpmBadge name="vitepress-plugin-collapse" />

折叠面板容器插件，用于在 Markdown 中创建可折叠的内容区块，支持手风琴模式、卡片样式和单项展开控制。

## 安装

::: npm-to

```sh
npm install vitepress-plugin-collapse
```

:::

## 使用

### vitepress-tuck 模式 <Badge type="tip">推荐</Badge>

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress-tuck'
import collapse from 'vitepress-plugin-collapse'

export default defineConfig({
  plugins: [collapse()],
})
```

[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}

### 传统模式

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress'
import { collapseMarkdownPlugin } from 'vitepress-plugin-collapse'

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(collapseMarkdownPlugin)
    },
  },
})
```

```ts [.vitepress/theme/index.ts]
import type { Theme } from 'vitepress'
import { enhanceAppWithCollapse } from 'vitepress-plugin-collapse/client'
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    enhanceAppWithCollapse(ctx)
  },
} satisfies Theme
```

## 语法

使用 `::: collapse` 容器配合列表来创建可折叠区块。每个列表项为一个折叠面板：
第一行为标题，后续缩进内容为面板正文。

### 基础用法

```md
::: collapse

- 标题 1

  内容 1

- 标题 2

  内容 2

:::
```

**渲染结果：**

::: collapse

- 标题 1

  内容 1

- 标题 2

  内容 2

:::

### 手风琴模式

添加 `accordion` 启用手风琴模式 —— 同时只能展开一项，展开新项会自动收起其他项。
配合 `expand` 可在没有显式 `:+` 标记时默认展开第一项。

```md
::: collapse accordion expand

- 问题 1

  问题 1 的回答

- 问题 2

  问题 2 的回答

:::
```

**渲染结果：**

::: collapse accordion expand

- 问题 1

  问题 1 的回答

- 问题 2

  问题 2 的回答

:::

### 卡片样式

添加 `card` 以带边框、圆角的卡片样式渲染容器，可与 `accordion` 组合使用。

```md
::: collapse accordion card

- 问题 1

  问题 1 的回答

- 问题 2

  问题 2 的回答

:::
```

**渲染结果：**

::: collapse accordion card

- 问题 1 很长的问题很长的问题很长的问题很长的问题很长的问题很长的问题很长的问题很长的问题很长的问题很长的问题

  问题 1 的回答

- 问题 2

  问题 2 的回答

- 问题 3

  问题 3 的回答

:::

### 单项展开标记

在标题前添加 `:+` 展开该项，或 `:-` 收起该项。手风琴模式下只有第一个 `:+` 标记生效；
未添加标记的项将遵循容器的 `expand` 属性。

```md
::: collapse

- :+ 默认展开

  内容

- :- 默认收起

  内容

- 无标记，遵循容器 expand 属性

  内容

:::
```

**渲染结果：**

::: collapse

- :+ 默认展开

  内容

- :- 默认收起

  内容

- 无标记，遵循容器 expand 属性

  内容

:::

## 容器属性

| 属性        | 类型      | 说明                               |
| ----------- | --------- | ---------------------------------- |
| `accordion` | `boolean` | 启用手风琴模式（同时只能展开一项） |
| `card`      | `boolean` | 使用卡片样式（带边框和圆角）       |
| `expand`    | `boolean` | 默认展开状态                       |

## 标记说明

| 标记 | 说明                                 |
| ---- | ------------------------------------ |
| `:+` | 展开该项（手风琴模式下仅第一个生效） |
| `:-` | 收起该项                             |
