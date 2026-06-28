<script setup lang="ts">
/**
 * Root component of the collapse container.
 *
 * 折叠面板容器的根组件。
 *
 * Renders a list of `<VPCollapseItem>` children and provides the collapse
 * context via `provide`. In accordion mode, `index` tracks the currently
 * expanded item so children can coordinate mutual exclusion.
 *
 * 渲染一组 `<VPCollapseItem>` 子组件，并通过 `provide` 提供折叠面板上下文。
 * 手风琴模式下，`index` 用于跟踪当前展开项，使子组件能够协调互斥展开。
 *
 * @prop accordion - Enable accordion mode / 是否启用手风琴模式
 * @prop card - Render with card style / 是否使用卡片样式
 * @prop index - Default expanded item index (accordion mode) / 默认展开项索引（手风琴模式）
 */
import { provide, ref } from 'vue'
import { COLLAPSE_KEY } from './constants.js'

const { accordion = false, index } = defineProps<{
  accordion?: boolean
  card?: boolean
  index?: number
}>()

const currentIndex = ref<number | undefined>(index)

provide(COLLAPSE_KEY, { accordion, index: currentIndex })
</script>

<template>
  <div class="vp-collapse" :class="{ card }">
    <slot />
  </div>
</template>
