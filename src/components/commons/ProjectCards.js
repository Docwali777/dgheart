import React, { Component } from 'react'
import { ListGroupItem} from 'react-bootstrap'

const ProjectCards  = ({title, url}) =>{

  return (
    <ListGroupItem>
      <a href={url}>{title}</a>
    </ListGroupItem>

  )
}
export default ProjectCards
