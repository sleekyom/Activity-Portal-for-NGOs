import React from 'react';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import './Header.css'

export default function Header() {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ backgroundColor: "#232a33" }}
        bg="dark"
        variant="dark"
      >
        <Navbar.Brand href="#home">DSF</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Blog</Nav.Link>
            <NavDropdown title="About Us" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">History</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Stakeholder
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Projects" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Past Projects
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Ongoing Projects
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Future Projects
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action/3.3">Contact Us</Nav.Link>
            <Nav.Link href="#action/3.3">Donation</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Login</Nav.Link>
            <Nav.Link href="#deets">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
