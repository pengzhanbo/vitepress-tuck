# vitepress-plugin-jsfiddle

Embed JSFiddle in your VitePress site.

在 VitePress 中嵌入 JSFiddle。

## Usage

### With Vitepress-tuck

**Installation:**

```bash
# npm
npm install -D vitepress-tuck vitepress-plugin-jsfiddle
# pnpm
pnpm add -D vitepress-tuck vitepress-plugin-jsfiddle
# yarn
yarn add -D vitepress-tuck vitepress-plugin-jsfiddle
```

**Configuration:**

```ts
// .vitepress/config.ts
import jsfiddle from 'vitepress-plugin-jsfiddle'
import { defineConfig } from 'vitepress-tuck'

export default defineConfig({
  plugins: [jsfiddle()],
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
npm install -D vitepress-plugin-jsfiddle
# pnpm
pnpm add -D vitepress-plugin-jsfiddle
# yarn
yarn add -D vitepress-plugin-jsfiddle
```

**Configuration:**

```ts
// .vitepress/config.ts
import { defineConfig } from 'vitepress'
import { jsfiddleMarkdownPlugin } from 'vitepress-plugin-jsfiddle'

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(jsfiddleMarkdownPlugin)
    },
  },
})
```

```ts
// .vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import { enhanceAppWithJsFiddle } from 'vitepress-plugin-jsfiddle/client'
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    enhanceAppWithJsFiddle(ctx)
  },
} satisfies Theme
```

## Syntax

```md
@[jsfiddle](user/id)
```

### With Options

```md
@[jsfiddle theme="dark" tab="js,css,html,result" width="800px" height="500px"](user/id)
```

| Option   | Type                | Default                | Description                             |
| -------- | ------------------- | ---------------------- | --------------------------------------- |
| `theme`  | `'light' \| 'dark'` | auto                   | Theme, auto follows VitePress dark mode |
| `tab`    | `string`            | `"js,css,html,result"` | Tabs to display                         |
| `width`  | `string`            | `"100%"`               | iframe width                            |
| `height` | `string`            | `"400px"`              | iframe height                           |
| `title`  | `string`            | `"JS Fiddle"`          | iframe title                            |
