---
url: /zh/guide/plugin-dev.md
---
# 插件开发

`vitepress-tuck` 提供了 `definePlugin` 函数来帮助开发者便捷地创建 VitePress 插件。通过 `definePlugin`，你可以将原本需要用户分散配置的 `markdown`、`vite`、`vue` 等选项集中在一个插件函数中。

## 基本结构

一个基于 `vitepress-tuck` 的插件由以下部分组成：

```ts
import { definePlugin } from 'vitepress-tuck'

export default definePlugin((options?: MyPluginOptions) => ({
  name: 'vitepress-plugin-my-plugin',

  // 客户端配置：自动注入到 virtual:enhance-app
  client: {
    imports: [],
    enhance: 'enhanceAppWithMyPlugin',
  },

  // 组件解析器：声明插件提供的组件，支持自动按需导入
  componentResolver: ['MyComponent', 'OtherComponent'],

  // Markdown 配置：注册 markdown-it 插件
  markdown: {
    config: (md) => {
      md.use(myMarkdownPlugin, options?.markdownOptions)
    },
  },

  // Vite 配置
  vite: {
    plugins: [myVitePlugin(options?.viteOptions)],
  },

  // 其他 VitePress 钩子
  buildEnd: (site) => { /* ... */ },
  transformHead: (ctx) => { /* ... */ },
  transformHtml: (code, id, ctx) => { /* ... */ },
  transformPageData: (pageData, ctx) => { /* ... */ },
  postRender: (context) => { /* ... */ },
}))
```

## 核心概念

### name

每个插件必须有一个唯一的 `name`，用于标识和调试：

```ts
{
  name: 'vitepress-plugin-my-plugin'
}
```

### client

`client` 配置用于向客户端注入代码。`vitepress-tuck` 会自动将这些代码注入到 `virtual:enhance-app` 虚拟模块中。

#### client.imports

添加自定义的 import 语句，常用于导入样式文件：

```ts
{
  client: {
    imports: [
      'import "vitepress-plugin-my-plugin/style.css"',
    ],
  }
}
```

#### client.enhance

指定插件的客户端增强函数名。该函数会在 VitePress 主题的 `enhanceApp(ctx)` 中被调用。

* 设置为 `true` 时，默认函数名为 `enhanceApp`
* 设置为字符串时，函数名为该字符串

```ts
{
  client: {
    enhance: 'enhanceAppWithMyPlugin',
  }
}
```

对应的，在插件的客户端入口文件中导出同名函数：

```ts
// client/index.ts
import type { EnhanceAppContext } from 'vitepress'

export function enhanceAppWithMyPlugin({ app }: EnhanceAppContext) {
  // 注册组件、指令等
  app.component('MyComponent', MyComponent)
}
```

### componentResolver

`componentResolver` 用于声明插件提供的 Vue 组件，使其能被内置的 `unplugin-vue-components` 自动按需导入。用户在 Markdown 或 Vue 文件中直接使用组件名即可，无需手动 import。

#### 字符串数组形式

最简单的形式是传入组件名数组，这些组件会从 `<插件名>/client` 自动解析：

```ts
{
  name: 'vitepress-plugin-my-plugin',
  componentResolver: ['MyComponent', 'OtherComponent'],
}
```

对应的，在插件的客户端入口中导出这些组件：

```ts
// client/index.ts
import MyComponent from './components/MyComponent.vue'
import OtherComponent from './components/OtherComponent.vue'

export { MyComponent, OtherComponent }
```

#### 自定义 ComponentResolver

对于更复杂的解析逻辑，可以传入来自 `unplugin-vue-components` 的 `ComponentResolver` 对象：

```ts
import type { ComponentResolver } from 'unplugin-vue-components'

const myResolver: ComponentResolver = {
  type: 'component',
  resolve: (name) => {
    if (name.startsWith('My')) {
      return { name, from: 'vitepress-plugin-my-plugin/client' }
    }
  },
}

export default definePlugin(() => ({
  name: 'vitepress-plugin-my-plugin',
  componentResolver: myResolver,
}))
```

::: tip
当插件同时设置了 `client.enhance` 用于注册组件和 `componentResolver` 时，推荐使用 `componentResolver` 来实现按需导入，这样可以减少不必要的组件打包。
:::

### markdown

配置 markdown-it 插件，用于扩展 Markdown 语法：

```ts
{
  markdown: {
    config: (md) => {
      // 注册自定义容器
      md.use(containerPlugin)
      // 注册行内规则
      md.inline.ruler.before('emphasis', 'my_rule', myRule)
    },
  }
}
```

### vite

配置 Vite 插件和优化选项：

```ts
{
  vite: {
    plugins: [myVitePlugin()],
    ssr: {
      noExternal: ['my-plugin-package'],
    },
  }
}
```

### 钩子函数

`definePlugin` 支持 VitePress 的各种钩子函数：

| 钩子                | 说明           | 执行方式           |
| ------------------- | -------------- | ------------------ |
| `buildEnd`          | 构建完成时触发 | 并发执行           |
| `transformHead`     | 转换 HTML 头部 | 并发执行，合并结果 |
| `transformHtml`     | 转换 HTML 内容 | 顺序执行，链式传递 |
| `transformPageData` | 转换页面数据   | 顺序执行，链式传递 |
| `postRender`        | 页面渲染后触发 | 顺序执行，链式传递 |

## 客户端代码组织

当插件需要提供客户端代码（如 Vue 组件）时，推荐以下目录结构：

::: file-tree title="my-plugin"

* my-plugin
  * src
    * client
      * components
        * MyComponent.vue
      * index.ts # 导出 enhanceApp 函数
    * node
      * myPlugin.ts # 插件核心逻辑
      * index.ts # 插件入口，使用 definePlugin
  * package.json
  * tsconfig.json

:::

在 `package.json` 中配置 `exports`，将客户端代码单独导出：

```json
{
  "exports": {
    ".": {
      "types": "./dist/node/index.d.ts",
      "default": "./dist/node/index.js"
    },
    "./client": {
      "browser": "./dist/client/browser/index.js",
      "default": "./dist/client/ssr/index.js"
    }
  }
}
```

## 推荐使用 vitepress-plugin-toolkit

`vitepress-plugin-toolkit` 提供了丰富的工具函数来辅助插件开发，包括：

* `createContainerPlugin` - 创建 markdown-it 自定义容器
* `createContainerSyntaxPlugin` - 创建自定义语法容器
* `createEmbedRuleBlock` - 创建嵌入语法块
* `resolveAttrs` / `stringifyAttrs` - 属性解析和序列化
* `createLogger` - 日志工具
* `createLocales` - 国际化支持
* `useSize` - 响应式尺寸计算

详细 API 请参考 [Toolkit API 文档](./toolkit)。

## 完整示例

以下是一个基于 `definePlugin` 开发的简单步骤插件：

```ts [node/index.ts]
import { definePlugin } from 'vitepress-tuck'
import { createContainerPlugin } from 'vitepress-plugin-toolkit'

export const stepsPlugin = (md) => {
  createContainerPlugin(md, 'steps', {
    before: () => '<div class="vp-steps">',
  })
}

export default definePlugin(() => ({
  name: 'vitepress-plugin-steps',
  client: {
    imports: ['import "vitepress-plugin-steps/style.css"'],
  },
  markdown: {
    config: (md) => {
      md.use(stepsPlugin)
    },
  },
}))
```

用户使用时只需：

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress-tuck'
import steps from 'vitepress-plugin-steps'

export default defineConfig({
  plugins: [steps()],
})
```
