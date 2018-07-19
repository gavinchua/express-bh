import React from 'react';
import { CustomInput } from 'reactstrap';

const renderRadioGroup = ({input, ...rest}) => (
  <div className="form-check form-check-inline">
    <CustomInput
      {...input}
      {...rest}
    />
  </div>
);

export default renderRadioGroup;
