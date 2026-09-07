---
url: /pluginssteps.md
---
# Steps

Step container plugin for creating step-by-step guided content in Markdown.

## Installation

::: npm-to

```sh
npm install vitepress-plugin-steps
```

:::

## Usage

### vitepress-tuck Mode Recommended

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress-tuck'
import steps from 'vitepress-plugin-steps'

export default defineConfig({
  plugins: [steps()],
})
```

[Learn more about **vitepress-tuck**](../guide/quick-start.md){.readmore}

### Native Mode

```ts [.vitepress/config.ts]
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

Also import the styles in the theme:

```ts [.vitepress/theme/index.ts]
import 'vitepress-plugin-steps/style.css'
```

## Syntax

Use the `::: steps` container to wrap step content, with each step starting from an unordered/ordered list item:

```md
::: steps

- Step One

  Description for step one

- Step Two

  Description for step two

- Step Three

  Description for step three, supports heading syntax

:::
```

**Rendered Result:**

::: steps

* Step One

  Description for step one

* Step Two

  Description for step two

* Step Three

  Description for step three, supports heading syntax

:::
