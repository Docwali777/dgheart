import React from 'react'

import { Nav, Navbar, NavItem} from 'react-bootstrap'
import {Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'

const Menu  = () =>{

    return(
    <div>
      <Navbar fixedTop  collapseOnSelect>
   <Navbar.Header>
     <Navbar.Brand>
       <Link to="/">DgHeart.io</Link>
     </Navbar.Brand>
     <Navbar.Toggle />
   </Navbar.Header>
   <Navbar.Collapse>
     <Nav>
      <LinkContainer to='/about'>
         <NavItem >About</NavItem>
      </LinkContainer>
       <NavItem eventKey={2} href="#">Wali Gauvin, M.D.</NavItem>

     </Nav>
     <Nav pullRight>
       <LinkContainer to='/locations'>
         <NavItem eventKey={1} href="#">Locations</NavItem>
       </LinkContainer>

       <NavItem eventKey={2} href="#">Community Projects</NavItem>
       <NavItem eventKey={2} href="#">Technology</NavItem>
     </Nav>
   </Navbar.Collapse>
 </Navbar>
    </div>
    )
}

export default Menu
