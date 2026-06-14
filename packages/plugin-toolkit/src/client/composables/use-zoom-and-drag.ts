import { useEventListener, useMediaQuery, useMutationObserver } from '@vueuse/core'
import { computed, nextTick, onMounted, ref, shallowRef, type TemplateRef } from 'vue'

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
