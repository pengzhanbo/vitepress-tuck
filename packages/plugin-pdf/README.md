# vitepress-plugin-pdf

Embed PDF files in your VitePress site.

在 VitePress 中嵌入 PDF 文件。

## Usage

### With Vitepress-tuck

**Installation:**

```bash
# npm
npm install -D vitepress-tuck vitepress-plugin-pdf
# pnpm
pnpm add -D vitepress-tuck vitepress-plugin-pdf
# yarn
yarn add -D vitepress-tuck vitepress-plugin-pdf
```

**Configuration:**

```ts
// .vitepress/config.ts
import pdf from 'vitepress-plugin-pdf'
import { defineConfig } from 'vitepress-tuck'

export default defineConfig({
  plugins: [pdf()],
})
```

```ts
// .vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import enhanceApp from 'virtual:enhance-app'
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    enhanceApp(ctx)
  },
} satisfies Theme
```

### With Vitepress

**Installation:**

```bash
# npm
npm install -D vitepress-plugin-pdf
# pnpm
pnpm add -D vitepress-plugin-pdf
# yarn
yarn add -D vitepress-plugin-pdf
```

**Configuration:**

```ts
// .vitepress/config.ts
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

```ts
// .vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import { enhanceAppWithPDF } from 'vitepress-plugin-pdf/client'
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    enhanceAppWithPDF(ctx)
  },
} satisfies Theme
```

## Syntax

```md
@[pdf](/path/to/file.pdf)
```

### With Options

```md
@[pdf page="3" no-toolbar width="80%" height="600px" zoom="100"](/demo.pdf)
```

| Option       | Type      | Default  | Description                  |
| ------------ | --------- | -------- | ---------------------------- |
| `page`       | `number`  | `1`      | Page number to display       |
| `no-toolbar` | `boolean` | `false`  | Hide PDF.js toolbar          |
| `width`      | `string`  | `"100%"` | Embed width                  |
| `height`     | `string`  | `""`     | Embed height                 |
| `zoom`       | `number`  | `50`     | Zoom level                   |
| `ratio`      | `string`  | -        | Aspect ratio (e.g. `"16:9"`) |

The plugin automatically uses native browser PDF embedding when supported, and falls back to PDF.js for unsupported browsers.
