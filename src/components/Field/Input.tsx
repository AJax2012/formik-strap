import { FieldInputProps, FormikProps, FormikValues } from 'formik';
import React from 'react';
import {
  Input as ReactstrapInput,
  InputProps as ReactstrapInputProps,
} from 'reactstrap';

type InputProps = {
  field: Partial<FieldInputProps<string | number>>;
  form: FormikProps<FormikValues>;
  props?: ReactstrapInputProps;
};

const Input: React.FC<InputProps> = ({
  field,
  form: { touched, errors },
  props,
}) => (
  <ReactstrapInput
    invalid={!!touched[field.name as string] && !!errors[field.name as string]}
    {...field}
    {...props}
  />
);

export default Input;
