import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './pages/Home/Home'
import './App.css'
import Shop from './pages/Shop/Shop'
import Header from './components/Header/Header'

const App = () => {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path={ '/' } component={ Home }/>
        <Route exact path={ '/shop' } component={ Shop }/>
      </Switch>
    </div>
  )
}

export default App
