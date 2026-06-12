# PlantUML

<NpmBadge name="vitepress-plugin-plantuml" />

PlantUML diagram plugin, supporting PlantUML chart rendering in Markdown.

## Installation

::: npm-to

```sh
npm install vitepress-plugin-plantuml
```

:::

## Usage

### vitepress-tuck Mode <Badge type="tip">Recommended</Badge>

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress-tuck'
import plantuml from 'vitepress-plugin-plantuml'

export default defineConfig({
  plugins: [
    plantuml(),
  ],
})
```

[Learn more about **vitepress-tuck**](../guide/quick-start.md){.readmore}

### Native Mode

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress'
import { plantumlMarkdownPlugin, plantumlVitePlugin } from 'vitepress-plugin-plantuml'

export default defineConfig({
  vite: {
    plugins: [plantumlVitePlugin()],
  },
  markdown: {
    config: (md) => {
      md.use(plantumlMarkdownPlugin)
    },
  },
})
```

```ts [.vitepress/theme/index.ts]
import type { Theme } from 'vitepress'
import { enhanceAppWithPlantuml } from 'vitepress-plugin-plantuml/client'
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    enhanceAppWithPlantuml(ctx)
  },
} satisfies Theme
```

## Syntax

Use code blocks with the `plantuml` language tag:

````md
```plantuml
@startuml
Alice -> Bob: Authentication Request
Bob --> Alice: Authentication Response
@enduml
```
````

### Output Format

The plugin supports `svg` (default) and `png` output formats. You can specify the format per diagram:

````md
```plantuml png
@startuml
class Example {
  +attribute: string
  +method(): void
}
@enduml
```
````

Or set a global default:

```ts
plantuml('png') // default is 'svg'
```

## Configuration

### PlantumlPluginOptions

```ts
interface PlantumlPluginOptions {
  /**
   * Output format, 'svg' | 'png'
   * @default 'svg'
   */
  format?: PlantumlFormat
}
```

## Features

- **Dark / Light mode** — Automatically generates both dark and light diagram variants, following the VitePress theme
- **Chart / Source tabs** — Toggle between the rendered diagram and its PlantUML source code
- **Fullscreen mode** — Click the fullscreen button to view the diagram in an overlay
- **Download** — Download the current diagram as an image file
- **Multi-language** — Built-in support for English, Chinese, Japanese, Korean, Spanish, French, Russian, German, and Portuguese
- **SVG optimization** — SVGs are automatically optimized via SVGO, removing redundant styles and background layers
- **Build caching** — Rendered diagrams are cached to disk for faster incremental builds

## Built-in Languages

The plugin includes built-in support for the following languages:

- English (en, en-US)
- 简体中文 (zh, zh-CN)
- 日本語 (ja)
- 한국어 (ko)
- Español (es)
- Français (fr)
- Русский (ru)
- Deutsch (de)
- Português (pt)

## Examples

### Sequence Diagram

```plantuml
@startuml
Alice -> Bob: Authentication Request
Bob --> Alice: Authentication Response

Alice -> Bob: Another authentication Request
Alice <-- Bob: Another authentication Response
@enduml
```

### Use Case Diagram

```plantuml
@startuml
left to right direction
actor "Customer" as customer
actor "Cashier" as cashier

rectangle "POS System" {
  customer -- (Checkout)
  (Checkout) -- cashier
  (Checkout) .> (Print Receipt) : include
  (Checkout) .> (Payment) : include
  (Payment) .> (Cash Payment)
  (Payment) .> (Scan to Pay)
}
@enduml
```

### Class Diagram

```plantuml
@startuml
class Vehicle
class Car
class Bike

Vehicle <|-- Car
Vehicle <|-- Bike

class Engine
class Wheel

Car *-- Engine
Car *-- Wheel
@enduml
```

### Activity Diagram

```plantuml
@startuml
start
:User Login;
if (Authenticated?) then (yes)
  :Enter Dashboard;
  if (New Messages?) then (yes)
    :Show Notification;
  else (no)
    :Continue Browsing;
  endif
else (no)
  :Show Error;
  :Return to Login;
endif
stop
@enduml
```
