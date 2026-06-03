# vitepress-tuck

> 一个低门槛、易扩展的 VitePress 插件开发库与插件生态

🚧🚧 施工中... 🚧🚧

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

```ts
import qrcode from 'vitepress-plugin-qrcode'
// .vitepress/config.ts
import { defineConfig } from 'vitepress-tuck'

export default defineConfig({
  title: 'My Site',
  plugins: [
    qrcode(),
  ],
})
```

`defineConfig` 完全兼容 VitePress 原生 `defineConfig` 的所有参数，额外增加 `plugins` 选项。

### 客户端代码注入

在 `.vitepress/theme/index.ts` 中，通过 `import 'virtual:enhance-app'` 自动注入插件的客户端代码：

```ts
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

## 插件列表

所有插件均基于 `vitepress-tuck` 开发，同时兼容 VitePress 原生接入方式。

| 插件                                                            | 描述                            | 特性                                        |
| --------------------------------------------------------------- | ------------------------------- | ------------------------------------------- |
| [vitepress-plugin-mermaid-next](packages/plugin-mermaid-next)   | 集成 Mermaid 图表渲染           | 支持 i18n 区域设置、SSR 优化                |
| [vitepress-plugin-caniuse](packages/plugin-caniuse)             | 嵌入 Can I Use 浏览器兼容性数据 | 支持 embed/baseline 两种展示模式            |
| [vitepress-plugin-code-collapse](packages/plugin-code-collapse) | 代码块折叠                      | 支持全局/局部折叠行数配置                   |
| [vitepress-plugin-codepen](packages/plugin-codepen)             | 嵌入 CodePen 示例               | 支持自定义标签与主题                        |
| [vitepress-plugin-codesandbox](packages/plugin-codesandbox)     | 嵌入 CodeSandbox 示例           | 支持自定义模块与主题                        |
| [vitepress-plugin-file-tree](packages/plugin-file-tree)         | 渲染文件目录树                  | 支持展开/折叠交互                           |
| [vitepress-plugin-jsfiddle](packages/plugin-jsfiddle)           | 嵌入 JSFiddle 示例              | 支持自定义标签页                            |
| [vitepress-plugin-npm-to](packages/plugin-npm-to)               | npm 命令多包管理器转换          | 支持 npm / pnpm / yarn / bun / deno         |
| [vitepress-plugin-obsidian](packages/plugin-obsidian)           | Obsidian 风格 Markdown 语法     | 支持 Callout / 注释 / WikiLink / 嵌入链接   |
| [vitepress-plugin-pdf](packages/plugin-pdf)                     | 嵌入 PDF 文件                   | 支持页码、工具栏、缩放等配置                |
| [vitepress-plugin-plot](packages/plugin-plot)                   | 隐秘文本语法                    | `!!text!!` 格式，用于在页面中文本黑幕化     |
| [vitepress-plugin-qrcode](packages/plugin-qrcode)               | 生成二维码                      | 支持 img / card 两种模式                    |
| [vitepress-plugin-steps](packages/plugin-steps)                 | 步骤流程容器                    | 自动添加样式                                |
| [vitepress-plugin-video](packages/plugin-video)                 | 多平台视频嵌入                  | 支持 Bilibili / AcFun / YouTube / ArtPlayer |

## 开发插件

使用 `vitepress-tuck` 开发一个插件非常简单：

### 一个简单的插件示例

```ts
// vitepress-plugin-example/src/node/index.ts
import { definePlugin } from 'vitepress-tuck'

export default definePlugin(() => ({
  name: 'vitepress-plugin-example',
  client: {
    enhance: 'enhanceAppWithExample',
  },
  markdown: {
    config(md) {
      md.use(/* your markdown-it plugin */)
    },
  },
  vite: {
    optimizeDeps: {
      exclude: ['some-dependency'],
    },
  },
}))
```

### 更多开发资源

- 使用 [vitepress-plugin-toolkit](packages/plugin-toolkit) 提供的 `createEmbedRuleBlock`、`createContainerPlugin` 等工具快速构建 markdown-it 插件
- 参考本项目中的已有插件作为开发范例
- 类型定义参见 `vitepress-tuck` 的 [types.ts](packages/vitepress-tuck/src/types.ts)

---

## 插件独立使用

本项目的所有插件也支持脱离 `vitepress-tuck`，直接在 VitePress 中原生使用：

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
```

这种方式适用于已经存在大量 VitePress 配置、不希望引入额外抽象的项目。

---

## 许可证

[MIT](LICENSE)
