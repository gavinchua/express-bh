import React from 'react';

import WizardForm from '../components/form/WizardForm';
import showResults from '../components/form/showResults';

const Form = (props) => {
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

export default Form;