<script setup lang="ts">
import { useEventListener } from '@vueuse/core'
import { useData } from 'vitepress/client'
import { computed, ref } from 'vue'

/**
 * Message data received from the Can I Use embed iframe via `postMessage`.
 *
 * 通过 `postMessage` 从 Can I Use 嵌入 iframe 接收的消息数据。
 */
interface MessageData {
  type: string
  payload?: {
    feature?: string
    meta?: string
    height: number
  }
}

const { feature, past = 2, future = 1, meta = '', baseline = false } = defineProps<{
  /** Feature identifier to look up on Can I Use / 要在 Can I Use 上查询的特性标识符 */
  feature: string
  /** Number of past browser versions to display / 要显示的过去浏览器版本数量 */
  past?: number
  /** Number of future browser versions to display / 要显示的未来浏览器版本数量 */
  future?: number
  /** Unique metadata key matching iframe messages / 匹配 iframe 消息的唯一元数据键 */
  meta?: string
  /** Whether to render the Baseline view / 是否渲染 Baseline 视图 */
  baseline?: boolean
}>()

const { isDark } = useData()

const url = 'https://caniuse.pengzhanbo.cn/'

const height = ref(baseline ? '150px' : '350px')
const source = computed(() => {
  const source = `${url}${feature}${baseline ? '/baseline#' : `#past=${past}&future=${future}&`}meta=${meta}&theme=${isDark.value ? 'dark' : 'light'}`

  return source
})

useEventListener('message', (event) => {
  const data = parseData(event.data)
  const { type, payload } = data
  if (
    type === 'ciu-embed'
    && payload
    && payload.feature === feature
    && payload.meta === meta
  ) {
    height.value = `${Math.ceil(payload.height)}px`
  }
})

/**
 * Parses incoming message data, handling both string and object payloads.
 *
 * 解析传入的消息数据，支持字符串和对象两种载荷格式。
 *
 * @param data - Raw message data from the iframe / 来自 iframe 的原始消息数据
 * @returns Parsed message data object / 解析后的消息数据对象
 */
function parseData(data: string | MessageData): MessageData {
  if (typeof data === 'string') {
    try {
      return JSON.parse(data)
    }
    catch {
      return { type: '' }
    }
  }
  return data
}
</script>

<template>
  <div class="vp-caniuse ciu_embed" :class="{ baseline }">
    <iframe :src="source" :style="{ height }" :title="`Can I use ${feature}`" />
  </div>
</template>
