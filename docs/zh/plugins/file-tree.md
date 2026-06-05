# File Tree

<NpmBadge name="vitepress-plugin-file-tree" />

文件树展示插件，用于在 Markdown 中渲染文件目录结构。

## 安装

::: npm-to

```sh
npm install vitepress-plugin-file-tree
```

:::

## 使用

### vitepress-tuck 模式 <Badge type="tip">推荐</Badge>

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress-tuck'
import fileTree from 'vitepress-plugin-file-tree'

export default defineConfig({
  plugins: [fileTree()],
})
```

[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}

### 传统模式

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress'
import { fileTreeMarkdownPlugin } from 'vitepress-plugin-file-tree'

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(fileTreeMarkdownPlugin)
    },
  },
})
```

```ts [.vitepress/theme/index.ts]
import type { Theme } from 'vitepress'
import { enhanceAppWithFileTree } from 'vitepress-plugin-file-tree/client'
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    enhanceAppWithFileTree(ctx)
  },
} satisfies Theme
```

## 语法

使用 `::: file-tree` 容器，通过缩进表示文件层级：

```md
::: file-tree title="项目结构"

- src/
  - components/
    - Button.vue
    - Nav.vue
  - index.ts
- package.json
- tsconfig.json

:::
```

### 节点标注

每个节点可以添加特殊标注：

| 语法            | 说明                 |
| --------------- | -------------------- |
| `**文件名**`    | 高亮聚焦该文件       |
| `-- 文件名`     | 标记为删除           |
| `++ 文件名`     | 标记为新增           |
| `文件名 # 注释` | 添加注释             |
| `folder/`       | 标记为文件夹, 并折叠 |
| `…`             | 省略标记             |

```md
::: file-tree title="变更的文件"

- src/
  - -- old-file.ts
  - ++ new-file.ts
  - **main.ts** # 核心入口
  - …

:::
```

## 示例

```md
::: file-tree

- docs
  - .vitepress
    - ++ config.ts
  - -- page1.md
  - index.md
- theme  # 一个 **主题** 目录
  - client
    - components
      - **Navbar.vue**
    - composables
      - useNavbar.ts
    - styles
      - navbar.css
    - config.ts
  - node/
- package.json
- pnpm-lock.yaml
- .gitignore
- README.md
- …
:::
```

::: file-tree

- docs
  - .vitepress
    - ++ config.ts
  - -- page1.md
  - index.md
- theme  # 一个 **主题** 目录
  - client
    - components
      - **Navbar.vue**
    - composables
      - useNavbar.ts
    - styles
      - navbar.css
    - config.ts
  - node/
- package.json
- pnpm-lock.yaml
- .gitignore
- README.md
- …
:::
