# Field

<NpmBadge name="vitepress-plugin-field" />

Field container plugin for rendering structured API fields and properties documentation in Markdown,
with support for field grouping and JSDoc-style tag annotations.

## Installation

::: npm-to

```sh
npm install vitepress-plugin-field
```

:::

## Usage

### vitepress-tuck Mode <Badge type="tip">Recommended</Badge>

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
import { fieldMarkdownPlugin } from 'vitepress-plugin-field'

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(fieldMarkdownPlugin)
    },
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

Use the `::: field` container to document API fields and properties, with JSDoc-style tags for metadata.

### Basic Field

```md
::: field count
@type Number
@default 0
Total number of users.
:::
```

### Field Tags

Supported tags: `@name`, `@type`, `@default`, `@required`, `@deprecated`, `@optional`, `@description`.

```md
::: field userName
@type String
@required
Unique identifier for the user.
:::

::: field email
@type String
@optional
@default example@mail.com
Contact email address.
:::

::: field oldField
@type String
@deprecated
This field is deprecated, please use the new field instead.
:::
```

**Rendered Result:**

::: field userName
@type String
@required
Unique identifier for the user.
:::

::: field email
@type String
@optional
@default example@mail.com
Contact email address.
:::

::: field oldField
@type String
@deprecated
This field is deprecated, please use the new field instead.
:::

### Tag Reference

| Tag            | Description                                                          |
| -------------- | -------------------------------------------------------------------- |
| `@name`        | Override the field name (defaults to the name from `info`)           |
| `@type`        | Field type annotation                                                |
| `@default`     | Default value for the field                                          |
| `@required`    | Mark the field as required                                           |
| `@optional`    | Mark the field as optional                                           |
| `@deprecated`  | Mark the field as deprecated                                         |
| `@description` | Explicit description text; any non-tag line also becomes description |

### Field Group

Use the `::: field-group` container to group related fields together.

```md
:::: field-group

::: field id
@type Number
@required
Unique identifier.
:::

::: field name
@type String
@optional
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
@optional
Display name.
:::

::: field createdAt
@type Date
@default Date.now()
Creation timestamp.
:::

::::

### Explicit Description

Use the `@description` tag to specify description text explicitly. Any non-tag lines are also automatically treated as description content.

```md
::: field count
@description Total number of users. This field represents the count of active users in the system.
@type Number
@default 0
:::
```
