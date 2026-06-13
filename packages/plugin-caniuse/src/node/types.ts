export type CanIUseMode = 'embed' | 'baseline'

export interface CanIUseData {
  feature: string
  mode: CanIUseMode
  versions: string
}
