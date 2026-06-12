import process from 'node:process'

export const isBuild = process.env.NODE_ENV === 'production'
export const isDev = process.env.NODE_ENV === 'development'

/**
 * 浏览器支持的视频文件名扩展名
 */
export const EXTENSION_VIDEOS: string[] = ['mp4', 'mp3', 'webm', 'ogg', 'mpd', 'dash', 'm3u8', 'hls', 'ts', 'flv', 'mkv', 'mov', 'ogv']
/**
 * 浏览器支持的图片文件名扩展名
 */
export const EXTENSION_IMAGES: string[] = ['jpg', 'jpeg', 'png', 'gif', 'avif', 'webp', 'svg', 'bmp', 'ico', 'tiff', 'apng', 'jfif', 'pjpeg', 'pjp', 'xbm']
/**
 * 浏览器支持的音频文件名扩展名
 */
export const EXTENSION_AUDIOS: string[] = ['mp3', 'flac', 'wav', 'ogg', 'opus', 'webm', 'acc']
