# API Reference

## vitepress-tuck

### defineConfig

`defineConfig` is the core function of `vitepress-tuck`, used as a replacement for VitePress's `defineConfig`.

```ts
import { defineConfig } from 'vitepress-tuck'

function defineConfig<ThemeConfig = DefaultTheme.Config>(
  config: UserConfig<NoInfer<ThemeConfig>> & PluginsConfig,
): UserConfig<NoInfer<ThemeConfig>>
```

#### Parameters

| Parameter | Type                         | Description                                  |
| --------- | ---------------------------- | -------------------------------------------- |
| `config`  | `UserConfig & PluginsConfig` | VitePress original config + `plugins` option |

`PluginsConfig` definition:

```ts
interface PluginsConfig {
  /**
   * vitepress plugin list
   */
  plugins?: VitepressPlugin[]
}
```

#### Return Value

Returns the merged and complete VitePress `UserConfig` object.

#### How It Works

1. Iterates through the `plugins` array, merging each plugin's `markdown`, `vite`, `vue` and other configurations.
2. Collects all hooks (`buildEnd`, `transformHead`, `transformHtml`, `transformPageData`, `postRender`)
   and merges them according to their respective strategies:
   - `markdown.config`, `buildEnd` → concurrent execution
   - `transformHead` → concurrent execution with result merging
   - `transformHtml`, `transformPageData`, `postRender` → sequential execution, chained
3. Injects the `client` configuration from plugins into the built-in `virtual-enhance-app` virtual module.
4. Finally merges the user's own configuration.

---

### definePlugin

Used to define VitePress plugins. It is a type helper function that helps developers create plugins in a standardized way.

```ts
import { definePlugin } from 'vitepress-tuck'

function definePlugin<T>(
  plugin: (option?: T) => VitepressPlugin,
): (option?: T) => VitepressPlugin
```

#### Parameters

| Parameter | Type                              | Description                                                                 |
| --------- | --------------------------------- | --------------------------------------------------------------------------- |
| `plugin`  | `(option?: T) => VitepressPlugin` | Plugin factory function, receives optional options, returns a plugin object |

---

### VitepressPlugin

Type definition for plugin objects:

```ts
interface VitepressPlugin extends Pick<
  UserConfig,
  'markdown' | 'vite' | 'vue' | 'buildEnd' | 'transformHead' | 'transformHtml' | 'transformPageData' | 'postRender'
> {
  /**
   * Plugin name (required, for identification and debugging)
   */
  name: string

  /**
   * Client configuration, automatically injected into virtual:enhance-app
   */
  client?: {
    /**
     * Custom import statement list
     *
     * @example
     * ```ts
     * imports: ['import "my-plugin/style.css"']
     * ```
     */
    imports?: string[]

    /**
     * Client-side enhance function name.
     * - Not set: no enhanceApp function is injected
     * - true: default function name is `enhanceApp`
     * - string: the specified function name
     *
     * @example
     * ```ts
     * enhance: 'enhanceAppWithMyPlugin'
     * ```
     */
    enhance?: string | boolean
  }
}
```

#### Supported VitePress Configuration Options

| Property            | Type                              | Description                                                                                          |
| ------------------- | --------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `markdown`          | `UserConfig['markdown']`          | Markdown-related configuration, commonly used with `markdown.config` to register markdown-it plugins |
| `vite`              | `UserConfig['vite']`              | Vite configuration, for registering Vite plugins and optimization options                            |
| `vue`               | `UserConfig['vue']`               | Vue application-level configuration                                                                  |
| `buildEnd`          | `UserConfig['buildEnd']`          | Build completion hook (concurrent)                                                                   |
| `transformHead`     | `UserConfig['transformHead']`     | HTML head transform hook (concurrent, results merged)                                                |
| `transformHtml`     | `UserConfig['transformHtml']`     | HTML content transform hook (sequential, chained)                                                    |
| `transformPageData` | `UserConfig['transformPageData']` | Page data transform hook (sequential, chained)                                                       |
| `postRender`        | `UserConfig['postRender']`        | Post-render hook (sequential, chained)                                                               |

---

### virtual:enhance-app

`virtual:enhance-app` is a virtual module provided by `vitepress-tuck`. It automatically collects all plugins' `client` configurations and generates the corresponding code.

Import it in the theme entry:

```ts [.vitepress/theme/index.ts]
import enhanceApp from 'virtual:enhance-app'
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    enhanceApp(ctx)
  },
}
```

TypeScript support requires adding the type reference:

```json [tsconfig.json]
{
  "compilerOptions": {
    "types": ["vitepress-tuck/client-types"]
  }
}
```
