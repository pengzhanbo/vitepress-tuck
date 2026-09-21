# vitepress-plugin-field

Field container plugin for rendering structured API fields and properties documentation in Markdown,
with support for JSDoc-style tag annotations and field grouping.

在 Markdown 中渲染结构化的 API 字段/属性文档的字段容器插件，支持 JSDoc 风格标签注解与字段分组。

## Usage

### With Vitepress-tuck

**Installation:**

```bash
# npm
npm install -D vitepress-tuck vitepress-plugin-field
# pnpm
pnpm add -D vitepress-tuck vitepress-plugin-field
# yarn
yarn add -D vitepress-tuck vitepress-plugin-field
```

**Configuration:**

```ts
// .vitepress/config.ts
import field from 'vitepress-plugin-field'
import { defineConfig } from 'vitepress-tuck'

export default defineConfig({
  plugins: [field()],
})
```

### With Vitepress

**Installation:**

```bash
# npm
npm install -D vitepress-plugin-field
# pnpm
pnpm add -D vitepress-plugin-field
# yarn
yarn add -D vitepress-plugin-field
```

**Configuration:**

```ts
// .vitepress/config.ts
import { defineConfig } from 'vitepress'
import { fieldMarkdownPlugin, fieldVitePlugin } from 'vitepress-plugin-field'

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(fieldMarkdownPlugin)
    },
  },
  vite: {
    plugins: [fieldVitePlugin(/* options */)],
  },
})
```

```ts
// .vitepress/theme/index.ts
import { enhanceAppWithField } from 'vitepress-plugin-field/client'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    enhanceAppWithField(ctx)
  },
} satisfies Theme
```

## Syntax

Use the `::: field` container to document fields and properties: the text after `::: field`
on the opening line is the field name, while the container body uses JSDoc-style tags to
describe field metadata. Any non-tag line is treated as the field description.

使用 `::: field` 容器记录字段/属性：容器起始行 `::: field` 之后的文本即为字段名称，
容器正文则使用 JSDoc 风格标签描述字段元数据，其余非标签行会作为字段描述。

### Basic Field

```md
::: field count
@type Number
@default 0
Total number of users.
:::
```

### Tag Reference

| Tag             | Value         | Description                                                          |
| --------------- | ------------- | -------------------------------------------------------------------- |
| `@name`         | string        | Override the field name (defaults to the name from `info`)           |
| `@type`         | string        | Field type annotation                                                |
| `@typeLink`     | string        | Type reference link, rendered as a clickable link                    |
| `@default`      | string        | Default value for the field                                          |
| `@required`     | flag          | Mark the field as required                                           |
| `@deprecated`   | flag / string | Mark the field as deprecated, optionally with a version or date      |
| `@experimental` | flag / string | Mark the field as experimental, optionally with a version or date    |
| `@description`  | string        | Explicit description text; any non-tag line also becomes description |
| `@enum`         | string        | Candidate values separated by `\|`, appended across lines            |
| `@since`        | string        | Version the field was introduced in; only the first value is kept    |
| `@unit`         | string        | Unit annotation                                                      |
| `@format`       | string        | Format annotation                                                    |
| `@constraint`   | string        | Constraint annotation                                                |
| `@optional`     | —             | Deprecated, no longer parsed (fields are optional by default)        |

### `@name` — Override the Field Name

The `info` on the opening line is used as the field name by default; `@name` overrides it:

```md
::: field rawName
@name userName
@type String
Unique identifier for the user.
:::
```

### `@type` and `@typeLink` — Type and Type Reference Link

`@type` declares the field type, and `@typeLink` provides a reference link for it:

```md
::: field options
@type Record<string, unknown>
@typeLink /plugins/field
Configuration options.
:::
```

### `@default` — Default Value

```md
::: field createdAt
@type Date
@default Date.now()
Creation timestamp.
:::
```

### `@required` — Required Field

A boolean flag; any value after it is ignored (`@required yes` is equivalent to `@required`):

```md
::: field id
@type Number
@required
Unique identifier.
:::
```

### `@deprecated` — Deprecated Field

Used alone it is a boolean flag; with a value it describes the version or date of deprecation:

```md
::: field legacy
@type String
@deprecated
This field is deprecated.
:::

::: field oldField
@type String
@deprecated v2.0
Deprecated in v2.0, please use `newField` instead.
:::
```

### `@experimental` — Experimental Field

Similar to `@deprecated`: it is a boolean flag when used alone, and may carry the version or
date it was introduced in:

```md
::: field stream
@type Boolean
@experimental v3.0
Experimental capability; the API may change.
:::
```

### `@description` — Explicit Description

Declare the description text explicitly; non-tag lines are also treated as description and
can be mixed with `@description`:

```md
::: field count
@description Total number of users. This field represents the count of active users in the system.
@type Number
@default 0
:::
```

### `@enum` — Candidate Values

Separate candidate values with `|`; surrounding whitespace is trimmed and quotes are preserved.
Multiple `@enum` lines are appended to the same set of candidates:

```md
::: field status
@type String
@default active
@enum active | inactive | pending
:::

::: field level
@type Number
@enum 1 | 2
@enum 3
:::
```

### `@since` — Version Introduced

Only the first value is kept:

```md
::: field pageSize
@type Number
@since 1.2.0
Page size.
:::
```

### `@unit`, `@format` and `@constraint` — Unit, Format and Constraint

```md
::: field timeout
@type Number
@default 3000
@unit ms
@constraint 1..60000
Timeout in milliseconds.
:::

::: field date
@type String
@format YYYY-MM-DD
Date string.
:::
```

### Combined Usage

Tags can be freely combined:

```md
::: field pageSize
@type Number
@typeLink /plugins/field
@required
@default 20
@unit items
@constraint 1..100
@since 1.2.0
@experimental v2.0
Number of records returned per page when paginating.
:::
```

### Field Group

Use the `:::: field-group` container to group related fields together:

```md
:::: field-group

::: field id
@type Number
@required
Unique identifier.
:::

::: field name
@type String
Display name.
:::

::: field createdAt
@type Date
@default Date.now()
Creation timestamp.
:::

::::
```

## Parsing Rules

- A tag must occupy its own line and start with `@`; only one tag is parsed per line. Lines that
  do not start with `@` are treated as description text.
- Tag names are case-insensitive: `@Type` is equivalent to `@type`.
- Surrounding backticks are removed from tag values: `` @type `String` `` is equivalent to `@type String`.
- Tags without a value are ignored (except boolean flags such as `@required` and `@deprecated`).
- When a scalar tag is repeated the last value wins (e.g. `@name`, `@type`, `@default`); `@enum`
  appends values; `@since` keeps only the first.
- Unknown tags (e.g. `@author`) are kept as description text and do not interrupt the current
  description paragraph.
- Blank lines do not interrupt a description paragraph; they are preserved as line breaks in
  the description.
- Fields with the same name on the same page get unique anchors automatically:
  `field-<name>`, `field-<name>-1`, `field-<name>-2`…

## Options

```ts
interface FieldPluginOptions {
  locales?: Record<string, FieldLocaleData>
}

interface FieldLocaleData {
  required?: string
  optional?: string
  deprecated?: string
  experimental?: string
  default?: string
  enum?: string
  format?: string
  unit?: string
  constraint?: string
  since?: string
}
```

Override the built-in locale data (English, 简体中文, 繁體中文, Deutsch, Français, 日本語, 한국어,
Русский) for the labels rendered by `<VPField>`:

```ts
field({
  locales: {
    'zh-CN': {
      required: '必填',
      optional: '可选',
      deprecated: '已弃用',
      experimental: '实验性',
      default: '默认值',
      enum: '可选值',
      format: '格式',
      unit: '单位',
      constraint: '约束',
      since: '自',
    },
  },
})
```

## Component

The `VPField` component is also available for direct use:

```vue
<VPField name="count" slug="field-count" type="Number" default-value="0" required>
  <p>User count.</p>
</VPField>
```

| Prop            | Type                  | Description                             |
| --------------- | --------------------- | --------------------------------------- |
| `name`          | string                | Field name                              |
| `slug`          | string                | Anchor id of the field                  |
| `type`          | string                | Type annotation shown on the right      |
| `typeLink`      | string                | Wraps `type` in a link when provided    |
| `required`      | boolean               | Renders the Required badge              |
| `deprecated`    | boolean / string      | Renders the Deprecated badge            |
| `experimental`  | boolean / string      | Renders the Experimental badge          |
| `defaultValue`  | string                | Renders the default value               |
| `since`         | string                | Renders the since version               |
| `unit`          | string                | Renders the unit                        |
| `format`        | string                | Renders the format                      |
| `constraint`    | string                | Renders the constraint                  |
| `#enum` (slot)  | —                     | Renders the candidate values            |
| default (slot)  | —                     | Renders the field description           |
