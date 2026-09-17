---
url: /zh/plugins/code-tree.md
---
# Code Tree

代码树插件，用于在 Markdown 中渲染带文件树侧边栏的代码结构，支持文件切换查看。

该插件依赖于 [文件树](./file-tree.md) 插件提供的文件树侧边栏组件。

## 安装

::: npm-to

```sh
npm install vitepress-plugin-code-tree
```

:::

## 使用

### vitepress-tuck 模式 推荐

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress-tuck'
import codeTree from 'vitepress-plugin-code-tree'

export default defineConfig({
  plugins: [codeTree()],
})
```

[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}

### 传统模式

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress'
import { codeTreeMarkdownPlugin } from 'vitepress-plugin-code-tree'

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(codeTreeMarkdownPlugin)
    },
  },
})
```

```ts [.vitepress/theme/index.ts]
import type { Theme } from 'vitepress'
import { enhanceAppWithCodeTree } from 'vitepress-plugin-code-tree/client'
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    enhanceAppWithCodeTree(ctx)
  },
} satisfies Theme
```

## 语法

插件提供两种语法来渲染代码树：用于内联文件内容的容器语法，以及用于从目录加载文件的嵌入语法。

### 容器语法

使用 `::: code-tree` 容器，内部包含围栏代码块。每个围栏代码块必须通过信息字符串中的 `[文件名]` 语法声明文件名。

````md
::: code-tree title="项目结构"

```ts [index.ts]
const a = 1
```

```rs [main.rs]
fn main() {
    println!("Hello, world!");
}
```

:::
````

#### 容器属性

| 属性           | 说明               | 默认值  |
| -------------- | ------------------ | ------- |
| `title`        | 代码树标题         | -       |
| `height`       | 代码树容器高度     | `420px` |
| `entry`        | 入口文件，默认打开 | -       |
| `show-sidebar` | 是否默认显示侧边栏 | `false` |

#### 默认激活文件

在围栏代码块的信息字符串中添加 `:active` 标记，可以将该文件设为默认激活的文件：

````md
::: code-tree

```ts [index.ts] :active
const a = 1
```

```ts [utils.ts]
export const noop = () => {}
```

:::
````

### 嵌入语法

使用 `@[code-tree](dir)` 嵌入一个目录作为代码树。目录中的文件会被自动加载并渲染。

```md
@[code-tree](./src)
```

`dir` 支持以下路径前缀：

| 前缀 | 说明                             |
| ---- | -------------------------------- |
| `@`  | 相对于 VitePress `srcDir`        |
| `/`  | 相对于 VitePress 项目根目录      |
| -    | 相对于当前 markdown 文件所在目录 |

#### 嵌入属性

```md
@[code-tree title="源码" height="500px" entry="index.ts" show-sidebar=true](./src)
```

## 配置

### CodeTreePluginOptions

```ts
interface CodeTreePluginOptions {
  /**
   * 代码树容器默认高度
   * @default '420px'
   */
  height?: string | number

  /**
   * 忽略文件的 glob 路径模式
   * 在通过嵌入语法从目录加载文件时生效
   * node_modules 和 .DS_Store 始终会被忽略
   * @default []
   */
  ignores?: string[]

  /**
   * 资源文件加载器
   * 使用 `@[code-tree](dir)` 嵌入目录时，用于加载资源文件
   * 自定义加载器会合并到内置加载器之前，因此具有更高优先级
   * @default []
   */
  loaders?: CodeTreeFileLoader[]
}
```

### 文件加载器

加载器用于嵌入语法加载文件内容。插件内置了常见文件类型的加载器，自定义加载器会合并到内置加载器之前，因此具有更高优先级。

内置加载器覆盖以下文件类型：

* 点文件（`.git*`、`.env*`、`.*ignore`、`.npmrc`）：以纯文本渲染
* `.XXXrc` 配置文件（如 `.eslintrc`）：以 JSON 格式渲染
* 图片文件：渲染为 `<img>` 标签，并正确解析 `src`
* Shiki 支持的源文件：渲染为带语法高亮的围栏代码块

```ts
import codeTree, { loadCodeContent } from 'vitepress-plugin-code-tree'
import { defineConfig } from 'vitepress-tuck'

export default defineConfig({
  plugins: [
    codeTree({
      height: '500px',
      ignores: ['**/*.test.ts'],
      loaders: [
        {
          filter: ['**/*.md'],
          load: (file) => loadCodeContent(file, 'md'),
        },
      ],
    }),
  ],
})
```

`filter` 字段接受 glob 模式字符串、glob 模式数组，或接收 `CodeTreeFile` 并返回布尔值的断言函数。

## 示例

### 容器语法

````md
:::code-tree title="代码树" show-sidebar
```ts [index.ts]
const a = 1
```

```rs [main.rs]
fn main() {
    println!("Hello, world!");
}
```
:::
````

:::code-tree title="代码树" show-sidebar

```ts [index.ts]
const a = 1
```

```rs [main.rs]
fn main() {
    println!("Hello, world!");
}
```

:::

### 嵌入语法

```md
@[code-tree title="代码树" show-sidebar](@/zh)
```

@[code-tree title="代码树" show-sidebar](@/zh)
