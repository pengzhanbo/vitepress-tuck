<script setup lang="ts">
import { VPCopyButton } from 'vitepress-plugin-toolkit/client'

const { title, text } = defineProps<{ title?: string, text: string }>()
</script>

<template>
  <div class="vp-file-tree has-copy">
    <p v-if="title" class="vp-file-tree-title">
      {{ title }}
    </p>
    <VPCopyButton :text />
    <slot />
  </div>
</template>
