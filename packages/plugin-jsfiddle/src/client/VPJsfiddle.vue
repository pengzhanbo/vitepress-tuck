<script setup lang="ts">
import { useData } from 'vitepress/client'
import { computed } from 'vue'

const { source, title, tab, theme, width, height } = defineProps<{
  /** JSFiddle source identifier in the `user/id` format / JSFiddle 源标识符，格式为 `user/id` */
  source: string
  /** Iframe title for accessibility, defaults to `JS Fiddle` / iframe 标题用于无障碍访问，默认为 `JS Fiddle` */
  title?: string
  /** Comma-separated tabs to display (e.g. `js,css,html,result`) / 要显示的选项卡，以逗号分隔（例如 `js,css,html,result`） */
  tab: string
  /** Embed theme; `dark` forces dark mode, otherwise follows the site scheme / 嵌入主题；`dark` 强制暗色模式，否则跟随站点配色 */
  theme?: 'light' | 'dark'
  /** Iframe width, accepts CSS length values / iframe 宽度，接受 CSS 长度值 */
  width?: string
  /** Iframe height, accepts CSS length values / iframe 高度，接受 CSS 长度值 */
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
