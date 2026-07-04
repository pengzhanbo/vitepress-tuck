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

| 插件                                            | 说明                                                                      |                                                                         |
| ----------------------------------------------- | ------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| [vitepress-plugin-abbr][abbr]                   | 为 VitePress 添加缩写词支持                                               | ![downloads][abbr-download] ![bundle-size][abbr-size]                   |
| [vitepress-plugin-annotation][annotation]       | 为 VitePress 添加注释内容支持                                             | ![downloads][annotation-download] ![bundle-size][annotation-size]       |
| [vitepress-plugin-caniuse][caniuse]             | 在 VitePress 中嵌入 <https://caniuse.com/> 数据                           | ![downloads][caniuse-download] ![bundle-size][caniuse-size]             |
| [vitepress-plugin-code-collapse][code-collapse] | 在 VitePress 中提供代码块折叠行功能                                       | ![downloads][code-collapse-download] ![bundle-size][code-collapse-size] |
| [vitepress-plugin-code-tree][code-tree]         | 在 VitePress 中渲染代码树结构 site                                        | ![downloads][code-tree-download] ![bundle-size][code-tree-size]         |
| [vitepress-plugin-codepen][codepen]             | 在 VitePress 中嵌入 CodePen                                               | ![downloads][codepen-download] ![bundle-size][codepen-size]             |
| [vitepress-plugin-collapse][collapse]           | 在 VitePress 中渲染可折叠的内容区块 site.                                 | ![downloads][collapse-download] ![bundle-size][collapse-size]           |
| [vitepress-plugin-field][field]                 | 在 VitePress 中渲染结构化的 API 字段/属性文档                             | ![downloads][field-download] ![bundle-size][field-size]                 |
| [vitepress-plugin-file-tree][file-tree]         | 在 VitePress 中渲染文件树结构                                             | ![downloads][file-tree-download] ![bundle-size][file-tree-size]         |
| [vitepress-plugin-icons][icons]                 | 使用Iconify、Iconfont 和 FontAwesome 为 Vitepress 提供图标                | ![downloads][icons-download] ![bundle-size][icons-size]                 |
| [vitepress-plugin-jsfiddle][jsfiddle]           | 在 VitePress 中嵌入 JSFiddle                                              | ![downloads][jsfiddle-download] ![bundle-size][jsfiddle-size]           |
| [vitepress-plugin-mermaid-tuck][mermaid-tuck]   | 在 VitePress 中渲染 Mermaid 图表                                          | ![downloads][mermaid-tuck-download] ![bundle-size][mermaid-tuck-size]   |
| [vitepress-plugin-npm-to][npm-to]               | 将 npm 命令转换为等价的 `pnpm / yarn / bun / deno` 命令                   | ![downloads][npm-to-download] ![bundle-size][npm-to-size]               |
| [vitepress-plugin-obsidian][obsidian]           | Obsidian 风格的 markdown 语法支持 (Wiki links, Callout, embeds, comments) | ![downloads][obsidian-download] ![bundle-size][obsidian-size]           |
| [vitepress-plugin-pdf][pdf]                     | 在 VitePress 中嵌入 PDF 文件                                              | ![downloads][pdf-download] ![bundle-size][pdf-size]                     |
| [vitepress-plugin-plantuml][plantuml]           | 在 VitePress 中渲染 PlantUML 图表                                         | ![downloads][plantuml-download] ![bundle-size][plantuml-size]           |
| [vitepress-plugin-plot][plot]                   | 使用 `!!text!!` 语法添加黑幕文本。文本在被悬停或点击前保持隐藏            | ![downloads][plot-download] ![bundle-size][plot-size]                   |
| [vitepress-plugin-qrcode][qrcode]               | 在 VitePress 中生成二维码                                                 | ![downloads][qrcode-download] ![bundle-size][qrcode-size]               |
| [vitepress-plugin-repo-card][repo-card]         | 在 VitePress 中展示 GitHub/Gitee 仓库信息卡片                             | ![downloads][repo-card-download] ![bundle-size][repo-card-size]         |
| [vitepress-plugin-steps][steps]                 | 将有序/无序列表渲染为带序号和连接线的步骤样式                             | ![downloads][steps-download] ![bundle-size][steps-size]                 |
| [vitepress-plugin-video][video]                 | 在 VitePress 中嵌入视频（支持 Bilibili、YouTube、AcFun、ArtPlayer）       | ![downloads][video-download] ![bundle-size][video-size]                 |
| [vitepress-plugin-watermark][watermark]         | 在 VitePress 中添加水印文本                                               | ![downloads][watermark-download] ![bundle-size][watermark-size]         |

[abbr]: https://tuck.pengzhanbo.cn/plugins/abbr
[abbr-download]: https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-abbr
[abbr-size]: https://npmx.dev/api/registry/badge/size/vitepress-plugin-abbr
[annotation]: https://tuck.pengzhanbo.cn/plugins/annotation
[annotation-download]: https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-annotation
[annotation-size]: https://npmx.dev/api/registry/badge/size/vitepress-plugin-annotation
[caniuse]: https://tuck.pengzhanbo.cn/plugins/caniuse
[caniuse-download]: https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-caniuse
[caniuse-size]: https://npmx.dev/api/registry/badge/size/vitepress-plugin-caniuse
[code-collapse]: https://tuck.pengzhanbo.cn/plugins/code-collapse
[code-collapse-download]: https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-code-collapse
[code-collapse-size]: https://npmx.dev/api/registry/badge/size/vitepress-plugin-code-collapse
[code-tree]: https://tuck.pengzhanbo.cn/plugins/code-tree
[code-tree-download]: https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-code-tree
[code-tree-size]: https://npmx.dev/api/registry/badge/size/vitepress-plugin-code-tree
[codepen]: https://tuck.pengzhanbo.cn/plugins/codepen
[codepen-download]: https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-codepen
[codepen-size]: https://npmx.dev/api/registry/badge/size/vitepress-plugin-codepen
[collapse]: https://tuck.pengzhanbo.cn/plugins/collapse
[collapse-download]: https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-collapse
[collapse-size]: https://npmx.dev/api/registry/badge/size/vitepress-plugin-collapse
[field]: https://tuck.pengzhanbo.cn/plugins/field
[field-download]: https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-field
[field-size]: https://npmx.dev/api/registry/badge/size/vitepress-plugin-field
[file-tree]: https://tuck.pengzhanbo.cn/plugins/file-tree
[file-tree-download]: https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-file-tree
[file-tree-size]: https://npmx.dev/api/registry/badge/size/vitepress-plugin-file-tree
[icons]: https://tuck.pengzhanbo.cn/plugins/icons
[icons-download]: https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-icons
[icons-size]: https://npmx.dev/api/registry/badge/size/vitepress-plugin-icons
[jsfiddle]: https://tuck.pengzhanbo.cn/plugins/jsfiddle
[jsfiddle-download]: https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-jsfiddle
[jsfiddle-size]: https://npmx.dev/api/registry/badge/size/vitepress-plugin-jsfiddle
[mermaid-tuck]: https://tuck.pengzhanbo.cn/plugins/mermaid-tuck
[mermaid-tuck-download]: https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-mermaid-tuck
[mermaid-tuck-size]: https://npmx.dev/api/registry/badge/size/vitepress-plugin-mermaid-tuck
[npm-to]: https://tuck.pengzhanbo.cn/plugins/mermaid-tuck
[npm-to-download]: https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-mermaid-tuck
[npm-to-size]: https://npmx.dev/api/registry/badge/size/vitepress-plugin-mermaid-tuck
[obsidian]: https://tuck.pengzhanbo.cn/plugins/obsidian
[obsidian-download]: https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-obsidian
[obsidian-size]: https://npmx.dev/api/registry/badge/size/vitepress-plugin-obsidian
[pdf]: https://tuck.pengzhanbo.cn/plugins/pdf
[pdf-download]: https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-pdf
[pdf-size]: https://npmx.dev/api/registry/badge/size/vitepress-plugin-pdf
[plantuml]: https://tuck.pengzhanbo.cn/plugins/plantuml
[plantuml-download]: https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-plantuml
[plantuml-size]: https://npmx.dev/api/registry/badge/size/vitepress-plugin-plantuml
[plot]: https://tuck.pengzhanbo.cn/plugins/plot
[plot-download]: https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-plot
[plot-size]: https://npmx.dev/api/registry/badge/size/vitepress-plugin-plot
[qrcode]: https://tuck.pengzhanbo.cn/plugins/qrcode
[qrcode-download]: https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-qrcode
[qrcode-size]: https://npmx.dev/api/registry/badge/size/vitepress-plugin-qrcode
[repo-card]: https://tuck.pengzhanbo.cn/plugins/repo-card
[repo-card-download]: https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-repo-card
[repo-card-size]: https://npmx.dev/api/registry/badge/size/vitepress-plugin-repo-card
[steps]: https://tuck.pengzhanbo.cn/plugins/steps
[steps-download]: https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-steps
[steps-size]: https://npmx.dev/api/registry/badge/size/vitepress-plugin-steps
[video]: https://tuck.pengzhanbo.cn/plugins/video
[video-download]: https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-video
[video-size]: https://npmx.dev/api/registry/badge/size/vitepress-plugin-video
[watermark]: https://tuck.pengzhanbo.cn/plugins/watermark
[watermark-download]: https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-watermark
[watermark-size]: https://npmx.dev/api/registry/badge/size/vitepress-plugin-watermark

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
