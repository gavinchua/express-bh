import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, FormGroup } from 'reactstrap';

import validate from './validate';
import renderField from './renderField';

const WizardFormFirstPage = props => {
  const { handleSubmit } = props;

  return (
    <Form onSubmit={handleSubmit}>
      <Field
        name="firstName"
        labelfor="firstname"
        type="text"
        component={renderField}
        label="First Name"
      />
      <Field
        name="lastName"
        labelfor="lastname"
        type="text"
        component={renderField}
        label="Last Name"
      />
      <FormGroup>
        <button type="submit" className="btn btn-primary next">
          Next
        </button>
      </FormGroup>
    </Form>
  );
};

export default reduxForm({
  form: 'wizard', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormFirstPage);
