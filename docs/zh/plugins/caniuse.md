# Can I Use

<NpmBadge name="vitepress-plugin-caniuse" />

嵌入 [caniuse.com](https://caniuse.com/) 的浏览器兼容性数据，在页面中展示 CSS/JS 特性的浏览器支持情况。

## 安装

::: npm-to

```sh
npm install vitepress-plugin-caniuse
```

:::

## 使用

### vitepress-tuck 模式 <Badge type="tip">推荐</Badge>

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress-tuck'
import caniuse from 'vitepress-plugin-caniuse'

export default defineConfig({
  plugins: [caniuse()],
})
```

[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}

### 传统模式

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress'
import { caniuseMarkdownPlugin } from 'vitepress-plugin-caniuse' // [!code ++]

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(caniuseMarkdownPlugin) // [!code ++]
    },
  },
})
```

```ts [.vitepress/theme/index.ts]
import type { Theme } from 'vitepress'
import { enhanceAppWithCaniuse } from 'vitepress-plugin-caniuse/client' // [!code ++]
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    enhanceAppWithCaniuse(ctx) // [!code ++]
  },
} satisfies Theme
```

## 语法

使用 `@[caniuse]()` 嵌入浏览器兼容性数据：

```md
@[caniuse](feature_name)
```

### Baseline 模式

使用 baseline 模式显示特性支持概览：

```md
@[caniuse baseline](feature_name)
```

### 自定义版本范围

通过 `{}` 指定版本范围：

```md
@[caniuse{-2,4}](feature_name)
@[caniuse baseline{-3,2}](feature_name)
```

- `{past, future}`: past 表示回溯的版本数，future 表示前瞻的版本数
- 默认值为 `{5, 2}`，即回溯 5 个版本，前瞻 3 个版本

### 获取 特性名称

在 [caniuse.com](https://caniuse.com/) 中搜索需要展示的特性，点击卡片左侧的 `#` ，即可在浏览器地址栏中获得特性名称。

::: details 不知道哪个部分为特性名称？
**以 css `grid` 为例**

在 caniuse.com 中搜索 `grid`，然后点击第一个卡片的 `#` ，浏览器地址栏地址变更为 `https://caniuse.com/css-grid`。
则特性名称为 `css-grid`。

在此处进行验证： <https://caniuse.com/?search=grid>
:::

## 示例

### 显示 `fetch` 特性的浏览器支持情况

```md
@[caniuse](fetch)
```

@[caniuse](fetch)

### 显示 `fetch` 特性的 baseline

```md
@[caniuse baseline](fetch)
```

@[caniuse baseline](fetch)
