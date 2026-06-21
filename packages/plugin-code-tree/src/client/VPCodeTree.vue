<script setup lang="ts">
import { useFullscreen } from '@vueuse/core'
import { onContentUpdated } from 'vitepress'
import { ACTIVE_NODE_KEY, ON_NODE_CLICK, VPFileTree } from 'vitepress-plugin-file-tree/client'
import { computed, onMounted, provide, ref, shallowRef, useTemplateRef, watch } from 'vue'

const { title, height = '420px', entryFile, showSidebar = false } = defineProps<{
  title?: string
  height?: string | number
  entryFile: string
  showSidebar?: boolean
}>()

const activeNode = ref(entryFile || '')
const el = useTemplateRef('el')
const contentEl = useTemplateRef('contentEl')
const items = shallowRef<NodeListOf<HTMLElement> | null>(null)
const notFound = ref(false)
const show = ref(showSidebar)

const { isFullscreen, toggle, isSupported } = useFullscreen(el)

const styles = computed(() => ({
  height: isFullscreen.value ? '100vh' : height,
}))

provide(ACTIVE_NODE_KEY, activeNode)
provide(ON_NODE_CLICK, (filepath: string, type: 'file' | 'folder') => {
  if (type === 'file') {
    activeNode.value = filepath
  }
})

onContentUpdated(() => {
  items.value = contentEl.value?.querySelectorAll('[data-filepath]') as NodeListOf<HTMLElement>
})

onMounted(() => {
  items.value = contentEl.value?.querySelectorAll('[data-filepath]') as NodeListOf<HTMLElement>
  watch([activeNode, items], () => {
    let hasActive = false
    items.value?.forEach((item) => {
      if (item.dataset.filepath === activeNode.value) {
        item.classList.add('active')
        hasActive = true
      }
      else {
        item.classList.remove('active')
      }
    })
    notFound.value = !hasActive
  }, { immediate: true })
})
</script>

<template>
  <div ref="el" class="vp-code-tree" :class="{ fullscreen: isFullscreen }">
    <div class="code-tree-actions" :style="styles">
      <button v-if="!isFullscreen" @click="show = !show">
        <span :class="`vpi-sidebar-${show ? 'open' : 'close'}`" />
      </button>
      <button v-if="isSupported" @click="toggle">
        <span class="vpi-fullscreen" />
      </button>
    </div>
    <Transition name="fade-in-right">
      <VPFileTree v-show="isFullscreen || show" :title="title" :style="styles">
        <slot name="file-tree" />
      </VPFileTree>
    </Transition>
    <Transition name="fade-in">
      <div
        v-show="show && !isFullscreen" class="code-tree-mask"
        tabindex="-1" role="button" aria-label="Close"
        @click="show = false" @keydown.esc="show = false"
      />
    </Transition>
    <div ref="contentEl" class="code-tree-content" :style="styles">
      <slot />
      <div v-show="notFound" class="code-tree-empty">
        <span class="vpi-code-tree-empty" />
      </div>
    </div>
  </div>
</template>
