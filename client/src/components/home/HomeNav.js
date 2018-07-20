import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Data
import RestaurantsArrayData from "../../data/restaurantsArray.json";

export default class HomeNav extends Component {
  createHomeNav = () => {
    let HomeNav = [];

    const RestaurantArrayNavItems = RestaurantsArrayData.map(
      obj => ({
        navName: obj.navname,
        navLink: obj.pagename
      })
    )

    RestaurantArrayNavItems.forEach(
      (RestaurantArrayNavItem, index) => {
        const navName = RestaurantArrayNavItem.navName;
        const navLink = RestaurantArrayNavItem.navLink;
        HomeNav.push(
          <li key={index}>
            <Link to={navLink}>
              {navName}
            </Link>
          </li>
        )
      }
    );
    return HomeNav;
  }

  render() {
    return (
      <nav className="home-nav">
        <ul>
          {this.createHomeNav()}
        </ul>
      </nav>
    )
  };
};
