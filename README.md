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

| Plugin                                          | Description                                                                             |                                                                         |
| ----------------------------------------------- | --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| [vitepress-plugin-abbr][abbr]                   | Add abbreviation support to VitePress                                                   | ![downloads][abbr-download] ![bundle-size][abbr-size]                   |
| [vitepress-plugin-annotation][annotation]       | Add annotation support to VitePress                                                     | ![downloads][annotation-download] ![bundle-size][annotation-size]       |
| [vitepress-plugin-caniuse][caniuse]             | Embed <https://caniuse.com> browser compatibility data                                  | ![downloads][caniuse-download] ![bundle-size][caniuse-size]             |
| [vitepress-plugin-code-collapse][code-collapse] | provide code block collapsed lines feature                                              | ![downloads][code-collapse-download] ![bundle-size][code-collapse-size] |
| [vitepress-plugin-code-tree][code-tree]         | Render code tree structure in your VitePress site                                       | ![downloads][code-tree-download] ![bundle-size][code-tree-size]         |
| [vitepress-plugin-codepen][codepen]             | Embed codepen in your Vitepress site                                                    | ![downloads][codepen-download] ![bundle-size][codepen-size]             |
| [vitepress-plugin-collapse][collapse]           | Render collapsible sections in your VitePress site site.                                | ![downloads][collapse-download] ![bundle-size][collapse-size]           |
| [vitepress-plugin-field][field]                 | Render structured API fields and properties documentation in your VitePress site        | ![downloads][field-download] ![bundle-size][field-size]                 |
| [vitepress-plugin-file-tree][file-tree]         | Render file tree structure in your VitePress site                                       | ![downloads][file-tree-download] ![bundle-size][file-tree-size]         |
| [vitepress-plugin-icons][icons]                 | Provide icons for vitepress with iconify / iconfont / fontAwesome                       | ![downloads][icons-download] ![bundle-size][icons-size]                 |
| [vitepress-plugin-jsfiddle][jsfiddle]           | Embed JSFiddle in your VitePress site                                                   | ![downloads][jsfiddle-download] ![bundle-size][jsfiddle-size]           |
| [vitepress-plugin-mark][mark]                   | Add mark (highlight) support to your VitePress site                                     | ![downloads][mark-download] ![bundle-size][mark-size]                   |
| [vitepress-plugin-mermaid-tuck][mermaid-tuck]   | Render Mermaid diagrams in your VitePress site                                          | ![downloads][mermaid-tuck-download] ![bundle-size][mermaid-tuck-size]   |
| [vitepress-plugin-npm-to][npm-to]               | npm commands are automatically converted to `pnpm / yarn / bun / deno` commands         | ![downloads][npm-to-download] ![bundle-size][npm-to-size]               |
| [vitepress-plugin-obsidian][obsidian]           | Obsidian-style Markdown syntax (Wiki links, Callout, embeds, comments)                  | ![downloads][obsidian-download] ![bundle-size][obsidian-size]           |
| [vitepress-plugin-pdf][pdf]                     | Embed PDF files in your VitePress site                                                  | ![downloads][pdf-download] ![bundle-size][pdf-size]                     |
| [vitepress-plugin-plantuml][plantuml]           | Render PlantUML diagrams in your VitePress site                                         | ![downloads][plantuml-download] ![bundle-size][plantuml-size]           |
| [vitepress-plugin-plot][plot]                   | Add spoiler/hidden text with `!!text!!` syntax. Text is masked until hovered or clicked | ![downloads][plot-download] ![bundle-size][plot-size]                   |
| [vitepress-plugin-qrcode][qrcode]               | Generate QR codes in your VitePress site                                                | ![downloads][qrcode-download] ![bundle-size][qrcode-size]               |
| [vitepress-plugin-repo-card][repo-card]         | Add repository (github/gitee) card in your VitePress site                               | ![downloads][repo-card-download] ![bundle-size][repo-card-size]         |
| [vitepress-plugin-steps][steps]                 | Render ordered/unordered lists as numbered steps with badges and connecting lines       | ![downloads][steps-download] ![bundle-size][steps-size]                 |
| [vitepress-plugin-video][video]                 | Multi-platform video embedding（Bilibili、YouTube、AcFun、ArtPlayer）                   | ![downloads][video-download] ![bundle-size][video-size]                 |
| [vitepress-plugin-watermark][watermark]         | Add watermark to your VitePress site                                                    | ![downloads][watermark-download] ![bundle-size][watermark-size]         |

[abbr]: https://tuck.pengzhanbo.cn/plugins/abbr
[abbr-download]: https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-abbr
[abbr-size]: https://npmx.dev/api/registry/badge/size/vitepress-plugin-abbr
[annotation]: https://tuck.pengzhanbo.cn/plugins/annotation
[annotation-download]: https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-annotation
[annotation-size]: https://npmx.dev/api/registry/badge/size/vitepress-plugin-annotation
[caniuse]: https://tuck.pengzhanbo.cn/plugins/caniuse
[caniuse-download]: https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-caniuse
[caniuse-size]: https://npmx.dev/api/registry/badge/size/vitepress-plugin-caniuse
[code-collapse]: https://tuck.pengzhanbo.cn/plugins/code-collapse
[code-collapse-download]: https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-code-collapse
[code-collapse-size]: https://npmx.dev/api/registry/badge/size/vitepress-plugin-code-collapse
[code-tree]: https://tuck.pengzhanbo.cn/plugins/code-tree
[code-tree-download]: https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-code-tree
[code-tree-size]: https://npmx.dev/api/registry/badge/size/vitepress-plugin-code-tree
[codepen]: https://tuck.pengzhanbo.cn/plugins/codepen
[codepen-download]: https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-codepen
[codepen-size]: https://npmx.dev/api/registry/badge/size/vitepress-plugin-codepen
[collapse]: https://tuck.pengzhanbo.cn/plugins/collapse
[collapse-download]: https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-collapse
[collapse-size]: https://npmx.dev/api/registry/badge/size/vitepress-plugin-collapse
[field]: https://tuck.pengzhanbo.cn/plugins/field
[field-download]: https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-field
[field-size]: https://npmx.dev/api/registry/badge/size/vitepress-plugin-field
[file-tree]: https://tuck.pengzhanbo.cn/plugins/file-tree
[file-tree-download]: https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-file-tree
[file-tree-size]: https://npmx.dev/api/registry/badge/size/vitepress-plugin-file-tree
[icons]: https://tuck.pengzhanbo.cn/plugins/icons
[icons-download]: https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-icons
[icons-size]: https://npmx.dev/api/registry/badge/size/vitepress-plugin-icons
[jsfiddle]: https://tuck.pengzhanbo.cn/plugins/jsfiddle
[jsfiddle-download]: https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-jsfiddle
[jsfiddle-size]: https://npmx.dev/api/registry/badge/size/vitepress-plugin-jsfiddle
[mark]: https://tuck.pengzhanbo.cn/plugins/mark
[mark-download]: https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-mark
[mark-size]: https://npmx.dev/api/registry/badge/size/vitepress-plugin-mark
[mermaid-tuck]: https://tuck.pengzhanbo.cn/plugins/mermaid-tuck
[mermaid-tuck-download]: https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-mermaid-tuck
[mermaid-tuck-size]: https://npmx.dev/api/registry/badge/size/vitepress-plugin-mermaid-tuck
[npm-to]: https://tuck.pengzhanbo.cn/plugins/mermaid-tuck
[npm-to-download]: https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-mermaid-tuck
[npm-to-size]: https://npmx.dev/api/registry/badge/size/vitepress-plugin-mermaid-tuck
[obsidian]: https://tuck.pengzhanbo.cn/plugins/obsidian
[obsidian-download]: https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-obsidian
[obsidian-size]: https://npmx.dev/api/registry/badge/size/vitepress-plugin-obsidian
[pdf]: https://tuck.pengzhanbo.cn/plugins/pdf
[pdf-download]: https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-pdf
[pdf-size]: https://npmx.dev/api/registry/badge/size/vitepress-plugin-pdf
[plantuml]: https://tuck.pengzhanbo.cn/plugins/plantuml
[plantuml-download]: https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-plantuml
[plantuml-size]: https://npmx.dev/api/registry/badge/size/vitepress-plugin-plantuml
[plot]: https://tuck.pengzhanbo.cn/plugins/plot
[plot-download]: https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-plot
[plot-size]: https://npmx.dev/api/registry/badge/size/vitepress-plugin-plot
[qrcode]: https://tuck.pengzhanbo.cn/plugins/qrcode
[qrcode-download]: https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-qrcode
[qrcode-size]: https://npmx.dev/api/registry/badge/size/vitepress-plugin-qrcode
[repo-card]: https://tuck.pengzhanbo.cn/plugins/repo-card
[repo-card-download]: https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-repo-card
[repo-card-size]: https://npmx.dev/api/registry/badge/size/vitepress-plugin-repo-card
[steps]: https://tuck.pengzhanbo.cn/plugins/steps
[steps-download]: https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-steps
[steps-size]: https://npmx.dev/api/registry/badge/size/vitepress-plugin-steps
[video]: https://tuck.pengzhanbo.cn/plugins/video
[video-download]: https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-video
[video-size]: https://npmx.dev/api/registry/badge/size/vitepress-plugin-video
[watermark]: https://tuck.pengzhanbo.cn/plugins/watermark
[watermark-download]: https://npmx.dev/api/registry/badge/downloads/vitepress-plugin-watermark
[watermark-size]: https://npmx.dev/api/registry/badge/size/vitepress-plugin-watermark

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
