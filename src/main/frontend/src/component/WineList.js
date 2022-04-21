import React from "react";
//import reactStringReplace from 'react-string-replace';
import { Link } from "react-router-dom";

import {
  Badge,
  Button,
  Card,
  Container,
  DropdownButton,
  Dropdown,
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
          <div className="row">
            <div className="col-12 col-sm-12 mb-4 d-flex flex-row-reverse">
              <DropdownButton id="dropdown-basic-button" title="Länder" variant="secondary">
                {countries.map(country => <Dropdown.Item key={country.id}>{country.name}</Dropdown.Item>)}
              </DropdownButton>
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
                    <Button variant="outline-dark">Hinzufügen</Button>
                  </Card.Body>
                </Card>
              </div>
            )}
          </div>
        </Container>
      </>
    );
  }
}

export default WineList;