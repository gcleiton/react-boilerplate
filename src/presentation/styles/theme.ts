import { keyframes } from 'styled-components'

export default {
  font: {
    families: {
      default:
        "'Karla', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
    },
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xxsmall: '.4rem',
      xsmall: '.6rem',
      small: '.8rem',
      medium: '1rem',
      large: '1.3rem',
      xlarge: '1.6rem',
      xxlarge: '2rem',
      huge: '3rem'
    }
  },

  breakpoints: {
    mobile: '768px',
    tablet: '992px',
    desktop: '1200px',
    largeMonitor: '1800px'
  },

  // z-index
  indexes: {
    low: 1,
    medium: 99,
    high: 999
  },

  colors: {
    primary: '#03103b',
    gradientPrimary: 'rgba(64, 219, 216, 0.15)',
    gradientSecondary: 'rgba(3, 16, 59, 0.15)',
    blue: '#288ad6',
    white: '#ffffff',
    green: '#16c98d',
    red: '#fa5e5b',
    yellow: '#feef6d',
    orange: '#fe7c08',
    pink: '#ff708e',
    purple: '#8e44ad',
    gray: '#95a5a6'
  },

  spacings: {
    xxsmall: '.15rem',
    xsmall: '.3rem',
    small: '.6rem',
    medium: '1rem',
    large: '1.4rem',
    xlarge: '1.8rem',
    xxlarge: '2.4rem',
    huge: '3rem'
  },

  transitions: {
    default: 'all 330ms cubic-bezier(0.685, 0.0473, 0.346, 1)',
    roundTrip: 'width 450ms cubic-bezier(0.25, 1, 0.5, 1)',
    color: 'color 450ms cubic-bezier(0.25, 1, 0.5, 1)',
    transform: 'transform 250ms cubic-bezier(0.25, 1, 0.5, 1)'
  },

  keyframes: {
    spin: keyframes`
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    `
  }
}
