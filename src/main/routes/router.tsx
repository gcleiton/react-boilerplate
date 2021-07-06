import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Home } from '@/presentation/pages'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
