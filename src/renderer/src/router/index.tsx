import { ReactElement, Suspense, lazy } from 'react'
import { Navigate } from 'react-router'

import MioLoading from '@renderer/components/loading/indes'
import { routeType } from '@renderer/type'
import { MioRouterList } from '@renderer/server'

const MioNotFound = lazy(() => import('@renderer/pages/404'))
//- 懒加载优化
const lazyLoad = (children: ReactElement): JSX.Element => {
  return <Suspense fallback={<MioLoading />}>{children}</Suspense>
}

const formRouter = (routerList: routeType.MIroute[]): routeType.MIrouterList[] => {
  const _route: routeType.MIrouterList[] = []
  const firstItem: routeType.MIrouterList = {
    path: '/',
    children: [
      {
        index: true,
        element: <Navigate to={routerList[0].path} />
      },
      {
        path: '*',
        element: lazyLoad(<MioNotFound />)
      }
    ]
  }
  _route.push(firstItem)

  for (const i in routerList) {
    const item: routeType.MIrouterList = {
      path: routerList[i].path,
      element: lazyLoad(routerList[i].element)
    }
    const child = routerList[i].children
    if (child) {
      item.children = []
      for (const j in child) {
        if (j === '0') {
          item.children.push({
            index: true,
            element: <Navigate to={child[j].path} />
          })
          item.children.push({
            path: '*',
            element: lazyLoad(<MioNotFound />)
          })
        }
        item.children.push({
          path: child[j].path,
          element: lazyLoad(child[j].element)
        })
      }
    }
    _route.push(item)
  }

  return _route
}

const router = formRouter(MioRouterList)

export default router
