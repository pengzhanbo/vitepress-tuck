<script setup lang="ts">
import { computed } from 'vue'

const { name } = defineProps<{
  name: string
}>()

const normalizedName = computed(() => encodeURIComponent(name))
</script>

<template>
  <p class="vp-npm-badge">
    <a :href="`https://npmx.dev/package/${name}`" target="_blank">
      <img :src="`https://img.shields.io/npm/v/${normalizedName}?style=flat-square`" alt="npm version">
    </a>
    <img :src="`https://img.shields.io/npm/dm/${normalizedName}?style=flat-square`" alt="npm monthly downloads">
    <img :src="`https://img.shields.io/npm/unpacked-size/${normalizedName}?style=flat-square&label=install%20size`" alt="npm size">
    <img :src="`https://img.shields.io/npm/l/${normalizedName}?style=flat-square`" alt="npm license">
  </p>
</template>

<style>
.vp-npm-badge {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  justify-content: flex-start;
}

.vp-npm-badge img {
  margin: 0;
}
</style>
