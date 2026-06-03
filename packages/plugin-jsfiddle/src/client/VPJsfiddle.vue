<script setup lang="ts">
import { useData } from 'vitepress/client'
import { computed } from 'vue'

const { source, title, tab, theme, width, height } = defineProps<{
  source: string
  title?: string
  tab: string
  theme?: 'light' | 'dark'
  width?: string
  height?: string
}>()

const { isDark } = useData()

const link = computed(() => {
  const themeMode = theme === 'dark' ? '/dark/' : isDark.value ? '/dark/' : ''
  return `https://jsfiddle.net/${source}/embedded/${tab}${themeMode}`
})
</script>

<template>
  <iframe
    class="vp-jsfiddle"
    :src="link"
    :title="title"
    frameborder="0"
    allowfullscreen="true"
    allowpaymentrequest="true"
    :style="{
      width,
      height,
      marginBlock: '16px',
      marginInline: '0',
      border: 'none',
      boxShadow: 'var(--vp-shadow-2)',
    }"
  />
</template>
