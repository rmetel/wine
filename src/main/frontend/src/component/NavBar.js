import React from "react";
import { NavLink } from "react-router-dom";

import {
  Navbar,
  Container
} from "react-bootstrap";

class Nav extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">WINE</Navbar.Brand>
            <NavLink className="nav-link text-white" to="/cart">Warenkorb</NavLink>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default Nav;