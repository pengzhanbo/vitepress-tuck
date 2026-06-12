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

const installed = {
  dashjs: isPackageExists('dashjs'),
  hlsjs: isPackageExists('hls.js'),
  mpegtsjs: isPackageExists('mpegts.js'),
}

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

const SUPPORTED_VIDEO_TYPES = ['mp4', 'mp3', 'webm', 'ogg', 'mpd', 'dash', 'm3u8', 'hls', 'ts', 'flv', 'mkv', 'mov', 'ogv']

export const artPlayerMarkdownPlugin: PluginSimple = (md) => {
  createEmbedRuleBlock(md, {
    type: 'artPlayer',
    name: 'video_artPlayer',
    syntaxPattern: /^@\[artPlayer([^\]]*)\]\(([^)]*)\)/,
    meta([, info, source]) {
      const attrs = resolveAttrs(info)
      const url = source.trim()
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

export function checkSupportType(type?: string) {
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
