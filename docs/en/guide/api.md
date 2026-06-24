# API Reference

<NpmBadge name="vitepress-tuck" />

## vitepress-tuck

### defineConfig

`defineConfig` is the core function of `vitepress-tuck`, used as a replacement for VitePress's `defineConfig`.

```ts
import { defineConfig } from 'vitepress-tuck'

function defineConfig<ThemeConfig = DefaultTheme.Config>(
  config: UserConfig<NoInfer<ThemeConfig>> & TuckConfig,
): UserConfig<NoInfer<ThemeConfig>>
```

#### Parameters

| Parameter | Type                      | Description                                  |
| --------- | ------------------------- | -------------------------------------------- |
| `config`  | `UserConfig & TuckConfig` | VitePress original config + `plugins` option |

`TuckConfig` definition:

```ts
interface TuckConfig {
  /**
   * vitepress plugin list
   */
  plugins?: VitepressPlugin[]

  /**
   * Options for the unplugin-vue-components plugin.
   *
   * @see - https://github.com/unplugin/unplugin-vue-components
   */
  components?: ComponentsOptions
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
4. Collects `componentResolver` declarations from plugins into the built-in `unplugin-vue-components` resolver list.
5. Finally merges the user's own configuration.

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

  /**
   * Component resolvers for unplugin-vue-components auto-import.
   *
   * - String array: declared component names are resolved from `<plugin-name>/client`
   * - ComponentResolver object: custom resolve logic
   *
   * @example
   * ```ts
   * // Simple form
   * componentResolver: ['MyComponent', 'OtherComponent']
   * ```
   */
  componentResolver?: string[] | ComponentResolver
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

---

### Built-in Plugin: auto-components

`vitepress-tuck` integrates [`unplugin-vue-components`](https://github.com/unplugin/unplugin-vue-components) as a built-in plugin, providing automatic on-demand component importing. This plugin is enabled by default — no manual registration required.

#### Default Behavior

- Scans `.vue` and `.md` files for component usage
- Generates type declarations at `node_modules/.vite/components.d.ts`
- Automatically collects `componentResolver` declarations from all plugins

#### Custom Configuration

Customize `unplugin-vue-components` behavior via the `components` option in `defineConfig`:

```ts
import { defineConfig } from 'vitepress-tuck'

export default defineConfig({
  components: {
    // Custom scan directories
    dirs: ['src/components'],
    // Use directory as namespace
    directoryAsNamespace: true,
    // Other unplugin-vue-components options...
  },
  plugins: [],
})
```

::: tip
Plugin `componentResolver` declarations are merged with the user's `components` configuration. Plugin developers only need to declare `componentResolver` in their plugin, and users can use the corresponding components directly in Markdown or Vue files without manual imports.
:::
