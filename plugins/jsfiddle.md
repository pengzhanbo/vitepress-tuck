---
url: /plugins/jsfiddle.md
---
# JSFiddle

Embed [JSFiddle](https://jsfiddle.net/) projects into VitePress pages.

## Installation

::: npm-to

```sh
npm install vitepress-plugin-jsfiddle
```

:::

## Usage

### vitepress-tuck Mode Recommended

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress-tuck'
import jsfiddle from 'vitepress-plugin-jsfiddle'

export default defineConfig({
  plugins: [jsfiddle()],
})
```

[Learn more about **vitepress-tuck**](../guide/quick-start.md){.readmore}

### Native Mode

```ts [.vitepress/config.ts]
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

```ts [.vitepress/theme/index.ts]
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

### Basic Usage

```md
@[jsfiddle](user/id)
```

### With Options

```md
@[jsfiddle title="JS Fiddle" theme="dark" tab="js,css,html,result" height="400px"](pengzhanbo/1xbwz2p9)
```

### Attribute Reference

| Attribute | Type               | Default                | Description                                       |
| --------- | ------------------ | ---------------------- | ------------------------------------------------- |
| `title`   | `string`           | `'JS Fiddle'`          | Title                                             |
| `theme`   | `string`           | -                      | Theme (e.g. `dark`)                               |
| `tab`     | `string`           | `'js,css,html,result'` | Tabs to display (comma-separated, spaces removed) |
| `width`   | `string`           | `'100%'`               | Width                                             |
| `height`  | `string`           | -                      | Height                                            |
| `ratio`   | `number \| string` | -                      | Aspect ratio                                      |

## Example

```md
@[jsfiddle](pengzhanbo/1xbwz2p9)
```

@[jsfiddle](pengzhanbo/1xbwz2p9)
