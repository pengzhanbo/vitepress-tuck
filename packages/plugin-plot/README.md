# vitepress-plugin-plot

Add spoiler/hidden text with `!!text!!` syntax. Text is masked until hovered or clicked.

使用 `!!text!!` 语法添加黑幕文本。文本在被悬停或点击前保持隐藏。

## Usage

### With Vitepress-tuck

**Installation:**

```bash
# npm
npm install -D vitepress-tuck vitepress-plugin-plot
# pnpm
pnpm add -D vitepress-tuck vitepress-plugin-plot
# yarn
yarn add -D vitepress-tuck vitepress-plugin-plot
```

**Configuration:**

```ts
// .vitepress/config.ts
import plot from 'vitepress-plugin-plot'
import { defineConfig } from 'vitepress-tuck'

export default defineConfig({
  plugins: [plot()],
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
npm install -D vitepress-plugin-plot
# pnpm
pnpm add -D vitepress-plugin-plot
# yarn
yarn add -D vitepress-plugin-plot
```

**Configuration:**

```ts
// .vitepress/config.ts
import { defineConfig } from 'vitepress'
import { plotPlugin } from 'vitepress-plugin-plot'

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(plotPlugin)
    },
  },
})
```

```ts
// .vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import { enhanceAppWithPlot } from 'vitepress-plugin-plot/client'
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    enhanceAppWithPlot(ctx)
  },
} satisfies Theme
```

## Syntax

```md
Some text, !!hidden content!!, more text.
```

### With Options

```ts
md.use(plotPlugin, {
  trigger: 'click', // 'hover' (default) | 'click'
  effect: 'blur', // 'mask' (default) | 'blur'
})
```

| Option    | Type                 | Default   | Description         |
| --------- | -------------------- | --------- | ------------------- |
| `trigger` | `'hover' \| 'click'` | `'hover'` | How to reveal text  |
| `effect`  | `'mask' \| 'blur'`   | `'mask'`  | Hiding effect style |

On mobile devices, `click` trigger is automatically enforced.
