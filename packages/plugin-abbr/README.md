# vitepress-plugin-abbr

Add abbreviation support to your VitePress site, rendering abbreviations with an interactive tooltip
that displays the full description on hover or focus.

为 VitePress 添加缩写词支持，将缩写词渲染为可交互的提示框，在悬停或聚焦时显示其完整描述。

Forked and modified from [`markdown-it-abbr`](https://github.com/markdown-it/markdown-it-abbr).

## Usage

### With Vitepress-tuck

**Installation:**

```bash
# npm
npm install -D vitepress-tuck vitepress-plugin-abbr
# pnpm
pnpm add -D vitepress-tuck vitepress-plugin-abbr
# yarn
yarn add -D vitepress-tuck vitepress-plugin-abbr
```

**Configuration:**

```ts
// .vitepress/config.ts
import abbr from 'vitepress-plugin-abbr'
import { defineConfig } from 'vitepress-tuck'

export default defineConfig({
  plugins: [abbr()],
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
npm install -D vitepress-plugin-abbr
# pnpm
pnpm add -D vitepress-plugin-abbr
# yarn
yarn add -D vitepress-plugin-abbr
```

**Configuration:**

```ts
// .vitepress/config.ts
import { defineConfig } from 'vitepress'
import { abbrMarkdownPlugin } from 'vitepress-plugin-abbr'

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(abbrMarkdownPlugin)
    },
  },
})
```

```ts
// .vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import { EnhanceAppWithAbbr } from 'vitepress-plugin-abbr/client'
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    EnhanceAppWithAbbr(ctx)
  },
} satisfies Theme
```

## Syntax

Define an abbreviation with the `*[ABBR]: Full description` syntax, then use the abbreviation anywhere
in your markdown content. The abbreviation text will be rendered with a dotted underline and a help cursor,
and hovering or focusing it shows a tooltip with the full description.

使用 `*[缩写]: 完整描述` 语法定义缩写词，然后在 markdown 内容的任意位置使用该缩写词。
缩写词文本将渲染为带点状下划线和 help 鼠标样式的文本，悬停或聚焦时会显示包含完整描述的提示框。

```md
The HTML specification is maintained by the W3C.

*[HTML]: HyperText Markup Language
*[W3C]: World Wide Web Consortium
```

The description supports inline markdown, such as `**bold**`, `*italic*`, `[links](https://example.com)`, and `code`.

描述支持内联 markdown 语法，例如 `**加粗**`、`*斜体*`、`[链接](https://example.com)` 和 `代码`。

```md
The **HTML** spec is maintained by the W3C.

*[HTML]: HyperText Markup Language
*[W3C]: World [Wide Web](https://www.w3.org/) Consortium
```

## Global Abbreviations

Instead of (or in addition to) defining abbreviations inline in each markdown file,
you can provide a global preset of abbreviations through the plugin options. Inline definitions take
precedence over global ones when both define the same abbreviation.

可以在每个 markdown 文件中内联定义缩写词，也可以通过插件选项提供全局缩写词预设
当两者定义了相同的缩写词时，内联定义优先于全局定义。

```ts
// .vitepress/config.ts
import abbr from 'vitepress-plugin-abbr'
import { defineConfig } from 'vitepress-tuck'

export default defineConfig({
  plugins: [
    abbr({
      HTML: 'HyperText Markup Language',
      W3C: 'World Wide Web Consortium',
    }),
  ],
})
```

With the configuration above, every occurrence of `HTML` and `W3C` across all pages will be
rendered as abbreviations automatically, without needing inline `*[...]:` definitions.

配置上述内容后，所有页面中出现的 `HTML` 和 `W3C` 都会自动渲染为缩写词，无需逐个文件添加 `*[...]:` 内联定义。
