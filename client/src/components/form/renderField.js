import React from 'react';
import { FormGroup, Label, CustomInput } from 'reactstrap';

const renderField = ({ labelfor, input, label, type, meta: { touched, error } }) => (
  <FormGroup>
    <Label htmlFor={labelfor}>
      {label}
      <small className="required">*</small>
    </Label>
    <CustomInput
      id={labelfor}
      className={
        `form-control ${touched && error && "is-invalid"}`
      }
      {...input}
      placeholder={label}
      type={type}
    />
    {touched &&
      error &&
      <span className="invalid-feedback">{error}</span>
    }
  </FormGroup>
);

export default renderField;
