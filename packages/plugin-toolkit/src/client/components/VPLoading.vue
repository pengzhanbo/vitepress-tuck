<script setup lang="ts">
/**
 * A loading indicator component with an animated SVG spinner.
 *
 * 带有 SVG 动画旋转图标的加载指示器组件。
 *
 * @example
 * ```vue
 * <VPLoading />
 *
 * <VPLoading absolute height="200px" />
 * ```
 */
defineProps<{
  /** Whether to position the loader absolutely / 是否以绝对定位渲染加载器 */
  absolute?: boolean
  /** Custom height for the loading container / 加载容器的自定义高度 */
  height?: string
}>()
</script>

<template>
  <div class="vp-loading" :class="{ absolute }" :style="{ height }">
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
      <path
        fill="none" stroke="currentColor" stroke-dasharray="15" stroke-dashoffset="15" stroke-linecap="round"
        stroke-width="2" d="M12 3C16.9706 3 21 7.02944 21 12"
      >
        <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0" />
        <animateTransform
          attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate"
          values="0 12 12;360 12 12"
        />
      </path>
    </svg>
  </div>
</template>
