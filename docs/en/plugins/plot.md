# Plot

Hidden text plugin that reveals concealed text content on click or hover.

## Installation

::: npm-to

```sh
npm install vitepress-plugin-plot
```

:::

## Usage

### vitepress-tuck Mode <Badge type="tip">Recommended</Badge>

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress-tuck'
import plot from 'vitepress-plugin-plot'

export default defineConfig({
  plugins: [
    plot({
      trigger: 'hover',  // 'hover' | 'click', default 'hover'
      effect: 'mask',    // 'mask' | 'blur', default 'mask'
    }),
  ],
})
```

[Learn more about **vitepress-tuck**](../guide/quick-start.md){.readmore}

### Native Mode

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress'
import { plotMarkdownPlugin } from 'vitepress-plugin-plot'

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(plotMarkdownPlugin, {
        trigger: 'hover',
        effect: 'mask',
      })
    },
  },
})
```

```ts
// .vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import { enhanceAppWithPlot } from 'vitepress-plugin-plot/client' // [!code ++]
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    enhanceAppWithPlot(ctx) // [!code ++]
  },
} satisfies Theme
```

## Syntax

Wrap hidden text with `!!`:

```md
The answer is !!plot!!
```

Use `classname` to set interaction behavior:

```md
!!plot!!{.click .blur}
```

Supported `classname` values:

- `.click` / `.hover`: Reveal on click / Reveal on hover
- `.blur` / `.mask`: Blur effect / Mask effect

## Configuration

```ts
interface PlotOptions {
  /**
   * Trigger method
   * - 'hover': Reveal on hover
   * - 'click': Reveal on click
   * @default 'hover'
   */
  trigger?: 'hover' | 'click'

  /**
   * Hide effect
   * - 'mask': Mask effect (default)
   * - 'blur': Blur effect
   * @default 'mask'
   */
  effect?: 'mask' | 'blur'
}
```

## Examples

```md
Lu Xun once said: "!!I never said that!!"
```

Lu Xun once said: "!!I never said that!!"

```md
There is no royal road to learning, !!but hard work pays off!!{.click .blur}.
```

There is no royal road to learning, !!but hard work pays off!!{.click .blur}.
