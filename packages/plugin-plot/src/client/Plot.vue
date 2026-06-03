<script setup lang="ts">
import { onClickOutside, useMediaQuery } from '@vueuse/core'
import { computed, onMounted, ref, useTemplateRef } from 'vue'

interface PlotProps {
  trigger?: 'hover' | 'click'
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

function onClick() {
  if (plot.value.trigger === 'click' || el.value?.classList.contains('click'))
    active.value = !active.value
}
</script>

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
