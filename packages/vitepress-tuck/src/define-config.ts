import type { DefaultTheme, HeadConfig, PageData, UserConfig } from 'vitepress'
import type { EnhanceOptions } from './builtin-plugins/virtual-enhance-app.js'
import type { PluginsConfig, VitepressPlugin } from './types.js'
import { isString, toTruthy } from '@pengzhanbo/utils'
import { mergeConfig } from 'vitepress'
import { builtinPlugins } from './builtin-plugins/index.js'

interface Hooks {
  buildEnd: NonNullable<UserConfig['buildEnd']>[]
  transformHead: NonNullable<UserConfig['transformHead']>[]
  transformHtml: NonNullable<UserConfig['transformHtml']>[]
  transformPageData: NonNullable<UserConfig['transformPageData']>[]
  postRender: NonNullable<UserConfig['postRender']>[]
  markdownConfig: NonNullable<NonNullable<UserConfig['markdown']>['config']>[]
}

export function defineConfig<ThemeConfig = DefaultTheme.Config>(
  config: UserConfig<NoInfer<ThemeConfig>> & PluginsConfig,
): UserConfig<NoInfer<ThemeConfig>> {
  const hooks: Hooks = {
    buildEnd: [],
    transformHead: [],
    transformHtml: [],
    transformPageData: [],
    postRender: [],
    markdownConfig: [],
  }
  const { plugins = [], ...userConfig } = config
  let mergedConfig = {} as UserConfig<NoInfer<ThemeConfig>>
  const enhanceApp: Required<EnhanceOptions> = { imports: [], enhances: [] }
  const processPlugins = (plugins: VitepressPlugin[]) => {
    plugins.forEach((plugin) => {
      const { name, client, buildEnd, transformHead, transformHtml, transformPageData, postRender, ...customConfig } = plugin

      // 注入 client 配置
      if (client) {
        client.imports?.length && enhanceApp.imports.push(...client.imports)
        client.enhance && enhanceApp.enhances.push({
          moduleName: name,
          exportName: isString(client.enhance) ? client.enhance : 'enhanceApp',
        })
      }

      // 提取各种钩子函数
      if (customConfig.markdown?.config) {
        hooks.markdownConfig.push(customConfig.markdown.config)
        delete customConfig.markdown.config
      }
      buildEnd && hooks.buildEnd.push(buildEnd)
      transformHead && hooks.transformHead.push(transformHead)
      transformHtml && hooks.transformHtml.push(transformHtml)
      transformPageData && hooks.transformPageData.push(transformPageData)
      postRender && hooks.postRender.push(postRender)

      // 合并 markdown / vite / vue 配置
      mergedConfig = mergeConfig(mergedConfig, customConfig)
    })
  }
  // 先处理外部插件
  processPlugins(plugins)
  // 再处理内置插件
  processPlugins(builtinPlugins({ enhanceApp }))

  // 合并 userConfig
  mergedConfig = mergeConfig(mergedConfig, userConfig)

  // 合并钩子，根据不同钩子的特性，确保顺序、入参、出参一致

  // 合并 markdown config 钩子， 此钩子可直接并发执行
  const useMarkdownConfig = mergedConfig.markdown?.config
  if (hooks.markdownConfig.length) {
    mergedConfig.markdown ??= {}
    mergedConfig.markdown.config = async (md) => {
      await Promise.all([
        ...hooks.markdownConfig.map(config => config(md)),
        useMarkdownConfig?.(md),
      ].filter(toTruthy))
    }
  }

  // 合并 buildEnd 钩子， 此钩子可并发执行
  if (hooks.buildEnd.length) {
    const buildEnd = mergedConfig.buildEnd
    mergedConfig.buildEnd = async (site) => {
      await Promise.all([
        ...hooks.buildEnd.map(hook => hook(site)),
        buildEnd?.(site),
      ].filter(toTruthy))
    }
  }

  // 合并 transformHead 钩子， 此钩子可并发执行， 但需要合并所有结果
  if (hooks.transformHead.length) {
    const transformHead = mergedConfig.transformHead
    mergedConfig.transformHead = async (site) => {
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
    const transformHtml = mergedConfig.transformHtml
    mergedConfig.transformHtml = async (code, id, ctx) => {
      for (const hook of hooks.transformHtml) {
        code = await hook(code, id, ctx) || code
      }
      return await transformHtml?.(code, id, ctx) || code
    }
  }

  // 合并 transformPageData 钩子， 此钩子需要按顺序执行， 且上个执行结果作为下一个的参数
  if (hooks.transformPageData.length) {
    const transformPageData = mergedConfig.transformPageData
    mergedConfig.transformPageData = async (pageData, ctx) => {
      for (const hook of hooks.transformPageData) {
        pageData = (await hook(pageData, ctx) || pageData) as PageData
      }
      return await transformPageData?.(pageData, ctx) || pageData
    }
  }

  // 合并 postRender 钩子， 此钩子需要按顺序执行， 且上个执行结果作为下一个的参数
  if (hooks.postRender.length) {
    const postRender = mergedConfig.postRender
    mergedConfig.postRender = async (context) => {
      for (const hook of hooks.postRender) {
        context = await hook(context) || context
      }
      return await postRender?.(context) || context
    }
  }

  return mergedConfig
}
