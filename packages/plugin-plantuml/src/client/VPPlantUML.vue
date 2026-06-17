<script setup lang="ts">
/**
 * Vue component that renders a PlantUML diagram with interactive controls.
 *
 * Vue 组件，渲染 PlantUML 图表并提供交互控件。
 *
 * 该组件提供图表与源代码两个标签页切换，支持亮色/暗色主题自适应、
 * 缩放、全屏和下载等交互能力。亮色与暗色图片由 Markdown-it 插件
 * 预生成并通过默认插槽注入。
 */
import { useFullscreen } from '@vueuse/core'
import { useZoomAndDrag, VPTabSwitch } from 'vitepress-plugin-toolkit/client'
import { useData } from 'vitepress/client'
import { nextTick, onMounted, useTemplateRef, watch } from 'vue'
import { useLocale } from './composables/locales.js'
import { useTabs } from './composables/tabs.js'

const { isDark } = useData()
const { tab, tabs } = useTabs()
const locale = useLocale()
const el = useTemplateRef<HTMLDivElement>('el')
const { actorStyle, reset, zoom, zoomIn, zoomOut, resetZoom } = useZoomAndDrag(el)

const { isFullscreen, isSupported, enter } = useFullscreen(el)
watch(isFullscreen, newVal => reset(newVal))

onMounted(() => watch(isDark, () => {
  const img = el.value?.querySelector(isDark.value ? '.dark' : '.light') as HTMLImageElement
  if (!img)
    return
  img.onload = () => nextTick(reset)
}, { immediate: true }))

/**
 * Download the currently displayed PlantUML image.
 *
 * 下载当前显示的 PlantUML 图片。
 *
 * 根据当前主题选择对应的图片元素，触发浏览器下载行为。
 */
function download() {
  const img = el.value?.querySelector(isDark.value ? '.dark' : '.light') as HTMLImageElement
  if (!img)
    return
  const url = img.src
  const a = document.createElement('a')
  a.href = url
  a.download = ''
  a.click()
  a.remove()
}
</script>

<template>
  <div class="vp-plantuml">
    <div class="plantuml-header">
      <VPTabSwitch v-model="tab" :items="tabs" />

      <div class="plantuml-actions" data-allow-mismatch>
        <button @click="download">
          <span class="vpi-download" />
          {{ locale.download }}
        </button>
        <button v-if="isSupported" class="fullscreen" @click="enter">
          <span class="vpi-fullscreen" />
          {{ locale.fullscreen }}
        </button>
      </div>
    </div>
    <div v-show="tab === 'chart'" ref="el" class="plantuml-view">
      <div class="content" :style="actorStyle">
        <slot />
      </div>
      <div class="plantuml-zoom" :class="{ fullscreen: isFullscreen }">
        <button @click="zoomOut">
          <span class="vpi-zoom-out" />
        </button>
        <span>{{ zoom }}</span>
        <button @click="zoomIn">
          <span class="vpi-zoom-in" />
        </button>
        <button @click="resetZoom">
          <span class="vpi-zoom-reset" />
        </button>
      </div>
    </div>
    <div v-show="tab === 'source'" class="plantuml-source">
      <slot name="source" />
    </div>
  </div>
</template>
