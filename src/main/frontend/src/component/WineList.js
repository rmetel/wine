import React from "react";
//import reactStringReplace from 'react-string-replace';
import { Link } from "react-router-dom";

import {
  Alert,
  Badge,
  Button,
  Card,
  Container,
  Form
} from "react-bootstrap";

class WineList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {wines: [], countries: []};
  }

  componentDidMount() {
    let isLocal = window.location.href.indexOf("localhost") > -1;
    let urlLocal = "http://localhost:8080";
    let endPointWines = "/wine/all";
    let endPointCountries = "/country/all";

    fetch(isLocal? urlLocal + endPointWines : endPointWines)
      .then(response => response.json())
      .then(data => this.setState({wines: data}));

    fetch(isLocal? urlLocal + endPointCountries : endPointCountries)
      .then(response => response.json())
      .then(data => this.setState({countries: data}));
  }

  render() {
    const {wines} = this.state;
    const {countries} = this.state;
    return (
      <>
        <Container className="mt-5">
          <Alert variant="success" className="d-none"></Alert>
          <div className="row">
            <div className="col-12 col-sm-12 mb-4 d-flex flex-row-reverse">
              <Form>
                <Form.Select aria-label="Default select example">
                  <option>Alle Länder</option>
                  {countries.map(country => <option key={country.id} value={country.id}>{country.name}</option>)}
                </Form.Select>
              </Form>
            </div>

            {wines.map(wine =>
              <div className="col-12 col-sm-3 mb-2" key={wine.id}>
                <Card>
                  <Badge bg="secondary">{wine.year}</Badge>
                  <Link to={`/wine/${wine.id}`}><Card.Img variant="top" src="coto_de_imaz.jpeg" /></Link>
                  <Card.Body className="text-center">
                    <Card.Title>{wine.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{wine.grape}</Card.Subtitle>
                    <Card.Text>
                      {wine.region}, {wine.country}
                    </Card.Text>
                    <Card.Text className="mt-2">{wine.price} €</Card.Text>
                    <div className="row">
                      <div className="col-12 col-sm-12 col-xl-4 mb-2 mb-xs-0 mb-sm-2 md-xl-0">
                        <Form.Select aria-label="Default select example">
                          <option value="1" selected>1</option>
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
            )}
          </div>
        </Container>
      </>
    );
  }

  addToCart(wine) {
    var alertBox = document.querySelector("[role=alert]");
    alertBox.innerHTML = `${wine.name} ${wine.year} wurde in den Warenkorb gelegt!`;
    alertBox.classList.remove("d-none");
    window.setTimeout(function() {
      alertBox.classList.add("d-none");
    }, 2000);
  }
}

export default WineList;