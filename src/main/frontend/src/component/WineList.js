import React from "react";

import {
  Container,
  Card,
  Button,
  Badge
} from "react-bootstrap";

class Nav extends React.Component {
  render() {
    return (
      <>
        <Container className="mt-5">
          <Card style={{ width: '18rem' }}>
            <Badge bg="secondary">2016</Badge>
            <Card.Img variant="top" src="coto_de_imaz.jpeg" />
            <Card.Body>
              <Card.Title>Coto De Imaz</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Tempranillo</Card.Subtitle>
              <Card.Text>
                Rioja, Spain
                <p className="mt-2">15,99 €</p>
              </Card.Text>
              <Button variant="outline-dark">Hinzufügen</Button>
            </Card.Body>
          </Card>
        </Container>
      </>
    );
  }
}

export default Nav;