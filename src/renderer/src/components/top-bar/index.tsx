import { FC } from 'react'
import { MioTopBarDiv } from './style'
import reactLogo from '@renderer/assets/react.png'
import { useSelector } from 'react-redux'
import { storeType } from '@renderer/type'
import { THEME } from '@renderer/server'

const MioTopBar: FC = () => {
  const theme = useSelector<storeType.MIslice, THEME>((state) => state.configSlice.theme)

  return (
    <MioTopBarDiv theme={theme}>
      <div className="left">
        <div className="img">
          <img src={reactLogo} alt="logo" className="logo" />
        </div>
        <h1 className="title">MioMusic</h1>
      </div>
      <div className="right">
        <span>top bar</span>
      </div>
    </MioTopBarDiv>
  )
}

export default MioTopBar
