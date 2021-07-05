import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import GlobalStyles from '@/presentation/styles/global'
import Test from '@/presentation/components/test/testing'

ReactDOM.render(
  <Fragment>
    <GlobalStyles />
    <div>Test</div>
    <Test></Test>
  </Fragment>,
  document.getElementById('main')
)
