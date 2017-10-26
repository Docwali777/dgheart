import React, { Component } from 'react'

import {TitleSectionWithImages} from './commons'

//pics
import SaludosLogo from '../../image/Saludos.png'
import ProfilePic from '../../image/image-300x300.jpg'
import ThhcLogo from '../../image/healthy-heart-logo.png'
import CasaPedsLogo from '../../image/13fafe_eb62a62f5bbe466e9cab57ae1506815c_mv2.png'
import HHS_childhood_obesity from '../../image/HHS_competition_child_obesity.png'

import { Col, Grid, Row, PanelGroup, Panel, Button, Collapse, Well } from 'react-bootstrap'

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
          title={'Dr. Wali Gauvin'}
          subtitle={'Pediatric Cardiology and Family Weight Management'}
          img={ProfilePic}
        />


      </Row>
        <hr />
      <Row>
          <h2>Medical Practices</h2>

          <PanelGroup activeKey={this.state.activeKey} onSelect={this.handleSelect} accordion>

          <Panel  header="The Healthy Heart Center" eventKey="1">

            <TitleSectionWithImages
              sm={12} md={12} lg={12}
              title={''}
              locations={'Locations in Maryland'}
              img={ThhcLogo}
            />


          </Panel>

          <Panel header="Casa Pediatrics" eventKey="2">
            <TitleSectionWithImages
                  sm={12} md={12} lg={12}
              title={''}
              locations={'Locations in Virginia'}
              img={CasaPedsLogo}
            />
          </Panel>
        </PanelGroup>

      </Row>
        <hr />
        {/*  */}

      <Row>
          <h2>Community Projects</h2>

      <PanelGroup activeKey={this.state.activeKey} onSelect={this.handleSelect} accordion>


      <Panel header="Promoting Health Awareness in Latino Men" eventKey="3">
        <TitleSectionWithImages
              sm={12} md={12} lg={12}
          img={SaludosLogo}
        />
      </Panel>

    </PanelGroup>
  </Row>

    <hr />

    <Row>
        <h2>Health and Technology</h2>

        <PanelGroup activeKey={this.state.activeKey} onSelect={this.handleSelect} accordion>

        <Panel header="Using Technology to Prevent Childhood Obesity" eventKey="4">
          <TitleSectionWithImages
              sm={12} md={12} lg={12}
            title={''}
            locations={'Locations in Virginia'}
            img={HHS_childhood_obesity}
          />
        </Panel>
      </PanelGroup>

    </Row>
      <hr />
    </div>
    )
  }
}
export default About
