---
url: /zh/plugins/qrcode.md
---
# QRCode

二维码生成插件，将文本或链接生成二维码。

## 安装

::: npm-to

```sh
npm install vitepress-plugin-qrcode
```

:::

## 使用

### vitepress-tuck 模式 推荐

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress-tuck'
import qrcode from 'vitepress-plugin-qrcode'

export default defineConfig({
  plugins: [qrcode()],
})
```

[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}

### 传统模式

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress'
import { qrcodeMarkdownPlugin } from 'vitepress-plugin-qrcode'

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(qrcodeMarkdownPlugin)
    },
  },
})
```

```ts [.vitepress/theme/index.ts]
import type { Theme } from 'vitepress'
import { enhanceAppWithQrcode } from 'vitepress-plugin-qrcode/client'
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    enhanceAppWithQrcode(ctx)
  },
} satisfies Theme
```

## 语法

### 嵌入块语法

```md
@[qrcode](https://www.baidu.com)
@[qrcode](任意文本)
@[qrcode](./caniuse.md)
```

### 带样式的卡片模式

```md
@[qrcode card title="扫码访问"](https://www.baidu.com)
```

### 容器语法

适合使用于长文本的情况

```md
::: qrcode title="扫码访问"
https://www.baidu.com
:::
```

### 属性说明

| 属性       | 类型      | 说明                          |
| ---------- | --------- | ----------------------------- |
| `card`     | `boolean` | 以卡片模式展示                |
| `title`    | `string`  | 卡片标题                      |
| `logo`     | `string`  | 二维码 logo, link 格式, 可选  |
| `logoSize` | `number`  | logo 大小占比, 可选, 默认 0.2 |
| `width`    | `number`  | 二维码宽度, 可选              |

## 示例

```md
@[qrcode](https://www.baidu.com)
```

@[qrcode](https://www.baidu.com)

**站内链接，自动添加 logo：**

```md
@[qrcode](./file-tree.md)
```

@[qrcode](./file-tree.md)

**使用卡片模式：**

```md
@[qrcode card title="扫码访问 文件树插件"](./file-tree.md)
```

@[qrcode card title="扫码访问 文件树插件"](./file-tree.md)
