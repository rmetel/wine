import React from "react";
import { NavLink } from "react-router-dom";

import {
  Navbar,
  Nav,
  Container
} from "react-bootstrap";

class Navi extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">WINE</Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <NavLink className="nav-link text-white" to="/category/red">Rotweine</NavLink>
                <NavLink className="nav-link text-white" to="/category/white">Weißweine</NavLink>
              </Nav>
            </Navbar.Collapse>
            <NavLink className="nav-link text-white" to="/cart"><i className="bi-cart3 text-white"></i></NavLink>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default Navi;