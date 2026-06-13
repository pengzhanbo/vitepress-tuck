export interface ObsidianPluginOptions {
  callout?: boolean
  comment?: boolean
  embedLink?: boolean
  wikiLink?: boolean
}

export interface FilesResult {
  root: string
  files: string[]
}
