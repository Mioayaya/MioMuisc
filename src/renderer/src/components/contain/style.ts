import styled from '@emotion/styled'
import { ITHEME, ThemeColor } from '@renderer/server'

type Iprops = {
  theme: ITHEME
}

export const MioContainDiv = styled.div<Iprops>`
  flex: 1;
  display: flex;
  background: ${(props: Iprops): string => ThemeColor[props.theme].contain};
  .right {
    flex: 1;
  }
`
