# vitepress-plugin-steps

Render ordered/unordered lists as numbered steps with badges and connecting lines.

将有序/无序列表渲染为带序号和连接线的步骤样式。

## Usage

### With Vitepress-tuck

**Installation:**

```bash
# npm
npm install -D vitepress-tuck vitepress-plugin-steps
# pnpm
pnpm add -D vitepress-tuck vitepress-plugin-steps
# yarn
yarn add -D vitepress-tuck vitepress-plugin-steps
```

**Configuration:**

```ts
// .vitepress/config.ts
import steps from 'vitepress-plugin-steps'
import { defineConfig } from 'vitepress-tuck'

export default defineConfig({
  plugins: [steps()],
})
```

### With Vitepress

**Installation:**

```bash
# npm
npm install -D vitepress-plugin-steps
# pnpm
pnpm add -D vitepress-plugin-steps
# yarn
yarn add -D vitepress-plugin-steps
```

**Configuration:**

```ts
// .vitepress/config.ts
import { defineConfig } from 'vitepress'
import { stepsMarkdownPlugin } from 'vitepress-plugin-steps'

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(stepsMarkdownPlugin)
    },
  },
})
```

```ts
// .vitepress/theme/index.ts
import 'vitepress-plugin-steps/style.css'
```

## Syntax

Use `::: steps` container to create step-by-step instructions.

```md
::: steps
1. First, clone the repository
2. Then, install dependencies
3. Finally, start the dev server
:::
```

Each list item is rendered with a numbered circle badge and vertical connecting lines between steps.
Supports all standard Markdown syntax (headings, paragraphs, code blocks, etc.) inside each step.
