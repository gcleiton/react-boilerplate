import { Icon } from '@/presentation/components'

import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  text-align: center;

  height: 100vh;
  line-height: 3rem;

  color: white;
  background-color: #03103b;
  background-image: linear-gradient(
    135deg,
    rgba(64, 219, 216, 0.15) 0%,
    rgba(3, 16, 59, 0.15) 35%
  );
`
export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: 0.15rem;
`

export const Subtitle = styled.p`
  color: lightgray;
  font-size: 1.3rem;
  font-style: italic;
`

export const StyledIcon = styled(Icon)`
  width: min(25rem, 100%);
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  animation: spin 10s linear infinite;
`
