import React from "react";
import Wine from './Wine';
import { Link } from "react-router-dom";

import {
  Card,
  Container,
  Button,
  Badge
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
        <Container className="mt-5">
          <div className="row">
            {wines.map(wine =>
              <div className="col-12 col-sm-3 mb-2" key={wine.id}>
                <Wine wine={wine} />
              </div>
            )}
          </div>
        </Container>
      </>
    );
  }
}

export default WhiteWine;