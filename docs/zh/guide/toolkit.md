# Toolkit API

`vitepress-plugin-toolkit` 是 VitePress 插件开发工具包，提供了丰富的工具函数来辅助插件开发。

安装：

::: npm-to

```sh
npm install vitepress-plugin-toolkit
```

:::

## Node 端 API

从 `vitepress-plugin-toolkit` 导入：

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

创建 markdown-it 自定义容器插件。用于处理 `::: type` 语法，内容会被 markdown-it 正常解析。

```ts
function createContainerPlugin(
  md: MarkdownIt,
  type: string,
  options?: ContainerOptions,
): void
```

**ContainerOptions：**

```ts
interface ContainerOptions {
  /**
   * 渲染容器起始标签时的回调
   */
  before?: (info: string, tokens: Token[], index: number, options: Options, env: any) => string
  /**
   * 渲染容器结束标签时的回调
   */
  after?: (info: string, tokens: Token[], index: number, options: Options, env: any) => string
}
```

**使用示例：**

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

创建自定义语法容器插件。与 `createContainerPlugin` 不同，内容不会被 markdown-it 解析，需要自行处理。

```ts
function createContainerSyntaxPlugin(
  md: MarkdownIt,
  type: string,
  render?: RenderRule,
): void
```

容器内的原始内容通过 `token.content` 获取，元数据通过 `token.meta` 获取。

**使用示例：**

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

创建嵌入规则块，用于处理 `@[type info](source)` 语法。

```ts
function createEmbedRuleBlock<Meta extends Record<string, any>>(
  md: MarkdownIt,
  options: EmbedRuleBlockOptions<Meta>,
): void
```

**EmbedRuleBlockOptions：**

```ts
interface EmbedRuleBlockOptions<Meta extends Record<string, any>> {
  /** 嵌入类型，如 'pdf'、'qrcode' */
  type: string
  /** Token 名称，默认与 type 相同 */
  name?: string
  /** 插入到哪个规则之前，默认 'code' */
  beforeName?: string
  /** 规则选项 */
  ruleOptions?: RuleOptions
  /** 解析 `@[type info](source)` 中的 `info` 和 `source`，转换为元数据对象 */
  meta: (info: string, source: string) => Meta
  /** 从元数据生成内容 */
  content?: (meta: Meta, env: MarkdownEnv) => string
  /** 渲染函数 */
  render?: (tokens: Token[], index: number, env: MarkdownEnv) => string
}
```

**使用示例：**

```ts
import { createEmbedRuleBlock, resolveAttrs } from 'vitepress-plugin-toolkit'

function myPlugin(md) {
  createEmbedRuleBlock(md, {
    type: 'pdf',
    meta: (info, source) => ({
      attrs: info,
      src: source,
    }),
    content: (meta) => {
      return `<VPPdf src="${meta.src}" ${meta.attrs} />`
    },
  })
}
```

---

### resolveAttrs

将属性字符串解析为对象。

```ts
function resolveAttrs<T extends Record<string, any> = Record<string, any>>(info: string): T
```

**示例：**

```ts
resolveAttrs('width="100%" height="400" dark')
// => { width: '100%', height: '400', dark: true }
```

---

### resolveAttr

从信息字符串中解析单个属性值。

```ts
function resolveAttr(info: string, key: string): string | undefined
```

---

### stringifyAttrs

将属性对象序列化为 HTML 属性字符串。

```ts
function stringifyAttrs<T extends object = object>(
  attrs: T,
  withUndefinedOrNull?: boolean,
  forceStringify?: (keyof T)[],
): string
```

**示例：**

```ts
stringifyAttrs({ width: '100%', height: 400, dark: true })
// => ' width="100%" :height="400" dark'
```

---

### createLogger

创建日志记录器实例。

```ts
function createLogger(
  prefix: string,
  defaultLevel?: LogLevel,
): Logger
```

**LogLevel：**

```ts
type LogLevel = 'info' | 'warn' | 'error' | 'debug' | 'silent'
```

**示例：**

```ts
const logger = createLogger('my-plugin', 'info')

logger.info('插件已加载')       // [my-plugin] 插件已加载
logger.warn('可能存在问题')     // [my-plugin] 可能存在问题
logger.error('发生了错误')     // [my-plugin] 发生了错误
logger.debug('调试信息', true)  // [my-plugin] 调试信息
```

---

### createLocales

创建多语言配置，自动匹配 VitePress 的语言设置。

```ts
function createLocales<LocaleData extends Record<string, unknown>>(
  builtinLocales: BuiltinLocales<LocaleData>,
  userLocales?: Record<string, LocaleData>,
): Record<string, LocaleData>
```

**示例：**

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

获取当前的 VitePress 站点配置。

```ts
function getVitepressConfig(): SiteConfig
```

---

### getLocaleWithPath

根据文件路径获取语言信息。

```ts
function getLocaleWithPath(path: string): { lang: string, locale: string }
```

---

### resolveRouteLink

将相对路径转换为 VitePress 的路由链接。

```ts
function resolveRouteLink(url: string, env: MarkdownEnv): string
```

---

### parseRect

解析尺寸字符串，如果传入数字则自动添加单位。

```ts
function parseRect(str: string, unit?: string): string
```

**示例：**

```ts
parseRect('400')     // => '400px'
parseRect('50%')     // => '50%'
parseRect('10', 'rem') // => '10rem'
```

---

### slugify

将字符串转换为 URL 友好的 slug 格式。

```ts
function slugify(str: string): string
```

---

### treatAsHtml

判断文件名是否应作为 HTML 处理（非已知资源扩展名即为 HTML）。

```ts
function treatAsHtml(filename: string): boolean
```

---

## Client 端 API

从 `vitepress-plugin-toolkit/client` 导入：

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

复制按钮组件。

```vue
<template>
  <VPCopyButton :text="code" />
</template>
```

### VPLoading

加载状态组件。

```vue
<template>
  <VPLoading />
</template>
```

### useSize

响应式尺寸计算 composable。

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

**SizeOptions：**

```ts
interface SizeOptions {
  width?: string
  height?: string
  ratio?: number | string
}
```

### 设备检测工具

| 函数          | 说明                     |
| ------------- | ------------------------ |
| `isIPhone()`  | 检测是否为 iPhone        |
| `isIPad()`    | 检测是否为 iPad          |
| `isIOS()`     | 检测是否为 iOS 设备      |
| `isMacOS()`   | 检测是否为 macOS         |
| `isWindows()` | 检测是否为 Windows       |
| `isMobile()`  | 检测是否为移动设备       |
| `isSafari()`  | 检测是否为 Safari 浏览器 |

---

## Shared 工具

从 `vitepress-plugin-toolkit` 或 `vitepress-plugin-toolkit/client` 均可导入：

```ts
import { isExternal, isLinkWithProtocol } from 'vitepress-plugin-toolkit'
```

### isExternal

判断链接是否为外部链接。

```ts
function isExternal(path: string): boolean
```

### isLinkWithProtocol

判断链接是否包含协议前缀。

```ts
function isLinkWithProtocol(link: string): boolean
```

---

## CSS 过渡动画

`vitepress-plugin-toolkit` 提供了预定义的 CSS 过渡动画，可在插件中导入：

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
