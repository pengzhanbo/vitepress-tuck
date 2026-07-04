<script lang="ts" setup>
/**
 * VPMark component for rendering highlighted text with an interactive
 * highlight animation in VitePress.
 *
 * VPMark 组件，用于在 VitePress 中渲染带交互式高亮动画的文本。
 *
 * Wraps the native `<mark>` element and uses `@vueuse/core`'s
 * `useElementVisibility` to detect when the element scrolls into the
 * viewport. Once visible, the `active` class is applied, which triggers the
 * `mark-highlight` CSS animation defined in `style.css` — producing a vivid
 * fill-from-left highlight effect. The `rootMargin` is set to `-64px 0px 0px 0px`
 * so the animation fires only after the element passes the site header area,
 * and `threshold: 1` ensures the element is fully visible before firing.
 *
 * 包装原生 `<mark>` 元素，并使用 `@vueuse/core` 的 `useElementVisibility`
 * 检测元素何时滚动进入视口。一旦可见，便会应用 `active` 类，从而触发
 * `style.css` 中定义的 `mark-highlight` CSS 动画 —— 产生从左向右填充的
 * 生动高亮效果。`rootMargin` 设置为 `-64px 0px 0px 0px`，使动画仅在元素
 * 越过站点头部区域后才触发；`threshold: 1` 确保元素完全可见后才触发。
 *
 * Color variants are applied via classes (e.g. `.tip`, `.warning`) set on the
 * `<mark>` element through attrs syntax in markdown, such as
 * `==text=={.tip}`.
 *
 * 颜色变体通过 `<mark>` 元素上的类（如 `.tip`、`.warning`）应用，这些类
 * 由 markdown 中的 attrs 语法设置，例如 `==文本=={.tip}`。
 *
 * @example
 * ```vue
 * <VPMark>Highlighted text</VPMark>
 * <VPMark class="tip">Tip highlight</VPMark>
 * ```
 */
import { useElementVisibility } from '@vueuse/core'
import { useTemplateRef } from 'vue'

const mark = useTemplateRef('mark')
const active = useElementVisibility(mark as any, { rootMargin: '-64px 0px 0px 0px', threshold: 1 })
</script>

<template>
  <mark ref="mark" :class="{ active }"><slot /></mark>
</template>
