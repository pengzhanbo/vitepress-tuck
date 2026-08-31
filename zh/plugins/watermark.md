---
url: /zh/plugins/watermark.md
---

# 水印

给站点添加水印的插件，纯客户端实现，无需 Node 侧配置。

## 安装

::: npm-to

```sh
npm install vitepress-plugin-watermark
```

:::

## 使用

此插件仅提供客户端 `setupWatermark` 函数，需要在 Layout 包装组件的 `<script setup>` 中调用。

创建一个自定义的 Layout 包装组件：

```vue [.vitepress/theme/Layout.vue]
<script setup lang="ts">
import { setupWatermark } from 'vitepress-plugin-watermark'
import Theme from 'vitepress/theme'
import { h, useAttrs, useSlots } from 'vue'

const slots = useSlots()
const attrs = useAttrs()

const Layout = () => h(Theme.Layout, attrs, slots)

setupWatermark()
</script>

<template>
  <Layout />
</template>
```

然后在主题中注册此 Layout：

```ts [.vitepress/theme/index.ts]
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'

export default {
  extends: DefaultTheme,
  Layout,
} satisfies Theme
```

## 配置

`setupWatermark` 接受一个可选的配置对象：

```ts
setupWatermark({
  enabled: true,
  content: '我的水印',
  fontColor: '#76747f',
  globalAlpha: 0.165,
  width: 200,
  height: 200,
  rotate: -22,
  fontSize: '16px',
  fontFamily: 'sans-serif',
})
```

| 选项                | 类型                                           | 默认值                                     | 说明                           |
| ------------------- | ---------------------------------------------- | ------------------------------------------ | ------------------------------ |
| `enabled`           | `boolean \| ((pageData: PageData) => boolean)` | `true`                                     | 是否启用水印，支持函数动态判断 |
| `content`           | `string`                                       | 站点标题                                   | 水印文本内容                   |
| `fontColor`         | `string`                                       | `'#76747f'`                                | 字体颜色                       |
| `globalAlpha`       | `number`                                       | `0.165`（普通模式）/ `0.005`（盲水印模式） | 透明度                         |
| `mode`              | `'default' \| 'blind'`                         | `'default'`                                | 水印模式，`'blind'` 为盲水印   |
| `width`             | `number`                                       | —                                          | 单个水印区域宽度               |
| `height`            | `number`                                       | —                                          | 单个水印区域高度               |
| `rotate`            | `number`                                       | —                                          | 旋转角度                       |
| `fontSize`          | `string`                                       | —                                          | 字体大小                       |
| `fontFamily`        | `string`                                       | —                                          | 字体                           |
| `fontStyle`         | `string`                                       | —                                          | 字体样式                       |
| `fontWeight`        | `string`                                       | —                                          | 字体粗细                       |
| `image`             | `string`                                       | —                                          | 图片水印 URL                   |
| `layout`            | `'default' \| 'grid'`                          | —                                          | 布局模式                       |
| `zIndex`            | `number`                                       | —                                          | CSS 层级                       |
| `mutationObserve`   | `boolean`                                      | —                                          | 启用 DOM 变化监听保护          |
| `monitorProtection` | `boolean`                                      | —                                          | 启用监控保护                   |
| `movable`           | `boolean`                                      | —                                          | 允许拖拽移动水印               |
| `parent`            | `Element \| string`                            | —                                          | 挂载的父元素                   |

更多配置项请参阅 [watermark-js-plus](https://github.com/zhensherlock/watermark-js-plus) 文档。

## 单页水印

通过页面的 frontmatter 控制单个页面的水印行为：

### 启用水印

```yaml
---
watermark: true
---
```

### 自定义文本

```yaml
---
watermark: 机密文件
---
```

### 完全自定义

```yaml
---
watermark:
  content: 草稿
  fontColor: '#ff0000'
  globalAlpha: 0.3
  rotate: 30
---
```

### 禁用特定页面

```yaml
---
watermark: false
---
```

### 动态启用水印

通过 `enabled` 函数基于页面路径动态控制：

```ts
setupWatermark({
  enabled: (pageData) => {
    // 仅在 guide/ 目录下的页面启用水印
    return pageData.relativePath.startsWith('guide/')
  },
})
```
