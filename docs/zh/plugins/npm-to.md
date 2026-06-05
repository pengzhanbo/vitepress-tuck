# Npm To

<NpmBadge name="vitepress-plugin-npm-to" />

将 npm 命令自动转换为其他包管理器（pnpm、yarn、bun、deno）的对应命令。

## 安装

::: npm-to

```sh
npm install vitepress-plugin-npm-to
```

:::

## 使用

### vitepress-tuck 模式 <Badge type="tip">推荐</Badge>

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress-tuck'
import npmTo from 'vitepress-plugin-npm-to'

export default defineConfig({
  plugins: [
    npmTo(['npm', 'pnpm', 'yarn']),
  ],
})
```

[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}

### 传统模式

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress'
import { npmToPlugin } from 'vitepress-plugin-npm-to'

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(npmToPlugin, ['npm', 'pnpm', 'yarn'])
    },
  },
})
```

## 语法

使用 `::: npm-to` 容器包裹 npm 命令，插件会自动转换为多标签代码组：

````md
::: npm-to
```sh
npm install vitepress-plugin-steps
```
:::
````

渲染后会显示为多个标签页，每个标签页展示对应包管理器的安装命令：

- **npm**: `npm install vitepress-plugin-steps`
- **pnpm**: `pnpm add vitepress-plugin-steps`
- **yarn**: `yarn add vitepress-plugin-steps`

### 支持的命令类型

插件支持以下 npm 命令的自动转换：

| 命令                    | 示例                  | 支持                           |
| ----------------------- | --------------------- | ------------------------------ |
| `npm install` / `npm i` | `npm install react`   | 转换为各包管理器的 add 命令    |
| `npm install` (无参数)  | `npm install`         | 转换为纯安装命令               |
| `npm uninstall`         | `npm uninstall react` | 转换为各包管理器的 remove 命令 |
| `npm run`               | `npm run build`       | 转换为各包管理器的 run 命令    |
| `npm create`            | `npm create vite`     | 转换为各包管理器的 create 命令 |
| `npm init`              | `npm init -y`         | 转换为各包管理器的 init 命令   |
| `npx`                   | `npx eslint .`        | 转换为各包管理器的等效命令     |
| `npm ci`                | `npm ci`              | 转换为各包管理器的 ci 命令     |

### 自定义标签

可以通过 `tabs` 属性指定要显示的标签：

````md
::: npm-to tabs="npm,pnpm"
```sh
npm install vitepress-plugin-steps
```
:::
````

## 配置

```ts
type NpmToPluginOptions =
  | NpmToPackageManager[]   // 如 ['npm', 'pnpm', 'yarn']
  | {
      tabs?: NpmToPackageManager[]
    }

type NpmToPackageManager = 'npm' | 'pnpm' | 'yarn' | 'bun' | 'deno'
```

- 默认显示 `npm`、`pnpm`、`yarn` 三个标签
- 支持 `bun` 和 `deno` 的转换

### 示例

````md
::: npm-to
```sh
npm install vitepress-plugin-steps
```
:::
````

::: npm-to

```sh
npm install vitepress-plugin-steps
```

:::
