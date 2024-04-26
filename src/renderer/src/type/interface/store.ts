export interface MIslice {
  userSlice: MIuserSlice
}

export interface MIuserSlice {
  isSign: boolean
  userData: {
    [s: string]: string
  } | null
}
