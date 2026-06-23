# vitepress-tuck

[English](./README.md) | 简体中文

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
pnpm add vitepress-tuck
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

## 插件生态

所有插件均基于 `vitepress-tuck` 开发，同时兼容 VitePress 原生接入方式。

| 插件                                                | 包名                             | 说明                                                          |
| --------------------------------------------------- | -------------------------------- | ------------------------------------------------------------- |
| [Steps](./docs/zh/plugins/steps.md)                 | `vitepress-plugin-steps`         | 步骤容器，用于创建步骤引导内容                                |
| [File Tree](./docs/zh/plugins/file-tree.md)         | `vitepress-plugin-file-tree`     | 文件目录树展示，支持展开/折叠                                 |
| [Code Tree](./docs/zh/plugins/code-tree.md)         | `vitepress-plugin-code-tree`     | 代码树展示，支持展开/折叠                                     |
| [Plot](./docs/zh/plugins/plot.md)                   | `vitepress-plugin-plot`          | 隐文遮罩，点击或悬停显示隐藏文本（`!!text!!` 语法）           |
| [Npm To](./docs/zh/plugins/npm-to.md)               | `vitepress-plugin-npm-to`        | npm 命令自动转换为 pnpm / yarn / bun / deno 等包管理器命令    |
| [Repo Card](./docs/zh/plugins/repo-card.md)         | `vitepress-plugin-repo-card`     | github / gitee 仓库卡片展示                                   |
| [Mermaid](./docs/zh/plugins/mermaid.md)             | `vitepress-plugin-mermaid-tuck`  | Mermaid 图表渲染，支持 i18n 多语言                            |
| [PlantUML](./docs/zh/plugins/plantuml.md)           | `vitepress-plugin-plantuml`      | PlantUML 图表渲染，支持 i18n 多语言                           |
| [QRCode](./docs/zh/plugins/qrcode.md)               | `vitepress-plugin-qrcode`        | 二维码生成，支持图片 / 卡片两种模式                           |
| [Video](./docs/zh/plugins/video.md)                 | `vitepress-plugin-video`         | 多平台视频嵌入（Bilibili、YouTube、AcFun、ArtPlayer）         |
| [Obsidian](./docs/zh/plugins/obsidian.md)           | `vitepress-plugin-obsidian`      | Obsidian 风格 Markdown 语法（Wiki 链接、Callout、嵌入、注释） |
| [PDF](./docs/zh/plugins/pdf.md)                     | `vitepress-plugin-pdf`           | 嵌入 PDF 文件，支持页码、缩放、工具栏等配置                   |
| [Can I Use](./docs/zh/plugins/caniuse.md)           | `vitepress-plugin-caniuse`       | 嵌入 caniuse.com 浏览器兼容性数据                             |
| [Code Collapse](./docs/zh/plugins/code-collapse.md) | `vitepress-plugin-code-collapse` | 代码块行折叠，支持全局/单块配置                               |
| [CodePen](./docs/zh/plugins/codepen.md)             | `vitepress-plugin-codepen`       | 嵌入 CodePen 示例，支持自定义标签与主题                       |
| [JSFiddle](./docs/zh/plugins/jsfiddle.md)           | `vitepress-plugin-jsfiddle`      | 嵌入 JSFiddle 示例，支持自定义标签页                          |

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
