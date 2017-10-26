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
          title={'Wali Gauvin, MD'}
          subtitle={'Pediatric Cardiologist'}
          img={ProfilePic}
        />


      </Row>
        <hr />
      <Row>
          <h2>Medical Practices</h2>
          {/* <TitleSectionWithImages
            sm={6}
            title={'The Healthy Heart Center'}
            img={'http://www.thehealthyheartcenter.com/art/healthy-heart-logo.png'}
          />

          <TitleSectionWithImages
            sm={6}
            title={'Casa Pediatrics'}
            img={'https://static.wixstatic.com/media/13fafe_eb62a62f5bbe466e9cab57ae1506815c~mv2.png/v1/fill/w_374,h_241,al_c,usm_0.66_1.00_0.01/13fafe_eb62a62f5bbe466e9cab57ae1506815c~mv2.png'}
          /> */}
          <PanelGroup activeKey={this.state.activeKey} onSelect={this.handleSelect} accordion>


          <Panel  header="The Healthy Heart Center" eventKey="1">
          <Row >

            <TitleSectionWithImages
              sm={6}
              // title={'The Healthy Heart Center'}
              locations={'Locations in Maryland'}
              img={ThhcLogo}
            />

          </Row>

          </Panel>

          <Panel header="Casa Pediatrics" eventKey="2">
            <TitleSectionWithImages
              sm={6}
              title={'Casa Pediatrics'}
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
        {/* <TitleSectionWithImages
          sm={12}
          projects={this.state.projects}
        /> */}

      <PanelGroup activeKey={this.state.activeKey} onSelect={this.handleSelect} accordion>


      <Panel header="Promoting Health Awareness in Latino Men" eventKey="3">
        <TitleSectionWithImages
          sm={6}
          img={SaludosLogo}
        />
      </Panel>

    </PanelGroup>
  </Row>
    <Row>
        <h2>Health and Technology</h2>

        <PanelGroup activeKey={this.state.activeKey} onSelect={this.handleSelect} accordion>

        <Panel header="Using Technology to Prevent Childhood Obesity" eventKey="4">
          <TitleSectionWithImages
            sm={6}
            // title={'Casa Pediatrics'}
            locations={'Locations in Virginia'}
            img={HHS_childhood_obesity}
          />
        </Panel>
      </PanelGroup>

    </Row>
    </div>
    )
  }
}
export default About
