# QRCode

QR code generation plugin, generating QR codes from text or links.

## Installation

::: npm-to

```sh
npm install vitepress-plugin-qrcode
```

:::

## Usage

### vitepress-tuck Mode <Badge type="tip">Recommended</Badge>

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress-tuck'
import qrcode from 'vitepress-plugin-qrcode'

export default defineConfig({
  plugins: [qrcode()],
})
```

[Learn more about **vitepress-tuck**](../guide/quick-start.md){.readmore}

### Native Mode

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

## Syntax

### Embed Block Syntax

```md
@[qrcode](https://www.baidu.com)
@[qrcode](arbitrary text)
@[qrcode](./caniuse.md)
```

### Styled Card Mode

```md
@[qrcode card title="Scan to visit"](https://www.baidu.com)
```

### Container Syntax

Suitable for long text:

```md
::: qrcode title="Scan to visit"
https://www.baidu.com
:::
```

### Attribute Reference

| Attribute  | Type      | Description                            |
| ---------- | --------- | -------------------------------------- |
| `card`     | `boolean` | Display in card mode                   |
| `title`    | `string`  | Card title                             |
| `logo`     | `string`  | QR code logo, link format, optional    |
| `logoSize` | `number`  | Logo size ratio, optional, default 0.2 |
| `width`    | `number`  | QR code width, optional                |

## Examples

```md
@[qrcode](https://www.baidu.com)
```

@[qrcode](https://www.baidu.com)

**Internal links auto-add logo:**

```md
@[qrcode](./file-tree.md)
```

@[qrcode](./file-tree.md)

**Using card mode:**

```md
@[qrcode card title="Scan to visit File Tree Plugin"](./file-tree.md)
```

@[qrcode card title="Scan to visit File Tree Plugin"](./file-tree.md)
