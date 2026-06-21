# vitepress-plugin-code-tree

Render code tree structure in your VitePress site.

在 VitePress 中渲染代码树结构。

## Usage

### With Vitepress-tuck

**Installation:**

```bash
# npm
npm install -D vitepress-tuck vitepress-plugin-code-tree
# pnpm
pnpm add -D vitepress-tuck vitepress-plugin-code-tree
# yarn
yarn add -D vitepress-tuck vitepress-plugin-code-tree
```

**Configuration:**

```ts
// .vitepress/config.ts
import codeTree from 'vitepress-plugin-code-tree'
import { defineConfig } from 'vitepress-tuck'

export default defineConfig({
  plugins: [codeTree()],
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
npm install -D vitepress-plugin-code-tree
# pnpm
pnpm add -D vitepress-plugin-code-tree
# yarn
yarn add -D vitepress-plugin-code-tree
```

**Configuration:**

```ts
// .vitepress/config.ts
import { defineConfig } from 'vitepress'
import { codeTreeMarkdownPlugin } from 'vitepress-plugin-code-tree'

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(codeTreeMarkdownPlugin)
    },
  },
})
```

```ts
// .vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import { enhanceAppWithCodeTree } from 'vitepress-plugin-code-tree/client'
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    enhanceAppWithCodeTree(ctx)
  },
} satisfies Theme
```

## Syntax

The plugin provides two syntaxes to render a code tree: a container syntax for inline
file content, and an embed syntax to load files from a directory.

### Container Syntax

Use `::: code-tree` container with fenced code blocks inside. Each fence must declare
a filename via the `[filename]` syntax in its info string.

````md
::: code-tree title="Project Structure"

```ts [index.ts]
const a = 1
```

```rs [main.rs]
fn main() {
    println!("Hello, world!");
}
```

:::
````

#### Container Attributes

| Attribute      | Description                   | Default |
| -------------- | ----------------------------- | ------- |
| `title`        | Code tree title               | -       |
| `height`       | Code tree container height    | `420px` |
| `entry`        | Entry file, opened by default | -       |
| `show-sidebar` | Show sidebar by default       | `false` |

#### Active File

Add `:active` to a fence's info string to mark it as the default active file:

````md
::: code-tree

```ts [index.ts] :active
const a = 1
```

```ts [utils.ts]
export const noop = () => {}
```

:::
````

### Embed Syntax

Use `@[code-tree](dir)` to embed a directory as a code tree. Files in the directory
are loaded and rendered automatically.

```md
@[code-tree](./src)
```

The `dir` supports the following prefixes:

| Prefix | Description                                       |
| ------ | ------------------------------------------------- |
| `@`    | Relative to VitePress `srcDir`                    |
| `/`    | Relative to VitePress project root                |
| -      | Relative to the current markdown file's directory |

#### Embed Attributes

````md
@[code-tree title="Source" height="500px" entry="index.ts" show-sidebar=true](./src)
````

## Options

```ts
import codeTree, { loadCodeContent } from 'vitepress-plugin-code-tree'
import { defineConfig } from 'vitepress-tuck'

export default defineConfig({
  plugins: [
    codeTree({
      height: '500px',
      ignores: ['**/*.test.ts'],
      loaders: [
        {
          filter: ['**/*.md'],
          load: (file) =>  loadCodeContent(file, 'md'),
        },
      ],
    }),
  ],
})
```

| Option    | Description                                            | Default |
| --------- | ------------------------------------------------------ | ------- |
| `height`  | Default code tree container height                     | `420px` |
| `ignores` | Glob patterns to ignore files when loading directories | `[]`    |
| `loaders` | Custom file loaders for embed syntax                   | `[]`    |

### File Loaders

Loaders are used by the embed syntax to load file content. The plugin ships with
built-in loaders for common file types (images, config files, source files supported
by Shiki). Custom loaders are merged before the built-in ones, so they take precedence.

```ts
loaders: [
  {
    filter: ['**/*.md'],
    load: (file) =>  loadCodeContent(file, 'md'),
  },
]
```

The `filter` field accepts a glob pattern, an array of glob patterns, or a function
that receives a `CodeTreeFile` and returns a boolean.
