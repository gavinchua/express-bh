import React from 'react';
import { CustomInput } from 'reactstrap';

const renderCheckbox = ({input, ...rest}) => (
  <div className="custom-checkbox custom-control">
    <CustomInput
      {...input}
      {...rest}
    />
  </div>
);

export default renderCheckbox;
