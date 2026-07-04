# vitepress-plugin-mark

Add mark (highlight) support to your VitePress site, rendering `==text==` syntax
as an animated highlight that fills from left to right when scrolled into view.

为 VitePress 添加马克笔（高亮）支持，将 `==文本==` 语法渲染为滚动进入视口时
从左向右填充的高亮动画。

## Usage

### With Vitepress-tuck

**Installation:**

```bash
# npm
npm install -D vitepress-tuck vitepress-plugin-mark
# pnpm
pnpm add -D vitepress-tuck vitepress-plugin-mark
# yarn
yarn add -D vitepress-tuck vitepress-plugin-mark
```

**Configuration:**

```ts
// .vitepress/config.ts
import mark from 'vitepress-plugin-mark'
import { defineConfig } from 'vitepress-tuck'

export default defineConfig({
  plugins: [mark()],
})
```

```ts
// .vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import enhanceApp from 'virtual:enhance-app'
import DefaultTheme from 'vitepress/theme'
import 'vitepress-plugin-mark/style.css'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    enhanceApp(ctx)
  },
} satisfies Theme
```

### With Vitepress

**Installation:**

```bash
# npm
npm install -D vitepress-plugin-mark
# pnpm
pnpm add -D vitepress-plugin-mark
# yarn
yarn add -D vitepress-plugin-mark
```

**Configuration:**

```ts
// .vitepress/config.ts
import { defineConfig } from 'vitepress'
import { markdownPlugin } from 'vitepress-plugin-mark'

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(markdownPlugin)
    },
  },
})
```

```ts
// .vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import { enhanceAppWithMark } from 'vitepress-plugin-mark/client'
import 'vitepress-plugin-mark/style.css'
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    enhanceAppWithMark(ctx)
  },
} satisfies Theme
```

## Syntax

Wrap inline content with `==` markers to render it as a highlighted `<mark>`
element. The marker uses a nested inline rule, so standard inline markdown
syntax (bold, italic, links, code, etc.) inside the markers is fully parsed.

使用 `==` 标记包裹内联内容，将其渲染为高亮的 `<mark>` 元素。该标记使用嵌套
内联规则，因此标记内部的标准内联 markdown 语法（加粗、斜体、链接、代码等）
会被完整解析。

```md
==Marked text==

==Marked **bold** text==

==Marked [link](https://example.com)==
```

When the rendered element scrolls into the viewport, a fill-from-left highlight
animation plays once, giving the marked text a vivid emphasis effect.

当渲染的元素滚动进入视口时，会播放一次从左向右填充的高亮动画，使马克笔文本
具有生动的强调效果。

### Color Variants

Apply different highlight colors by appending an attrs syntax with a variant
class to the marker. The available variants correspond to VitePress's container
types.

通过在标记后追加带变体类的 attrs 语法来应用不同的高亮颜色。可用的变体与
VitePress 的容器类型相对应。

| Variant      | Description                                                    | 说明                   |
| ------------ | -------------------------------------------------------------- | ---------------------- |
| _(default)_  | Yellow highlight / 黄色高亮                                    | `==text==`             |
| `.note`      | Cyan highlight / 青色高亮                                      | `==text=={.note}`      |
| `.info`      | Neutral gray highlight / 中性灰色高亮                          | `==text=={.info}`      |
| `.tip`       | Green highlight / 绿色高亮                                     | `==text=={.tip}`       |
| `.warning`   | Gold/amber highlight / 金色/琥珀色高亮                         | `==text=={.warning}`   |
| `.caution`   | Pink highlight (alias: `.danger`) / 粉色高亮（别名 `.danger`） | `==text=={.caution}`   |
| `.important` | Lavender/purple highlight / 淡紫色高亮                         | `==text=={.important}` |

```md
==Default mark==

==Note mark=={.note}

==Info mark=={.info}

==Tip mark=={.tip}

==Warning mark=={.warning}

==Caution mark=={.caution}

==Important mark=={.important}
```

Each variant automatically adjusts its color for dark mode.

每个变体都会自动适配暗色模式下的颜色。

## Component

The `VPMark` component is also available for direct use:

`VPMark` 组件也可直接使用：

```vue
<VPMark>Highlighted text</VPMark>
<VPMark class="tip">Tip highlight</VPMark>
```

## Customization

The highlight appearance can be customized via the following CSS variables,
which can be overridden in your theme styles:

可以通过以下 CSS 变量自定义高亮外观，在你的主题样式中覆盖即可：

| Variable                 | Description                                                         | 说明                                |
| ------------------------ | ------------------------------------------------------------------- | ----------------------------------- |
| `--vp-mark-text`         | Text color (default: `currentcolor`)                                | 文本颜色（默认 `currentcolor`）     |
| `--vp-mark-bg`           | Background color (default: `transparent`)                           | 背景颜色（默认 `transparent`）      |
| `--vp-mark-linear-color` | Highlight fill color (default: `#ff0`)                              | 高亮填充颜色（默认 `#ff0`）         |
| `--vp-mark-bg-image`     | Background image used for the fill (gradient)                       | 用于填充的背景图像（渐变）          |
| `--vp-mark-bg-shift`     | Vertical position shift of the background (default: `0.55lh`)       | 背景的垂直位置偏移（默认 `0.55lh`） |
| `--vp-mark-animation`    | Animation shorthand (default: `mark-highlight 1.25s 0.5s forwards`) | 动画简写                            |

```css
:root {
  --vp-mark-linear-color: #f0a;
}
```
