---
url: /pluginsfield.md
---
# Field

Field container plugin for rendering structured API fields and properties documentation in Markdown,
with support for JSDoc-style tag annotations and field grouping.

## Installation

::: npm-to

```sh
npm install vitepress-plugin-field
```

:::

## Usage

### vitepress-tuck Mode Recommended

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress-tuck'
import field from 'vitepress-plugin-field'

export default defineConfig({
  plugins: [field()],
})
```

[Learn more about **vitepress-tuck**](../guide/quick-start.md){.readmore}

### Native Mode

```ts [.vitepress/config.ts]
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

```ts [.vitepress/theme/index.ts]
import type { Theme } from 'vitepress'
import { enhanceAppWithField } from 'vitepress-plugin-field/client'
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

### Basic Field

```md
::: field count
@type Number
@default 0
Total number of users.
:::
```

**Rendered Result:**

::: field count
@type Number
@default 0
Total number of users.
:::

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

**Rendered Result:**

::: field rawName
@name userName
@type String
Unique identifier for the user.
:::

### `@type` and `@typeLink` — Type and Type Reference Link

`@type` declares the field type, and `@typeLink` provides a reference link for it:

```md
::: field options
@type Record<string, unknown>
@typeLink /plugins/field
Configuration options.
:::
```

**Rendered Result:**

::: field options
@type Record\<string, unknown>
@typeLink /plugins/field
Configuration options.
:::

### `@default` — Default Value

```md
::: field createdAt
@type Date
@default Date.now()
Creation timestamp.
:::
```

**Rendered Result:**

::: field createdAt
@type Date
@default Date.now()
Creation timestamp.
:::

### `@required` — Required Field

A boolean flag; any value after it is ignored (`@required yes` is equivalent to `@required`):

```md
::: field id
@type Number
@required
Unique identifier.
:::
```

**Rendered Result:**

::: field id
@type Number
@required
Unique identifier.
:::

### `@deprecated` — Deprecated Field

Used alone it is a boolean flag; with a value it describes the version or date of deprecation:

```md
::: field legacy
@type String
@deprecated
This field is deprecated.
:::
```

```md
::: field oldField
@type String
@deprecated v2.0
Deprecated in v2.0, please use `newField` instead.
:::
```

**Rendered Result:**

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

**Rendered Result:**

::: field stream
@type Boolean
@experimental v3.0
Experimental capability; the API may change.
:::

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

**Rendered Result:**

::: field count
@description Total number of users. This field represents the count of active users in the system.
@type Number
@default 0
:::

### `@enum` — Candidate Values

Separate candidate values with `|`; surrounding whitespace is trimmed and quotes are preserved:

```md
::: field status
@type String
@default active
@enum active | inactive | pending
:::
```

Multiple `@enum` lines are appended to the same set of candidates:

```md
::: field level
@type Number
@enum 1 | 2
@enum 3
:::
```

**Rendered Result:**

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

### `@since` — Version Introduced

Only the first value is kept:

```md
::: field pageSize
@type Number
@since 1.2.0
Page size.
:::
```

**Rendered Result:**

::: field pageSize
@type Number
@since 1.2.0
Page size.
:::

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

**Rendered Result:**

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

**Rendered Result:**

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

### Field Group

Use the `::: field-group` container to group related fields together:

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

**Rendered Result:**

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

## Parsing Rules

* A tag must occupy its own line and start with `@`; only one tag is parsed per line. Lines that
  do not start with `@` are treated as description text.
* Tag names are case-insensitive: `@Type` is equivalent to `@type`.
* Surrounding backticks are removed from tag values: `` @type `String` `` is equivalent to `@type String`.
* Tags without a value are ignored (except boolean flags such as `@required` and `@deprecated`).
* When a scalar tag is repeated the last value wins (e.g. `@name`, `@type`, `@default`); `@enum`
  appends values; `@since` keeps only the first.
* Unknown tags (e.g. `@author`) are kept as description text and do not interrupt the current
  description paragraph.
* Blank lines do not interrupt a description paragraph; they are preserved as line breaks in
  the description.
* Fields with the same name on the same page get unique anchors automatically:
  `field-<name>`, `field-<name>-1`, `field-<name>-2`…
