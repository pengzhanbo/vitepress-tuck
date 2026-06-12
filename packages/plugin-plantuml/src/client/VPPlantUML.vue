<script setup lang="ts">
import { useScrollLock } from '@vueuse/core'
import { VPTabSwitch } from 'vitepress-plugin-toolkit/client'
import { inBrowser, useData } from 'vitepress/client'
import { computed, useTemplateRef } from 'vue'
import { useLocale } from './composables/locales.js'
import { useTabs } from './composables/tabs.js'

const { isDark } = useData()
const { tab, tabs } = useTabs()
const locale = useLocale()
const el = useTemplateRef<HTMLDivElement>('el')

const imgSelector = computed(() => isDark.value ? '.dark' : '.light')

function download() {
  const img = el.value?.querySelector(imgSelector.value) as HTMLImageElement
  if (!img)
    return
  const url = img.src
  const a = document.createElement('a')
  a.href = url
  a.download = ''
  a.click()
  a.remove()
}

const isLocked = useScrollLock(() => inBrowser ? document.body : null)
function onFullscreen() {
  const img = el.value?.querySelector(imgSelector.value) as HTMLImageElement
  if (!img)
    return
  isLocked.value = true
  const div = document.createElement('div')
  div.classList.add('vp-plantuml-fullscreen')
  div.appendChild(img.cloneNode(true))
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
  <div class="vp-plantuml">
    <div class="plantuml-header">
      <VPTabSwitch v-model="tab" :items="tabs" />

      <div class="plantuml-actions">
        <button @click="download">
          <span class="vpi-download" />
          {{ locale.download }}
        </button>
        <button class="fullscreen" @click="onFullscreen">
          <span class="vpi-fullscreen" />
          {{ locale.fullscreen }}
        </button>
      </div>
    </div>
    <div v-show="tab === 'chart'" ref="el" class="plantuml-view">
      <slot />
    </div>
    <div v-show="tab === 'source'" class="plantuml-source">
      <slot name="source" />
    </div>
  </div>
</template>
