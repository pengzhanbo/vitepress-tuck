<script lang="ts" setup>
import { useFullscreen } from '@vueuse/core'
import { useZoomAndDrag, VPLoading, VPTabSwitch } from 'vitepress-plugin-toolkit/client'
import { computed, useTemplateRef, watch } from 'vue'
import { useDownload } from './composables/download.js'
import { useLocale } from './composables/locales.js'
import { useMermaidRender } from './composables/render.js'
import { useTabs } from './composables/tabs.js'

const { graph } = defineProps<{ graph: string }>()

const svgEl = useTemplateRef<HTMLDivElement>('svgEl')

const locale = useLocale()
const { loaded, svg } = useMermaidRender(computed(() => graph))
const { tab, tabs } = useTabs()
const { actorStyle, reset, zoom, zoomIn, zoomOut, resetZoom } = useZoomAndDrag(svgEl)

const download = useDownload(svgEl, loaded)
const { isFullscreen, isSupported, enter } = useFullscreen(svgEl)
watch(isFullscreen, newVal => reset(newVal))
</script>

<template>
  <div class="vp-mermaid">
    <div class="mermaid-header">
      <VPTabSwitch v-model="tab" :items="tabs" />

      <div class="mermaid-actions" data-allow-mismatch>
        <button @click="download('svg')">
          <span class="vpi-download" />
          SVG
        </button>
        <button @click="download('png')">
          <span class="vpi-download" />
          PNG
        </button>
        <button v-if="isSupported" class="fullscreen" @click="enter">
          <span class="vpi-fullscreen" />
          {{ locale.fullscreen }}
        </button>
      </div>
    </div>

    <div v-show="tab === 'chart'" ref="svgEl" class="mermaid-view">
      <div class="content" :style="actorStyle" v-html="svg" />
      <div class="mermaid-zoom" :class="{ fullscreen: isFullscreen }">
        <button @click="zoomOut">
          <span class="vpi-zoom-out" />
        </button>
        <span data-allow-mismatch>{{ zoom }}</span>
        <button @click="zoomIn">
          <span class="vpi-zoom-in" />
        </button>
        <button @click="resetZoom">
          <span class="vpi-zoom-reset" />
        </button>
      </div>
    </div>
    <VPLoading v-if="!loaded && tab === 'chart'" />

    <div v-show="tab === 'source'" class="mermaid-source">
      <slot name="source" />
    </div>
  </div>
</template>
