<script setup lang="ts">
import { setupWatermark } from 'vitepress-plugin-watermark'
import Theme from 'vitepress/theme'
import { h, useAttrs, useSlots } from 'vue'

const slots = useSlots()
const attrs = useAttrs()

const Layout = () => h(Theme.Layout, attrs, slots)

setupWatermark({ enabled: false })
</script>

<template>
  <Layout />
</template>
