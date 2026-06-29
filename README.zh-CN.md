# vitepress-tuck

[English](./README.md) | 简体中文

[![npm version](https://npmx.dev/api/registry/badge/version/vitepress-tuck)](https://www.npmjs.com/package/vitepress-tuck)
![npm download](https://npmx.dev/api/registry/badge/downloads/vitepress-tuck)
![npm license](https://npmx.dev/api/registry/badge/license/vitepress-tuck)
[![codecov](https://codecov.io/gh/pengzhanbo/vitepress-tuck/graph/badge.svg?token=O82LEANW6N)](https://codecov.io/gh/pengzhanbo/vitepress-tuck)

> 一个低门槛、易扩展的 VitePress 插件开发库与插件生态

## 概览

`vitepress-tuck` 是一个专为 **VitePress** 设计的插件开发库与插件集合。它通过提供一套简洁统一的插件接口定义和配置合并机制，大幅降低了 VitePress 插件的开发门槛，同时也为插件使用者提供了更友好的接入体验。

### 核心设计理念

- **低门槛** — 插件开发者只需关注核心逻辑，无需处理复杂的 VitePress 配置合并与生命周期编排
- **易接入** — 插件使用者通过 `defineConfig` 传入 `plugins` 数组即可使用，插件自动完成配置注入
- **渐进兼容** — 所有插件同时兼容 `vitepress-tuck` 和 VitePress 原生接入方式

## 快速开始

### 安装

```bash
# npm
npm install -D vitepress vitepress-tuck
# pnpm
pnpm add -D vitepress vitepress-tuck
# yarn
yarn add -D vitepress vitepress-tuck
# bun
bun add -D vitepress vitepress-tuck
```

### 在配置中使用

将 VitePress 的 `defineConfig` 替换为 `vitepress-tuck` 的 `defineConfig`：

```ts
// .vitepress/config.ts
import { defineConfig } from 'vitepress-tuck'

export default defineConfig({
  plugins: [
    // 在这里添加插件
  ],
  // 其他 VitePress 配置项 ...
})
```

`defineConfig` 完全兼容 VitePress 原生 `defineConfig` 的所有参数，额外增加 `plugins` 选项。

### 客户端代码注入

在 `.vitepress/theme/index.ts` 中，通过 `virtual:enhance-app` 自动注入插件的客户端代码：

```ts
// .vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import enhanceApp from 'virtual:enhance-app'
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    enhanceApp(ctx)
  },
} satisfies Theme
```

`virtual:enhance-app` 是 `vitepress-tuck` 内置的虚拟模块，会自动收集并合并所有插件的客户端配置。

> TypeScript 项目需要在 `tsconfig.json` 中添加类型引用：
>
> ```json
> {
>   "compilerOptions": {
>     "types": ["vitepress-tuck/client-types"]
>   }
> }
> ```

### 自动组件导入

`vitepress-tuck` 内置集成了 [`unplugin-vue-components`](https://github.com/unplugin/unplugin-vue-components) 插件
为 `.vue` 和 `.md` 文件提供自动按需组件导入能力，无需手动 import 或注册组件。
插件可通过 `componentResolver` 字段声明提供的 Vue 组件，用户在 Markdown 或 Vue 文件中直接使用组件名即可。

可通过 `components` 选项自定义行为：

```ts
// .vitepress/config.ts
import { defineConfig } from 'vitepress-tuck'

export default defineConfig({
  components: {
    // 任意 unplugin-vue-components 选项，例如：
    dirs: ['src/components'],
  },
  plugins: [],
})
```

## 插件生态

所有插件均基于 `vitepress-tuck` 开发，同时兼容 VitePress 原生接入方式。

| 插件                                                                                  | 说明                                                          |                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [vitepress-plugin-abbr](https://tuck.pengzhanbo.cn/zh/plugins/abbr)                   | 缩写词展示，支持自定义标签与内容                              | ![downloads](https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-abbr) ![bundle-size](https://npmx.dev/api/registry/badge/size/vitepress-plugin-abbr)                   |
| [vitepress-plugin-steps](https://tuck.pengzhanbo.cn/zh/plugins/steps)                 | 步骤容器，用于创建步骤引导内容                                | ![downloads](https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-steps) ![bundle-size](https://npmx.dev/api/registry/badge/size/vitepress-plugin-steps)                 |
| [vitepress-plugin-file-tree](https://tuck.pengzhanbo.cn/zh/plugins/file-tree)         | 文件目录树展示，支持展开/折叠                                 | ![downloads](https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-file-tree) ![bundle-size](https://npmx.dev/api/registry/badge/size/vitepress-plugin-file-tree)         |
| [vitepress-plugin-code-tree](https://tuck.pengzhanbo.cn/zh/plugins/code-tree)         | 代码树展示，支持展开/折叠                                     | ![downloads](https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-code-tree) ![bundle-size](https://npmx.dev/api/registry/badge/size/vitepress-plugin-code-tree)         |
| [vitepress-plugin-plot](https://tuck.pengzhanbo.cn/zh/plugins/plot)                   | 隐文遮罩，点击或悬停显示隐藏文本（`!!text!!` 语法）           | ![downloads](https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-plot) ![bundle-size](https://npmx.dev/api/registry/badge/size/vitepress-plugin-plot)                   |
| [vitepress-plugin-npm-to](https://tuck.pengzhanbo.cn/zh/plugins/npm-to)               | npm 命令自动转换为 pnpm / yarn / bun / deno 等包管理器命令    | ![downloads](https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-npm-to) ![bundle-size](https://npmx.dev/api/registry/badge/size/vitepress-plugin-npm-to)               |
| [vitepress-plugin-repo-card](https://tuck.pengzhanbo.cn/zh/plugins/repo-card)         | github / gitee 仓库卡片展示                                   | ![downloads](https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-repo-card) ![bundle-size](https://npmx.dev/api/registry/badge/size/vitepress-plugin-repo-card)         |
| [vitepress-plugin-mermaid-tuck](https://tuck.pengzhanbo.cn/zh/plugins/mermaid-tuck)   | Mermaid 图表渲染                                              | ![downloads](https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-mermaid-tuck) ![bundle-size](https://npmx.dev/api/registry/badge/size/vitepress-plugin-mermaid-tuck)   |
| [vitepress-plugin-plantuml](https://tuck.pengzhanbo.cn/zh/plugins/plantuml)           | PlantUML 图表渲染                                             | ![downloads](https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-plantuml) ![bundle-size](https://npmx.dev/api/registry/badge/size/vitepress-plugin-plantuml)           |
| [vitepress-plugin-qrcode](https://tuck.pengzhanbo.cn/zh/plugins/qrcode)               | 二维码生成，支持图片 / 卡片两种模式                           | ![downloads](https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-qrcode) ![bundle-size](https://npmx.dev/api/registry/badge/size/vitepress-plugin-qrcode)               |
| [vitepress-plugin-video](https://tuck.pengzhanbo.cn/zh/plugins/video)                 | 多平台视频嵌入（Bilibili、YouTube、AcFun、ArtPlayer）         | ![downloads](https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-video) ![bundle-size](https://npmx.dev/api/registry/badge/size/vitepress-plugin-video)                 |
| [vitepress-plugin-obsidian](https://tuck.pengzhanbo.cn/zh/plugins/obsidian)           | Obsidian 风格 Markdown 语法（Wiki 链接、Callout、嵌入、注释） | ![downloads](https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-obsidian) ![bundle-size](https://npmx.dev/api/registry/badge/size/vitepress-plugin-obsidian)           |
| [vitepress-plugin-pdf](https://tuck.pengzhanbo.cn/zh/plugins/pdf)                     | 嵌入 PDF 文件，支持页码、缩放、工具栏等配置                   | ![downloads](https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-pdf) ![bundle-size](https://npmx.dev/api/registry/badge/size/vitepress-plugin-pdf)                     |
| [vitepress-plugin-caniuse](https://tuck.pengzhanbo.cn/zh/plugins/caniuse)             | 嵌入 caniuse.com 浏览器兼容性数据                             | ![downloads](https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-caniuse) ![bundle-size](https://npmx.dev/api/registry/badge/size/vitepress-plugin-caniuse)             |
| [vitepress-plugin-code-collapse](https://tuck.pengzhanbo.cn/zh/plugins/code-collapse) | 代码块行折叠，支持全局/单块配置                               | ![downloads](https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-code-collapse) ![bundle-size](https://npmx.dev/api/registry/badge/size/vitepress-plugin-code-collapse) |
| [vitepress-plugin-codepen](https://tuck.pengzhanbo.cn/zh/plugins/codepen)             | 嵌入 CodePen 示例，支持自定义标签与主题                       | ![downloads](https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-codepen) ![bundle-size](https://npmx.dev/api/registry/badge/size/vitepress-plugin-codepen)             |
| [vitepress-plugin-jsfiddle](https://tuck.pengzhanbo.cn/zh/plugins/jsfiddle)           | 嵌入 JSFiddle 示例，支持自定义标签页                          | ![downloads](https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-jsfiddle) ![bundle-size](https://npmx.dev/api/registry/badge/size/vitepress-plugin-jsfiddle)           |
| [vitepress-plugin-watermark](https://tuck.pengzhanbo.cn/zh/plugins/watermark)         | 水印展示，支持自定义内容与样式                                | ![downloads](https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-watermark) ![bundle-size](https://npmx.dev/api/registry/badge/size/vitepress-plugin-watermark)         |

## 开发插件

使用 `vitepress-tuck` 开发一个 VitePress 插件非常简单：

```ts
// src/node/index.ts
import { definePlugin } from 'vitepress-tuck'

export default definePlugin((options?: MyPluginOptions) => ({
  name: 'vitepress-plugin-example',

  // 客户端配置：自动注入到 virtual:enhance-app
  client: {
    imports: [
      'import "vitepress-plugin-example/style.css"',
    ],
    enhance: 'enhanceAppWithExample',
  },

  // 组件解析器：声明组件，支持自动按需导入
  componentResolver: ['MyComponent', 'OtherComponent'],

  // Markdown 配置：注册 markdown-it 插件
  markdown: {
    config: (md) => {
      md.use(yourMarkdownItPlugin, options?.markdownOptions)
    },
  },

  // Vite 配置
  vite: {
    plugins: [yourVitePlugin(options?.viteOptions)],
    ssr: {
      noExternal: ['vitepress-plugin-example'],
    },
  },

  // VitePress 生命周期钩子
  buildEnd: (siteConfig) => { /* ... */ },
  transformHead: (context) => { /* ... */ },
  transformHtml: (code, id, context) => { /* ... */ },
  transformPageData: (pageData, context) => { /* ... */ },
  postRender: (context) => { /* ... */ },
}))
```

### 开发资源

- 使用 [vitepress-plugin-toolkit](./packages/plugin-toolkit) 提供的 `createEmbedRuleBlock`
  `createContainerPlugin`、`createContainerSyntaxPlugin` 等工具快速构建 markdown-it 插件
- 查看 [Core API 文档](./docs/zh/guide/api.md) 了解 `VitepressPlugin` 类型定义
- 参考本项目中的已有插件作为开发范例

### 包装现有插件

通过 `definePlugin` 可以轻松将任何已有的插件逻辑包装为 `vitepress-tuck` 兼容形式：

```ts
import { definePlugin } from 'vitepress-tuck'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'

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
    plugins: [groupIconVitePlugin()],
    ssr: {
      noExternal: ['vitepress-plugin-group-icons'],
    },
  },
}))
```

## 插件独立使用

本项目中的所有插件也可以脱离 `vitepress-tuck`，直接在 VitePress 中原生使用：

```ts
// .vitepress/config.ts
import { defineConfig } from 'vitepress'
import { qrcodePlugin } from 'vitepress-plugin-qrcode'

export default defineConfig({
  markdown: {
    config(md) {
      md.use(qrcodePlugin)
    },
  },
  vite: {
    plugins: [
      // vite 配置...
    ],
  },
})

// .vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import { enhanceAppWithQrcode } from 'vitepress-plugin-qrcode/client'
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    enhanceAppWithQrcode(ctx)
  },
} satisfies Theme
```

---

## 许可证

[MIT](LICENSE)
