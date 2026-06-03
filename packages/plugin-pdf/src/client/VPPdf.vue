<script setup lang="ts">
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
