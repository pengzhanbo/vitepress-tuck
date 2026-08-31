---
url: /zh/plugins/icons.md
---
# 图标

图标插件，使用简洁的 `::name::` 语法，在 Markdown 中内联使用来自 [Iconify](https://iconify.design/)、
[iconfont](https://www.iconfont.cn/) 或 [FontAwesome](https://fontawesome.com/) 的图标。

## 安装

::: npm-to

```sh
npm install vitepress-plugin-icons
```

:::

> 使用 Iconify 时，还需安装 [`@iconify/json`](https://www.npmjs.com/package/@iconify/json) 或按需安装对应的图标集。

## 使用

### vitepress-tuck 模式 推荐

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress-tuck'
import icons from 'vitepress-plugin-icons'

export default defineConfig({
  plugins: [icons()],
})
```

[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}

> \[!WARNING]
> 由于插件配置复杂度较高，仅推荐在 `vitepress-tuck` 模式下使用。

## 语法

使用 `::` 分隔符内联插入图标，完整语法如下：

```md
::name =size /color::
```

* `name` — 图标名称，格式因提供商而异（见下方说明）。
* `=size` — 可选，图标大小。支持 `=宽x高`（如 `=1.2emx1.5em`）或单个 `=宽`（如 `=1.2em`，同时作用于宽高）。
* `/color` — 可选，图标颜色，如 `/red` 或 `/#ff0000`。

也可以在内容前添加提供商名称（`iconify`/`iconfont`/`fontawesome`）来为单个图标覆盖默认提供商，并为 FontAwesome 追加额外样式属性。

### Iconify

图标名称使用 `图标集:图标` 格式，如 `tdesign:logo-github-filled`。

```md
::tdesign:logo-github-filled::
::tdesign:logo-github-filled =36px::
::tdesign:logo-github-filled /#f00::
::tdesign:logo-github-filled =36px /#f00::
::skill-icons:vscode-dark =36px::
```

**渲染结果：**

::tdesign:logo-github-filled::

::tdesign:logo-github-filled =36px::

::tdesign:logo-github-filled /#f00::

::tdesign:logo-github-filled =36px /#f00::

::skill-icons:vscode-dark =36px::

### iconfont

图标名称使用纯名称（不带 `icon-` 前缀），如 `hot` 会解析为 `icon-hot`。

```md
::hot::
::hot =24px::
::hot =24px /#f00::
::iconfont hot =24px /#f00::
```

**渲染结果：**

::iconfont hot::

::iconfont hot =24px::

::iconfont hot =24px /#f00::

::iconfont hot =24px /#f00::

### FontAwesome

图标名称使用纯名称，如 `circle-user`。`border`、`beat`、`rotate-90`、`2xl` 等额外属性追加在名称之后，并转换为 `fa-*` 类名。

```md
::circle-user::
::circle-user =1.2em /#fff::
::fontawesome circle-user::
::fontawesome circle-user border::
::fontawesome circle-user rotate-90::
::fontawesome circle-user beat::
::fontawesome circle-user 2xl beat::
```

**渲染结果：**

::fontawesome circle-user 2xl::

::fontawesome circle-user rotate-90::

::fontawesome circle-user beat::

::fontawesome circle-user border::

::fontawesome circle-user 2xl beat::

## 配置

插件接受单个提供商配置、配置数组，或不传参数（默认使用 Iconify）。配置多个提供商时，通过 `default: true` 标记 `::name::` 语法使用的默认提供商。

### 通用选项

| 选项       | 类型                                       | 默认值      | 说明               |
| ---------- | ------------------------------------------ | ----------- | ------------------ |
| `provider` | `'iconify' \| 'iconfont' \| 'fontawesome'` | `'iconify'` | 图标提供商         |
| `default`  | `boolean`                                  | `false`     | 是否作为默认提供商 |
| `color`    | `string`                                   | `''`        | 默认图标颜色       |
| `size`     | `string \| number`                         | `'1.2em'`   | 默认图标大小       |

### Iconify

继承 [`unplugin-icons`](https://github.com/unplugin/unplugin-icons) 与 [`unplugin-icons/resolver`](https://github.com/unplugin/unplugin-icons#resolver) 的配置项。

```ts [.vitepress/config.ts]
icons({
  provider: 'iconify',
  default: true,
  size: '1.2em',
  // unplugin-icons 选项
  scale: 1,
  customCollections: { /* ... */ },
})
```

### iconfont

| 选项     | 类型                               | 默认值    | 说明              |
| -------- | ---------------------------------- | --------- | ----------------- |
| `prefix` | `string`                           | `'icon-'` | 图标类名前缀      |
| `assets` | `IconAssetLink \| IconAssetLink[]` | -         | iconfont 资源链接 |

```ts [.vitepress/config.ts]
icons({
  provider: 'iconfont',
  default: true,
  prefix: 'icon-',
  assets: '//at.alicdn.com/w/font_xxx.css',
})
```

### FontAwesome

| 选项     | 类型                                                  | 默认值          | 说明                       |
| -------- | ----------------------------------------------------- | --------------- | -------------------------- |
| `prefix` | `LiteralUnion<FontAwesomePrefix>`                     | `'fas'`         | 默认图标前缀               |
| `assets` | `Arrayable<FontAwesomeAssetBuiltIn \| IconAssetLink>` | `'fontawesome'` | 内置资源名或自定义资源链接 |

`assets` 选项接受：

* `'fontawesome'` — 从 jsDelivr CDN 注入 solid、regular 和 base 套件。
* `'fontawesome-with-brands'` — 仅从 jsDelivr CDN 注入 brands 套件。
* 自定义的 `.css` 或 `.js` 资源链接。

```ts [.vitepress/config.ts]
icons({
  provider: 'fontawesome',
  default: true,
  prefix: 'fas',
  assets: 'fontawesome',
})
```

`prefix` 支持以下别名：

| 前缀    | 别名  | 对应类名                            |
| ------- | ----- | ----------------------------------- |
| `fas`   | `s`   | `fa-solid fa-name`                  |
| `far`   | `r`   | `fa-regular fa-name`                |
| `fal`   | `l`   | `fa-light fa-name`                  |
| `fat`   | `t`   | `fa-thin fa-name`                   |
| `fads`  | `ds`  | `fa-duotone fa-solid fa-name`       |
| `fass`  | `ss`  | `fa-sharp fa-solid fa-name`         |
| `fasr`  | `sr`  | `fa-sharp fa-regular fa-name`       |
| `fasl`  | `sl`  | `fa-sharp fa-light fa-name`         |
| `fast`  | `st`  | `fa-sharp fa-thin fa-name`          |
| `fasds` | `sds` | `fa-sharp-duotone fa-solid fa-name` |
| `fab`   | `b`   | `fa-brands fa-name`                 |

也可以在图标名称中使用 `prefix:name` 格式为单个图标指定前缀，如 `fab:github`。

### 多提供商组合

```ts [.vitepress/config.ts]
icons([
  { provider: 'iconify' },
  { provider: 'iconfont', default: true, assets: '//at.alicdn.com/w/font_xxx.css' },
  { provider: 'fontawesome', assets: 'fontawesome' },
])
```

上述配置中，`::name::` 默认使用 iconfont，`::iconify name::` 和 `::fontawesome name::` 则显式选择其他提供商。
