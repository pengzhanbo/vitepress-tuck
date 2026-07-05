# vitepress-plugin-collapse

Render collapsible sections in your VitePress site.

在 VitePress 中渲染可折叠的内容区块。

## Usage

### With Vitepress-tuck

**Installation:**

```bash
# npm
npm install -D vitepress-tuck vitepress-plugin-collapse
# pnpm
pnpm add -D vitepress-tuck vitepress-plugin-collapse
# yarn
yarn add -D vitepress-tuck vitepress-plugin-collapse
```

**Configuration:**

```ts
// .vitepress/config.ts
import collapse from 'vitepress-plugin-collapse'
import { defineConfig } from 'vitepress-tuck'

export default defineConfig({
  plugins: [collapse()],
})
```

### With Vitepress

**Installation:**

```bash
# npm
npm install -D vitepress-plugin-collapse
# pnpm
pnpm add -D vitepress-plugin-collapse
# yarn
yarn add -D vitepress-plugin-collapse
```

**Configuration:**

```ts
// .vitepress/config.ts
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

```ts
// .vitepress/theme/index.ts
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

## Syntax

Use `::: collapse` container with a list to create collapsible sections. Each
list item becomes a collapse panel: the first line is the title, and the
following indented content is the panel body.

使用 `::: collapse` 容器配合列表来创建可折叠区块。每个列表项成为一个折叠面板：
第一行为标题，后续缩进内容为面板正文。

### Basic

```md
::: collapse
- Title 1
  Content of item 1.

- Title 2
  Content of item 2.
:::
```

### Accordion

Add `accordion` to enable accordion mode — only one item can be expanded at a
time. Use `expand` to expand the first item by default when no explicit `:+`
flag is set.

添加 `accordion` 启用手风琴模式 —— 同时只能展开一项。使用 `expand` 可在没有
显式 `:+` 标记时默认展开第一项。

```md
::: collapse accordion expand
- Question 1
  Answer 1.

- Question 2
  Answer 2.
:::
```

### Card Style

Add `card` to render the container with a bordered, rounded card style.

添加 `card` 以带边框、圆角的卡片样式渲染容器。

```md
::: collapse accordion card
- Question 1
  Answer 1.

- Question 2
  Answer 2.
:::
```

### Per-item Expand Flag

Prefix a title with `:+` to expand an item, or `:-` to collapse it. In
accordion mode, only the first `:+` flag takes effect.

在标题前添加 `:+` 展开该项，或 `:-` 收起该项。手风琴模式下只有第一个 `:+`
标记生效。

```md
::: collapse
- :+ Expanded by default
  Content.

- :- Collapsed by default
  Content.

- No flag, follows container `expand` attribute
  Content.
:::
```

### Container Attributes

| Attribute   | Type      | Description                                                               |
| ----------- | --------- | ------------------------------------------------------------------------- |
| `accordion` | `boolean` | Enable accordion mode (only one item expanded at a time) / 启用手风琴模式 |
| `card`      | `boolean` | Render with card style (bordered and rounded) / 使用卡片样式              |
| `expand`    | `boolean` | Default expanded state / 默认展开状态                                     |

### Item Flags

| Flag | Description                                                                                         |
| ---- | --------------------------------------------------------------------------------------------------- |
| `:+` | Expand this item (only the first one wins in accordion mode) / 展开该项（手风琴模式下仅第一个生效） |
| `:-` | Collapse this item / 收起该项                                                                       |
