# vitepress-plugin-icons

Use icons from [Iconify](https://iconify.design/), [iconfont](https://www.iconfont.cn/), or
[FontAwesome](https://fontawesome.com/) inline in your VitePress markdown content with a
simple `::name::` syntax.

在 VitePress 中使用简洁的 `::name::` 语法，内联使用来自 [Iconify](https://iconify.design/)、
[iconfont](https://www.iconfont.cn/) 或 [FontAwesome](https://fontawesome.com/) 的图标。

## Usage

### With Vitepress-tuck

**Installation:**

```bash
# npm
npm install -D vitepress-tuck vitepress-plugin-icons
# pnpm
pnpm add -D vitepress-tuck vitepress-plugin-icons
# yarn
yarn add -D vitepress-tuck vitepress-plugin-icons
```

> When using Iconify, you also need to install [`@iconify/json`](https://www.npmjs.com/package/@iconify/json)
> or the specific icon collections you need.
>
> 使用 Iconify 时，还需安装 [`@iconify/json`](https://www.npmjs.com/package/@iconify/json) 或按需安装对应的图标集。

**Configuration:**

```ts
// .vitepress/config.ts
import icons from 'vitepress-plugin-icons'
import { defineConfig } from 'vitepress-tuck'

export default defineConfig({
  plugins: [icons()],
})
```

> [!IMPORTANT]
> 该插件仅推荐搭配 Vitepress-tuck 使用，传统 Vitepress 配置方式复杂度较高。

## Syntax

Use `::` delimiters to insert an icon inline. The full syntax is:

使用 `::` 分隔符内联插入图标，完整语法如下：

```md
::name =size /color::
```

- `name` — Icon name. The format depends on the provider (see below).
  图标名称，格式因提供商而异（见下方说明）。
- `=size` — Optional. Icon size. Supports `=widthxheight` (e.g. `=1.2emx1.5em`) or a single
  `=width` (e.g. `=1.2em`) which applies to both width and height.
  可选，图标大小。支持 `=宽x高`（如 `=1.2emx1.5em`）或单个 `=宽`（如 `=1.2em`，同时作用于宽高）。
- `/color` — Optional. Icon color, e.g. `/red` or `/#ff0000`.
  可选，图标颜色，如 `/red` 或 `/#ff0000`。

You can also prefix the content with a provider name (`iconify`/`iconfont`/`fontawesome`) to
override the default provider for a single icon, and append extra attributes for FontAwesome.

也可以在内容前添加提供商名称（`iconify`/`iconfont`/`fontawesome`）来为单个图标覆盖默认提供商，
并为 FontAwesome 追加额外样式属性。

### Iconify

Icon names use the `collection:icon` format, e.g. `tdesign:logo-github-filled`.

图标名称使用 `图标集:图标` 格式，如 `tdesign:logo-github-filled`。

```md
::tdesign:logo-github-filled::
::tdesign:logo-github-filled =36px::
::tdesign:logo-github-filled /#f00::
::tdesign:logo-github-filled =36px /#f00::
::skill-icons:vscode-dark =36px::
```

### iconfont

Icon names use the plain name (without the `icon-` prefix), e.g. `hot` resolves to `icon-hot`.

图标名称使用纯名称（不带 `icon-` 前缀），如 `hot` 会解析为 `icon-hot`。

```md
::hot::
::hot =24px::
::hot =24px /#f00::
::iconfont hot =24px /#f00::
```

### FontAwesome

Icon names use the plain name, e.g. `circle-user`. Extra attributes like `border`, `beat`,
`rotate-90`, `2xl` are appended after the name and converted to `fa-*` classes.

图标名称使用纯名称，如 `circle-user`。`border`、`beat`、`rotate-90`、`2xl` 等额外属性
追加在名称之后，并转换为 `fa-*` 类名。

```md
::circle-user::
::circle-user =1.2em /#fff::
::fontawesome circle-user::
::fontawesome circle-user border::
::fontawesome circle-user rotate-90::
::fontawesome circle-user beat::
::fontawesome circle-user 2xl beat::
```

## Configuration

The plugin accepts a single provider option, an array of provider options, or no options
(defaults to Iconify). When multiple providers are configured, mark one with `default: true`
to set the default provider used by the `::name::` syntax.

插件接受单个提供商配置、配置数组，或不传参数（默认使用 Iconify）。配置多个提供商时，
通过 `default: true` 标记 `::name::` 语法使用的默认提供商。

### Common Options

| Option     | Type                                       | Default     | Description                                      |
| ---------- | ------------------------------------------ | ----------- | ------------------------------------------------ |
| `provider` | `'iconify' \| 'iconfont' \| 'fontawesome'` | `'iconify'` | Icon provider / 图标提供商                       |
| `default`  | `boolean`                                  | `false`     | Use as the default provider / 是否作为默认提供商 |
| `color`    | `string`                                   | `''`        | Default icon color / 默认图标颜色                |
| `size`     | `string \| number`                         | `'1.2em'`   | Default icon size / 默认图标大小                 |

### Iconify

Extends [`unplugin-icons`](https://github.com/unplugin/unplugin-icons) options and
[`unplugin-icons/resolver`](https://github.com/unplugin/unplugin-icons#resolver) options.

继承 [`unplugin-icons`](https://github.com/unplugin/unplugin-icons) 与
[`unplugin-icons/resolver`](https://github.com/unplugin/unplugin-icons#resolver) 的配置项。

```ts
icons({
  provider: 'iconify',
  default: true,
  size: '1.2em',
  // unplugin-icons options
  scale: 1,
  customCollections: { /* ... */ },
})
```

### iconfont

| Option   | Type                               | Default   | Description                                       |
| -------- | ---------------------------------- | --------- | ------------------------------------------------- |
| `prefix` | `string`                           | `'icon-'` | Class name prefix for icons / 图标类名前缀        |
| `assets` | `IconAssetLink \| IconAssetLink[]` | -         | iconfont CSS/JS resource URLs / iconfont 资源链接 |

```ts
icons({
  provider: 'iconfont',
  default: true,
  prefix: 'icon-',
  assets: '//at.alicdn.com/w/font_xxx.css',
})
```

### FontAwesome

| Option   | Type                                                  | Default         | Description                                                    |
| -------- | ----------------------------------------------------- | --------------- | -------------------------------------------------------------- |
| `prefix` | `LiteralUnion<FontAwesomePrefix>`                     | `'fas'`         | Default icon prefix / 默认图标前缀                             |
| `assets` | `Arrayable<FontAwesomeAssetBuiltIn \| IconAssetLink>` | `'fontawesome'` | Built-in asset name or custom URL / 内置资源名或自定义资源链接 |

The `assets` option accepts:

- `'fontawesome'` — Injects the solid, regular, and base kits from the jsDelivr CDN.
- `'fontawesome-with-brands'` — Injects only the brands kit from the jsDelivr CDN.
- A custom `.css` or `.js` URL.

`assets` 选项接受：

- `'fontawesome'`：从 jsDelivr CDN 注入 solid、regular 和 base 套件。
- `'fontawesome-with-brands'`：仅从 jsDelivr CDN 注入 brands 套件。
- 自定义的 `.css` 或 `.js` 资源链接。

```ts
icons({
  provider: 'fontawesome',
  default: true,
  prefix: 'fas',
  assets: 'fontawesome',
})
```

### Multiple Providers

```ts
icons([
  { provider: 'iconify' },
  { provider: 'iconfont', default: true, assets: '//at.alicdn.com/w/font_xxx.css' },
  { provider: 'fontawesome', assets: 'fontawesome' },
])
```

With the configuration above, `::name::` uses iconfont by default, while `::iconify name::`
and `::fontawesome name::` explicitly select the other providers.

上述配置中，`::name::` 默认使用 iconfont，`::iconify name::` 和 `::fontawesome name::`
则显式选择其他提供商。
