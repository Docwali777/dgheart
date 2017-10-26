import React, { Component } from 'react'

import MedicalPracticeLocations from './MedicalPracticeLocations'
import {TitleSectionWithImages} from './commons/TitleSectionsWithImages'

import { Row, Col, PanelGroup, Panel, Button, Collapse, Well } from 'react-bootstrap'

import {BrowserRouter as Router,  Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

class AllLocations extends Component{

state ={
  activeKey: '1'
}

handleSelect = (activeKey) =>{
  this.setState({activeKey})
}

  render(){


    return (
    <div className='text-center'>
      <Row>
          {/* <h2>Medical Practices</h2>
          <TitleSectionWithImages
            sm={6}
            title={'The Healthy Heart Center'}
            locations={'Locations in Maryland'}
            img={'http://www.thehealthyheartcenter.com/art/healthy-heart-logo.png'}
          />

          <TitleSectionWithImages
            sm={6}
            title={'Casa Pediatrics'}
            locations={'Locations in Virginia'}
            img={'https://static.wixstatic.com/media/13fafe_eb62a62f5bbe466e9cab57ae1506815c~mv2.png/v1/fill/w_374,h_241,al_c,usm_0.66_1.00_0.01/13fafe_eb62a62f5bbe466e9cab57ae1506815c~mv2.png'}
          /> */}
          <PanelGroup activeKey={this.state.activeKey} onSelect={this.handleSelect} accordion>


          <Panel header="The Healthy Heart Center" eventKey="1">
            <TitleSectionWithImages
              sm={6}
              title={'The Healthy Heart Center'}
              locations={'Locations in Maryland'}
              img={'http://www.thehealthyheartcenter.com/art/healthy-heart-logo.png'}
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
              img={'https://static.wixstatic.com/media/13fafe_eb62a62f5bbe466e9cab57ae1506815c~mv2.png/v1/fill/w_374,h_241,al_c,usm_0.66_1.00_0.01/13fafe_eb62a62f5bbe466e9cab57ae1506815c~mv2.png'}
            />
          </Panel>
        </PanelGroup>
      </Row>
      <div>

            </div>
    </div>  )
  }
}


export default AllLocations
