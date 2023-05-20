import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, useLocation } from 'react-router-dom'

const HomeNavbar = () => {

  const location = useLocation();

    return <>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Codeshare</Navbar.Brand>
          
          {/* showing login and registration button only on home page */}
          {location.pathname === '/' && (
            <Nav className="d-flex">
            <Nav.Link as={Link} to="/register">Register</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          </Nav>
          )}

        </Container>
      </Navbar>
    </>
}

export default HomeNavbar