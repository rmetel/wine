import React from "react";
import Wine from './Wine';

import {
  Container
} from "react-bootstrap";

class RedWine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {wines: []};
  }

  componentDidMount() {
    let isLocal = window.location.href.indexOf("localhost") > -1;
    let urlLocal = "http://localhost:8080";
    let endPoint = "/category/red";

    fetch(isLocal? urlLocal + endPoint : endPoint)
      .then(response => response.json())
      .then(data => this.setState({wines: data}));
  }

  render() {
    const {wines} = this.state;
    return (
      <>
        <div className="stage w-100">
          <img src="/red-grapes.png" className="w-100" alt="red"/>
        </div>
        <Container className="mt-4">
          <div className="row">
            <div className="col-12">
              <div className="category">
                <h2 className="category">Rotweine</h2>
              </div>
            </div>
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

export default RedWine;