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
      <img :src="`https://npmx.dev/api/registry/badge/version/${normalizedName}`" alt="npm version">
    </a>
    <img :src="`https://npmx.dev/api/registry/badge/downloads/${normalizedName}`" alt="npm monthly downloads">
    <img :src="`https://npmx.dev/api/registry/badge/size/${normalizedName}`" alt="npm size">
    <img :src="`https://npmx.dev/api/registry/badge/license/${normalizedName}`" alt="npm license">
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
