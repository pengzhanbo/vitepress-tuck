---
url: /pluginscollapse.md
---
# Collapse

Collapse container plugin for creating collapsible content sections in Markdown, with support for accordion mode,
card style, and per-item expand control.

## Installation

::: npm-to

```sh
npm install vitepress-plugin-collapse
```

:::

## Usage

### vitepress-tuck Mode Recommended

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress-tuck'
import collapse from 'vitepress-plugin-collapse'

export default defineConfig({
  plugins: [collapse()],
})
```

[Learn more about **vitepress-tuck**](../guide/quick-start.md){.readmore}

### Native Mode

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

## Syntax

Use the `::: collapse` container with a list to create collapsible sections. Each
list item becomes a collapse panel: the first line is the title, and the
following indented content is the panel body.

### Basic

```md
::: collapse

- Title 1

  Content 1

- Title 2

  Content 2

:::
```

**Rendered Result:**

::: collapse

* Title 1

  Content 1

* Title 2

  Content 2

:::

### Accordion

Add `accordion` to enable accordion mode — only one item can be expanded at a
time; expanding a new item collapses all others. Use `expand` to expand the
first item by default when no explicit `:+` flag is set.

```md
::: collapse accordion expand

- Question 1

  Answer 1

- Question 2

  Answer 2

:::
```

**Rendered Result:**

::: collapse accordion expand

* Question 1

  Answer 1

* Question 2

  Answer 2

:::

### Card Style

Add `card` to render the container with a bordered, rounded card style. It can
be combined with `accordion`.

```md
::: collapse accordion card

- Question 1

  Answer 1

- Question 2

  Answer 2

:::
```

**Rendered Result:**

::: collapse accordion card

* Question 1

  Answer 1

* Question 2

  Answer 2

* Question 3

  Answer 3

:::

### Per-item Expand Flag

Prefix a title with `:+` to expand an item, or `:-` to collapse it. In accordion
mode, only the first `:+` flag takes effect. Items without a flag follow the
container's `expand` attribute.

```md
::: collapse

- :+ Expanded by default

  Content

- :- Collapsed by default

  Content

- No flag, follows container expand attribute

  Content

:::
```

**Rendered Result:**

::: collapse

* :+ Expanded by default

  Content

* :- Collapsed by default

  Content

* No flag, follows container expand attribute

  Content

:::

## Container Attributes

| Attribute   | Type      | Description                                              |
| ----------- | --------- | -------------------------------------------------------- |
| `accordion` | `boolean` | Enable accordion mode (only one item expanded at a time) |
| `card`      | `boolean` | Render with card style (bordered and rounded)            |
| `expand`    | `boolean` | Default expanded state                                   |

## Item Flags

| Flag | Description                                                  |
| ---- | ------------------------------------------------------------ |
| `:+` | Expand this item (only the first one wins in accordion mode) |
| `:-` | Collapse this item                                           |
