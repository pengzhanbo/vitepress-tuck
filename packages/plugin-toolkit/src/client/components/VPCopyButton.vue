<script setup lang="ts">
import { useClipboard } from '@vueuse/core'

const { text } = defineProps<{ text: string }>()
const { copied, copy } = useClipboard()
</script>

<template>
  <button
    class="vp-copy" :class="{ copied }"
    aria-label="Copy"
    type="button"
    @click="copy(text)"
  />
</template>
