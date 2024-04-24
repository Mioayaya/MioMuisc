import { ReactElement } from 'react'

export interface MIroute {
  key: string
  path: string
  element: ReactElement
  children?: null | Array<MIroute>
}

export interface MIrouterChild {
  index?: boolean
  path?: string
  element: ReactElement
}

export interface MIrouterList {
  path: string
  element?: ReactElement
  children?: MIrouterChild[]
}
