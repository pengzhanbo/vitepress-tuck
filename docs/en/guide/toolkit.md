# Toolkit API

`vitepress-plugin-toolkit` is a VitePress plugin development toolkit that provides a rich set of utility functions to assist plugin development.

Installation:

::: npm-to

```sh
npm install vitepress-plugin-toolkit
```

:::

## Node-side API

Import from `vitepress-plugin-toolkit`:

```ts
import {
  createContainerPlugin,
  createContainerSyntaxPlugin,
  createEmbedRuleBlock,
  resolveAttrs,
  resolveAttr,
  stringifyAttrs,
  createLogger,
  createLocales,
  getVitepressConfig,
  getLocaleWithPath,
  resolveRouteLink,
  parseRect,
  slugify,
  treatAsHtml,
} from 'vitepress-plugin-toolkit'
```

---

### createContainerPlugin

Create a markdown-it custom container plugin. Used for processing `::: type` syntax, where content is parsed normally by markdown-it.

```ts
function createContainerPlugin(
  md: MarkdownIt,
  type: string,
  options?: ContainerOptions,
): void
```

**ContainerOptions:**

```ts
interface ContainerOptions {
  /**
   * Callback for rendering container opening tag
   */
  before?: (info: string, tokens: Token[], index: number, options: Options, env: any) => string
  /**
   * Callback for rendering container closing tag
   */
  after?: (info: string, tokens: Token[], index: number, options: Options, env: any) => string
}
```

**Usage Example:**

```ts
import { createContainerPlugin } from 'vitepress-plugin-toolkit'

function myPlugin(md) {
  createContainerPlugin(md, 'steps', {
    before: () => '<div class="vp-steps">',
  })
}
```

---

### createContainerSyntaxPlugin

Create a custom syntax container plugin. Unlike `createContainerPlugin`, the content is not parsed by markdown-it and must be handled manually.

```ts
function createContainerSyntaxPlugin(
  md: MarkdownIt,
  type: string,
  render?: RenderRule,
): void
```

Raw content inside the container is accessible via `token.content`, and metadata via `token.meta`.

**Usage Example:**

```ts
import { createContainerSyntaxPlugin } from 'vitepress-plugin-toolkit'

function myPlugin(md) {
  createContainerSyntaxPlugin(md, 'file-tree', (tokens, index) => {
    const { content, meta } = tokens[index]
    return `<div class="file-tree">${content}</div>`
  })
}
```

---

### createEmbedRuleBlock

Create an embed rule block for handling `@[type ...](args)` syntax.

```ts
function createEmbedRuleBlock<Meta extends Record<string, any>>(
  md: MarkdownIt,
  options: EmbedRuleBlockOptions<Meta>,
): void
```

**EmbedRuleBlockOptions:**

```ts
interface EmbedRuleBlockOptions<Meta extends Record<string, any>> {
  /** Embed type, e.g. 'pdf', 'qrcode' */
  type: string
  /** Token name, defaults to type */
  name?: string
  /** Name of the rule to insert before, default 'code' */
  beforeName?: string
  /** Syntax pattern regex */
  syntaxPattern: RegExp
  /** Rule options */
  ruleOptions?: RuleOptions
  /** Extract metadata from match */
  meta: (match: RegExpMatchArray) => Meta
  /** Generate content from metadata */
  content: (meta: Meta, content: string, env: MarkdownEnv) => string
}
```

**Usage Example:**

```ts
import { createEmbedRuleBlock } from 'vitepress-plugin-toolkit'

function myPlugin(md) {
  createEmbedRuleBlock(md, {
    type: 'pdf',
    syntaxPattern: /^@\[pdf([^\]]*)\]\(([^)]*)\)/,
    meta: (match) => ({
      attrs: match[1] || '',
      src: match[2] || '',
    }),
    content: (meta) => {
      return `<VPPdf src="${meta.src}" ${meta.attrs} />`
    },
  })
}
```

---

### resolveAttrs

Parse an attribute string into an object.

```ts
function resolveAttrs<T extends Record<string, any> = Record<string, any>>(info: string): T
```

**Example:**

```ts
resolveAttrs('width="100%" height="400" dark')
// => { width: '100%', height: '400', dark: true }
```

---

### resolveAttr

Parse a single attribute value from an info string.

```ts
function resolveAttr(info: string, key: string): string | undefined
```

---

### stringifyAttrs

Serialize an attributes object into an HTML attribute string.

```ts
function stringifyAttrs<T extends object = object>(
  attrs: T,
  withUndefinedOrNull?: boolean,
  forceStringify?: (keyof T)[],
): string
```

**Example:**

```ts
stringifyAttrs({ width: '100%', height: 400, dark: true })
// => ' width="100%" :height="400" dark'
```

---

### createLogger

Create a logger instance.

```ts
function createLogger(
  prefix: string,
  defaultLevel?: LogLevel,
): Logger
```

**LogLevel:**

```ts
type LogLevel = 'info' | 'warn' | 'error' | 'debug' | 'silent'
```

**Example:**

```ts
const logger = createLogger('my-plugin', 'info')

logger.info('Plugin loaded')       // [my-plugin] Plugin loaded
logger.warn('Potential issue')     // [my-plugin] Potential issue
logger.error('An error occurred')  // [my-plugin] An error occurred
logger.debug('Debug info', true)   // [my-plugin] Debug info
```

---

### createLocales

Create multi-language configuration, automatically matching VitePress's language settings.

```ts
function createLocales<LocaleData extends Record<string, unknown>>(
  builtinLocales: BuiltinLocales<LocaleData>,
  userLocales?: Record<string, LocaleData>,
): Record<string, LocaleData>
```

**Example:**

```ts
const locales = createLocales(
  [
    [['en', 'en-US'], { chart: 'Chart', source: 'Source' }],
    [['zh', 'zh-CN'], { chart: '图表', source: '源码' }],
  ],
  userLocales,
)
```

---

### getVitepressConfig

Get the current VitePress site configuration.

```ts
function getVitepressConfig(): SiteConfig
```

---

### getLocaleWithPath

Get language information based on a file path.

```ts
function getLocaleWithPath(path: string): { lang: string, locale: string }
```

---

### resolveRouteLink

Convert a relative path to a VitePress route link.

```ts
function resolveRouteLink(url: string, env: MarkdownEnv): string
```

---

### parseRect

Parse a size string, automatically appending a unit if a number is passed.

```ts
function parseRect(str: string, unit?: string): string
```

**Example:**

```ts
parseRect('400')     // => '400px'
parseRect('50%')     // => '50%'
parseRect('10', 'rem') // => '10rem'
```

---

### slugify

Convert a string to a URL-friendly slug format.

```ts
function slugify(str: string): string
```

---

### treatAsHtml

Determine whether a filename should be treated as HTML (non-known-resource extensions are treated as HTML).

```ts
function treatAsHtml(filename: string): boolean
```

---

## Client-side API

Import from `vitepress-plugin-toolkit/client`:

```ts
import {
  VPCopyButton,
  VPLoading,
  useSize,
  isiPhone,
  isWindows,
  isiPad,
  isIOS,
  isMacOS,
  isMobile,
  isSafari,
} from 'vitepress-plugin-toolkit/client'
```

### VPCopyButton

Copy button component.

```vue
<template>
  <VPCopyButton :text="code" />
</template>
```

### VPLoading

Loading state component.

```vue
<template>
  <VPLoading />
</template>
```

### useSize

Responsive size calculation composable.

```ts
function useSize<T extends HTMLElement>(
  el: TemplateRef<T>,
  options: ToRefs<SizeOptions>,
  extraHeight?: MaybeRef<number>,
): {
  width: Ref<string>
  height: Ref<string>
  resize: () => void
}
```

**SizeOptions:**

```ts
interface SizeOptions {
  width?: string
  height?: string
  ratio?: number | string
}
```

### Device Detection Utilities

| Function | Description |
| -------- | ----------- |
| `isIPhone()` | Check if iPhone |
| `isIPad()` | Check if iPad |
| `isIOS()` | Check if iOS device |
| `isMacOS()` | Check if macOS |
| `isWindows()` | Check if Windows |
| `isMobile()` | Check if mobile device |
| `isSafari()` | Check if Safari browser |

---

## Shared Utilities

Can be imported from either `vitepress-plugin-toolkit` or `vitepress-plugin-toolkit/client`:

```ts
import { isExternal, isLinkWithProtocol } from 'vitepress-plugin-toolkit'
```

### isExternal

Check if a link is an external link.

```ts
function isExternal(path: string): boolean
```

### isLinkWithProtocol

Check if a link contains a protocol prefix.

```ts
function isLinkWithProtocol(link: string): boolean
```

---

## CSS Transition Animations

`vitepress-plugin-toolkit` provides predefined CSS transition animations that can be imported in plugins:

```css
@import 'vitepress-plugin-toolkit/styles/transition/fade-in.css';
@import 'vitepress-plugin-toolkit/styles/transition/fade-in-up.css';
@import 'vitepress-plugin-toolkit/styles/transition/fade-in-down.css';
@import 'vitepress-plugin-toolkit/styles/transition/fade-in-left.css';
@import 'vitepress-plugin-toolkit/styles/transition/fade-in-right.css';
@import 'vitepress-plugin-toolkit/styles/transition/slide-in-up.css';
@import 'vitepress-plugin-toolkit/styles/transition/slide-in-down.css';
@import 'vitepress-plugin-toolkit/styles/transition/slide-in-left.css';
@import 'vitepress-plugin-toolkit/styles/transition/slide-in-right.css';
@import 'vitepress-plugin-toolkit/styles/transition/fade-in-scale-up.css';
@import 'vitepress-plugin-toolkit/styles/transition/fade-in-width-expand.css';
@import 'vitepress-plugin-toolkit/styles/transition/fade-in-height-expand.css';
```
