# Mark

<NpmBadge name="vitepress-plugin-mark" />

Mark plugin that adds `==highlight==` syntax support to Markdown,
rendering highlighted text with a scroll-triggered animation and multiple color variants.

## Installation

::: npm-to

```sh
npm install vitepress-plugin-mark
```

:::

## Usage

### vitepress-tuck Mode <Badge type="tip">Recommended</Badge>

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress-tuck'
import mark from 'vitepress-plugin-mark'

export default defineConfig({
  plugins: [mark()],
})
```

[Learn more about **vitepress-tuck**](../guide/quick-start.md){.readmore}

### Native Mode

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress'
import { markdownPlugin } from 'vitepress-plugin-mark' // [!code ++]

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(markdownPlugin) // [!code ++]
    },
  },
})
```

Register the component in the theme and import the styles:

```ts [.vitepress/theme/index.ts]
import type { Theme } from 'vitepress'
import { enhanceAppWithMark } from 'vitepress-plugin-mark/client' // [!code ++]
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    enhanceAppWithMark(ctx) // [!code ++]
  },
} satisfies Theme
```

## Syntax

Wrap inline content with `==` to render it as a highlighted `<mark>` element. When the element
scrolls into the viewport, a fill-from-left highlight animation plays once, giving the marked text
a vivid emphasis effect.

```md
==Marked== text
```

**Rendered Result:**

==Marked== text

Inline content inside the markers fully supports Markdown syntax (bold, italic, links, code, etc.):

```md
==**bold**==, ==*italic*==, ==[link](https://example.com)==, ==`code`==
```

**Rendered Result:**

==**bold**==, ==*italic*==, ==[link to](https://example.com)==, ==`code`==

## Color Variants

Specify different highlight colors by appending an [attrs syntax](https://vitepress.dev/guide/markdown#attribute)
to the marker. Variant names correspond to VitePress container types and automatically adapt to dark mode.

```md
==Default==
==note=={.note}
==info=={.info}
==tip=={.tip}
==warning=={.warning}
==caution=={.caution}
==important=={.important}
```

**Rendered Result:**

==Default==

==note=={.note}

==info=={.info}

==tip=={.tip}

==warning=={.warning}

==caution=={.caution}

==important=={.important}

### Variant Reference

| Variant      | Description                       |
| ------------ | --------------------------------- |
| _(default)_  | Yellow highlight                  |
| `.note`      | Cyan highlight                    |
| `.info`      | Neutral gray highlight            |
| `.tip`       | Green highlight                   |
| `.warning`   | Gold/amber highlight              |
| `.caution`   | Pink highlight (alias: `.danger`) |
| `.important` | Lavender/purple highlight         |

## Customization

Customize the highlight appearance by overriding the following CSS variables in your theme styles:

```css
:root {
  --vp-mark-linear-color: #f0a;
}
```

| Variable                 | Description                                   | Default                              |
| ------------------------ | --------------------------------------------- | ------------------------------------ |
| `--vp-mark-text`         | Text color                                    | `currentcolor`                       |
| `--vp-mark-bg`           | Background color                              | `transparent`                        |
| `--vp-mark-linear-color` | Highlight fill color                          | `#ff0`                               |
| `--vp-mark-bg-image`     | Background image used for the fill (gradient) | `linear-gradient(to right, ...)`     |
| `--vp-mark-bg-shift`     | Vertical position shift of the background     | `0.55lh`                             |
| `--vp-mark-animation`    | Animation shorthand                           | `mark-highlight 1.25s 0.5s forwards` |

You can also extend highlight color variants by customizing CSS class names:

```css
mark.custom {
  --vp-mark-linear-color: #f0a;
}

```

```md
==Custom variant=={.custom}
```

Rendered result:

==Custom variant=={.custom}

<style>

mark.custom {
  --vp-mark-linear-color: #f0a;
}

</style>
