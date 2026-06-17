<script setup lang="ts">
/**
 * Vue component that renders an embedded PDF viewer.
 *
 * 渲染嵌入 PDF 查看器的 Vue 组件。
 *
 * The component is registered globally by `enhanceAppWithPDF` and is normally
 * generated from the `@[pdf]` markdown embed rule rather than used directly.
 * It measures its container with `useSize`, then delegates PDF rendering to
 * the `usePDF` composable, which selects the best embedding strategy
 * (PDF.js, iframe, or embed) based on the current browser.
 *
 * 该组件由 `enhanceAppWithPDF` 全局注册，通常通过 `@[pdf]` markdown
 * 嵌入规则生成，而非直接使用。它通过 `useSize` 测量容器尺寸，
 * 然后将 PDF 渲染委托给 `usePDF` 组合式函数，由后者根据当前浏览器
 * 选择最佳的嵌入策略（PDF.js、iframe 或 embed）。
 *
 * Props are described by the {@link PDFTokenProps} interface.
 *
 * Props 由 {@link PDFTokenProps} 接口定义。
 */
import { useSize } from 'vitepress-plugin-toolkit/client'
import { onMounted, toRefs, useTemplateRef } from 'vue'
import { type PDFTokenProps, usePDF } from './use-pdf.js'

const props = defineProps<PDFTokenProps>()

const options = toRefs(props)

const el = useTemplateRef<HTMLDivElement>('el')
const { width, height, resize } = useSize(el, options)

onMounted(() => {
  if (!el.value)
    return
  usePDF(el.value, props.src!, {
    page: props.page,
    zoom: props.zoom,
    noToolbar: props.noToolbar,
  })
  resize()
})
</script>

<template>
  <div
    ref="el" class="vp-pdf" :style="{
      width,
      height,
      position: 'relative',
      overflow: 'hidden',
      borderRadius: '4px',
      marginBlock: '16px',
    }"
  />
</template>
