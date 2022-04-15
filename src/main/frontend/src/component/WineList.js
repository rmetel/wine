import React from "react";
import reactStringReplace from 'react-string-replace';
import { Link } from "react-router-dom";

import {
  Card,
  Container,
  Button,
  Badge
} from "react-bootstrap";

class WineList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {wines: []};
  }

  componentDidMount() {
    let isLocal = window.location.href.indexOf("localhost") > -1;
    let urlLocal = "http://localhost:8080";
    let endPoint = "/wine/all";

    fetch(isLocal? urlLocal + endPoint : endPoint)
      .then(response => response.json())
      .then(data => this.setState({wines: data}));
  }

  render() {
    const {wines} = this.state;
    return (
      <>
        <Container className="mt-5">
          <div className="row">
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