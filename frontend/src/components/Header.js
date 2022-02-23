import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { logout } from '../actions/userActions'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

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
            {userInfo ? (
               <NavDropdown title={userInfo.name} id='username'>
                 <LinkContainer to='/profile'>
                   <NavDropdown.Item>Profile</NavDropdown.Item>
                 </LinkContainer>
                 <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
               </NavDropdown>
            ) : <LinkContainer to='/login' style={{color: 'white'}}>
            <Nav.Link  href='/login'style={{color: 'white'}}><i className ='fas fa-user'></i> 
              Sign In</Nav.Link> 
              </LinkContainer>}
          
      </Nav>
    </Navbar.Collapse> 
    </Container>
</Navbar>
  </header>
  ) 
}  

export default Header;
