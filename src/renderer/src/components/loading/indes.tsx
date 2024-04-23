import { loadingData } from '@renderer/server'
import { FC, useEffect, useState } from 'react'
import { MioLoadingDiv } from './style'

// eslint-disable-next-line react/display-name
const MioLoading: FC = () => {
  const [jumpIndex, setJumpIndex] = useState<number>(0)

  useEffect(() => {
    setTimeout(() => {
      if (jumpIndex === loadingData.LOADINGSTR.length - 1) {
        setTimeout(() => {
          setJumpIndex(0)
        }, 666)
      } else {
        setJumpIndex(jumpIndex + 1)
      }
    }, 333)
  }, [jumpIndex])

  const jumpStr = (index: number): string => {
    let _str: string = 'letter'
    const _number: number = jumpIndex - index
    const _number2: number = index - jumpIndex
    if (
      _number == 1 ||
      _number == 2 ||
      _number == 0 ||
      _number2 == loadingData.LOADINGSTR.length - 1 ||
      _number2 == loadingData.LOADINGSTR.length - 2
    ) {
      _str = `${_str} active`
    }
    return _str
  }

  return (
    <MioLoadingDiv>
      <div className="loading">
        {loadingData.LOADINGSTR.map((item, index) => (
          <p
            key={item.key}
            className={jumpStr(index)}
            style={{ color: item.color, textShadow: `3px 3px 5px #f2f` }}
          >
            {item.name}
          </p>
        ))}
      </div>
    </MioLoadingDiv>
  )
}

export default MioLoading
