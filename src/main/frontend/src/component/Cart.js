import React from "react";

import {
  Card,
  Container,
  Button,
  Badge
} from "react-bootstrap";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {wines: []};
  }

  componentDidMount() {
    fetch('http://localhost:8080/wine/all')
      .then(response => response.json())
      .then(data => this.setState({wines: data}));
  }

  render() {
    const {wines} = this.state;
    return (
      <>
        <Container className="mt-5">
          <div className="row">
            <div className="col-12 col-sm-3">
              Cart
            </div>
          </div>
        </Container>
      </>
    );
  }
}

export default Cart;