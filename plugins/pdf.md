---
url: /plugins/pdf.md
---
# PDF

PDF file embedding plugin for displaying a PDF viewer in the page.

## Installation

::: npm-to

```sh
npm install vitepress-plugin-pdf
```

:::

## Usage

### vitepress-tuck Mode Recommended

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress-tuck'
import pdf from 'vitepress-plugin-pdf'

export default defineConfig({
  plugins: [pdf()],
})
```

[Learn more about **vitepress-tuck**](../guide/quick-start.md){.readmore}

### Native Mode

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress'
import { pdfMarkdownPlugin } from 'vitepress-plugin-pdf'

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(pdfMarkdownPlugin)
    },
  },
})
```

```ts [.vitepress/theme/index.ts]
import type { Theme } from 'vitepress'
import { enhanceAppWithPDF } from 'vitepress-plugin-pdf/client' // [!code ++]
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    enhanceAppWithPDF(ctx) // [!code ++]
  },
} satisfies Theme
```

## Syntax

Embed a PDF using `@[pdf]()`:

```md
@[pdf](https://example.com/sample.pdf)
@[pdf](./sample.pdf)
```

### Specifying a Page

```md
@[pdf 3](https://example.com/sample.pdf)
```

### Configuration Options

```md
@[pdf no-toolbar width="100%" height="600px" zoom="100"](https://example.com/sample.pdf)
```

### Attribute Reference

| Attribute    | Type               | Default  | Description  |
| ------------ | ------------------ | -------- | ------------ |
| `width`      | `string`           | `'100%'` | Width        |
| `height`     | `string`           | -        | Height       |
| `ratio`      | `number \| string` | -        | Aspect ratio |
| `zoom`       | `number`           | `50`     | Zoom level   |
| `no-toolbar` | `boolean`          | `false`  | Hide toolbar |

## Example

```md
@[pdf](https://plume.pengzhanbo.cn/files/sample-1.pdf)
```

@[pdf](https://plume.pengzhanbo.cn/files/sample-1.pdf)
