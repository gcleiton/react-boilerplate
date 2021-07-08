import { Icon } from '@/presentation/components'

import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    max-height: 100vh;
    line-height: ${(props) => props.theme.spacings.huge};

    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.primary};
    background-image: linear-gradient(
      135deg,
      ${theme.colors.gradientPrimary} 0%,
      ${theme.colors.gradientSecondary} 35%
    );
  `}
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  height: 90vh;
`

export const StyledIcon = styled(Icon)`
  ${({ theme }) => css`
    width: min(25rem, 100%);
    animation: ${(props) => props.theme.keyframes.spin} 10s linear infinite;
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.huge};
    font-weight: ${theme.font.bold};
    letter-spacing: ${theme.spacings.xxsmall};
  `}
`

export const Subtitle = styled.p`
  ${({ theme }) => css`
    color: lightgray;
    font-size: ${theme.font.sizes.large};
    font-style: italic;
  `}
`

export const Footer = styled.footer`
  ${({ theme }) => css`
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
        font-weight: ${theme.font.bold};
      }

      &::before {
        content: '';
        position: absolute;
        bottom: -4px;
        right: 0;
        width: 0;
        height: 2px;
        background-color: white;
        transition: ${theme.transitions.roundTrip};
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
        margin-right: ${theme.spacings.xsmall};
      }
    }
  `}
`
