---
url: /guide/plugin-dev.md
---
# Plugin Development

`vitepress-tuck` provides the `definePlugin` function to help developers easily create VitePress plugins.
With `definePlugin`, you can centralize options like `markdown`, `vite`, and `vue` — which would
otherwise require scattered configuration by users — into a single plugin function.

## Basic Structure

A plugin based on `vitepress-tuck` consists of the following parts:

```ts
import { definePlugin } from 'vitepress-tuck'

export default definePlugin((options?: MyPluginOptions) => ({
  name: 'vitepress-plugin-my-plugin',

  // Client configuration: auto-injected into virtual:enhance-app
  client: {
    imports: [],
    enhance: 'enhanceAppWithMyPlugin',
  },

  // Markdown configuration: register markdown-it plugins
  markdown: {
    config: (md) => {
      md.use(myMarkdownPlugin, options?.markdownOptions)
    },
  },

  // Vite configuration
  vite: {
    plugins: [myVitePlugin(options?.viteOptions)],
  },

  // Other VitePress hooks
  buildEnd: (site) => { /* ... */ },
  transformHead: (ctx) => { /* ... */ },
  transformHtml: (code, id, ctx) => { /* ... */ },
  transformPageData: (pageData, ctx) => { /* ... */ },
  postRender: (context) => { /* ... */ },
}))
```

## Core Concepts

### name

Each plugin must have a unique `name` for identification and debugging:

```ts
{
  name: 'vitepress-plugin-my-plugin'
}
```

### client

The `client` configuration is used to inject code into the client side. `vitepress-tuck` automatically injects this code into the `virtual:enhance-app` virtual module.

#### client.imports

Add custom import statements, commonly used for importing style files:

```ts
{
  client: {
    imports: [
      'import "vitepress-plugin-my-plugin/style.css"',
    ],
  }
}
```

#### client.enhance

Specifies the client-side enhance function name. This function will be called within the VitePress theme's `enhanceApp(ctx)`.

* When set to `true`, the default function name is `enhanceApp`
* When set to a string, that string is the function name

```ts
{
  client: {
    enhance: 'enhanceAppWithMyPlugin',
  }
}
```

Correspondingly, export a function with the same name in the plugin's client entry file:

```ts
// client/index.ts
import type { EnhanceAppContext } from 'vitepress'

export function enhanceAppWithMyPlugin({ app }: EnhanceAppContext) {
  // Register components, directives, etc.
  app.component('MyComponent', MyComponent)
}
```

### markdown

Configure markdown-it plugins to extend Markdown syntax:

```ts
{
  markdown: {
    config: (md) => {
      // Register custom containers
      md.use(containerPlugin)
      // Register inline rules
      md.inline.ruler.before('emphasis', 'my_rule', myRule)
    },
  }
}
```

### vite

Configure Vite plugins and optimization options:

```ts
{
  vite: {
    plugins: [myVitePlugin()],
    ssr: {
      noExternal: ['my-plugin-package'],
    },
  }
}
```

### Hooks

`definePlugin` supports various VitePress lifecycle hooks:

| Hook | Description | Execution |
| ---- | ----------- | --------- |
| `buildEnd` | Triggered on build completion | Concurrent |
| `transformHead` | Transforms HTML head | Concurrent, results merged |
| `transformHtml` | Transforms HTML content | Sequential, chained |
| `transformPageData` | Transforms page data | Sequential, chained |
| `postRender` | Triggered after page rendering | Sequential, chained |

## Client Code Organization

When a plugin needs to provide client-side code (e.g., Vue components), the recommended directory structure is:

::: file-tree title="my-plugin"

* my-plugin
  * src
    * client
      * components
        * MyComponent.vue
      * index.ts # Export enhanceApp function
    * node
      * myPlugin.ts # Plugin core logic
      * index.ts # Plugin entry, using definePlugin
  * package.json
  * tsconfig.json

:::

Configure `exports` in `package.json` to export client code separately:

```json
{
  "exports": {
    ".": {
      "types": "./dist/node/index.d.ts",
      "default": "./dist/node/index.js"
    },
    "./client": {
      "browser": "./dist/client/browser/index.js",
      "default": "./dist/client/ssr/index.js"
    }
  }
}
```

## Recommended: vitepress-plugin-toolkit

`vitepress-plugin-toolkit` provides a rich set of utility functions to assist plugin development, including:

* `createContainerPlugin` — Create markdown-it custom containers
* `createContainerSyntaxPlugin` — Create custom syntax containers
* `createEmbedRuleBlock` — Create embed syntax blocks
* `resolveAttrs` / `stringifyAttrs` — Attribute parsing and serialization
* `createLogger` — Logging utility
* `createLocales` — Internationalization support
* `useSize` — Responsive size calculation

See the [Toolkit API documentation](./toolkit) for details.

## Complete Example

Here is a simple step plugin built with `definePlugin`:

```ts [node/index.ts]
import { definePlugin } from 'vitepress-tuck'
import { createContainerPlugin } from 'vitepress-plugin-toolkit'

export const stepsPlugin = (md) => {
  createContainerPlugin(md, 'steps', {
    before: () => '<div class="vp-steps">',
  })
}

export default definePlugin(() => ({
  name: 'vitepress-plugin-steps',
  client: {
    imports: ['import "vitepress-plugin-steps/style.css"'],
  },
  markdown: {
    config: (md) => {
      md.use(stepsPlugin)
    },
  },
}))
```

Users simply need to:

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress-tuck'
import steps from 'vitepress-plugin-steps'

export default defineConfig({
  plugins: [steps()],
})
```
