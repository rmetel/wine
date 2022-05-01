import React from "react";
import { NavLink } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container
} from "react-bootstrap";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {cartItems: []};
  }

  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark" className="fixed-top">
          <Container>
            <Navbar.Brand href="/">WINE</Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <NavLink className="nav-link text-white" to="/category/red">Rotweine</NavLink>
                <NavLink className="nav-link text-white" to="/category/white">Weißweine</NavLink>
              </Nav>
            </Navbar.Collapse>
            <NavLink className="nav-link text-white" to="/cart"><i className="bi-cart3 text-white"></i>&nbsp;({this.props.countItems})</NavLink>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default NavBar;