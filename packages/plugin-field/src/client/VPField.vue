<script lang="ts" setup>
import { computed } from 'vue'

/**
 * Vue component that renders a single field documentation entry.
 *
 * Renders the field name, optional badges (Required/Optional/Deprecated),
 * type annotation, default value, and a description slot. Used by the
 * `::: field` markdown container to display structured field information.
 *
 * Vue 组件，渲染单个字段文档条目。
 *
 * 渲染字段名称、可选徽章（Required/Optional/Deprecated）、类型注解、默认值
 * 以及描述插槽。由 `::: field` markdown 容器用于展示结构化的字段信息。
 *
 * @example
 * ```vue
 * <VPField name="username" type="string" required>
 *   The username used to log in.
 * </VPField>
 * ```
 */
const { name, type, required, optional, deprecated, defaultValue } = defineProps<{
  /** Field name displayed as the title / 显示为标题的字段名称 */
  name: string
  /** Type annotation rendered as inline code / 以行内代码渲染的类型注解 */
  type?: string
  /** Whether the field is required (shows "Required" badge) / 字段是否为必填（显示 "Required" 徽章） */
  required?: boolean
  /** Whether the field is optional (shows "Optional" badge) / 字段是否为可选（显示 "Optional" 徽章） */
  optional?: boolean
  /** Whether the field is deprecated (shows "Deprecated" badge) / 字段是否已弃用（显示 "Deprecated" 徽章） */
  deprecated?: boolean
  /** Default value rendered as inline code / 以行内代码渲染的默认值 */
  defaultValue?: string
}>()

/**
 * Resolves the badge label based on the required/optional flags.
 *
 * 根据 required/optional 标志解析徽章标签。
 */
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
