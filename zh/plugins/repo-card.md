---
url: /zh/plugins/repo-card.md
---
# Repo Card

仓库信息卡片插件，在你的 Markdown 中展示 GitHub/Gitee 仓库的详细信息卡片，支持 embed 内嵌语法和容器多卡片网格布局。

## 安装

::: npm-to

```sh
npm install vitepress-plugin-repo-card
```

:::

## 使用

### vitepress-tuck 模式 推荐

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress-tuck'
import repoCard from 'vitepress-plugin-repo-card'

export default defineConfig({
  plugins: [repoCard()],
})
```

[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}

### 传统模式

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress'
import { repoCardMarkdownPlugin } from 'vitepress-plugin-repo-card'

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(repoCardMarkdownPlugin)
    },
  },
})
```

```ts [.vitepress/theme/index.ts]
import type { Theme } from 'vitepress'
import { enhanceAppWithRepoCard } from 'vitepress-plugin-repo-card/client'
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    enhanceAppWithRepoCard(ctx)
  },
} satisfies Theme
```

## 语法

### 嵌入语法

使用 `@[repo]()` 语法嵌入单个仓库信息卡片。不指定 `register` 时默认使用 GitHub。

```md
@[repo](owner/name)
@[repo github](owner/name)
@[repo gitee](owner/name)
```

### 显示完整仓库名

使用 `fullname` 参数显示 `owner/name` 完整路径。对于组织仓库，会自动显示完整名称。

```md
@[repo fullname github](pengzhanbo/vitepress-tuck)
```

### 容器语法

使用 `::: repo` 容器将多个仓库卡片以响应式网格布局展示。

```md
::: repo
@[repo github](vuejs/vitepress)
@[repo github](vuejs/core)
:::
```

## 示例

### 单个仓库卡片

**GitHub 仓库：**

```md
@[repo github](vuejs/vitepress)
```

@[repo github](vuejs/vitepress)

**Gitee 仓库：**

```md
@[repo gitee](openharmony/kernel_liteos_a)
```

@[repo gitee](openharmony/kernel_liteos_a)

**显示完整名称：**

```md
@[repo fullname](pengzhanbo/vitepress-tuck)
```

@[repo fullname](pengzhanbo/vitepress-tuck)

### 多卡片网格布局

```md
::: repo
@[repo fullname](pengzhanbo/vitepress-tuck)
@[repo](pengzhanbo/vite-plugin-mock-dev-server)
@[repo](pengzhanbo/utils)
@[repo](pengzhanbo/vuepress-theme-plume)
:::
```

::: repo
@[repo fullname](pengzhanbo/vitepress-tuck)
@[repo](pengzhanbo/vite-plugin-mock-dev-server)
@[repo](pengzhanbo/utils)
@[repo](pengzhanbo/vuepress-theme-plume)
:::

## 卡片信息

每个仓库卡片会展示以下信息：

| 字段     | 说明                         |
| -------- | ---------------------------- |
| 仓库名   | 仓库名称或 `owner/name` 全名 |
| 可见性   | Public / Private 标签        |
| 归档状态 | 已归档时显示警告标记         |
| 描述     | 仓库描述文本                 |
| 主要语言 | 主要编程语言及对应颜色标记   |
| Star 数  | 格式化展示（如 `1.2k`）      |
| Fork 数  | 格式化展示（如 `1.2k`）      |
| 许可证   | 许可证名称（如有）           |

## 组件用法

你也可以直接使用 `VPRepoCard` 组件：

```vue
<script setup lang="ts">
import { VPRepoCard } from 'vitepress-plugin-repo-card/client'
</script>

<template>
  <VPRepoCard repo="vuejs/vitepress" register="github" />
  <VPRepoCard repo="owner/name" register="gitee" fullname />
</template>
```

### Props

| 属性       | 类型                  | 默认值     | 说明                        |
| ---------- | --------------------- | ---------- | --------------------------- |
| `repo`     | `string`              | (必填)     | `owner/name` 格式的仓库标识 |
| `register` | `'github' \| 'gitee'` | `'github'` | 仓库平台                    |
| `fullname` | `boolean`             | -          | 显示 `owner/name` 完整名称  |
