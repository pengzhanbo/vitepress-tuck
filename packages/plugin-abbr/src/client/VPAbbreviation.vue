<script setup lang="ts">
/**
 * VPAbbreviation component for rendering abbreviations with an interactive
 * tooltip in VitePress.
 *
 * VPAbbreviation 组件，用于在 VitePress 中渲染带有可交互提示框的缩写词。
 *
 * The abbreviation text is rendered as an underlined, help-cursor span. When
 * the user hovers over or focuses the span, a floating tooltip anchored below
 * the text is shown, displaying the full description provided via the
 * `#tooltip` slot. The tooltip is teleported to `body` and positioned with
 * `@floating-ui/vue`, applying offset, flip, shift, and arrow middleware for
 * robust placement near viewport edges.
 *
 * 缩写词文本渲染为带下划线且鼠标为 help 样式的 span。当用户悬停或聚焦该
 * span 时，会在文本下方显示一个浮动提示框，展示通过 `#tooltip` 插槽提供
 * 的完整描述。提示框被传送到 `body`，并使用 `@floating-ui/vue` 定位，
 * 应用 offset、flip、shift 和 arrow 中间件以保证在视口边缘附近的稳定定位。
 */
import { arrow, autoUpdate, offset, shift, useFloating } from '@floating-ui/vue'
import { ref, useTemplateRef } from 'vue'

defineOptions({
  inheritAttrs: false,
})

// Refs bound to the abbreviation span, the floating tooltip, and its arrow.
// 绑定到缩写词 span、浮动提示框及其箭头的 ref。
const abbr = useTemplateRef('abbr')
const tooltip = useTemplateRef('tooltip')
const tooltipArrow = useTemplateRef('tooltipArrow')

// Whether the tooltip is currently visible (toggled by hover/focus events).
// 提示框当前是否可见（由悬停/聚焦事件切换）。
const show = ref(false)

const { floatingStyles, middlewareData } = useFloating(abbr, tooltip, {
  whileElementsMounted: autoUpdate,
  placement: 'bottom',
  middleware: [
    offset(10),
    shift({ padding: 20 }),
    arrow({ element: tooltipArrow, padding: 4 }),
  ],
})
</script>

<template>
  <span
    ref="abbr" class="vp-abbr" v-bind="$attrs"
    @mouseenter="show = true"
    @mouseleave="show = false"
  ><slot /></span>
  <ClientOnly>
    <Teleport to="body">
      <Transition name="fade-in">
        <div
          v-show="show" ref="tooltip"
          role="tooltip" class="vp-abbr-popover" :style="floatingStyles"
          @mouseenter="show = true"
          @mouseleave="show = false"
        >
          <span
            ref="tooltipArrow" class="tooltip-arrow" :style="{
              left: middlewareData.arrow?.x != null ? `${middlewareData.arrow.x}px` : '',
              top: middlewareData.arrow?.y != null ? `${middlewareData.arrow.y}px` : '',
            }"
          />
          <slot name="tooltip" />
        </div>
      </Transition>
    </Teleport>
  </ClientOnly>
</template>
