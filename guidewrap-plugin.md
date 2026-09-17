---
url: /guidewrap-plugin.md
---
# Wrapping Existing Plugins

If your VitePress site is already using plugins, or you have a plugin that hasn't been packaged
for `vitepress-tuck` mode, you can easily wrap it into a compatible form.

## Why Wrap?

Traditional VitePress plugins often require users to configure multiple locations:

```ts
// Traditional approach — configuration scattered across multiple places
import { defineConfig } from 'vitepress'
import { someMarkdownPlugin } from 'some-plugin'

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(someMarkdownPlugin)
    },
  },
  vite: {
    plugins: [someVitePlugin()],
  },
})
```

By wrapping into a `vitepress-tuck` plugin, users only need to add it to the `plugins` array — all
configuration is handled internally by the plugin.

## Wrapping Methods

### Wrapping with definePlugin

For any existing plugin logic, use `definePlugin` to wrap it:

```ts
import { definePlugin } from 'vitepress-tuck'
import { someMarkdownPlugin } from 'some-plugin'
import { someVitePlugin } from 'some-plugin/vite'

export default definePlugin((options?: MyOptions) => ({
  name: 'vitepress-plugin-some-plugin',
  markdown: {
    config: (md) => {
      md.use(someMarkdownPlugin, options)
    },
  },
  vite: {
    plugins: [someVitePlugin(options)],
  },
}))
```

### Wrapping a Markdown-Only Plugin

If the plugin only involves a markdown-it extension, wrapping is very simple:

```ts
import { definePlugin } from 'vitepress-tuck'

export default definePlugin(() => ({
  name: 'vitepress-plugin-my-plugin',
  markdown: {
    config: (md) => {
      md.use(myMarkdownItPlugin)
    },
  },
}))
```

### Wrapping a Vite-Only Plugin

If the plugin only needs Vite configuration:

```ts
import { definePlugin } from 'vitepress-tuck'
import myVitePlugin from 'vite-plugin-my'

export default definePlugin((options?: MyOptions) => ({
  name: 'vitepress-plugin-my-plugin',
  vite: {
    plugins: [myVitePlugin(options)],
  },
}))
```

### Wrapping a Plugin That Requires Client Injection

If the plugin needs to inject components or styles on the client side, configure the `client` option:

```ts
import { definePlugin } from 'vitepress-tuck'

export default definePlugin(() => ({
  name: 'vitepress-plugin-my-plugin',
  client: {
    imports: [
      // Inject styles
      'import "my-plugin/style.css"',
    ],
    enhance: 'enhanceAppWithMyPlugin',
  },
  markdown: {
    config: (md) => {
      md.use(myMarkdownPlugin)
    },
  },
  vite: {
    ssr: {
      // Ensure correct bundling during SSR
      noExternal: ['my-plugin'],
    },
  },
}))
```

And export the enhance function in the client entry file:

```ts
// client/index.ts
import type { EnhanceAppContext } from 'vitepress'
import MyComponent from './components/MyComponent.vue'

export function enhanceAppWithMyPlugin({ app }: EnhanceAppContext) {
  app.component('MyComponent', MyComponent)
}
```

## Real-World Example

Here's how to wrap `vitepress-plugin-group-icons` into a `vitepress-tuck` plugin:

```ts
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'
import { definePlugin } from 'vitepress-tuck'

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
    plugins: [
      groupIconVitePlugin(),
    ],
    ssr: {
      noExternal: [
        'vitepress-plugin-group-icons',
      ],
    },
  },
}))
```

## Maintaining Compatibility

Wrapped plugins can still be used independently (without `vitepress-tuck`). Simply provide both usage modes in the plugin's README:

```ts
// Method 1: vitepress-tuck mode (recommended)
import { defineConfig } from 'vitepress-tuck'
import myPlugin from 'my-plugin'

export default defineConfig({
  plugins: [myPlugin()],
})

// Method 2: Native VitePress mode
import { defineConfig } from 'vitepress'
import { myPlugin } from 'my-plugin/raw'

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(myPlugin)
    },
  },
})
```
