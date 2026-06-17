/**
 * Fork for https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/main/packages/components/src/client/composables/useSize.ts
 *
 * The MIT License (MIT)
 * Copyright (C) 2021 - PRESENT by Mr.Hope<mister-hope@outlook.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import type { MaybeRef, Ref, TemplateRef, ToRefs } from 'vue'
import type { SizeOptions } from '../../shared/index.js'
import { useEventListener } from '@vueuse/core'
import { computed, isRef, onMounted, ref, toValue, watch } from 'vue'

/**
 * Reactive size information returned by `useSize`.
 *
 * `useSize` 返回的响应式尺寸信息。
 */
export interface SizeInfo {
  /** Reactive width value (e.g. "100%" or "500px") / 响应式宽度值（例如 "100%" 或 "500px"） */
  width: Ref<string>
  /** Reactive height value (e.g. "auto" or "300px") / 响应式高度值（例如 "auto" 或 "300px"） */
  height: Ref<string>
  /** Manually trigger a size recalculation / 手动触发尺寸重新计算 */
  resize: () => void
}

/**
 * Composable that provides reactive size tracking for an element based on width,
 * height, and aspect ratio options.
 *
 * 基于宽度、高度和宽高比选项为元素提供响应式尺寸追踪的组合式函数。
 *
 * @template T - HTMLElement type of the target element / 目标元素的 HTMLElement 类型
 * @param el - Template ref to the target element / 目标元素的模板 ref
 * @param options - Reactive size options (width, height, ratio) / 响应式尺寸选项（width、height、ratio）
 * @param extraHeight - Extra height in pixels to add to the computed height / 要加到计算高度上的额外像素高度
 * @returns Reactive size info with width, height, and a resize function / 包含 width、height 和 resize 函数的响应式尺寸信息
 * @example
 * ```ts
 * const el = ref<HTMLElement>()
 * const { width, height, resize } = useSize(el, toRefs({ width: '100%', ratio: '16:9' }))
 * ```
 */
export function useSize<T extends HTMLElement>(
  el: TemplateRef<T>,
  options: ToRefs<SizeOptions>,
  extraHeight: MaybeRef<number> = 0,
): SizeInfo {
  const width = computed(() => toValue(options.width) || '100%')
  const height = ref('auto')

  const getHeight = (width: number): string => {
    const height = toValue(options.height)
    const ratio = getRadio(toValue(options.ratio))

    return height || `${Number(width) / ratio + toValue(extraHeight)}px`
  }

  const resize = (): void => {
    if (el.value)
      height.value = getHeight(el.value.offsetWidth)
  }

  onMounted(() => {
    resize()
    if (isRef(extraHeight))
      watch(extraHeight, resize)

    useEventListener('orientationchange', resize)
    useEventListener('resize', resize)
  })

  return { width, height, resize }
}

/**
 * Parse a ratio value into a numeric width-to-height ratio.
 *
 * 将宽高比值解析为数值形式的宽高比。
 *
 * Accepts a number, a string like `"16:9"`, or `undefined` (defaults to 16:9).
 *
 * 接受数字、形如 `"16:9"` 的字符串或 `undefined`（默认为 16:9）。
 *
 * @param ratio - Ratio value, can be:
 *   - `number`: Used directly as the ratio / 直接作为宽高比
 *   - `string`: Parsed from "width:height" format / 从 "width:height" 格式解析
 *   - `undefined`: Defaults to 16/9 / 默认为 16/9
 * @returns Numeric width-to-height ratio / 数值形式的宽高比
 * @example
 * ```ts
 * getRadio(2)        // 2
 * getRadio('16:9')   // 1.777...
 * getRadio(undefined) // 1.777...
 * ```
 */
function getRadio(ratio: number | string | undefined): number {
  if (typeof ratio === 'string') {
    const [width, height] = ratio.split(':')
    const parsedRadio = Number(width) / Number(height)

    if (!Number.isNaN(parsedRadio))
      return parsedRadio
  }

  return typeof ratio === 'number' ? ratio : 16 / 9
}
