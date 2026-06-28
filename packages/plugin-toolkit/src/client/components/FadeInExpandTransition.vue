<script setup lang="ts">
import type { Component, VNode } from 'vue'
import { h, Transition, TransitionGroup, useSlots } from 'vue'

const { group, appear, width, mode = 'default', onLeave, onAfterLeave, onAfterEnter } = defineProps<{
  /* Whether to group transitions */
  group?: boolean
  appear?: boolean
  /* Whether to switch to the transition of `width` */
  width?: boolean
  mode?: 'default' | 'in-out' | 'out-in'
  onLeave?: () => void
  onAfterLeave?: () => void
  onAfterEnter?: () => void
}>()

function handleBeforeLeave(el: HTMLElement): void {
  el.style[width ? 'maxWidth' : 'maxHeight'] = `${width ? el.offsetWidth : el.offsetHeight}px`
  void el.offsetWidth
}

function handleLeave(el: HTMLElement): void {
  el.style[width ? 'maxWidth' : 'maxHeight'] = '0'
  void el.offsetWidth
  onLeave?.()
}

function handleAfterLeave(el: HTMLElement): void {
  el.style[width ? 'maxWidth' : 'maxHeight'] = ''
  onAfterLeave?.()
}

function handleEnter(el: HTMLElement): void {
  el.style.transition = 'none'
  if (width) {
    const memorizedWidth = el.offsetWidth
    el.style.maxWidth = '0'
    void el.offsetWidth
    el.style.transition = ''
    el.style.maxWidth = `${memorizedWidth}px`
  }
  else {
    const memorizedHeight = el.offsetHeight
    el.style.maxHeight = '0'
    void el.offsetWidth
    el.style.transition = ''
    el.style.maxHeight = `${memorizedHeight}px`
  }
  void el.offsetWidth
}

function handleAfterEnter(el: HTMLElement): void {
  el.style[width ? 'maxWidth' : 'maxHeight'] = ''
  onAfterEnter?.()
}

const slots = useSlots()

function FadeTransition(): VNode {
  return h(
    (group ? TransitionGroup : Transition) as Component,
    {
      name: width ? 'fade-in-width-expand' : 'fade-in-height-expand',
      appear,
      onEnter: handleEnter,
      onAfterEnter: handleAfterEnter,
      onBeforeLeave: handleBeforeLeave,
      onLeave: handleLeave,
      onAfterLeave: handleAfterLeave,
      ...(group ? undefined : { mode }),
    },
    slots,
  )
}
</script>

<template>
  <FadeTransition />
</template>
