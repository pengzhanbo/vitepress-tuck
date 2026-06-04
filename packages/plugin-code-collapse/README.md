# vitepress-plugin-code-collapse

provide code block collapsed lines feature

在 VitePress 中提供代码块折叠行功能。

## Usage

### With Vitepress-tuck

**Installation:**

```bash
# npm
npm install -D vitepress-tuck vitepress-plugin-code-collapse
# pnpm
pnpm add -D vitepress-tuck vitepress-plugin-code-collapse
# yarn
yarn add -D vitepress-tuck vitepress-plugin-code-collapse
```

**Configuration:**

```ts
// .vitepress/config.ts
import codeCollapse from 'vitepress-plugin-code-collapse'
import { defineConfig } from 'vitepress-tuck'

export default defineConfig({
  plugins: [codeCollapse()],
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
npm install -D vitepress-plugin-code-collapse
# pnpm
pnpm add -D vitepress-plugin-code-collapse
# yarn
yarn add -D vitepress-plugin-code-collapse
```

**Configuration:**

```ts
// .vitepress/config.ts
import { defineConfig } from 'vitepress'
import { collapsedLinesMarkdownPlugin } from 'vitepress-plugin-code-collapse'

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(collapsedLinesMarkdownPlugin)
    },
  }
})
```

```ts
// .vitepress/theme/index.ts
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

use `:collapsed-lines` to collapse lines in code block.

````md
```ts :collapsed-lines
const a = 1
```
````
