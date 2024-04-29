import { FC } from 'react'
import { MioContainDiv } from './style'
import { useRoutes } from 'react-router'
import router from '@renderer/router'
import MioContainLeft from './c-children/left'

const MioContain: FC = () => {
  const routes = useRoutes(router)
  return (
    <MioContainDiv>
      <MioContainLeft />
      <div className="right">{routes}</div>
    </MioContainDiv>
  )
}

export default MioContain
