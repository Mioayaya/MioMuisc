import MioTest from '@renderer/pages/test'
import { routeType } from '@renderer/type'
import { lazy } from 'react'

const MioHome = lazy(() => import('../../../pages/home'))

const MioRouterList: routeType.MIroute[] = [
  {
    key: '0_0',
    path: '/home',
    element: <MioHome />,
    children: null
  },
  {
    key: '1_0',
    path: '/test',
    element: <MioTest />,
    children: null
  }
]

export default MioRouterList
