import React from 'react';
import { Link } from 'react-scroll';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css'; 

const AppNavbar = () => (
  <Navbar className="navbar-custom" expand="lg">
    <Navbar.Brand href="#home">Mario</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link as={Link} to="home" smooth={true} duration={500}>Home</Nav.Link>
        <Nav.Link as={Link} to="about" smooth={true} duration={500}>About</Nav.Link>
        <Nav.Link as={Link} to="projects" smooth={true} duration={500}>Projects</Nav.Link>
        <Nav.Link as={Link} to="contact" smooth={true} duration={500}>Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default AppNavbar;
