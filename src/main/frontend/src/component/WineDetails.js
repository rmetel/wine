import React from "react";
import { NavLink, useParams } from "react-router-dom";

import {
  Container,
} from "react-bootstrap";

function GetWineById() {
    const {wineId} = useParams();
    return (
      <WineDetails wineId={wineId} />
    );
}

class WineDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {wine: []};
  }

  componentDidMount() {
    let isLocal = window.location.href.indexOf("localhost") > -1;
    let urlLocal = "http://localhost:8080";
    let endPoint = "/wine/" + this.props.wineId;

    fetch(isLocal? urlLocal + endPoint : endPoint)
      .then(response => response.json())
      .then(data => this.setState({wine: data}));
  }

  render() {
    const {wine} = this.state;
    return (
      <>
        <Container className="mt-5 wineDetails">
          <div className="row d-flex justify-content-center">
            <div className="col-md-10 mb-3">
              <NavLink to="/" className="text-dark"><i className="bi-arrow-left"></i>&nbsp;Zurück</NavLink>
            </div>
            <div className="col-md-10">
              <div className="card mb-4">
                <div className="row">
                  <div className="col-md-6">
                    <div className="images p-3">
                      <div className="text-center p-4">
                        <img id="main-image" src="/coto_de_imaz.jpeg" width="250" alt="wine bottle" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="product p-4">
                      <h5 className="text-uppercase">{wine.name} {wine.year}</h5>
                      <div className="mb-3">
                        <span className="text-muted brand">{wine.grape}</span><br/>
                        <span className="text-muted brand">{wine.region}, {wine.country}</span>
                      </div>
                      <h5 className="">Weinbeschreibung</h5>
                      <p className="about">
                        Der tief granatrote Wein bietet alles, was man von einem {wine.region} Wein erwartet.
                        Zu der intensiven Frucht von roten und schwarzen Früchten gesellen sich Noten von Wachs,
                        Tabak, Leder und Kirschen in Likör, eine rauchige Würze, Süßholz und Pfeffer.
                      </p>
                      <div className="cart mt-4 align-items-center">
                        <button className="btn btn-outline-dark text-uppercase mr-2 px-4">In den Warenkorb</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </>
    );
  }
}

export default GetWineById;