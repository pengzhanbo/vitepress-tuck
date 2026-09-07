---
url: /pluginsicons.md
---
# Icons

Icons plugin that uses a simple `::name::` syntax to inline icons from [Iconify](https://iconify.design/), [iconfont](https://www.iconfont.cn/), or [FontAwesome](https://fontawesome.com/) in Markdown.

## Installation

::: npm-to

```sh
npm install vitepress-plugin-icons
```

:::

> When using Iconify, you also need to install [`@iconify/json`](https://www.npmjs.com/package/@iconify/json) or the specific icon collections you need.

## Usage

### vitepress-tuck Mode Recommended

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress-tuck'
import icons from 'vitepress-plugin-icons'

export default defineConfig({
  plugins: [icons()],
})
```

[Learn more about **vitepress-tuck**](../guide/quick-start.md){.readmore}

> \[!WARNING]
> Due to the high complexity of plugin configuration, it is only recommended for use in `vitepress-tuck` mode.

## Syntax

Use `::` delimiters to insert an icon inline. The full syntax is:

```md
::name =size /color::
```

* `name` — Icon name. The format depends on the provider (see below).
* `=size` — Optional. Icon size. Supports `=widthxheight` (e.g. `=1.2emx1.5em`) or a single `=width` (e.g. `=1.2em`) which applies to both width and height.
* `/color` — Optional. Icon color, e.g. `/red` or `/#ff0000`.

You can also prefix the content with a provider name (`iconify`/`iconfont`/`fontawesome`) to override the default provider for a single icon, and append extra attributes for FontAwesome.

### Iconify

Icon names use the `collection:icon` format, e.g. `tdesign:logo-github-filled`.

```md
::tdesign:logo-github-filled::
::tdesign:logo-github-filled =36px::
::tdesign:logo-github-filled /#f00::
::tdesign:logo-github-filled =36px /#f00::
::skill-icons:vscode-dark =36px::
```

**Rendered Result:**

::tdesign:logo-github-filled::

::tdesign:logo-github-filled =36px::

::tdesign:logo-github-filled /#f00::

::tdesign:logo-github-filled =36px /#f00::

::skill-icons:vscode-dark =36px::

### iconfont

Icon names use the plain name (without the `icon-` prefix), e.g. `hot` resolves to `icon-hot`.

```md
::hot::
::hot =24px::
::hot =24px /#f00::
::iconfont hot =24px /#f00::
```

**Rendered Result:**

::iconfont hot::

::iconfont hot =24px::

::iconfont hot =24px /#f00::

::iconfont hot =24px /#f00::

### FontAwesome

Icon names use the plain name, e.g. `circle-user`. Extra attributes like `border`, `beat`, `rotate-90`, `2xl` are appended after the name and converted to `fa-*` classes.

```md
::circle-user::
::circle-user =1.2em /#fff::
::fontawesome circle-user::
::fontawesome circle-user border::
::fontawesome circle-user rotate-90::
::fontawesome circle-user beat::
::fontawesome circle-user 2xl beat::
```

**Rendered Result:**

::fontawesome circle-user 2xl::

::fontawesome circle-user rotate-90::

::fontawesome circle-user beat::

::fontawesome circle-user border::

::fontawesome circle-user 2xl beat::

## Configuration

The plugin accepts a single provider option, an array of provider options, or no options (defaults to Iconify). When multiple providers are configured, mark one with `default: true` to set the default provider used by the `::name::` syntax.

### Common Options

| Option    | Type                                       | Default     | Description                       |
| --------- | ------------------------------------------ | ----------- | --------------------------------- |
| `provider`| `'iconify' \| 'iconfont' \| 'fontawesome'` | `'iconify'` | Icon provider                     |
| `default` | `boolean`                                  | `false`     | Use as the default provider       |
| `color`   | `string`                                   | `''`        | Default icon color                |
| `size`    | `string \| number`                         | `'1.2em'`   | Default icon size                 |

### Iconify

Extends [`unplugin-icons`](https://github.com/unplugin/unplugin-icons) options and [`unplugin-icons/resolver`](https://github.com/unplugin/unplugin-icons#resolver) options.

```ts [.vitepress/config.ts]
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

| Option   | Type                               | Default   | Description                       |
| -------- | ---------------------------------- | --------- | --------------------------------- |
| `prefix` | `string`                           | `'icon-'` | Class name prefix for icons       |
| `assets` | `IconAssetLink \| IconAssetLink[]` | -         | iconfont CSS/JS resource URLs     |

```ts [.vitepress/config.ts]
icons({
  provider: 'iconfont',
  default: true,
  prefix: 'icon-',
  assets: '//at.alicdn.com/w/font_xxx.css',
})
```

### FontAwesome

| Option   | Type                                                  | Default         | Description                                          |
| -------- | ----------------------------------------------------- | --------------- | ---------------------------------------------------- |
| `prefix` | `LiteralUnion<FontAwesomePrefix>`                     | `'fas'`         | Default icon prefix                                  |
| `assets` | `Arrayable<FontAwesomeAssetBuiltIn \| IconAssetLink>` | `'fontawesome'` | Built-in asset name or custom URL                    |

The `assets` option accepts:

* `'fontawesome'` — Injects the solid, regular, and base kits from the jsDelivr CDN.
* `'fontawesome-with-brands'` — Injects only the brands kit from the jsDelivr CDN.
* A custom `.css` or `.js` URL.

```ts [.vitepress/config.ts]
icons({
  provider: 'fontawesome',
  default: true,
  prefix: 'fas',
  assets: 'fontawesome',
})
```

The `prefix` option supports the following aliases:

| Prefix   | Alias   | Resulting Classes                       |
| -------- | ------- | --------------------------------------- |
| `fas`    | `s`     | `fa-solid fa-name`                      |
| `far`    | `r`     | `fa-regular fa-name`                    |
| `fal`    | `l`     | `fa-light fa-name`                      |
| `fat`    | `t`     | `fa-thin fa-name`                       |
| `fads`   | `ds`    | `fa-duotone fa-solid fa-name`           |
| `fass`   | `ss`    | `fa-sharp fa-solid fa-name`             |
| `fasr`   | `sr`    | `fa-sharp fa-regular fa-name`           |
| `fasl`   | `sl`    | `fa-sharp fa-light fa-name`             |
| `fast`   | `st`    | `fa-sharp fa-thin fa-name`              |
| `fasds`  | `sds`   | `fa-sharp-duotone fa-solid fa-name`     |
| `fab`    | `b`     | `fa-brands fa-name`                     |

You can also use the `prefix:name` format in the icon name to specify a prefix for a single icon, e.g. `fab:github`.

### Multiple Providers

```ts [.vitepress/config.ts]
icons([
  { provider: 'iconify' },
  { provider: 'iconfont', default: true, assets: '//at.alicdn.com/w/font_xxx.css' },
  { provider: 'fontawesome', assets: 'fontawesome' },
])
```

With the configuration above, `::name::` uses iconfont by default, while `::iconify name::` and `::fontawesome name::` explicitly select the other providers.
