import type { DefaultTheme, HeadConfig, UserConfig } from 'vitepress'
import type { VitepressPluginHooks } from './types.js'
import { toTruthy } from '@pengzhanbo/utils'

export function createHooks(): VitepressPluginHooks {
  return {
    buildEnd: [],
    transformHead: [],
    transformHtml: [],
    transformPageData: [],
    postRender: [],
    markdownConfig: [],
  }
}

/**
 * 合并插件钩子，根据不同钩子的特性，确保顺序、入参、出参一致
 * @param hooks - 插件钩子列表
 * @param config - 合并后的配置对象
 */
export function mergePluginHooks<ThemeConfig = DefaultTheme.Config>(hooks: VitepressPluginHooks, config: UserConfig<ThemeConfig>) {
  // 合并 markdown config 钩子， 此钩子可直接并发执行
  const userMarkdownConfig = config.markdown?.config
  if (hooks.markdownConfig.length) {
    config.markdown ??= {}
    config.markdown.config = async (md) => {
      await Promise.all([
        ...hooks.markdownConfig.map(config => config(md)),
        userMarkdownConfig?.(md),
      ].filter(toTruthy))
    }
  }

  // 合并 buildEnd 钩子， 此钩子可并发执行
  if (hooks.buildEnd.length) {
    const buildEnd = config.buildEnd
    config.buildEnd = async (site) => {
      await Promise.all([
        ...hooks.buildEnd.map(hook => hook(site)),
        buildEnd?.(site),
      ].filter(toTruthy))
    }
  }

  // 合并 transformHead 钩子， 此钩子可并发执行， 但需要合并所有结果
  if (hooks.transformHead.length) {
    const transformHead = config.transformHead
    config.transformHead = async (site) => {
      const result = await Promise.all([
        ...hooks.transformHead.map(hook => hook(site)),
        transformHead?.(site),
      ].filter(toTruthy))
      const headConfigs: HeadConfig[] = []
      for (const item of result) {
        item && headConfigs.push(...item)
      }
      return headConfigs
    }
  }

  // 合并 transformHtml 钩子， 此钩子需要按顺序执行， 且上个执行结果作为下一个的参数
  if (hooks.transformHtml.length) {
    const transformHtml = config.transformHtml
    config.transformHtml = async (code, id, ctx) => {
      for (const hook of hooks.transformHtml) {
        code = await hook(code, id, ctx) ?? code
      }
      return await transformHtml?.(code, id, ctx) ?? code
    }
  }

  // 合并 transformPageData 钩子， 此钩子需要按顺序执行， 且上个执行结果作为下一个的参数
  if (hooks.transformPageData.length) {
    const transformPageData = config.transformPageData
    config.transformPageData = async (pageData, ctx) => {
      for (const hook of hooks.transformPageData) {
        const result = await hook(pageData, ctx)
        if (result)
          pageData = { ...pageData, ...result }
      }
      const result = await transformPageData?.(pageData, ctx)
      return result ? { ...pageData, ...result } : pageData
    }
  }

  // 合并 postRender 钩子， 此钩子需要按顺序执行， 且上个执行结果作为下一个的参数
  if (hooks.postRender.length) {
    const postRender = config.postRender
    config.postRender = async (context) => {
      for (const hook of hooks.postRender) {
        context = await hook(context) ?? context
      }
      return await postRender?.(context) ?? context
    }
  }
}
