import React from 'react';
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import './Header.css'
import { Link } from 'react-router-dom';
import { selectCurrentUser } from '../redux/user/userSelector';


export default function Header() {
  
   const { currentUser } = useSelector(
     createStructuredSelector({
       currentUser: selectCurrentUser,
     })
   );
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ backgroundColor: "#232a33" }}
        bg="dark"
        variant="dark"
      >
        <Link to="/">
          <Navbar.Brand>DSF</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link to={currentUser ? "/blogpost" : "/login"} className="nav-link">
              Blog
            </Link>
            <NavDropdown title="About Us" id="collasible-nav-dropdown">
              <Link className="dropdown-item" to="/about-us/history">
                History
              </Link>
              <Link className="dropdown-item" to="/about-us/stakeholder">
                Stakeholder
              </Link>
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
            <Link to="/login" className="nav-link">
              Login
            </Link>
            <Link to="/register" className="nav-link">
              Register
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
