import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './pages/Home/Home'
import './App.css'
import Shop from './pages/Shop/Shop'

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path={ '/' } component={ Home }/>
        <Route exact path={ '/shop' } component={ Shop }/>
      </Switch>
    </div>
  )
}

export default App
