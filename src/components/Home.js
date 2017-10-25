
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Button } from 'react-bootstrap'

const Home = () =>{
  return(
    <Jumbotron style={{marginTop: 50}}>
      <div className='text-center'>
        <h1 style={{marginBottom: 50}} > Improving Cardiac Health through Community Alliances and Technology</h1>

        <p><Link to='/about'><Button bsStyle="primary">Learn more</Button></Link></p>
      </div>
      </Jumbotron>
  )
}
export default Home
