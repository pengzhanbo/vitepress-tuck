---
url: /zh/guide/wrap-plugin.md
---
# 包装现有插件

如果你的 VitePress 站点已经在使用一些插件，或者你有一个尚未封装为 `vitepress-tuck` 模式的插件，你可以轻松地将其包装为兼容的插件形式。

## 为什么需要包装？

传统的 VitePress 插件通常需要用户在配置文件中多处配置：

```ts
// 传统的接入方式 —— 配置散落在多处
import { defineConfig } from 'vitepress'
import { someMarkdownPlugin } from 'some-plugin'

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(someMarkdownPlugin)
    },
  },
  vite: {
    plugins: [someVitePlugin()],
  },
})
```

通过包装为 `vitepress-tuck` 插件，用户只需在 `plugins` 数组中添加，所有配置由插件内部处理。

## 包装方法

### 使用 definePlugin 包装

对于任何已有的插件逻辑，使用 `definePlugin` 进行包装：

```ts
import { definePlugin } from 'vitepress-tuck'
import { someMarkdownPlugin } from 'some-plugin'
import { someVitePlugin } from 'some-plugin/vite'

export default definePlugin((options?: MyOptions) => ({
  name: 'vitepress-plugin-some-plugin',
  markdown: {
    config: (md) => {
      md.use(someMarkdownPlugin, options)
    },
  },
  vite: {
    plugins: [someVitePlugin(options)],
  },
}))
```

### 包装仅有 markdown 配置的插件

如果插件只涉及 markdown-it 扩展，包装非常简单：

```ts
import { definePlugin } from 'vitepress-tuck'

export default definePlugin(() => ({
  name: 'vitepress-plugin-my-plugin',
  markdown: {
    config: (md) => {
      md.use(myMarkdownItPlugin)
    },
  },
}))
```

### 包装仅有 vite 配置的插件

如果插件只需要 Vite 配置：

```ts
import { definePlugin } from 'vitepress-tuck'
import myVitePlugin from 'vite-plugin-my'

export default definePlugin((options?: MyOptions) => ({
  name: 'vitepress-plugin-my-plugin',
  vite: {
    plugins: [myVitePlugin(options)],
  },
}))
```

### 包装需要客户端注入的插件

如果插件需要在客户端注入组件或样式，需要配置 `client` 选项：

```ts
import { definePlugin } from 'vitepress-tuck'

export default definePlugin(() => ({
  name: 'vitepress-plugin-my-plugin',
  client: {
    imports: [
      // 注入样式
      'import "my-plugin/style.css"',
    ],
    enhance: 'enhanceAppWithMyPlugin',
  },
  markdown: {
    config: (md) => {
      md.use(myMarkdownPlugin)
    },
  },
  vite: {
    ssr: {
      // 确保服务端渲染时能正确打包
      noExternal: ['my-plugin'],
    },
  },
}))
```

并在客户端入口文件中导出 enhance 函数：

```ts
// client/index.ts
import type { EnhanceAppContext } from 'vitepress'
import MyComponent from './components/MyComponent.vue'

export function enhanceAppWithMyPlugin({ app }: EnhanceAppContext) {
  app.component('MyComponent', MyComponent)
}
```

## 实际案例

以下是将 `vitepress-plugin-group-icons` 包装为 `vitepress-tuck` 插件的示例：

```ts
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'
import { definePlugin } from 'vitepress-tuck'

export default definePlugin(() => ({
  name: 'vitepress-plugin-group-icons',
  client: {
    imports: ['import \'virtual:group-icons.css\''],
  },
  markdown: {
    config: (md) => {
      md.use(groupIconMdPlugin)
    },
  },
  vite: {
    plugins: [
      groupIconVitePlugin(),
    ],
    ssr: {
      noExternal: [
        'vitepress-plugin-group-icons',
      ],
    },
  },
}))

```

## 保持兼容性

包装后的插件仍然可以独立使用（不依赖 `vitepress-tuck`）。只需在插件的 README 中同时提供两种使用方式：

```ts
// 方式一：vitepress-tuck 模式（推荐）
import { defineConfig } from 'vitepress-tuck'
import myPlugin from 'my-plugin'

export default defineConfig({
  plugins: [myPlugin()],
})

// 方式二：传统 VitePress 模式
import { defineConfig } from 'vitepress'
import { myPlugin } from 'my-plugin/raw'

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(myPlugin)
    },
  },
})
```
