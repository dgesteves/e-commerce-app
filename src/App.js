import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import './App.css'

const Hats = () => (
  <div>Hats component</div>
)

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path={ '/' } component={ Home }/>
        <Route path={ '/shop/hats' } component={ Hats }/>
      </Switch>
    </div>
  )
}

export default App
