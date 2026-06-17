<script setup lang="ts">
import type ArtPlayer from 'artplayer'
import type { Option as ArtPlayerInitOptions } from 'artplayer'
import { isHttp, objectKeys } from '@pengzhanbo/utils'
import { useCssVar } from '@vueuse/core'
import { useSize, VPLoading } from 'vitepress-plugin-toolkit/client'
import { inBrowser, useData, withBase } from 'vitepress/client'
import { onMounted, onUnmounted, ref, toRefs, useTemplateRef } from 'vue'

/**
 * Vue component that renders a self-hosted video via ArtPlayer, with on-demand
 * loading of codec libraries (dashjs, hls.js, mpegts.js) based on the source
 * type.
 *
 * Vue 组件，通过 ArtPlayer 渲染自托管视频，并根据源类型按需加载编解码库
 * （dashjs、hls.js、mpegts.js）。
 */
const props = withDefaults(defineProps<{
  /** Video source URL / 视频源地址 */
  src: string
  /** Video type identifier (file extension or alias) / 视频类型标识（文件扩展名或别名） */
  type?: string
  /** Player width (CSS length) / 播放器宽度（CSS 长度值） */
  width?: string
  /** Player height (CSS length) / 播放器高度（CSS 长度值） */
  height?: string
  /** Player aspect ratio / 播放器宽高比 */
  ratio?: string
} & Omit<ArtPlayerInitOptions, 'container' | 'url' | 'type'>>(), {
  hotkey: true,
  mutex: true,
  playsInline: true,
})

declare const __TUCK_ARTPLAYER_DASHJS__: boolean
declare const __TUCK_ARTPLAYER_HLSJS__: boolean
declare const __TUCK_ARTPLAYER_MPEGTSJS__: boolean

/**
 * Compile-time availability of optional codec libraries, injected by
 * {@link artPlayerVitePlugin} via Vite `define` flags.
 *
 * 可选编解码库的编译期可用性，由 {@link artPlayerVitePlugin} 通过 Vite
 * `define` 标志注入。
 */
const installed = {
  dashjs: __TUCK_ARTPLAYER_DASHJS__,
  hlsjs: __TUCK_ARTPLAYER_HLSJS__,
  mpegtsjs: __TUCK_ARTPLAYER_MPEGTSJS__,
} as const
/**
 * Supported video types for ArtPlayer.
 *
 * ArtPlayer 支持的视频类型。
 */
const ART_PLAYER_SUPPORTED_VIDEO_TYPES: string[] = ['mp4', 'mp3', 'webm', 'ogg']

if (installed.dashjs)
  ART_PLAYER_SUPPORTED_VIDEO_TYPES.push('mpd', 'dash')

if (installed.hlsjs)
  ART_PLAYER_SUPPORTED_VIDEO_TYPES.push('m3u8', 'hls')

if (installed.mpegtsjs)
  ART_PLAYER_SUPPORTED_VIDEO_TYPES.push('ts', 'flv')

/**
 * Mapping of video type identifiers to custom loader functions that integrate
 * streaming codec libraries with ArtPlayer.
 *
 * 视频类型标识到自定义加载器函数的映射，用于将流编解码库与 ArtPlayer 集成。
 */
type CustomType = Record<string, (this: ArtPlayer, video: HTMLVideoElement, url: string, art: ArtPlayer) => any>

const loaded = ref(false)
const { lang } = useData()
const brandColor = useCssVar('--vp-c-brand-1')
const el = useTemplateRef<HTMLDivElement>('el')
const { width, height, resize } = useSize<HTMLDivElement>(el, toRefs(props))

let player: ArtPlayer | null = null

/**
 * Instantiate an ArtPlayer instance bound to the container element, configuring
 * language, theme, volume, and codec-specific custom loaders based on the
 * source type.
 *
 * 创建绑定到容器元素的 ArtPlayer 实例，根据源类型配置语言、主题、音量以及
 * 编解码相关的自定义加载器。
 *
 * @returns Promise that resolves once the player is created / 播放器创建完成后 resolve 的 Promise
 */
async function createPlayer() {
  if (!inBrowser)
    return

  if (!el.value)
    return

  loaded.value = false
  const { default: ArtPlayer } = await import(
    /* webpackChunkName: "artplayer" */ 'artplayer',
  )
  loaded.value = true
  const { src, type: _t, width: _w, height: _h, ratio: _r, ...opt } = props
  const { customType = {}, ...options } = opt
  objectKeys(options).forEach((key) => {
    if (typeof options[key] === 'undefined') {
      delete options[key]
    }
  })
  const type = props.type ?? src.split('.').pop() ?? ''
  const url = isHttp(src) ? src : withBase(src)

  if (!ART_PLAYER_SUPPORTED_VIDEO_TYPES.includes(type)) {
    console.error(`Unsupported video type: ${type}`)
    return
  }

  player = new ArtPlayer({
    container: el.value,
    url,
    type,
    ...{
      lang: lang.value.split('-')[0] === 'zh' ? 'zh-cn' : 'en',
      volume: 0.75,
      useSSR: false,
      theme: brandColor.value ?? '#3451b2',
    },
    ...options,
    customType: {
      ...initCustomType(type),
      ...customType,
    },
  })
}

/**
 * Build the custom type loader map for the given video type, dynamically
 * importing the appropriate codec library (dashjs, hls.js, or mpegts.js) and
 * wiring its lifecycle to the ArtPlayer instance.
 *
 * 为给定视频类型构建自定义类型加载器映射，动态导入对应的编解码库
 * （dashjs、hls.js 或 mpegts.js）并将其生命周期接入 ArtPlayer 实例。
 *
 * @param type - Video type identifier / 视频类型标识
 * @returns Custom type loader map / 自定义类型加载器映射
 */
function initCustomType(type: string): CustomType {
  const customType: CustomType = {}

  if ((type === 'mpd' || type === 'dash') && installed.dashjs) {
    customType[type] = async function (video, url, art) {
      const { supportsMediaSource, MediaPlayer } = (await import(/* webpackChunkName: "dashjs" */ 'dashjs'))
      if (supportsMediaSource()) {
        const dashPlayer = MediaPlayer().create()
        dashPlayer.initialize(video, url, props.autoplay, 0)
        art.on('destroy', () => dashPlayer.destroy())
      }
    }
  }

  if (type === 'm3u8' || type === 'hls') {
    customType[type] = async function (video, url, art) {
      if (video.canPlayType('application/x-mpegURL')
        || video.canPlayType('application/vnd.apple.mpegURL')) {
        video.src = url
        return
      }
      if (!installed.hlsjs)
        return

      const Hls = (await import(/* webpackChunkName: "hls.js" */ 'hls.js')).default
      if (Hls.isSupported()) {
        const hls = new Hls()
        hls.attachMedia(video)
        hls.on(Hls.Events.MEDIA_ATTACHED, () => hls.loadSource(url))
        art.on('destroy', () => hls.destroy())
      }
    }
  }

  if ((type === 'ts' || type === 'flv') && installed.mpegtsjs) {
    customType[type] = async function (video, url, art) {
      // @ts-expect-error type not found
      const mpegts = (await import(/* webpackChunkName: "mpegts.js" */ 'mpegts.js/dist/mpegts.js')).default
      if (mpegts.isSupported()) {
        const flv = mpegts.createPlayer({ type: 'flv', url })

        flv.attachMediaElement(video)
        flv.load()
        art.on('destroy', () => flv.destroy())
      }
    }
  }

  return customType
}

onMounted(async () => {
  await createPlayer()
  resize()
})

onUnmounted(() => {
  player?.destroy()
  player = null
})
</script>

<template>
  <div class="vp-artplayer">
    <div ref="el" class="artplayer-container" :style="{ width, height }" />
    <VPLoading v-if="!loaded" absolute />
  </div>
</template>
