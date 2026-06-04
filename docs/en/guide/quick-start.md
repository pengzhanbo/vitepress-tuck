# Quick Start

## What is vitepress-tuck?

`vitepress-tuck` provides simple, flexible, and low-barrier plugin development and integration capabilities
for VitePress. It wraps VitePress's `defineConfig` to provide an additional `plugins` option, shifting the
complexity of plugin integration into the plugins themselves, so users only need to add plugins to the `plugins` array.

## Installation

::: npm-to

```sh
npm install vitepress vitepress-tuck
```

:::

## Using in a VitePress Site

::: steps

- ### Replace the Configuration File

  Replace `defineConfig` in `.vitepress/config.ts` with `vitepress-tuck`'s `defineConfig`:

  ```ts [.vitepress/config.ts]
  import { defineConfig } from 'vitepress' // [!code --]
  import { defineConfig } from 'vitepress-tuck' // [!code ++]

  export default defineConfig({
    // [!code ++:3]
    plugins: [
      // Add plugins here
    ],
    // Other VitePress config options ...
  })
  ```

- ### Configure the Client Entry

  Import `virtual:enhance-app` in `.vitepress/theme/index.ts`:

  ```ts [.vitepress/theme/index.ts]
  import type { Theme } from 'vitepress'
  import enhanceApp from 'virtual:enhance-app' // [!code ++]
  import DefaultTheme from 'vitepress/theme'

  export default {
    extends: DefaultTheme,
    enhanceApp(ctx) {
      enhanceApp(ctx) // [!code ++]
    },
  } satisfies Theme
  ```

  `virtual:enhance-app` is a virtual module. `vitepress-tuck` automatically injects plugin client code into it — no manual configuration required.

- ### TypeScript Support

  If your project uses TypeScript, add the type reference in `tsconfig.json`:

  ```json
  {
    "compilerOptions": {
      "types": ["vitepress-tuck/client-types"]
    }
  }
  ```

:::

## Using Plugins

Using plugins is simple — just import and invoke them in the `plugins` array:

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress-tuck'
import steps from 'vitepress-plugin-steps'
import mermaid from 'vitepress-plugin-mermaid-next'

export default defineConfig({
  plugins: [
    steps(),
    mermaid({
      // Plugin options can be passed here
    }),
  ],
})
```

Refer to each plugin's documentation for its configuration options.
