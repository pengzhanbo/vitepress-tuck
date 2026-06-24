# vitepress-tuck

Enhance vitepress configuration and provide plugin development capabilities.

> [!NOTE]
> vitepress itself does not provide complete plugin development capabilities.
> Some existing slightly complex plugins often need to be configured in both the `markdown` and `vite` sections of the configuration file.
> The process of integrating plugins in vitepress for users is scattered and difficult to maintain.
>
> `tuck` provides vitepress with simple, flexible, and low-barrier plugin development capabilities:
>
> - Developers can directly develop plugins using `definePlugin`;
> - Users only need to add plugins in the `plugins` configuration.

## Install

```bash
# npm
npm install vitepress vitepress-tuck

# pnpm
pnpm add vitepress vitepress-tuck

# yarn
yarn add vitepress vitepress-tuck
```

## Using tuck in vitepress

Replace `defineConfig` from `vitepress` with `defineConfig` from `vitepress-tuck`

```ts
// .vitepress/config.ts
import { defineConfig } from 'vitepress-tuck'

export default defineConfig({
  plugins: [
    // Add plugins here
  ],
  // Other vitepress configuration items
})
```

In the client configuration file, import `virtual:enhance-app` to automatically inject the plugin's client code:

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

## Plugin Development

Develop plugins using `definePlugin`.

```ts
// Plugin development
import { definePlugin } from 'vitepress-tuck'

export default definePlugin((options?: MyPluginOptions) => ({
  name: 'vitepress-plugin-my-plugin',
  // Client configuration of the plugin, used to inject into the client config file
  client: {
    imports: [], // Modules that the client needs to import, e.g., style files
    enhance: 'enhanceAppWithMyPlugin', // Named export of the client enhancement function
  },
  markdown: {
    config: (md) => {
      // Configure markdown plugin here
      md.use(myMarkdownPlugin, options?.markdownOptions)
    }
  },
  vite: {
    // Configure vite here
    plugins: [myVitePlugin(options?.viteOptions)]
  },
  // Other vitepress related hooks
  buildEnd: () => {},
  transformHead: () => {},
  transformHtml: () => {},
  transformPageData: () => {},
  postRender: () => {},
}))
```

When a plugin needs to provide components or other client code:

Use the `client` field in the `exports` of `package.json` to export client code:

```json
{
  "exports": {
    ".": "./node/index.js",
    "client": "./client/index.js"
  }
}
```

In `./client/index.js`, export a named function with the same name as `client.enhance`:

```ts
// client/index.js
export function enhanceAppWithMyPlugin({ app }: EnhanceAppContext) {
  // Add plugin's client code here
  app.component('MyComponent', MyComponent)
}
```

`vitepress-tuck` will check the `client` configuration and automatically inject the code into `virtual:enhance-app`.

When a plugin provides Vue components that should be auto-imported, declare them via the `componentResolver` field.
The simplest form is an array of component names — they will be resolved from `<plugin-name>/client`:

```ts
import { definePlugin } from 'vitepress-tuck'

export default definePlugin(() => ({
  name: 'vitepress-plugin-my-plugin',
  // Components listed here are auto-imported from 'vitepress-plugin-my-plugin/client'
  componentResolver: ['MyComponent', 'OtherComponent'],
  // ...other config
}))
```

For more advanced use cases, you can also pass a custom `ComponentResolver` object from `unplugin-vue-components`:

```ts
import type { ComponentResolver } from 'unplugin-vue-components'
import { definePlugin } from 'vitepress-tuck'

const myResolver: ComponentResolver = {
  type: 'component',
  resolve: (name) => {
    if (name.startsWith('My')) {
      return { name, from: 'vitepress-plugin-my-plugin/client' }
    }
  },
}

export default definePlugin(() => ({
  name: 'vitepress-plugin-my-plugin',
  componentResolver: myResolver,
  // ...other config
}))
```

## Auto Components

`vitepress-tuck` integrates [`unplugin-vue-components`](https://github.com/unplugin/unplugin-vue-components) as
a built-in plugin, enabling automatic on-demand component importing for `.vue` and `.md` files.
You no longer need to manually import and register components.

By default, the built-in plugin scans `.vue` and `.md` files and generates type declarations
at `node_modules/.vite/components.d.ts`. You can customize the behavior via the `components` option:

```ts
// .vitepress/config.ts
import { defineConfig } from 'vitepress-tuck'

export default defineConfig({
  components: {
    // Any unplugin-vue-components options, e.g.:
    dirs: ['src/components'],
    directoryAsNamespace: true,
  },
  plugins: [],
})
```

When a plugin provides Vue components, it can declare them via the `componentResolver` field so that they
are automatically resolved by `unplugin-vue-components` — see [Plugin Development](#plugin-development).
