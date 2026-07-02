# vitepress-plugin-toolkit

> [English Documentation](./README.md)

VitePress 插件开发工具包，为 VitePress 插件作者提供 Node 端和 Client 端的通用工具、组件和组合式函数。

## 安装

```bash
pnpm add vitepress-plugin-toolkit
```

## 入口

| 入口                                | 说明                                                           |
| ----------------------------------- | -------------------------------------------------------------- |
| `vitepress-plugin-toolkit`          | Node 端工具（markdown-it 插件、Vite 插件、VitePress 配置工具） |
| `vitepress-plugin-toolkit/client`   | Client 端工具（Vue 组件、composables、环境检测工具）           |
| `vitepress-plugin-toolkit/styles/*` | CSS 过渡动效和组件样式                                         |

## Node 端 API

### Markdown 工具

#### `createEmbedRuleBlock(md, options)`

创建一个嵌入规则块，用于解析 `@[type info](source)` 语法的 markdown 标记。

```ts
import { createEmbedRuleBlock } from 'vitepress-plugin-toolkit'

createEmbedRuleBlock(md, {
  type: 'video',
  meta: (info, source) => ({ src: source, title: info }),
  content: meta => `<video src="${meta.src}" title="${meta.title}"></video>`,
})
```

Markdown 中使用：

```md
@[video 我的视频](https://example.com/video.mp4)
```

**选项:**

| 参数      | 类型                                       | 说明                                            |
| --------- | ------------------------------------------ | ----------------------------------------------- |
| `type`    | `string`                                   | 嵌入类型标识，如 `'video'`、`'embed'`           |
| `name`    | `string`                                   | 可选，自定义 token 名称，默认为 `embed_${type}` |
| `meta`    | `(info: string, source: string) => Meta`   | 解析 info 和 source 为元数据对象                |
| `content` | `(meta: Meta, env: MarkdownEnv) => string` | 可选，从元数据生成 HTML 内容                    |

#### `createContainerPlugin(md, type, options?)`

基于 `markdown-it-container` 创建自定义容器插件。内容由 markdown-it 正常处理。

```ts
import { createContainerPlugin } from 'vitepress-plugin-toolkit'

md.use(createContainerPlugin, 'tip', {
  before: info => `<div class="tip">${info}`,
  after: () => '</div>',
})
```

Markdown 中使用：

```md
::: tip 提示
这是一条提示信息
:::
```

**选项:**

| 参数     | 类型                                                  | 说明                     |
| -------- | ----------------------------------------------------- | ------------------------ |
| `before` | `(info: string, ...args: RenderRuleParams) => string` | 可选，容器开始标签的回调 |
| `after`  | `(info: string, ...args: RenderRuleParams) => string` | 可选，容器结束标签的回调 |

#### `createContainerSyntaxPlugin(md, type, render?)`

创建一个自定义容器语法插件，容器内的内容**不经过** markdown-it 处理，而是完整交给自定义渲染函数。

```ts
import { createContainerSyntaxPlugin } from 'vitepress-plugin-toolkit'

createContainerSyntaxPlugin(md, 'chart', (tokens, idx) => {
  const { content, meta } = tokens[idx]
  return `<div class="chart">${content}</div>`
})
```

### VitePress 配置工具

#### `getVitepressConfig()`

从 `globalThis.VITEPRESS_CONFIG` 获取当前 VitePress 站点配置。

```ts
import { getVitepressConfig } from 'vitepress-plugin-toolkit'

const config = getVitepressConfig()
console.log(config.userConfig.title)
```

#### `createLocales(builtinLocales, userLocales?)`

创建多语言配置，合并内置语言数据和用户自定义语言数据。

```ts
import { createLocales } from 'vitepress-plugin-toolkit'

const locales = createLocales(
  [
    [['en', 'en-US'], { title: 'English' }],
    [['zh', 'zh-CN'], { title: '中文' }],
  ],
  { zh: { title: '我的站点' } },
)
```

#### `resolveRouteLink(url, env)`

根据 VitePress 路由规则解析 markdown 链接。支持：

- 外部链接原样返回
- 绝对路径自动添加 site base 前缀
- 相对 `.md` 链接按 `cleanUrls` 设置转换为 `.html`
- `index.md` 折叠为目录路径
- 哈希片段自动 slugify

```ts
import { resolveRouteLink } from 'vitepress-plugin-toolkit'

resolveRouteLink('./guide.md', env) // -> './guide.html' (取决于 cleanUrls)
```

#### `getLocaleWithPath(path)`

根据路径获取对应的语言代码和语言环境前缀。

```ts
import { getLocaleWithPath } from 'vitepress-plugin-toolkit'

getLocaleWithPath('/zh/guide/') // { lang: 'zh-CN', locale: '/zh/' }
getLocaleWithPath('/guide/')   // { lang: 'en', locale: '' } (root)
```

### Vite 插件

#### `iconPlugin(icons)`

创建一个 Vite 插件，将 SVG 图标注册为 CSS 自定义属性（`--icon`），生成类如 `.vpi-<name>` 的 CSS 选择器。

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

使用时只需添加类名即可显示图标：

```html
<span class="vpi-github"></span>
```

### 节点工具函数

#### `resolveAttrs(info)` / `resolveAttr(info, key)`

将属性字符串解析为对象，或提取单个属性值。支持 `key="value"` 格式和布尔属性（`disabled` 等）。

```ts
import { resolveAttrs, resolveAttr } from 'vitepress-plugin-toolkit'

resolveAttrs('width="100" height="50"') // { width: '100', height: '50' }
resolveAttr('width="100" height="50"', 'width') // '100'
```

#### `stringifyAttrs(attrs, withUndefinedOrNull?, forceStringify?)`

将属性对象字符串化为 HTML 属性字符串。自动处理 Boolean、Number、String 等类型。

```ts
import { stringifyAttrs } from 'vitepress-plugin-toolkit'

stringifyAttrs({ width: 100, disabled: true })
// ' :width="100" disabled'
```

#### `parseRect(str, unit?)`

解析尺寸字符串，纯数字自动添加单位（默认 `px`）。

```ts
import { parseRect } from 'vitepress-plugin-toolkit'

parseRect('100')    // '100px'
parseRect('50%')    // '50%'
parseRect('200', 'rpx') // '200rpx'
```

#### `slugify(str)`

生成 URL 友好的 slug，移除重音符号、控制字符、特殊字符，合并连续分隔符。

```ts
import { slugify } from 'vitepress-plugin-toolkit'

slugify('Hello World!') // 'hello-world'
```

#### `genHash(data, length?)`

为任意数据生成 SHA-256 哈希值，可指定截断长度。

```ts
import { genHash } from 'vitepress-plugin-toolkit'

genHash('hello')      // 完整 SHA-256 哈希
genHash({ a: 1 }, 8)  // 8 位哈希
```

#### `treatAsHtml(filename)`

判断文件是否为 HTML 路由文件（非静态资源）。

```ts
import { treatAsHtml } from 'vitepress-plugin-toolkit'

treatAsHtml('about')   // true
treatAsHtml('logo.png') // false
```

#### `createLogger(prefix, defaultLevel?)`

创建带颜色标签、时间戳的格式化日志实例。

```ts
import { createLogger } from 'vitepress-plugin-toolkit'

const logger = createLogger('my-plugin', 'info')
logger.info('构建开始')
logger.warn('使用了已废弃的功能')
logger.debug('详细日志', 'debug')
```

#### 常量

```ts
import {
  isBuild,          // 是否生产构建
  EXTENSION_VIDEOS, // 浏览器支持的视频扩展名
  EXTENSION_IMAGES, // 浏览器支持的图片扩展名
  EXTENSION_AUDIOS, // 浏览器支持的音频扩展名
} from 'vitepress-plugin-toolkit'
```

## Client 端 API

### Vue 组件

- `VPCopyButton` — 复制按钮组件
- `VPLoading` — 加载动画组件
- `VPTabSwitch` — Tab 切换组件

```vue
<script setup>
import { VPCopyButton, VPLoading, VPTabSwitch } from 'vitepress-plugin-toolkit/client'
</script>

<template>
  <VPCopyButton text="点击复制此文本" />
  <VPLoading :size="40" />
  <VPTabSwitch :tabs="['代码', '预览']" />
</template>
```

### Composables

#### `useSize(el, options, extraHeight?)`

基于宽度、高度和宽高比选项的响应式尺寸计算。自动监听窗口 resize 和 orientationchange 事件。

```ts
import { useSize } from 'vitepress-plugin-toolkit/client'

const el = ref<HTMLElement>()
const { width, height, resize } = useSize(
  el,
  toRefs({ width: '100%', ratio: '16:9' }),
)
```

#### `useZoomAndDrag(parentEl)`

为内容舞台提供缩放和拖拽交互功能，支持鼠标拖拽、触摸拖拽和双指缩放。

```ts
import { useZoomAndDrag } from 'vitepress-plugin-toolkit/client'

const stageEl = ref<HTMLDivElement>()
const { actorStyle, zoom, zoomIn, zoomOut, resetZoom, reset } = useZoomAndDrag(stageEl)
```

### 环境检测

```ts
import {
  isiPhone,    // 是否 iPhone
  isiPad,      // 是否 iPad
  isIOS,       // 是否 iOS
  isWindows,   // 是否 Windows
  isMacOS,     // 是否 macOS
  isSafari,    // 是否 Safari 浏览器
  isMobile,    // 是否移动设备
} from 'vitepress-plugin-toolkit/client'
```

### CSS 过渡动效

通过 `vitepress-plugin-toolkit/styles/*` 导入预置的 CSS 过渡动效类：

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

## Shared（共享）

以下工具同时在 Node 端和 Client 端可用。

### `isExternal(path)` / `isLinkWithProtocol(link)`

判断是否为外部链接。

```ts
import { isExternal, isLinkWithProtocol } from 'vitepress-plugin-toolkit'

isExternal('https://example.com') // true
isExternal('/about')              // false
isLinkWithProtocol('//cdn.example.com/lib.js') // true
```

### `EXTERNAL_URL_RE` / `URL_PROTOCOL_RE`

匹配外部 URL 和协议的正则表达式。

### `SizeOptions`

尺寸配置的 TypeScript 接口：

```ts
interface SizeOptions {
  width?: string          // 宽度 CSS 值，如 '100%'、'640px'
  height?: string         // 高度 CSS 值，如 'auto'、'360px'
  ratio?: number | string // 宽高比，如 16/9 或 '16:9'
}
```

## 许可

MIT
