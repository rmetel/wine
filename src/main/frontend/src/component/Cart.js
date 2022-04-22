import React from "react";

import {
  Alert,
  Container,
  Button
} from "react-bootstrap";

class Cart extends React.Component {
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
        <Container className="mt-5">
          <div className="row">
            <div className="col-12 col-sm-12">
              <h1>Warenkorb {cartItems.length === 0 ? " ist leer" : `(${cartItems.length})` }</h1>
              <Alert variant="info" className="d-none"></Alert>
              <ul className="list-group my-5">
                {cartItems.map(cartItem =>
                  <li key={cartItem.id} className="list-group-item">
                    <div className="row">
                      <div className="col-6 col-md-1">
                        <img src="/thumbnail.png" alt="thumbnail" />
                      </div>
                      <div className="col-6 col-11">
                        <div className="row">
                          <div className="col-12 col-md-3 py-sm-4">{cartItem.wine.name} {cartItem.wine.year}</div>
                          <div className="col-12 col-md-3 py-sm-4">{cartItem.wine.grape}</div>
                          <div className="col-12 col-md-2 py-sm-4">{cartItem.amount} x {cartItem.wine.price} &euro;</div>
                          <div className="col-12 col-md-1 py-sm-4">{cartItem.wine.price * cartItem.amount} &euro;</div>
                          <div className="col-12 col-md-3 py-sm-4"><Button variant="outline-dark" className="w-100" onClick={() => { this.deleteFromCart(cartItem) }}>Entfernen</Button></div>
                        </div>
                      </div>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </Container>
      </>
    );
  }

  deleteFromCart(cartItem) {
    let isLocal = window.location.href.indexOf("localhost") > -1;
    let urlLocal = "http://localhost:8080";
    let endPoint = "/cart/delete/" + cartItem.id;
    const axios = require('axios');

    var alertBox = document.querySelector("[role=alert]");

    /*fetch(isLocal? urlLocal + endPoint : endPoint)
          .then(response => response.json());*/

    axios.get(isLocal? urlLocal + endPoint : endPoint)
      .then(function (response) {
        if(response.status === 200) {
          alertBox.innerHTML = `${cartItem.wine.name} ${cartItem.wine.year} wurde aus dem Warenkorb entfernt!`;
          alertBox.classList.remove("d-none");
          window.setTimeout(function() {
            alertBox.classList.add("d-none");
          }, 2000);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

export default Cart;