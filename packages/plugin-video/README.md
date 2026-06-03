# vitepress-plugin-video

Embed videos from multiple platforms (Bilibili, YouTube, AcFun, and self-hosted) in your VitePress site.

在 VitePress 中嵌入来自多个平台（Bilibili、YouTube、AcFun 和自托管）的视频。

## Usage

### With Vitepress-tuck

**Installation:**

```bash
# npm
npm install -D vitepress-tuck vitepress-plugin-video
# pnpm
pnpm add -D vitepress-tuck vitepress-plugin-video
# yarn
yarn add -D vitepress-tuck vitepress-plugin-video
```

**Configuration:**

```ts
// .vitepress/config.ts
import video from 'vitepress-plugin-video'
import { defineConfig } from 'vitepress-tuck'

export default defineConfig({
  plugins: [video()],
})
```

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

### With Vitepress

**Installation:**

```bash
# npm
npm install -D vitepress-plugin-video
# pnpm
pnpm add -D vitepress-plugin-video
# yarn
yarn add -D vitepress-plugin-video
```

**Configuration:**

```ts
// .vitepress/config.ts
import { defineConfig } from 'vitepress'
import { videoPlugin } from 'vitepress-plugin-video'

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(videoPlugin)
    },
  },
})
```

```ts
// .vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import { enhanceAppWithVideo } from 'vitepress-plugin-video/client'
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    enhanceAppWithVideo(ctx)
  },
} satisfies Theme
```

## Syntax

### Bilibili

```md
@[bilibili](bvid)
@[bilibili](aid cid)
@[bilibili p2 autoplay time=30](bvid)
```

| Option      | Type               | Description                         |
| ----------- | ------------------ | ----------------------------------- |
| `p{number}` | -                  | Page number                         |
| `autoplay`  | `boolean`          | Auto play                           |
| `time`      | `number \| string` | Start time in seconds or `HH:MM:SS` |

### YouTube

```md
@[youtube](video_id)
@[youtube autoplay loop start=10 end=120](video_id)
```

| Option     | Type      | Description           |
| ---------- | --------- | --------------------- |
| `autoplay` | `boolean` | Auto play             |
| `loop`     | `boolean` | Loop playback         |
| `start`    | `number`  | Start time in seconds |
| `end`      | `number`  | End time in seconds   |

### AcFun

```md
@[acfun](acid)
```

### ArtPlayer (Self-hosted)

```md
@[artPlayer](/videos/demo.mp4)
@[artPlayer muted autoplay poster="/cover.jpg" width="800px"](/videos/demo.mp4)
```

| Option     | Type      | Default  | Description                  |
| ---------- | --------- | -------- | ---------------------------- |
| `autoplay` | `boolean` | `false`  | Auto play                    |
| `muted`    | `boolean` | `false`  | Muted                        |
| `loop`     | `boolean` | `false`  | Loop playback                |
| `volume`   | `number`  | `0.75`   | Volume level                 |
| `poster`   | `string`  | -        | Poster image URL             |
| `autoMini` | `boolean` | `false`  | Auto mini mode               |
| `width`    | `string`  | `"100%"` | Player width                 |
| `height`   | `string`  | -        | Player height                |
| `ratio`    | `string`  | -        | Aspect ratio (e.g. `"16:9"`) |

Supports `mp4`, `mp3`, `webm`, `ogg`, `mkv`, `mov` formats out of the box.

For streaming formats, install optional dependencies:

```bash
pnpm add dashjs     # for .mpd / .dash
pnpm add hls.js     # for .m3u8 / .hls
pnpm add mpegts.js  # for .flv / .ts
```

### Disable Platforms

```ts
video({
  bilibili: true,
  youtube: true,
  acfun: false,
  artplayer: true,
})
```
