import React, { Component } from 'react'

import {TitleSectionWithImages} from './commons'

//pics
import SaludosLogo from '../../image/Saludos.png'
import ProfilePic from '../../image/image-300x300.jpg'
import ThhcLogo from '../../image/healthy-heart-logo.png'
import CasaPedsLogo from '../../image/13fafe_eb62a62f5bbe466e9cab57ae1506815c_mv2.png'

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


          <Panel header="The Healthy Heart Center" eventKey="1">
            <TitleSectionWithImages
              sm={6}
              title={'The Healthy Heart Center'}
              locations={'Locations in Maryland'}
              img={ThhcLogo}
            />
            <Collapse in={this.state.open}>
              <div>
                <Well>
                  Pediatric Cardiology and Family Weight Management Services with Location in Souther and Northern Maryland
                </Well>
              </div>
            </Collapse>


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
      </Row>
      <PanelGroup activeKey={this.state.activeKey} onSelect={this.handleSelect} accordion>


      <Panel header="SaluD/Os" eventKey="1">
        <TitleSectionWithImages
          sm={6}
          img={SaludosLogo}

        />
        <Collapse in={this.state.open}>
          <div>
            <Well>
              Pediatric Cardiology and Family Weight Management Services with Location in Souther and Northern Maryland
            </Well>
          </div>
        </Collapse>


      </Panel>

      <Panel header="" eventKey="2">
        <TitleSectionWithImages
          sm={6}
          title={'Casa Pediatrics'}
          locations={'Locations in Virginia'}
          img={'https://static.wixstatic.com/media/13fafe_eb62a62f5bbe466e9cab57ae1506815c~mv2.png/v1/fill/w_374,h_241,al_c,usm_0.66_1.00_0.01/13fafe_eb62a62f5bbe466e9cab57ae1506815c~mv2.png'}
        />
      </Panel>
    </PanelGroup>
    </div>
    )
  }
}
export default About
