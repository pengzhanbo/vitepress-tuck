# vitepress-tuck

> A low-barrier, extensible plugin development library and plugin ecosystem for VitePress

## Overview

`vitepress-tuck` is a plugin development library and plugin collection designed for **VitePress**. It provides a clean, unified plugin interface and configuration merging mechanism, significantly lowering the barrier to developing VitePress plugins while offering a more user-friendly integration experience.

### Design Philosophy

- **Low Barrier** — Plugin developers only need to focus on core logic; no need to handle complex VitePress configuration merging and lifecycle orchestration.
- **Easy Integration** — Plugin users simply pass a `plugins` array to `defineConfig`, and plugins automatically handle configuration injection.
- **Progressive Compatibility** — All plugins work with both `vitepress-tuck` and native VitePress integration.

## Quick Start

### Installation

```bash
pnpm add vitepress-tuck
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

## Plugin Ecosystem

All plugins are built on `vitepress-tuck` while remaining compatible with native VitePress.

| Plugin | Package | Description |
| ------ | ------- | ----------- |
| [Steps](./docs/zh/plugins/steps.md) | `vitepress-plugin-steps` | Step-by-step container for creating guided content |
| [File Tree](./docs/zh/plugins/file-tree.md) | `vitepress-plugin-file-tree` | Render file directory trees with expand/collapse |
| [Plot](./docs/zh/plugins/plot.md) | `vitepress-plugin-plot` | Hidden text with click/hover reveal (`!!text!!` syntax) |
| [Npm To](./docs/zh/plugins/npm-to.md) | `vitepress-plugin-npm-to` | Convert npm commands to pnpm / yarn / bun / deno equivalents |
| [Mermaid](./docs/zh/plugins/mermaid.md) | `vitepress-plugin-mermaid-next` | Mermaid diagram rendering with i18n support |
| [QRCode](./docs/zh/plugins/qrcode.md) | `vitepress-plugin-qrcode` | Generate QR codes (image/card modes) |
| [Video](./docs/zh/plugins/video.md) | `vitepress-plugin-video` | Multi-platform video embedding (Bilibili, YouTube, AcFun, ArtPlayer) |
| [Obsidian](./docs/zh/plugins/obsidian.md) | `vitepress-plugin-obsidian` | Obsidian-style Markdown (Wiki links, Callouts, embeds, comments) |
| [PDF](./docs/zh/plugins/pdf.md) | `vitepress-plugin-pdf` | Embed PDF files with page/zoom/toolbar options |
| [Can I Use](./docs/zh/plugins/caniuse.md) | `vitepress-plugin-caniuse` | Embed browser compatibility data from caniuse.com |
| [Code Collapse](./docs/zh/plugins/code-collapse.md) | `vitepress-plugin-code-collapse` | Fold long code blocks (global / per-block configuration) |
| [CodePen](./docs/zh/plugins/codepen.md) | `vitepress-plugin-codepen` | Embed CodePen demos with custom tabs and themes |
| [CodeSandbox](./docs/zh/plugins/codesandbox.md) | `vitepress-plugin-codesandbox` | Embed CodeSandbox projects (embed / button modes) |
| [JSFiddle](./docs/zh/plugins/jsfiddle.md) | `vitepress-plugin-jsfiddle` | Embed JSFiddle demos with custom tabs |

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

- Use [vitepress-plugin-toolkit](./packages/plugin-toolkit) which provides `createEmbedRuleBlock`, `createContainerPlugin`, `createContainerSyntaxPlugin` and other utilities for quickly building markdown-it plugins.
- See the [full API reference](./docs/zh/guide/api.md) for `VitepressPlugin` type definitions.
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
