# CodePen

Embed [CodePen](https://codepen.io/) projects into VitePress pages.

## Installation

::: npm-to

```sh
npm install vitepress-plugin-codepen
```

:::

## Usage

### vitepress-tuck Mode <Badge type="tip">Recommended</Badge>

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress-tuck'
import codepen from 'vitepress-plugin-codepen'

export default defineConfig({
  plugins: [codepen()],
})
```

[Learn more about **vitepress-tuck**](../guide/quick-start.md){.readmore}

### Native Mode

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress'
import { codepenPlugin } from 'vitepress-plugin-codepen'

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(codepenPlugin)
    },
  },
})
```

```ts [.vitepress/theme/index.ts]
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

### Basic Usage

```md
@[codepen](user/slash)
```

### With Options

```md
@[codepen preview editable title="Example" height="400px" tab="css,result" theme="dark"](leimapapa/RwOZQOW)
```

### Attribute Reference

| Attribute  | Type      | Default    | Description                         |
| ---------- | --------- | ---------- | ----------------------------------- |
| `title`    | `string`  | -          | Title                               |
| `user`     | `string`  | -          | CodePen username (parsed from link) |
| `slash`    | `string`  | -          | Pen identifier (parsed from link)   |
| `tab`      | `string`  | `'result'` | Default tab to display              |
| `theme`    | `string`  | -          | Theme                               |
| `preview`  | `boolean` | `false`    | Preview mode                        |
| `editable` | `boolean` | `false`    | Editable mode                       |
| `width`    | `string`  | `'100%'`   | Width                               |
| `height`   | `string`  | -          | Height                              |

## Example

```md
@[codepen](leimapapa/RwOZQOW)
```

@[codepen](leimapapa/RwOZQOW)
