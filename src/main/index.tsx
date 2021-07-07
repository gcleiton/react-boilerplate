import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import Router from '@/main/routes/router'
import { GlobalStyles } from '@/presentation/styles'
import theme from '@/presentation/styles/theme'

ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  </>,
  document.getElementById('main')
)
