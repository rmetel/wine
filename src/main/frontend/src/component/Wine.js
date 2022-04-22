import React from "react";
import { Link } from "react-router-dom";
import {
  Alert,
  Badge,
  Button,
  Card,
  Form
} from "react-bootstrap";
//import reactStringReplace from 'react-string-replace';

class Wine extends React.Component {
  render() {
    const {wine} = this.props;
    return (
      <>
        <div className="col-12 col-sm-3 mb-2">
          <Card>
            <Badge bg="secondary">{wine.year}</Badge>
            <Badge bg={wine.category.id === 1 ? "danger" : "warning"}>{wine.category.name}</Badge>
            <Link to={`/wine/${wine.id}`}><Card.Img variant="top" src="/coto_de_imaz.jpeg" /></Link>
            <Card.Body className="text-center">
              <Card.Title>{wine.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{wine.grape}</Card.Subtitle>
              <Card.Text>
                {wine.region.name} / {wine.country.name}
              </Card.Text>
              <Card.Text className="mt-2">{wine.price} €</Card.Text>
              <div className="row">
                <div className="col-12 col-sm-12 col-xl-4 mb-2 mb-xs-0 mb-sm-2 md-xl-0">
                  <Form.Select aria-label="Menge" defaultValue={'1'} id={`select-amount-${wine.id}`}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </Form.Select>
                </div>
                <div className="col-12 col-sm-12 col-xl-8 mb-2 mb-xs-0 mb-sm-2 md-xl-0">
                  <Button variant="outline-dark" className="w-100" onClick={() => { this.addToCart(wine) } }>Hinzufügen</Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </>
    );
  }

  addToCart(wine) {
    let isLocal = window.location.href.indexOf("localhost") > -1;
    let urlLocal = "http://localhost:8080";
    let endPoint = "/cart/add";
    const axios = require('axios');

    var alertBox = document.querySelector("[role=alert]");

    let params = {
      wineId: `${wine.id}`,
      amount: document.getElementById(`select-amount-${wine.id}`).selectedOptions[0].value
    };

    axios.post(isLocal? urlLocal + endPoint : endPoint, params)
      .then(function (response) {
        if(response.status === 200) {
          alertBox.innerHTML = `${wine.name} ${wine.year} wurde in den Warenkorb gelegt!`;
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

export default Wine;