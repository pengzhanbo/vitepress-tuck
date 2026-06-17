<script setup lang="ts">
import { onClickOutside, useMediaQuery } from '@vueuse/core'
import { computed, onMounted, ref, useTemplateRef } from 'vue'

/**
 * Props for the Plot spoiler component.
 *
 * Plot 黑幕组件的属性。
 */
interface PlotProps {
  /** Trigger mode that reveals the hidden text / 触发方式，决定何时显示被隐藏的文本 */
  trigger?: 'hover' | 'click'
  /** Visual effect applied to the hidden text / 应用于隐藏文本的视觉效果 */
  effect?: 'mask' | 'blur'
}

const { trigger, effect } = defineProps<PlotProps>()

const isMobile = useMediaQuery('(max-width: 768px)')

const plot = computed(() => {
  return {
    trigger: isMobile.value ? 'click' : trigger ?? 'hover',
    effect: effect ?? 'mask',
  }
})
const active = ref(false)
const el = useTemplateRef<HTMLElement>('el')
const classes = ref<string[]>([])

onMounted(() => {
  if (!el.value)
    return
  const classList = el.value.classList
  if (!classList.contains('hover') && !classList.contains('click')) {
    classes.value.push(plot.value.trigger)
  }
  if (!classList.contains('mask') && !classList.contains('blur')) {
    classes.value.push(plot.value.effect)
  }
})

onClickOutside(el, () => {
  if (plot.value.trigger === 'click' || el.value?.classList.contains('click'))
    active.value = false
})

/**
 * Toggles the spoiler visibility when the trigger mode is `click`.
 *
 * 当触发方式为 `click` 时，切换黑幕的显示状态。
 */
function onClick() {
  if (plot.value.trigger === 'click' || el.value?.classList.contains('click'))
    active.value = !active.value
}
</script>

<!--
  Plot spoiler component.
  Renders inline text hidden behind a mask or blur effect, revealed on hover
  or click depending on the trigger mode.

  黑幕组件。
  渲染隐藏在遮罩或模糊效果之后的内联文本，根据触发方式在悬停或点击时显示。
-->
<template>
  <span
    ref="el"
    class="vp-plot"
    :class="[{ active }, ...classes]"
    v-bind="{ onClick }"
  >
    <slot />
  </span>
</template>
