---
url: /pluginswatermark.md
---

# Watermark

Add watermark to your site. Pure client-side implementation, no node-side configuration required.

## Installation

::: npm-to

```sh
npm install vitepress-plugin-watermark
```

:::

## Usage

This plugin only provides a client-side `setupWatermark` function, which must be called inside the
`<script setup>` block of a Layout wrapper component.

Create a custom Layout wrapper component:

```vue [.vitepress/theme/Layout.vue]
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

Then register this Layout in your theme:

```ts [.vitepress/theme/index.ts]
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'

export default {
  extends: DefaultTheme,
  Layout,
} satisfies Theme
```

## Configuration

`setupWatermark` accepts an optional configuration object:

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
})
```

| Option | Type | Default | Description |
| ------ | ---- | ------- | ----------- |
| `enabled` | `boolean \| ((pageData: PageData) => boolean)` | `true` | Enable watermark; supports a function for dynamic control |
| `content` | `string` | Site title | Watermark text content |
| `fontColor` | `string` | `'#76747f'` | Font color |
| `globalAlpha` | `number` | `0.165` (normal) / `0.005` (blind mode) | Opacity |
| `mode` | `'default' \| 'blind'` | `'default'` | Watermark mode: `'blind'` for blind watermark |
| `width` | `number` | — | Width of each watermark cell |
| `height` | `number` | — | Height of each watermark cell |
| `rotate` | `number` | — | Rotation angle in degrees |
| `fontSize` | `string` | — | Font size |
| `fontFamily` | `string` | — | Font family |
| `fontStyle` | `string` | — | Font style |
| `fontWeight` | `string` | — | Font weight |
| `image` | `string` | — | Image watermark URL |
| `layout` | `'default' \| 'grid'` | — | Layout mode |
| `zIndex` | `number` | — | CSS z-index |
| `mutationObserve` | `boolean` | — | Enable DOM mutation observer protection |
| `monitorProtection` | `boolean` | — | Enable monitoring protection |
| `movable` | `boolean` | — | Allow dragging the watermark |
| `parent` | `Element \| string` | — | Mount target element |

For more options, see the [watermark-js-plus](https://github.com/zhensherlock/watermark-js-plus) documentation.

## Per-Page Watermark

Control watermark on individual pages via frontmatter:

### Enable Watermark

```yaml
---
watermark: true
---
```

### Custom Text

```yaml
---
watermark: CONFIDENTIAL
---
```

### Full Customization

```yaml
---
watermark:
  content: DRAFT
  fontColor: '#ff0000'
  globalAlpha: 0.3
  rotate: 30
---
```

### Disable on Specific Pages

```yaml
---
watermark: false
---
```

### Dynamic Enable via Function

Use an `enabled` function to dynamically control watermark based on the page path:

```ts
setupWatermark({
  enabled: (pageData) => {
    // Only enable on pages under guide/
    return pageData.relativePath.startsWith('guide/')
  },
})
```
