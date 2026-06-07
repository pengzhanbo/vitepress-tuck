<script setup lang="ts">
import { VPCopyButton } from 'vitepress-plugin-toolkit/client'
import { computed } from 'vue'

const { title, text } = defineProps<{ title?: string, text: string }>()

const content = computed(() => decodeURIComponent(text))
</script>

<template>
  <div class="vp-file-tree has-copy">
    <p v-if="title" class="vp-file-tree-title">
      {{ title }}
    </p>
    <VPCopyButton :text="content" />
    <slot />
  </div>
</template>
