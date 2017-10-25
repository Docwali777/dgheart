import React, { Component } from 'react'
import { render } from 'react-dom'

import Menu from './components/Navigation/Menu'

import Home from './components/Home'
import About from './components/About'
import AllLocations from './components/AllLocations'
import MedicalPracticeLocations from './components/MedicalPracticeLocations'

import '../css/style.css'

import { BrowserRouter as Router, Route} from 'react-router-dom'
const App = () =>{
  return(
  <Router>
  <div >

      <Menu />
    <div className='container' style={{marginTop: 50}}>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route exact path='/locations' component={AllLocations} />
      {/* <Route path='/locations/:id' component={MedicalPracticeLocations} /> */}

    </div>
  </div>
  </Router>
  )
}
render(<App />, document.getElementById('wali'))
