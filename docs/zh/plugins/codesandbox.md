# CodeSandbox

将 [CodeSandbox](https://codesandbox.io/) 项目嵌入到 VitePress 页面中。

## 安装

::: npm-to

```sh
npm install vitepress-plugin-code-sandbox
```

:::

## 使用

### vitepress-tuck 模式 <Badge type="tip">推荐</Badge>

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress-tuck'
import codeSandbox from 'vitepress-plugin-code-sandbox'

export default defineConfig({
  plugins: [codeSandbox()],
})
```

[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}

### 传统模式

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress'
import { codeSandboxMarkdownPlugin } from 'vitepress-plugin-code-sandbox'

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(codeSandboxMarkdownPlugin)
    },
  },
})
```

## 语法

### 嵌入模式（默认）

```md
@[codesandbox](5wyzu)
```

### 按钮模式

使用 `button` 参数创建按钮链接，而非内嵌框架：

```md
@[codesandbox button](5wyzu)
```

### 指定workspace

```md
@[codesandbox](workspace/5wyzu)
```

### 指定文件

使用 `#` 指定要打开的默认文件：

```md
@[codesandbox](workspace/5wyzu#src/App.vue)
```

### 完整配置

```md
@[codesandbox title="示例" layout="Editor+Preview" width="100%" height="500px"](workspace/5wyzu#filepath)
```

### 属性说明

| 属性       | 类型      | 默认值             | 说明                  |
| ---------- | --------- | ------------------ | --------------------- |
| `title`    | `string`  | -                  | 标题                  |
| `user`     | `string`  | -                  | 用户名（从链接解析）  |
| `id`       | `string`  | -                  | 项目 ID（从链接解析） |
| `layout`   | `string`  | `'Editor+Preview'` | 布局模式              |
| `filepath` | `string`  | -                  | 默认打开的文件路径    |
| `navbar`   | `boolean` | `true`             | 是否显示导航栏        |
| `console`  | `boolean` | `false`            | 是否显示控制台        |
| `width`    | `string`  | `'100%'`           | 宽度                  |
| `height`   | `string`  | -                  | 高度                  |

## 示例

```md
@[codesandbox button](reaction/5wyzu)
```

@[codesandbox button](reaction/5wyzu)

```md
@[codesandbox button](reaction/5wyzu)
```

@[codesandbox](reaction/5wyzu)
