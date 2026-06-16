# PDF

<NpmBadge name="vitepress-plugin-pdf" />

PDF 文件嵌入插件，在页面中嵌入 PDF 查看器。

## 安装

::: npm-to

```sh
npm install vitepress-plugin-pdf
```

:::

## 使用

### vitepress-tuck 模式 <Badge type="tip">推荐</Badge>

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress-tuck'
import pdf from 'vitepress-plugin-pdf'

export default defineConfig({
  plugins: [pdf()],
})
```

[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}

### 传统模式

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress'
import { pdfMarkdownPlugin } from 'vitepress-plugin-pdf'

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(pdfMarkdownPlugin)
    },
  },
})
```

```ts [.vitepress/theme/index.ts]
import type { Theme } from 'vitepress'
import { enhanceAppWithPDF } from 'vitepress-plugin-pdf/client' // [!code ++]
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    enhanceAppWithPDF(ctx) // [!code ++]
  },
} satisfies Theme
```

## 语法

使用 `@[pdf]()` 嵌入 PDF：

```md
@[pdf](https://example.com/sample.pdf)
@[pdf](./sample.pdf)
```

### 指定页码

```md
@[pdf page="3"](https://example.com/sample.pdf)
@[pdf p="3"](https://example.com/sample.pdf)
```

### 配置选项

```md
@[pdf no-toolbar width="100%" height="600px" zoom="100"](https://example.com/sample.pdf)
```

### 属性说明

| 属性         | 类型               | 默认值   | 说明       |
| ------------ | ------------------ | -------- | ---------- |
| `width`      | `string`           | `'100%'` | 宽度       |
| `height`     | `string`           | -        | 高度       |
| `ratio`      | `number \| string` | -        | 宽高比     |
| `zoom`       | `number`           | `50`     | 缩放比例   |
| `no-toolbar` | `boolean`          | `false`  | 隐藏工具栏 |

## 示例

```md
@[pdf](https://plume.pengzhanbo.cn/files/sample-1.pdf)
```

@[pdf](https://plume.pengzhanbo.cn/files/sample-1.pdf)
