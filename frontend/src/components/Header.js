import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import { logout } from '../actions/userActions'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin
  const navigate = useNavigate();


  const logoutHandler = () => {
    dispatch(logout())
    navigate('/login')

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
          </LinkContainer >
            {userInfo ? (
               <NavDropdown title={<a style={{color:"white"}}>{userInfo.name}</a>} id='username' >
                 <LinkContainer to='/profile' >
                   <NavDropdown.Item>Profile</NavDropdown.Item>
                 </LinkContainer>
                 <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
               </NavDropdown>
            ) : (<LinkContainer to='/login' style={{color: 'white'}}>
            <Nav.Link  href='/login'style={{color: 'white'}}><i className ='fas fa-user'></i> 
              Sign In</Nav.Link> 
              </LinkContainer>)}
          {userInfo && userInfo.isAdmin && (
             <NavDropdown title={<a style={{color:"white"}}>Admin</a>} id='adminmenu'>
             <LinkContainer to='/admin/userlist'>
               <NavDropdown.Item>Users</NavDropdown.Item>
             </LinkContainer>

             <LinkContainer to='/admin/productlist'>
               <NavDropdown.Item>Products</NavDropdown.Item>
             </LinkContainer>
            
             <LinkContainer to='/admin/orderlist'>
               <NavDropdown.Item>Orders</NavDropdown.Item>
             </LinkContainer>

           </NavDropdown>
          )}
      </Nav>
    </Navbar.Collapse> 
    </Container>
</Navbar>
  </header>
  ) 
}  

export default Header;
