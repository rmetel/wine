import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NavBar from './component/NavBar';
import WineList from './component/WineList';
import WineDetails from './component/WineDetails';
import RedWine from './component/RedWine';
import WhiteWine from './component/WhiteWine';
import Cart from './component/Cart';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
    this.deleteFromCart = this.deleteFromCart.bind(this);
    this.updateCart = this.updateCart.bind(this);
    this.state = {cartItems: []};
  }

  componentDidMount() {
    this.updateCart();
  }

  updateCart() {
    let isLocal = window.location.href.indexOf("localhost") > -1;
    let urlLocal = "http://localhost:8080";
    let endPoint = "/cart/all";

    fetch(isLocal? urlLocal + endPoint : endPoint)
      .then(response => response.json())
      .then(data => this.setState({cartItems: data}));
  }

  addToCart(cartItem) {
    const updateCart = this.updateCart;
    let isLocal = window.location.href.indexOf("localhost") > -1;
    let urlLocal = "http://localhost:8080";
    let endPoint = "/cart/add";
    const axios = require('axios');

    var alertBox = document.querySelector("[role=alert]");

    let params = {
      wineId: `${cartItem.id}`,
      amount: document.getElementById(`select-amount-${cartItem.id}`).selectedOptions[0].value
    };

    axios.post(isLocal? urlLocal + endPoint : endPoint, params)
      .then(function (response) {
        if(response.status === 200) {
          alertBox.innerHTML = `${cartItem.name} ${cartItem.year} wurde in den Warenkorb gelegt!`;
          alertBox.classList.remove("d-none");
          window.setTimeout(function() {
            alertBox.classList.add("d-none");
          }, 2000);

          updateCart();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    /*this.setState({cartItems: []});*/
  }

  deleteFromCart(cartItem) {
    const updateCart = this.updateCart;
    let isLocal = window.location.href.indexOf("localhost") > -1;
    let urlLocal = "http://localhost:8080";
    let endPoint = "/cart/delete/" + cartItem.id;
    const axios = require('axios');

    var alertBox = document.querySelector("[role=alert]");

    axios.get(isLocal? urlLocal + endPoint : endPoint)
      .then(function (response) {
        if(response.status === 200) {
          alertBox.innerHTML = `${cartItem.wine.name} ${cartItem.wine.year} wurde aus dem Warenkorb entfernt!`;
          alertBox.classList.remove("d-none");
          window.setTimeout(function() {
            alertBox.classList.add("d-none");
          }, 2000);

          updateCart();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const {cartItems} = this.state;
    return (
      <div className="App">
        <Router>
          <NavBar countItems={cartItems.length} />
          <Routes>
            <Route path="/" element={<WineList addToCart={this.addToCart} />}/>
            <Route path="/cart" element={<Cart cartItems={cartItems} deleteFromCart={this.deleteFromCart} />}/>
            <Route path="/wine/:wineId" element={<WineDetails/>} />
            <Route path="/category/red" element={<RedWine addToCart={this.addToCart} />} />
            <Route path="/category/white" element={<WhiteWine addToCart={this.addToCart} />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
