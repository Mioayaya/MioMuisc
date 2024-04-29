import { FC } from 'react'
import { MioTopBarDiv } from './style'
import reactLogo from '@renderer/assets/react.png'

const MioTopBar: FC = () => {
  return (
    <MioTopBarDiv>
      <img src={reactLogo} alt="logo" className="logo" />
      <h1>Top Bar </h1>
    </MioTopBarDiv>
  )
}

export default MioTopBar
