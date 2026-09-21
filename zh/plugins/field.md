---
url: /zh/plugins/field.md
---
# Field

字段容器插件，用于在 Markdown 中渲染结构化的 API 字段/属性文档，支持 JSDoc 风格标签注解与字段分组。

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

## 语法

使用 `::: field` 容器记录字段/属性：容器起始行 `::: field` 之后的文本即为字段名称，
容器正文则使用 JSDoc 风格标签描述字段元数据，其余非标签行会作为字段描述。

### 基础字段

```md
::: field count
@type Number
@default 0
用户总数。
:::
```

**渲染结果：**

::: field count
@type Number
@default 0
用户总数。
:::

### 标签一览

| 标签            | 取值              | 描述                                             |
| --------------- | ----------------- | ------------------------------------------------ |
| `@name`         | 字符串            | 覆盖字段名称（默认使用容器 `info` 中的名称）     |
| `@type`         | 字符串            | 字段类型注解                                     |
| `@typeLink`     | 字符串            | 类型引用链接，渲染为可点击链接                   |
| `@default`      | 字符串            | 字段默认值                                       |
| `@required`     | 布尔标记          | 标记为必填字段                                   |
| `@deprecated`   | 布尔标记/字符串   | 标记为已弃用，可附带弃用版本或日期               |
| `@experimental` | 布尔标记/字符串   | 标记为实验性，可附带引入版本或日期               |
| `@description`  | 字符串            | 显式描述文本，任何非标签行也会被纳入描述         |
| `@enum`         | 字符串            | 候选值，使用竖线分隔，可多行追加                 |
| `@since`        | 字符串            | 起始版本，仅保留第一个出现的值                   |
| `@unit`         | 字符串            | 单位注解                                         |
| `@format`       | 字符串            | 格式注解                                         |
| `@constraint`   | 字符串            | 约束注解                                         |
| `@optional`     | —                 | 已废弃，不再被解析（默认即为可选状态）           |

### `@name` — 覆盖字段名称

默认使用容器起始行 `info` 作为字段名称，使用 `@name` 可以覆盖它：

```md
::: field rawName
@name userName
@type String
用户的唯一标识名称。
:::
```

**渲染结果：**

::: field rawName
@name userName
@type String
用户的唯一标识名称。
:::

### `@type` 与 `@typeLink` — 类型与类型引用链接

`@type` 声明字段类型，`@typeLink` 为类型提供引用链接：

```md
::: field options
@type Record<string, unknown>
@typeLink /zh/plugins/field
字段配置项。
:::
```

**渲染结果：**

::: field options
@type Record\<string, unknown>
@typeLink /zh/plugins/field
字段配置项。
:::

### `@default` — 默认值

```md
::: field createdAt
@type Date
@default Date.now()
创建时间。
:::
```

**渲染结果：**

::: field createdAt
@type Date
@default Date.now()
创建时间。
:::

### `@required` — 必填字段

布尔标记，其后的取值会被忽略（`@required yes` 等价于 `@required`）：

```md
::: field id
@type Number
@required
唯一标识符。
:::
```

**渲染结果：**

::: field id
@type Number
@required
唯一标识符。
:::

### `@deprecated` — 已弃用

单独使用即为布尔标记；附带取值时表示弃用版本或日期：

```md
::: field legacy
@type String
@deprecated
此字段已弃用。
:::
```

```md
::: field oldField
@type String
@deprecated v2.0
此字段已在 v2.0 弃用，请使用 `newField` 替代。
:::
```

**渲染结果：**

::: field legacy
@type String
@deprecated
此字段已弃用。
:::

::: field oldField
@type String
@deprecated v2.0
此字段已在 v2.0 弃用，请使用 `newField` 替代。
:::

### `@experimental` — 实验性

与 `@deprecated` 类似，单独使用即为布尔标记，也可附带引入版本或日期：

```md
::: field stream
@type Boolean
@experimental v3.0
实验性能力，接口可能发生变化。
:::
```

**渲染结果：**

::: field stream
@type Boolean
@experimental v3.0
实验性能力，接口可能发生变化。
:::

### `@description` — 显式描述

显式声明描述文本；非标签行同样会作为描述内容，并可与 `@description` 混用：

```md
::: field count
@description 用户总数。此字段表示当前系统中的活跃用户数量。
@type Number
@default 0
:::
```

**渲染结果：**

::: field count
@description 用户总数。此字段表示当前系统中的活跃用户数量。
@type Number
@default 0
:::

### `@enum` — 候选值

使用 `|` 分隔多个候选值，值两端的空白会被裁剪，引号会保留：

```md
::: field status
@type String
@default active
@enum active | inactive | pending
:::
```

多个 `@enum` 行会追加到同一组候选项中：

```md
::: field level
@type Number
@enum 1 | 2
@enum 3
:::
```

**渲染结果：**

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

### `@since` — 起始版本

只保留第一个出现的值：

```md
::: field pageSize
@type Number
@since 1.2.0
分页大小。
:::
```

**渲染结果：**

::: field pageSize
@type Number
@since 1.2.0
分页大小。
:::

### `@unit`、`@format` 与 `@constraint` — 单位、格式与约束

```md
::: field timeout
@type Number
@default 3000
@unit ms
@constraint 1..60000
超时时间。
:::

::: field date
@type String
@format YYYY-MM-DD
日期。
:::
```

**渲染结果：**

::: field timeout
@type Number
@default 3000
@unit ms
@constraint 1..60000
超时时间。
:::

::: field date
@type String
@format YYYY-MM-DD
日期。
:::

### 组合使用

多个标签可以自由组合：

```md
::: field pageSize
@type Number
@typeLink /zh/plugins/field
@required
@default 20
@unit 条
@constraint 1..100
@since 1.2.0
@experimental v2.0
分页查询时每页返回的记录数。
:::
```

**渲染结果：**

::: field pageSize
@type Number
@typeLink /zh/plugins/field
@required
@default 20
@unit 条
@constraint 1..100
@since 1.2.0
@experimental v2.0
分页查询时每页返回的记录数。
:::

### 字段分组

使用 `::: field-group` 容器将相关字段组合在一起：

```md
:::: field-group

::: field id
@type Number
@required
唯一标识符。
:::

::: field name
@type String
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
显示名称。
:::

::: field createdAt
@type Date
@default Date.now()
创建时间。
:::

::::

## 解析规则

* 标签需独占一行并以 `@` 开头，一行只解析一个标签；不以 `@` 开头的内容视为描述文本。
* 标签名大小写不敏感，`@Type` 与 `@type` 等价。
* 标签值两端的反引号会被移除，`` @type `String` `` 等价于 `@type String`。
* 标签未提供取值时会被忽略（`@required`、`@deprecated` 等布尔标记除外）。
* 标量标签重复出现时以最后一个为准（如 `@name`、`@type`、`@default`）；`@enum` 会追加取值；`@since` 只保留第一个。
* 未知标签（如 `@author`）整行会作为描述文本，不会中断当前描述段落。
* 空行不会中断描述段落，会保留为描述中的换行分隔。
* 同一页面中同名字段会自动生成唯一锚点：`field-<name>`、`field-<name>-1`、`field-<name>-2` …。
