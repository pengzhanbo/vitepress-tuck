---
url: /pluginsannotation.md
---
# Annotation

Annotation plugin that adds interactive annotation markers to Markdown content.
Clicking a marker reveals a popover displaying the annotation content.

Annotation content supports full block-level Markdown syntax.
A single label can be defined multiple times — all definitions are collected and displayed as separate items in the popover.

## Installation

::: npm-to

```sh
npm install vitepress-plugin-annotation
```

:::

## Usage

### vitepress-tuck Mode Recommended

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress-tuck'
import annotation from 'vitepress-plugin-annotation'

export default defineConfig({
  plugins: [annotation()],
})
```

[Learn more about **vitepress-tuck**](../guide/quick-start.md){.readmore}

### Native Mode

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress'
import { annotationMarkdownPlugin } from 'vitepress-plugin-annotation' // [!code ++]

export default defineConfig({
  markdown: {
    config: (md) => {
      // [!code ++:3]
      md.use(annotationMarkdownPlugin, {
        HTML: 'HyperText Markup Language',
      })
    },
  },
})
```

Register the component in the theme:

```ts [.vitepress/theme/index.ts]
import type { Theme } from 'vitepress'
import { enhanceAppWithAnnotation } from 'vitepress-plugin-annotation/client' // [!code ++]
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    enhanceAppWithAnnotation(ctx) // [!code ++]
  },
} satisfies Theme
```

## Syntax

Define an annotation using the `[+label]: annotation content` syntax, then reference it anywhere in your document
with `[+label]`. The reference is rendered as a small interactive marker that, on click,
reveals a popover displaying the annotation content.

```md
The **four great classical novels** [+novels] of Chinese literature are widely known.

[+novels]: **Romance of the Three Kingdoms** — a historical novel set in the Three Kingdoms period.
```

**Rendered Result:**

The **four great classical novels** \[+novels1] of Chinese literature are widely known.

\[+novels1]: **Romance of the Three Kingdoms** — a historical novel set in the Three Kingdoms period.

### Block-level Markdown in Annotations

Annotation content supports full block-level Markdown syntax, including headings, paragraphs, lists, code blocks, and more.

```md
The framework is built on [+vue].

[+vue]:
  ## Vue

  A progressive framework for building user interfaces.

  - Reactive data binding
  - Component-based architecture
  - [Learn more](https://vuejs.org/)
```

### Multi-line Definitions

Annotation definitions can span multiple lines. Continuation lines must be indented by at least two spaces.
Empty lines within the indented block are preserved as part of the annotation content.
A non-indented content line (such as the next definition or a new paragraph) terminates the multi-line definition.

```md
This concept is explained in [+detail].

[+detail]:
  This is the first paragraph of the annotation.

  This is the second paragraph, separated by an empty line
  but still part of the same annotation.

This line is not indented, so the annotation definition ends here.
```

### Multiple Definitions per Label

A single label can be defined multiple times. All definitions are collected and displayed as separate items
in the popover, allowing you to provide multiple pieces of related information for the same reference.

```md
JavaScript has multiple versions [+js].

[+js]: **ES2015 (ES6)** — Introduced classes, modules, arrow functions, and more.

[+js]: **ES2020** — Added optional chaining, nullish coalescing, and BigInt.
```

**Rendered Result:**

JavaScript has multiple versions \[+js].

\[+js]: **ES2015 (ES6)** — Introduced classes, modules, arrow functions, and more.

\[+js]: **ES2020** — Added optional chaining, nullish coalescing, and BigInt.

## Global Annotations

Instead of defining annotations inline in each Markdown file, you can provide a global preset of annotations through the plugin options. This is useful for terms that should be annotated consistently across all pages.

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress-tuck'
import annotation from 'vitepress-plugin-annotation'

export default defineConfig({
  plugins: [
    annotation({
      HTML: 'HyperText Markup Language',
      CSS: ['Cascading Style Sheets', 'A style sheet language used for describing the presentation of a document.'],
    }),
  ],
})
```

Each global annotation value can be a string or an array of strings. When an array is provided, each element becomes a separate item in the popover, just like multiple inline definitions for the same label.

## Examples

Click the annotation markers below to see the full content:

```md
The **four great classical novels** [+novels] of Chinese literature are widely known.

[+novels]:
  **Romance of the Three Kingdoms**

  Set against the backdrop of the Three Kingdoms period, it depicts the political and military struggles among Wei, Shu, and Wu.

[+novels]:
  **Journey to the West**

  Tells the story of the Tang Monk and his three disciples on their journey to obtain Buddhist scriptures, filled with mythology and fantastical adventures.

[+novels]:
  **Dream of the Red Chamber**

  Set against the rise and fall of the four great families — Jia, Shi, Wang, and Xue — it depicts the love tragedy of Jia Baoyu and Lin Daiyu.

[+novels]:
  **Water Margin**

  Depicts the story of 108 outlaws led by Song Jiang who gathered at Mount Liang during the late Northern Song dynasty.
```

The **four great classical novels** \[+novels] of Chinese literature are widely known.

\[+novels]:
**Romance of the Three Kingdoms**

Set against the backdrop of the Three Kingdoms period, it depicts the political and military struggles among Wei, Shu, and Wu.

\[+novels]:
**Journey to the West**

Tells the story of the Tang Monk and his three disciples on their journey to obtain Buddhist scriptures, filled with mythology and fantastical adventures.

\[+novels]:
**Dream of the Red Chamber**

Set against the rise and fall of the four great families — Jia, Shi, Wang, and Xue — it depicts the love tragedy of Jia Baoyu and Lin Daiyu.

\[+novels]:
**Water Margin**

Depicts the story of 108 outlaws led by Song Jiang who gathered at Mount Liang during the late Northern Song dynasty.
