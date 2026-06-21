<script setup lang="ts">
import { VPCopyButton } from 'vitepress-plugin-toolkit/client'
import { computed } from 'vue'

const { title, text } = defineProps<{
  /** Optional title displayed above the file tree. / 显示在文件树上方的可选标题。 */
  title?: string
  /** URL-encoded plain-text representation of the file tree for the copy button. / 文件树的 URL 编码纯文本，供复制按钮使用。 */
  text?: string
}>()

const content = computed(() => text ? decodeURIComponent(text) : '')
</script>

<template>
  <div class="vp-file-tree" :class="{ 'has-copy': text }">
    <slot name="title">
      <p v-if="title" class="vp-file-tree-title">
        {{ title }}
      </p>
    </slot>
    <VPCopyButton v-if="text" :text="content" />
    <div class="file-tree-content">
      <slot />
    </div>
  </div>
</template>
