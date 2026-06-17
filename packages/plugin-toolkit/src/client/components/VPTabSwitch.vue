<script setup lang="ts" generic="T">
/**
 * A tab switcher component that renders a list of selectable tab buttons.
 *
 * 渲染一组可选标签按钮的标签切换组件。
 *
 * @example
 * ```vue
 * <VPTabSwitch
 *   v-model="active"
 *   :items="[{ value: 'a', label: 'A' }, { value: 'b', label: 'B' }]"
 *   @update="onTabChange"
 * />
 * ```
 */
import { watch } from 'vue'

/**
 * Represents a single tab item.
 *
 * 表示单个标签项。
 *
 * @template T - Type of the tab value / 标签值的类型
 */
export interface Item<T> {
  /** Value of the tab item / 标签项的值 */
  value: T
  /** Display label of the tab item / 标签项的显示文本 */
  label: string
}

/** List of tab items to render / 要渲染的标签项列表 */
const { items } = defineProps<{ items: Item<T>[] }>()

/** Emitted when the active tab changes / 当活动标签切换时触发 */
const emit = defineEmits<{ update: [tab: T] }>()
/** Current active tab value (v-model) / 当前活动标签的值（v-model） */
const tab = defineModel<T>()

watch(() => items, () => {
  tab.value = items[0].value
})

/**
 * Handle tab button click, updating the active tab and emitting the update event.
 *
 * 处理标签按钮点击，更新活动标签并触发 update 事件。
 *
 * @param item - The clicked tab item / 被点击的标签项
 */
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
