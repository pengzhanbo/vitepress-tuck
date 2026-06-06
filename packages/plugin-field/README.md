# vitepress-plugin-field

Render structured API fields and properties documentation in your VitePress site.

在 VitePress 中渲染结构化的 API 字段/属性文档。

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
import { fieldMarkdownPlugin } from 'vitepress-plugin-field'

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(fieldMarkdownPlugin)
    },
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

Use `::: field` containers to document API fields and properties, with JSDoc-style tags for metadata.

### Basic Field

```md
::: field count
@type Number
@default 0

Count value.
:::
```

### Field with Tags

Supported tags: `@name`, `@type`, `@default`, `@required`, `@deprecated`, `@optional`, `@description`.

```md
::: field userName
@type String
@required
User's unique identifier name.
:::

::: field email
@type String
@optional
@default example@mail.com
Contact email.
:::

::: field oldField
@type String
@deprecated
This field is deprecated. Please use a new field instead.
:::
```

### Field Group

Use `::: field-group` to group related fields together.

```md
::: field-group

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
Created at.
:::

:::
```

### Explicit Description

Use `@description` tag for explicit description text. Any non-tag line also feeds into description.

```md
::: field count
@description This field represents the total number of active users in the system.
@type Number
@default 0
:::
```

### Custom Field Name

Override the field name via `@name` tag.

```md
::: field count
@name count
@type Number
@default 0
:::
```

## Component

The `VPField` component is also available for direct use:

```vue
<VPField name="count" type="Number" required>
  <p>User count.</p>
</VPField>
```
