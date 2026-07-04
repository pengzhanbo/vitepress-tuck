# 马克笔

<NpmBadge name="vitepress-plugin-mark" />

马克笔插件，为 Markdown 添加 `==高亮==` 语法支持，渲染为带滚动触发动画的高亮文本，支持多种颜色变体。

## 安装

::: npm-to

```sh
npm install vitepress-plugin-mark
```

:::

## 使用

### vitepress-tuck 模式 <Badge type="tip">推荐</Badge>

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress-tuck'
import mark from 'vitepress-plugin-mark'

export default defineConfig({
  plugins: [mark()],
})
```

[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}

### 传统模式

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress'
import { markdownPlugin } from 'vitepress-plugin-mark' // [!code ++]

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(markdownPlugin) // [!code ++]
    },
  },
})
```

在主题中注册组件并引入样式：

```ts [.vitepress/theme/index.ts]
import type { Theme } from 'vitepress'
import { enhanceAppWithMark } from 'vitepress-plugin-mark/client' // [!code ++]
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    enhanceAppWithMark(ctx) // [!code ++]
  },
} satisfies Theme
```

## 语法

使用 `==` 包裹内联内容，将其渲染为高亮的 `<mark>` 元素。当元素滚动进入视口时，
会播放一次从左向右填充的高亮动画，使马克笔文本具有生动的强调效果。

```md
==马克笔== 文本
```

**渲染结果：**

==马克笔== 文本

标记内部支持完整的内联 Markdown 语法（加粗、斜体、链接、代码等）：

```md
==**加粗**==、==*斜体*==、==[链接](https://example.com)==、==`代码`==
```

**渲染结果：**

==**加粗**==、==*斜体*==、==[链接](https://example.com)==、==`代码`==

## 颜色变体

通过在标记后追加 [attrs 属性语法](https://vitepress.dev/guide/markdown#attribute) 指定不同的高亮颜色。
变体名与 VitePress 容器类型对应，并自动适配暗色模式。

```md
==默认==
==note=={.note}
==info=={.info}
==tip=={.tip}
==warning=={.warning}
==caution=={.caution}
==important=={.important}
```

**渲染结果：**

==默认==

==note=={.note}

==info=={.info}

==tip=={.tip}

==warning=={.warning}

==caution=={.caution}

==important=={.important}

### 变体说明

| 变体         | 说明                       |
| ------------ | -------------------------- |
| _(默认)_     | 黄色高亮                   |
| `.note`      | 青色高亮                   |
| `.info`      | 中性灰色高亮               |
| `.tip`       | 绿色高亮                   |
| `.warning`   | 金色/琥珀色高亮            |
| `.caution`   | 粉色高亮（别名 `.danger`） |
| `.important` | 淡紫色高亮                 |

## 自定义

通过覆盖以下 CSS 变量自定义高亮外观，在你的主题样式中覆盖：

```css
:root {
  --vp-mark-linear-color: #f0a;
}
```

| 变量                     | 说明                       | 默认值                               |
| ------------------------ | -------------------------- | ------------------------------------ |
| `--vp-mark-text`         | 文本颜色                   | `currentcolor`                       |
| `--vp-mark-bg`           | 背景颜色                   | `transparent`                        |
| `--vp-mark-linear-color` | 高亮填充颜色               | `#ff0`                               |
| `--vp-mark-bg-image`     | 用于填充的背景图像（渐变） | `linear-gradient(to right, ...)`     |
| `--vp-mark-bg-shift`     | 背景的垂直位置偏移         | `0.55lh`                             |
| `--vp-mark-animation`    | 动画简写                   | `mark-highlight 1.25s 0.5s forwards` |

还可以通过自定义 css 类名，扩展高亮颜色变体：

```css
mark.custom {
  --vp-mark-linear-color: #f0a;
}
```

```md
==自定义变体=={.custom}
```

**渲染结果：**

==自定义变体=={.custom}

<style>
mark.custom {
  --vp-mark-linear-color: #f0a;
}
</style>
