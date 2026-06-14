---
url: /plugins/code-collapse.md
---
# Code Collapse

Code block folding plugin that automatically collapses code blocks exceeding a specified number of lines, improving page readability.

## Installation

::: npm-to

```sh
npm install vitepress-plugin-code-collapse
```

:::

## Usage

### vitepress-tuck Mode Recommended

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress-tuck'
import collapsedLines from 'vitepress-plugin-code-collapse'

export default defineConfig({
  plugins: [
    collapsedLines(),
  ],
})
```

[Learn more about **vitepress-tuck**](../guide/quick-start.md){.readmore}

### Native Mode

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress'
import { collapsedLinesMarkdownPlugin } from 'vitepress-plugin-code-collapse'

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(collapsedLinesMarkdownPlugin)
    },
  },
})
```

```ts [.vitepress/theme/index.ts]
import type { Theme } from 'vitepress'
import { enhanceAppWithCollapsedLines } from 'vitepress-plugin-code-collapse/client'
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    enhanceAppWithCollapsedLines(ctx)
  },
} satisfies Theme
```

## Syntax

### Global Folding

When `options` is set to a number, or `true` (defaults to 15 lines), all code blocks exceeding that line count will be automatically folded.

### Per-Block Folding

Use the `:collapsed-lines={N}` syntax in the code block's info string to control individual blocks:

````md
```ts :collapsed-lines
// Folds using the default value (15 lines)
```

```ts :collapsed-lines=10
// Folds starting from line 10
```
````

## Configuration

```ts
/**
 * Collapsed lines configuration
 * - `true`: Fold when exceeding 15 lines
 * - `number`: Fold when exceeding the specified line count
 * - `false`: No global folding, allows per-block control (default)
 * - `'disable'`: Fully disable the plugin
 * @default 'false'
 */
type options = boolean | number | 'disable'
```

## Example

````md
```ts :collapsed-lines=10
const a1 = 1
const a2 = 2
const a3 = 1
const a4 = 1
const a5 = 1
const a6 = 2
const a7 = 1
const a8 = 1
const a9 = 1
const a10 = 2
const a11 = 1
const a12 = 1
```
````

```ts :line-numbers=1 :collapsed-lines=10
const a1 = 1
const a2 = 2
const a3 = 1
const a4 = 1
const a5 = 1
const a6 = 2
const a7 = 1
const a8 = 1
const a9 = 1
const a10 = 2
const a11 = 1
const a12 = 1
```
