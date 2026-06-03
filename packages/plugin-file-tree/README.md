# vitepress-plugin-file-tree

Render file tree structure in your VitePress site.

在 VitePress 中渲染文件树结构。

## Usage

### With Vitepress-tuck

**Installation:**

```bash
# npm
npm install -D vitepress-tuck vitepress-plugin-file-tree
# pnpm
pnpm add -D vitepress-tuck vitepress-plugin-file-tree
# yarn
yarn add -D vitepress-tuck vitepress-plugin-file-tree
```

**Configuration:**

```ts
// .vitepress/config.ts
import fileTree from 'vitepress-plugin-file-tree'
import { defineConfig } from 'vitepress-tuck'

export default defineConfig({
  plugins: [fileTree()],
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
npm install -D vitepress-plugin-file-tree
# pnpm
pnpm add -D vitepress-plugin-file-tree
# yarn
yarn add -D vitepress-plugin-file-tree
```

**Configuration:**

```ts
// .vitepress/config.ts
import { defineConfig } from 'vitepress'
import { fileTreePlugin } from 'vitepress-plugin-file-tree'

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(fileTreePlugin)
    },
  },
})
```

```ts
// .vitepress/theme/index.ts
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

Use `::: file-tree` container to create a file tree.

```md
::: file-tree title="Project Structure"
- src/
  - components/
    - Button.vue
    - Input.vue
  - index.ts
- package.json
- README.md
:::
```

### Node Annotations

| Syntax                 | Description                              |
| ---------------------- | ---------------------------------------- |
| `- filename`           | Regular file                             |
| `- filename/`          | Folder (trailing slash)                  |
| `- **filename**`       | Highlighted file                         |
| `- ++ filename`        | Added file (diff add, green `+` mark)    |
| `- -- filename`        | Removed file (diff remove, red `-` mark) |
| `- filename # comment` | File with comment                        |
| `- …` or `- ...`       | Placeholder (non-clickable)              |

Indentation uses 2 spaces per level. A copy button is included to copy the file tree as command-line style text.
