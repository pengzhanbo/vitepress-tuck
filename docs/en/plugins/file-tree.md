# File Tree

<NpmBadge name="vitepress-plugin-file-tree" />

File tree display plugin for rendering file directory structures in Markdown.

## Installation

::: npm-to

```sh
npm install vitepress-plugin-file-tree
```

:::

## Usage

### vitepress-tuck Mode <Badge type="tip">Recommended</Badge>

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

### Node Annotations

Each node can have special annotations:

| Syntax               | Description                          |
| -------------------- | ------------------------------------ |
| `**filename**`       | Highlight/focus the file             |
| `-- filename`        | Mark as removed                      |
| `++ filename`        | Mark as added                        |
| `filename # comment` | Add a comment                        |
| `folder/`            | Mark as folder, collapsed by default |
| `…`                  | Ellipsis marker                      |

```md
::: file-tree title="Changed Files"

- src/
  - -- old-file.ts
  - ++ new-file.ts
  - **main.ts** # Core entry
  - …

:::
```

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
