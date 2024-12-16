import { ITHEME } from '@renderer/server'

export interface MIslice {
  userSlice: MIuserSlice
  configSlice: MIconfigSlice
}

export interface MIuserSlice {
  isSign: boolean
  userData: {
    [s: string]: string
  } | null
}

export interface MIconfigSlice {
  theme: ITHEME
}
