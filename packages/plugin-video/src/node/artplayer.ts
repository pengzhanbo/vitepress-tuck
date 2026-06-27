/**
 * @[artPlayer](url)
 * @[artPlayer muted autoplay autoMini loop volume=1 poster="xxxx"](url)
 */

import type { PluginSimple } from 'markdown-it'
import type { Plugin } from 'vitepress'
import { isNil } from '@pengzhanbo/utils'
import colors from 'ansis'
import { isPackageExists } from 'local-pkg'
import { createEmbedRuleBlock, parseRect, resolveAttrs, stringifyAttrs } from 'vitepress-plugin-toolkit'
import { logger } from './utils.js'

/**
 * Detection result for optional codec libraries that extend ArtPlayer with
 * additional streaming formats (DASH, HLS, FLV/MPEG-TS).
 *
 * 可选编解码库的检测结果，这些库为 ArtPlayer 扩展额外的流媒体格式
 * （DASH、HLS、FLV/MPEG-TS）。
 */
const installed = {
  dashjs: isPackageExists('dashjs'),
  hlsjs: isPackageExists('hls.js'),
  mpegtsjs: isPackageExists('mpegts.js'),
}

/**
 * Vite plugin that exposes codec library availability to the client bundle via
 * compile-time `define` flags, and silences a known false-positive
 * `COMMONJS_VARIABLE_IN_ESM` warning for `dashjs`.
 *
 * Vite 插件，通过编译期 `define` 标志将编解码库的可用性暴露给客户端产物，
 * 并屏蔽 `dashjs` 已知的 `COMMONJS_VARIABLE_IN_ESM` 误报警告。
 *
 * @returns Vite plugin instance / Vite 插件实例
 */
export function artPlayerVitePlugin(): Plugin {
  return {
    name: 'vitepress-plugin-video-artplayer',
    config() {
      return {
        define: {
          __TUCK_ARTPLAYER_DASHJS__: installed.dashjs,
          __TUCK_ARTPLAYER_HLSJS__: installed.hlsjs,
          __TUCK_ARTPLAYER_MPEGTSJS__: installed.mpegtsjs,
        },
      }
    },
    onLog(_, log) {
      if (log.message.includes('COMMONJS_VARIABLE_IN_ESM') && log.message.includes('dashjs'))
        return false
      return undefined
    },
  }
}

/**
 * Video file extensions supported by ArtPlayer, extended at module load time
 * when optional codec libraries (`dashjs`, `hls.js`, `mpegts.js`) are installed.
 *
 * ArtPlayer 支持的视频文件扩展名，在模块加载阶段会根据已安装的可选编解码库
 * （`dashjs`、`hls.js`、`mpegts.js`）进行扩展。
 */
const SUPPORTED_VIDEO_TYPES = ['mp4', 'mp3', 'webm', 'ogg', 'mpd', 'dash', 'm3u8', 'hls', 'ts', 'flv', 'mkv', 'mov', 'ogv']

/**
 * markdown-it plugin that registers the `@[artPlayer](url)` embed rule for
 * embedding self-hosted videos via ArtPlayer.
 *
 * markdown-it 插件，注册 `@[artPlayer](url)` 嵌入规则，通过 ArtPlayer 嵌入
 * 自托管视频。
 *
 * The source URL is provided in the container body, while playback options
 * (`muted`, `autoplay`, `autoMini`, `loop`, `volume`, `poster`, `type`,
 * `width`, `height`, `ratio`) can be declared in the container header.
 *
 * 源地址在容器主体中提供，播放选项（`muted`、`autoplay`、`autoMini`、`loop`、
 * `volume`、`poster`、`type`、`width`、`height`、`ratio`）可在容器头部声明。
 *
 * @param md - markdown-it instance to extend / 待扩展的 markdown-it 实例
 * @example
 * ```md
 * @[artPlayer](https://example.com/video.mp4)
 * ```
 * @example
 * ```md
 * @[artPlayer muted autoplay loop volume=0.5 poster="https://example.com/poster.jpg"](https://example.com/video.mp4)
 * ```
 */
export const artPlayerMarkdownPlugin: PluginSimple = (md) => {
  createEmbedRuleBlock(md, {
    type: 'artPlayer',
    name: 'video_artPlayer',
    meta(info, source) {
      const attrs = resolveAttrs(info)
      const url = md.utils.escapeHtml(source.trim())
      checkSupportType(attrs.type ?? url.split('.').pop())

      return {
        url,
        type: attrs.type,
        autoplay: attrs.autoplay ?? false,
        muted: attrs.muted ?? attrs.autoplay ?? false,
        autoMini: attrs.autoMini ?? false,
        loop: attrs.loop ?? false,
        volume: isNil(attrs.volume) ? 0.75 : Number(attrs.volume),
        poster: attrs.poster,
        width: attrs.width ? parseRect(attrs.width) : '100%',
        height: attrs.height ? parseRect(attrs.height) : undefined,
        ratio: attrs.ratio ? parseRect(`${attrs.ratio}`) : undefined,
      }
    },
    content({ url, ...meta }) {
      meta.muted = meta.muted || meta.autoplay
      return `<VPArtPlayer src="${url}" fullscreen flip playback-rate aspect-ratio setting pip${stringifyAttrs(meta)} />`
    },
  })
}

/**
 * Validate that the given video type is supported, warning the user when a
 * required codec library is missing or the type is unknown.
 *
 * 校验给定的视频类型是否受支持，当缺少所需编解码库或类型未知时向用户发出警告。
 *
 * - For `m3u8`/`hls`, warns when `hls.js` is not installed.
 * - For `flv`/`ts`, warns when `mpegts.js` is not installed.
 * - For `mpd`/`dash`, warns when `dashjs` is not installed.
 * - For any other value not in {@link SUPPORTED_VIDEO_TYPES}, warns that the
 *   type is unsupported.
 *
 * - 对于 `m3u8`/`hls`，当未安装 `hls.js` 时发出警告。
 * - 对于 `flv`/`ts`，当未安装 `mpegts.js` 时发出警告。
 * - 对于 `mpd`/`dash`，当未安装 `dashjs` 时发出警告。
 * - 对于不在 {@link SUPPORTED_VIDEO_TYPES} 中的其他值，发出不支持警告。
 *
 * @param type - Video type identifier (file extension or alias) / 视频类型标识（文件扩展名或别名）
 */
export function checkSupportType(type?: string) {
  /* istanbul ignore if -- @preserve */
  if (!type)
    return

  /* istanbul ignore if -- @preserve */
  if (SUPPORTED_VIDEO_TYPES.includes(type)) {
    let name = ''
    switch (type.toLowerCase()) {
      case 'm3u8':
      case 'hls':
        name = !installed.hlsjs ? 'hls.js' : ''
        break

      case 'flv':
      case 'ts': {
        name = !installed.mpegtsjs ? 'mpegts.js' : ''
        break
      }
      case 'mpd':
      case 'dash':
        name = !installed.dashjs ? 'dashjs' : ''
        break
    }
    /* istanbul ignore if -- @preserve */
    if (name) {
      logger.warn(`${colors.cyan(name)} is not installed, please install it via npm or yarn or pnpm`)
    }
  }
  else {
    /* istanbul ignore next -- @preserve */
    logger.warn(`unsupported video type: ${colors.cyan(type)}`)
  }
}
