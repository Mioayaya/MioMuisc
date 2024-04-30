import styled from '@emotion/styled'
import { CONFIGURATION, THEME, ThemeColor } from '@renderer/server'

type Iprops = {
  theme: THEME
}

export const MioTopBarDiv = styled.div<Iprops>`
  display: flex;
  align-items: center;
  width: 100%;
  height: ${CONFIGURATION.topBar};
  background-color: ${(props): string => ThemeColor[props.theme as THEME].topBar};
  img {
    height: 40px;
    width: 78px;
  }
`
