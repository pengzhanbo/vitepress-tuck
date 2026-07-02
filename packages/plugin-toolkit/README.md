# vitepress-plugin-toolkit

> [中文文档](./README.zh-CN.md)

Development toolkit for VitePress plugin authors, providing shared utilities, components, and composables for both Node and Client side.

## Installation

```bash
pnpm add vitepress-plugin-toolkit
```

## Entry Points

| Entry                               | Description                                                                     |
| ----------------------------------- | ------------------------------------------------------------------------------- |
| `vitepress-plugin-toolkit`          | Node-side tools (markdown-it plugins, Vite plugins, VitePress config utilities) |
| `vitepress-plugin-toolkit/client`   | Client-side tools (Vue components, composables, environment detection)          |
| `vitepress-plugin-toolkit/styles/*` | CSS transition animations and component styles                                  |

## Node API

### Markdown Tools

#### `createEmbedRuleBlock(md, options)`

Creates an embed rule block for parsing `@[type info](source)` syntax in markdown.

```ts
import { createEmbedRuleBlock } from 'vitepress-plugin-toolkit'

createEmbedRuleBlock(md, {
  type: 'video',
  meta: (info, source) => ({ src: source, title: info }),
  content: meta => `<video src="${meta.src}" title="${meta.title}"></video>`,
})
```

Usage in markdown:

```md
@[video My Video](https://example.com/video.mp4)
```

**Options:**

| Parameter | Type                                       | Description                                              |
| --------- | ------------------------------------------ | -------------------------------------------------------- |
| `type`    | `string`                                   | Embed type identifier, e.g. `'video'`, `'embed'`         |
| `name`    | `string`                                   | Optional, custom token name, defaults to `embed_${type}` |
| `meta`    | `(info: string, source: string) => Meta`   | Parses info and source into a metadata object            |
| `content` | `(meta: Meta, env: MarkdownEnv) => string` | Optional, generates HTML content from metadata           |

#### `createContainerPlugin(md, type, options?)`

Creates a custom container plugin based on `markdown-it-container`. Content is processed normally by markdown-it.

```ts
import { createContainerPlugin } from 'vitepress-plugin-toolkit'

md.use(createContainerPlugin, 'tip', {
  before: info => `<div class="tip">${info}`,
  after: () => '</div>',
})
```

Usage in markdown:

```md
::: tip Note
This is a tip message
:::
```

**Options:**

| Parameter | Type                                                  | Description                                  |
| --------- | ----------------------------------------------------- | -------------------------------------------- |
| `before`  | `(info: string, ...args: RenderRuleParams) => string` | Optional, callback for container opening tag |
| `after`   | `(info: string, ...args: RenderRuleParams) => string` | Optional, callback for container closing tag |

#### `createContainerSyntaxPlugin(md, type, render?)`

Creates a custom container syntax plugin. Content inside the container is **NOT** processed by markdown-it,
but passed entirely to a custom render function.

```ts
import { createContainerSyntaxPlugin } from 'vitepress-plugin-toolkit'

createContainerSyntaxPlugin(md, 'chart', (tokens, idx) => {
  const { content, meta } = tokens[idx]
  return `<div class="chart">${content}</div>`
})
```

### VitePress Config Utilities

#### `getVitepressConfig()`

Retrieves the current VitePress site configuration from `globalThis.VITEPRESS_CONFIG`.

```ts
import { getVitepressConfig } from 'vitepress-plugin-toolkit'

const config = getVitepressConfig()
console.log(config.userConfig.title)
```

#### `createLocales(builtinLocales, userLocales?)`

Creates a locales configuration by merging built-in locale data with user-provided locale data.

```ts
import { createLocales } from 'vitepress-plugin-toolkit'

const locales = createLocales(
  [
    [['en', 'en-US'], { title: 'English' }],
    [['zh', 'zh-CN'], { title: '中文' }],
  ],
  { zh: { title: 'My Site' } },
)
```

#### `resolveRouteLink(url, env)`

Resolves markdown links according to VitePress routing rules:

- External links returned as-is
- Absolute paths prefixed with site base
- Relative `.md` links converted to `.html` based on `cleanUrls`
- `index.md` collapsed to directory path
- Hash fragments auto-slugified

```ts
import { resolveRouteLink } from 'vitepress-plugin-toolkit'

resolveRouteLink('./guide.md', env) // -> './guide.html' (depends on cleanUrls)
```

#### `getLocaleWithPath(path)`

Returns the language code and locale prefix for a given path.

```ts
import { getLocaleWithPath } from 'vitepress-plugin-toolkit'

getLocaleWithPath('/zh/guide/') // { lang: 'zh-CN', locale: '/zh/' }
getLocaleWithPath('/guide/')   // { lang: 'en', locale: '' } (root)
```

### Vite Plugin

#### `iconPlugin(icons)`

Creates a Vite plugin that registers SVG icons as CSS custom properties (`--icon`), generating CSS selectors like `.vpi-<name>`.

```ts
import { iconPlugin } from 'vitepress-plugin-toolkit'

defineConfig({
  vite: {
    plugins: [
      iconPlugin([
        { name: 'github', svg: '<svg>...</svg>' },
        { name: 'twitter', svg: '<svg>...</svg>' },
      ]),
    ],
  },
})
```

Display icons by adding class names:

```html
<span class="vpi-github"></span>
```

### Node Utility Functions

#### `resolveAttrs(info)` / `resolveAttr(info, key)`

Parses an attribute string into an object, or extracts a single attribute value.
Supports `key="value"` format and boolean attributes (`disabled`, etc.).

```ts
import { resolveAttrs, resolveAttr } from 'vitepress-plugin-toolkit'

resolveAttrs('width="100" height="50"') // { width: '100', height: '50' }
resolveAttr('width="100" height="50"', 'width') // '100'
```

#### `stringifyAttrs(attrs, withUndefinedOrNull?, forceStringify?)`

Stringifies an attributes object into an HTML attribute string. Automatically handles Boolean, Number, and String types.

```ts
import { stringifyAttrs } from 'vitepress-plugin-toolkit'

stringifyAttrs({ width: 100, disabled: true })
// ' :width="100" disabled'
```

#### `parseRect(str, unit?)`

Parses a size string, appending a unit (default `px`) to bare numbers.

```ts
import { parseRect } from 'vitepress-plugin-toolkit'

parseRect('100')    // '100px'
parseRect('50%')    // '50%'
parseRect('200', 'rpx') // '200rpx'
```

#### `slugify(str)`

Generates a URL-friendly slug, removing accents, control characters, and special characters, and merging consecutive separators.

```ts
import { slugify } from 'vitepress-plugin-toolkit'

slugify('Hello World!') // 'hello-world'
```

#### `genHash(data, length?)`

Generates a SHA-256 hash for any data, with optional truncation length.

```ts
import { genHash } from 'vitepress-plugin-toolkit'

genHash('hello')      // full SHA-256 hash
genHash({ a: 1 }, 8)  // 8-character hash
```

#### `treatAsHtml(filename)`

Determines whether a file should be treated as an HTML route (not a static asset).

```ts
import { treatAsHtml } from 'vitepress-plugin-toolkit'

treatAsHtml('about')   // true
treatAsHtml('logo.png') // false
```

#### `createLogger(prefix, defaultLevel?)`

Creates a formatted logger instance with colored labels and timestamps.

```ts
import { createLogger } from 'vitepress-plugin-toolkit'

const logger = createLogger('my-plugin', 'info')
logger.info('Build started')
logger.warn('Deprecated feature used')
logger.debug('Verbose details', 'debug')
```

#### Constants

```ts
import {
  isBuild,           // Whether building for production
  EXTENSION_VIDEOS,  // Browser-supported video file extensions
  EXTENSION_IMAGES,  // Browser-supported image file extensions
  EXTENSION_AUDIOS,  // Browser-supported audio file extensions
} from 'vitepress-plugin-toolkit'
```

## Client API

### Vue Components

- `VPCopyButton` — Copy-to-clipboard button component
- `VPLoading` — Loading animation component
- `VPTabSwitch` — Tab switch component

```vue
<script setup>
import { VPCopyButton, VPLoading, VPTabSwitch } from 'vitepress-plugin-toolkit/client'
</script>

<template>
  <VPCopyButton text="Click to copy this text" />
  <VPLoading :size="40" />
  <VPTabSwitch :tabs="['Code', 'Preview']" />
</template>
```

### Composables

#### `useSize(el, options, extraHeight?)`

Reactive size calculation based on width, height, and aspect ratio options. Automatically listens for window resize and orientationchange events.

```ts
import { useSize } from 'vitepress-plugin-toolkit/client'

const el = ref<HTMLElement>()
const { width, height, resize } = useSize(
  el,
  toRefs({ width: '100%', ratio: '16:9' }),
)
```

#### `useZoomAndDrag(parentEl)`

Provides zoom and drag interaction for a content stage, supporting mouse drag, touch drag, and pinch-to-zoom.

```ts
import { useZoomAndDrag } from 'vitepress-plugin-toolkit/client'

const stageEl = ref<HTMLDivElement>()
const { actorStyle, zoom, zoomIn, zoomOut, resetZoom, reset } = useZoomAndDrag(stageEl)
```

### Environment Detection

```ts
import {
  isiPhone,    // Is iPhone
  isiPad,      // Is iPad
  isIOS,       // Is iOS
  isWindows,   // Is Windows
  isMacOS,     // Is macOS
  isSafari,    // Is Safari browser
  isMobile,    // Is mobile device
} from 'vitepress-plugin-toolkit/client'
```

### CSS Transitions

Import preset CSS transition classes via `vitepress-plugin-toolkit/styles/*`:

```
vitepress-plugin-toolkit/styles/transition/fade-in.css
vitepress-plugin-toolkit/styles/transition/fade-in-up.css
vitepress-plugin-toolkit/styles/transition/fade-in-down.css
vitepress-plugin-toolkit/styles/transition/fade-in-left.css
vitepress-plugin-toolkit/styles/transition/fade-in-right.css
vitepress-plugin-toolkit/styles/transition/fade-in-scale-up.css
vitepress-plugin-toolkit/styles/transition/fade-in-width-expand.css
vitepress-plugin-toolkit/styles/transition/fade-in-height-expand.css
vitepress-plugin-toolkit/styles/transition/slide-in-up.css
vitepress-plugin-toolkit/styles/transition/slide-in-down.css
vitepress-plugin-toolkit/styles/transition/slide-in-left.css
vitepress-plugin-toolkit/styles/transition/slide-in-right.css
```

```ts
import 'vitepress-plugin-toolkit/styles/transition/fade-in-up.css'
```

## Shared

The following utilities are available on both Node and Client side.

### `isExternal(path)` / `isLinkWithProtocol(link)`

Checks whether a path is an external URL.

```ts
import { isExternal, isLinkWithProtocol } from 'vitepress-plugin-toolkit'

isExternal('https://example.com') // true
isExternal('/about')              // false
isLinkWithProtocol('//cdn.example.com/lib.js') // true
```

### `EXTERNAL_URL_RE` / `URL_PROTOCOL_RE`

Regular expressions for matching external URLs and protocol schemes.

### `SizeOptions`

TypeScript interface for size configuration:

```ts
interface SizeOptions {
  width?: string          // Width CSS value, e.g. '100%', '640px'
  height?: string         // Height CSS value, e.g. 'auto', '360px'
  ratio?: number | string // Aspect ratio, e.g. 16/9 or '16:9'
}
```

## License

MIT
