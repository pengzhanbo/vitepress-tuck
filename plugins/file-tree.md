---
url: /plugins/file-tree.md
---
# File Tree

File tree display plugin for rendering file directory structures in Markdown.

## Installation

::: npm-to

```sh
npm install vitepress-plugin-file-tree
```

:::

## Usage

### vitepress-tuck Mode Recommended

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress-tuck'
import fileTree from 'vitepress-plugin-file-tree'

export default defineConfig({
  plugins: [fileTree()],
})
```

[Learn more about **vitepress-tuck**](../guide/quick-start.md){.readmore}

### Native Mode

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress'
import { fileTreeMarkdownPlugin } from 'vitepress-plugin-file-tree'

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(fileTreeMarkdownPlugin)
    },
  },
})
```

```ts [.vitepress/theme/index.ts]
import type { Theme } from 'vitepress'
import { enhanceAppWithFileTree } from 'vitepress-plugin-file-tree/client'
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    enhanceAppWithFileTree(ctx)
  },
} satisfies Theme
```

## Syntax

### Container Syntax

Use the `::: file-tree` container to represent file hierarchy via indentation:

```md
::: file-tree title="Project Structure"

- src/
  - components/
    - Button.vue
    - Nav.vue
  - index.ts
- package.json
- tsconfig.json

:::
```

### Fenced Code Syntax

Alternatively, use a fenced code block with the `tree` or `file-tree` language identifier.
The content follows the output format of the `tree` command-line tool (using Unicode
box-drawing characters):

````md
```tree
.
├── src/
│   ├── components/
│   │   ├── Button.vue
│   │   └── Nav.vue
│   └── index.ts
├── package.json
└── tsconfig.json
```
````

This is especially useful when you already have a `tree` command output and want to
paste it directly into your Markdown without reformatting.

### Node Annotations

Both syntaxes support the following node annotations:

| Syntax               | Description                          |
| -------------------- | ------------------------------------ |
| `**filename**`       | Highlight/focus the file             |
| `-- filename`        | Mark as removed                      |
| `++ filename`        | Mark as added                        |
| `filename # comment` | Add a comment                        |
| `folder/`            | Mark as folder, collapsed by default |
| `…`                  | Ellipsis marker                      |

Container example with annotations:

```md
::: file-tree title="Changed Files"

- src/
  - -- old-file.ts
  - ++ new-file.ts
  - **main.ts** # Core entry
  - …

:::
```

Fenced code example with annotations:

````md
```tree
.
├── src/
│   ├── -- old-file.ts
│   ├── ++ new-file.ts
│   └── **main.ts** # Core entry
└── …
```
````

## Example

```md
::: file-tree

- docs
  - .vitepress
    - ++ config.ts
  - -- page1.md
  - index.md
- theme  # A **theme** directory
  - client
    - components
      - **Navbar.vue**
    - composables
      - useNavbar.ts
    - styles
      - navbar.css
    - config.ts
  - node/
- package.json
- pnpm-lock.yaml
- .gitignore
- README.md
- …
:::
```

::: file-tree

* docs
  * .vitepress
    * ++ config.ts
  * \-- page1.md
  * index.md
* theme  # A **theme** directory
  * client
    * components
      * **Navbar.vue**
    * composables
      * useNavbar.ts
    * styles
      * navbar.css
    * config.ts
  * node/
* package.json
* pnpm-lock.yaml
* .gitignore
* README.md
* …
  :::
