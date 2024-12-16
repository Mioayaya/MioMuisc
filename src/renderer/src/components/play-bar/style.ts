import styled from '@emotion/styled'
import { CONFIGURATION, ITHEME, ThemeColor } from '@renderer/server'

type Iprops = {
  theme: ITHEME
}

export const MioPlayBarDiv = styled.div<Iprops>`
  width: 100%;
  height: ${CONFIGURATION.playBar};
  background-color: ${(props: Iprops): string => ThemeColor[props.theme].playBar};
  opacity: ${(props: Iprops): string => ThemeColor[props.theme].opacity};
  color: black;
`
