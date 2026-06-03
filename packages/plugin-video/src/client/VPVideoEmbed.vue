<script setup lang="ts">
import { useSize } from 'vitepress-plugin-toolkit/client'
import { toRefs, useTemplateRef } from 'vue'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<{
  src: string
  title: string
  type?: string
  width?: string
  height?: string
  ratio?: string
}>()

const IFRAME_ALLOW = 'accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture'

const options = toRefs(props)

const el = useTemplateRef<HTMLIFrameElement>('el')
const { width, height, resize } = useSize(el, options)
</script>

<template>
  <ClientOnly>
    <iframe
      ref="el"
      class="vp-video-iframe" :class="type"
      :src="src"
      :title="title || type"
      :style="{ width, height, margin: '16px auto', border: 'none', borderRadius: '5px' }"
      v-bind="$attrs"
      :allow="IFRAME_ALLOW"
      @load="resize"
    />
  </ClientOnly>
</template>
