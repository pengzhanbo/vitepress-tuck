# Mermaid

Mermaid diagram plugin, supporting Mermaid chart rendering in Markdown.

## Installation

::: npm-to

```sh
npm install vitepress-plugin-mermaid-next
```

:::

## Usage

### vitepress-tuck Mode <Badge type="tip">Recommended</Badge>

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress-tuck'
import mermaid from 'vitepress-plugin-mermaid-next'

export default defineConfig({
  plugins: [
    mermaid(),
  ],
})
```

[Learn more about **vitepress-tuck**](../guide/quick-start.md){.readmore}

### Native Mode

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress'
import { mermaidMarkdownPlugin, mermaidVitePlugin } from 'vitepress-plugin-mermaid-next'

export default defineConfig({
  vite: {
    plugins: [mermaidVitePlugin({
      options: { theme: 'default' },
    })],
  },
  markdown: {
    config: (md) => {
      md.use(mermaidMarkdownPlugin)
    },
  },
})
```

```ts [.vitepress/theme/index.ts]
import type { Theme } from 'vitepress'
import { enhanceAppWithMermaid } from 'vitepress-plugin-mermaid-next/client'
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    enhanceAppWithMermaid(ctx)
  },
} satisfies Theme
```

## Syntax

Use code blocks with the `mermaid` language tag:

````md
```mermaid
flowchart LR
  Start --> Stop
```
````

````md
```mermaid
sequenceDiagram
  Alice->>John: Hello John, how are you?
  John-->>Alice: Great!
  Alice->>John: See you later!
```
````

## Configuration

### MermaidPluginOptions

```ts
interface MermaidPluginOptions {
  /**
   * Mermaid configuration (excluding startOnLoad and themeVariables)
   */
  options?: Omit<MermaidConfig, 'startOnLoad' | 'themeVariables'> & {
    themeVariables?: MermaidThemeVariables
  }

  /**
   * Locale configuration
   */
  locales?: Record<string, MermaidLocaleData>
}
```

### MermaidThemeVariables

Supports custom theme variables for various Mermaid diagram types, covering:

- Basic variables (background, text color, line color, etc.)
- C4, Class, ER diagram variables
- Flowchart variables
- Gantt chart variables
- Git graph variables
- Journey diagram variables
- Pie chart variables
- Requirement diagram variables
- State diagram variables
- Sequence diagram variables

### MermaidLocaleData

```ts
interface MermaidLocaleData {
  chart?: string       // Default 'Chart'
  source?: string      // Default 'Source'
  fullscreen?: string  // Default 'Fullscreen'
  download?: string    // Default 'Download'
}
```

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

```mermaid
---
title: Flowchart
---
flowchart TB
    c1-->a2
    subgraph one
    a1-->a2
    end
    subgraph two
    b1-->b2
    end
    subgraph three
    c1-->c2
    end
    one --> two
    three --> two
    two --> c2
```

```mermaid
---
title: Sequence Diagram
---
sequenceDiagram
  Alice ->> Bob: Hello Bob, how are you?
  Bob-->>John: How about you John?
  Bob--x Alice: I am good thanks!
  Bob-x John: I am good thanks!
  Note right of John: Bob thinks a long<br/>long time, so long<br/>that the text does<br/>not fit on a row.

  Bob-->Alice: Checking with John...
  Alice->John: Yes... John, how are you?
```

```mermaid
---
title: Animal Example
---
classDiagram
  note "From Duck till Zebra"
  Animal <|-- Duck
  note for Duck "can fly<br>can swim<br>can dive<br>can help in debugging"
  Animal <|-- Fish
  Animal <|-- Zebra
  Animal : +int age
  Animal : +String gender
  Animal: +isMammal()
  Animal: +mate()
  class Duck{
    +String beakColor
    +swim()
    +quack()
  }
  class Fish{
    -int sizeInFeet
    -canEat()
  }
  class Zebra{
    +bool is_wild
    +run()
  }
```

```mermaid
gantt
  dateFormat  YYYY-MM-DD
  title       Adding GANTT diagram functionality to mermaid
  excludes    weekends
  %% (`excludes` accepts specific dates in YYYY-MM-DD format, days of the week ("sunday") or "weekends", but not the word "weekdays".)

  section A section
  Completed task            :done,    des1, 2014-01-06,2014-01-08
  Active task               :active,  des2, 2014-01-09, 3d
  Future task               :         des3, after des2, 5d
  Future task2              :         des4, after des3, 5d

  section Critical tasks
  Completed task in the critical line :crit, done, 2014-01-06,24h
  Implement parser                    :crit, done, after des1, 2d
  Create tests for parser             :crit, active, 3d
  Future task in critical line        :crit, 5d
  Create tests for renderer           :2d
  Add to mermaid                      :1d

  section Documentation
  Describe gantt syntax               :active, a1, after des1, 3d
  Add gantt diagram to demo page      :after a1  , 20h
  Add another diagram to demo page    :doc1, after a1  , 48h

  section Last section
  Describe gantt syntax               :after doc1, 3d
  Add gantt diagram to demo page      :20h
  Add another diagram to demo page    :48h
```
