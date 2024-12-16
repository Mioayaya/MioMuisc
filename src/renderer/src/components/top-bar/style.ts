import styled from '@emotion/styled'
import { CONFIGURATION, ITHEME, ThemeColor } from '@renderer/server'

type Iprops = {
  theme: ITHEME
}

export const MioTopBarDiv = styled.div<Iprops>`
  display: flex;
  align-items: center;
  width: 100%;
  height: ${CONFIGURATION.topBar};
  background-color: ${(props: Iprops): string => ThemeColor[props.theme].topBar};
  opacity: ${(props: Iprops): string => ThemeColor[props.theme].opacity};
  -webkit-app-region: drag;

  .left {
    width: ${CONFIGURATION.containLeft};
    display: flex;
    align-items: center;
    .img {
      margin: 0 10px;
      height: 40px;
      width: 78px;
      -webkit-app-region: no-drag;
    }
  }

  .middle {
    flex: 1;
    background: red;
  }

  .right {
    margin-right: 10px;
    color: white;
    background-color: black;
  }

  .btn {
    -webkit-app-region: no-drag;
  }
`
