export type KeepScrollPositionSliceSchema = {
  [route in string]?: number
}

export interface PayloadKeepScroll {
  route: string,
  position: number
}