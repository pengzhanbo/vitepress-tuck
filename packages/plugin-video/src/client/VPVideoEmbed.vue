<script setup lang="ts">
import { useSize } from 'vitepress-plugin-toolkit/client'
import { toRefs, useTemplateRef } from 'vue'

defineOptions({
  inheritAttrs: false,
})

/**
 * Vue component that renders a third-party video (AcFun, Bilibili, YouTube) as
 * an iframe embed with responsive sizing.
 *
 * Vue 组件，将第三方视频（AcFun、Bilibili、YouTube）以 iframe 形式嵌入，
 * 并支持响应式尺寸调整。
 */
const props = defineProps<{
  /** Embeddable iframe source URL / 可嵌入的 iframe 源地址 */
  src: string
  /** Accessible title for the iframe / iframe 的无障碍标题 */
  title: string
  /** Video provider type (acfun, bilibili, youtube) / 视频提供商类型（acfun、bilibili、youtube） */
  type?: string
  /** Iframe width (CSS length) / iframe 宽度（CSS 长度值） */
  width?: string
  /** Iframe height (CSS length) / iframe 高度（CSS 长度值） */
  height?: string
  /** Iframe aspect ratio / iframe 宽高比 */
  ratio?: string
}>()

/**
 * Default `allow` policy for embedded iframes, enabling common playback-related
 * browser features.
 *
 * 嵌入 iframe 的默认 `allow` 策略，启用与播放相关的常见浏览器特性。
 */
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
