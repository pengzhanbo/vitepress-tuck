export default {
  /**
   * - typescript@7 尚未提供完整的 API 支持，对于依赖它的上游会导致运行错误
   * - markdown-it@15 在 vitepress 中尚未同步支持，可能存在兼容性问题
   * - conventional-changelog 存在未知的运行时报错，暂时停留在可运行的版本
   */
  exclude: ['typescript', 'markdown-it', 'conventional-changelog', 'conventional-changelog-angular'],
}
