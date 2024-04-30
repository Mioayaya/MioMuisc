import { FC } from 'react'
import { MioContainDiv } from './style'
import { useRoutes } from 'react-router'
import router from '@renderer/router'
import MioContainLeft from './c-children/left'
import { useSelector } from 'react-redux'
import { storeType } from '@renderer/type'
import { THEME } from '@renderer/server'

const MioContain: FC = () => {
  const routes = useRoutes(router)
  const theme = useSelector<storeType.MIslice, THEME>((state) => state.configSlice.theme)

  return (
    <MioContainDiv theme={theme}>
      <MioContainLeft />
      <div className="right">{routes}</div>
    </MioContainDiv>
  )
}

export default MioContain
