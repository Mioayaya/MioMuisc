import styled from '@emotion/styled'

export const AppDiv = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    pointer-events: none;
  }
  .bg {
    z-index: -1;
    video {
      opacity: 1;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center center;
    }
  }
`
