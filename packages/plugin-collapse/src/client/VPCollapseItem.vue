<script setup lang="ts">
/**
 * Single collapse item, must be used inside `<VPCollapse>`.
 *
 * 单个折叠面板项，必须在 `<VPCollapse>` 内部使用。
 *
 * - Renders a clickable header (with the `title` slot) and a collapsible
 *   content area (default slot).
 * - In accordion mode, the item reads the shared `index` from the collapse
 *   context and toggles it; expanding one item collapses all others.
 * - Outside accordion mode, each item toggles its own `expanded` state
 *   independently.
 *
 * - 渲染可点击的头部（使用 `title` 插槽）和可折叠的内容区域（默认插槽）。
 * - 手风琴模式下，该项从折叠面板上下文读取共享的 `index` 并进行切换；
 *   展开一项会自动收起其他项。
 * - 非手风琴模式下，每项独立切换自身的 `expanded` 状态。
 *
 * @prop expand - Whether this item is expanded (ignored in accordion mode) / 是否展开该项（手风琴模式下忽略）
 * @prop index - Zero-based index within the parent collapse / 在父级折叠面板中的索引（从 0 开始）
 */
import { FadeInExpandTransition } from 'vitepress-plugin-toolkit/client'
import { inject, ref, watch } from 'vue'
import { COLLAPSE_KEY } from './constants.js'

const { expand, index } = defineProps<{
  expand?: boolean
  index: number
}>()

const collapse = inject(COLLAPSE_KEY)

if (import.meta.env.DEV && !collapse) {
  throw new Error('<VPCollapseItem /> must be used inside <VPCollapse />')
}

const expanded = ref(
  collapse?.accordion && typeof collapse.index.value !== 'undefined'
    ? index === collapse.index.value
    : expand,
)

if (collapse?.accordion) {
  watch(collapse?.index, () => {
    expanded.value = collapse?.index.value === index
  })
}

function toggle() {
  if (collapse?.accordion) {
    if (collapse.index.value === index && expanded.value) {
      expanded.value = false
    }
    else {
      collapse!.index.value = index!
      expanded.value = true
    }
  }
  else {
    expanded.value = !expanded.value
  }
}
</script>

<template>
  <div class="vp-collapse-item" :class="{ expanded }">
    <div
      class="vp-collapse-header"
      tabindex="0" role="button" :aria-expanded="expanded ? 'true' : 'false'"
      @click="toggle" @keydown.enter.prevent="toggle" @keydown.space.prevent="toggle"
    >
      <span class="vpi-chevron-right" />
      <p class="vp-collapse-title">
        <slot name="title" />
      </p>
    </div>
    <FadeInExpandTransition>
      <div v-show="expanded" class="vp-collapse-content">
        <div class="vp-collapse-content-inner">
          <slot />
        </div>
      </div>
    </FadeInExpandTransition>
  </div>
</template>
