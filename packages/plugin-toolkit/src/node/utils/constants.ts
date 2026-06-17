import process from 'node:process'

/**
 * Whether the current process is running in production build mode.
 *
 * 当前进程是否运行在生产构建模式下。
 */
export const isBuild = process.env.NODE_ENV === 'production'

/**
 * Whether the current process is running in development mode.
 *
 * 当前进程是否运行在开发模式下。
 */
export const isDev = process.env.NODE_ENV === 'development'

/**
 * Browser-supported video file name extensions.
 *
 * 浏览器支持的视频文件名扩展名。
 */
export const EXTENSION_VIDEOS: string[] = ['mp4', 'mp3', 'webm', 'ogg', 'mpd', 'dash', 'm3u8', 'hls', 'ts', 'flv', 'mkv', 'mov', 'ogv']

/**
 * Browser-supported image file name extensions.
 *
 * 浏览器支持的图片文件名扩展名。
 */
export const EXTENSION_IMAGES: string[] = ['jpg', 'jpeg', 'png', 'gif', 'avif', 'webp', 'svg', 'bmp', 'ico', 'tiff', 'apng', 'jfif', 'pjpeg', 'pjp', 'xbm']

/**
 * Browser-supported audio file name extensions.
 *
 * 浏览器支持的音频文件名扩展名。
 */
export const EXTENSION_AUDIOS: string[] = ['mp3', 'flac', 'wav', 'ogg', 'opus', 'webm', 'acc']
