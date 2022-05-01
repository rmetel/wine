import React from "react";
import Wine from './Wine';

import {
  Alert,
  Container
} from "react-bootstrap";

class WhiteWine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {wines: []};
  }

  componentDidMount() {
    let isLocal = window.location.href.indexOf("localhost") > -1;
    let urlLocal = "http://localhost:8080";
    let endPoint = "/category/white";

    fetch(isLocal? urlLocal + endPoint : endPoint)
      .then(response => response.json())
      .then(data => this.setState({wines: data}));
  }

  render() {
    const {wines} = this.state;
    return (
      <>
        <div className="stage w-100">
          <img src="/white-grapes.png" className="w-100" alt="red"/>
        </div>
        <Container className="mt-4">
          <Alert variant="success" className="d-none"></Alert>
          <div className="row">
            <div className="col-12">
              <div className="category">
                <h2>Weißweine</h2>
              </div>
            </div>
            {wines.map(wine =>
              <Wine key={wine.id} wine={wine} addToCart={this.props.addToCart} />
            )}
          </div>
        </Container>
      </>
    );
  }
}

export default WhiteWine;