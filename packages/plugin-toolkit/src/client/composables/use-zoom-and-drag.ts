import { useEventListener, useMediaQuery, useMutationObserver } from '@vueuse/core'
import { computed, nextTick, onMounted, ref, shallowRef, type TemplateRef } from 'vue'

/**
 * Composable that provides zoom and drag interaction for a content stage,
 * supporting mouse drag, touch drag, pinch-to-zoom, and programmatic zoom.
 *
 * 为内容舞台提供缩放和拖拽交互的组合式函数，支持鼠标拖拽、触摸拖拽、双指缩放和编程式缩放。
 *
 * @param parentEl - Template ref to the stage container element / 舞台容器元素的模板 ref
 * @returns Interaction controls and reactive state, including:
 *   - `actorStyle`: Reactive style object for the actor element / actor 元素的响应式样式对象
 *   - `zoom`: Reactive zoom percentage string / 响应式缩放百分比字符串
 *   - `reset`: Reset layout to fit the stage / 重置布局以适配舞台
 *   - `zoomIn`: Zoom in by one step / 放大一个步长
 *   - `zoomOut`: Zoom out by one step / 缩小一个步长
 *   - `resetZoom`: Reset zoom to the initial state / 重置缩放至初始状态
 * @example
 * ```ts
 * const stageEl = ref<HTMLDivElement>()
 * const { actorStyle, zoom, zoomIn, zoomOut, resetZoom, reset } = useZoomAndDrag(stageEl)
 * ```
 */
export function useZoomAndDrag(parentEl: TemplateRef<HTMLDivElement>) {
  const actorEl = shallowRef<HTMLDivElement>()
  let ratio = 0

  const x = ref(0)
  const y = ref(0)
  const width = ref<number | undefined>(undefined)
  let originalWidth = 0
  let initialState: { width: number, x: number, y: number } = { width: 0, x: 0, y: 0 }

  const isDesktop = useMediaQuery('(min-width: 640px)')

  useMutationObserver(actorEl, (mutationList) => {
    if (mutationList.some(mutation => mutation.type === 'childList'))
      nextTick(initialize)
  }, { subtree: true, childList: true, attributes: false })
  onMounted(() => nextTick(initialize))

  /**
   * Initialize the actor layout by measuring content size and computing the
   * initial zoom, position, and stage height to fit the available space.
   *
   * 通过测量内容尺寸并计算初始缩放、位置和舞台高度来初始化 actor 布局，以适配可用空间。
   *
   * @param isFullscreen - Whether the stage is in fullscreen mode / 舞台是否处于全屏模式
   */
  function initialize(isFullscreen = false) {
    if (!parentEl.value)
      return
    const actor = parentEl.value.querySelector('.content') as HTMLDivElement
    actorEl.value = actor
    if (!actor)
      return

    // 重置宽度和高度为 max-content，确保图表内容可见
    actor.style.width = 'max-content'
    actor.style.height = ''
    const stage = parentEl.value

    const clientHeight = document.documentElement.clientHeight
    const maxHeight = isFullscreen ? clientHeight : isDesktop.value ? (clientHeight * 0.75) : (clientHeight / 2)
    const { offsetWidth: actorWidth, offsetHeight: actorHeight } = actor
    const stageWidth = stage.offsetWidth

    ratio = actorWidth / actorHeight

    let tryZoom = 1
    let stageHeight = isFullscreen ? clientHeight : actorHeight
    let newActorHeight = actorHeight
    // 检查宽度是否需要缩放
    if (actorWidth > stageWidth) {
      tryZoom = stageWidth / actorWidth
      newActorHeight = actorHeight * tryZoom
    }
    // 缩放后高度是否超过最大高度
    if (newActorHeight > maxHeight) {
      tryZoom = maxHeight / actorHeight
      stageHeight = maxHeight
    }

    stage.style.height = `${stageHeight + 24}px`

    if (tryZoom === 1) {
      width.value = actorWidth
      x.value = (stageWidth - width.value) / 2
      y.value = (stageHeight - actorHeight) / 2
    }
    else {
      width.value = actorWidth * tryZoom
      const zoomHeight = width.value / ratio
      x.value = (stageWidth - width.value) / 2
      y.value = Math.max(0, ((isFullscreen ? clientHeight : stage.offsetHeight) - zoomHeight) / 2)
    }
    originalWidth = actorWidth
    initialState = { width: width.value, x: x.value, y: y.value }
  }

  let isDragging = false

  let startX = 0
  let startY = 0
  useEventListener(parentEl, 'mousedown', (e) => {
    const target = e.target as HTMLElement
    if (target.matches('button,[class^="vpi-"]'))
      return

    e.preventDefault()
    startX = e.clientX
    startY = e.clientY
    isDragging = true
    parentEl.value!.style.cursor = 'move'
  })

  useEventListener(parentEl, 'mousemove', (e) => {
    if (isDragging) {
      e.preventDefault()
      x.value += e.clientX - startX
      y.value += e.clientY - startY
      startX = e.clientX
      startY = e.clientY
    }
  })

  useEventListener(parentEl, 'mouseup', () => {
    isDragging = false
    parentEl.value!.style.cursor = ''
  })

  let startGap = 0
  let currentWidth = 0
  useEventListener(parentEl, 'touchstart', (e) => {
    const target = e.target as HTMLElement
    if (target.matches('button,[class^="vpi-"]'))
      return

    e.preventDefault()
    const touches = e.touches
    startX = touches[0].clientX
    startY = touches[0].clientY
    isDragging = true
    if (touches[1]) {
      startGap = Math.abs(touches[1].clientX - touches[0].clientX)
      currentWidth = width.value || originalWidth
    }
  }, { passive: false })

  useEventListener(parentEl, 'touchmove', (e) => {
    if (!isDragging)
      return
    const touches = e.touches
    e.preventDefault()
    x.value += touches[0].clientX - startX
    y.value += touches[0].clientY - startY
    startX = touches[0].clientX
    startY = touches[0].clientY
    if (touches[1]) {
      width.value = currentWidth + Math.abs(touches[1].clientX - touches[0].clientX) - startGap
    }
  }, { passive: false })
  useEventListener(parentEl, 'touchend', () => {
    isDragging = false
  }, { passive: false })

  /**
   * Adjust the zoom level by a fixed step, or reset to the initial state.
   *
   * 按固定步长调整缩放级别，或重置到初始状态。
   *
   * @param type - Zoom direction, can be:
   *   - `1`: Zoom in by one step / 放大一个步长
   *   - `-1`: Zoom out by one step / 缩小一个步长
   *   - `0`: Reset to the initial zoom and position / 重置到初始缩放和位置
   */
  function zoom(type: 1 | -1 | 0) {
    if (typeof width.value === 'undefined' || !actorEl.value)
      return

    if (type === 0) {
      zooming()
      x.value = initialState.x
      y.value = initialState.y
      width.value = initialState.width
    }
    else {
    // 缩放步长为原始宽度的 10%
      const steps = initialState.width / 10 * type
      // 缩放后宽度不能小于 100px
      if (width.value + steps <= 100)
        return

      zooming()
      width.value += steps

      x.value -= steps / 2
      y.value -= steps / ratio / 2
    }
  }

  let zoomTimer: NodeJS.Timeout | undefined
  /**
   * Temporarily add a `zooming` class to the actor element to enable CSS
   * transitions during zoom, and remove it after the transition completes.
   *
   * 临时为 actor 元素添加 `zooming` 类以在缩放时启用 CSS 过渡，并在过渡结束后移除该类。
   */
  function zooming() {
    actorEl.value?.classList.add('zooming')
    if (zoomTimer)
      clearTimeout(zoomTimer)
    zoomTimer = setTimeout(() => {
      actorEl.value!.classList.remove('zooming')
    }, 250)
  }

  return {
    actorStyle: computed(() => ({
      left: `${Math.ceil(x.value)}px`,
      top: `${Math.ceil(y.value)}px`,
      width: width.value ? `${Math.ceil(width.value)}px` : undefined,
      height: `${width.value ? Math.ceil(width.value / ratio) : undefined}px`,
    })),
    zoom: computed(() => `${Math.round((width.value || originalWidth) / originalWidth * 100)}%`),
    reset: initialize,
    zoomIn: () => zoom(1),
    zoomOut: () => zoom(-1),
    resetZoom: () => zoom(0),
  }
}
