# vitepress-plugin-annotation

Add annotation support to your VitePress site, rendering annotation references as interactive
markers that reveal a popover with the annotation content on click.

为 VitePress 添加注释支持，将注释引用渲染为可交互的标记，点击后弹出包含注释内容的浮层。

## Usage

### With Vitepress-tuck

**Installation:**

```bash
# npm
npm install -D vitepress-tuck vitepress-plugin-annotation
# pnpm
pnpm add -D vitepress-tuck vitepress-plugin-annotation
# yarn
yarn add -D vitepress-tuck vitepress-plugin-annotation
```

**Configuration:**

```ts
// .vitepress/config.ts
import annotation from 'vitepress-plugin-annotation'
import { defineConfig } from 'vitepress-tuck'

export default defineConfig({
  plugins: [annotation()],
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
npm install -D vitepress-plugin-annotation
# pnpm
pnpm add -D vitepress-plugin-annotation
# yarn
yarn add -D vitepress-plugin-annotation
```

**Configuration:**

```ts
// .vitepress/config.ts
import { defineConfig } from 'vitepress'
import { annotationMarkdownPlugin } from 'vitepress-plugin-annotation'

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(annotationMarkdownPlugin)
    },
  },
})
```

```ts
// .vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import { enhanceAppWithAnnotation } from 'vitepress-plugin-annotation/client'
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    enhanceAppWithAnnotation(ctx)
  },
} satisfies Theme
```

## Syntax

Define an annotation with the `[+label]: annotation content` syntax, then reference it anywhere
in your markdown content using `[+label]`. The reference is rendered as a small interactive
marker that, on click, reveals a popover displaying the annotation content.

使用 `[+标签]: 注释内容` 语法定义注释，然后在 markdown 内容的任意位置使用 `[+标签]`
进行引用。引用会渲染为一个小的可交互标记，点击后弹出显示注释内容的浮层。

```md
The **four great classical novels** [+novels] of Chinese literature are widely known.

[+novels]:
  **Romance of the Three Kingdoms** — a historical novel set in the Three Kingdoms period.

[+novels]:
  **Journey to the West** — a mythological tale of a pilgrimage to the West.
```

The annotation content supports full block-level markdown, including headings, paragraphs,
lists, code blocks, and more.

注释内容支持完整的块级 markdown 语法，包括标题、段落、列表、代码块等。

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

Annotation definitions can span multiple lines. Continuation lines must be indented by at
least two spaces relative to the definition. Empty lines within the indented block are
preserved as part of the annotation content. A non-indented content line (such as the next
definition or a new paragraph) terminates the multi-line definition.

注释定义可以跨多行。续行必须相对于定义至少缩进两个空格。缩进块内的空行会作为
注释内容的一部分被保留。非缩进的内容行（如下一个定义或新段落）会终止多行定义。

```md
This concept is explained in [+detail].

[+detail]:
  This is the first paragraph of the annotation.

  This is the second paragraph, separated by an empty line
  but still part of the same annotation.

The annotation definition ends here because this line is not indented.
```

### Multiple Definitions per Label

A single label can be defined multiple times. All definitions are collected and displayed
as separate items in the popover, allowing you to provide multiple pieces of related
information for the same reference.

同一标签可以多次定义。所有定义会被收集并作为独立条目展示在浮层中，允许你为同一
引用提供多条相关信息。

```md
JavaScript has multiple [+js] versions.

[+js]:
  **ES2015 (ES6)** — Introduced classes, modules, arrows, and more.

[+js]:
  **ES2020** — Added optional chaining, nullish coalescing, and BigInt.
```

## Global Annotations

Instead of (or in addition to) defining annotations inline in each markdown file, you can
provide a global preset of annotations through the plugin options. This is useful for terms
that should be annotated consistently across all pages.

可以在每个 markdown 文件中内联定义注释，也可以通过插件选项提供全局注释预设。
这对于需要在所有页面中一致注释的术语很有用。

```ts
// .vitepress/config.ts
import annotation from 'vitepress-plugin-annotation'
import { defineConfig } from 'vitepress-tuck'

export default defineConfig({
  plugins: [
    annotation({
      HTML: 'HyperText Markup Language',
      CSS: ['Cascading Style Sheets', 'A style sheet language used for describing the presentation of a document.'],
    }),
  ],
})
```

Each global annotation value can be a string or an array of strings. When an array is
provided, each element becomes a separate item in the popover, just like multiple inline
definitions for the same label.

每个全局注释值可以是字符串或字符串数组。当提供数组时，每个元素成为浮层中的
一个独立条目，就像同一标签的多个内联定义一样。
