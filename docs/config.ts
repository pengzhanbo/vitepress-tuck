import { defineAdditionalConfig } from 'vitepress'

export default defineAdditionalConfig({
  lang: 'en-US',
  themeConfig: {
    nav: [
      { text: 'Plugins', link: '/plugins/', activeMatch: '/plugins/' },
    ],
    sidebar: {
      '/plugins/': { base: '/plugins/', items: [
        { text: 'Steps', link: 'steps' },
        { text: 'Mermaid', link: 'mermaid' },
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
