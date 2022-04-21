import React from "react";
import Wine from './Wine';

import {
  Alert,
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
                <Wine wine={wine} />
              </div>
            )}
          </div>
        </Container>
      </>
    );
  }
}

export default WineList;