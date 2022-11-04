import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navigation: React.FunctionComponent = () => {
  return (
    <Navbar variant='dark' bg='primary' expand='sm' sticky='top'>
      <Container>
        <Navbar.Brand as={NavLink} to='/'>
          86
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbar'></Navbar.Toggle>
        <Navbar.Collapse id='navbar'>
          <Nav className='justify-content-end w-100'>
            <Nav.Link as={NavLink} to='/'>
              Sign Up
            </Nav.Link>
            <Nav.Link as={NavLink} to='/placeholder'>
              Sign In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
