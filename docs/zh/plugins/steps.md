# Steps

<NpmBadge name="vitepress-plugin-steps" />

步骤容器插件，用于在 Markdown 中创建步骤引导内容。

## 安装

::: npm-to

```sh
npm install vitepress-plugin-steps
```

:::

## 使用

### vitepress-tuck 模式 <Badge type="tip">推荐</Badge>

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress-tuck'
import steps from 'vitepress-plugin-steps'

export default defineConfig({
  plugins: [steps()],
})
```

[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}

### 传统模式

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress'
import { stepsMarkdownPlugin } from 'vitepress-plugin-steps'

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(stepsMarkdownPlugin)
    },
  },
})
```

同时在主题中引入样式：

```ts [.vitepress/theme/index.ts]
import 'vitepress-plugin-steps/style.css'
```

## 语法

使用 `::: steps` 容器包裹步骤内容，每个步骤以无序/有序列表项开头：

```md
::: steps

- 第一步

  第一步的描述内容

- 第二步

  第二步的描述内容

- 第三步

  第三步的描述内容，支持标题语法

:::
```

**渲染结果：**

::: steps

- 第一步

  第一步的描述内容

- 第二步

  第二步的描述内容

- 第三步

  第三步的描述内容，支持标题语法

:::
