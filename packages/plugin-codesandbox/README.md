# vitepress-plugin-code-sandbox

Embed CodeSandbox in your VitePress site.

在 VitePress 中嵌入 CodeSandbox。

## Usage

### With Vitepress-tuck

**Installation:**

```bash
# npm
npm install -D vitepress-tuck vitepress-plugin-code-sandbox
# pnpm
pnpm add -D vitepress-tuck vitepress-plugin-code-sandbox
# yarn
yarn add -D vitepress-tuck vitepress-plugin-code-sandbox
```

**Configuration:**

```ts
// .vitepress/config.ts
import codesandbox from 'vitepress-plugin-code-sandbox'
import { defineConfig } from 'vitepress-tuck'

export default defineConfig({
  plugins: [codesandbox()],
})
```

### With Vitepress

**Installation:**

```bash
# npm
npm install -D vitepress-plugin-code-sandbox
# pnpm
pnpm add -D vitepress-plugin-code-sandbox
# yarn
yarn add -D vitepress-plugin-code-sandbox
```

**Configuration:**

```ts
// .vitepress/config.ts
import { defineConfig } from 'vitepress'
import { codeSandboxMarkdownPlugin } from 'vitepress-plugin-code-sandbox'

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(codeSandboxMarkdownPlugin)
    },
  },
})
```

## Syntax

```md
@[codesandbox](id)
```

### Button Mode

```md
@[codesandbox button](id)
```

### With Options

```md
@[codesandbox title="My Demo" layout="Editor+Preview" height="600px" navbar="false" console="true"](id#src/App.vue)
```

| Option    | Type      | Default            | Description                              |
| --------- | --------- | ------------------ | ---------------------------------------- |
| `button`  | -         | -                  | Render as a button link instead of embed |
| `title`   | `string`  | `"CodeSandbox"`    | Sandbox title                            |
| `layout`  | `string`  | `"Editor+Preview"` | Layout mode                              |
| `height`  | `string`  | `"500px"`          | iframe height                            |
| `navbar`  | `boolean` | `true`             | Show navigation bar                      |
| `console` | `boolean` | `false`            | Show console                             |
| `width`   | `string`  | `"100%"`           | iframe width                             |

Use `#` in the source to specify a file path: `(id#src/App.vue)`
