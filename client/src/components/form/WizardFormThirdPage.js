import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, FormGroup, Label } from 'reactstrap';

import validate from './validate';
import renderCheckbox from './renderCheckbox';

const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];

const renderColorSelector = ({ input, meta: { touched, error } }) => (
  <div>
    <select {...input}>
      <option value="">Select a color...</option>
      {colors.map(val => (
        <option value={val} key={val}>
          {val}
        </option>
      ))}
    </select>
    {touched && error && <span className="invalid-feedback">{error}</span>}
  </div>
);

const WizardFormThirdPage = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props;

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <label>Favorite Color</label>
        <Field name="favoriteColor" component={renderColorSelector} />
      </FormGroup>
      <FormGroup>
        <Field
          id="employed"
          name="employed"
          component={renderCheckbox}
          type="checkbox"
          value="employed"
          label="Employed"
        />
      </FormGroup>
      <FormGroup>
        <label>Notes</label>
        <div>
          <Field name="notes" component="textarea" placeholder="Notes" />
        </div>
      </FormGroup>
      <FormGroup>
        <button type="button" className="btn btn-primary previous" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" className="btn btn-primary" disabled={pristine || submitting}>
          Submit
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
})(WizardFormThirdPage);
