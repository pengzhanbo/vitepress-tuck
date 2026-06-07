<script lang="ts" setup>
import { useScrollLock } from '@vueuse/core'
import { VPLoading } from 'vitepress-plugin-toolkit/client'
import { inBrowser } from 'vitepress/client'
import { computed, useTemplateRef } from 'vue'
import { useDownload } from '../composables/download.js'
import { useLocale } from '../composables/locales.js'
import { useMermaidRender } from '../composables/render.js'
import { useTabs } from '../composables/tabs.js'

const { graph } = defineProps<{ graph: string }>()

const svgContainer = useTemplateRef<HTMLDivElement>('svgContainer')

const locale = useLocale()
const { loaded, svgCode } = useMermaidRender(computed(() => graph))
const { tab, tabs } = useTabs()
const download = useDownload(svgContainer, loaded)

const isLocked = useScrollLock(() => inBrowser ? document.body : null)
function onFullscreen() {
  if (!loaded.value)
    return
  isLocked.value = true
  const div = document.createElement('div')
  div.classList.add('vp-mermaid-fullscreen')
  div.innerHTML = svgCode.value
  document.body.append(div)

  div.addEventListener('click', (event) => {
    if (event.target === div) {
      div.remove()
      isLocked.value = false
    }
  })
}
</script>

<template>
  <div class="vp-mermaid">
    <div class="mermaid-header">
      <div class="mermaid-tabs">
        <button
          v-for="item in tabs" :key="item.value"
          :class="{ active: tab === item.value }"
          @click="tab = item.value"
        >
          {{ item.label }}
        </button>
      </div>

      <div class="mermaid-actions">
        <button @click="download('svg')">
          <span class="vpi-download" />
          SVG
        </button>
        <button @click="download('png')">
          <span class="vpi-download" />
          PNG
        </button>
        <button class="fullscreen" @click="onFullscreen">
          <span class="vpi-fullscreen" />
          {{ locale.fullscreen }}
        </button>
      </div>
    </div>

    <div v-show="tab === 'chart'" ref="svgContainer" class="mermaid-view" v-html="svgCode" />
    <VPLoading v-if="!loaded && tab === 'chart'" />

    <div v-show="tab === 'source'" class="mermaid-source">
      <slot name="source" />
    </div>
  </div>
</template>
