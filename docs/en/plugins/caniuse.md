# Can I Use

<NpmBadge name="vitepress-plugin-caniuse" />

Embed browser compatibility data from [caniuse.com](https://caniuse.com/), displaying browser support for CSS/JS features on the page.

## Installation

::: npm-to

```sh
npm install vitepress-plugin-caniuse
```

:::

## Usage

### vitepress-tuck Mode <Badge type="tip">Recommended</Badge>

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress-tuck'
import caniuse from 'vitepress-plugin-caniuse'

export default defineConfig({
  plugins: [caniuse()],
})
```

[Learn more about **vitepress-tuck**](../guide/quick-start.md){.readmore}

### Native Mode

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress'
import { caniuseMarkdownPlugin } from 'vitepress-plugin-caniuse' // [!code ++]

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(caniuseMarkdownPlugin) // [!code ++]
    },
  },
})
```

```ts [.vitepress/theme/index.ts]
import type { Theme } from 'vitepress'
import { enhanceAppWithCaniuse } from 'vitepress-plugin-caniuse/client' // [!code ++]
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    enhanceAppWithCaniuse(ctx) // [!code ++]
  },
} satisfies Theme
```

## Syntax

Use `@[caniuse]()` to embed browser compatibility data:

```md
@[caniuse](feature_name)
```

### Baseline Mode

Use baseline mode to display a feature support overview:

```md
@[caniuse baseline](feature_name)
```

### Custom Version Range

Use `{}` to specify a version range:

```md
@[caniuse{-2,4}](feature_name)
@[caniuse baseline{-3,2}](feature_name)
```

- `{past, future}`: past is the number of versions to look back, future is the number to look ahead
- Default is `{5, 2}` — 5 versions back,  2 versions forward

### Getting Feature Names

Search for the feature you want to display on [caniuse.com](https://caniuse.com/),
click the `#` on the left side of the card, and you'll get the feature name in the browser's address bar.

::: details Not sure which part is the feature name?
**Take CSS `grid` as an example**

Search for `grid` on caniuse.com, then click the `#` on the first card. The address bar will change to `https://caniuse.com/css-grid`.

The feature name is `css-grid`.

Verify here: <https://caniuse.com/?search=grid>
:::

## Examples

### Display browser support for the `fetch` feature

```md
@[caniuse](fetch)
```

@[caniuse](fetch)

### Display baseline for the `fetch` feature

```md
@[caniuse baseline](fetch)
```

@[caniuse baseline](fetch)
