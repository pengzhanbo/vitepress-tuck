<script setup lang="ts">
import { useData } from 'vitepress/client'
import { computed } from 'vue'

const { user, slash, title, preview, editable, tab, theme, width, height } = defineProps<{
  user: string
  slash: string
  title?: string
  preview?: boolean
  editable?: boolean
  tab?: string
  theme?: 'light' | 'dark'
  width?: string
  height?: string
}>()

const CODEPEN_LINK = 'https://codepen.io/'

const { isDark } = useData()

const link = computed(() => {
  const middle = preview ? '/embed/preview/' : '/embed/'
  const params = new URLSearchParams()

  editable && params.set('editable', 'true')
  tab && params.set('default-tab', tab)

  const themeMode = theme ?? (isDark.value ? 'dark' : 'light')
  themeMode && params.set('theme-id', themeMode)

  return `${CODEPEN_LINK}${user}${middle}${slash}?${params.toString()}`
})
</script>

<template>
  <iframe
    :src="link"
    class="vp-codepen"
    :title="title"
    frameborder="0"
    loading="lazy"
    allowtransparency="true"
    allowfullscreen="true"
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
