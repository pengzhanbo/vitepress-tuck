<script setup lang="ts">
import { useData } from 'vitepress/client'
import { computed } from 'vue'

const { user, slash, title, preview, editable, tab, theme, width, height } = defineProps<{
  /** CodePen user name owning the Pen / 拥有该 Pen 的 CodePen 用户名 */
  user: string
  /** Pen slug identifier used in the CodePen URL / Pen 标识，用于 CodePen URL 中 */
  slash: string
  /** Pen title displayed as the iframe `title` attribute / Pen 标题，作为 iframe 的 `title` 属性显示 */
  title?: string
  /** Whether to render the preview embed view / 是否渲染预览嵌入视图 */
  preview?: boolean
  /** Whether the embedded Pen is editable by the viewer / 嵌入的 Pen 是否可被查看者编辑 */
  editable?: boolean
  /** Comma-separated list of tabs to display / 要显示的选项卡列表，以逗号分隔 */
  tab?: string
  /** Embed theme, follows site theme when omitted / 嵌入主题，省略时跟随站点主题 */
  theme?: 'light' | 'dark'
  /** Iframe width, defaults to `100%` / iframe 宽度，默认为 `100%` */
  width?: string
  /** Iframe height, defaults to `400px` / iframe 高度，默认为 `400px` */
  height?: string
}>()

const CODEPEN_LINK = 'https://codepen.io/'

const { isDark } = useData()

/**
 * Builds the CodePen embed URL from the component props.
 *
 * 根据组件 props 构建 CodePen 嵌入 URL。
 *
 * The URL switches between preview and standard embed endpoints, and forwards
 * the `editable`, `tab`, and `theme` options as query parameters. When `theme`
 * is omitted, it falls back to the current site theme.
 *
 * URL 会在预览和标准嵌入端点之间切换，并将 `editable`、`tab` 和 `theme`
 * 选项作为查询参数传递。当省略 `theme` 时，回退到当前站点主题。
 *
 * @returns The fully qualified CodePen embed URL / 完整的 CodePen 嵌入 URL
 */
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
