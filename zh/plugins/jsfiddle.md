---
url: /zh/plugins/jsfiddle.md
---
# JSFiddle

将 [JSFiddle](https://jsfiddle.net/) 项目嵌入到 VitePress 页面中。

## 安装

::: npm-to

```sh
npm install vitepress-plugin-jsfiddle
```

:::

## 使用

### vitepress-tuck 模式 推荐

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress-tuck'
import jsfiddle from 'vitepress-plugin-jsfiddle'

export default defineConfig({
  plugins: [jsfiddle()],
})
```

[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}

### 传统模式

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress'
import { jsfiddleMarkdownPlugin } from 'vitepress-plugin-jsfiddle'

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(jsfiddleMarkdownPlugin)
    },
  },
})
```

```ts [.vitepress/theme/index.ts]
import type { Theme } from 'vitepress'
import { enhanceAppWithJsFiddle } from 'vitepress-plugin-jsfiddle/client'
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    enhanceAppWithJsFiddle(ctx)
  },
} satisfies Theme
```

## 语法

### 基本用法

```md
@[jsfiddle](user/id)
```

### 带配置的用法

```md
@[jsfiddle title="JS Fiddle" theme="dark" tab="js,css,html,result" height="400px"](pengzhanbo/1xbwz2p9)
```

### 属性说明

| 属性     | 类型               | 默认值                 | 说明                                   |
| -------- | ------------------ | ---------------------- | -------------------------------------- |
| `title`  | `string`           | `'JS Fiddle'`          | 标题                                   |
| `theme`  | `string`           | -                      | 主题（如 `dark`）                      |
| `tab`    | `string`           | `'js,css,html,result'` | 显示的标签页（用逗号分隔，会去除空格） |
| `width`  | `string`           | `'100%'`               | 宽度                                   |
| `height` | `string`           | -                      | 高度                                   |
| `ratio`  | `number \| string` | -                      | 宽高比                                 |

## 示例

```md
@[jsfiddle](pengzhanbo/1xbwz2p9)
```

@[jsfiddle](pengzhanbo/1xbwz2p9)
