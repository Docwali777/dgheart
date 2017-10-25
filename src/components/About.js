import React, { Component } from 'react'

import {TitleSectionWithImages} from './commons'

import { Col, Grid, Row} from 'react-bootstrap'

const projects = [
  {
    title: 'Challenge Competition: Using Technology to Prevent Childhood Obesity',
    url: 'https://www.federalregister.gov/documents/2017/09/26/2017-20537/challenge-competition-using-technology-to-prevent-childhood-obesity-in-low-income-families-and'

  },
  {
    title: 'SaluD/Os: Promoting Health in Latino Men',
    url: 'http://salud-os.surge.sh/'
  }
]


class About extends Component{
constructor(props){
  super(props)
  this.state = {
    projects
  }
}


  render(){

    return(
    <div style={{textAlign: 'center'}} >
      <Row >
        <TitleSectionWithImages
          sm={12}
          title={'Wali Gauvin, MD'}
          subtitle={'Pediatric Cardiologist'}
          img={'http://thehealthyheartcenter.com/wordpress/wp-content/uploads/2011/10/image-300x300.jpeg'}
        />


      </Row>
        <hr />
      <Row>
          <h2>Medical Practices</h2>
          <TitleSectionWithImages
            sm={6}
            title={'The Healthy Heart Center'}
            img={'http://www.thehealthyheartcenter.com/art/healthy-heart-logo.png'}
          />

          <TitleSectionWithImages
            sm={6}
            title={'Casa Pediatrics'}
            img={'https://static.wixstatic.com/media/13fafe_eb62a62f5bbe466e9cab57ae1506815c~mv2.png/v1/fill/w_374,h_241,al_c,usm_0.66_1.00_0.01/13fafe_eb62a62f5bbe466e9cab57ae1506815c~mv2.png'}
          />

      </Row>
        <hr />
      <Row>
          <h2>Community Projects</h2>
        <TitleSectionWithImages
          sm={12}
          projects={this.state.projects}
        />
      </Row>
    </div>
    )
  }
}
export default About
