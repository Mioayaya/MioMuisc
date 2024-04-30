import { FC } from 'react'
import { MioTopBarDiv } from './style'
import reactLogo from '@renderer/assets/react.png'

const MioTopBar: FC = () => {
  const clickTest = (): void => {
    console.log('tes')
  }
  return (
    <MioTopBarDiv>
      <img src={reactLogo} alt="logo" className="logo" />
      <h1>Top Bar </h1>
      <button onClick={() => clickTest()}>click</button>
    </MioTopBarDiv>
  )
}

export default MioTopBar
