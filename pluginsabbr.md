---
url: /pluginsabbr.md
---
# Abbr

Abbreviation plugin that adds an interactive tooltip to abbreviations in Markdown, displaying the full description on hover or focus.

Forked and modified from [`markdown-it-abbr`](https://github.com/markdown-it/markdown-it-abbr).

## Installation

::: npm-to

```sh
npm install vitepress-plugin-abbr
```

:::

## Usage

### vitepress-tuck Mode Recommended

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress-tuck'
import abbr from 'vitepress-plugin-abbr'

export default defineConfig({
  plugins: [abbr()],
})
```

[Learn more about **vitepress-tuck**](../guide/quick-start.md){.readmore}

### Native Mode

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress'
import { abbrMarkdownPlugin } from 'vitepress-plugin-abbr' // [!code ++]

export default defineConfig({
  markdown: {
    config: (md) => {
      // [!code ++:4]
      md.use(abbrMarkdownPlugin, {
        HTML: 'HyperText Markup Language',
        W3C: 'World Wide Web Consortium',
      })
    },
  },
})
```

Register the component in the theme:

```ts [.vitepress/theme/index.ts]
import type { Theme } from 'vitepress'
import { enhanceAppWithAbbr } from 'vitepress-plugin-abbr/client' // [!code ++]
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    enhanceAppWithAbbr(ctx) // [!code ++]
  },
} satisfies Theme
```

## Syntax

Define an abbreviation using the `*[ABBR]: Full description` syntax. Once defined,
every occurrence of the abbreviation throughout the document is automatically recognized
and rendered with an interactive tooltip.

```md
The HTML specification is maintained by the W3C.

*[HTML]: HyperText Markup Language
*[W3C]: World Wide Web Consortium
```

**Rendered Result:**

The HTML specification is maintained by the W3C.

\*\[HTML]: HyperText Markup Language
\*\[W3C]: World Wide Web Consortium

### Inline Markdown in Descriptions

The full description of an abbreviation supports inline Markdown syntax, such as bold, italic, links, and code.

```md
The **HTML** specification is maintained by the W3C.

*[HTML]: HyperText Markup Language
*[W3C]: World [Wide Web](https://www.w3.org/) Consortium
```

**Rendered Result:**

The **HTML** specification is maintained by the W3C.

\*\[HTML]: HyperText Markup Language
\*\[W3C]: World [Wide Web](https://www.w3.org/) Consortium

## Global Abbreviations

Instead of defining abbreviations inline in each Markdown file, you can provide a global preset of abbreviations
through the plugin options. When both a global definition and an inline definition exist for the same abbreviation,
the inline definition takes precedence.

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress-tuck'
import abbr from 'vitepress-plugin-abbr'

export default defineConfig({
  plugins: [
    abbr({
      HTML: 'HyperText Markup Language',
      W3C: 'World Wide Web Consortium',
    }),
  ],
})
```

With this configuration, every occurrence of `HTML` and `W3C` across all pages will be rendered as
abbreviations automatically, without needing to define them in each file.

## Examples

Hover over or focus the abbreviations below to see their full descriptions:

```md
HTML W3C API CSS

*[HTML]: HyperText Markup Language
*[W3C]: World Wide Web Consortium
*[API]: Application Programming Interface
*[CSS]: Cascading Style Sheets
```

HTML W3C API CSS

\*\[HTML]: HyperText Markup Language
\*\[W3C]: World Wide Web Consortium
\*\[API]: Application Programming Interface
\*\[CSS]: Cascading Style Sheets
