import { FC } from 'react'
import { MioPlayBarDiv } from './style'
import { useSelector } from 'react-redux'
import { storeType } from '@renderer/type'
import { THEME } from '@renderer/server'

const MioPlayBar: FC = () => {
  const theme = useSelector<storeType.MIslice, THEME>((state) => state.configSlice.theme)

  return (
    <MioPlayBarDiv theme={theme}>
      <h1>Play Bar</h1>
    </MioPlayBarDiv>
  )
}

export default MioPlayBar
