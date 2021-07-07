import React from 'react'
import ReactDOM from 'react-dom'

import Router from '@/main/routes/router'
import { GlobalStyles } from '@/presentation/styles'

ReactDOM.render(
  <>
    <GlobalStyles />
    <Router />
  </>,
  document.getElementById('main')
)
