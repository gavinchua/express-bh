import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

// Import from components
import Header from './header/Header';
import Footer from './footer/Footer';

// Import from containers
import Home from '../containers/Home';
import Form from '../containers/Form';
import HarbourFront from '../containers/HarbourFront';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/harbourfront" component={HarbourFront} />
          <Route path="/form" component={Form} />
          <Footer />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
