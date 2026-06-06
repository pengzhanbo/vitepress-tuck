<script lang="ts" setup>
import { computed } from 'vue'

const { name, type, required, optional, deprecated, defaultValue } = defineProps<{
  name: string
  type?: string
  required?: boolean
  optional?: boolean
  deprecated?: boolean
  defaultValue?: string
}>()

const badge = computed(() => required ? 'Required' : optional ? 'Optional' : '')
</script>

<template>
  <div class="vp-field" :class="{ required, optional, deprecated }">
    <p class="field-meta">
      <span class="name">{{ name }}</span>
      <span v-if="badge" :class="{ required, optional }">{{ badge }}</span>
      <span v-if="deprecated" class="deprecated">Deprecated</span>
      <span v-if="type" class="type"><code>{{ type }}</code></span>
    </p>
    <p v-if="defaultValue" class="default-value">
      <code>{{ defaultValue }}</code>
    </p>
    <div v-if="$slots.default" class="description">
      <slot />
    </div>
  </div>
</template>
