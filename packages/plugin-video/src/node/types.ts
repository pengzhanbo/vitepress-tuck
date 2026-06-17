/**
 * Options for the video plugin, used to enable or disable individual video
 * embed providers.
 *
 * 视频插件选项，用于启用或禁用各个视频嵌入提供商。
 */
export interface VideoPluginOptions {
  /**
   * Enable the ArtPlayer provider for self-hosted videos.
   *
   * 是否开启 artplayer。
   */
  artplayer?: boolean
  /**
   * Enable the YouTube embed provider.
   *
   * 是否开启 youtube。
   */
  youtube?: boolean
  /**
   * Enable the Bilibili embed provider.
   *
   * 是否开启 bilibili。
   */
  bilibili?: boolean
  /**
   * Enable the AcFun embed provider.
   *
   * 是否开启 acfun。
   */
  acfun?: boolean
}
