import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container } from 'react-bootstrap'
const Header = () => {
  return (
  <header>
      <Navbar  bg='dark' varient = 'dark' expand = 'lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'style={{color: 'white'}}>

          <Navbar.Brand  style={{color: 'white'}}>ProShop</Navbar.Brand >   
          </LinkContainer>
       
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
    <Navbar.Collapse id='basic-navbar-nav' className="justify-content-end">
      <Nav >
      <LinkContainer to='/cart' style={{color: 'white'}}>
        <Nav.Link   className='nav-link' ><i className='fas fa-shopping-cart'></i> 
          Cart</Nav.Link > 
          </LinkContainer>
          <LinkContainer to='/login' style={{color: 'white'}}>
           <Nav.Link  href='/login'style={{color: 'white'}}><i className ='fas fa-user'></i> 
             Sign In</Nav.Link> 
             </LinkContainer>
      </Nav>
    </Navbar.Collapse> 
    </Container>
</Navbar>
  </header>
  ) 
}  

export default Header;
