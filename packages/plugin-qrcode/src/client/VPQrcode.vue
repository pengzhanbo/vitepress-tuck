<script setup lang="ts">
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

const styles = computed(() => {
  const size = typeof width === 'number' ? width : width ? Number.parseInt(width) : undefined
  return size ? { '--vp-qrcode-size': `${size}px` } : undefined
})

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
