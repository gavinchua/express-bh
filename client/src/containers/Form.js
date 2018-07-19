import React, { Component } from 'react';

import WizardForm from '../components/form/WizardForm';
import showResults from '../components/form/showResults';

export default class Form extends Component {
  render() {
    return (
      <main role="main">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <WizardForm onSubmit={showResults} />
            </div>
          </div>
        </div>
      </main>
    );
  };
};