<script setup lang="ts">
/**
 * A button component that copies the given text to the clipboard.
 *
 * 复制指定文本到剪贴板的按钮组件。
 *
 * @example
 * ```vue
 * <VPCopyButton text="Hello, world!" />
 * ```
 */
import { useClipboard } from '@vueuse/core'

/** Text to copy to the clipboard / 要复制到剪贴板的文本 */
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
