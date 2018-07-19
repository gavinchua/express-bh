import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, FormGroup, Label } from 'reactstrap';

import validate from './validate';
import renderField from './renderField';
import renderRadioGroup from './renderRadioGroup';

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span className="invalid-feedback">{error}</span> : false;

const WizardFormSecondPage = props => {
  const { handleSubmit, previousPage } = props;

  return (
    <Form onSubmit={handleSubmit}>
      <Field
        name="email"
        labelfor="email"
        type="email"
        component={renderField}
        label="Email"
      />
      <FormGroup>
        <Label>
          Sex
        </Label>
        <div className="form-check">
          <Field
            id="male"
            name="sex"
            component={renderRadioGroup}
            type="radio"
            value="male"
            label="Male"
          >
          </Field>
          <Field
            id="female"
            name="sex"
            component={renderRadioGroup}
            type="radio"
            value="female"
            label="Female"
          >
          </Field>
        </div>
        <Field name="sex" component={renderError} />
      </FormGroup>
      <FormGroup>
        <button type="button" className="btn btn-primary previous" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" className="btn btn-primary next">
          Next
        </button>
      </FormGroup>
    </Form>
  );
};

export default reduxForm({
  form: 'wizard', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormSecondPage);
