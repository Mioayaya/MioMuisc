import styled from '@emotion/styled'
import { THEME, ThemeColor } from '@renderer/server'

type Iprops = {
  theme: THEME
}

export const MioContainDiv = styled.div<Iprops>`
  flex: 1;
  display: flex;
  background: ${(props): string => ThemeColor[props.theme as THEME].contain};
  .right {
    flex: 1;
  }
`
