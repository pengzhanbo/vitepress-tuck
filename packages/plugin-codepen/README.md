# vitepress-plugin-codepen

Embed CodePen in your VitePress site.

在 VitePress 中嵌入 CodePen。

## Usage

### With Vitepress-tuck

**Installation:**

```bash
# npm
npm install -D vitepress-tuck vitepress-plugin-codepen
# pnpm
pnpm add -D vitepress-tuck vitepress-plugin-codepen
# yarn
yarn add -D vitepress-tuck vitepress-plugin-codepen
```

**Configuration:**

```ts
// .vitepress/config.ts
import codepen from 'vitepress-plugin-codepen'
import { defineConfig } from 'vitepress-tuck'

export default defineConfig({
  plugins: [codepen()],
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
npm install -D vitepress-plugin-codepen
# pnpm
pnpm add -D vitepress-plugin-codepen
# yarn
yarn add -D vitepress-plugin-codepen
```

**Configuration:**

```ts
// .vitepress/config.ts
import { defineConfig } from 'vitepress'
import { codepenMarkdownPlugin } from 'vitepress-plugin-codepen'

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(codepenMarkdownPlugin)
    },
  },
})
```

```ts
// .vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import { enhanceAppWithCodepen } from 'vitepress-plugin-codepen/client'
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    enhanceAppWithCodepen(ctx)
  },
} satisfies Theme
```

## Syntax

```md
@[codepen](user/slash)
```

### With Options

```md
@[codepen preview editable title="My Demo" height="500px" tab="css,result" theme="dark"](user/slash)
```

| Option     | Type                | Default      | Description                             |
| ---------- | ------------------- | ------------ | --------------------------------------- |
| `preview`  | `boolean`           | `false`      | Use preview embed mode                  |
| `editable` | `boolean`           | `false`      | Allow editing                           |
| `tab`      | `string`            | `"result"`   | Default tab (e.g. `"css,result"`)       |
| `theme`    | `'light' \| 'dark'` | auto         | Theme, auto follows VitePress dark mode |
| `width`    | `string`            | `"100%"`     | iframe width                            |
| `height`   | `string`            | `"400px"`    | iframe height                           |
| `title`    | `string`            | `"Code Pen"` | iframe title                            |
