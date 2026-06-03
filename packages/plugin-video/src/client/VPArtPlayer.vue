<script setup lang="ts">
import type ArtPlayer from 'artplayer'
import type { Option as ArtPlayerInitOptions } from 'artplayer'
import { isHttp, objectKeys } from '@pengzhanbo/utils'
import { useCssVar } from '@vueuse/core'
import { useSize, VPLoading } from 'vitepress-plugin-toolkit/client'
import { inBrowser, useData, withBase } from 'vitepress/client'
import { onMounted, onUnmounted, ref, toRefs, useTemplateRef } from 'vue'

const props = withDefaults(defineProps<{
  src: string
  type?: string
  width?: string
  height?: string
  ratio?: string
} & Omit<ArtPlayerInitOptions, 'container' | 'url' | 'type'>>(), {
  hotkey: true,
  mutex: true,
  playsInline: true,
})

declare const __TUCK_ARTPLAYER_DASHJS__: boolean
declare const __TUCK_ARTPLAYER_HLSJS__: boolean
declare const __TUCK_ARTPLAYER_MPEGTSJS__: boolean

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

type CustomType = Record<string, (this: ArtPlayer, video: HTMLVideoElement, url: string, art: ArtPlayer) => any>

const loaded = ref(false)
const { lang } = useData()
const brandColor = useCssVar('--vp-c-brand-1')
const el = useTemplateRef<HTMLDivElement>('el')
const { width, height, resize } = useSize<HTMLDivElement>(el, toRefs(props))

let player: ArtPlayer | null = null

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
