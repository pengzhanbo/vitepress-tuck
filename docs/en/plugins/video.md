# Video

<NpmBadge name="vitepress-plugin-video" />

Multi-platform video embedding plugin, supporting Bilibili, YouTube, AcFun, and ArtPlayer.

## Installation

::: npm-to

```sh
npm install vitepress-plugin-video
```

:::

## Usage

### vitepress-tuck Mode <Badge type="tip">Recommended</Badge>

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress-tuck'
import video from 'vitepress-plugin-video'

export default defineConfig({
  plugins: [
    video({
      // All optional, default to true
      artplayer: true,
      youtube: true,
      bilibili: true,
      acfun: true,
    }),
  ],
})
```

[Learn more about **vitepress-tuck**](../guide/quick-start.md){.readmore}

### Native Mode

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress'
import { videoMarkdownPlugin } from 'vitepress-plugin-video'

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(videoMarkdownPlugin, {
        artplayer: true,
        youtube: true,
        bilibili: true,
        acfun: true,
      })
    },
  },
})
```

```ts [.vitepress/theme/index.ts]
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

Embed Bilibili videos:

```md
@[bilibili](bvid)
@[bilibili](aid cid)
@[bilibili p2 autoplay time=30](bvid)
```

| Option      | Type               | Description                            |
| ----------- | ------------------ | -------------------------------------- |
| `p{number}` | -                  | Video part number                      |
| `autoplay`  | `boolean`          | Auto play                              |
| `time`      | `number \| string` | Start time, seconds or HH:MM:SS format |

### YouTube

Embed YouTube videos:

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

Embed AcFun videos:

```md
@[acfun](ac_id)
```

### ArtPlayer

Use ArtPlayer to embed local or remote videos:

```md
@[artPlayer](/videos/demo.mp4)
@[artPlayer muted autoplay poster="/cover.jpg" width="800px"](/videos/demo.mp4)
```

| Option     | Type      | Default  | Description               |
| ---------- | --------- | -------- | ------------------------- |
| `autoplay` | `boolean` | `false`  | Auto play                 |
| `muted`    | `boolean` | `false`  | Muted                     |
| `loop`     | `boolean` | `false`  | Loop playback             |
| `volume`   | `number`  | `0.75`   | Volume level              |
| `poster`   | `string`  | -        | Cover image URL           |
| `autoMini` | `boolean` | `false`  | Auto mini mode            |
| `width`    | `string`  | `"100%"` | Player width              |
| `height`   | `string`  | -        | Player height             |
| `ratio`    | `string`  | -        | Aspect ratio, e.g. "16:9" |

Supports `mp4`, `mp3`, `webm`, `ogg`, `mkv`, `mov` formats.

If your video is in `mpd` or `dash` format, you'll also need to install `dashjs`:

:::npm-to

```sh
npm i dashjs
```

:::

If your video is in `m3u8` or `hls` format, you'll also need to install `hls.js`:

:::npm-to

```sh
npm i hls.js
```

:::

If your video is in `ts` or `flv` format, you'll also need to install `mpegts.js`:

:::npm-to

```sh
npm i mpegts.js
```

:::

## Configuration

```ts
interface VideoPluginOptions {
  /**
   * Enable ArtPlayer
   * @default true
   */
  artplayer?: boolean

  /**
   * Enable YouTube video embedding
   * @default true
   */
  youtube?: boolean

  /**
   * Enable Bilibili video embedding
   * @default true
   */
  bilibili?: boolean

  /**
   * Enable AcFun video embedding
   * @default true
   */
  acfun?: boolean
}
```

## Examples

### Bilibili

```md
@[bilibili](BV1EZ42187Hg)
```

@[bilibili](BV1EZ42187Hg)

### YouTube

```md
@[youtube](0JJPfz5dg20)
```

@[youtube](0JJPfz5dg20)

### AcFun

```md
@[acfun](ac47431669)
```

@[acfun](ac47431669)

### ArtPlayer

```md
@[artPlayer](https://artplayer.org/assets/sample/video.mp4)
```

@[artPlayer](https://artplayer.org/assets/sample/video.mp4)
