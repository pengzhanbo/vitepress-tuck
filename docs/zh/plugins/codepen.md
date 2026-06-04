# CodePen

将 [CodePen](https://codepen.io/) 项目嵌入到 VitePress 页面中。

## 安装

::: npm-to

```sh
npm install vitepress-plugin-codepen
```

:::

## 使用

### vitepress-tuck 模式 <Badge type="tip">推荐</Badge>

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress-tuck'
import codepen from 'vitepress-plugin-codepen'

export default defineConfig({
  plugins: [codepen()],
})
```

[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}

### 传统模式

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress'
import { codepenPlugin } from 'vitepress-plugin-codepen'

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(codepenPlugin)
    },
  },
})
```

```ts [.vitepress/theme/index.ts]
import type { Theme } from 'vitepress'
import { enhanceAppWithCodepen } from 'vitepress-plugin-codepen/client'
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    enhanceAppWithCodepen(ctx)
  },
} satisfies Theme
```

## 语法

### 基本用法

```md
@[codepen](user/slash)
```

### 带配置的用法

```md
@[codepen preview editable title="示例" height="400px" tab="css,result" theme="dark"](leimapapa/RwOZQOW)
```

### 属性说明

| 属性       | 类型      | 默认值     | 说明                         |
| ---------- | --------- | ---------- | ---------------------------- |
| `title`    | `string`  | -          | 标题                         |
| `user`     | `string`  | -          | CodePen 用户名（从链接解析） |
| `slash`    | `string`  | -          | Pen 标识符（从链接解析）     |
| `tab`      | `string`  | `'result'` | 默认显示的标签页             |
| `theme`    | `string`  | -          | 主题                         |
| `preview`  | `boolean` | `false`    | 预览模式                     |
| `editable` | `boolean` | `false`    | 可编辑模式                   |
| `width`    | `string`  | `'100%'`   | 宽度                         |
| `height`   | `string`  | -          | 高度                         |

## 示例

```md
@[codepen](leimapapa/RwOZQOW)
```

@[codepen](leimapapa/RwOZQOW)
