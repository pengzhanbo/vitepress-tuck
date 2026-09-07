---
url: /zh/plugins/field.md
---
# Field

字段容器插件，用于在 Markdown 中渲染结构化的 API 字段/属性文档，支持字段分组和 JSDoc 风格的标签注解。

## 安装

::: npm-to

```sh
npm install vitepress-plugin-field
```

:::

## 使用

### vitepress-tuck 模式 推荐

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress-tuck'
import field from 'vitepress-plugin-field'

export default defineConfig({
  plugins: [field()],
})
```

[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}

### 传统模式

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

## 语法

使用 `::: field` 容器来记录 API 字段/属性，配合 JSDoc 风格标签描述元数据。

### 基础字段

```md
::: field count
@type Number
@default 0
用户总数。
:::
```

### 字段标签

支持 `@name`、`@type`、`@default`、`@required`、`@deprecated`、`@optional`、`@description` 标签。

```md
::: field userName
@type String
@required
用户的唯一标识名称。
:::

::: field email
@type String
@optional
@default example@mail.com
联系邮箱。
:::

::: field oldField
@type String
@deprecated
此字段已弃用，请使用新字段替代。
:::
```

**渲染结果：**

::: field userName
@type String
@required
用户的唯一标识名称。
:::

::: field email
@type String
@optional
@default example@mail.com
联系邮箱。
:::

::: field oldField
@type String
@deprecated
此字段已弃用，请使用新字段替代。
:::

### 标签说明

| 标签           | 描述                                             |
| -------------- | ------------------------------------------------ |
| `@name`        | 覆盖字段名称（默认使用 `info` 中的名称）         |
| `@type`        | 字段类型注解                                     |
| `@default`     | 字段默认值                                       |
| `@required`    | 标记为必填字段                                   |
| `@optional`    | 标记为可选字段                                   |
| `@deprecated`  | 标记为已弃用字段                                 |
| `@description` | 显式描述文本，任何非标签行也会被纳入描述         |

### 字段分组

使用 `::: field-group` 容器将相关字段组合在一起。

```md
:::: field-group

::: field id
@type Number
@required
唯一标识符。
:::

::: field name
@type String
@optional
显示名称。
:::

::: field createdAt
@type Date
@default Date.now()
创建时间。
:::

::::
```

**渲染结果：**

:::: field-group

::: field id
@type Number
@required
唯一标识符。
:::

::: field name
@type String
@optional
显示名称。
:::

::: field createdAt
@type Date
@default Date.now()
创建时间。
:::

::::

### 显式描述

使用 `@description` 标签明确指定描述文本。任何非标签行也会自动作为描述内容。

```md
::: field count
@description 用户总数。此字段表示当前系统中的活跃用户数量。
@type Number
@default 0
:::
```
