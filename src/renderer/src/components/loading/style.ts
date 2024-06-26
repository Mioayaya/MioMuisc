import styled from '@emotion/styled'

export const MioLoadingDiv = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: #fff1fb; */
  display: flex;
  justify-content: center;
  align-items: center;
  .loading {
    display: flex;
    .letter {
      user-select: none;
      font-size: 2rem;
      font-weight: 600;
      text-shadow: 0 2px 5px #22f;
      /* transition: transform 1s; */
    }
    .active {
      animation: strJump 1s ease;
      /* transform: translateY(-25px); */
    }
    & > *:not(:last-child) {
      margin-right: 5px;
    }
  }
  @keyframes strJump {
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`
