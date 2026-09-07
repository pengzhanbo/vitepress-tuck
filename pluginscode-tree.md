---
url: /pluginscode-tree.md
---
# Code Tree

Code tree plugin for rendering code structures with a file tree sidebar in Markdown, supporting file switching.

This plugin depends on the [File Tree](./file-tree.md) plugin for the file tree sidebar components.

## Installation

::: npm-to

```sh
npm install vitepress-plugin-code-tree
```

:::

## Usage

### vitepress-tuck Mode Recommended

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress-tuck'
import codeTree from 'vitepress-plugin-code-tree'

export default defineConfig({
  plugins: [codeTree()],
})
```

[Learn more about **vitepress-tuck**](../guide/quick-start.md){.readmore}

### Native Mode

```ts [.vitepress/config.ts]
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

```ts [.vitepress/theme/index.ts]
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

The plugin provides two syntaxes to render a code tree: a container syntax for inline file content,
and an embed syntax to load files from a directory.

### Container Syntax

Use the `::: code-tree` container with fenced code blocks inside.
Each fence must declare a filename via the `[filename]` syntax in its info string.

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

Use `@[code-tree](dir)` to embed a directory as a code tree. Files in the directory are loaded and rendered automatically.

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

```md
@[code-tree title="Source" height="500px" entry="index.ts" show-sidebar=true](./src)
```

## Configuration

### CodeTreePluginOptions

```ts
interface CodeTreePluginOptions {
  /**
   * Default code tree container height
   * @default '420px'
   */
  height?: string | number

  /**
   * Glob patterns to ignore files
   * Applied when loading files from a directory via the embed syntax
   * node_modules and .DS_Store are always ignored
   * @default []
   */
  ignores?: string[]

  /**
   * File loaders
   * Used to load resource files when embedding a directory with `@[code-tree](dir)`
   * Custom loaders are merged before the built-in ones, so they take precedence
   * @default []
   */
  loaders?: CodeTreeFileLoader[]
}
```

### File Loaders

Loaders are used by the embed syntax to load file content. The plugin ships with built-in loaders for common file types,
and custom loaders are merged before the built-in ones, so they take precedence.

Built-in loaders cover the following file types:

* Dot files (`.git*`, `.env*`, `.*ignore`, `.npmrc`): Rendered as plain text
* `.XXXrc` config files (e.g. `.eslintrc`): Rendered as JSON
* Image files: Rendered as `<img>` tags with proper `src` resolution
* Source files supported by Shiki: Rendered as fenced code blocks with syntax highlighting

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
          load: (file) => loadCodeContent(file, 'md'),
        },
      ],
    }),
  ],
})
```

The `filter` field accepts a glob pattern string, an array of glob patterns,
or a predicate function that receives a `CodeTreeFile` and returns a boolean.

## Example

### Container Syntax

````md
:::code-tree title="Code Tree" show-sidebar
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

:::code-tree title="Code Tree" show-sidebar

```ts [index.ts]
const a = 1
```

```rs [main.rs]
fn main() {
    println!("Hello, world!");
}
```

:::

### Embed Syntax

```md
@[code-tree title="Code Tree" show-sidebar](@/en)
```

@[code-tree title="Code Tree" show-sidebar](@/en)
