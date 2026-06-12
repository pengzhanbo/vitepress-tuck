<script setup lang="ts" generic="T">
import { watch } from 'vue'

export interface Item<T> {
  value: T
  label: string
}

const { items } = defineProps<{ items: Item<T>[] }>()

const emit = defineEmits<{ update: [tab: T] }>()
const tab = defineModel<T>()

watch(() => items, () => {
  tab.value = items[0].value
})

function onClick(item: T) {
  tab.value = item
  emit('update', item)
}
</script>

<template>
  <div class="vp-tab-switch-list">
    <button
      v-for="item in items" :key="item.label"
      :class="{ active: tab === item.value }"
      @click="onClick(item.value)"
    >
      {{ item.label }}
    </button>
  </div>
</template>
