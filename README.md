# vitepress-tuck

English | [简体中文](./README.zh-CN.md)

[![npm version](https://npmx.dev/api/registry/badge/version/vitepress-tuck)](https://www.npmjs.com/package/vitepress-tuck)
![npm download](https://npmx.dev/api/registry/badge/downloads/vitepress-tuck)
![npm license](https://npmx.dev/api/registry/badge/license/vitepress-tuck)
[![codecov](https://codecov.io/gh/pengzhanbo/vitepress-tuck/graph/badge.svg?token=O82LEANW6N)](https://codecov.io/gh/pengzhanbo/vitepress-tuck)

> A low-barrier, extensible plugin development library and plugin ecosystem for VitePress

## Overview

`vitepress-tuck` is a plugin development library and plugin collection designed for **VitePress**.
It provides a clean, unified plugin interface and configuration merging mechanism,
significantly lowering the barrier to developing VitePress plugins while offering a more user-friendly integration experience.

### Design Philosophy

- **Low Barrier** — Plugin developers only need to focus on core logic; no need to handle complex
  VitePress configuration merging and lifecycle orchestration.
- **Easy Integration** — Plugin users simply pass a `plugins` array to `defineConfig`, and plugins automatically handle configuration injection.
- **Progressive Compatibility** — All plugins work with both `vitepress-tuck` and native VitePress integration.

## Quick Start

### Installation

```bash
# npm
npm install -D vitepress vitepress-tuck
# pnpm
pnpm add -D vitepress vitepress-tuck
# yarn
yarn add -D vitepress vitepress-tuck
# bun
bun add -D vitepress vitepress-tuck
```

### Using in Configuration

Replace VitePress's `defineConfig` with `vitepress-tuck`'s `defineConfig`:

```ts
// .vitepress/config.ts
import { defineConfig } from 'vitepress-tuck'

export default defineConfig({
  plugins: [
    // Add plugins here
  ],
  // Other VitePress config options ...
})
```

`defineConfig` is fully compatible with all parameters of VitePress's native `defineConfig`, with the additional `plugins` option.

### Client Code Injection

In `.vitepress/theme/index.ts`, import `virtual:enhance-app` to automatically inject plugin client code:

```ts
// .vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import enhanceApp from 'virtual:enhance-app'
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    enhanceApp(ctx)
  },
} satisfies Theme
```

`virtual:enhance-app` is a virtual module provided by `vitepress-tuck` that automatically collects and merges all plugins' client configurations.

> For TypeScript support, add type references in `tsconfig.json`:
>
> ```json
> {
>   "compilerOptions": {
>     "types": ["vitepress-tuck/client-types"]
>   }
> }
> ```

### Auto Components

`vitepress-tuck` integrates [`unplugin-vue-components`](https://github.com/unplugin/unplugin-vue-components) as
a built-in plugin, enabling automatic on-demand component importing for `.vue` and `.md` files — no manual import
or registration required. Plugins can declare their Vue components via the `componentResolver` field,
and users can use them directly in Markdown or Vue files.

You can customize the behavior via the `components` option:

```ts
// .vitepress/config.ts
import { defineConfig } from 'vitepress-tuck'

export default defineConfig({
  components: {
    // Any unplugin-vue-components options, e.g.:
    dirs: ['src/components'],
  },
  plugins: [],
})
```

## Plugin Ecosystem

All plugins are built on `vitepress-tuck` while remaining compatible with native VitePress.

| Plugin                                                                             | Description                                                                     |                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [vitepress-plugin-abbr](https://tuck.pengzhanbo.cn/plugins/abbr)                   | Abbreviation display, supports custom tags and content                          | ![downloads](https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-abbr) ![bundle-size](https://npmx.dev/api/registry/badge/size/vitepress-plugin-abbr)                   |
| [vitepress-plugin-steps](https://tuck.pengzhanbo.cn/plugins/steps)                 | Step container for creating step guidance content                               | ![downloads](https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-steps) ![bundle-size](https://npmx.dev/api/registry/badge/size/vitepress-plugin-steps)                 |
| [vitepress-plugin-file-tree](https://tuck.pengzhanbo.cn/plugins/file-tree)         | File directory tree display, supports expand/collapse                           | ![downloads](https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-file-tree) ![bundle-size](https://npmx.dev/api/registry/badge/size/vitepress-plugin-file-tree)         |
| [vitepress-plugin-code-tree](https://tuck.pengzhanbo.cn/plugins/code-tree)         | Code tree display, supports expand/collapse                                     | ![downloads](https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-code-tree) ![bundle-size](https://npmx.dev/api/registry/badge/size/vitepress-plugin-code-tree)         |
| [vitepress-plugin-plot](https://tuck.pengzhanbo.cn/plugins/plot)                   | Hidden text mask, click or hover to reveal hidden text (`!!text!!` syntax)      | ![downloads](https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-plot) ![bundle-size](https://npmx.dev/api/registry/badge/size/vitepress-plugin-plot)                   |
| [vitepress-plugin-npm-to](https://tuck.pengzhanbo.cn/plugins/npm-to)               | npm commands are automatically converted to `pnpm / yarn / bun / deno` commands | ![downloads](https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-npm-to) ![bundle-size](https://npmx.dev/api/registry/badge/size/vitepress-plugin-npm-to)               |
| [vitepress-plugin-repo-card](https://tuck.pengzhanbo.cn/plugins/repo-card)         | GitHub / Gitee repository card display                                          | ![downloads](https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-repo-card) ![bundle-size](https://npmx.dev/api/registry/badge/size/vitepress-plugin-repo-card)         |
| [vitepress-plugin-mermaid-tuck](https://tuck.pengzhanbo.cn/plugins/mermaid-tuck)   | Mermaid diagram rendering                                                       | ![downloads](https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-mermaid-tuck) ![bundle-size](https://npmx.dev/api/registry/badge/size/vitepress-plugin-mermaid-tuck)   |
| [vitepress-plugin-plantuml](https://tuck.pengzhanbo.cn/plugins/plantuml)           | PlantUML diagram rendering                                                      | ![downloads](https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-plantuml) ![bundle-size](https://npmx.dev/api/registry/badge/size/vitepress-plugin-plantuml)           |
| [vitepress-plugin-qrcode](https://tuck.pengzhanbo.cn/plugins/qrcode)               | QR code generation, supports two modes: image and card                          | ![downloads](https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-qrcode) ![bundle-size](https://npmx.dev/api/registry/badge/size/vitepress-plugin-qrcode)               |
| [vitepress-plugin-video](https://tuck.pengzhanbo.cn/plugins/video)                 | Multi-platform video embedding（Bilibili、YouTube、AcFun、ArtPlayer）           | ![downloads](https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-video) ![bundle-size](https://npmx.dev/api/registry/badge/size/vitepress-plugin-video)                 |
| [vitepress-plugin-obsidian](https://tuck.pengzhanbo.cn/plugins/obsidian)           | Obsidian-style Markdown syntax (Wiki links, Callout, embeds, comments)          | ![downloads](https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-obsidian) ![bundle-size](https://npmx.dev/api/registry/badge/size/vitepress-plugin-obsidian)           |
| [vitepress-plugin-pdf](https://tuck.pengzhanbo.cn/plugins/pdf)                     | Embed PDF file, supporting configuration of page number, zoom, toolbar, etc     | ![downloads](https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-pdf) ![bundle-size](https://npmx.dev/api/registry/badge/size/vitepress-plugin-pdf)                     |
| [vitepress-plugin-caniuse](https://tuck.pengzhanbo.cn/plugins/caniuse)             | Embed caniuse.com browser compatibility data                                    | ![downloads](https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-caniuse) ![bundle-size](https://npmx.dev/api/registry/badge/size/vitepress-plugin-caniuse)             |
| [vitepress-plugin-code-collapse](https://tuck.pengzhanbo.cn/plugins/code-collapse) | Code block line collapse, supporting global/single block configuration          | ![downloads](https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-code-collapse) ![bundle-size](https://npmx.dev/api/registry/badge/size/vitepress-plugin-code-collapse) |
| [vitepress-plugin-codepen](https://tuck.pengzhanbo.cn/plugins/codepen)             | Embed CodePen examples, support custom tags and themes                          | ![downloads](https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-codepen) ![bundle-size](https://npmx.dev/api/registry/badge/size/vitepress-plugin-codepen)             |
| [vitepress-plugin-jsfiddle](https://tuck.pengzhanbo.cn/plugins/jsfiddle)           | Embed JSFiddle examples with support for custom tabs.                           | ![downloads](https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-jsfiddle) ![bundle-size](https://npmx.dev/api/registry/badge/size/vitepress-plugin-jsfiddle)           |
| [vitepress-plugin-watermark](https://tuck.pengzhanbo.cn/plugins/watermark)         | Watermark display, supports custom content and styles                           | ![downloads](https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-watermark) ![bundle-size](https://npmx.dev/api/registry/badge/size/vitepress-plugin-watermark)         |

## Developing Plugins

Creating a VitePress plugin with `vitepress-tuck` is straightforward:

```ts
// src/node/index.ts
import { definePlugin } from 'vitepress-tuck'

export default definePlugin((options?: MyPluginOptions) => ({
  name: 'vitepress-plugin-example',

  // Client configuration: auto-injected into virtual:enhance-app
  client: {
    imports: [
      'import "vitepress-plugin-example/style.css"',
    ],
    enhance: 'enhanceAppWithExample',
  },

  // Component resolver: declare components for auto on-demand import
  componentResolver: ['MyComponent', 'OtherComponent'],

  // Markdown configuration: register markdown-it plugins
  markdown: {
    config: (md) => {
      md.use(yourMarkdownItPlugin, options?.markdownOptions)
    },
  },

  // Vite configuration
  vite: {
    plugins: [yourVitePlugin(options?.viteOptions)],
    ssr: {
      noExternal: ['vitepress-plugin-example'],
    },
  },

  // VitePress lifecycle hooks
  buildEnd: (siteConfig) => { /* ... */ },
  transformHead: (context) => { /* ... */ },
  transformHtml: (code, id, context) => { /* ... */ },
  transformPageData: (pageData, context) => { /* ... */ },
  postRender: (context) => { /* ... */ },
}))
```

### Development Resources

- Use [vitepress-plugin-toolkit](./packages/plugin-toolkit) which provides `createEmbedRuleBlock`,
  `createContainerPlugin`, `createContainerSyntaxPlugin` and other utilities for quickly building markdown-it plugins.
- See the [full API reference](./docs/en/guide/api.md) for `VitepressPlugin` type definitions.
- Refer to existing plugins in this repository as development examples.

### Wrapping Existing Plugins

You can easily wrap any existing plugin logic into a `vitepress-tuck` compatible form using `definePlugin`:

```ts
import { definePlugin } from 'vitepress-tuck'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'

export default definePlugin(() => ({
  name: 'vitepress-plugin-group-icons',
  client: {
    imports: ['import \'virtual:group-icons.css\''],
  },
  markdown: {
    config: (md) => {
      md.use(groupIconMdPlugin)
    },
  },
  vite: {
    plugins: [groupIconVitePlugin()],
    ssr: {
      noExternal: ['vitepress-plugin-group-icons'],
    },
  },
}))
```

## Standalone Plugin Usage

All plugins in this project can also be used independently without `vitepress-tuck`, directly in native VitePress:

```ts
// .vitepress/config.ts
import { defineConfig } from 'vitepress'
import { qrcodePlugin } from 'vitepress-plugin-qrcode'

export default defineConfig({
  markdown: {
    config(md) {
      md.use(qrcodePlugin)
    },
  },
  vite: {
    plugins: [
      // vite config...
    ],
  },
})

// .vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import { enhanceAppWithQrcode } from 'vitepress-plugin-qrcode/client'
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    enhanceAppWithQrcode(ctx)
  },
} satisfies Theme
```

---

## License

[MIT](LICENSE)
