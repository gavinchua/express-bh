import React, { Component } from 'react';
import {
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

// Data
import RestaurantsArrayData from "../../data/restaurantsArray.json";

export default class HeaderNav extends Component {
  createHeaderNav = () => {
    let HeaderNav = [];

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
        HeaderNav.push(
          <DropdownItem
            key={index}
            tag={RRNavLink}
            to={navLink}
            onClick={this.toggle}
          >
            @{navName}
          </DropdownItem>
        )
      }
    );
    return HeaderNav;
  }

  render() {
    return (
      <DropdownMenu right>
        {this.createHeaderNav()}
      </DropdownMenu>
    );
  };
};
