import React, { Component } from 'react'

import ProjectCards  from './ProjectCards'
import { Col, Grid, Row} from 'react-bootstrap'


const TitleSectionWithImages = ({sm, md, lg, title, subtitle, img, projects}) =>{

let listOfProjects = projects !== undefined ? projects.map(p => <ProjectCards key={p.url} {...p} /> ) : <img style={{height: 'auto', maxWidth: '100%'}} src={img} />

  return(
    <Col style={{marginBottom: 50}} sm={sm} md={md} lg={lg}>
      <div  style={{marginBottom: 30}}>
          <h3>{title}</h3>
          <h4>{subtitle}</h4>
      </div>
      <div >
          {listOfProjects}
      </div>
    </Col>
  )
}
export  {TitleSectionWithImages}
