<script setup lang="ts">
/**
 * VPQrcode component for rendering QR codes in VitePress.
 *
 * VPQrcode 组件，用于在 VitePress 中渲染二维码。
 *
 * Supports two display modes: standalone image (`img`) and card layout
 * (`card`) with title and content alongside the QR code. Automatically
 * resolves internal links, protocol links, and the current page URL when
 * the text is set to `.`.
 *
 * 支持两种显示模式：独立图片（`img`）和卡片布局（`card`），卡片布局在二维码
 * 旁边显示标题和内容。当 text 设置为 `.` 时，自动解析内部链接、协议链接和
 * 当前页面 URL。
 */
import type { QRCodeProps } from './types.js'
import { isLinkWithProtocol } from 'vitepress-plugin-toolkit/client'
import { inBrowser, withBase } from 'vitepress/client'
import { computed, onMounted, ref, watch } from 'vue'
import { attemptLoadLogo, generateQRCode } from './use-qrcode.js'

const { title, text, mode, align = 'left', reverse = false, width, level, version, mask, margin = 2, scale = 4, light, dark, logo, logoSize = '0.2' } = defineProps<QRCodeProps>()

const qrcode = ref('')
const parsedText = ref('')
const imgWidth = ref(300)
const isLink = ref(false)
const isInternalLink = ref(false)

/**
 * Computes the inline CSS custom property `--vp-qrcode-size` from the
 * `width` prop, when provided.
 *
 * 当提供 `width` prop 时，根据其值计算内联 CSS 自定义属性 `--vp-qrcode-size`。
 *
 * @returns A style object with the size custom property, or undefined / 包含尺寸自定义属性的对象，或 undefined
 */
const styles = computed(() => {
  const size = typeof width === 'number' ? width : width ? Number.parseInt(width) : undefined
  return size ? { '--vp-qrcode-size': `${size}px` } : undefined
})

/**
 * Parses the `text` prop into a renderable QR code payload.
 *
 * 将 `text` prop 解析为可渲染的二维码载荷。
 *
 * Resolution rules:
 * - `.` resolves to the current page URL (without query or hash).
 * - Protocol links (such as `https://`) are returned as-is, with `//`
 *   prefixed by the current protocol.
 * - Paths starting with `/` or `./` are treated as internal links and
 *   resolved with `withBase` against the current location.
 * - Other text is returned unchanged.
 *
 * 解析规则：
 * - `.` 解析为当前页面 URL（不含 query 和 hash）。
 * - 协议链接（例如 `https://`）原样返回，`//` 开头的会补上当前协议。
 * - 以 `/` 或 `./` 开头的路径视为内部链接，使用 `withBase` 相对当前位置解析。
 * - 其他文本原样返回。
 *
 * @returns The parsed text for QR code generation, or empty string / 解析后用于生成二维码的文本，或空字符串
 */
function parseText(): string | void {
  isLink.value = false
  if (!text || !inBrowser)
    return ''

  if (text === '.') {
    isInternalLink.value = true
    isLink.value = true
    return location.href.split(/[?#]/)[0]
  }

  if (isLinkWithProtocol(text)) {
    isLink.value = true
    return text.startsWith('//') ? `${location.protocol}${text}` : text
  }

  if (text.startsWith('/') || text.startsWith('./')) {
    isInternalLink.value = true
    isLink.value = true
    return new URL(withBase(text), location.href).toString()
  }

  return text
}

onMounted(async () => {
  watch(
    () => [text, level, version, mask, margin, scale, light, dark, logo, logoSize],
    async () => {
      const text = parseText()
      parsedText.value = text || ''
      if (!text) {
        qrcode.value = ''
        return
      }

      imgWidth.value = 300 * Math.round(window.devicePixelRatio || 1)
      qrcode.value = await generateQRCode(
        {
          text,
          logo: await attemptLoadLogo(text, logo, isInternalLink.value),
          logoSize,
        },
        {
          version,
          maskPattern: mask,
          width: imgWidth.value,
          margin,
          scale,
          color: { dark, light },
        },
      )
    },
    { immediate: true },
  )
})
</script>

<template>
  <div v-if="qrcode" class="vp-qrcode" :class="{ card: mode === 'card', reverse, [align]: true }">
    <div class="qrcode-content">
      <img
        class="qrcode-img"
        :src="qrcode"
        :alt="parsedText"
        :title="parsedText"
        :style="styles"
        :width="imgWidth" :height="imgWidth"
      >
      <div v-if="title && mode !== 'card'" class="qrcode-label">
        {{ title }}
      </div>
    </div>

    <div v-if="mode === 'card'" class="qrcode-info">
      <p v-if="title" class="qrcode-title">
        {{ title }}
      </p>
      <p v-if="parsedText">
        <a v-if="isLink" :href="parsedText" rel="noopener noreferrer" target="_blank">
          {{ parsedText }}
        </a>
        <span v-else v-html="parsedText.replaceAll('\n', '<br>')" />
      </p>
    </div>
  </div>
</template>
