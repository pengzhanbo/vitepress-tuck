# Code Collapse

<NpmBadge name="vitepress-plugin-code-collapse" />

代码块折叠插件，当代码块超过指定行数时自动折叠，提升页面阅读体验。

## 安装

::: npm-to

```sh
npm install vitepress-plugin-code-collapse
```

:::

## 使用

### vitepress-tuck 模式 <Badge type="tip">推荐</Badge>

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress-tuck'
import collapsedLines from 'vitepress-plugin-code-collapse'

export default defineConfig({
  plugins: [
    collapsedLines(),
  ],
})
```

[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}

### 传统模式

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress'
import { collapsedLinesMarkdownPlugin } from 'vitepress-plugin-code-collapse'

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(collapsedLinesMarkdownPlugin)
    },
  },
})
```

```ts [.vitepress/theme/index.ts]
import type { Theme } from 'vitepress'
import { enhanceAppWithCollapsedLines } from 'vitepress-plugin-code-collapse/client'
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    enhanceAppWithCollapsedLines(ctx)
  },
} satisfies Theme
```

## 语法

### 全局折叠

当在配置中设置 `options` 为数字时，或者为 `true`（默认为 15 行）时，所有超过该行数的代码块都会自动折叠。

### 单个代码块折叠

可以在代码块的 info 字符串中使用 `:collapsed-lines={N}` 语法单独控制：

````md
```ts :collapsed-lines
// 使用默认值折叠（15行）
```

```ts :collapsed-lines=10
// 从第10行开始折叠
```
````

## 配置

```ts
/**
   * 折叠行数配置
   * - `true`: 超过 15 行时折叠
   * - `number`: 超过指定行数时折叠
   * - `false`: 不全局启用，允许单代码块控制 （默认值）
   * - `'disable'`: 完全禁用插
   * @default 'false'
   */
type options = boolean | number | 'disable'
```

## 示例

````md
```ts :collapsed-lines=10
const a1 = 1
const a2 = 2
const a3 = 1
const a4 = 1
const a5 = 1
const a6 = 2
const a7 = 1
const a8 = 1
const a9 = 1
const a10 = 2
const a11 = 1
const a12 = 1
```
````

```ts :line-numbers=1 :collapsed-lines=10
const a1 = 1
const a2 = 2
const a3 = 1
const a4 = 1
const a5 = 1
const a6 = 2
const a7 = 1
const a8 = 1
const a9 = 1
const a10 = 2
const a11 = 1
const a12 = 1
```
