<script setup lang="ts">
import { useEventListener, useFullscreen } from '@vueuse/core'
import { onContentUpdated } from 'vitepress'
import { ACTIVE_NODE_KEY, ON_NODE_CLICK, VPFileTree } from 'vitepress-plugin-file-tree/client'
import { computed, onMounted, provide, ref, shallowRef, useTemplateRef, watch } from 'vue'

const { title, height = '420px', entryFile, showSidebar = false } = defineProps<{
  /** Optional title displayed above the file tree sidebar. / 显示在文件树侧边栏上方的可选标题。 */
  title?: string
  /** Code tree container height, accepts any valid CSS height value. / 代码树容器高度，接受任意合法的 CSS 高度值。 */
  height?: string | number
  /** Entry file path, opened by default when the code tree renders. / 入口文件路径，代码树渲染时默认打开。 */
  entryFile: string
  /** Whether to show the sidebar by default. / 是否默认显示侧边栏。 */
  showSidebar?: boolean
}>()

// Active file path, controls which file content panel is visible
const activeNode = ref(entryFile || '')
const el = useTemplateRef('el')
const contentEl = useTemplateRef('contentEl')
// Cached list of file content elements with `data-filepath` attributes
const items = shallowRef<NodeListOf<HTMLElement> | null>(null)
// Whether the active file was not found among the content elements
const notFound = ref(false)
// Sidebar visibility state
const show = ref(showSidebar)
// Whether the viewport width is at most 768px (mobile)
const is768 = ref(false)

const { isFullscreen, toggle, isSupported } = useFullscreen(el)

const styles = computed(() => ({
  height: isFullscreen.value ? '100vh' : height,
}))

// Provide the active node and click handler to child VPFileTreeNode components
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
  // Track viewport width to hide fullscreen button on mobile
  is768.value = window.innerWidth <= 768
  useEventListener('resize', () => {
    is768.value = window.innerWidth <= 768
  })

  items.value = contentEl.value?.querySelectorAll('[data-filepath]') as NodeListOf<HTMLElement>
  // Toggle the `active` class on content elements based on the active file
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
      <button v-if="isSupported && !is768" @click="toggle">
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
        role="button" aria-label="Close"
        tabindex="0" @keydown.esc="show = false"
        @click="show = false"
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
