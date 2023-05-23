import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, useLocation } from 'react-router-dom'
import { NavDropdown } from 'react-bootstrap';

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

          {location.pathname === '/codes' && (
            <Nav className="d-flex">
              <NavDropdown title="Ayush Kumar Gupta" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/codes">New Codeshare</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/codes">Account Settings</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/codes">Log Out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          )}

          {location.pathname === '/new' && (
            <Nav className="d-flex">
            <Nav.Link as={Link} to="/login">Save</Nav.Link>
          </Nav>
          )}

        </Container>
      </Navbar>
    </>
}

export default HomeNavbar