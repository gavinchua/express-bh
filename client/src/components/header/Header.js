import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import TiPhone from 'react-icons/lib/ti/phone';

import HeaderNav from "./HeaderNav";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <header>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Navbar color="light" light expand="md">
                <NavbarBrand tag={RRNavLink} to="/">
                  Logo
                </NavbarBrand>
                <Nav>
                  <NavItem>
                    <NavLink tag={RRNavLink} to="/Form">
                      <TiPhone />
                    </NavLink>
                  </NavItem>
                </Nav>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink tag={RRNavLink} to="/" onClick={this.toggle}>
                        Home
                      </NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        Restaurants
                      </DropdownToggle>
                      <HeaderNav />
                    </UncontrolledDropdown>
                  </Nav>
                </Collapse>
              </Navbar>
            </div>
          </div>
        </div>
      </header>
    );
  };
};
