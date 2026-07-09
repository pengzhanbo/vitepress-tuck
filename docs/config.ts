import { defineAdditionalConfig } from 'vitepress'

export default defineAdditionalConfig({
  lang: 'en-US',
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/quick-start', activeMatch: '/guide/' },
      { text: 'Plugins', link: '/plugins/intro', activeMatch: '/plugins/' },
    ],
    sidebar: {
      '/guide/': { base: '/guide/', items: [
        { text: 'Quick Start', link: 'quick-start' },
        { text: 'Plugin Development', link: 'plugin-dev' },
        { text: 'Wrapping Plugins', link: 'wrap-plugin' },
        { text: 'Core API', link: 'api' },
        { text: 'Toolkit API', link: 'toolkit' },
      ] },
      '/plugins': { base: '/plugins/', items: [
        { text: 'Overview', link: 'intro' },
        { text: 'Syntax Extensions', collapsed: false, items: [
          { text: 'Abbr', link: 'abbr' },
          { text: 'Annotation', link: 'annotation' },
          { text: 'Mark', link: 'mark' },
          { text: 'Plot', link: 'plot' },
          { text: 'Icons', link: 'icons' },
          { text: 'Obsidian', link: 'obsidian' },
        ] },
        { text: 'Content Container', collapsed: false, items: [
          { text: 'Steps', link: 'steps' },
          { text: 'Field', link: 'field' },
          { text: 'Collapse', link: 'collapse' },
        ] },
        { text: 'Diagram', collapsed: false, items: [
          { text: 'Mermaid', link: 'mermaid' },
          { text: 'PlantUML', link: 'plantuml' },
        ] },
        { text: 'Code Enhance', collapsed: false, items: [
          { text: 'Code Collapse', link: 'code-collapse' },
          { text: 'File Tree', link: 'file-tree' },
          { text: 'Code Tree', link: 'code-tree' },
          { text: 'Npm To', link: 'npm-to' },
          { text: 'Can I Use', link: 'caniuse' },
          { text: 'Repo Card', link: 'repo-card' },
          { text: 'CodePen', link: 'codepen' },
          { text: 'JSFiddle', link: 'jsfiddle' },
          { text: 'Stackblitz', link: 'stackblitz' },
        ] },
        { text: 'Resource Embedding', collapsed: false, items: [
          { text: 'Video', link: 'video' },
          { text: 'PDF', link: 'pdf' },
          { text: 'QRCode', link: 'qrcode' },
        ] },
        { text: 'Utility', collapsed: false, items: [
          { text: 'Watermark', link: 'watermark' },
        ] },
      ] },
    },
    search: {
      options: {
        translations: {
          button: {
            buttonText: 'Search',
            buttonAriaLabel: 'Search',
          },
          modal: {
            displayDetails: 'Display detailed list',
            resetButtonTitle: 'Clear query',
            backButtonTitle: 'Back',
            noResultsText: 'No results found',
            footer: {
              selectText: 'Select',
              selectKeyAriaLabel: 'Enter',
              navigateText: 'Navigate',
              navigateUpKeyAriaLabel: 'Up',
              navigateDownKeyAriaLabel: 'Down',
              closeText: 'Close',
              closeKeyAriaLabel: 'Exit',
            },
          },
        },
      },
    },
    editLink: {
      pattern: 'https://github.com/pengzhanbo/vitepress-plugins/edit/main/docs/:path',
      text: 'Edit on Github',
    },
    footer: {
      message: 'Released under the MIT License',
      copyright: `Copyright © 2026-${new Date().getFullYear()} pengzhanbo`,
    },
    docFooter: {
      prev: 'Previous page',
      next: 'Next page',
    },
    outline: {
      label: 'Page navigation',
      level: [2, 3],
    },
    lastUpdated: {
      text: 'Last updated',
    },
    notFound: {
      title: 'Page not found',
      quote:
        'But if you do not change direction, and continue to seek, you may end up where you are headed.',
      linkLabel: 'Go to home',
      linkText: 'Take me home',
    },

    langMenuLabel: 'Languages',
    returnToTopLabel: 'Return to top',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Theme',
    lightModeSwitchTitle: 'Switch to light mode',
    darkModeSwitchTitle: 'Switch to dark mode',
    skipToContentLabel: 'Skip to content',
  },
})
