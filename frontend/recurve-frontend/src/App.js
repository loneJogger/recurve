import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import Header from './components/Header'

const App = () => {

  return (
    <div className='App'>
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' render={props => (
          <Home />
        )} />
      </Switch>
      {/* Footer goes here */}
    </Router>
  </div>
  )
}

export default App
