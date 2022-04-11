import React from "react";
import reactStringReplace from 'react-string-replace';

import {
  Card,
  Button,
  Badge
} from "react-bootstrap";

class WineList extends React.Component {
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
        <div className="row mt-5">
          {wines.map(wine =>
            <div className="col-12 col-sm-3 mb-2" key={wine.id}>
              <Card>
                <Badge bg="secondary">{wine.year}</Badge>
                <Card.Img variant="top" src="coto_de_imaz.jpeg" />
                <Card.Body>
                  <Card.Title>{wine.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{wine.grape}</Card.Subtitle>
                  <Card.Text>
                    {wine.region}, {wine.country}
                    <p className="mt-2">{wine.price} €</p>
                  </Card.Text>
                  <Button variant="outline-dark">Hinzufügen</Button>
                </Card.Body>
              </Card>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default WineList;