import React from 'react'
import ReactDOM from 'react-dom'

import Router from '@/main/routes/router'
import GlobalStyles from '@/presentation/styles/global'

ReactDOM.render(
  <>
    <GlobalStyles />
    <Router />
  </>,
  document.getElementById('main')
)
