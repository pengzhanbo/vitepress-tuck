<script lang="ts" setup>
import { VPLink } from 'vitepress/theme'
import { useLocale } from './locales.js'

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
defineProps<{
  name: string
  slug: string
  type?: string
  typeLink?: string
  required?: boolean
  deprecated?: boolean | string
  experimental?: boolean | string
  defaultValue?: string
  since?: string
  unit?: string
  format?: string
  constraint?: string
}>()

const locale = useLocale()
</script>

<template>
  <div
    :id="slug" class="vp-field"
    :class="{ required, deprecated, optional: !required && !deprecated, experimental }"
  >
    <div class="field-meta">
      <div class="meta-left align-start">
        <p class="meta-name">
          <span class="visually-hidden">Name:</span>
          <span class="name">{{ name }}</span>
          <a :href="`#${slug}`" class="header-anchor" :aria-label="`Permalink to “${name}”`">&ZeroWidthSpace;</a>
        </p>
        <p>
          <span v-if="deprecated" class="deprecated">
            {{ locale.deprecated || 'Deprecated' }}<template v-if="deprecated && typeof deprecated === 'string'">: {{ decodeURIComponent(deprecated) }}</template>
          </span>
          <span v-else-if="required" class="required">{{ locale.required || 'Required' }}</span>
          <span v-else class="optional">{{ locale.optional || 'Optional' }}</span>
          <span v-if="experimental" class="experimental">
            {{ locale.experimental || 'Experimental' }}<template v-if="experimental && typeof experimental === 'string'">: {{ decodeURIComponent(experimental) }}</template>
          </span>
        </p>
      </div>
      <div v-if="type" class="meta-right type">
        <span class="visually-hidden">Type:</span>
        <VPLink v-if="typeLink" :href="typeLink">
          <code title="Type" aria-label="Type">{{ decodeURIComponent(type) }}</code>
        </VPLink>
        <code v-else title="Type" aria-label="Type">{{ decodeURIComponent(type) }}</code>
      </div>
    </div>

    <div class="field-meta baseline">
      <div class="meta-left">
        <p v-if="defaultValue" class="default-value">
          <span class="key">{{ locale.default || 'Default' }}:</span>
          <code>{{ decodeURIComponent(defaultValue) }}</code>
        </p>
        <p v-if="$slots.enum" class="enum">
          <span class="key">{{ locale.enum || 'Enum' }}:</span>
          <slot name="enum" />
        </p>
        <p v-if="unit" class="unit">
          <span class="key">{{ locale.unit || 'Unit' }}:</span>
          <code>{{ decodeURIComponent(unit) }}</code>
        </p>
        <p v-if="format" class="format">
          <span class="key">{{ locale.format || 'Format' }}:</span>
          <code>{{ decodeURIComponent(format) }}</code>
        </p>
        <p v-if="constraint" class="constraint">
          <span class="key">{{ locale.constraint || 'Constraint' }}:</span>
          <code>{{ decodeURIComponent(constraint) }}</code>
        </p>
      </div>
      <div v-if="since" class="meta-right since">
        <span class="key">{{ locale.since || 'Since' }}:</span>
        <code>{{ decodeURIComponent(since) }}</code>
      </div>
    </div>
    <div v-if="$slots.default" class="description">
      <slot />
    </div>
  </div>
</template>
