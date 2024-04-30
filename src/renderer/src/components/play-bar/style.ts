import styled from '@emotion/styled'
import { CONFIGURATION, THEME, ThemeColor } from '@renderer/server'

type Iprops = {
  theme: THEME
}

export const MioPlayBarDiv = styled.div<Iprops>`
  width: 100%;
  height: ${CONFIGURATION.playBar};
  background-color: ${(props): string => ThemeColor[props.theme as THEME].playBar};
  color: white;
`
