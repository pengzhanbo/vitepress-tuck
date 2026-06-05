# Plot

<NpmBadge name="vitepress-plugin-plot" />

隐文遮罩插件，通过点击或悬停来显示隐藏的文本内容。

## 安装

::: npm-to

```sh
npm install vitepress-plugin-plot
```

:::

## 使用

### vitepress-tuck 模式 <Badge type="tip">推荐</Badge>

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress-tuck'
import plot from 'vitepress-plugin-plot'

export default defineConfig({
  plugins: [
    plot({
      trigger: 'hover',  // 'hover' | 'click'，默认 'hover'
      effect: 'mask',    // 'mask' | 'blur'，默认 'mask'
    }),
  ],
})
```

[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}

### 传统模式

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress'
import { plotMarkdownPlugin } from 'vitepress-plugin-plot'

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(plotMarkdownPlugin, {
        trigger: 'hover',
        effect: 'mask',
      })
    },
  },
})
```

```ts
// .vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import { enhanceAppWithPlot } from 'vitepress-plugin-plot/client' // [!code ++]
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    enhanceAppWithPlot(ctx) // [!code ++]
  },
} satisfies Theme
```

## 语法

使用 `!!` 包裹隐藏文本：

```md
答案是 !!plot!!
```

使用 `classname` 设置交互行为：

```md
!!plot!!{.click .blur}
```

支持以下 `classname`

- `.click / .hover`：点击显示 / 鼠标悬停显示
- `.blur / .mask`：模糊效果 / 遮罩效果

## 配置

```ts
interface PlotOptions {
  /**
   * 触发方式
   * - 'hover': 鼠标悬停显示
   * - 'click': 点击显示
   * @default 'hover'
   */
  trigger?: 'hover' | 'click'

  /**
   * 隐藏效果
   * - 'mask': 遮罩效果（默认）
   * - 'blur': 模糊效果
   * @default 'mask'
   */
  effect?: 'mask' | 'blur'
}
```

## 示例

```md
鲁迅说过：“!!我没说这段话!!”
```

鲁迅说过：“!!我没说这段话!!”

```md
书山有路勤为径，!!学海无涯苦作舟!!{.click .blur}。
```

书山有路勤为径，!!学海无涯苦作舟!!{.click .blur}。
