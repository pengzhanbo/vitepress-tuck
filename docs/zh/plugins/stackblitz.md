# StackBlitz

<NpmBadge name="vitepress-plugin-stackblitz" />

将 [StackBlitz](https://stackblitz.com/) 项目嵌入到 VitePress 页面中。支持通过 StackBlitz ID、GitHub 仓库或本地项目文件来嵌入在线编辑器，也可以显示为按钮在新标签页中打开。

## 安装

::: npm-to

```sh
npm install vitepress-plugin-stackblitz
```

:::

## 使用

### vitepress-tuck 模式 <Badge type="tip">推荐</Badge>

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress-tuck'
import stackblitz from 'vitepress-plugin-stackblitz'

export default defineConfig({
  plugins: [stackblitz()],
})
```

[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}

### 传统模式

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress'
import { stackblitzMarkdownPlugin } from 'vitepress-plugin-stackblitz'

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(stackblitzMarkdownPlugin)
    },
  },
})
```

```ts [.vitepress/theme/index.ts]
import type { Theme } from 'vitepress'
import { enhanceAppWithStackBlitz } from 'vitepress-plugin-stackblitz/client'
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    enhanceAppWithStackBlitz(ctx)
  },
} satisfies Theme
```

## 语法

插件提供两种语法来嵌入 StackBlitz 项目：用于引用外部项目的嵌入语法，以及将项目文件直接内联在 Markdown 中的容器语法。

### 从 StackBlitz ID 嵌入

```md
@[stackblitz](sdk-github-project)
```

### 从 GitHub 仓库嵌入

```md
@[stackblitz github](user/repo)
```

### 嵌入本地项目

在项目目录中放置 `stackblitz.config.json`（或 `.yaml`、`.yml`）配置文件，然后使用 `local` 属性：

```md
@[stackblitz local](path/to/your/project)
```

`path` 支持以下路径前缀：

| 前缀 | 说明                             |
| ---- | -------------------------------- |
| `@`  | 相对于 VitePress `srcDir`        |
| `/`  | 相对于 VitePress 项目根目录      |
| -    | 相对于当前 markdown 文件所在目录 |

查看 [本地项目配置](#本地项目配置) 了解更多。

### 按钮模式

显示为按钮，点击后在新标签页中打开项目：

```md
@[stackblitz button](stackblitz-id)
```

也可以结合 `github` 使用：

```md
@[stackblitz github button](user/repo)
```

### 容器语法

将项目文件直接内联在 Markdown 中，适合简单项目的快速书写和演示：

````md
::: stackblitz title="Project" description="Project description" template="javascript"

```yml [config]
title: Project
template: javascript
description: Project description
```

```json [package.json]
{
  "name": "project",
  "version": "1.0.0"
}
```

```js [index.js]
console.log('Hello StackBlitz!');
```

```html [index.html]
<!DOCTYPE html>
<html lang="en">
<body>
  <h1>Hello StackBlitz!</h1>
  <script src="./index.js"></script>
</body>
</html>
```

:::
````

### 属性说明

#### 嵌入 / 打开选项

适用于嵌入语法和按钮模式：

| 属性               | 类型                                 | 默认值      | 说明                              |
| ------------------ | ------------------------------------ | ----------- | --------------------------------- |
| `theme`            | `'dark' \| 'light' \| 'default'`     | 自动        | 主题，自动跟随 VitePress 暗色模式 |
| `view`             | `'default' \| 'preview' \| 'editor'` | `'default'` | 初始视图模式                      |
| `height`           | `number`                             | `400`       | 嵌入高度（仅嵌入模式）            |
| `width`            | `number`                             | -           | 嵌入宽度（仅嵌入模式）            |
| `clickToLoad`      | `boolean`                            | `false`     | 显示"点击运行"提示                |
| `openFile`         | `string \| string[]`                 | -           | 默认打开的文件                    |
| `hideExplorer`     | `boolean`                            | `false`     | 隐藏文件浏览器                    |
| `hideDevTools`     | `boolean`                            | `false`     | 隐藏开发者工具                    |
| `showSidebar`      | `boolean`                            | `false`     | 显示侧边栏                        |
| `terminalHeight`   | `number` (0-100)                     | -           | 终端高度百分比                    |
| `devToolsHeight`   | `number` (0-100)                     | -           | 开发者工具高度百分比              |
| `newWindow`        | `boolean`                            | `false`     | 在新标签页中打开                  |
| `forceEmbedLayout` | `boolean`                            | `false`     | 强制嵌入布局（已弃用）            |
| `origin`           | `string`                             | -           | StackBlitz EE 实例地址            |

#### 项目选项

仅用于本地项目嵌入模式和容器语法：

| 属性           | 类型                                                                                                            | 默认值 | 说明                         |
| -------------- | --------------------------------------------------------------------------------------------------------------- | ------ | ---------------------------- |
| `title`        | `string`                                                                                                        | -      | 项目标题（必填）             |
| `description`  | `string`                                                                                                        | -      | 项目描述（必填）             |
| `template`     | `'angular-cli' \| 'create-react-app' \| 'html' \| 'javascript' \| 'typescript' \| 'polymer' \| 'vue' \| 'node'` | -      | 项目模板（必填）             |
| `dependencies` | `Record<string, string>`                                                                                        | -      | npm 依赖                     |
| `files`        | `Record<string, string>`                                                                                        | -      | 项目文件（本地模式自动加载） |

#### 构建设置

通过 `settings` 前缀属性设置，仅用于本地项目嵌入模式和容器语法：

| 属性                   | 类型                              | 默认值   | 说明                 |
| ---------------------- | --------------------------------- | -------- | -------------------- |
| `settingsTrigger`      | `'auto' \| 'save' \| 'keystroke'` | `'auto'` | 编译触发时机         |
| `settingsAction`       | `'hmr' \| 'refresh'`              | `'hmr'`  | 编译更新方式         |
| `settingsClearConsole` | `boolean`                         | `true`   | 编译后是否清除控制台 |

```md
@[stackblitz local title="Demo" description="A demo" template="html" settingsTrigger="save" settingsAction="refresh"](path/to/project)
```

## 本地项目配置

使用 `@[stackblitz local](path)` 嵌入本地项目时，插件会自动：

1. 加载指定目录下的所有文件（排除 `node_modules`）
2. 按顺序查找 `stackblitz.config.json`、`stackblitz.config.yaml`、`stackblitz.config.yml` 配置文件
3. 将配置文件中的选项与加载的文件合并

示例 `stackblitz.config.json`：

```json
{
  "$schema": "../../node_modules/vitepress-plugin-stackblitz/schema.json",
  "title": "Project",
  "description": "Project description",
  "template": "javascript",
  "dependencies": {
    "lodash": "^4.17.0"
  },
  "settings": {
    "trigger": "save"
  }
}
```

> [!TIP]
> 使用 `$schema` 字段可以在编辑器中获得配置文件的智能提示和校验支持。

## 示例

### StackBlitz ID 嵌入

```md
@[stackblitz](sdk-github-project)
```

@[stackblitz](sdk-github-project)

### 按钮模式

```md
@[stackblitz button](sdk-github-project)
```

@[stackblitz button](sdk-github-project)

### 容器语法

````md
::: stackblitz button

```yml [config]
title: Project
template: javascript
description: Project description
```

```json [package.json]
{
  "name": "project",
  "version": "1.0.0",
  "description": "Project description",
  "main": "index.js",
  "keywords": ["project"],
  "author": "Project Author",
  "license": "MIT"
}
```

```js [index.js]
console.log('Hello StackBlitz!');
```

```html [index.html]
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Project</title>
</head>
<body>
  <h1>Hello StackBlitz!</h1>
  <script src="./index.js"></script>
</body>
</html>
```

:::
````

::: stackblitz button

```yml [config]
title: Project
template: javascript
description: Project description
```

```json [package.json]
{
  "name": "project",
  "version": "1.0.0",
  "description": "Project description",
  "main": "index.js",
  "keywords": ["project"],
  "author": "Project Author",
  "license": "MIT"
}
```

```js [index.js]
console.log('Hello StackBlitz!');
```

```html [index.html]
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Project</title>
</head>
<body>
  <h1>Hello StackBlitz!</h1>
  <script src="./index.js"></script>
</body>
</html>
```

:::

### 本地项目嵌入

@[code-tree title="本地项目目录" entry="stackblitz.config.json"](./stack)

```md
@[stackblitz local](./stack)
```

@[stackblitz local](./stack)
