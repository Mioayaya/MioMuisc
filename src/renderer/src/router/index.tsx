import { ReactElement, Suspense } from 'react'
import { Navigate } from 'react-router'

import MioLoading from '@renderer/components/loading/indes'

//- 懒加载优化
const lazyLoad = (children: ReactElement): JSX.Element => {
  return <Suspense fallback={<MioLoading />}>{children}</Suspense>
}

