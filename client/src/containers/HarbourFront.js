import React, { Component } from "react";

// Components
import RestaurantCarousel from "../components/carousel/Carousel";
import RestaurantContact from "../components/restaurantContact/RestaurantContact";

// Data
import RestaurantsArrayData from "../data/restaurantsArray.json";

const pagename = "harbourfront";

export default class HabourFront extends Component {
  render() {
    const RestaurantArrayData = RestaurantsArrayData.filter(
      e => e.pagename === pagename
    );

    const {
      name,
      address,
      postalcode,
      businesshours,
      contact,
      email,
      directions
    } = RestaurantArrayData[0];

    const myslides = RestaurantArrayData.map(restaurant => restaurant.myslides);

    const mailto = `mailto:${email}`;

    const lat = Number(
      RestaurantArrayData.map(restaurant => restaurant.latlng.lat)
    );

    const lng = Number(
      RestaurantArrayData.map(restaurant => restaurant.latlng.lng)
    );

    const zoom = parseInt(
      RestaurantArrayData.map(restaurant => restaurant.zoom), 10
    );

    return (
      <main role="main">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <RestaurantCarousel myslides={myslides[0]} />
              <RestaurantContact
                restaurant={name}
                address={address}
                postalcode={postalcode}
                businesshours={businesshours}
                contact={contact}
                email={email}
                mailto={mailto}
                directions={directions}
                lat={lat}
                lng={lng}
                zoom={zoom}
              />
            </div>
          </div>
        </div>
      </main>
    );
  };
};
