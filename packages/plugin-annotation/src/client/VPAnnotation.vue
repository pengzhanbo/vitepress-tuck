<script setup lang="ts">
/**
 * VPAnnotation component for rendering annotation references with an
 * interactive popover in VitePress.
 *
 * VPAnnotation 组件，用于在 VitePress 中渲染带有可交互浮层的注释引用。
 *
 * The annotation marker is rendered as a small inline span (styled via CSS as
 * a superscript-like icon). When the user clicks or focuses the marker, a
 * floating popover anchored to the marker is shown, displaying the annotation
 * content provided via the `#item-0`, `#item-1`, … named slots. Each slot
 * corresponds to one definition of the annotation label. The popover is
 * teleported to `body` and positioned with `@floating-ui/vue`, applying
 * offset, flip, and shift middleware for robust placement near viewport edges.
 *
 * 注释标记渲染为一个小型行内 span（通过 CSS 样式为类上标图标）。当用户点击或
 * 聚焦该标记时，会显示一个锚定到标记的浮动浮层，展示通过 `#item-0`、
 * `#item-1`、… 具名插槽提供的注释内容。每个插槽对应注释标签的一个定义。
 * 浮层被传送到 `body`，并使用 `@floating-ui/vue` 定位，应用 offset、flip 和
 * shift 中间件以保证在视口边缘附近的稳定定位。
 *
 * The popover automatically closes when:
 * - The user clicks outside the marker and popover.
 * - The marker scrolls out of the viewport.
 *
 * 浮层在以下情况下自动关闭：
 * - 用户点击标记和浮层之外的区域。
 * - 标记滚动出视口。
 */
import { autoUpdate, flip, shift, useFloating } from '@floating-ui/vue'
import { onClickOutside, useIntersectionObserver } from '@vueuse/core'
import { computed, ref, useTemplateRef } from 'vue'

defineOptions({
  inheritAttrs: false,
})

const { label, total } = defineProps<{
  label: string
  total: number
}>()

// Whether the popover is currently visible (toggled by click/keypress).
// 浮层当前是否可见（由点击/按键切换）。
const active = ref(false)
// Array of slot indices for rendering multiple annotation sources.
// 用于渲染多个注释源的插槽索引数组。
const group = computed(() => Array.from({ length: total }, (_, i) => i))

const annotation = useTemplateRef('annotation')
const tooltip = useTemplateRef('tooltip')

// Close the popover when clicking outside the marker and popover.
// 点击标记和浮层之外的区域时关闭浮层。
onClickOutside(annotation as any, () => {
  active.value = false
}, { ignore: [tooltip as any] })

// Close the popover when the marker scrolls out of the viewport.
// 标记滚动出视口时关闭浮层。
useIntersectionObserver(annotation as any, ([entry]) => {
  if (!entry.isIntersecting && active.value)
    active.value = false
}, { rootMargin: '-64px 0px 0px 0px' })

const { floatingStyles, placement } = useFloating(annotation, tooltip, {
  whileElementsMounted: autoUpdate,
  middleware: [
    flip(),
    shift({ padding: { top: 80, left: 16, bottom: 16 } }),
  ],
})

// Extract the base placement direction (e.g. 'top' from 'top-start').
// 提取基础定位方向（如从 'top-start' 中提取 'top'）。
const inset = computed(() => placement.value.split('-')[0])
</script>

<template>
  <button
    v-bind="$attrs" ref="annotation" type="button"
    class="vp-annotation" :class="{ [label]: true, [inset]: true, active }"
    :aria-label="label"
    @click="active = !active"
  >
    <span class="vpi-annotation" />
  </button>
  <ClientOnly>
    <Teleport to="body">
      <Transition name="fade-in">
        <div
          v-if="active" ref="tooltip"
          class="vp-annotation-popover" :class="{ group: group.length > 1 }"
          :style="floatingStyles"
        >
          <div v-for="i in group" :key="label + i" class="annotation">
            <slot :name="`item-${i}`" />
          </div>
        </div>
      </Transition>
    </Teleport>
  </ClientOnly>
</template>
