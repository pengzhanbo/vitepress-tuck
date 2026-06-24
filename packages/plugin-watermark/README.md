# vitepress-plugin-watermark

Add watermark to your VitePress site.

在 vitepress 站点中添加水印。

## Usage

This plugin only provides a client-side `setupWatermark` function. No node-side configuration is needed.

**Installation:**

```bash
# npm
npm install -D vitepress-plugin-watermark
# pnpm
pnpm add -D vitepress-plugin-watermark
# yarn
yarn add -D vitepress-plugin-watermark
```

**Configuration:**

Create a custom Layout wrapper component and call `setupWatermark` inside its `<script setup>` block:

```vue
<!-- .vitepress/theme/Layout.vue -->
<script setup lang="ts">
import { setupWatermark } from 'vitepress-plugin-watermark'
import Theme from 'vitepress/theme'
import { h, useAttrs, useSlots } from 'vue'

const slots = useSlots()
const attrs = useAttrs()

const Layout = () => h(Theme.Layout, attrs, slots)

setupWatermark()
</script>

<template>
  <Layout />
</template>
```

Then register the custom Layout in your theme:

```ts
// .vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'

export default {
  extends: DefaultTheme,
  Layout,
} satisfies Theme
```

## Options

```ts
setupWatermark({
  enabled: true,
  content: 'My Watermark',
  fontColor: '#76747f',
  globalAlpha: 0.165,
  width: 200,
  height: 200,
  rotate: -22,
  fontSize: '16px',
  fontFamily: 'sans-serif',
  // ...
})
```

| Option              | Type                                           | Default                                 | Description                                               |
| ------------------- | ---------------------------------------------- | --------------------------------------- | --------------------------------------------------------- |
| `enabled`           | `boolean \| ((pageData: PageData) => boolean)` | `true`                                  | Enable watermark; supports a function for dynamic control |
| `content`           | `string`                                       | Site title                              | Watermark text content                                    |
| `fontColor`         | `string`                                       | `'#76747f'`                             | Font color                                                |
| `globalAlpha`       | `number`                                       | `0.165` (normal) / `0.005` (blind mode) | Opacity                                                   |
| `width`             | `number`                                       | -                                       | Width of each watermark cell                              |
| `height`            | `number`                                       | -                                       | Height of each watermark cell                             |
| `rotate`            | `number`                                       | -                                       | Rotation angle in degrees                                 |
| `fontSize`          | `string`                                       | -                                       | Font size                                                 |
| `fontFamily`        | `string`                                       | -                                       | Font family                                               |
| `image`             | `string`                                       | -                                       | Image watermark URL                                       |
| `mode`              | `'default' \| 'blind'`                         | -                                       | Watermark mode: `'blind'` for blind watermark             |
| `layout`            | `'default' \| 'grid'`                          | -                                       | Layout mode                                               |
| `zIndex`            | `number`                                       | -                                       | CSS z-index                                               |
| `mutationObserve`   | `boolean`                                      | -                                       | Enable DOM mutation observer protection                   |
| `monitorProtection` | `boolean`                                      | -                                       | Enable monitoring protection                              |
| `movable`           | `boolean`                                      | -                                       | Allow dragging the watermark                              |
| `parent`            | `Element \| string`                            | -                                       | Mount target element                                      |

For all available options, see [watermark-js-plus](https://github.com/zhensherlock/watermark-js-plus).
`setupWatermark` accepts all `WatermarkOptions` parameters.

## Per-Page Watermark

Control watermark on individual pages via frontmatter:

```md
---
watermark: true
---
```

### Custom Text

```md
---
watermark: CONFIDENTIAL
---
```

### Full Customization

```md
---
watermark:
  content: DRAFT
  fontColor: '#ff0000'
  globalAlpha: 0.3
  rotate: 30
---
```

### Disable on Specific Pages

```md
---
watermark: false
---
```

### Dynamic Enable via Function

```ts
setupWatermark({
  enabled: (pageData) => {
    // Only enable on pages under guide/
    return pageData.relativePath.startsWith('guide/')
  },
})
```
