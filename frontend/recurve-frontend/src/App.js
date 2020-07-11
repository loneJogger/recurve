import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'

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
      <Footer />
    </Router>
  </div>
  )
}

export default App
