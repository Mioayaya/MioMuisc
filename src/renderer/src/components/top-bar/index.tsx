import { FC, useEffect } from 'react'
import { MioTopBarDiv } from './style'
import reactLogo from '@renderer/assets/react.png'
import { useSelector } from 'react-redux'
import { storeType } from '@renderer/type'
import { ITHEME } from '@renderer/server'
import WindowDrag from '@renderer/utils/tools/WindowDrag'

const MioTopBar: FC = () => {
  const theme = useSelector<storeType.MIslice, ITHEME>((state) => state.configSlice.theme)

  useEffect(() => {
    new WindowDrag()
  }, [])

  const MinimizeWindow = (): void => window.electron.minimizeWindow()
  const CloseWindow = (): void => window.electron.closeWindow()
  const GoBackHome = (): void => {
    // 路由事件
    console.log('do some things')
  }

  return (
    <MioTopBarDiv theme={theme}>
      <div className="left">
        <div className="img">
          <img src={reactLogo} alt="logo" id="drag-area" className="logo" onClick={GoBackHome} />
        </div>
        <h1 className="title">MioMusic</h1>
      </div>
      <div className="middle">
        <span>top bar</span>
      </div>
      <div className="right">
        <button className="minimize btn" onClick={MinimizeWindow}>
          —
        </button>
        <button className="close btn" onClick={CloseWindow}>
          X
        </button>
      </div>
    </MioTopBarDiv>
  )
}

export default MioTopBar
