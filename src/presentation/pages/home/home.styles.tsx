import { Icon } from '@/presentation/components'

import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-height: 100vh;
  line-height: 3rem;

  color: ${(props) => props.theme.colors.white};
  background-color: #03103b;
  background-image: linear-gradient(
    135deg,
    rgba(64, 219, 216, 0.15) 0%,
    rgba(3, 16, 59, 0.15) 35%
  );
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  height: 90vh;
`

export const StyledIcon = styled(Icon)`
  width: min(25rem, 100%);

  animation: spin 10s linear infinite;

  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
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

export const Footer = styled.footer`
  height: 10vh;
  text-align: center;
  color: lightgray;

  a {
    position: relative;
    text-decoration: none;
    color: white;
    cursor: pointer;

    bottom: 2px; // fix align text

    &:hover {
      font-weight: 500;
    }

    &::before {
      content: '';
      position: absolute;
      bottom: -4px;
      right: 0;
      width: 0;
      height: 2px;
      background-color: white;
      transition: width cubic-bezier(0.25, 1, 0.5, 1) 600ms;
    }

    @media (hover: hover) and (pointer: fine) {
      &:hover::before {
        left: 0;
        right: auto;
        width: 100%;
      }
    }

    svg {
      vertical-align: middle;
      margin-right: 0.3rem;
    }
  }
`
