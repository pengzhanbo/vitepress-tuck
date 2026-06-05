<script lang="ts" setup>
import { isFunction } from '@pengzhanbo/utils'
import { useScrollLock } from '@vueuse/core'
import { defaultOptions, locales } from 'virtual:vitepress-mermaid'
import { VPLoading } from 'vitepress-plugin-toolkit/client'
import { inBrowser, useData } from 'vitepress/client'
import { computed, onMounted, ref, useId, watch } from 'vue'
import { useMermaidOptions } from './mermaidOptions.js'

const { graph } = defineProps<{ graph: string }>()

const DEFAULT_CHART_OPTIONS = { useMaxWidth: false }

const { themeVariables: defaultThemeVariables, ...defaultMermaidOptions } = defaultOptions
const { themeVariables, ...mermaidOptions } = useMermaidOptions()
const { isDark, localeIndex } = useData()
const id = useId()

const loaded = ref(false)
const svgCode = ref('')
const tab = ref<'chart' | 'source'>('chart')

const locale = computed(() => {
  return locales[localeIndex.value] || locales.root || {}
})

async function renderMermaid(): Promise<void> {
  loaded.value = false
  // @ts-expect-error use esm module
  const { default: mermaid } = await import(/* webpackChunkName: "mermaid" */ 'mermaid/dist/mermaid.esm.min.mjs')

  mermaid.initialize({
    theme: isDark.value ? 'dark' : 'default',
    themeVariables: {
      dark: isDark.value,
      ...defaultThemeVariables,
      ...(isFunction(themeVariables)
        ? themeVariables(isDark.value)
        : themeVariables),
    },
    flowchart: DEFAULT_CHART_OPTIONS,
    sequence: DEFAULT_CHART_OPTIONS,
    journey: DEFAULT_CHART_OPTIONS,
    gantt: DEFAULT_CHART_OPTIONS,
    er: DEFAULT_CHART_OPTIONS,
    pie: DEFAULT_CHART_OPTIONS,
    ...defaultMermaidOptions,
    ...mermaidOptions,
    startOnLoad: false,
  })

  svgCode.value = (await mermaid.render(id, decodeURIComponent(graph))).svg
  loaded.value = true
}

onMounted(() => {
  watch(isDark, renderMermaid, { flush: 'post', immediate: true })
})

function onDownload() {
  if (!loaded.value)
    return
  const blob = new Blob([svgCode.value], { type: 'image/svg+xml' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'mermaid.svg'
  a.click()
  URL.revokeObjectURL(url)
}

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
        <button :class="{ active: tab === 'chart' }" @click="tab = 'chart'">
          {{ locale.chart }}
        </button>
        <button :class="{ active: tab === 'source' }" @click="tab = 'source'">
          {{ locale.source }}
        </button>
      </div>
      <div class="mermaid-actions">
        <button @click="onDownload">
          <span class="vpi-download" />
          {{ locale.download }}
        </button>
        <button @click="onFullscreen">
          <span class="vpi-fullscreen" />
          {{ locale.fullscreen }}
        </button>
      </div>
    </div>
    <div v-show="tab === 'chart'" class="mermaid-view" v-html="svgCode" />
    <VPLoading v-if="!loaded && tab === 'chart'" />
    <div v-show="tab === 'source'" class="mermaid-source">
      <slot name="source" />
    </div>
  </div>
</template>
