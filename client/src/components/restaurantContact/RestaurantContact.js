import React from "react";
import RestaurantMap from "./Map";

const RestaurantContact = (props) => {
  const {
    restaurant,
    address,
    postalcode,
    businesshours,
    contact,
    mailto,
    email,
    directions,
    lat,
    lng,
    zoom
  } = props;

  return (
    <div>
      <div>{restaurant}</div>
      <address>
        <h4 className="margin-top-10">Address</h4>
        <p className="prewrap">
          {address}
          <br />
          Singapore {postalcode}
        </p>
        <h4 className="margin-top-10">Business Hours</h4>
        <p className="prewrap">{businesshours}</p>
        <h4 className="margin-top-10">Contact</h4>
        <p className="prewrap">
          Wedding Package:
          <br />
          {contact}
          <br />
          <a href={mailto}>{email}</a>
        </p>
        <h4 className="margin-top-10">Directions</h4>
        <p className="prewrap">{directions}</p>
        <RestaurantMap
          lat={lat}
          lng={lng}
          zoom={zoom}
          address={address}
          postalcode={postalcode}
          restaurant={restaurant}
        />
      </address>
    </div>
  );
};

export default RestaurantContact;
