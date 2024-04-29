import { FC } from 'react'
import { MioContainDiv } from './style'
import { useRoutes } from 'react-router'
import router from '@renderer/router'

const MioContain: FC = () => {
  const routes = useRoutes(router)
  return (
    <MioContainDiv>
      <div className="left"></div>
      <div className="rig">{routes}</div>
    </MioContainDiv>
  )
}

export default MioContain
