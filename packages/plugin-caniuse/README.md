# vitepress-plugin-caniuse

Embed [caniuse.com](https://caniuse.com/) data in your VitePress site.

在 VitePress 中嵌入 [caniuse.com](https://caniuse.com/) 数据

## Usage

### With Vitepress-tuck

**Installation:**

```bash
# npm
npm install -D vitepress-tuck vitepress-plugin-caniuse
# pnpm
pnpm add -D vitepress-tuck vitepress-plugin-caniuse
# yarn
yarn add -D vitepress-tuck vitepress-plugin-caniuse
```

**Configuration:**

```ts
// .vitepress/config.ts
import caniuse from 'vitepress-plugin-caniuse'
import { defineConfig } from 'vitepress-tuck'

export default defineConfig({
  plugins: [caniuse()],
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
npm install -D vitepress-plugin-caniuse
# pnpm
pnpm add -D vitepress-plugin-caniuse
# yarn
yarn add -D vitepress-plugin-caniuse
```

**Configuration:**

```ts
// .vitepress/config.ts
import { defineConfig } from 'vitepress'
import { caniuseMarkdownPlugin } from 'vitepress-plugin-caniuse'

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(caniuseMarkdownPlugin)
    },
  },
  vite: {
    ssr: {
      noExternal: ['vitepress-plugin-caniuse'],
    },
  },
})
```

```ts
// .vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import { enhanceAppWithCaniuse } from 'vitepress-plugin-caniuse/client'
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    enhanceAppWithCaniuse(ctx)
  },
} satisfies Theme
```

## Syntax

```md
@[caniuse](feature_name)
```

## Example

```md
@[caniuse](css-grid)
```

You can view all available `feature_name` from <https://caniuse-embed.vercel.app> or <https://caniuse.com/>
