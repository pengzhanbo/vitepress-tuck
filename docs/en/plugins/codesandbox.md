# CodeSandbox

Embed [CodeSandbox](https://codesandbox.io/) projects into VitePress pages.

## Installation

::: npm-to

```sh
npm install vitepress-plugin-codesandbox
```

:::

## Usage

### vitepress-tuck Mode <Badge type="tip">Recommended</Badge>

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress-tuck'
import codeSandbox from 'vitepress-plugin-codesandbox'

export default defineConfig({
  plugins: [codeSandbox()],
})
```

[Learn more about **vitepress-tuck**](../guide/quick-start.md){.readmore}

### Native Mode

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress'
import { codeSandboxMarkdownPlugin } from 'vitepress-plugin-codesandbox'

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(codeSandboxMarkdownPlugin)
    },
  },
})
```

## Syntax

### Embed Mode (Default)

```md
@[codesandbox](5wyzu)
```

### Button Mode

Use the `button` parameter to create a button link instead of an inline frame:

```md
@[codesandbox button](5wyzu)
```

### Specifying Workspace

```md
@[codesandbox](workspace/5wyzu)
```

### Specifying File

Use `#` to specify the default file to open:

```md
@[codesandbox](workspace/5wyzu#src/App.vue)
```

### Full Configuration

```md
@[codesandbox title="Example" layout="Editor+Preview" width="100%" height="500px"](workspace/5wyzu#filepath)
```

### Attribute Reference

| Attribute  | Type      | Default            | Description                   |
| ---------- | --------- | ------------------ | ----------------------------- |
| `title`    | `string`  | -                  | Title                         |
| `user`     | `string`  | -                  | Username (parsed from link)   |
| `id`       | `string`  | -                  | Project ID (parsed from link) |
| `layout`   | `string`  | `'Editor+Preview'` | Layout mode                   |
| `filepath` | `string`  | -                  | Default file path to open     |
| `navbar`   | `boolean` | `true`             | Show navigation bar           |
| `console`  | `boolean` | `false`            | Show console                  |
| `width`    | `string`  | `'100%'`           | Width                         |
| `height`   | `string`  | -                  | Height                        |

## Examples

```md
@[codesandbox button](reaction/5wyzu)
```

@[codesandbox button](reaction/5wyzu)

```md
@[codesandbox](reaction/5wyzu)
```

@[codesandbox](reaction/5wyzu)
