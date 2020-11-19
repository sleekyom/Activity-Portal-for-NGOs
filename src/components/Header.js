import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Header.css";
import { Link } from "react-router-dom";
import { selectCurrentUser } from "../redux/user/userSelector";
import { signOutStart } from "../redux/user/userActions";

export default function Header({ setCurrentLink }) {
  const { currentUser } = useSelector(
    createStructuredSelector({
      currentUser: selectCurrentUser,
    })
  );

  const dispatch = useDispatch();
  const signOut = () => dispatch(signOutStart());

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
            <Link to="/blogpost" className="nav-link">
              Blog
            </Link>
            <NavDropdown title="About Us" id="collasible-nav-dropdown">
              <Link className="dropdown-item" to="/about-us/history">
                History
              </Link>
              <Link className="dropdown-item" to="/about-us/stakeholders">
                Stakeholder
              </Link>
            </NavDropdown>
            <NavDropdown title="Projects" id="collasible-nav-dropdown">
              <Link className="dropdown-item" to="/projects/past-projects">
                Past Projects
              </Link>
              <Link className="dropdown-item" to="/projects/ongoing-projects">
                Ongoing Projects
              </Link>
              <Link className="dropdown-item" to="/projects/upcoming-projects">
                Up Coming Projects
              </Link>
            </NavDropdown>
            <Link className="nav-link" to="/contactus">
              Contact Us
            </Link>
            <Link
              className="nav-link"
              to="/donation"
              onClick={() => setCurrentLink("/donation")}
            >
              Donation
            </Link>
            <Link
              to={"/suggestionform"}
              className="nav-link"
              onClick={() => setCurrentLink("/suggestionform")}
            >
              Suggestion
            </Link>
          </Nav>
          <Nav>
            {currentUser ? (
              <Link to="/" className="nav-link" onClick={signOut}>
                Logout
              </Link>
            ) : (
              <>
                {" "}
                <Link to="/login" className="nav-link">
                  Login
                </Link>
                {/* <Link to="/register" className="nav-link">
                  Register
                </Link> */}
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
