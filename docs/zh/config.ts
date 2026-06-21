import { defineAdditionalConfig } from 'vitepress'

export default defineAdditionalConfig({
  lang: 'zh-CN',
  themeConfig: {
    nav: [
      { text: '指南', link: '/zh/guide/quick-start', activeMatch: '/zh/guide/' },
      { text: '插件', link: '/zh/plugins/intro', activeMatch: '/zh/plugins/' },
    ],
    sidebar: {
      '/zh/guide/': { base: '/zh/guide/', items: [
        { text: '快速开始', link: 'quick-start' },
        { text: '插件开发', link: 'plugin-dev' },
        { text: '包装现有插件', link: 'wrap-plugin' },
        { text: 'Core API', link: 'api' },
        { text: 'Toolkit API', link: 'toolkit' },
      ] },
      '/zh/plugins/': { base: '/zh/plugins/', items: [
        { text: '总览', link: 'intro' },
        { text: '步骤', link: 'steps' },
        { text: '文件树', link: 'file-tree' },
        { text: '代码树', link: 'code-tree' },
        { text: '字段', link: 'field' },
        { text: '隐秘文本', link: 'plot' },
        { text: 'Npm To', link: 'npm-to' },
        { text: 'Mermaid', link: 'mermaid' },
        { text: 'PlantUML', link: 'plantuml' },
        { text: '二维码', link: 'qrcode' },
        { text: '视频嵌入', link: 'video' },
        { text: 'Obsidian', link: 'obsidian' },
        { text: 'PDF', link: 'pdf' },
        { text: 'Can I Use', link: 'caniuse' },
        { text: '代码块行折叠', link: 'code-collapse' },
        { text: 'CodePen', link: 'codepen' },
        { text: 'JSFiddle', link: 'jsfiddle' },
      ] },
    },

    search: {
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索',
          },
          modal: {
            displayDetails: '显示详细列表',
            resetButtonTitle: '清除查询条件',
            backButtonTitle: '返回',
            noResultsText: '没有找到相关结果',
            footer: {
              selectText: '选择',
              selectKeyAriaLabel: '键入',
              navigateText: '导航',
              navigateUpKeyAriaLabel: '向上',
              navigateDownKeyAriaLabel: '向下',
              closeText: '关闭',
              closeKeyAriaLabel: '退出',
            },
          },
        },
      },
    },
    editLink: {
      pattern: 'https://github.com/pengzhanbo/vitepress-tuck/edit/main/docs/:path',
      text: '在 Github 编辑此页',
    },

    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © 2022-${new Date().getFullYear()} pengzhanbo`,
    },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    outline: {
      label: '页面导航',
      level: [2, 3],
    },

    lastUpdated: {
      text: '最后更新于',
    },

    notFound: {
      title: '页面未找到',
      quote:
        '但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。',
      linkLabel: '前往首页',
      linkText: '带我回首页',
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容',
  },
})
