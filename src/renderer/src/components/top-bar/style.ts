import styled from '@emotion/styled'
import { CONFIGURATION } from '@renderer/server'

export const MioTopBarDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: ${CONFIGURATION.topBar};
  img {
    height: 40px;
    width: 78px;
  }
`
