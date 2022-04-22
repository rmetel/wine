import React from "react";
import { NavLink } from "react-router-dom";
import {
  Container,
  Button
} from "react-bootstrap";

class MiniCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {cartItems: []};
  }

  componentDidMount() {
    let isLocal = window.location.href.indexOf("localhost") > -1;
    let urlLocal = "http://localhost:8080";
    let endPoint = "/cart/all";

    fetch(isLocal? urlLocal + endPoint : endPoint)
      .then(response => response.json())
      .then(data => this.setState({cartItems: data}));
  }

  render() {
    const {cartItems} = this.state;
    return (
      <>
        <NavLink className="nav-link text-white" to="/cart"><i className="bi-cart3 text-white"></i>&nbsp;({cartItems.length})</NavLink>
      </>
    );
  }
}

export default MiniCart;