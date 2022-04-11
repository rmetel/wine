import React from "react";

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
            <Navbar.Brand href="#home">
              WINE
            </Navbar.Brand>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default Nav;