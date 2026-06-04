# vitepress-plugin-qrcode

Generate QR codes in your VitePress site.

在 VitePress 中生成二维码。

## Usage

### With Vitepress-tuck

**Installation:**

```bash
# npm
npm install -D vitepress-tuck vitepress-plugin-qrcode
# pnpm
pnpm add -D vitepress-tuck vitepress-plugin-qrcode
# yarn
yarn add -D vitepress-tuck vitepress-plugin-qrcode
```

**Configuration:**

```ts
// .vitepress/config.ts
import qrcode from 'vitepress-plugin-qrcode'
import { defineConfig } from 'vitepress-tuck'

export default defineConfig({
  plugins: [qrcode()],
})
```

```ts
// .vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import enhanceApp from 'virtual:enhance-app'
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    enhanceApp(ctx)
  },
} satisfies Theme
```

### With Vitepress

**Installation:**

```bash
# npm
npm install -D vitepress-plugin-qrcode
# pnpm
pnpm add -D vitepress-plugin-qrcode
# yarn
yarn add -D vitepress-plugin-qrcode
```

**Configuration:**

```ts
// .vitepress/config.ts
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

```ts
// .vitepress/theme/index.ts
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

### Embed Syntax

```md
@[qrcode title="Scan to visit"](https://example.com)
```

### Container Syntax

```md
::: qrcode title="Scan to visit"
https://example.com
:::
```

### Generate QR for Current Page

```md
@[qrcode title="Current Page"](.)
```

### With Options

```md
@[qrcode card title="My Site" width=200 logo=/logo.png level=H](https://example.com)
```

| Option     | Type                            | Default       | Description                    |
| ---------- | ------------------------------- | ------------- | ------------------------------ |
| `card`     | -                               | -             | Card mode with text info aside |
| `reverse`  | `boolean`                       | `false`       | Reverse layout in card mode    |
| `align`    | `'left' \| 'center' \| 'right'` | `'left'`      | Alignment                      |
| `title`    | `string`                        | -             | QR code title                  |
| `width`    | `number \| string`              | `150px`       | QR image size                  |
| `logo`     | `string`                        | favicon       | Logo image URL                 |
| `logoSize` | `string`                        | `'0.2'`       | Logo size ratio                |
| `level`    | `'L' \| 'M' \| 'Q' \| 'H'`      | `'M'`         | Error correction level         |
| `light`    | `string`                        | `'#ffffffff'` | Light module color             |
| `dark`     | `string`                        | `'#000000ff'` | Dark module color              |
