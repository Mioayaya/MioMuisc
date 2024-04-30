import { FC } from 'react'
import { MioTopBarDiv } from './style'
import reactLogo from '@renderer/assets/react.png'
import { useSelector } from 'react-redux'
import { storeType } from '@renderer/type'
import { THEME } from '@renderer/server'

const MioTopBar: FC = () => {
  const theme = useSelector<storeType.MIslice, THEME>((state) => state.configSlice.theme)
  const clickTest = (): void => {
    console.log('tes')
  }
  console.log(theme)

  return (
    <MioTopBarDiv theme={theme}>
      <img src={reactLogo} alt="logo" className="logo" />
      <h1>Top Bar </h1>
      <button onClick={() => clickTest()}>click</button>
    </MioTopBarDiv>
  )
}

export default MioTopBar
